import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { useApp } from "../../context/AppContext";

export default function KYCUploadScreen() {
  const navigate = useNavigate();
  const { setKYCData } = useApp();
  const [uploaded, setUploaded] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImgUrl(url);
    setUploaded(true);
  };

  const handleDemo = () => {
    setImgUrl("https://images.unsplash.com/photo-1633058851349-55a9a188e338?w=400&q=80");
    setUploaded(true);
  };

  const handleProcess = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setKYCData({
        idNumber: "079304012345",
        fullName: "NGUYỄN VĂN AN",
        dob: "15/03/1990",
        hometown: "Hà Nội",
        address: "123 Lê Lợi, Quận 1, TP. Hồ Chí Minh",
        issueDate: "20/06/2021",
        issuePlace: "Cục CS QLHC về TTXH",
        imageUrl: imgUrl,
      });
      navigate("/kyc-confirm");
    }, 2000);
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
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 24, fontWeight: 700, color: "white" }}>Xác thực danh tính</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>Bước 1/2 — Upload CCCD</div>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <div style={{ flex: 1, height: 3, borderRadius: 2, background: "white" }} />
          <div style={{ flex: 1, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.3)" }} />
        </div>
      </div>

      <div style={{ flex: 1, padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Instructions */}
        <div style={{ background: "rgba(241,196,15,0.08)", borderRadius: 14, padding: "16px", border: "1px solid rgba(241,196,15,0.2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>Hướng dẫn chụp ảnh</span>
          </div>
          {["Ảnh rõ ràng, không bị mờ hoặc chói sáng", "Chụp đủ 4 góc của thẻ CCCD", "Nền phẳng, tối màu để dễ nhận diện", "Chỉ cần ảnh mặt trước của CCCD"].map((tip, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "4px 0" }}>
              <div style={{ width: 16, height: 16, borderRadius: 8, background: "rgba(46,204,113,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l2 2 3-3" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#444", lineHeight: 1.5 }}>{tip}</span>
            </div>
          ))}
        </div>

        {/* Upload area */}
        <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: "none" }} />
        
        {!uploaded ? (
          <motion.div whileTap={{ scale: 0.98 }} onClick={() => fileRef.current?.click()}
            style={{ background: "white", borderRadius: 20, border: "2px dashed #2ECC71", padding: "40px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, cursor: "pointer" }}
          >
            <div style={{ width: 72, height: 72, borderRadius: 20, background: "rgba(46,204,113,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 24V12M12 18l6-6 6 6" stroke="#2ECC71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="4" y="6" width="28" height="24" rx="4" stroke="#2ECC71" strokeWidth="1.5" strokeDasharray="4 3"/>
              </svg>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: "#1A1A1A" }}>Upload ảnh CCCD</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666", marginTop: 4 }}>Chạm để chọn ảnh từ thư viện</div>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#2ECC71", fontWeight: 500 }}>PNG, JPG, HEIC tối đa 10MB</div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
          >
            <div style={{ position: "relative" }}>
              <img src={imgUrl} alt="CCCD" style={{ width: "100%", height: 180, objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(46,204,113,0.9)", borderRadius: 20, padding: "4px 12px", display: "flex", alignItems: "center", gap: 4 }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "white" }}>Đã upload</span>
              </div>
            </div>
            <div style={{ padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>Ảnh CCCD mặt trước</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#666", marginTop: 2 }}>Sẵn sàng để xử lý OCR</div>
              </div>
              <button onClick={() => { setUploaded(false); setImgUrl(""); }} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#E74C3C", background: "none", border: "1px solid #E74C3C", borderRadius: 8, padding: "6px 12px", cursor: "pointer" }}>
                Đổi ảnh
              </button>
            </div>
          </motion.div>
        )}

        {/* Demo button */}
        {!uploaded && (
          <button onClick={handleDemo} style={{ width: "100%", padding: "14px", background: "transparent", border: "1.5px solid #2ECC71", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#2ECC71", cursor: "pointer" }}>
            🎭 Dùng ảnh demo
          </button>
        )}

        {/* Camera option */}
        {!uploaded && (
          <button onClick={() => fileRef.current?.click()} style={{ width: "100%", padding: "14px", background: "transparent", border: "1.5px solid #E8E8E8", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#666", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="5" width="14" height="10" rx="2" stroke="#666" strokeWidth="1.5"/><circle cx="9" cy="10" r="2.5" stroke="#666" strokeWidth="1.5"/><path d="M6.5 5l1-2h3l1 2" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Chụp ảnh trực tiếp
          </button>
        )}

        <div style={{ marginTop: "auto" }}>
          <button
            onClick={handleProcess}
            disabled={!uploaded || loading}
            style={{ width: "100%", padding: "16px", background: uploaded && !loading ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: uploaded && !loading ? "white" : "#999", cursor: uploaded && !loading ? "pointer" : "default", boxShadow: uploaded && !loading ? "0 8px 24px rgba(46,204,113,0.35)" : "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            {loading ? (
              <>
                <div style={{ width: 18, height: 18, border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", borderRadius: 9, animation: "spin 0.8s linear infinite" }} />
                Đang phân tích OCR...
              </>
            ) : "Tiếp tục → Xác nhận thông tin"}
          </button>
        </div>
      </div>
    </div>
  );
}
