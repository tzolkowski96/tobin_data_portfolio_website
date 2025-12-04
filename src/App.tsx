import { useEffect, useState, useRef } from "react";
import { CONFIG } from "./config";

export default function RedirectPage() {
  const { targetUrl, redirectDelay } = CONFIG;
  const [countdown, setCountdown] = useState(redirectDelay);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isPaused && countdown > 0) {
      intervalRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, countdown]);

  useEffect(() => {
    if (countdown === 0 && !isPaused) {
      timeoutRef.current = setTimeout(() => {
        window.location.href = targetUrl;
      }, 300);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [countdown, isPaused, targetUrl]);

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
    if (isPaused && countdown === 0) {
      window.location.href = targetUrl;
    }
  };

  const progressPercentage = ((redirectDelay - countdown) / redirectDelay) * 100;

  return (
    <>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-[100dvh] bg-stone-50 flex flex-col font-sans">
        
        {/* Subtle texture overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Main content */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          <div className="w-full max-w-sm animate-fade-in">
            
            {/* Ensō-inspired circle with accessibility */}
            <div className="flex justify-center mb-12">
              <div 
                className="relative w-20 h-20"
                role="progressbar"
                aria-valuenow={Math.round(progressPercentage)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Redirecting in ${countdown} seconds`}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#a8a29e"
                    strokeWidth="1"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * progressPercentage) / 100}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-linear"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                  />
                  {/* Subtle incomplete circle - wabi-sabi */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e7e5e4"
                    strokeWidth="1"
                    strokeDasharray="251.2"
                    strokeDashoffset="20"
                    strokeLinecap="round"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-light text-stone-400 tabular-nums" aria-hidden="true">
                    {countdown}
                  </span>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="text-center mb-12">
              <h1 className="text-stone-800 text-lg font-normal tracking-wide mb-4">
                We've moved
              </h1>
              <p className="text-stone-400 text-sm font-light leading-relaxed">
                This site has found a new home.
                <br />
                You will be redirected momentarily.
              </p>
            </div>

            {/* Minimal divider */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-12 bg-stone-200" />
            </div>

            {/* Actions */}
            <div className="flex flex-col items-center gap-6">
              <a 
                href={targetUrl}
                className="group inline-flex items-center gap-3 text-stone-600 text-sm tracking-wide hover:text-stone-900 transition-colors duration-300"
              >
                <span>Continue</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              
              <button
                onClick={handlePauseToggle}
                aria-label={isPaused ? "Resume countdown" : "Pause countdown"}
                className="inline-flex items-center gap-2 text-stone-400 text-xs tracking-widest uppercase hover:text-stone-600 transition-colors duration-300 px-3 py-1.5 rounded-full border border-transparent hover:border-stone-200"
              >
                {isPaused ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Resume
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                    Pause
                  </>
                )}
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="px-6 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-8 bg-stone-200 animate-breathe" />
            <a 
              href={targetUrl}
              className="text-xs text-stone-300 tracking-wider hover:text-stone-400 transition-colors duration-300"
            >
              tzolkowski96.github.io
            </a>
          </div>
        </footer>

        {/* Noscript fallback */}
        <noscript>
          <div className="fixed inset-0 bg-stone-50 flex items-center justify-center p-6">
            <div className="text-center">
              <p className="text-stone-400 text-sm mb-4">JavaScript is disabled.</p>
              <a href={targetUrl} className="text-stone-600 text-sm underline underline-offset-4 decoration-stone-300 hover:text-stone-800 hover:decoration-stone-400">
                Continue to new site
              </a>
            </div>
          </div>
        </noscript>
      </div>
    </>
  );
}