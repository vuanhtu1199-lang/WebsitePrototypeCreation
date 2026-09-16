import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { IOSStatusBar } from "../../components/layout/PhoneFrame";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [focused, setFocused] = useState(false);

  const handleNext = () => {
    const clean = phone.replace(/\s/g, "");
    if (clean.length < 9 || clean.length > 11) {
      setError("Số điện thoại không hợp lệ");
      return;
    }
    setError("");
    navigate("/otp", { state: { phone: clean, mode: "login" } });
  };

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 4) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA" }}>
      <IOSStatusBar />

      {/* Green header */}
      <div
        style={{
          background: "linear-gradient(160deg, #1a5c35 0%, #2ECC71 100%)",
          padding: "30px 24px 50px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
        <div style={{ position: "absolute", bottom: -30, left: 20, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />

        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <div style={{ width: 36, height: 36, background: "white", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 52 52" fill="none">
                <path d="M26 8L6 20v12l20 12 20-12V20L26 8z" fill="#2ECC71"/>
                <path d="M14 24l8 6 16-10" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 700, color: "white" }}>AffiliPro</span>
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 26, fontWeight: 700, color: "white", lineHeight: 1.3 }}>
            Chào mừng<br />trở lại! 👋
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", marginTop: 6 }}>
            Đăng nhập để tiếp tục
          </div>
        </motion.div>
      </div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{
          flex: 1,
          background: "white",
          borderRadius: "28px 28px 0 0",
          marginTop: -24,
          padding: "32px 24px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <div>
          <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.8 }}>
            Số điện thoại
          </label>
          <div
            style={{
              marginTop: 8,
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: `1.5px solid ${error ? "#E74C3C" : focused ? "#2ECC71" : "#E8E8E8"}`,
              borderRadius: 14,
              padding: "14px 16px",
              background: "#FAFAFA",
              transition: "border-color 0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6, borderRight: "1.5px solid #E8E8E8", paddingRight: 12 }}>
              <span style={{ fontSize: 16 }}>🇻🇳</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#1A1A1A" }}>+84</span>
            </div>
            <input
              type="tel"
              value={phone}
              onChange={e => { setPhone(formatPhone(e.target.value)); setError(""); }}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="0912 345 678"
              style={{
                flex: 1,
                border: "none",
                background: "transparent",
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "#1A1A1A",
                outline: "none",
              }}
            />
            {phone && (
              <button onClick={() => setPhone("")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <div style={{ width: 20, height: 20, borderRadius: 10, background: "#CCC", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2l6 6M8 2l-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </button>
            )}
          </div>
          {error && <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#E74C3C", marginTop: 6 }}>{error}</div>}
        </div>

        <button
          onClick={handleNext}
          style={{
            width: "100%",
            padding: "16px",
            background: phone.replace(/\s/g, "").length >= 9 ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8",
            border: "none",
            borderRadius: 14,
            fontFamily: "Inter, sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: phone.replace(/\s/g, "").length >= 9 ? "white" : "#999",
            cursor: phone.replace(/\s/g, "").length >= 9 ? "pointer" : "default",
            transition: "all 0.2s",
            boxShadow: phone.replace(/\s/g, "").length >= 9 ? "0 8px 24px rgba(46,204,113,0.35)" : "none",
          }}
        >
          Tiếp tục
        </button>

        <div style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#666" }}>Chưa có tài khoản? </span>
          <button
            onClick={() => navigate("/register")}
            style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#2ECC71", background: "none", border: "none", cursor: "pointer" }}
          >
            Đăng ký ngay
          </button>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }}>
          <div style={{ flex: 1, height: 1, background: "#E8E8E8" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#999" }}>Bảo mật & An toàn</span>
          <div style={{ flex: 1, height: 1, background: "#E8E8E8" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
          {["Mã hóa 256-bit", "Xác thực 2FA", "Bảo vệ PIN"].map(item => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <div style={{ width: 14, height: 14, borderRadius: 7, background: "rgba(46,204,113,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1.5 4l2 2 3-3" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#666" }}>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
