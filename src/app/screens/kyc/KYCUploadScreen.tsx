import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronLeft, Upload, Shield, Camera, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function KYCUploadScreen() {
  const navigate = useNavigate();
  const { setKYCData } = useApp();
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUploaded(true);
    }, 1500);
  };

  const handleNext = () => {
    navigate('/kyc/confirm');
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F9FA' }}>
      {/* Header */}
      <div style={{ background: '#fff', padding: '16px 20px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={() => navigate('/login')} style={{ background: '#F8F9FA', border: 'none', cursor: 'pointer', borderRadius: '10px', padding: '8px', display: 'flex' }}>
          <ChevronLeft size={20} color="#1A1A1A" />
        </button>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>Xác thực danh tính</h1>
          <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Bước 1/2 · Upload CCCD</p>
        </div>
      </div>

      {/* Progress */}
      <div style={{ height: '4px', background: '#E8E8E8' }}>
        <div style={{ height: '100%', width: '50%', background: 'linear-gradient(90deg, #2ECC71, #27AE60)', borderRadius: '0 2px 2px 0', transition: 'width 0.5s' }} />
      </div>

      <div style={{ flex: 1, padding: '24px 20px', overflowY: 'auto' }}>
        {/* Info card */}
        <div style={{ background: 'rgba(46,204,113,0.08)', border: '1.5px solid rgba(46,204,113,0.2)', borderRadius: '16px', padding: '16px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
            <Shield size={20} color="#27AE60" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#27AE60', margin: '0 0 4px' }}>Yêu cầu xác thực KYC</p>
              <p style={{ fontSize: '12px', color: '#555', margin: 0, lineHeight: 1.6 }}>
                Để bảo vệ tài khoản và tuân thủ quy định, bạn cần xác minh danh tính bằng CCCD/CMND trước khi sử dụng đầy đủ tính năng.
              </p>
            </div>
          </div>
        </div>

        {/* Upload area */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A', marginBottom: '12px' }}>📸 Ảnh mặt trước CCCD/CMND</p>
          <motion.div
            onClick={!uploaded && !loading ? handleUpload : undefined}
            whileTap={!uploaded ? { scale: 0.98 } : {}}
            style={{
              width: '100%',
              height: '180px',
              background: uploaded ? 'rgba(46,204,113,0.06)' : '#fff',
              border: uploaded ? '2px solid #2ECC71' : '2.5px dashed #D0D0D0',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: !uploaded ? 'pointer' : 'default',
              transition: 'all 0.3s',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {loading ? (
              <>
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: '40px', height: '40px', border: '3px solid #E8E8E8', borderTopColor: '#2ECC71', borderRadius: '50%', marginBottom: '12px' }} />
                <p style={{ fontSize: '14px', color: '#666' }}>Đang xử lý ảnh...</p>
              </>
            ) : uploaded ? (
              <>
                {/* Simulated ID card */}
                <div style={{ width: '240px', height: '140px', background: 'linear-gradient(135deg, #1a3a2a, #27AE60)', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
                      <p style={{ fontSize: '10px', fontWeight: 700, color: '#fff', margin: 0 }}>CĂN CƯỚC CÔNG DÂN</p>
                    </div>
                    <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.3)', borderRadius: '50%' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Số: 079 123 456 789</p>
                    <p style={{ fontSize: '11px', fontWeight: 700, color: '#fff', margin: '2px 0 0' }}>NGUYỄN VĂN AN</p>
                    <p style={{ fontSize: '9px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>01/01/1990 · Nam</p>
                  </div>
                </div>
                <div style={{ position: 'absolute', top: '8px', right: '8px', background: '#2ECC71', borderRadius: '50%', padding: '2px' }}>
                  <CheckCircle2 size={16} color="#fff" fill="#27AE60" />
                </div>
              </>
            ) : (
              <>
                <div style={{ width: '60px', height: '60px', background: '#F0F0F0', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <Camera size={28} color="#999" />
                </div>
                <p style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', margin: '0 0 4px' }}>Nhấn để tải ảnh lên</p>
                <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>JPG, PNG · Tối đa 5MB</p>
              </>
            )}
          </motion.div>
        </div>

        {/* Tips */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', marginBottom: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A', marginBottom: '10px' }}>💡 Lưu ý khi chụp ảnh</p>
          {[
            'Đặt CCCD trên nền phẳng, đủ sáng',
            'Chụp rõ nét, không bị mờ hay cắt góc',
            'Không dùng ảnh photo hoặc ảnh chụp màn hình',
            'Chỉ cần mặt trước của CCCD',
          ].map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', alignItems: 'flex-start' }}>
              <div style={{ width: '6px', height: '6px', background: '#2ECC71', borderRadius: '50%', marginTop: '5px', flexShrink: 0 }} />
              <p style={{ fontSize: '12px', color: '#555', margin: 0, lineHeight: 1.5 }}>{tip}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '24px' }}>
          <AlertTriangle size={14} color="#E67E22" />
          <p style={{ fontSize: '12px', color: '#E67E22', margin: 0 }}>Thông tin sẽ được mã hóa và bảo mật hoàn toàn</p>
        </div>

        <button
          onClick={uploaded ? handleNext : handleUpload}
          style={{ width: '100%', height: '52px', background: uploaded || !loading ? 'linear-gradient(135deg, #2ECC71, #27AE60)' : '#E8E8E8', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 20px rgba(46,204,113,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          {uploaded ? (
            <><CheckCircle2 size={18} /> Tiếp theo · Xác nhận thông tin</>
          ) : (
            <><Upload size={18} /> Tải ảnh CCCD lên</>
          )}
        </button>
      </div>
    </div>
  );
}
