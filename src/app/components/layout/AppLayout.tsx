import React from "react";
import { useNavigate, useLocation, Outlet } from "react-router";
import { IOSStatusBar } from "./PhoneFrame";

const tabs = [
  {
    path: "/app/home",
    label: "Trang chủ",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V12h6v9" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    path: "/app/shop",
    label: "Mua hàng",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    path: "/app/network",
    label: "Hệ thống",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="2.5" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8"/>
        <circle cx="5" cy="17" r="2.5" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8"/>
        <circle cx="19" cy="17" r="2.5" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8"/>
        <path d="M12 7.5v4m0 0l-5 4.5m5-4.5l5 4.5" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    path: "/app/profile",
    label: "Tài khoản",
    icon: (active: boolean) => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={active ? "#2ECC71" : "#999"} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#F8F9FA" }}>
      <IOSStatusBar />
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>
        <Outlet />
      </div>
      {/* Bottom Tab Bar */}
      <div
        style={{
          height: 83,
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "0.5px solid rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "flex-start",
          paddingTop: 8,
          paddingBottom: 0,
          flexShrink: 0,
        }}
      >
        {tabs.map(tab => {
          const isActive = location.pathname.startsWith(tab.path);
          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px 0",
              }}
            >
              {tab.icon(isActive)}
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 10,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#2ECC71" : "#999",
                  letterSpacing: 0,
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
