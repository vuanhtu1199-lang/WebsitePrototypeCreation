import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useApp } from "../../context/AppContext";

const revenueData = [
  { month: "T11", personal: 18, commission: 4.2 },
  { month: "T12", personal: 24, commission: 5.8 },
  { month: "T1", personal: 28, commission: 6.5 },
  { month: "T2", personal: 32, commission: 8.1 },
  { month: "T3", personal: 38, commission: 9.4 },
  { month: "T4", personal: 48.3, commission: 12.5 },
];

const networkPie = [
  { name: "F1 (12 thành viên)", value: 12, color: "#2ECC71" },
  { name: "F2 (45 thành viên)", value: 45, color: "#F1C40F" },
];

const recentActivities = [
  { id: 1, type: "commission", title: "Hoa hồng từ Trần Thị Bích", amount: +850000, time: "2 giờ trước", icon: "💰" },
  { id: 2, type: "order", title: "Đơn hàng ORD001 đang giao", amount: -32500000, time: "1 ngày trước", icon: "📦" },
  { id: 3, type: "commission", title: "Hoa hồng từ mạng lưới F2", amount: +1200000, time: "2 ngày trước", icon: "🌿" },
  { id: 4, type: "withdraw", title: "Rút tiền về Vietcombank", amount: -5000000, time: "3 ngày trước", icon: "🏦" },
  { id: 5, type: "commission", title: "Hoa hồng từ Lê Văn Cường", amount: +620000, time: "4 ngày trước", icon: "💰" },
];

const featuredProducts = [
  { id: "1", name: "iPhone 15 Pro Max", price: 32500000, pts: "32,500", img: "https://images.unsplash.com/photo-1759588071781-d69892bd7ca1?w=300&q=80", sold: 128 },
  { id: "2", name: "Sony WH-1000XM5", price: 8500000, pts: "8,500", img: "https://images.unsplash.com/photo-1656457468703-2aaebb8477b6?w=300&q=80", sold: 95 },
  { id: "3", name: "Apple Watch Ultra", price: 19900000, pts: "19,900", img: "https://images.unsplash.com/photo-1733908511568-3abc819b21b5?w=300&q=80", sold: 72 },
];

function formatVND(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
  return n.toLocaleString();
}

