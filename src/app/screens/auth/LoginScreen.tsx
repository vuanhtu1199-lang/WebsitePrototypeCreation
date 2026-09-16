import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronLeft, Phone, Eye, EyeOff, Zap, Shield } from 'lucide-react';

type Step = 'phone' | 'pin';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');
  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handlePhoneNext = () => {
    if (phone.replace(/\s/g, '').length < 9) {
      setError('Vui lòng nhập số điện thoại hợp lệ');
      return;
    }
    setError('');
    setStep('pin');
  };

  const handlePinChange = (idx: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...pin];
    next[idx] = val;
    setPin(next);
    if (val && idx < 5) pinRefs.current[idx + 1]?.focus();
    if (next.every(d => d !== '') && next.length === 6) {
      setTimeout(() => handleLogin(next.join('')), 200);
    }
  };

  const handlePinKey = (idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !pin[idx] && idx > 0) {
      pinRefs.current[idx - 1]?.focus();
    }
  };

  const handleLogin = (pinVal?: string) => {
    const p = pinVal || pin.join('');
    if (p === '123456') {
      navigate('/home');
    } else if (p.length === 6) {
      setError('Mã PIN không chính xác. Thử lại!');
      setPin(['', '', '', '', '', '']);
      pinRefs.current[0]?.focus();
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F9FA' }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(160deg, #27AE60 0%, #2ECC71 100%)',
        padding: '20px 24px 40px',
        borderRadius: '0 0 32px 32px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ position: 'absolute', bottom: '-20px', left: '40px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />

        {step === 'pin' && (
          <button onClick={() => setStep('phone')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 8px', display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.85)' }}>
            <ChevronLeft size={20} />
            <span style={{ fontSize: '14px' }}>Quay lại</span>
          </button>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: step === 'phone' ? '8px' : '0' }}>
          <div style={{ width: '44px', height: '44px', background: 'rgba(255,255,255,0.2)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap size={22} color="#fff" fill="#fff" />
          </div>
          <div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.3px' }}>GreenNet</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>Chào mừng trở lại!</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '32px 24px', overflowY: 'auto' }}>
        {step === 'phone' ? (
          <motion.div key="phone" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Đăng nhập</h2>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>Nhập số điện thoại để tiếp tục</p>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', display: 'block', marginBottom: '8px' }}>Số điện thoại</label>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                  <Phone size={18} color="#2ECC71" />
                </div>
                <input
                  type="tel"
                  placeholder="0901 234 567"
                  value={phone}
                  onChange={e => { setPhone(e.target.value); setError(''); }}
                  style={{
                    width: '100%',
                    height: '52px',
                    paddingLeft: '44px',
                    paddingRight: '16px',
                    background: '#fff',
                    border: error ? '1.5px solid #E74C3C' : '1.5px solid #E8E8E8',
                    borderRadius: '14px',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#1A1A1A',
                    outline: 'none',
                    boxSizing: 'border-box',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                />
              </div>
              {error && <p style={{ color: '#E74C3C', fontSize: '12px', marginTop: '6px' }}>{error}</p>}
            </div>

            <button
              onClick={handlePhoneNext}
              style={{
                width: '100%',
                height: '52px',
                background: 'linear-gradient(135deg, #2ECC71, #27AE60)',
                color: '#fff',
                border: 'none',
                borderRadius: '14px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(46,204,113,0.35)',
                marginBottom: '24px',
              }}
            >
              Tiếp tục
            </button>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '14px', color: '#666' }}>Chưa có tài khoản? </span>
              <button onClick={() => navigate('/register')} style={{ background: 'none', border: 'none', color: '#2ECC71', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}>
                Đăng ký ngay
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div key="pin" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Shield size={22} color="#2ECC71" />
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1A1A1A' }}>Nhập mã PIN</h2>
            </div>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '6px' }}>
              Mã PIN 6 chữ số cho <span style={{ fontWeight: 600, color: '#1A1A1A' }}>{phone}</span>
            </p>
            <p style={{ fontSize: '12px', color: '#999', marginBottom: '32px' }}>💡 Demo: nhập 123456</p>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '24px' }}>
              {pin.map((digit, i) => (
                <input
                  key={i}
                  ref={el => pinRefs.current[i] = el}
                  type={showPin ? 'text' : 'password'}
                  maxLength={1}
                  value={digit}
                  onChange={e => handlePinChange(i, e.target.value)}
                  onKeyDown={e => handlePinKey(i, e)}
                  style={{
                    width: '48px',
                    height: '56px',
                    textAlign: 'center',
                    fontSize: '20px',
                    fontWeight: 700,
                    background: '#fff',
                    border: digit ? '2px solid #2ECC71' : error ? '2px solid #E74C3C' : '2px solid #E8E8E8',
                    borderRadius: '14px',
                    outline: 'none',
                    color: '#1A1A1A',
                    boxShadow: digit ? '0 4px 12px rgba(46,204,113,0.2)' : 'none',
                    transition: 'all 0.15s',
                  }}
                />
              ))}
            </div>

            {error && <p style={{ color: '#E74C3C', fontSize: '12px', textAlign: 'center', marginBottom: '16px' }}>{error}</p>}

            <button
              onClick={() => setShowPin(!showPin)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '13px', margin: '0 auto 24px' }}
            >
              {showPin ? <EyeOff size={16} /> : <Eye size={16} />}
              {showPin ? 'Ẩn mã PIN' : 'Hiện mã PIN'}
            </button>

            <button
              onClick={() => handleLogin()}
              style={{
                width: '100%',
                height: '52px',
                background: pin.every(d => d !== '') ? 'linear-gradient(135deg, #2ECC71, #27AE60)' : '#E8E8E8',
                color: pin.every(d => d !== '') ? '#fff' : '#999',
                border: 'none',
                borderRadius: '14px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: pin.every(d => d !== '') ? 'pointer' : 'default',
                boxShadow: pin.every(d => d !== '') ? '0 8px 20px rgba(46,204,113,0.35)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              Đăng nhập
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
