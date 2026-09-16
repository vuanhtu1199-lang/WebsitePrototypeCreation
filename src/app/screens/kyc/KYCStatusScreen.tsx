import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Clock, Loader2, CheckCircle2, XCircle, RefreshCw, Home, ChevronRight } from 'lucide-react';
import { useApp, KYCStatus } from '../../context/AppContext';

const STATUS_CONFIG = {
  pending: {
    icon: Clock,
    color: '#E67E22',
    bg: 'rgba(230,126,34,0.1)',
    title: 'Đang chờ xét duyệt',
    subtitle: 'Hồ sơ của bạn đã được tiếp nhận',
    desc: 'Chúng tôi đã nhận được hồ sơ KYC của bạn. Thời gian xét duyệt thông thường là 1-3 ngày làm việc.',
    badge: 'CHỜ XÉT DUYỆT',
  },
  processing: {
    icon: Loader2,
    color: '#2980B9',
    bg: 'rgba(52,152,219,0.1)',
    title: 'Đang xử lý',
    subtitle: 'Chuyên viên đang xem xét hồ sơ',
    desc: 'Hồ sơ của bạn đang được đội ngũ chuyên viên xem xét. Chúng tôi sẽ thông báo kết quả sớm nhất.',
    badge: 'ĐANG XỬ LÝ',
  },
  approved: {
    icon: CheckCircle2,
    color: '#27AE60',
    bg: 'rgba(46,204,113,0.1)',
    title: 'Xác thực thành công! 🎉',
    subtitle: 'Tài khoản đã được kích hoạt',
    desc: 'Chúc mừng! Hồ sơ KYC của bạn đã được xét duyệt thành công. Bạn có thể sử dụng đầy đủ tính năng.',
    badge: 'ĐÃ DUYỆT',
  },
  failed: {
    icon: XCircle,
    color: '#E74C3C',
    bg: 'rgba(231,76,60,0.1)',
    title: 'Xác thực thất bại',
    subtitle: 'Hồ sơ không đạt yêu cầu',
    desc: 'Rất tiếc, hồ sơ KYC của bạn không được chấp thuận. Lý do: Thông tin không khớp hoặc ảnh không rõ ràng.',
    badge: 'THẤT BẠI',
  },
};

const BADGE_STATUS: Record<string, KYCStatus> = {
  'CHỜ XÉT DUYỆT': 'pending',
  'ĐANG XỬ LÝ': 'processing',
  'ĐÃ DUYỆT': 'approved',
  'THẤT BẠI': 'failed',
};

