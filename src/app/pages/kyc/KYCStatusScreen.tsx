import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useApp } from "../../context/AppContext";
import type { KYCStatus } from "../../context/AppContext";

const STATUS_CONFIG = {
  pending: { color: "#E67E22", bg: "rgba(230,126,34,0.08)", icon: "⏳", label: "Chờ xét duyệt", desc: "Hồ sơ của bạn đang trong hàng chờ xét duyệt. Chúng tôi sẽ thông báo kết quả sớm nhất.", badge: "PENDING" },
  processing: { color: "#3498DB", bg: "rgba(52,152,219,0.08)", icon: "🔄", label: "Đang xử lý", desc: "Hồ sơ của bạn đang được đội ngũ xem xét. Quá trình này thường mất 1-3 ngày làm việc.", badge: "PROCESSING" },
  approved: { color: "#2ECC71", bg: "rgba(46,204,113,0.08)", icon: "✅", label: "Xác thực thành công", desc: "Tài khoản của bạn đã được xác thực đầy đủ. Bạn có thể sử dụng toàn bộ tính năng.", badge: "APPROVED" },
  failed: { color: "#E74C3C", bg: "rgba(231,76,60,0.08)", icon: "❌", label: "Xác thực thất bại", desc: "Hồ sơ KYC không được chấp nhận. Vui lòng kiểm tra lý do và nộp lại.", badge: "FAILED" },
  none: { color: "#999", bg: "rgba(0,0,0,0.04)", icon: "📋", label: "Chưa xác thực", desc: "", badge: "NONE" },
};

export default function KYCStatusScreen() {
  const navigate = useNavigate();
  const { kycStatus, kycData, setKYCStatus, login } = useApp();

  const status = kycStatus === "none" ? "pending" : kycStatus;
  const cfg = STATUS_CONFIG[status];

  const fields = [
    { label: "Số CCCD", value: kycData?.idNumber || "079304012345" },
    { label: "Họ và tên", value: kycData?.fullName || "NGUYỄN VĂN AN" },
    { label: "Ngày sinh", value: kycData?.dob || "15/03/1990" },
    { label: "Quê quán", value: kycData?.hometown || "Hà Nội" },
    { label: "Địa chỉ thường trú", value: kycData?.address || "123 Lê Lợi, Q.1, TP.HCM" },
    { label: "Ngày cấp", value: kycData?.issueDate || "20/06/2021" },
    { label: "Nơi cấp", value: kycData?.issuePlace || "Cục CS QLHC về TTXH" },
  ];

  // Demo status switcher
  const statuses: KYCStatus[] = ["pending", "processing", "approved", "failed"];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
      {/* Header */}
      <div style={{ background: cfg.bg, padding: "52px 24px 28px", position: "relative", borderBottom: `2px solid ${cfg.color}20` }}>
        {/* Demo switcher */}
        <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
          {statuses.map(s => (
            <button key={s} onClick={() => { setKYCStatus(s); if (s === "approved") { setTimeout(() => { login("0912345678"); navigate("/app/home"); }, 500); } }} style={{ padding: "4px 10px", borderRadius: 20, border: `1px solid ${STATUS_CONFIG[s].color}`, background: status === s ? STATUS_CONFIG[s].color : "transparent", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: status === s ? "white" : STATUS_CONFIG[s].color, cursor: "pointer" }}>
              {STATUS_CONFIG[s].label.split(" ")[0]}
            </button>
          ))}
        </div>

        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} key={status}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
        >
          <div style={{ width: 72, height: 72, borderRadius: 24, background: cfg.bg, border: `2px solid ${cfg.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>
            {cfg.icon}
          </div>
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 20, fontWeight: 700, color: cfg.color, textAlign: "center" }}>{cfg.label}</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666", textAlign: "center", marginTop: 6, lineHeight: 1.5, maxWidth: 280, margin: "6px auto 0" }}>{cfg.desc}</div>
          </div>
          {/* Status badge */}
          <div style={{ padding: "4px 16px", borderRadius: 20, background: cfg.color, fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "white", letterSpacing: 1 }}>
            {cfg.badge}
          </div>
        </motion.div>
      </div>

      {/* Submitted data (read-only) */}
      <div style={{ flex: 1, padding: "20px 24px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <div style={{ flex: 1, height: 0.5, background: "#E8E8E8" }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: 0.8 }}>Thông tin đã nộp (Read-only)</span>
          <div style={{ flex: 1, height: 0.5, background: "#E8E8E8" }} />
        </div>

        {kycData?.imageUrl && (
          <div style={{ borderRadius: 14, overflow: "hidden", height: 120, marginBottom: 14 }}>
            <img src={kycData.imageUrl} alt="CCCD" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        )}

        <div style={{ background: "white", borderRadius: 20, padding: "4px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: 16 }}>
          {fields.map((field, idx) => (
            <div key={field.label} style={{ padding: "12px 0", borderBottom: idx < fields.length - 1 ? "0.5px solid #F0F0F0" : "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#999", flexShrink: 0 }}>{field.label}</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#1A1A1A", textAlign: "right" }}>{field.value}</span>
            </div>
          ))}
        </div>

        {/* Submission time */}
        <div style={{ background: "white", borderRadius: 14, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: 20 }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>Thời gian nộp hồ sơ</span>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>14:32 — 15/04/2026</span>
        </div>

        {status === "failed" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            style={{ background: "rgba(231,76,60,0.06)", border: "1px solid rgba(231,76,60,0.15)", borderRadius: 14, padding: "16px", marginBottom: 16 }}
          >
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#E74C3C", marginBottom: 6 }}>Lý do từ chối:</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#444", lineHeight: 1.5 }}>Ảnh CCCD bị mờ, không đọc được đầy đủ thông tin. Vui lòng chụp lại ảnh rõ nét hơn.</div>
          </motion.div>
        )}

        {status === "failed" && (
          <button onClick={() => navigate("/kyc")} style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg, #E74C3C, #C0392B)", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: "white", cursor: "pointer", boxShadow: "0 8px 24px rgba(231,76,60,0.3)" }}>
            Nộp lại hồ sơ KYC
          </button>
        )}

        {(status === "pending" || status === "processing") && (
          <div style={{ textAlign: "center", padding: "12px", background: "rgba(241,196,15,0.06)", borderRadius: 12, border: "1px solid rgba(241,196,15,0.15)" }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>⏱️ Thời gian xử lý dự kiến: <strong>1-3 ngày làm việc</strong></div>
          </div>
        )}

        {status === "approved" && (
          <button onClick={() => { login("0912345678"); navigate("/app/home"); }} style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg, #2ECC71, #27AE60)", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: "white", cursor: "pointer", boxShadow: "0 8px 24px rgba(46,204,113,0.35)" }}>
            🎉 Vào ứng dụng ngay
          </button>
        )}
      </div>
    </div>
  );
}
