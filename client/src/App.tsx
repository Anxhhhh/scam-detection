import { useState, useRef, useCallback } from 'react'

// ── Icons (inline SVGs) ──────────────────────────────────────────────────────

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const ScreenshotIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="13" y2="14" />
  </svg>
)

const CallIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
    <path d="M14.5 1.5a8 8 0 0 1 8 8" />
    <path d="M14.5 5.5a4 4 0 0 1 4 4" />
  </svg>
)

const BankIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="22" x2="21" y2="22" />
    <line x1="6" y1="18" x2="6" y2="11" />
    <line x1="10" y1="18" x2="10" y2="11" />
    <line x1="14" y1="18" x2="14" y2="11" />
    <line x1="18" y1="18" x2="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </svg>
)

const AlertCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const LockIconLg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const ArrowLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const TranslateIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" />
    <path d="M2 5h12" /><path d="M7 2h1" />
    <path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
  </svg>
)

const CogIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

// ── Shared Verify Card ────────────────────────────────────────────────────────

const WarningTriangleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
)

const PhoneOffIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
    <line x1="23" y1="1" x2="1" y2="23" />
  </svg>
)

const BanIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
)

const LayersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const RotateIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <polyline points="3 3 3 8 8 8" />
  </svg>
)

const ShareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
)

interface VerifyCardProps {
  icon: React.ReactNode
  title: string
  description: string
  action?: string
  onClick?: () => void
}