export default function KYCStatusScreen() {
  const navigate = useNavigate();
  const { kycStatus, setKYCStatus, kycData } = useApp();

  const status = kycStatus as keyof typeof STATUS_CONFIG;
  const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  const Icon = cfg.icon;

  const FIELDS = [
    { label: 'Số CCCD', value: kycData.idNumber || '079 123 456 789' },
    { label: 'Họ và tên', value: kycData.fullName || 'NGUYỄN VĂN AN' },
    { label: 'Ngày sinh', value: kycData.dob || '01/01/1990' },
    { label: 'Giới tính', value: kycData.gender || 'Nam' },
    { label: 'Nơi thường trú', value: kycData.address || '123 Nguyễn Huệ, Q.1, TP.HCM' },
    { label: 'Ngày cấp', value: kycData.issueDate || '15/03/2020' },
    { label: 'Nơi cấp', value: kycData.issuePlace || 'Cục Cảnh Sát QLHC về TTXH' },
  ];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F9FA' }}>
      {/* Header */}
      <div style={{ background: '#fff', padding: '16px 20px', borderBottom: '1px solid #F0F0F0' }}>
        <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>Trạng thái KYC</h1>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {/* Status card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          style={{ background: '#fff', borderRadius: '20px', padding: '24px', marginBottom: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}
        >
          <motion.div
            animate={status === 'processing' ? { rotate: 360 } : status === 'pending' ? { scale: [1, 1.05, 1] } : {}}
            transition={status === 'processing' ? { repeat: Infinity, duration: 2, ease: 'linear' } : { repeat: Infinity, duration: 2 }}
            style={{ width: '80px', height: '80px', background: cfg.bg, borderRadius: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}
          >
            <Icon size={36} color={cfg.color} strokeWidth={1.8} />
          </motion.div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: cfg.bg, borderRadius: '8px', padding: '4px 12px', marginBottom: '12px' }}>
            <div style={{ width: '6px', height: '6px', background: cfg.color, borderRadius: '50%' }} />
            <span style={{ fontSize: '11px', fontWeight: 700, color: cfg.color, letterSpacing: '0.5px' }}>{cfg.badge}</span>
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>{cfg.title}</h2>
          <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>{cfg.subtitle}</p>
          <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, padding: '0 8px' }}>{cfg.desc}</p>

          {/* Demo status switcher */}
          <div style={{ marginTop: '20px', padding: '12px', background: '#F8F9FA', borderRadius: '12px' }}>
            <p style={{ fontSize: '11px', color: '#999', marginBottom: '8px' }}>🔧 Demo: Chuyển trạng thái</p>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {(['pending', 'processing', 'approved', 'failed'] as KYCStatus[]).map(s => (
                <button key={s} onClick={() => setKYCStatus(s)} style={{ padding: '5px 10px', background: s === status ? cfg.color : '#E8E8E8', color: s === status ? '#fff' : '#555', border: 'none', borderRadius: '8px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Submitted data (read-only) */}
        <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '16px' }}>
          <div style={{ padding: '14px 16px', borderBottom: '1px solid #F5F5F5', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '4px', height: '16px', background: '#2ECC71', borderRadius: '2px' }} />
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>Thông tin đã nộp</p>
            <span style={{ fontSize: '11px', color: '#999', marginLeft: 'auto' }}>Chỉ đọc</span>
          </div>
          {FIELDS.map((f, i) => (
            <div key={f.label} style={{ padding: '12px 16px', borderBottom: i < FIELDS.length - 1 ? '1px solid #F8F8F8' : 'none', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
              <span style={{ fontSize: '12px', color: '#888', flexShrink: 0 }}>{f.label}</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A', textAlign: 'right', flex: 1 }}>{f.value}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ background: '#fff', borderRadius: '20px', padding: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '20px' }}>
          <p style={{ fontSize: '14px', fontWeight: 700, color: '#1A1A1A', marginBottom: '16px' }}>📋 Tiến trình xét duyệt</p>
          {[
            { step: 'Nộp hồ sơ', time: '13/04/2024 · 14:32', done: true },
            { step: 'Tiếp nhận xử lý', time: status !== 'pending' ? '13/04/2024 · 15:00' : '—', done: status !== 'pending' },
            { step: 'Xét duyệt cuối', time: status === 'approved' || status === 'failed' ? '14/04/2024 · 09:15' : '—', done: status === 'approved' || status === 'failed' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: i < 2 ? '12px' : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: item.done ? '#2ECC71' : '#E8E8E8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.done ? <CheckCircle2 size={14} color="#fff" /> : <div style={{ width: '8px', height: '8px', background: '#C0C0C0', borderRadius: '50%' }} />}
                </div>
                {i < 2 && <div style={{ width: '2px', flex: 1, background: item.done ? '#2ECC71' : '#E8E8E8', minHeight: '20px', marginTop: '4px' }} />}
              </div>
              <div style={{ paddingBottom: i < 2 ? '12px' : 0 }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: item.done ? '#1A1A1A' : '#999', margin: 0 }}>{item.step}</p>
                <p style={{ fontSize: '11px', color: '#AAA', margin: '2px 0 0' }}>{item.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        {status === 'approved' && (
          <button onClick={() => navigate('/home')} style={{ width: '100%', height: '52px', background: 'linear-gradient(135deg, #2ECC71, #27AE60)', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 20px rgba(46,204,113,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <Home size={18} /> Vào Trang Chủ
          </button>
        )}
        {status === 'failed' && (
          <button onClick={() => navigate('/kyc')} style={{ width: '100%', height: '52px', background: 'linear-gradient(135deg, #E74C3C, #C0392B)', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <RefreshCw size={18} /> Nộp lại hồ sơ
          </button>
        )}
        {(status === 'pending' || status === 'processing') && (
          <button onClick={() => navigate('/home')} style={{ width: '100%', height: '52px', background: '#fff', color: '#2ECC71', border: '2px solid #2ECC71', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            Vào xem trước <ChevronRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
