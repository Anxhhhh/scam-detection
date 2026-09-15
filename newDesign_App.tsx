import { useState } from 'react'

// ── Icons (inline SVGs) ──────────────────────────────────────────────────────

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const AlertCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

const TranslateIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" />
    <path d="M2 5h12" /><path d="M7 2h1" />
    <path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const MessageIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="13" y2="14" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 16.92z" />
  </svg>
)

const ScreenshotIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
)

const CheckShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)


// ── MAIN APP ──────────────────────────────────────────────────────────────────

const App = () => {
  const [activeNav, setActiveNav] = useState('Home')

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white flex flex-col font-sans overflow-hidden">
      
      {/* ── Navbar ── */}
      <header className="px-6 md:px-12 lg:px-16 xl:px-24 py-5 flex items-center justify-between z-50 relative max-w-[110rem] w-full mx-auto">
        <div className="flex items-center gap-2">
          <ShieldIcon />
          <span className="font-bold text-lg tracking-wide">ScamShield</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {['Home', 'Check a Scam', 'Safety Help', 'Learn'].map((link) => (
            <button
              key={link}
              onClick={() => setActiveNav(link)}
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
              <button className="flex items-center gap-2 bg-white text-black font-semibold text-[15px] px-6 py-3.5 rounded-xl hover:bg-gray-100 transition-colors">
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
            <button className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">
              <MessageIcon /> Message
            </button>
            <button className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">
              <PhoneIcon /> Phone Call
            </button>
            <button className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-[13px] font-medium">
              <ScreenshotIcon /> Screenshot
            </button>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App
