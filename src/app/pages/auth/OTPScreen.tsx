import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion } from "motion/react";
import { useApp } from "../../context/AppContext";

export default function OTPScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useApp();
  const state = (location.state as { phone: string; mode: "login" | "register" }) || { phone: "0912345678", mode: "login" };

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(60);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);
  const ref3 = useRef<HTMLInputElement>(null);
  const ref4 = useRef<HTMLInputElement>(null);
  const ref5 = useRef<HTMLInputElement>(null);
  const refs = [ref0, ref1, ref2, ref3, ref4, ref5];

  useEffect(() => {
    refs[0].current?.focus();
    const t = setInterval(() => setCountdown(c => (c > 0 ? c - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const handleChange = (idx: number, val: string) => {
    if (!/^[0-9]?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    setError("");
    if (val && idx < 5) refs[idx + 1].current?.focus();
    if (!val && idx > 0) refs[idx - 1].current?.focus();
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) refs[idx - 1].current?.focus();
  };

  const handleVerify = () => {
    const code = otp.join("");
    if (code.length < 6) {
      setError("Vui lòng nhập đủ 6 chữ số");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (state.mode === "login") {
        login(state.phone);
        navigate("/app/home");
      } else {
        navigate("/register-success");
      }
    }, 1200);
  };

  const resend = () => {
    setCountdown(60);
    setOtp(["", "", "", "", "", ""]);
    refs[0].current?.focus();
  };

  const full = otp.every(d => d !== "");

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA" }}>
      {/* Header */}
      <div style={{ background: "white", padding: "52px 24px 20px", borderBottom: "0.5px solid #E8E8E8" }}>
        <button
          onClick={() => navigate(-1)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0", display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12.5 5L7.5 10l5 5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1A1A1A" }}>Quay lại</span>
        </button>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A" }}>Xác thực OTP</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#666", marginTop: 6 }}>
          Mã OTP đã được gửi đến{" "}
          <span style={{ fontWeight: 600, color: "#1A1A1A" }}>
            {state.phone.slice(0, 4)}***{state.phone.slice(-3)}
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ flex: 1, padding: "32px 24px 24px", display: "flex", flexDirection: "column", gap: 28 }}
      >
        {/* Icon */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 24,
              background: "rgba(46,204,113,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect x="6" y="8" width="28" height="24" rx="4" stroke="#2ECC71" strokeWidth="2" />
              <path d="M14 20h12M20 14v12" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* OTP inputs */}
        <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={refs[idx]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleChange(idx, e.target.value)}
              onKeyDown={e => handleKeyDown(idx, e)}
              style={{
                width: 48,
                height: 56,
                borderRadius: 14,
                border: `2px solid ${error ? "#E74C3C" : digit ? "#2ECC71" : "#E8E8E8"}`,
                background: digit ? "rgba(46,204,113,0.05)" : "white",
                fontFamily: "Inter, sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#1A1A1A",
                textAlign: "center",
                outline: "none",
                transition: "all 0.15s",
              }}
            />
          ))}
        </div>

        {error && (
          <div style={{ textAlign: "center", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#E74C3C", marginTop: -16 }}>
            {error}
          </div>
        )}

        {/* Resend */}
        <div style={{ textAlign: "center" }}>
          {countdown > 0 ? (
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#666" }}>
              Gửi lại mã sau{" "}
              <span style={{ fontWeight: 600, color: "#2ECC71" }}>0:{String(countdown).padStart(2, "0")}</span>
            </span>
          ) : (
            <button
              onClick={resend}
              style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#2ECC71", background: "none", border: "none", cursor: "pointer" }}
            >
              Gửi lại mã OTP
            </button>
          )}
        </div>

        <div style={{ marginTop: "auto" }}>
          <button
            onClick={handleVerify}
            disabled={!full || loading}
            style={{
              width: "100%",
              padding: "16px",
              background: full && !loading ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8",
              border: "none",
              borderRadius: 14,
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: full && !loading ? "white" : "#999",
              cursor: full && !loading ? "pointer" : "default",
              boxShadow: full && !loading ? "0 8px 24px rgba(46,204,113,0.35)" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {loading ? (
              <>
                <div
                  style={{
                    width: 18,
                    height: 18,
                    border: "2px solid rgba(255,255,255,0.3)",
                    borderTopColor: "white",
                    borderRadius: 9,
                    animation: "spin 0.8s linear infinite",
                  }}
                />
                Đang xác thực...
              </>
            ) : (
              "Xác nhận"
            )}
          </button>
        </div>

        <div style={{ textAlign: "center", fontFamily: "Inter, sans-serif", fontSize: 12, color: "#999", lineHeight: 1.6 }}>
          Demo: Nhập bất kỳ 6 chữ số để tiếp tục
        </div>
      </motion.div>
    </div>
  );
}
