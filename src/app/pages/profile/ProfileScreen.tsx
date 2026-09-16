import React, { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useApp } from "../../context/AppContext";
import type { BankStatus } from "../../context/AppContext";

type ProfileView = "main" | "bank" | "bankAdd" | "support" | "ticketCreate" | "addresses" | "kyc" | "settings";

const BANK_LIST = ["Vietcombank", "Techcombank", "VPBank", "Agribank", "BIDV", "MB Bank", "VIB", "ACB", "Sacombank", "HDBank"];
const RANK_BENEFITS: Record<string, { next: string; benefit: string; points: number; maxPoints: number }> = {
  Bronze: { next: "Silver", benefit: "Hoa hồng 3%", points: 2400, maxPoints: 5000 },
  Silver: { next: "Gold", benefit: "Hoa hồng 5%", points: 8500, maxPoints: 15000 },
  Gold: { next: "Platinum", benefit: "Hoa hồng 7%", points: 24500, maxPoints: 50000 },
  Platinum: { next: "Diamond", benefit: "Hoa hồng 10%", points: 65000, maxPoints: 100000 },
  Diamond: { next: "VIP", benefit: "Hoa hồng 12%", points: 72000, maxPoints: 100000 },
};

export default function ProfileScreen() {
  const navigate = useNavigate();
  const { user, banks, addBankAccount, kycData, kycStatus, logout, tickets } = useApp();
  const [view, setView] = useState<ProfileView>("main");
  const [bankForm, setBankForm] = useState({ bankName: "", accountNumber: "", accountName: "" });
  const [ticketForm, setTicketForm] = useState({ title: "", content: "" });

  const rankColors: Record<string, string> = { Bronze: "#CD7F32", Silver: "#AAB7B8", Gold: "#F1C40F", Platinum: "#BDC3C7", Diamond: "#2ECC71" };
  const rankBenefit = RANK_BENEFITS[user.rank] || RANK_BENEFITS.Diamond;

  if (view === "bank") {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
        <div style={{ background: "white", padding: "52px 20px 16px", borderBottom: "0.5px solid #E8E8E8" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => setView("main")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 5L7.5 10l5 5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 17, fontWeight: 700, color: "#1A1A1A" }}>Quản lý ngân hàng</div>
            {banks.length < 3 && <button onClick={() => setView("bankAdd")} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#2ECC71", background: "none", border: "none", cursor: "pointer" }}>+ Thêm</button>}
            {banks.length >= 3 && <div style={{ width: 40 }} />}
          </div>
        </div>
        <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
          {banks.length === 0 && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 12 }}>
              <div style={{ fontSize: 48 }}>🏦</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 500, color: "#666" }}>Chưa có tài khoản ngân hàng</div>
              <button onClick={() => setView("bankAdd")} style={{ padding: "12px 24px", borderRadius: 14, background: "linear-gradient(135deg, #2ECC71, #27AE60)", border: "none", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "white", cursor: "pointer" }}>
                Thêm tài khoản
              </button>
            </div>
          )}
          {banks.map(bank => (
            <div key={bank.id} style={{ background: "white", borderRadius: 16, padding: "16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "linear-gradient(135deg, #1a5c35, #2ECC71)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="7" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5"/><path d="M2 11h18M6 7V5a1 1 0 011-1h8a1 1 0 011 1v2" stroke="white" strokeWidth="1.5"/><rect x="5" y="14" width="4" height="2" rx="1" fill="white"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{bank.bankName}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#666", marginTop: 2 }}>•••• {bank.accountNumber.slice(-4)}</div>
                  </div>
                </div>
                <div style={{ padding: "4px 10px", borderRadius: 20, background: bank.status === "approved" ? "rgba(46,204,113,0.1)" : "rgba(230,126,34,0.1)" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: bank.status === "approved" ? "#2ECC71" : "#E67E22" }}>
                    {bank.status === "approved" ? "✓ Đã duyệt" : "⏳ Chờ duyệt"}
                  </span>
                </div>
              </div>
              <div style={{ background: "#F8F8F8", borderRadius: 10, padding: "10px 12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999" }}>Số tài khoản</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "#1A1A1A" }}>{bank.accountNumber}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999" }}>Chủ tài khoản</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "#1A1A1A" }}>{bank.accountName}</span>
                </div>
              </div>
              {bank.status === "pending" && (
                <div style={{ marginTop: 10, padding: "8px 12px", background: "rgba(230,126,34,0.06)", borderRadius: 8, fontFamily: "Inter, sans-serif", fontSize: 11, color: "#E67E22", lineHeight: 1.5 }}>
                  Tài khoản đang chờ admin phê duyệt. Bạn có thể xem lại thông tin trong lúc chờ đợi.
                </div>
              )}
            </div>
          ))}
          {banks.length > 0 && banks.length < 3 && (
            <div style={{ padding: "12px", background: "rgba(46,204,113,0.05)", borderRadius: 12, textAlign: "center", border: "1px dashed rgba(46,204,113,0.3)" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#666" }}>Còn có thể thêm {3 - banks.length} tài khoản ngân hàng</span>
            </div>
          )}
          {banks.length >= 3 && (
            <div style={{ padding: "12px", background: "rgba(231,76,60,0.05)", borderRadius: 12, textAlign: "center" }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#E74C3C" }}>Đã đạt tối đa 3 tài khoản ngân hàng</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (view === "bankAdd") {
    const canSubmit = bankForm.bankName && bankForm.accountNumber.length >= 9 && bankForm.accountName.length >= 3;
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
        <div style={{ background: "white", padding: "52px 20px 16px", borderBottom: "0.5px solid #E8E8E8" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => setView("bank")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 5L7.5 10l5 5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 17, fontWeight: 700, color: "#1A1A1A" }}>Thêm ngân hàng</div>
            <div style={{ width: 40 }} />
          </div>
        </div>
        <div style={{ flex: 1, padding: "20px 24px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { label: "Ngân hàng", key: "bankName", placeholder: "Chọn ngân hàng", isSelect: true },
            { label: "Số tài khoản", key: "accountNumber", placeholder: "Nhập số tài khoản" },
            { label: "Tên chủ tài khoản", key: "accountName", placeholder: "NGUYEN VAN AN (chữ hoa)" },
          ].map(field => (
            <div key={field.key}>
              <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.8 }}>{field.label}</label>
              {field.isSelect ? (
                <select value={bankForm.bankName} onChange={e => setBankForm(f => ({ ...f, bankName: e.target.value }))}
                  style={{ marginTop: 8, width: "100%", padding: "14px 16px", border: "1.5px solid #E8E8E8", borderRadius: 14, background: "#FAFAFA", fontFamily: "Inter, sans-serif", fontSize: 14, color: bankForm.bankName ? "#1A1A1A" : "#999", outline: "none", appearance: "none", boxSizing: "border-box" }}
                >
                  <option value="">Chọn ngân hàng</option>
                  {BANK_LIST.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              ) : (
                <input type={field.key === "accountNumber" ? "tel" : "text"} value={bankForm[field.key as keyof typeof bankForm]} onChange={e => setBankForm(f => ({ ...f, [field.key]: e.target.value }))} placeholder={field.placeholder}
                  style={{ marginTop: 8, width: "100%", padding: "14px 16px", border: "1.5px solid #E8E8E8", borderRadius: 14, background: "#FAFAFA", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1A1A1A", outline: "none", boxSizing: "border-box" }}
                />
              )}
            </div>
          ))}
          <div style={{ padding: "14px", background: "rgba(241,196,15,0.06)", borderRadius: 12, border: "1px solid rgba(241,196,15,0.15)" }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#666", lineHeight: 1.6 }}>
              ⚠️ Tài khoản ngân hàng cần được admin xét duyệt trước khi có thể rút tiền. Thời gian duyệt: 1-2 ngày làm việc.
            </div>
          </div>
          <button onClick={() => { addBankAccount(bankForm); setView("bank"); }} disabled={!canSubmit}
            style={{ width: "100%", padding: "16px", background: canSubmit ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: canSubmit ? "white" : "#999", cursor: canSubmit ? "pointer" : "default", boxShadow: canSubmit ? "0 8px 24px rgba(46,204,113,0.35)" : "none" }}>
            Gửi yêu cầu xét duyệt
          </button>
        </div>
      </div>
    );
  }

  if (view === "support") {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
        <div style={{ background: "white", padding: "52px 20px 16px", borderBottom: "0.5px solid #E8E8E8" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => setView("main")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 5L7.5 10l5 5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 17, fontWeight: 700, color: "#1A1A1A" }}>Hỗ trợ</div>
            <button onClick={() => setView("ticketCreate")} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#2ECC71", background: "none", border: "none", cursor: "pointer" }}>Tạo ticket</button>
          </div>
        </div>
        <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {tickets.map(ticket => {
            const cfg = { open: { color: "#3498DB", bg: "rgba(52,152,219,0.08)", label: "Mở" }, processing: { color: "#E67E22", bg: "rgba(230,126,34,0.08)", label: "Đang xử lý" }, closed: { color: "#2ECC71", bg: "rgba(46,204,113,0.08)", label: "Đã đóng" } }[ticket.status];
            return (
              <div key={ticket.id} style={{ background: "white", borderRadius: 16, padding: "14px 16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A1A", marginBottom: 2 }}>{ticket.title}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999" }}>#{ticket.id} • {ticket.date}</div>
                  </div>
                  <div style={{ padding: "3px 10px", borderRadius: 20, background: cfg.bg, flexShrink: 0 }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: cfg.color }}>{cfg.label}</span>
                  </div>
                </div>
                <div style={{ padding: "10px 12px", background: "#F8F8F8", borderRadius: 10 }}>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#555", lineHeight: 1.5 }}>{ticket.lastMessage}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (view === "ticketCreate") {
    const canSubmit = ticketForm.title.length >= 5 && ticketForm.content.length >= 10;
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
        <div style={{ background: "white", padding: "52px 20px 16px", borderBottom: "0.5px solid #E8E8E8" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => setView("support")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 5L7.5 10l5 5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </button>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 17, fontWeight: 700, color: "#1A1A1A" }}>Tạo yêu cầu hỗ trợ</div>
            <div style={{ width: 40 }} />
          </div>
        </div>
        <div style={{ flex: 1, padding: "20px 24px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.8 }}>Tiêu đề</label>
            <input value={ticketForm.title} onChange={e => setTicketForm(f => ({ ...f, title: e.target.value }))} placeholder="Mô tả ngắn gọn vấn đề" style={{ marginTop: 8, width: "100%", padding: "14px 16px", border: "1.5px solid #E8E8E8", borderRadius: 14, background: "#FAFAFA", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1A1A1A", outline: "none", boxSizing: "border-box" }} />
          </div>
          <div>
            <label style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.8 }}>Nội dung</label>
            <textarea value={ticketForm.content} onChange={e => setTicketForm(f => ({ ...f, content: e.target.value }))} placeholder="Mô tả chi tiết vấn đề bạn gặp phải..." rows={5} style={{ marginTop: 8, width: "100%", padding: "14px 16px", border: "1.5px solid #E8E8E8", borderRadius: 14, background: "#FAFAFA", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1A1A1A", outline: "none", resize: "none", boxSizing: "border-box" }} />
          </div>
          <button onClick={() => { setView("support"); }} disabled={!canSubmit} style={{ width: "100%", padding: "16px", background: canSubmit ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8", border: "none", borderRadius: 14, fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: canSubmit ? "white" : "#999", cursor: canSubmit ? "pointer" : "default", boxShadow: canSubmit ? "0 8px 24px rgba(46,204,113,0.35)" : "none" }}>
            Gửi yêu cầu
          </button>
        </div>
      </div>
    );
  }

  // Main profile view
  const menuItems = [
    { icon: "🪪", label: "Thông tin KYC", desc: kycStatus === "approved" ? "Đã xác thực" : "Chưa xác thực", badge: kycStatus === "approved" ? { text: "Đã duyệt", color: "#2ECC71" } : { text: "Chưa KYC", color: "#E67E22" }, action: () => setView("kyc") },
    { icon: "🏦", label: "Quản lý ngân hàng", desc: `${banks.length}/3 tài khoản`, badge: null, action: () => setView("bank") },
    { icon: "📍", label: "Quản lý địa chỉ", desc: "1 địa chỉ", badge: null, action: () => {} },
    { icon: "🔒", label: "Đổi mã PIN", desc: "Bảo mật tài khoản", badge: null, action: () => {} },
    { icon: "🎧", label: "Trung tâm hỗ trợ", desc: `${tickets.filter(t => t.status !== "closed").length} ticket đang xử lý`, badge: null, action: () => setView("support") },
    { icon: "📄", label: "Điều khoản sử dụng", desc: "Chính sách & Pháp lý", badge: null, action: () => {} },
  ];

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
      {/* Profile header */}
      <div style={{ background: "linear-gradient(160deg, #0d3b22 0%, #1a5c35 40%, #2ECC71 100%)", padding: "52px 20px 28px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 20 }}>
          <div style={{ position: "relative" }}>
            <img src={user.avatar} alt="avatar" style={{ width: 70, height: 70, borderRadius: 22, objectFit: "cover", border: "3px solid rgba(255,255,255,0.3)" }} />
            <div style={{ position: "absolute", bottom: -4, right: -4, width: 22, height: 22, borderRadius: 8, background: "#F1C40F", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #1a5c35", fontSize: 10 }}>💎</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 20, fontWeight: 700, color: "white" }}>{user.name}</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{user.phone}</div>
            <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
              <div style={{ padding: "3px 10px", borderRadius: 20, background: "rgba(241,196,15,0.2)", border: "1px solid rgba(241,196,15,0.3)" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#F1C40F" }}>💎 {user.rank}</span>
              </div>
              <div style={{ padding: "3px 10px", borderRadius: 20, background: "rgba(255,255,255,0.15)" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, color: "white" }}>#{user.referralCode}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rank progress */}
        <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 16, padding: "14px 16px", backdropFilter: "blur(10px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.8)" }}>Tiến trình đến hạng {rankBenefit.next}</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#F1C40F" }}>{rankBenefit.points.toLocaleString()}/{rankBenefit.maxPoints.toLocaleString()}</span>
          </div>
          <div style={{ height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 3, overflow: "hidden", marginBottom: 8 }}>
            <motion.div initial={{ width: 0 }} animate={{ width: `${(rankBenefit.points / rankBenefit.maxPoints) * 100}%` }} transition={{ duration: 1.2, delay: 0.3 }}
              style={{ height: "100%", background: "linear-gradient(90deg, #F1C40F, #E67E22)", borderRadius: 3 }}
            />
          </div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
            Đặc quyền hiện tại: <span style={{ color: "#F1C40F", fontWeight: 600 }}>{rankBenefit.benefit}</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 0, background: "white", padding: "16px 20px", borderBottom: "0.5px solid #E8E8E8" }}>
        {[
          { label: "Số dư", value: `${(user.balance / 1000000).toFixed(1)}M`, color: "#2ECC71" },
          { label: "Doanh thu", value: `${(user.revenue / 1000000).toFixed(1)}M`, color: "#3498DB" },
          { label: "Hoa hồng", value: `${(user.commission / 1000000).toFixed(1)}M`, color: "#F1C40F" },
        ].map((stat, idx) => (
          <React.Fragment key={stat.label}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 700, color: stat.color }}>{stat.value}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999", marginTop: 2 }}>{stat.label}</div>
            </div>
            {idx < 2 && <div style={{ width: 1, height: 36, background: "#E8E8E8", alignSelf: "center" }} />}
          </React.Fragment>
        ))}
      </div>

      {/* Menu */}
      <div style={{ flex: 1, padding: "16px" }}>
        <div style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: 12 }}>
          {menuItems.map((item, idx) => (
            <button key={item.label} onClick={item.action}
              style={{ width: "100%", padding: "14px 16px", border: "none", borderBottom: idx < menuItems.length - 1 ? "0.5px solid #F5F5F5" : "none", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", gap: 12, textAlign: "left" }}
            >
              <div style={{ width: 38, height: 38, borderRadius: 11, background: "#F8F8F8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                {item.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#1A1A1A" }}>{item.label}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999", marginTop: 1 }}>{item.desc}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                {item.badge && (
                  <div style={{ padding: "2px 8px", borderRadius: 20, background: `${item.badge.color}15` }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 600, color: item.badge.color }}>{item.badge.text}</span>
                  </div>
                )}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#CCC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </button>
          ))}
        </div>

        {/* KYC status sub-view */}
        {view === "kyc" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            style={{ background: "white", borderRadius: 20, padding: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", marginBottom: 12 }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>Thông tin KYC (Read-only)</div>
              <button onClick={() => setView("main")} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 4l10 10M14 4l-10 10" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
            </div>
            {[
              { label: "Số CCCD", value: kycData?.idNumber || "Chưa có" },
              { label: "Họ và tên", value: kycData?.fullName || "Chưa có" },
              { label: "Ngày sinh", value: kycData?.dob || "Chưa có" },
              { label: "Địa chỉ", value: kycData?.address || "Chưa có" },
            ].map(field => (
              <div key={field.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "0.5px solid #F5F5F5" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#999" }}>{field.label}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "#1A1A1A" }}>{field.value}</span>
              </div>
            ))}
          </motion.div>
        )}

        <button onClick={() => { logout(); navigate("/login"); }}
          style={{ width: "100%", padding: "16px", borderRadius: 16, border: "none", background: "white", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, cursor: "pointer", marginBottom: 20 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6 3H3a1 1 0 00-1 1v10a1 1 0 001 1h3M12 13l4-4-4-4M16 9H6" stroke="#E74C3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#E74C3C" }}>Đăng xuất</span>
        </button>
        <div style={{ textAlign: "center", fontFamily: "Inter, sans-serif", fontSize: 11, color: "#BBB", paddingBottom: 8 }}>AffiliPro v1.0.0 • © 2026</div>
      </div>
    </div>
  );
}
