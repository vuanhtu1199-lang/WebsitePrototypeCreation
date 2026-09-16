import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useApp } from "../../context/AppContext";

export default function KYCConfirmScreen() {
  const navigate = useNavigate();
  const { kycData, submitKYC } = useApp();

  const [form, setForm] = useState({
    idNumber: kycData?.idNumber || "079304012345",
    fullName: kycData?.fullName || "NGUYỄN VĂN AN",
    dob: kycData?.dob || "15/03/1990",
    hometown: kycData?.hometown || "Hà Nội",
    address: kycData?.address || "123 Lê Lợi, Quận 1, TP. Hồ Chí Minh",
    issueDate: kycData?.issueDate || "20/06/2021",
    issuePlace: kycData?.issuePlace || "Cục CS QLHC về TTXH",
  });
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const fields = [
    { label: "Số CCCD", key: "idNumber", icon: "🪪" },
    { label: "Họ và tên", key: "fullName", icon: "👤" },
    { label: "Ngày sinh", key: "dob", icon: "🎂" },
    { label: "Quê quán", key: "hometown", icon: "🏠" },
    { label: "Địa chỉ thường trú", key: "address", icon: "📍" },
    { label: "Ngày cấp", key: "issueDate", icon: "📅" },
    { label: "Nơi cấp", key: "issuePlace", icon: "🏛️" },
  ];

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      submitKYC({ ...form, imageUrl: kycData?.imageUrl || "" });
      setLoading(false);
      navigate("/kyc-status");
    }, 1500);
  };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(160deg, #1a5c35 0%, #2ECC71 100%)", padding: "52px 24px 28px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <button onClick={() => navigate(-1)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 5L7.5 10l5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "white" }}>Quay lại</span>
        </button>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 24, fontWeight: 700, color: "white" }}>Xác nhận thông tin</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>Bước 2/2 — Kiểm tra dữ liệu OCR</div>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <div style={{ flex: 1, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.5)" }} />
          <div style={{ flex: 1, height: 3, borderRadius: 2, background: "white" }} />
        </div>
      </div>

      <div style={{ flex: 1, padding: "20px 24px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* OCR badge */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          style={{ background: "rgba(46,204,113,0.08)", borderRadius: 12, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, border: "1px solid rgba(46,204,113,0.2)" }}
        >
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(46,204,113,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="5" height="5" rx="1" stroke="#2ECC71" strokeWidth="1.5"/><rect x="9" y="2" width="5" height="5" rx="1" stroke="#2ECC71" strokeWidth="1.5"/><rect x="2" y="9" width="5" height="5" rx="1" stroke="#2ECC71" strokeWidth="1.5"/><path d="M10 10l1.5 1.5L14 9" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#2ECC71" }}>OCR đọc thành công ✓</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#666" }}>Kiểm tra và chỉnh sửa nếu cần thiết</div>
          </div>
        </motion.div>

        {/* Image preview */}
        {kycData?.imageUrl && (
          <div style={{ background: "white", borderRadius: 14, overflow: "hidden", height: 130 }}>
            <img src={kycData.imageUrl} alt="CCCD" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}

        {/* Form fields */}
        <div style={{ background: "white", borderRadius: 20, padding: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          {fields.map((field, idx) => (
            <div key={field.key} style={{ padding: "12px 0", borderBottom: idx < fields.length - 1 ? "0.5px solid #F0F0F0" : "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <span style={{ fontSize: 13 }}>{field.icon}</span>
                <label style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: 0.6 }}>{field.label}</label>
              </div>
              <input
                type="text"
                value={form[field.key as keyof typeof form]}
                onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                style={{ width: "100%", border: "none", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#1A1A1A", outline: "none", boxSizing: "border-box" }}
              />
            </div>
          ))}
        </div>

        {/* Confirm checkbox */}
        <button onClick={() => setConfirmed(c => !c)} style={{ background: "white", border: "none", borderRadius: 14, padding: "14px 16px", cursor: "pointer", display: "flex", alignItems: "flex-start", gap: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", textAlign: "left" }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, border: `2px solid ${confirmed ? "#2ECC71" : "#DDD"}`, background: confirmed ? "#2ECC71" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1, transition: "all 0.2s" }}>
            {confirmed && <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
          </div>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#444", lineHeight: 1.5 }}>
            Tôi xác nhận thông tin trên đây là chính xác và đồng ý với{" "}
            <span style={{ color: "#2ECC71", fontWeight: 600 }}>Điều khoản sử dụng</span> của AffiliPro.
          </span>
        </button>

        <button onClick={handleSubmit} disabled={!confirmed || loading}
          style={{ width: "100%", padding: "16px", background: confirmed && !loading ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: confirmed && !loading ? "white" : "#999", cursor: confirmed && !loading ? "pointer" : "default", boxShadow: confirmed && !loading ? "0 8px 24px rgba(46,204,113,0.35)" : "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
        >
          {loading ? (
            <>
              <div style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: 9, animation: "spin 0.8s linear infinite" }} />
              Đang gửi...
            </>
          ) : "Gửi xét duyệt KYC"}
        </button>
      </div>
    </div>
  );
}
