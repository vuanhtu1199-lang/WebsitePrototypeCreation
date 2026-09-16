import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useApp } from "../../context/AppContext";

const REFERRAL_MAP: Record<string, string> = {
  "NVA2024": "Nguyễn Văn An (Diamond)",
  "ADMIN01": "Admin System",
  "TBB2024": "Trần Thị Bích (Gold)",
  "LVC2024": "Lê Văn Cường (Silver)",
};

type Step = 1 | 2 | 3;

export default function RegisterScreen() {
  const navigate = useNavigate();
  const { setRegistrationPhone } = useApp();
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({ phone: "", pin: "", confirmPin: "", referral: "" });
  const [referralName, setReferralName] = useState("");
  const [referralError, setReferralError] = useState("");
  const [pinError, setPinError] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const checkReferral = (code: string) => {
    if (!code) { setReferralName(""); setReferralError(""); return; }
    const name = REFERRAL_MAP[code.toUpperCase()];
    if (name) { setReferralName(name); setReferralError(""); }
    else { setReferralName(""); setReferralError("Mã giới thiệu không tồn tại"); }
  };

  const handleStep1 = () => {
    const clean = form.phone.replace(/\s/g, "");
    if (clean.length < 9) return;
    setRegistrationPhone(clean);
    setStep(2);
  };

  const handleStep2 = () => {
    if (form.pin.length < 6) { setPinError("PIN phải có đúng 6 số"); return; }
    if (form.pin !== form.confirmPin) { setPinError("Mã PIN không khớp"); return; }
    setPinError("");
    setStep(3);
  };

  const handleSubmit = () => {
    if (!referralName) { setReferralError("Vui lòng nhập mã giới thiệu hợp lệ"); return; }
    navigate("/otp", { state: { phone: form.phone.replace(/\s/g, ""), mode: "register" } });
  };

  const stepConfig = [
    { label: "Số điện thoại", done: step > 1 },
    { label: "Mã PIN", done: step > 2 },
    { label: "Giới thiệu", done: false },
  ];

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 4) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(160deg, #1a5c35 0%, #2ECC71 100%)", padding: "52px 24px 28px", position: "relative" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <button onClick={() => step > 1 ? setStep(s => (s - 1) as Step) : navigate("/login")} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 5L7.5 10l5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "white" }}>Quay lại</span>
        </button>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 24, fontWeight: 700, color: "white" }}>Tạo tài khoản</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>Bước {step}/3 — {stepConfig[step - 1].label}</div>

        {/* Progress steps */}
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{ flex: 1, height: 3, borderRadius: 2, background: s <= step ? "white" : "rgba(255,255,255,0.3)", transition: "background 0.3s" }} />
          ))}
        </div>
      </div>

      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        style={{ flex: 1, background: "white", borderRadius: "28px 28px 0 0", marginTop: -20, padding: "28px 24px 40px", display: "flex", flexDirection: "column", gap: 20 }}
      >
        {step === 1 && (
          <>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: "#1A1A1A", marginBottom: 4 }}>Nhập số điện thoại</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>Số điện thoại sẽ là tên đăng nhập của bạn</div>
            </div>
            <div>
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.8 }}>Số điện thoại</label>
              <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 12, border: "1.5px solid #E8E8E8", borderRadius: 14, padding: "14px 16px", background: "#FAFAFA" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, borderRight: "1.5px solid #E8E8E8", paddingRight: 12 }}>
                  <span style={{ fontSize: 16 }}>🇻🇳</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500 }}>+84</span>
                </div>
                <input type="tel" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: formatPhone(e.target.value) }))} placeholder="0912 345 678" style={{ flex: 1, border: "none", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 500, color: "#1A1A1A", outline: "none" }} />
              </div>
            </div>
            <button onClick={handleStep1} disabled={form.phone.replace(/\s/g, "").length < 9} style={{ width: "100%", padding: "16px", background: form.phone.replace(/\s/g, "").length >= 9 ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: form.phone.replace(/\s/g, "").length >= 9 ? "white" : "#999", cursor: form.phone.replace(/\s/g, "").length >= 9 ? "pointer" : "default", boxShadow: form.phone.replace(/\s/g, "").length >= 9 ? "0 8px 24px rgba(46,204,113,0.35)" : "none" }}>
              Tiếp theo
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: "#1A1A1A", marginBottom: 4 }}>Tạo mã PIN</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>PIN 6 số dùng để xác thực giao dịch</div>
            </div>
            {[
              { label: "Mã PIN", key: "pin", show: showPin, toggle: () => setShowPin(v => !v) },
              { label: "Xác nhận PIN", key: "confirmPin", show: showConfirm, toggle: () => setShowConfirm(v => !v) },
            ].map(field => (
              <div key={field.key}>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.8 }}>{field.label}</label>
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 12, border: `1.5px solid ${pinError && field.key === "confirmPin" ? "#E74C3C" : "#E8E8E8"}`, borderRadius: 14, padding: "14px 16px", background: "#FAFAFA" }}>
                  <input type={field.show ? "text" : "password"} inputMode="numeric" maxLength={6} value={form[field.key as "pin" | "confirmPin"]} onChange={e => { setForm(f => ({ ...f, [field.key]: e.target.value.replace(/\D/g, "").slice(0, 6) })); setPinError(""); }} placeholder="• • • • • •" style={{ flex: 1, border: "none", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: 4, color: "#1A1A1A", outline: "none" }} />
                  <button onClick={field.toggle} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d={field.show ? "M2 10s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" : "M2 2l16 16M4.3 4.3A9 9 0 002 10s3 6 8 6a9 9 0 004.7-1.3M7.5 7.5A3 3 0 0110 7a3 3 0 012.5 4.5"} stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>{field.show && <circle cx="10" cy="10" r="2" stroke="#999" strokeWidth="1.5"/>}</svg>
                  </button>
                </div>
                {/* PIN strength dots */}
                {field.key === "pin" && form.pin.length > 0 && (
                  <div style={{ display: "flex", gap: 4, marginTop: 8 }}>
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= form.pin.length ? "#2ECC71" : "#E8E8E8", transition: "background 0.15s" }} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            {pinError && <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#E74C3C" }}>{pinError}</div>}
            <button onClick={handleStep2} disabled={form.pin.length < 6 || !form.confirmPin} style={{ width: "100%", padding: "16px", background: form.pin.length === 6 && form.confirmPin ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: form.pin.length === 6 && form.confirmPin ? "white" : "#999", cursor: form.pin.length === 6 && form.confirmPin ? "pointer" : "default", boxShadow: form.pin.length === 6 && form.confirmPin ? "0 8px 24px rgba(46,204,113,0.35)" : "none" }}>
              Tiếp theo
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 600, color: "#1A1A1A", marginBottom: 4 }}>Mã giới thiệu</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>Nhập mã người giới thiệu để kích hoạt tài khoản</div>
            </div>
            <div>
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.8 }}>Mã giới thiệu</label>
              <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 12, border: `1.5px solid ${referralError ? "#E74C3C" : referralName ? "#2ECC71" : "#E8E8E8"}`, borderRadius: 14, padding: "14px 16px", background: referralName ? "rgba(46,204,113,0.04)" : "#FAFAFA" }}>
                <input type="text" value={form.referral} onChange={e => { const v = e.target.value.toUpperCase(); setForm(f => ({ ...f, referral: v })); checkReferral(v); }} placeholder="Ví dụ: NVA2024" style={{ flex: 1, border: "none", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#1A1A1A", outline: "none", textTransform: "uppercase", letterSpacing: 1 }} />
                {referralName && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#2ECC71"/><path d="M6 10l3 3 5-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              {referralError && <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#E74C3C", marginTop: 6 }}>{referralError}</div>}
              {referralName && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: 10, padding: "12px 14px", background: "rgba(46,204,113,0.08)", borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 18, background: "linear-gradient(135deg, #2ECC71, #27AE60)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="3.5" stroke="white" strokeWidth="1.5"/><path d="M2.5 16c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#2ECC71", fontWeight: 600 }}>Người giới thiệu</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1A1A1A", fontWeight: 500 }}>{referralName}</div>
                  </div>
                </motion.div>
              )}
            </div>
            <div style={{ padding: "14px", background: "rgba(241,196,15,0.08)", borderRadius: 12, display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>⚠️</span>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.6 }}>
                Mã giới thiệu không thể thay đổi sau khi đăng ký. Hãy chắc chắn nhập đúng mã.
              </div>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#999", textAlign: "center" }}>
              Thử: <span style={{ fontWeight: 600 }}>NVA2024</span>, <span style={{ fontWeight: 600 }}>TBB2024</span>, <span style={{ fontWeight: 600 }}>LVC2024</span>
            </div>
            <button onClick={handleSubmit} style={{ width: "100%", padding: "16px", background: referralName ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: referralName ? "white" : "#999", cursor: referralName ? "pointer" : "default", boxShadow: referralName ? "0 8px 24px rgba(46,204,113,0.35)" : "none" }}>
              Hoàn tất đăng ký
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}
