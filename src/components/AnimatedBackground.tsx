import React, { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-brand-bg-main">
      {/* Dynamic base futuristic background grid */}
      <div className="absolute inset-0 bg-grid-cyber opacity-70" />
      <div className="absolute inset-0 bg-dot-cyber opacity-40" />

      {/* Cyber radiant nebulas for depth representation */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] glow-pulse" />
      <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[150px] glow-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] rounded-full bg-brand-green/3 blur-[100px] glow-pulse" style={{ animationDelay: "4s" }} />

      {/* Futuristic digital scanner laser line sweeping downward */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent scanner-line pointer-events-none" />

      {/* Grid overlay mask to make middle content super readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg-main via-transparent to-brand-bg-main" />
    </div>
  );
}
