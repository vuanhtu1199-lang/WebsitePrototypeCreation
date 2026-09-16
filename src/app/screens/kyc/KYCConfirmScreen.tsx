import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ChevronLeft, Cpu, Edit3, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const OCR_FIELDS = [
  { key: 'idNumber',   label: 'Số CCCD', value: '079 123 456 789' },
  { key: 'fullName',   label: 'Họ và tên', value: 'NGUYỄN VĂN AN' },
  { key: 'dob',        label: 'Ngày sinh', value: '01/01/1990' },
  { key: 'gender',     label: 'Giới tính', value: 'Nam' },
  { key: 'address',    label: 'Nơi thường trú', value: '123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh' },
  { key: 'issueDate',  label: 'Ngày cấp', value: '15/03/2020' },
  { key: 'issuePlace', label: 'Nơi cấp', value: 'Cục Cảnh Sát QLHC về TTXH' },
];

export default function KYCConfirmScreen() {
  const navigate = useNavigate();
  const { setKYCData, setKYCStatus } = useApp();
  const [scanning, setScanning] = useState(true);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [fields, setFields] = useState(OCR_FIELDS);

  // Simulate OCR scanning
  useState(() => {
    setTimeout(() => setScanning(false), 2000);
  });

  const handleConfirm = () => {
    const data = {
      idNumber: fields[0].value,
      fullName: fields[1].value,
      dob: fields[2].value,
      gender: fields[3].value,
      address: fields[4].value,
      issueDate: fields[5].value,
      issuePlace: fields[6].value,
    };
    setKYCData(data);
    setKYCStatus('pending');
    navigate('/kyc/status');
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F9FA' }}>
      {/* Header */}
      <div style={{ background: '#fff', padding: '16px 20px', borderBottom: '1px solid #F0F0F0', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={() => navigate('/kyc')} style={{ background: '#F8F9FA', border: 'none', cursor: 'pointer', borderRadius: '10px', padding: '8px', display: 'flex' }}>
          <ChevronLeft size={20} color="#1A1A1A" />
        </button>
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>Xác nhận thông tin</h1>
          <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Bước 2/2 · OCR tự động</p>
        </div>
      </div>

      {/* Progress */}
      <div style={{ height: '4px', background: '#E8E8E8' }}>
        <div style={{ height: '100%', width: '100%', background: 'linear-gradient(90deg, #2ECC71, #27AE60)', borderRadius: '0 2px 2px 0' }} />
      </div>

      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {scanning ? (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}
          >
            <div style={{ width: '80px', height: '80px', background: 'rgba(46,204,113,0.1)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <Cpu size={36} color="#2ECC71" />
              </motion.div>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Đang trích xuất dữ liệu...</h3>
            <p style={{ fontSize: '13px', color: '#666', textAlign: 'center', marginBottom: '24px' }}>OCR đang đọc thông tin từ CCCD của bạn</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              {['Xử lý ảnh...', 'Nhận dạng ký tự...', 'Trích xuất dữ liệu...'].map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.4 }} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', padding: '12px 16px', borderRadius: '12px' }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} style={{ width: '16px', height: '16px', border: '2px solid #E8E8E8', borderTopColor: '#2ECC71', borderRadius: '50%' }} />
                  <span style={{ fontSize: '13px', color: '#555' }}>{t}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Success banner */}
            <div style={{ background: 'rgba(46,204,113,0.1)', border: '1.5px solid rgba(46,204,113,0.25)', borderRadius: '16px', padding: '14px 16px', marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <CheckCircle2 size={20} color="#27AE60" />
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#27AE60', margin: 0 }}>OCR thành công!</p>
                <p style={{ fontSize: '12px', color: '#555', margin: 0 }}>Kiểm tra và chỉnh sửa nếu cần</p>
              </div>
            </div>

            {/* Fields */}
            <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '20px' }}>
              {fields.map((field, idx) => (
                <div key={field.key} style={{ padding: '14px 16px', borderBottom: idx < fields.length - 1 ? '1px solid #F5F5F5' : 'none' }}>
                  <p style={{ fontSize: '11px', fontWeight: 600, color: '#999', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{field.label}</p>
                  {editingField === field.key ? (
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input
                        value={field.value}
                        onChange={e => setFields(prev => prev.map(f => f.key === field.key ? { ...f, value: e.target.value } : f))}
                        style={{ flex: 1, border: '2px solid #2ECC71', borderRadius: '8px', padding: '6px 10px', fontSize: '14px', outline: 'none', fontWeight: 500 }}
                        autoFocus
                      />
                      <button onClick={() => setEditingField(null)} style={{ background: '#2ECC71', color: '#fff', border: 'none', borderRadius: '8px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>Xong</button>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A', margin: 0, flex: 1, lineHeight: 1.5 }}>{field.value}</p>
                      <button onClick={() => setEditingField(field.key)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2ECC71', padding: '0 0 0 8px', flexShrink: 0 }}>
                        <Edit3 size={15} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(241,196,15,0.1)', border: '1px solid rgba(241,196,15,0.3)', borderRadius: '12px', padding: '12px 14px', marginBottom: '20px' }}>
              <p style={{ fontSize: '12px', color: '#D4AC0D', margin: 0, lineHeight: 1.6 }}>
                ⚠️ Vui lòng kiểm tra kỹ thông tin trước khi xác nhận. Sau khi gửi, thông tin sẽ được xét duyệt và không thể thay đổi.
              </p>
            </div>

            <button
              onClick={handleConfirm}
              style={{ width: '100%', height: '52px', background: 'linear-gradient(135deg, #2ECC71, #27AE60)', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 20px rgba(46,204,113,0.35)' }}
            >
              Xác nhận & Gửi duyệt
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
