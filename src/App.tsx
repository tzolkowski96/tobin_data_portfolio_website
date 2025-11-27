import React, { useEffect, useState, useRef } from "react";
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
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>

      <div className="min-h-[100dvh] bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md flex flex-col items-center my-auto">
          <div className="w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden animate-fade-in">
            
            {/* Progress Bar */}
            <div className="h-1 w-full bg-gray-50">
              <div 
                className="h-full bg-black transition-all duration-1000 ease-linear"
                style={{ width: `${progressPercentage}%` }}
                role="progressbar"
                aria-valuenow={progressPercentage}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>

            <div className="p-6 md:p-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-6 md:h-6">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                We've moved
              </h1>
              
              <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed">
                The portfolio you are looking for has been migrated to a new address. Redirecting in <span className="font-medium text-gray-900 tabular-nums">{countdown}s</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={targetUrl}
                  className="w-full sm:w-auto flex-1 inline-flex justify-center items-center px-4 py-3 md:py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 active:scale-[0.98]"
                >
                  Go to new site
                </a>
                <button
                  onClick={handlePauseToggle}
                  className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-3 md:py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 active:scale-[0.98]"
                >
                  {isPaused ? "Resume" : "Pause"}
                </button>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-gray-400 font-medium text-center">
            <a href={targetUrl} className="hover:text-gray-600 transition-colors">
              tzolkowski96.github.io
            </a>
          </p>

          <noscript>
              <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">JavaScript is disabled.</p>
                  <a href={targetUrl} className="text-black underline">Click here to continue</a>
              </div>
          </noscript>
        </div>
      </div>
    </>
  );
}