const VerifyCard = ({ icon, title, description, action, onClick }: VerifyCardProps) => {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex flex-col items-start p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer w-full gap-3 ${
        hovered ? 'bg-[#2a2d38] border-[#4a4e5a] shadow-xl shadow-black/40' : 'bg-[#1c1f28] border-[#2e3140]'
      }`}
    >
      <div className="flex items-start justify-between w-full">
        <div className="text-gray-300">{icon}</div>
        <span className={`transition-colors duration-200 ${hovered ? 'text-white' : 'text-gray-500'}`}><ArrowRightIcon /></span>
      </div>
      <div>
        <h3 className="text-white font-semibold text-base mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      {action && (
        <div className={`flex items-center gap-2 text-sm font-semibold mt-auto pt-1 transition-colors duration-200 ${hovered ? 'text-white' : 'text-gray-300'}`}>
          {action} <ArrowRightIcon />
        </div>
      )}
    </button>
  )
}

// ── Shared Footer ─────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="border-t border-[#2e3140] px-6 md:px-12 py-8 mt-auto">
    <div className="max-w-[110rem] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      <div className="max-w-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-white"><ShieldIcon /></span>
          <p className="text-white font-bold text-base">ScamShield</p>
          <span className="text-gray-500 text-[10px] border border-[#2e3140] rounded px-1.5 py-0.5">National Helpline: 1930</span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          ScamShield — Public Service Digital Fraud Prevention.<br />
          National Cyber Crime Helpline: 1930. Always verify through official channels.
        </p>
      </div>
      <div className="flex flex-col gap-1.5 sm:text-right">
        <div className="flex flex-wrap gap-x-3 gap-y-1 sm:justify-end items-center">
          <a href="#" className="text-gray-400 text-xs hover:text-gray-200 transition-colors">National Cyber Crime Helpline (1930)</a>
          <span className="text-gray-600 text-xs">·</span>
          <a href="#" className="text-gray-400 text-xs hover:text-gray-200 transition-colors">Safety Guidelines</a>
          <span className="text-gray-600 text-xs">·</span>
          <a href="#" className="text-gray-400 text-xs hover:text-gray-200 transition-colors">Report Incident</a>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1 sm:justify-end items-center">
          <a href="#" className="text-gray-400 text-xs hover:text-gray-200 transition-colors">Privacy Policy</a>
          <span className="text-gray-600 text-xs">·</span>
          <a href="#" className="text-gray-400 text-xs hover:text-gray-200 transition-colors">Official Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
)

// ── HOME PAGE ─────────────────────────────────────────────────────────────────

const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <div className="flex flex-col flex-1">
    {/* Banner is inside main in new design, let's just render main */}
    <main className="flex-1 max-w-[110rem] w-full mx-auto px-6 md:px-12 lg:px-16 xl:px-24 pb-12 flex flex-col relative z-10">
        
        {/* ── Banner ── */}
        <div className="w-full bg-[#121214] border border-[#27272a] rounded-xl px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 mb-16">
          <div className="flex items-center gap-2.5 text-[13px]">
            <span className="text-gray-400"><LockIcon /></span>
            <span className="text-white font-medium">Cardinal Rule:</span>
            <span className="text-gray-400">Never share your OTP, UPI PIN, or bank passwords with anyone.</span>
          </div>
          <button className="text-[13px] text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium whitespace-nowrap">
            Official Safety Rules <ArrowRightIcon />
          </button>
        </div>

        {/* ── Hero Section ── */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 flex-1">
          
          {/* Left Content */}
          <div className="w-full lg:w-[55%] z-20">
            <div className="inline-flex items-center gap-2 border border-[#27272a] bg-[#121214]/50 rounded-full px-3 py-1 text-[11px] font-medium text-gray-400 mb-8 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Digital Fraud Safety Assistant
            </div>

            <h1 className="text-[3.5rem] md:text-[5rem] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="text-white">Not sure if it's a<br/>scam?</span><br/>
              <span className="text-gray-500">Check before you<br/>act.</span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Verify suspicious messages, screenshots, and phone calls in seconds before taking action.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button onClick={() => onNavigate('Check a Scam')} className="flex items-center gap-2 bg-white text-black font-semibold text-[15px] px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors">
                Check a suspicious message <ArrowRightIcon />
              </button>
              <button className="flex items-center gap-2 bg-transparent border border-[#27272a] text-gray-300 font-medium text-[15px] px-6 py-3.5 rounded-xl hover:bg-[#18181b] transition-colors">
                <AlertCircleIcon />
                I already lost money
              </button>
            </div>

            <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
              <LockIcon />
              Anonymous & free. No phone number or login required.
            </div>
          </div>

          {/* Right Graphic (Phone) */}
          <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-center relative pointer-events-none mt-10 lg:mt-0">
            <img 
              src="/images/ChatGPT_Image_Sep_15_2026_12_49_13_PM.png" 
              alt="Phone Mockup" 
              className="w-full max-w-lg lg:max-w-none lg:w-[130%] xl:w-[145%] h-auto object-contain drop-shadow-2xl lg:-mr-8 xl:-mr-16" 
            />
          </div>
        </section>

        {/* ── Verify Options (Bottom) ── */}
        <div className="mt-auto pt-20 border-t border-[#18181b] flex flex-col md:flex-row items-center justify-between gap-6 z-20">
          <p className="text-gray-300 font-semibold text-[15px]">What would you like to verify?</p>
          
          <div className="flex items-center gap-4 sm:gap-8">
            <button onClick={() => onNavigate('Check a Scam')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">
              <MessageIcon /> Message
            </button>
            <button onClick={() => onNavigate('Check a Scam')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">
              <PhoneIcon /> Phone Call
            </button>
            <button onClick={() => onNavigate('Check a Scam')} className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">
              <ScreenshotIcon /> Screenshot
            </button>
          </div>
        </div>

      </main>
    <Footer />
  </div>
)

// ── CHECK A SCAM PAGE ─────────────────────────────────────────────────────────

const CheckScamPage = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (page: string) => void }) => (
  <div className="flex flex-col flex-1">
    <main className="flex-1 max-w-[110rem] w-full mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-12 md:py-16">

      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 text-sm hover:text-gray-200 transition-colors mb-8 cursor-pointer group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform duration-150"><ArrowLeftIcon /></span>
        Back to Home
      </button>

      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight leading-tight">
          What would you like to check?
        </h1>
        <p className="text-gray-400 text-base">Choose one option.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <VerifyCard onClick={() => onNavigate('Upload Screenshot')} icon={<ScreenshotIcon />} title="Screenshot" description="Upload an image." action="Select image" />
        <VerifyCard onClick={() => onNavigate('Paste Message')} icon={<MessageIcon />} title="Message" description="Paste suspicious text." action="Paste text" />
        <VerifyCard onClick={() => onNavigate('Describe Call')} icon={<CallIcon />} title="Call" description="Describe what happened." action="Describe call" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-[#1c1f28] border border-[#2e3140] rounded-xl px-6 py-4 mb-4 hover:border-[#4a4e5a] transition-colors duration-200 cursor-pointer group">
        <div className="flex items-center gap-3 text-white font-semibold text-sm">
          <span className="text-gray-400"><BankIcon /></span>
          Need to check a loan provider?
        </div>
        <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors flex items-center gap-1.5">
          Verify a lending app against official reference data <ArrowRightIcon />
        </span>
      </div>

      <div className="text-center mb-6">
        <button className="text-gray-400 text-sm hover:text-gray-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer">
          <AlertCircleIcon />
          Already transferred money? Open immediate incident assistance →
        </button>
      </div>

      <div className="flex items-start gap-3 bg-[#1c1f28] border border-[#2e3140] rounded-xl px-6 py-4">
        <span className="text-gray-500 mt-0.5 shrink-0"><LockIconLg /></span>
        <p className="text-gray-400 text-sm leading-relaxed">
          <span className="text-gray-200 font-semibold">Privacy note:</span>{' '}
          Sensitive information (phone numbers, names, account IDs) is automatically redacted before analysis.
        </p>
      </div>

    </main>
    <Footer />
  </div>
)

// ── SCREENSHOT UPLOAD PAGE ───────────────────────────────────────────────────

const UploadIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
)

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const SpinnerIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" strokeOpacity="0.25" />
    <path d="M21 12a9 9 0 0 1-9 9" />
  </svg>
)

const ScreenshotUploadPage = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (page: string) => void }) => {
  const [dragOver, setDragOver] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback((f: File) => {
    if (!f.type.startsWith('image/')) return
    setFile(f)
    const reader = new FileReader()
    reader.onload = (e) => setPreview(e.target?.result as string)
    reader.readAsDataURL(f)
  }, [])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files[0]
    if (f) handleFile(f)
  }, [handleFile])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
  }

  const handleAnalyze = () => {
    if (!file) return
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      onNavigate('Results')
    }, 2200)
  }

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 md:py-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 text-sm hover:text-gray-200 transition-colors mb-8 cursor-pointer group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-150"><ArrowLeftIcon /></span>
          Back
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1c1f28] border border-[#2e3140] rounded-full px-3 py-1 text-xs font-medium text-gray-400 mb-4">
            <ScreenshotIcon />
            Screenshot Analysis
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Upload your screenshot</h1>
          <p className="text-gray-400 text-sm">We'll scan the image for scam indicators. Your image is never stored.</p>
        </div>

        {!preview ? (
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`relative flex flex-col items-center justify-center gap-5 rounded-2xl border-2 border-dashed cursor-pointer transition-all duration-200 py-20 px-8 ${
              dragOver
                ? 'border-blue-500 bg-blue-500/5 scale-[1.01]'
                : 'border-[#2e3140] bg-[#1c1f28] hover:border-[#4a4e5a] hover:bg-[#222530]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onInputChange}
            />
            <div className={`transition-colors duration-200 ${dragOver ? 'text-blue-400' : 'text-gray-500'}`}>
              <UploadIcon />
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-base mb-1">
                {dragOver ? 'Drop to upload' : 'Drag & drop your screenshot here'}
              </p>
              <p className="text-gray-400 text-sm">or <span className="text-blue-400 font-medium">click to browse</span></p>
            </div>
            <div className="flex items-center gap-3 mt-2">
              {['PNG', 'JPG', 'WEBP', 'GIF'].map(fmt => (
                <span key={fmt} className="text-[10px] font-bold text-gray-500 border border-[#2e3140] rounded px-2 py-0.5">{fmt}</span>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#2e3140] bg-[#1c1f28] overflow-hidden">
            {/* Preview */}
            <div className="relative">
              <img src={preview} alt="Preview" className="w-full max-h-[420px] object-contain bg-[#13151e]" />
              <button
                onClick={() => { setFile(null); setPreview(null) }}
                className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors"
              >
                <XIcon />
              </button>
              <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <ScreenshotIcon />
                {file?.name}
              </div>
            </div>
            {/* File info strip */}
            <div className="px-5 py-4 border-t border-[#2e3140] flex items-center justify-between">
              <div>
                <p className="text-white text-sm font-semibold">{file?.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{file ? (file.size / 1024).toFixed(1) + ' KB' : ''} · {file?.type}</p>
              </div>
              <button
                onClick={() => { setFile(null); setPreview(null) }}
                className="text-gray-400 hover:text-white text-xs font-medium transition-colors"
              >
                Change
              </button>
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="mt-5 bg-[#131620] border border-[#2e3140] rounded-xl p-4 flex items-start gap-3">
          <span className="text-gray-500 mt-0.5 shrink-0"><LockIconLg /></span>
          <p className="text-gray-400 text-xs leading-relaxed">
            <span className="text-gray-200 font-semibold">Privacy: </span>
            Your screenshot is processed locally. Phone numbers, names and account IDs are automatically redacted.
          </p>
        </div>

        {/* Analyze button */}
        <button
          onClick={handleAnalyze}
          disabled={!file || analyzing}
          className={`mt-6 w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-base transition-all duration-200 ${
            file && !analyzing
              ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 cursor-pointer'
              : 'bg-[#2a2d38] text-gray-500 cursor-not-allowed'
          }`}
        >
          {analyzing ? (
            <><SpinnerIcon /> Analyzing screenshot…</>
          ) : (
            <>Analyze Screenshot <ArrowRightIcon /></>
          )}
        </button>
      </main>
      <Footer />
    </div>
  )
}

// ── MESSAGE INPUT PAGE ────────────────────────────────────────────────────────

const MessageInputPage = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (page: string) => void }) => {
  const [text, setText] = useState('')
  const [analyzing, setAnalyzing] = useState(false)
  const maxChars = 2000

  const handleAnalyze = () => {
    if (!text.trim()) return
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      onNavigate('Results')
    }, 2000)
  }

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 md:py-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 text-sm hover:text-gray-200 transition-colors mb-8 cursor-pointer group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-150"><ArrowLeftIcon /></span>
          Back
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1c1f28] border border-[#2e3140] rounded-full px-3 py-1 text-xs font-medium text-gray-400 mb-4">
            <MessageIcon />
            Message Analysis
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Paste the suspicious message</h1>
          <p className="text-gray-400 text-sm">Copy the full message you received and paste it below.</p>
        </div>

        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, maxChars))}
            placeholder="Paste the suspicious SMS, WhatsApp message, or email content here…"
            rows={10}
            className="w-full bg-[#1c1f28] border border-[#2e3140] rounded-2xl text-white text-sm placeholder-gray-600 px-5 py-4 outline-none resize-none focus:border-[#4a5568] focus:bg-[#222530] transition-all duration-200 leading-relaxed"
          />
          <div className="absolute bottom-4 right-4 text-[11px] text-gray-500 font-mono">
            {text.length}/{maxChars}
          </div>
        </div>

        {/* Example prompts */}
        {text.length === 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            <p className="text-gray-500 text-xs w-full mb-1">Try an example:</p>
            {[
              'Your KYC is expired. Click here to update or your account will be blocked.',
              'Congratulations! You have won ₹50,000. Click the link to claim your prize.',
              'Your electricity will be disconnected tonight. Pay immediately via this link.'
            ].map((ex) => (
              <button
                key={ex}
                onClick={() => setText(ex)}
                className="text-xs text-gray-400 border border-[#2e3140] rounded-lg px-3 py-1.5 hover:border-[#4a4e5a] hover:text-gray-200 hover:bg-[#222530] transition-all text-left"
              >
                {ex.length > 60 ? ex.slice(0, 60) + '…' : ex}
              </button>
            ))}
          </div>
        )}

        {/* Privacy note */}
        <div className="mt-5 bg-[#131620] border border-[#2e3140] rounded-xl p-4 flex items-start gap-3">
          <span className="text-gray-500 mt-0.5 shrink-0"><LockIconLg /></span>
          <p className="text-gray-400 text-xs leading-relaxed">
            <span className="text-gray-200 font-semibold">Privacy: </span>
            Phone numbers, account IDs and personal names are automatically redacted before analysis.
          </p>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={!text.trim() || analyzing}
          className={`mt-6 w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-base transition-all duration-200 ${
            text.trim() && !analyzing
              ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 cursor-pointer'
              : 'bg-[#2a2d38] text-gray-500 cursor-not-allowed'
          }`}
        >
          {analyzing ? (
            <><SpinnerIcon /> Analyzing message…</>
          ) : (
            <>Analyze Message <ArrowRightIcon /></>
          )}
        </button>
      </main>
      <Footer />
    </div>
  )
}

