import React from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export default function RegisterSuccessScreen() {
  const navigate = useNavigate();

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", alignItems: "center", justifyContent: "center", padding: 32, gap: 0 }}>
      {/* Success animation */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5, duration: 0.7 }}
        style={{ width: 120, height: 120, borderRadius: 40, background: "linear-gradient(135deg, #2ECC71, #27AE60)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, boxShadow: "0 20px 60px rgba(46,204,113,0.4)" }}
      >
        <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.4, duration: 0.5 }} width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M14 28l10 10 18-20" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 24, fontWeight: 700, color: "#1A1A1A" }}>Đăng ký thành công!</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#666", marginTop: 8, lineHeight: 1.6 }}>
          Tài khoản của bạn đã được tạo và đang chờ admin phê duyệt.
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        style={{ marginTop: 28, background: "white", borderRadius: 20, padding: "20px 24px", width: "100%", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(230,126,34,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#E67E22" strokeWidth="1.5"/><path d="M10 6v5M10 13v1" stroke="#E67E22" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </div>
          <div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>Đang chờ xét duyệt</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#E67E22" }}>Thời gian xử lý: 1-3 ngày làm việc</div>
          </div>
        </div>
        {[
          { icon: "📋", text: "Hoàn thiện KYC để kích hoạt đầy đủ tính năng" },
          { icon: "🏦", text: "Thêm tài khoản ngân hàng để rút tiền" },
          { icon: "👥", text: "Chia sẻ mã giới thiệu để nhận hoa hồng" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 0", borderTop: i > 0 ? "0.5px solid #F0F0F0" : "0.5px solid #F0F0F0" }}>
            <span style={{ fontSize: 16 }}>{item.icon}</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#444" }}>{item.text}</span>
          </div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} style={{ marginTop: 28, width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
        <button onClick={() => navigate("/kyc")} style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg, #2ECC71, #27AE60)", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: "white", cursor: "pointer", boxShadow: "0 8px 24px rgba(46,204,113,0.35)" }}>
          Xác thực KYC ngay
        </button>
        <button onClick={() => navigate("/login")} style={{ width: "100%", padding: "16px", background: "transparent", border: "1.5px solid #E8E8E8", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#666", cursor: "pointer" }}>
          Về trang đăng nhập
        </button>
      </motion.div>
    </div>
  );
}