function CountdownTimer() {
  const [time, setTime] = useState({ h: 14, m: 28, s: 45 });
  useEffect(() => {
    const t = setInterval(() => setTime(p => {
      let s = p.s - 1, m = p.m, h = p.h;
      if (s < 0) { s = 59; m--; }
      if (m < 0) { m = 59; h--; }
      if (h < 0) { h = 23; m = 59; s = 59; }
      return { h, m, s };
    }), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      {[time.h, time.m, time.s].map((v, i) => (
        <React.Fragment key={i}>
          <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 6, padding: "4px 8px", minWidth: 32, textAlign: "center" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "white" }}>{pad(v)}</span>
          </div>
          {i < 2 && <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>:</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const { user } = useApp();
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [activeWalletTab, setActiveWalletTab] = useState<"balance" | "revenue" | "commission">("balance");

  const walletData = {
    balance: { label: "Số dư VNĐT", value: user.balance, color: "#2ECC71" },
    revenue: { label: "Tổng doanh thu", value: user.revenue, color: "#3498DB" },
    commission: { label: "Hoa hồng nhận được", value: user.commission, color: "#F1C40F" },
  };

  const rankColors: Record<string, string> = { Bronze: "#CD7F32", Silver: "#AAB7B8", Gold: "#F1C40F", Platinum: "#BDC3C7", Diamond: "#2ECC71" };
  const rankColor = rankColors[user.rank] || "#2ECC71";

  return (
    <div style={{ paddingBottom: 20 }}>
      {/* Wallet Header */}
      <div style={{ background: "linear-gradient(160deg, #0d3b22 0%, #1a5c35 40%, #2ECC71 100%)", padding: "16px 20px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -30, left: -30, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        {/* Top bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src={user.avatar} alt="avatar" style={{ width: 38, height: 38, borderRadius: 12, objectFit: "cover", border: "2px solid rgba(255,255,255,0.3)" }} />
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>Xin chào,</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "white" }}>{user.name.split(" ").slice(-2).join(" ")}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2a7 7 0 100 14A7 7 0 009 2z" stroke="white" strokeWidth="1.5"/><path d="M9 5v5l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2a5 5 0 00-5 5v3l-1 2h12l-1-2V7a5 5 0 00-5-5zM7 14a2 2 0 004 0" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: 4, background: "#F1C40F", border: "1.5px solid #1a5c35" }} />
            </button>
          </div>
        </div>

        {/* Rank badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(241,196,15,0.15)", border: "1px solid rgba(241,196,15,0.3)", borderRadius: 20, padding: "4px 12px", marginBottom: 16 }}>
          <div style={{ width: 8, height: 8, borderRadius: 4, background: rankColor }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#F1C40F" }}>Hạng {user.rank}</span>
        </div>

        {/* Wallet tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {(["balance", "revenue", "commission"] as const).map(tab => (
            <button key={tab} onClick={() => setActiveWalletTab(tab)}
              style={{ flex: 1, padding: "6px 4px", borderRadius: 8, border: "none", cursor: "pointer", background: activeWalletTab === tab ? "rgba(255,255,255,0.2)" : "transparent", transition: "background 0.2s" }}
            >
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: activeWalletTab === tab ? 600 : 400, color: activeWalletTab === tab ? "white" : "rgba(255,255,255,0.5)" }}>
                {walletData[tab].label}
              </span>
            </button>
          ))}
        </div>

        {/* Balance display */}
        <motion.div key={activeWalletTab} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 28, fontWeight: 800, color: "white", letterSpacing: -0.5 }}>
                {balanceVisible ? `${(walletData[activeWalletTab].value / 1000000).toFixed(1)}M` : "••••••"}
              </span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>VNĐT</span>
              <button onClick={() => setBalanceVisible(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  {balanceVisible ? <><path d="M1 9s3-6 8-6 8 6 8 6-3 6-8 6-8-6-8-6z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/><circle cx="9" cy="9" r="2.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4"/></> : <path d="M2 2l14 14M5 4.3A9 9 0 001 9s3 6 8 6a9 9 0 004.7-1.3M8 5a5 5 0 015 5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.4" strokeLinecap="round"/>}
                </svg>
              </button>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
              {walletData[activeWalletTab].label}
            </div>
          </div>
        </motion.div>

        {/* Wallet actions */}
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          {[
            { label: "Nạp tiền", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8l5-5 5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { label: "Rút tiền", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 13V3M3 8l5 5 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
            { label: "Lịch sử", icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.5"/><path d="M8 5v3.5l2 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg> },
          ].map(action => (
            <button key={action.label}
              style={{ flex: 1, padding: "10px 6px", borderRadius: 12, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}
            >
              {action.icon}
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 500, color: "white" }}>{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Revenue chart */}
        <div style={{ background: "white", borderRadius: 20, padding: "16px 12px 8px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, padding: "0 4px" }}>
            <div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1A1A" }}>Tăng trưởng doanh thu</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999" }}>6 tháng gần nhất (triệu VNĐT)</div>
            </div>
            <div style={{ padding: "4px 10px", borderRadius: 20, background: "rgba(46,204,113,0.1)", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "#2ECC71" }}>+27% ▲</div>
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#999", fontSize: 11, fontFamily: "Inter" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#999", fontSize: 10, fontFamily: "Inter" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "white", border: "none", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", fontFamily: "Inter", fontSize: 12 }}
                formatter={(value: number, name: string) => [`${value}M VNĐT`, name === "personal" ? "Doanh thu" : "Hoa hồng"]}
              />
              <Line type="monotone" dataKey="personal" stroke="#2ECC71" strokeWidth={2.5} dot={{ fill: "#2ECC71", r: 3, strokeWidth: 0 }} activeDot={{ r: 5 }} />
              <Line type="monotone" dataKey="commission" stroke="#F1C40F" strokeWidth={2} dot={{ fill: "#F1C40F", r: 3, strokeWidth: 0 }} strokeDasharray="5 3" activeDot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, paddingTop: 4, paddingBottom: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 20, height: 3, borderRadius: 2, background: "#2ECC71" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#666" }}>Doanh thu</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 20, height: 3, borderRadius: 2, background: "#F1C40F", backgroundImage: "repeating-linear-gradient(90deg, #F1C40F 0px, #F1C40F 4px, transparent 4px, transparent 8px)" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#666" }}>Hoa hồng</span>
            </div>
          </div>
        </div>

        {/* Network stats */}
        <div style={{ background: "white", borderRadius: 20, padding: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1A1A", marginBottom: 12 }}>Tổng quan hệ thống</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ flex: 1 }}>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie data={networkPie} cx="50%" cy="50%" innerRadius={30} outerRadius={50} paddingAngle={3} dataKey="value" startAngle={90} endAngle={450}>
                    {networkPie.map((entry, idx) => (
                      <Cell key={`pie-cell-${entry.name}-${idx}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ fontFamily: "Inter", fontSize: 11, borderRadius: 8 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Thành viên F1", value: user.f1Count, color: "#2ECC71" },
                { label: "Thành viên F2", value: user.f2Count, color: "#F1C40F" },
                { label: "Tổng doanh thu", value: `${(user.totalSystemRevenue / 1000000).toFixed(0)}M`, color: "#3498DB" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: 4, background: item.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#666" }}>{item.label}</span>
                  </div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => navigate("/app/network")} style={{ width: "100%", marginTop: 12, padding: "10px", borderRadius: 10, border: "1px solid #E8E8E8", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#2ECC71", cursor: "pointer" }}>
            Xem chi tiết mạng lưới →
          </button>
        </div>

        {/* Reward banner */}
        <div style={{ background: "linear-gradient(135deg, #1a5c35 0%, #F1C40F 100%)", borderRadius: 20, padding: "20px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", bottom: -30, left: 100, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: 20, background: "rgba(241,196,15,0.3)", marginBottom: 8 }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 700, color: "#F1C40F", textTransform: "uppercase", letterSpacing: 1 }}>🏆 Batch thưởng tháng 4</span>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 18, fontWeight: 700, color: "white", marginBottom: 4 }}>Thưởng 50 triệu VNĐT</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>Doanh số cá nhân từ 80M — Kết thúc sau</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <CountdownTimer />
              <button style={{ padding: "8px 16px", borderRadius: 10, background: "#F1C40F", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, color: "#1a5c35" }}>
                Khám phá
              </button>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div style={{ background: "white", borderRadius: 20, padding: "16px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1A1A" }}>Hoạt động gần đây</div>
            <button style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#2ECC71", background: "none", border: "none", cursor: "pointer" }}>Xem tất cả</button>
          </div>
          {recentActivities.map((act, idx) => (
            <div key={act.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: idx < recentActivities.length - 1 ? "0.5px solid #F5F5F5" : "none" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: act.amount > 0 ? "rgba(46,204,113,0.08)" : "rgba(231,76,60,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 18 }}>
                {act.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#1A1A1A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{act.title}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999", marginTop: 2 }}>{act.time}</div>
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, color: act.amount > 0 ? "#2ECC71" : "#E74C3C", flexShrink: 0 }}>
                {act.amount > 0 ? "+" : ""}{formatVND(Math.abs(act.amount))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured products */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1A1A" }}>Sản phẩm nổi bật 🔥</div>
            <button onClick={() => navigate("/app/shop")} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#2ECC71", background: "none", border: "none", cursor: "pointer" }}>Xem tất cả</button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {featuredProducts.map((prod, idx) => (
              <motion.div key={prod.id} whileTap={{ scale: 0.98 }} onClick={() => navigate("/app/shop")}
                style={{ background: "white", borderRadius: 16, display: "flex", alignItems: "center", gap: 12, padding: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", cursor: "pointer" }}
              >
                <div style={{ width: 14, height: 14, borderRadius: 7, background: ["#F1C40F", "#C0C0C0", "#CD7F32"][idx], display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 8, fontWeight: 700, color: "white" }}>{idx + 1}</span>
                </div>
                <img src={prod.img} alt={prod.name} style={{ width: 52, height: 52, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#1A1A1A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{prod.name}</div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#999", marginTop: 2 }}>Đã bán: {prod.sold}</div>
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, color: "#2ECC71", flexShrink: 0 }}>{prod.pts}đ</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}