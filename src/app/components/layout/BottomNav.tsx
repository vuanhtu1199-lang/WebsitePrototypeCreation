import { useNavigate, useLocation } from 'react-router';
import { Home, ShoppingBag, Network, User } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const TABS = [
  { path: '/home', icon: Home, label: 'Trang chủ' },
  { path: '/home/shop', icon: ShoppingBag, label: 'Cửa hàng' },
  { path: '/home/network', icon: Network, label: 'Hệ thống' },
  { path: '/home/profile', icon: User, label: 'Tài khoản' },
];

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useApp();
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const isActive = (path: string) => {
    if (path === '/home') return location.pathname === '/home';
    return location.pathname.startsWith(path);
  };

  return (
    <div style={{
      height: '72px',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      display: 'flex',
      alignItems: 'stretch',
      flexShrink: 0,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
    }}>
      {TABS.map(({ path, icon: Icon, label }) => {
        const active = isActive(path);
        const isShop = path === '/home/shop';
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0 4px',
              position: 'relative',
            }}
          >
            {/* Active indicator */}
            {active && (
              <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '32px',
                height: '3px',
                background: '#2ECC71',
                borderRadius: '0 0 3px 3px',
              }} />
            )}
            <div style={{ position: 'relative' }}>
              <Icon
                size={22}
                strokeWidth={active ? 2.5 : 1.8}
                style={{ color: active ? '#2ECC71' : '#9CA3AF' }}
              />
              {/* Cart badge */}
              {isShop && cartCount > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-8px',
                  minWidth: '16px',
                  height: '16px',
                  background: '#E74C3C',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#fff',
                  padding: '0 4px',
                }}>
                  {cartCount > 9 ? '9+' : cartCount}
                </div>
              )}
            </div>
            <span style={{
              fontSize: '10px',
              fontWeight: active ? 600 : 400,
              color: active ? '#2ECC71' : '#9CA3AF',
              letterSpacing: '-0.1px',
            }}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
