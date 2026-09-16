import React from "react";

export function IOSStatusBar() {
  return (
    <div
      style={{
        height: 44,
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        flexShrink: 0,
        position: "relative",
        zIndex: 10,
      }}
    >
      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "inherit" }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        {/* Signal */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="7" width="3" height="5" rx="1" opacity="1"/>
          <rect x="4.5" y="5" width="3" height="7" rx="1" opacity="1"/>
          <rect x="9" y="2.5" width="3" height="9.5" rx="1" opacity="1"/>
          <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.4"/>
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor"/>
          <path d="M8 6C6.1 6 4.4 6.8 3.2 8l1.4 1.4C5.5 8.5 6.7 8 8 8s2.5.5 3.4 1.4L12.8 8C11.6 6.8 9.9 6 8 6z" fill="currentColor" opacity="0.7"/>
          <path d="M8 2.5C5 2.5 2.3 3.8.6 5.9l1.4 1.4C3.5 5.5 5.6 4.5 8 4.5s4.5 1 5.9 2.8l1.4-1.4C13.7 3.8 11 2.5 8 2.5z" fill="currentColor" opacity="0.4"/>
        </svg>
        {/* Battery */}
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div style={{ width: 25, height: 12, borderRadius: 3, border: "1px solid currentColor", padding: 2, display: "flex", alignItems: "center" }}>
            <div style={{ width: "75%", height: "100%", background: "currentColor", borderRadius: 1 }} />
          </div>
          <div style={{ width: 2, height: 5, background: "currentColor", borderRadius: 1, opacity: 0.5 }} />
        </div>
      </div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', 'Be Vietnam Pro', sans-serif",
        padding: 20,
      }}
    >
      <div
        style={{
          width: 390,
          height: 844,
          background: "#F8F9FA",
          borderRadius: 50,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 0 1px rgba(255,255,255,0.05)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          border: "8px solid #1a1a1a",
        }}
      >
        {/* Dynamic Island */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 126,
            height: 37,
            background: "#000",
            borderRadius: 20,
            zIndex: 100,
          }}
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
          {children}
        </div>
      </div>
    </div>
  );
}