// ── CALL DESCRIBE PAGE ────────────────────────────────────────────────────────

const CallDescribePage = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (page: string) => void }) => {
  const [callerNumber, setCallerNumber] = useState('')
  const [callerClaim, setCallerClaim] = useState('')
  const [description, setDescription] = useState('')
  const [requested, setRequested] = useState<string[]>([])
  const [analyzing, setAnalyzing] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [audioDragOver, setAudioDragOver] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const audioInputRef = useRef<HTMLInputElement>(null)

  const handleAudioFile = useCallback((f: File) => {
    const allowed = ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/ogg', 'audio/webm', 'audio/x-m4a', 'audio/mp4']
    if (!allowed.some(t => f.type.includes(t.split('/')[1])) && !f.name.match(/\.(mp3|wav|ogg|m4a|webm)$/i)) return
    if (audioUrl) URL.revokeObjectURL(audioUrl)
    setAudioFile(f)
    setAudioUrl(URL.createObjectURL(f))
  }, [audioUrl])

  const removeAudio = () => {
    if (audioUrl) URL.revokeObjectURL(audioUrl)
    setAudioFile(null)
    setAudioUrl(null)
    if (audioInputRef.current) audioInputRef.current.value = ''
  }

  const toggleRequested = (item: string) => {
    setRequested(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])
  }

  const requestedItems = ['OTP / PIN', 'Bank Account', 'Install an App', 'Money Transfer', 'Personal ID / Aadhaar', 'Password']

  const isValid = description.trim().length > 10

  const handleAnalyze = () => {
    if (!isValid) return
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      onNavigate('Results')
    }, 2000)
  }

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 md:py-16">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 text-sm hover:text-gray-200 transition-colors mb-8 cursor-pointer group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform duration-150"><ArrowLeftIcon /></span>
          Back
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1c1f28] border border-[#2e3140] rounded-full px-3 py-1 text-xs font-medium text-gray-400 mb-4">
            <CallIcon />
            Call Analysis
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Describe the suspicious call</h1>
          <p className="text-gray-400 text-sm">Tell us what the caller said or asked for — we'll identify red flags.</p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Caller number */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Caller's phone number <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <input
              type="tel"
              value={callerNumber}
              onChange={(e) => setCallerNumber(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-[#1c1f28] border border-[#2e3140] rounded-xl text-white text-sm placeholder-gray-600 px-4 py-3.5 outline-none focus:border-[#4a5568] focus:bg-[#222530] transition-all duration-200"
            />
          </div>

          {/* Caller claimed to be */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Caller claimed to be
            </label>
            <div className="flex flex-wrap gap-2">
              {['Bank official', 'Electricity dept.', 'Police / CBI', 'Telecom provider', 'RBI officer', 'Insurance agent', 'Other'].map((role) => (
                <button
                  key={role}
                  onClick={() => setCallerClaim(callerClaim === role ? '' : role)}
                  className={`text-xs font-medium border rounded-full px-3 py-1.5 transition-all duration-150 ${
                    callerClaim === role
                      ? 'bg-white text-black border-white'
                      : 'text-gray-400 border-[#2e3140] hover:border-[#4a4e5a] hover:text-gray-200'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* What they asked for */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              What did they ask for? <span className="text-gray-500 font-normal">(select all that apply)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {requestedItems.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleRequested(item)}
                  className={`text-xs font-medium border rounded-full px-3 py-1.5 transition-all duration-150 ${
                    requested.includes(item)
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                      : 'text-gray-400 border-[#2e3140] hover:border-[#4a4e5a] hover:text-gray-200'
                  }`}
                >
                  {requested.includes(item) ? '✓ ' : ''}{item}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Describe what happened <span className="text-red-400">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what the caller said, how they pressured you, any links or numbers they gave you…"
              rows={6}
              className="w-full bg-[#1c1f28] border border-[#2e3140] rounded-2xl text-white text-sm placeholder-gray-600 px-5 py-4 outline-none resize-none focus:border-[#4a5568] focus:bg-[#222530] transition-all duration-200 leading-relaxed"
            />
          </div>

          {/* Voice Recording Upload */}
          <div>
            <label className="block text-gray-300 text-sm font-semibold mb-1">
              Upload voice recording <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <p className="text-gray-500 text-xs mb-3">If you recorded the call, upload it for a deeper audio analysis.</p>

            {!audioFile ? (
              <div
                onDragOver={(e) => { e.preventDefault(); setAudioDragOver(true) }}
                onDragLeave={() => setAudioDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setAudioDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleAudioFile(f) }}
                onClick={() => audioInputRef.current?.click()}
                className={`flex items-center gap-4 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200 px-6 py-5 ${
                  audioDragOver
                    ? 'border-indigo-500 bg-indigo-500/5 scale-[1.01]'
                    : 'border-[#2e3140] bg-[#1c1f28] hover:border-[#4a4e5a] hover:bg-[#222530]'
                }`}
              >
                <input
                  ref={audioInputRef}
                  type="file"
                  accept="audio/*,.mp3,.wav,.ogg,.m4a,.webm"
                  className="hidden"
                  onChange={(e) => { const f = e.target.files?.[0]; if (f) handleAudioFile(f) }}
                />
                {/* Waveform icon */}
                <div className={`shrink-0 transition-colors duration-200 ${audioDragOver ? 'text-indigo-400' : 'text-gray-500'}`}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18V5l12-2v13" />
                    <circle cx="6" cy="18" r="3" />
                    <circle cx="18" cy="16" r="3" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold">
                    {audioDragOver ? 'Drop audio file here' : 'Drag & drop your recording'}
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">or <span className="text-indigo-400 font-medium">click to browse</span> · MP3, WAV, OGG, M4A, WEBM</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  {['MP3', 'WAV', 'OGG', 'M4A'].map(fmt => (
                    <span key={fmt} className="text-[9px] font-bold text-gray-600 border border-[#2e3140] rounded px-1.5 py-0.5">{fmt}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-xl border border-[#2e3140] bg-[#1c1f28] overflow-hidden">
                {/* Audio player */}
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{audioFile.name}</p>
                      <p className="text-gray-400 text-xs">{(audioFile.size / 1024).toFixed(1)} KB · {audioFile.type || 'audio'}</p>
                    </div>
                    <button
                      onClick={removeAudio}
                      className="ml-auto shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#2a2d38] hover:bg-[#3a3d4a] text-gray-400 hover:text-white transition-colors"
                      title="Remove recording"
                    >
                      <XIcon />
                    </button>
                  </div>
                  {audioUrl && (
                    <audio
                      controls
                      src={audioUrl}
                      className="w-full h-9"
                      style={{ colorScheme: 'dark' }}
                    />
                  )}
                </div>
                {/* Bottom strip */}
                <div className="px-5 py-3 border-t border-[#2e3140] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-medium">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    Recording ready for analysis
                  </div>
                  <button onClick={removeAudio} className="text-gray-500 hover:text-gray-200 text-xs transition-colors">Remove</button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Privacy note */}
        <div className="mt-5 bg-[#131620] border border-[#2e3140] rounded-xl p-4 flex items-start gap-3">
          <span className="text-gray-500 mt-0.5 shrink-0"><LockIconLg /></span>
          <p className="text-gray-400 text-xs leading-relaxed">
            <span className="text-gray-200 font-semibold">Privacy: </span>
            Your information is used only for this analysis and is never stored or shared.
          </p>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={!isValid || analyzing}
          className={`mt-6 w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-bold text-base transition-all duration-200 ${
            isValid && !analyzing
              ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 cursor-pointer'
              : 'bg-[#2a2d38] text-gray-500 cursor-not-allowed'
          }`}
        >
          {analyzing ? (
            <><SpinnerIcon /> Analyzing call description…</>
          ) : (
            <>Analyze Call <ArrowRightIcon /></>
          )}
        </button>
      </main>
      <Footer />
    </div>
  )
}

// ── RESULTS PAGE ──────────────────────────────────────────────────────────────

const ResultsPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <div className="flex flex-col flex-1">
    <main className="flex-1 max-w-[110rem] w-full mx-auto px-6 md:px-12 lg:px-16 xl:px-24 py-8">
      {/* Top Breadcrumb & ID */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <button onClick={() => onNavigate('Home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('Check a Scam')} className="hover:text-white transition-colors cursor-pointer">Check a Scam</button>
          <span>/</span>
          <span className="text-white font-medium">Results</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-[#2e3140] bg-[#1c1f28] text-xs font-mono text-gray-400 self-start sm:self-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
          CASE ID: #SCS-8842
        </div>
      </div>

      {/* Main Alert Card */}
      <div className="bg-[#1c2230] border border-[#2e374a] rounded-xl p-6 mb-4 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 bg-amber-900/30 border border-amber-700/50 text-amber-500 text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-md self-start">
            <WarningTriangleIcon />
            High Suspicion
          </div>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
            <ClockIcon />
            Analyzed seconds ago
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
          This message matches common utility bill extortion patterns.
        </h1>
        <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
          The sender uses artificial urgency and an unverified payment link to trick you into transferring money.
        </p>

        <div className="flex items-center gap-2 text-gray-400 text-xs border-t border-[#2e374a] pt-4">
          <span className="opacity-80"><AlertCircleIcon /></span>
          Advisory assessment, not proof of fraud.
        </div>
      </div>

      {/* Accordion: Submitted message */}
      <button className="w-full flex items-center justify-between p-4 bg-[#1c1f28] border border-[#2e3140] rounded-xl hover:border-[#4a4e5a] transition-colors mb-8 cursor-pointer text-left">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="9" y1="10" x2="15" y2="10" /><line x1="9" y1="14" x2="13" y2="14" /></svg>
          Submitted message sample reviewed
        </div>
        <div className="text-gray-500"><ChevronDownIcon /></div>
      </button>

      {/* Key warning signs */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="flex items-center gap-2 text-white font-semibold text-sm">
            <SearchIcon />
            Key warning signs detected
          </h2>
          <span className="text-xs text-gray-400 font-medium">3 Primary Flags</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-[#1c1f28] border border-[#2e3140] rounded-xl p-5 flex flex-col h-full">
            <h3 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Artificial Urgency
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
              The message pressures you to act immediately tonight to prevent verification.
            </p>
            <div className="bg-[#242833] rounded-lg p-3 border border-[#3a3d4a]">
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-1">Evidence excerpt</p>
              <p className="text-gray-300 text-xs font-mono break-all">"disconnected tonight at 9:30 PM"</p>
            </div>
          </div>

          <div className="bg-[#1c1f28] border border-[#2e3140] rounded-xl p-5 flex flex-col h-full">
            <h3 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Suspicious App Download
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
              Official utilities never ask customers to download APK files via text links.
            </p>
            <div className="bg-[#242833] rounded-lg p-3 border border-[#3a3d4a]">
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-1">Evidence excerpt</p>
              <p className="text-gray-300 text-xs font-mono break-all">"via apk: mp-mpeb-bill.apk"</p>
            </div>
          </div>

          <div className="bg-[#1c1f28] border border-[#2e3140] rounded-xl p-5 flex flex-col h-full">
            <h3 className="text-white text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Unverified Contact Number
            </h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">
              Direct personal 10-digit mobile number instead of recognized official discom helpline.
            </p>
            <div className="bg-[#242833] rounded-lg p-3 border border-[#3a3d4a]">
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-1">Evidence excerpt</p>
              <p className="text-gray-300 text-xs font-mono break-all">"contact 98260XXXXX"</p>
            </div>
          </div>
        </div>

        <button className="w-full py-3 bg-[#1c1f28] border border-[#2e3140] rounded-lg hover:bg-[#242833] transition-colors text-xs font-semibold text-gray-300 cursor-pointer">
          View all warning signs &amp; forensic details (2 more) &darr;
        </button>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <button className="flex items-center justify-center gap-2 bg-gray-200 text-black py-3.5 rounded-lg font-semibold text-sm hover:bg-white transition-colors cursor-pointer">
          What should I do now? <ArrowRightIcon />
        </button>
        <button className="flex items-center justify-center gap-2 bg-[#2a2420] border border-[#4a3424] text-amber-500 py-3.5 rounded-lg font-semibold text-sm hover:bg-[#3a3028] transition-colors cursor-pointer">
          <PhoneIcon /> Already transferred money? (Dial 1930)
        </button>
      </div>

      {/* Recommended Protective Steps */}
      <div className="bg-[#131620] border border-[#2e3140] rounded-xl p-6 mb-12">
        <div className="mb-5">
          <h2 className="flex items-center gap-2 text-white font-semibold text-sm mb-1.5">
            <LayersIcon />
            Recommended Protective Steps
          </h2>
          <p className="text-gray-400 text-xs">Take these immediate actions to prevent account compromise:</p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3 bg-[#1c1f28] border border-[#2e3140] rounded-lg p-4">
            <span className="text-gray-400 mt-0.5"><BanIcon /></span>
            <div>
              <p className="text-gray-200 text-sm font-semibold mb-1">Do NOT click the APK download link or install files</p>
              <p className="text-gray-400 text-xs leading-relaxed">If downloaded, do not install or grant accessibility permissions. Delete it immediately.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#1c1f28] border border-[#2e3140] rounded-lg p-4">
            <span className="text-gray-400 mt-0.5"><PhoneOffIcon /></span>
            <div>
              <p className="text-gray-200 text-sm font-semibold mb-1">Avoid calling the personal number provided</p>
              <p className="text-gray-400 text-xs leading-relaxed">Scammers impersonate electricity department desk officers to request UPI test transactions.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#1c1f28] border border-[#2e3140] rounded-lg p-4">
            <span className="text-gray-400 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
            </span>
            <div>
              <p className="text-gray-200 text-sm font-semibold mb-1">Verify directly via official electricity board portal</p>
              <p className="text-gray-400 text-xs leading-relaxed">Check your consumer ID on the legitimate power board mobile app or consumer helpline.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 border-t border-[#2e3140] pt-8">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-medium cursor-pointer">
          <CheckCircleIcon /> View verified sources
        </button>
        <span className="text-gray-600 text-xs hidden sm:block">&bull;</span>
        <button onClick={() => onNavigate('Home')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-medium cursor-pointer">
          <RotateIcon /> Start a new check
        </button>
        <span className="text-gray-600 text-xs hidden sm:block">&bull;</span>
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-xs font-medium cursor-pointer">
          <ShareIcon /> Share warning with family (WhatsApp)
        </button>
      </div>

    </main>
    <Footer />
  </div>
)

// ── Main App ──────────────────────────────────────────────────────────────────

const NAV_LINKS = ['Home', 'Check a Scam', 'Safety Help', 'Learn']

const App = () => {
  const [activeNav, setActiveNav] = useState('Home')

  const handleNavigate = (page: string) => setActiveNav(page)

  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex flex-col" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* Navbar */}
      <header className="px-6 md:px-12 lg:px-16 xl:px-24 py-5 flex items-center justify-between z-50 relative max-w-[110rem] w-full mx-auto">
        <div className="flex items-center gap-2">
          <ShieldIcon />
          <span className="font-bold text-lg tracking-wide">ScamShield</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {['Home', 'Check a Scam', 'Safety Help', 'Learn'].map((link) => (
            <button
              key={link}
              onClick={() => handleNavigate(link)}
              className={`text-[13px] font-medium transition-colors relative pb-1 ${
                activeNav === link ? 'text-white' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {link}
              {activeNav === link && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-t-full" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden sm:flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-white transition-colors">
            <TranslateIcon />
            English / हिंदी
            <ChevronDownIcon />
          </button>
          <button className="bg-white text-black text-[13px] font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Check Now
          </button>
        </div>
      </header>

      {/* Page Content */}
      {activeNav === 'Home' && (
        <HomePage onNavigate={handleNavigate} />
      )}
      {activeNav === 'Check a Scam' && (
        <CheckScamPage onBack={() => handleNavigate('Home')} onNavigate={handleNavigate} />
      )}
      {activeNav === 'Upload Screenshot' && (
        <ScreenshotUploadPage onBack={() => handleNavigate('Check a Scam')} onNavigate={handleNavigate} />
      )}
      {activeNav === 'Paste Message' && (
        <MessageInputPage onBack={() => handleNavigate('Check a Scam')} onNavigate={handleNavigate} />
      )}
      {activeNav === 'Describe Call' && (
        <CallDescribePage onBack={() => handleNavigate('Check a Scam')} onNavigate={handleNavigate} />
      )}
      {activeNav === 'Results' && (
        <ResultsPage onNavigate={handleNavigate} />
      )}
      {(activeNav === 'Safety Help' || activeNav === 'Learn') && (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-500 gap-3 py-24">
          <ShieldIcon />
          <p className="text-lg font-medium text-gray-400">{activeNav}</p>
          <p className="text-sm">This section is coming soon.</p>
        </div>
      )}

    </div>
  )
}

export default App