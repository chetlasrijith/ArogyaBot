import React from "react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gradient-hero">
      <h1
        className="text-5xl md:text-7xl font-bold gradient-primary bg-clip-text text-transparent mb-8 animate-pulse"
        style={{
          textShadow: "0 0 20px #3b82f6, 0 0 40px #3b82f6",
        }}
      >
        Coming Soon
      </h1>
      <p className="text-xl text-muted-foreground">
        This feature will be available soon. Stay tuned!
      </p>
    </div>
  );
}