from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import re


# ==========================================
# LOAD TRAINED ML MODEL
# ==========================================

model = joblib.load("spam_model.pkl")
tfidf = joblib.load("tfidf_vectorizer.pkl")


# ==========================================
# CREATE FASTAPI APP
# ==========================================

app = FastAPI(
    title="ScamShield API",
    description="AI-powered scam detection backend",
    version="1.0"
)


# ==========================================
# CORS
# Allows your teammate's UI to call the API
# ==========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================
# REQUEST FORMAT
# ==========================================

class MessageRequest(BaseModel):
    message: str


# ==========================================
# TEXT CLEANING
# ==========================================

def clean_text(text):

    text = str(text).lower()

    # Remove URLs for ML processing
    text = re.sub(r'http\S+|www\.\S+', '', text)

    # Remove special characters
    text = re.sub(r'[^a-zA-Z\s]', '', text)

    # Remove extra spaces
    text = re.sub(r'\s+', ' ', text)

    return text.strip()


# ==========================================
# DETECT SCAM INDICATORS
# ==========================================

def detect_scam_indicators(message):

    message_lower = message.lower()

    indicators = []

    urgency_words = [
        "urgent",
        "immediately",
        "act now",
        "act fast",
        "last chance",
        "expires today",
        "within 24 hours"
    ]

    financial_words = [
        "bank",
        "account",
        "payment",
        "money",
        "upi",
        "refund",
        "transaction",
        "credit card",
        "debit card",
        "loan",
        "kyc"
    ]

    sensitive_words = [
        "otp",
        "password",
        "pin",
        "cvv",
        "verification code",
        "login"
    ]

    prize_words = [
        "winner",
        "won",
        "prize",
        "lottery",
        "cash prize",
        "reward",
        "free gift"
    ]

    # Urgency
    if any(word in message_lower for word in urgency_words):
        indicators.append(
            "Urgent or threatening language detected"
        )

    # Financial content
    if any(word in message_lower for word in financial_words):
        indicators.append(
            "Financial or banking-related content detected"
        )

    # Sensitive information
    if any(word in message_lower for word in sensitive_words):
        indicators.append(
            "Sensitive credential or OTP-related content detected"
        )

    # Prize/reward
    if any(word in message_lower for word in prize_words):
        indicators.append(
            "Prize or reward claim detected"
        )

    # Link
    if re.search(r'https?://|www\.', message_lower):
        indicators.append(
            "Link detected"
        )

    return indicators


# ==========================================
# CALCULATE RISK
# ==========================================

def calculate_risk(prediction, indicators):

    score = 0

    # ML prediction
    if prediction == 1:
        score += 50

    # Scam indicators
    score += min(len(indicators) * 10, 40)

    # Maximum = 100
    score = min(score, 100)

    if score >= 70:
        risk_level = "HIGH RISK"

    elif score >= 40:
        risk_level = "MEDIUM RISK"

    else:
        risk_level = "LOW RISK"

    return score, risk_level


# ==========================================
# SAFETY RECOMMENDATIONS
# ==========================================

def get_recommendations(indicators, risk_level):

    recommendations = []

    if risk_level in ["HIGH RISK", "MEDIUM RISK"]:

        recommendations.extend([
            "Do not click suspicious links",
            "Do not share OTP, PIN, password or CVV",
            "Verify the request through the organization's official website or app"
        ])

    # Financial warning
    if "Financial or banking-related content detected" in indicators:

        recommendations.append(
            "Contact your bank only through its official customer-care channel"
        )

    # Link warning
    if "Link detected" in indicators:

        recommendations.append(
            "Avoid opening the link directly"
        )

    # Low risk
    if risk_level == "LOW RISK":

        recommendations.append(
            "No major scam indicators were detected, but remain cautious"
        )

    return recommendations


# ==========================================
# HEALTH CHECK
# ==========================================

@app.get("/")
def home():

    return {
        "status": "success",
        "message": "ScamShield API is running"
    }


# ==========================================
# MAIN ANALYSIS API
# ==========================================

@app.post("/analyze")
def analyze(request: MessageRequest):

    message = request.message

    # Clean message
    cleaned_message = clean_text(message)

    # Convert text into TF-IDF
    vector = tfidf.transform([cleaned_message])

    # ML prediction
    prediction = model.predict(vector)[0]

    # Detect scam indicators
    indicators = detect_scam_indicators(message)

    # Calculate risk
    risk_score, risk_level = calculate_risk(
        prediction,
        indicators
    )

    # Get recommendations
    recommendations = get_recommendations(
        indicators,
        risk_level
    )

    # Return result to frontend
    return {
        "prediction": "SPAM" if prediction == 1 else "HAM",
        "risk_score": risk_score,
        "risk_level": risk_level,
        "indicators": indicators,
        "recommendations": recommendations
    }
