import React, { useEffect, useState, useRef } from "react";

export default function RedirectPage() {
  const targetUrl = "https://tzolkowski96.github.io/portfolio/";
  const [countdown, setCountdown] = useState(5);
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

  const progressPercentage = ((5 - countdown) / 5) * 100;

  return (
    <>
      <style>{`
        @keyframes fade {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fade 0.6s ease-out;
        }
        
        .progress-bar {
          transform-origin: left center;
          will-change: width;
        }
      `}</style>

      <meta httpEquiv="refresh" content={`${countdown}; url=${targetUrl}`} />

      <div className="flex items-center justify-center min-h-screen bg-white text-black p-8">
        <div className="text-center max-w-xs w-full fade-in">
          <h1 className="text-2xl font-light mb-12 tracking-widest uppercase">
            Site Moved
          </h1>
          
          <p className="text-sm text-gray-600 mb-12 font-light tracking-wide">
            Redirecting in{" "}
            <span 
              className="text-black font-medium tabular-nums"
              aria-live="polite"
              aria-atomic="true"
            >
              {countdown}
            </span>
          </p>

          {/* Ultra minimal progress bar */}
          <div className="relative w-full h-0.5 bg-gray-100 mb-12">
            <div
              className="absolute left-0 top-0 h-full bg-black transition-all duration-1000 ease-out progress-bar"
              style={{ width: `${progressPercentage}%` }}
              role="progressbar"
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Redirect progress"
            />
          </div>

          {/* Minimal text links */}
          <div className="flex gap-8 justify-center items-center text-xs">
            <button
              onClick={handlePauseToggle}
              className="text-gray-400 hover:text-black hover:underline underline-offset-4 transition-all duration-200 uppercase tracking-wider"
              aria-label={isPaused ? "Resume redirect" : "Pause redirect"}
            >
              {isPaused ? "Resume" : "Pause"}
            </button>

            <span className="text-gray-300">·</span>

            <a
              href={targetUrl}
              className="text-black hover:underline underline-offset-4 transition-all duration-200 uppercase tracking-wider font-medium"
            >
              Go Now
            </a>
          </div>

          {/* Screen reader announcement */}
          <div className="sr-only" role="status" aria-live="polite">
            {isPaused 
              ? "Redirect paused. Click resume to continue or go now to redirect immediately."
              : `Redirecting to new portfolio in ${countdown} seconds.`}
          </div>

          <noscript>
            <p className="mt-12 text-xs text-gray-400 uppercase tracking-wider">
              JavaScript disabled ·{" "}
              <a href={targetUrl} className="text-black underline underline-offset-4">
                Continue
              </a>
            </p>
          </noscript>
        </div>
      </div>
    </>
  );
}