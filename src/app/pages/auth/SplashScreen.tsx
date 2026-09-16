import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/login"), 2800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100%",
        background: "linear-gradient(160deg, #1a5c35 0%, #2ECC71 50%, #27AE60 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background circles */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
      <div style={{ position: "absolute", top: "30%", left: -40, width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}
      >
        {/* Logo */}
        <div
          style={{
            width: 90,
            height: 90,
            background: "white",
            borderRadius: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M26 8L6 20v12l20 12 20-12V20L26 8z" fill="#2ECC71"/>
            <path d="M26 8L6 20l20 12 20-12L26 8z" fill="#27AE60"/>
            <path d="M14 24l8 6 16-10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{ textAlign: "center" }}
        >
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 32, fontWeight: 800, color: "white", letterSpacing: -0.5 }}>
            AffiliPro
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>
            Nền tảng đại lý số #1 Việt Nam
          </div>
        </motion.div>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ position: "absolute", bottom: 80 }}
      >
        <div style={{ width: 160, height: 3, background: "rgba(255,255,255,0.2)", borderRadius: 2, overflow: "hidden" }}>
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
            style={{ height: "100%", background: "white", borderRadius: 2 }}
          />
        </div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)", textAlign: "center", marginTop: 12 }}>
          Đang tải...
        </div>
      </motion.div>

      {/* Version */}
      <div style={{ position: "absolute", bottom: 40, fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
        Phiên bản 1.0.0
      </div>
    </div>
  );
}
