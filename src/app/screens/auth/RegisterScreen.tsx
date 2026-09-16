import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronLeft, Phone, Eye, EyeOff, Users, CheckCircle2, Zap, AlertCircle } from 'lucide-react';

const REFERRAL_DB: Record<string, string> = {
  'AGEN001': 'Trần Thị Bình',
  'AGEN002': 'Lê Văn Cường',
  'ADMIN01': 'Admin Hệ Thống',
  'VIP0001': 'Nguyễn Minh Khoa',
};

type Step = 'phone' | 'pin' | 'confirm-pin' | 'referral';

export default function RegisterScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('phone');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '', '', '']);
  const [showPin, setShowPin] = useState(false);
  const [referralCode, setReferralCode] = useState('');
  const [referrerName, setReferrerName] = useState('');
  const [referralStatus, setReferralStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [error, setError] = useState('');
  const pinRefs = useRef<(HTMLInputElement | null)[]>([]);
  const confirmRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handlePinInput = (refs: typeof pinRefs, setter: typeof setPin, current: string[], idx: number, val: string, onComplete?: () => void) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...current];
    next[idx] = val;
    setter(next);
    if (val && idx < 5) refs.current[idx + 1]?.focus();
    if (next.every(d => d !== '') && onComplete) setTimeout(onComplete, 300);
  };

  const handlePinKey = (refs: typeof pinRefs, current: string[], idx: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !current[idx] && idx > 0) refs.current[idx - 1]?.focus();
  };

  const checkReferral = () => {
    const code = referralCode.toUpperCase();
    if (REFERRAL_DB[code]) {
      setReferrerName(REFERRAL_DB[code]);
      setReferralStatus('valid');
      setError('');
    } else {
      setReferrerName('');
      setReferralStatus('invalid');
      setError('Mã giới thiệu không tồn tại');
    }
  };

  const handleSubmit = () => {
    if (referralStatus !== 'valid') {
      setError('Vui lòng nhập mã giới thiệu hợp lệ');
      return;
    }
    navigate('/kyc');
  };

  const steps = ['phone', 'pin', 'confirm-pin', 'referral'];
  const stepIndex = steps.indexOf(step);

  const PinInputRow = ({
    values, setter, refs, onChange, onKeyDown, label, hint, autoFocus = false
  }: {
    values: string[];
    setter: typeof setPin;
    refs: typeof pinRefs;
    onChange: (idx: number, val: string) => void;
    onKeyDown: (idx: number, e: React.KeyboardEvent) => void;
    label: string;
    hint?: string;
    autoFocus?: boolean;
  }) => (
    <div>
      <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>{label}</h2>
      {hint && <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>{hint}</p>}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '16px' }}>
        {values.map((digit, i) => (
          <input
            key={i}
            ref={el => refs.current[i] = el}
            type={showPin ? 'text' : 'password'}
            maxLength={1}
            value={digit}
            autoFocus={autoFocus && i === 0}
            onChange={e => onChange(i, e.target.value)}
            onKeyDown={e => onKeyDown(i, e)}
            style={{
              width: '48px', height: '56px', textAlign: 'center',
              fontSize: '20px', fontWeight: 700, background: '#fff',
              border: digit ? '2px solid #2ECC71' : '2px solid #E8E8E8',
              borderRadius: '14px', outline: 'none', color: '#1A1A1A',
              boxShadow: digit ? '0 4px 12px rgba(46,204,113,0.2)' : 'none',
              transition: 'all 0.15s',
            }}
          />
        ))}
      </div>
      <button onClick={() => setShowPin(!showPin)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '13px', margin: '0 auto 24px' }}>
        {showPin ? <EyeOff size={16} /> : <Eye size={16} />}
        {showPin ? 'Ẩn mã PIN' : 'Hiện mã PIN'}
      </button>
    </div>
  );

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F9FA' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg, #27AE60 0%, #2ECC71 100%)', padding: '16px 24px 28px', borderRadius: '0 0 28px 28px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <button onClick={() => stepIndex > 0 ? setStep(steps[stepIndex - 1] as Step) : navigate('/login')} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', borderRadius: '10px', padding: '8px', display: 'flex' }}>
            <ChevronLeft size={20} color="#fff" />
          </button>
          <div style={{ display: 'flex', gap: '6px' }}>
            {steps.map((_, i) => (
              <div key={i} style={{ width: i <= stepIndex ? '20px' : '6px', height: '6px', background: i <= stepIndex ? '#fff' : 'rgba(255,255,255,0.4)', borderRadius: '3px', transition: 'all 0.3s' }} />
            ))}
          </div>
          <div style={{ width: '36px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Zap size={20} color="#fff" fill="#fff" />
          <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Đăng ký GreenNet</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: '28px 24px', overflowY: 'auto' }}>
        {step === 'phone' && (
          <motion.div key="phone" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Số điện thoại</h2>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>Nhập SĐT để tạo tài khoản mới</p>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', display: 'block', marginBottom: '8px' }}>Số điện thoại</label>
              <div style={{ position: 'relative' }}>
                <Phone size={18} color="#2ECC71" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="tel" placeholder="0901 234 567" value={phone}
                  onChange={e => { setPhone(e.target.value); setError(''); }}
                  style={{ width: '100%', height: '52px', paddingLeft: '44px', paddingRight: '16px', background: '#fff', border: '1.5px solid #E8E8E8', borderRadius: '14px', fontSize: '16px', fontWeight: 500, color: '#1A1A1A', outline: 'none', boxSizing: 'border-box', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                />
              </div>
              {error && <p style={{ color: '#E74C3C', fontSize: '12px', marginTop: '6px' }}>{error}</p>}
            </div>
            <button onClick={() => { if (phone.replace(/\s/g, '').length < 9) { setError('Vui lòng nhập SĐT hợp lệ'); return; } setStep('pin'); }} style={{ width: '100%', height: '52px', background: 'linear-gradient(135deg, #2ECC71, #27AE60)', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 20px rgba(46,204,113,0.35)' }}>
              Tiếp tục
            </button>
          </motion.div>
        )}

        {step === 'pin' && (
          <motion.div key="pin" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <PinInputRow
              values={pin} setter={setPin} refs={pinRefs} label="Tạo mã PIN" hint="Mã PIN 6 chữ số để bảo mật tài khoản"
              onChange={(i, v) => handlePinInput(pinRefs, setPin, pin, i, v, () => setStep('confirm-pin'))}
              onKeyDown={(i, e) => handlePinKey(pinRefs, pin, i, e)}
            />
            <button onClick={() => pin.every(d => d) && setStep('confirm-pin')} style={{ width: '100%', height: '52px', background: pin.every(d => d) ? 'linear-gradient(135deg, #2ECC71, #27AE60)' : '#E8E8E8', color: pin.every(d => d) ? '#fff' : '#999', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', boxShadow: pin.every(d => d) ? '0 8px 20px rgba(46,204,113,0.35)' : 'none' }}>
              Tiếp tục
            </button>
          </motion.div>
        )}

        {step === 'confirm-pin' && (
          <motion.div key="confirm-pin" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <PinInputRow
              values={confirmPin} setter={setConfirmPin} refs={confirmRefs} label="Xác nhận mã PIN" hint="Nhập lại mã PIN vừa tạo"
              onChange={(i, v) => handlePinInput(confirmRefs, setConfirmPin, confirmPin, i, v, () => { if (confirmPin.join('') + v !== pin.join('') && (confirmPin.join('') + v).length === 6) { setError('Mã PIN không khớp'); setConfirmPin(['', '', '', '', '', '']); } else { setStep('referral'); } })}
              onKeyDown={(i, e) => handlePinKey(confirmRefs, confirmPin, i, e)}
            />
            {error && <p style={{ color: '#E74C3C', fontSize: '12px', textAlign: 'center', marginBottom: '16px' }}>{error}</p>}
            <button onClick={() => { if (confirmPin.join('') !== pin.join('')) { setError('Mã PIN không khớp'); return; } setStep('referral'); }} style={{ width: '100%', height: '52px', background: confirmPin.every(d => d) ? 'linear-gradient(135deg, #2ECC71, #27AE60)' : '#E8E8E8', color: confirmPin.every(d => d) ? '#fff' : '#999', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>
              Tiếp tục
            </button>
          </motion.div>
        )}

        {step === 'referral' && (
          <motion.div key="referral" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Users size={22} color="#2ECC71" />
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#1A1A1A' }}>Mã giới thiệu</h2>
            </div>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>Nhập mã người giới thiệu để gia nhập hệ thống</p>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#444', display: 'block', marginBottom: '8px' }}>Mã giới thiệu *</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text" placeholder="Vd: AGEN001" value={referralCode}
                  onChange={e => { setReferralCode(e.target.value.toUpperCase()); setReferralStatus('idle'); setError(''); }}
                  style={{ flex: 1, height: '52px', padding: '0 16px', background: '#fff', border: referralStatus === 'valid' ? '2px solid #2ECC71' : referralStatus === 'invalid' ? '2px solid #E74C3C' : '1.5px solid #E8E8E8', borderRadius: '14px', fontSize: '16px', fontWeight: 600, color: '#1A1A1A', outline: 'none', letterSpacing: '1px' }}
                />
                <button onClick={checkReferral} style={{ height: '52px', padding: '0 18px', background: '#2ECC71', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Kiểm tra
                </button>
              </div>
            </div>

            {referralStatus === 'valid' && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ background: 'rgba(46,204,113,0.1)', border: '1.5px solid rgba(46,204,113,0.3)', borderRadius: '14px', padding: '14px 16px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle2 size={20} color="#27AE60" />
                <div>
                  <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Người giới thiệu</p>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#27AE60', margin: 0 }}>{referrerName}</p>
                </div>
              </motion.div>
            )}
            {error && (
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '16px' }}>
                <AlertCircle size={14} color="#E74C3C" />
                <p style={{ color: '#E74C3C', fontSize: '12px', margin: 0 }}>{error}</p>
              </div>
            )}

            <p style={{ fontSize: '12px', color: '#999', marginBottom: '24px' }}>💡 Demo: dùng mã AGEN001, AGEN002 hoặc VIP0001</p>

            <button onClick={handleSubmit} style={{ width: '100%', height: '52px', background: referralStatus === 'valid' ? 'linear-gradient(135deg, #2ECC71, #27AE60)' : '#E8E8E8', color: referralStatus === 'valid' ? '#fff' : '#999', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: referralStatus === 'valid' ? 'pointer' : 'default', boxShadow: referralStatus === 'valid' ? '0 8px 20px rgba(46,204,113,0.35)' : 'none' }}>
              Hoàn tất đăng ký
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
