"use client";

export function Glassmorphism() {
  return (
    <div
      className="relative w-72 h-48 rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        className="absolute w-28 h-28 rounded-full"
        style={{ background: "rgba(99,102,241,0.5)", top: "-20px", left: "-10px", filter: "blur(30px)" }}
      />
      <div
        className="absolute w-24 h-24 rounded-full"
        style={{ background: "rgba(167,139,250,0.4)", bottom: "-10px", right: "10px", filter: "blur(25px)" }}
      />
      <div
        className="absolute w-20 h-20 rounded-full"
        style={{ background: "rgba(236,72,153,0.3)", top: "30%", right: "-5px", filter: "blur(20px)" }}
      />

      {/* Glass card */}
      <div
        className="relative z-10 rounded-xl p-5 w-52"
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <span className="text-sm">✦</span>
          </div>
          <p className="text-sm font-medium text-white">Glassmorphism</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)", width: "100%" }} />
          <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)", width: "70%" }} />
        </div>
      </div>
    </div>
  );
}
