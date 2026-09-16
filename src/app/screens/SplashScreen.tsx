import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate('/login'), 2800);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div style={{
      height: '100%',
      background: 'linear-gradient(160deg, #1a3a2a 0%, #27AE60 50%, #2ECC71 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background circles */}
      <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />
      <div style={{ position: 'absolute', top: '30%', left: '-80px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(0,0,0,0.08)' }} />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 14, stiffness: 180, delay: 0.1 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
      >
        {/* Logo icon */}
        <div style={{
          width: '90px',
          height: '90px',
          background: 'rgba(255,255,255,0.18)',
          borderRadius: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(20px)',
          border: '1.5px solid rgba(255,255,255,0.3)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        }}>
          <Zap size={44} fill="#fff" color="#fff" strokeWidth={1.5} />
        </div>

        {/* App name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{ fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', lineHeight: 1 }}>
            GreenNet
          </div>
          <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', marginTop: '6px', letterSpacing: '0.5px' }}>
            Affiliate Platform
          </div>
        </motion.div>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '80px',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.65)',
          textAlign: 'center',
          letterSpacing: '0.3px',
        }}
      >
        Tăng trưởng cùng nhau 🌱
      </motion.p>

      {/* Loading dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ position: 'absolute', bottom: '52px', display: 'flex', gap: '6px' }}
      >
        {[0, 1, 2].map(i => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.8)', borderRadius: '50%' }}
          />
        ))}
      </motion.div>
    </div>
  );
}
