import React, { useEffect, useState } from "react";

export default function RedirectPage() {
  const targetUrl: string = "https://tzolkowski96.github.io/portfolio/";
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      window.location.href = targetUrl;
    }, countdown * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [countdown, targetUrl]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      <div className="text-center p-10 rounded-3xl shadow-2xl bg-white/90 backdrop-blur max-w-md w-full border border-gray-200">
        <h1 className="text-4xl font-light mb-3 tracking-wide">I've Moved</h1>
        <p className="text-base text-gray-600 mb-6">
          My website has been relocated to a new home. You'll be redirected in {countdown} second{countdown !== 1 ? "s" : ""}.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden mb-4">
          <div
            className="bg-gradient-to-r from-gray-800 to-gray-600 h-2 transition-all duration-1000 ease-linear"
            style={{ width: `${((5 - countdown + 1) / 5) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-400 italic mb-2">
          See you at my new place!
        </p>
        <a
          href={targetUrl}
          className="inline-block mt-2 text-gray-700 hover:text-black underline transition-colors"
        >
          Go now
        </a>
        <noscript>
          <p className="mt-4 text-red-500 text-sm">
            JavaScript is disabled. Please <a href={targetUrl} className="underline">click here</a> to continue.
          </p>
        </noscript>
      </div>
    </div>
  );
}