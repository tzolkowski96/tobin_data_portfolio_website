import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Pause, 
  Play
} from "lucide-react";

// Configuration - easily adjustable
const REDIRECT_CONFIG = {
  targetUrl: "https://tzolkowski96.github.io/portfolio/",
  displayUrl: "tzolkowski96.github.io/portfolio",
  delaySeconds: 5,
};

export default function RedirectPage() {
  const { targetUrl, displayUrl, delaySeconds } = REDIRECT_CONFIG;
  const [countdown, setCountdown] = useState(delaySeconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: number;
    
    if (!isPaused && countdown > 0) {
      interval = window.setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPaused]); // Only re-run if isPaused changes

  useEffect(() => {
    if (countdown === 0 && !isPaused) {
      const timeout = setTimeout(() => {
        window.location.href = targetUrl;
      }, 800); // Slightly longer delay for smoother transition
      return () => clearTimeout(timeout);
    }
  }, [countdown, isPaused, targetUrl]);

  const progress = ((delaySeconds - countdown) / delaySeconds) * 100;

  return (
    <div className="min-h-[100dvh] bg-[#fcfcfc] flex flex-col items-center justify-center p-6 font-sans text-stone-900 overflow-hidden relative selection:bg-stone-200">
      
      {/* Structural Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.4] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-100 rounded-full blur-[120px]"
        />
      </div>

      <main className="relative z-10 w-full max-w-[440px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-stone-200/60 rounded-[32px] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.04)]"
        >
          {/* Progress Ring Section */}
          <div className="flex flex-col items-center mb-12">
            <div 
              className="relative w-36 h-36 flex items-center justify-center group cursor-pointer"
              onClick={() => setIsPaused(!isPaused)}
            >
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="72"
                  cy="72"
                  r="68"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="transparent"
                  className="text-stone-100"
                />
                <motion.circle
                  cx="72"
                  cy="72"
                  r="68"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray={427}
                  animate={{ strokeDashoffset: 427 - (427 * progress) / 100 }}
                  transition={{ duration: isPaused ? 0 : 1, ease: "linear" }}
                  className="text-stone-900"
                  strokeLinecap="round"
                />
              </svg>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={countdown}
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, filter: 'blur(4px)' }}
                    className="text-5xl font-light tabular-nums"
                  >
                    {countdown}
                  </motion.span>
                </AnimatePresence>
                <div className="mt-1 flex items-center gap-1.5 opacity-40">
                  {isPaused ? <Pause size={10} className="fill-current" /> : <Play size={10} className="fill-current w-2 h-2" />}
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">
                    {isPaused ? 'Paused' : 'Active'}
                  </span>
                </div>
              </div>

              {/* Interaction Hint Overlay */}
              <div className="absolute inset-0 rounded-full bg-stone-900/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Heading Section */}
          <div className="text-center space-y-3 mb-12">
            <h1 className="text-xl font-medium tracking-tight">
              Moving to New Portfolio
            </h1>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-[280px] mx-auto">
              This domain is being retired. You will be redirected automatically within seconds.
            </p>
          </div>

          {/* URL Component */}
          <div className="space-y-4">
            <a 
              href={targetUrl}
              className="flex items-center justify-between group p-5 bg-stone-50/50 hover:bg-stone-50 border border-stone-200/50 rounded-2xl transition-all duration-300"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold">New Address</span>
                <span className="text-sm font-medium text-stone-600 truncate max-w-[240px]">
                  {displayUrl}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center shadow-sm group-hover:bg-stone-900 group-hover:text-white transition-all">
                <ArrowRight size={14} />
              </div>
            </a>

            <button 
              onClick={() => window.location.href = targetUrl}
              className="w-full bg-stone-900 text-white text-sm font-medium py-4 px-6 rounded-2xl hover:bg-stone-800 transition-all active:scale-[0.98] shadow-lg shadow-stone-200/50"
            >
              Continue Now
            </button>
            
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="w-full text-[10px] uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors font-bold pt-2"
            >
              {isPaused ? 'Resume Redirect' : 'Pause Countdown'}
            </button>
          </div>
        </motion.div>
      </main>

      {/* Simplified Footer */}
      <footer className="mt-16 text-center space-y-4">
        <div className="flex items-center justify-center gap-3 opacity-20">
          <div className="h-px w-8 bg-stone-900" />
          <div className="w-1.5 h-1.5 rounded-full bg-stone-900" />
          <div className="h-px w-8 bg-stone-900" />
        </div>
        <p className="text-[9px] uppercase tracking-[0.4em] text-stone-300 font-bold">
          Tobin Zolkowski — 2026
        </p>
      </footer>

      {/* Noscript fallback */}
      <noscript>
        <div className="fixed inset-0 bg-stone-50 flex items-center justify-center z-[100] p-6 text-center">
          <div>
            <p className="text-stone-800 mb-4">JavaScript is required for the auto-redirect.</p>
            <a href={REDIRECT_CONFIG.targetUrl} className="text-stone-600 underline">Click here to go to the new site</a>
          </div>
        </div>
      </noscript>
    </div>
  );
}
