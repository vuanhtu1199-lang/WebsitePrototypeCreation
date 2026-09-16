import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell,
} from 'recharts';
import {
  Bell, Eye, EyeOff, ArrowUpRight, ArrowDownRight,
  Wallet, TrendingUp, Award, Users, ChevronRight,
  Zap, ArrowUp, ArrowDown, Clock,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

const fmt = (n: number) => new Intl.NumberFormat('vi-VN').format(n);

const revenueData = [
  { week: 'T1', v: 2500000 }, { week: 'T2', v: 3800000 }, { week: 'T3', v: 4200000 },
  { week: 'T4', v: 5100000 }, { week: 'T5', v: 4800000 }, { week: 'T6', v: 6200000 },
  { week: 'T7', v: 7500000 }, { week: 'T8', v: 8900000 },
];

const networkData = [
  { name: 'F1 Trực tiếp', value: 12, color: '#2ECC71' },
  { name: 'F2 Mạng lưới', value: 47, color: '#27AE60' },
  { name: 'Mới tham gia', value: 8, color: '#F1C40F' },
];

const recentActivities = [
  { id: 1, type: 'commission', label: 'Hoa hồng F1 từ Trần Thị Bình', amount: +250000, time: '2 giờ trước', icon: TrendingUp, color: '#2ECC71' },
  { id: 2, type: 'withdraw', label: 'Rút tiền về MB Bank ****5678', amount: -1000000, time: '5 giờ trước', icon: ArrowDown, color: '#E74C3C' },
  { id: 3, type: 'commission', label: 'Hoa hồng đơn hàng #ORD-2024-001', amount: +120000, time: 'Hôm qua', icon: TrendingUp, color: '#2ECC71' },
  { id: 4, type: 'purchase', label: 'Mua iPhone 15 Pro Max', amount: -1200000, time: '12/04/2024', icon: ArrowDown, color: '#E67E22' },
  { id: 5, type: 'deposit', label: 'Nạp tiền vào ví', amount: +2000000, time: '10/04/2024', icon: ArrowUp, color: '#2ECC71' },
];

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
      {[{ v: timeLeft.d, l: 'ngày' }, { v: timeLeft.h, l: 'giờ' }, { v: timeLeft.m, l: 'phút' }, { v: timeLeft.s, l: 'giây' }].map(({ v, l }) => (
        <div key={l} style={{ textAlign: 'center' }}>
          <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '4px 8px', minWidth: '34px', fontSize: '16px', fontWeight: 700, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{pad(v)}</div>
          <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomeScreen() {
  const navigate = useNavigate();
  const { user, products } = useApp();
  const [showBalance, setShowBalance] = useState(true);
  const rewardEnd = new Date(Date.now() + 5 * 86400000 + 3 * 3600000 + 27 * 60000);

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100%' }}>
      {/* Hero Wallet Card */}
      <div style={{
        background: 'linear-gradient(135deg, #1a5c35 0%, #27AE60 60%, #2ECC71 100%)',
        padding: '16px 20px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', bottom: '-30px', left: '20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', top: '20px', left: '50%', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0,0,0,0.06)' }} />

        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', position: 'relative' }}>
          <div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', margin: 0 }}>Xin chào 👋</p>
            <p style={{ fontSize: '17px', fontWeight: 700, color: '#fff', margin: '2px 0 0' }}>{user.name}</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ width: '38px', height: '38px', background: 'rgba(255,255,255,0.18)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <Bell size={18} color="#fff" />
            </div>
            <div style={{ width: '38px', height: '38px', background: '#F1C40F', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="#fff" fill="#fff" />
            </div>
          </div>
        </div>

        {/* Balance */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', margin: '0 0 4px' }}>Số dư VNĐT</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', fontVariantNumeric: 'tabular-nums' }}>
              {showBalance ? fmt(user.balance) : '••••••••'}
            </span>
            <button onClick={() => setShowBalance(!showBalance)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', borderRadius: '8px', padding: '6px', display: 'flex' }}>
              {showBalance ? <EyeOff size={16} color="#fff" /> : <Eye size={16} color="#fff" />}
            </button>
          </div>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '4px 0 0' }}>≈ {showBalance ? fmt(user.balance) : '••••••'} VNĐ</p>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {[
            { label: 'Doanh thu', value: user.revenue, icon: TrendingUp, up: true },
            { label: 'Hoa hồng', value: user.commission, icon: Award, up: true },
          ].map(s => (
            <div key={s.label} style={{ flex: 1, background: 'rgba(255,255,255,0.12)', borderRadius: '14px', padding: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>{s.label}</p>
                <s.icon size={14} color="rgba(255,255,255,0.6)" />
              </div>
              <p style={{ fontSize: '14px', fontWeight: 700, color: '#fff', margin: 0, fontVariantNumeric: 'tabular-nums' }}>
                {showBalance ? fmt(s.value) : '••••••'}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginTop: '4px' }}>
                <ArrowUpRight size={10} color="#A8F0C8" />
                <span style={{ fontSize: '10px', color: '#A8F0C8' }}>+12.5% tháng này</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {[
            { label: 'Nạp tiền', icon: ArrowUp, action: () => {} },
            { label: 'Rút tiền', icon: ArrowDown, action: () => {} },
            { label: 'Lịch sử', icon: Clock, action: () => {} },
          ].map(a => (
            <button key={a.label} onClick={a.action} style={{ flex: 1, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', padding: '10px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', cursor: 'pointer', backdropFilter: 'blur(10px)' }}>
              <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a.icon size={16} color="#fff" />
              </div>
              <span style={{ fontSize: '11px', color: '#fff', fontWeight: 600 }}>{a.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Rank card */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{ background: '#fff', borderRadius: '20px', padding: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', background: 'rgba(241,196,15,0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={16} color="#F1C40F" />
              </div>
              <div>
                <p style={{ fontSize: '11px', color: '#888', margin: 0 }}>Cấp bậc hiện tại</p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#F1C40F', margin: 0 }}>{user.rank}</p>
              </div>
            </div>
            <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>Cấp {user.rankLevel}/5</span>
          </div>
          <div style={{ height: '8px', background: '#F0F0F0', borderRadius: '4px', overflow: 'hidden' }}>
            <motion.div initial={{ width: 0 }} animate={{ width: `${user.rankProgress}%` }} transition={{ duration: 1, delay: 0.3 }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #2ECC71, #F1C40F)', borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '6px' }}>
            <span style={{ fontSize: '11px', color: '#888' }}>{user.rankProgress}% tiến độ</span>
            <span style={{ fontSize: '11px', color: '#2ECC71', fontWeight: 600 }}>Đại Lý Vàng →</span>
          </div>
        </motion.div>

        {/* Revenue Line Chart */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          style={{ background: '#fff', borderRadius: '20px', padding: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div>
              <p style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>Doanh thu cá nhân</p>
              <p style={{ fontSize: '12px', color: '#888', margin: '2px 0 0' }}>8 tuần gần nhất</p>
            </div>
            <div style={{ background: 'rgba(46,204,113,0.1)', borderRadius: '8px', padding: '4px 10px' }}>
              <span style={{ fontSize: '12px', color: '#2ECC71', fontWeight: 600 }}>↑ 18.7%</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={140}>
            <LineChart data={revenueData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 11, fill: '#999' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: '#999' }} axisLine={false} tickLine={false} tickFormatter={v => `${v / 1000000}tr`} />
              <Tooltip
                contentStyle={{ background: '#1A1A1A', border: 'none', borderRadius: '10px', padding: '8px 12px' }}
                labelStyle={{ color: '#fff', fontSize: '11px' }}
                itemStyle={{ color: '#2ECC71', fontSize: '12px', fontWeight: 600 }}
                formatter={(v: number) => [`${fmt(v)} đ`, 'Doanh thu']}
              />
              <Line type="monotone" dataKey="v" stroke="#2ECC71" strokeWidth={2.5} dot={false} activeDot={{ r: 5, fill: '#2ECC71', stroke: '#fff', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Network Overview + Donut */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ background: '#fff', borderRadius: '20px', padding: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>Mạng lưới của bạn</p>
            <button onClick={() => navigate('/home/network')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '2px', color: '#2ECC71', fontSize: '12px', fontWeight: 600 }}>
              Xem thêm <ChevronRight size={14} />
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <PieChart width={110} height={110}>
              <Pie data={networkData} cx={50} cy={50} innerRadius={32} outerRadius={50} dataKey="value" strokeWidth={0}>
                {networkData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
              </Pie>
            </PieChart>
            <div style={{ flex: 1 }}>
              {networkData.map(d => (
                <div key={d.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', background: d.color, borderRadius: '50%' }} />
                    <span style={{ fontSize: '12px', color: '#555' }}>{d.name}</span>
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#1A1A1A' }}>{d.value}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #F0F0F0', paddingTop: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '12px', color: '#888' }}>Tổng doanh thu hệ thống</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#2ECC71' }}>125tr đ</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reward Banner */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          style={{ background: 'linear-gradient(135deg, #1a3a2a 0%, #0d5c3a 60%, #1a7a4a 100%)', borderRadius: '20px', padding: '18px', position: 'relative', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(241,196,15,0.15)' }} />
          <div style={{ position: 'absolute', bottom: '-30px', left: '60px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(46,204,113,0.1)' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#F1C40F', borderRadius: '6px', padding: '2px 8px', marginBottom: '6px' }}>
                <Zap size={10} color="#fff" fill="#fff" />
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#fff' }}>BATCH THƯỞNG THÁNG 4</span>
              </div>
              <p style={{ fontSize: '18px', fontWeight: 800, color: '#fff', margin: '0 0 2px', lineHeight: 1.2 }}>Nhận thưởng</p>
              <p style={{ fontSize: '22px', fontWeight: 800, color: '#F1C40F', margin: '0 0 4px', letterSpacing: '-0.5px' }}>50,000,000 đ</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>Dành cho Top 10 đại lý xuất sắc nhất</p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', margin: '0 0 6px' }}>⏳ Kết thúc sau</p>
              <Countdown targetDate={rewardEnd} />
            </div>
            <button style={{ background: '#F1C40F', border: 'none', borderRadius: '12px', padding: '10px 16px', fontSize: '12px', fontWeight: 700, color: '#1A1A1A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Khám phá <ChevronRight size={14} />
            </button>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{ background: '#fff', borderRadius: '20px', padding: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>Hoạt động gần đây</p>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2ECC71', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
              Xem tất cả <ChevronRight size={14} />
            </button>
          </div>
          {recentActivities.map((act, i) => (
            <div key={act.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', borderBottom: i < recentActivities.length - 1 ? '1px solid #F8F8F8' : 'none' }}>
              <div style={{ width: '38px', height: '38px', background: `${act.color}18`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <act.icon size={16} color={act.color} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '13px', fontWeight: 500, color: '#1A1A1A', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{act.label}</p>
                <p style={{ fontSize: '11px', color: '#999', margin: '2px 0 0' }}>{act.time}</p>
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: act.amount > 0 ? '#2ECC71' : '#E74C3C', whiteSpace: 'nowrap' }}>
                {act.amount > 0 ? '+' : ''}{fmt(act.amount)}đ
              </span>
            </div>
          ))}
        </motion.div>

        {/* Top Products */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          style={{ background: '#fff', borderRadius: '20px', padding: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>🔥 Sản phẩm nổi bật</p>
            <button onClick={() => navigate('/home/shop')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2ECC71', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '2px' }}>
              Xem thêm <ChevronRight size={14} />
            </button>
          </div>
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }}>
            {products.slice(0, 4).map(p => (
              <div key={p.id} onClick={() => navigate(`/home/shop/${p.id}`)} style={{ flexShrink: 0, width: '130px', cursor: 'pointer' }}>
                <div style={{ width: '130px', height: '100px', borderRadius: '14px', overflow: 'hidden', marginBottom: '8px', background: '#F0F0F0', position: 'relative' }}>
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '6px', right: '6px', background: '#F1C40F', borderRadius: '6px', padding: '2px 6px', fontSize: '9px', fontWeight: 700, color: '#1A1A1A' }}>
                    -{Math.round((1 - p.price / p.originalPrice) * 100)}%
                  </div>
                </div>
                <p style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', margin: '0 0 2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</p>
                <p style={{ fontSize: '13px', fontWeight: 700, color: '#2ECC71', margin: 0 }}>{fmt(p.price)} đ</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
