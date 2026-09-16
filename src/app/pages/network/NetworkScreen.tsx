import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useApp } from "../../context/AppContext";

const monthlyRevenue = [
  { month: "T11", revenue: 185, target: 200 },
  { month: "T12", revenue: 210, target: 200 },
  { month: "T1", revenue: 198, target: 220 },
  { month: "T2", revenue: 245, target: 220 },
  { month: "T3", revenue: 268, target: 250 },
  { month: "T4", revenue: 285, target: 280 },
];

function formatVND(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  return `${(n / 1000).toFixed(0)}K`;
}

type NetworkView = "list" | "tree";

export default function NetworkScreen() {
  const { user, networkMembers } = useApp();
  const [view, setView] = useState<NetworkView>("list");
  const [expandedF1, setExpandedF1] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "F1" | "F2">("all");

  const f1Members = networkMembers.filter(m => m.level === "F1");
  const f2Members = networkMembers.filter(m => m.level === "F2");
  const filteredMembers = activeFilter === "all" ? networkMembers : networkMembers.filter(m => m.level === activeFilter);

  const rankColors: Record<string, string> = { Bronze: "#CD7F32", Silver: "#AAB7B8", Gold: "#F1C40F", Platinum: "#BDC3C7", Diamond: "#2ECC71" };
  const rankBg: Record<string, string> = { Bronze: "rgba(205,127,50,0.1)", Silver: "rgba(170,183,184,0.1)", Gold: "rgba(241,196,15,0.1)", Platinum: "rgba(189,195,199,0.1)", Diamond: "rgba(46,204,113,0.1)" };

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(160deg, #0d3b22 0%, #1a5c35 40%, #2ECC71 100%)", padding: "52px 20px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: 22, fontWeight: 700, color: "white", marginBottom: 16 }}>Hệ thống mạng lưới</div>

        {/* Stats cards */}
        <div style={{ display: "flex", gap: 10 }}>
          {[
            { label: "Thành viên F1", value: user.f1Count, icon: "👥", color: "#2ECC71" },
            { label: "Thành viên F2", value: user.f2Count, icon: "🌿", color: "#F1C40F" },
            { label: "Tổng DT hệ thống", value: `${(user.totalSystemRevenue / 1000000).toFixed(0)}M`, icon: "💰", color: "#3498DB" },
          ].map(stat => (
            <div key={stat.label} style={{ flex: 1, background: "rgba(255,255,255,0.12)", borderRadius: 14, padding: "12px 10px", backdropFilter: "blur(10px)" }}>
              <div style={{ fontSize: 18, marginBottom: 4 }}>{stat.icon}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 700, color: "white" }}>{stat.value}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 2, lineHeight: 1.3 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 16, paddingBottom: 24 }}>
        {/* Bar chart */}
        <div style={{ background: "white", borderRadius: 20, padding: "16px 8px 12px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
          <div style={{ paddingLeft: 8, marginBottom: 12 }}>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1A1A" }}>Doanh thu toàn hệ thống</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999" }}>6 tháng gần nhất (triệu VNĐT)</div>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={monthlyRevenue} margin={{ top: 5, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F5F5F5" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#999", fontSize: 11, fontFamily: "Inter" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#999", fontSize: 10, fontFamily: "Inter" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "white", border: "none", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", fontFamily: "Inter", fontSize: 12 }}
                formatter={(value: number, name: string) => [`${value}M VNĐT`, name === "revenue" ? "Doanh thu" : "Mục tiêu"]}
                cursor={{ fill: "rgba(46,204,113,0.05)" }}
              />
              <Bar dataKey="revenue" radius={[6, 6, 0, 0]} maxBarSize={30}>
                {monthlyRevenue.map((entry, idx) => (
                  <Cell key={idx} fill={entry.revenue >= entry.target ? "#2ECC71" : "#3498DB"} />
                ))}
              </Bar>
              <Bar dataKey="target" radius={[6, 6, 0, 0]} fill="rgba(241,196,15,0.3)" maxBarSize={30} />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", justifyContent: "center", gap: 20, paddingTop: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: "#2ECC71" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#666" }}>Doanh thu</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: "rgba(241,196,15,0.5)" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#666" }}>Mục tiêu</span>
            </div>
          </div>
        </div>

        {/* View toggle & filter */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 8 }}>
            {(["all", "F1", "F2"] as const).map(f => (
              <button key={f} onClick={() => setActiveFilter(f)}
                style={{ padding: "6px 14px", borderRadius: 20, border: "none", cursor: "pointer", background: activeFilter === f ? "#2ECC71" : "#F0F0F0", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: activeFilter === f ? 600 : 400, color: activeFilter === f ? "white" : "#666", transition: "all 0.2s" }}
              >
                {f === "all" ? "Tất cả" : f}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 4, background: "white", borderRadius: 10, padding: 3, boxShadow: "0 1px 6px rgba(0,0,0,0.08)" }}>
            {(["list", "tree"] as const).map(v => (
              <button key={v} onClick={() => setView(v)}
                style={{ padding: "5px 10px", borderRadius: 8, border: "none", cursor: "pointer", background: view === v ? "#2ECC71" : "transparent", fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: view === v ? 600 : 400, color: view === v ? "white" : "#666", transition: "all 0.2s" }}
              >
                {v === "list" ? "Danh sách" : "Cây"}
              </button>
            ))}
          </div>
        </div>

        {/* Tree view */}
        {view === "tree" && (
          <div style={{ background: "white", borderRadius: 20, padding: "20px 16px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            {/* Root node - current user */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 18, background: "linear-gradient(135deg, #2ECC71, #27AE60)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 6, boxShadow: "0 4px 16px rgba(46,204,113,0.4)" }}>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="9" r="5" stroke="white" strokeWidth="2"/><path d="M3 22c0-5 4.5-8 10-8s10 3 10 8" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#1A1A1A", textAlign: "center" }}>Tôi (Diamond)</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#999" }}>NVA2024</div>
            </div>

            {/* Connector */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ width: 2, height: 20, background: "#E8E8E8" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 0, position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: "#E8E8E8" }} />
            </div>

            {/* F1 nodes */}
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 2 }}>
              {f1Members.slice(0, 4).map((m, idx) => (
                <motion.div key={m.id} whileTap={{ scale: 0.95 }} onClick={() => setExpandedF1(expandedF1 === m.id ? null : m.id)}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer" }}
                >
                  <div style={{ width: 2, height: 16, background: "#E8E8E8", marginBottom: 0 }} />
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: rankBg[m.rank] || "rgba(46,204,113,0.08)", border: `2px solid ${rankColors[m.rank] || "#2ECC71"}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 4, position: "relative" }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="7" r="3.5" stroke={rankColors[m.rank] || "#2ECC71"} strokeWidth="1.5"/><path d="M3 18c0-3.5 3-6 7-6s7 2.5 7 6" stroke={rankColors[m.rank] || "#2ECC71"} strokeWidth="1.5" strokeLinecap="round"/></svg>
                    {m.f2Count && m.f2Count > 0 && (
                      <div style={{ position: "absolute", top: -4, right: -4, width: 16, height: 16, borderRadius: 8, background: "#F1C40F", fontFamily: "Inter, sans-serif", fontSize: 9, fontWeight: 700, color: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {m.f2Count}
                      </div>
                    )}
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, fontWeight: 600, color: "#1A1A1A", textAlign: "center", maxWidth: 50, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {m.name.split(" ").pop()}
                  </div>
                </motion.div>
              ))}
              {f1Members.length > 4 && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 2, height: 16, background: "#E8E8E8" }} />
                  <div style={{ width: 44, height: 44, borderRadius: 14, background: "#F8F8F8", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#999" }}>+{f1Members.length - 4}</span>
                  </div>
                </div>
              )}
            </div>

            {expandedF1 && (
              <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: 12, padding: "12px", background: "rgba(46,204,113,0.04)", borderRadius: 12, border: "1px solid rgba(46,204,113,0.1)" }}
              >
                {(() => {
                  const member = f1Members.find(m => m.id === expandedF1);
                  if (!member) return null;
                  return (
                    <div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1A1A", marginBottom: 4 }}>{member.name}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#666" }}>DT: {formatVND(member.revenue)} | F2: {member.f2Count || 0} người</div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </div>
        )}

        {/* List view */}
        {view === "list" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filteredMembers.map(member => (
              <motion.div key={member.id} whileTap={{ scale: 0.99 }}
                style={{ background: "white", borderRadius: 16, padding: "14px 16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", gap: 12 }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 14, background: rankBg[member.rank] || "rgba(46,204,113,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="4" stroke={rankColors[member.rank] || "#2ECC71"} strokeWidth="1.5"/><path d="M3 20c0-4 3.5-7 8-7s8 3 8 7" stroke={rankColors[member.rank] || "#2ECC71"} strokeWidth="1.5" strokeLinecap="round"/></svg>
                  <div style={{ position: "absolute", bottom: -3, right: -3, padding: "1px 5px", borderRadius: 8, background: member.level === "F1" ? "#2ECC71" : "#F1C40F" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 8, fontWeight: 700, color: "white" }}>{member.level}</span>
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A1A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{member.name}</span>
                    <div style={{ padding: "1px 6px", borderRadius: 6, background: rankBg[member.rank] || "rgba(46,204,113,0.1)", flexShrink: 0 }}>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 600, color: rankColors[member.rank] || "#2ECC71" }}>{member.rank}</span>
                    </div>
                  </div>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999" }}>
                    {member.phone} • Tham gia {member.joinDate}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, color: "#2ECC71" }}>{formatVND(member.revenue)}</div>
                  {member.f2Count && member.f2Count > 0 && (
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "#999" }}>{member.f2Count} F2</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Summary card */}
        <div style={{ background: "linear-gradient(135deg, #0d3b22, #2ECC71)", borderRadius: 20, padding: "20px", boxShadow: "0 4px 20px rgba(46,204,113,0.3)" }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)", marginBottom: 14 }}>Doanh số đội nhóm tháng này</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Tổng F1+F2", value: `${user.f1Count + user.f2Count} người`, icon: "👥" },
              { label: "DT hệ thống", value: `${(user.totalSystemRevenue / 1000000).toFixed(0)}M`, icon: "📊" },
              { label: "Hoa hồng nhận", value: `${(user.commission / 1000000).toFixed(1)}M`, icon: "💰" },
              { label: "Tăng trưởng", value: "+23.5%", icon: "📈" },
            ].map(item => (
              <div key={item.label} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 14, padding: "12px" }}>
                <div style={{ fontSize: 18, marginBottom: 6 }}>{item.icon}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 700, color: "white" }}>{item.value}</div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
