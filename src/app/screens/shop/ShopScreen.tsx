import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Search, ShoppingCart, Clock, Filter, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const fmt = (n: number) => new Intl.NumberFormat('vi-VN').format(n);
const CATEGORIES = ['Tất cả', 'Điện thoại', 'Máy tính', 'Âm thanh', 'Đồng hồ', 'Máy tính bảng'];

export default function ShopScreen() {
  const navigate = useNavigate();
  const { products, cart, addToCart } = useApp();
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('Tất cả');
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  const filtered = products.filter(p => {
    const matchCat = selectedCat === 'Tất cả' || p.category === selectedCat;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAddToCart = (e: React.MouseEvent, product: typeof products[0]) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedIds(prev => [...prev, product.id]);
    setTimeout(() => setAddedIds(prev => prev.filter(id => id !== product.id)), 1500);
  };

  return (
    <div style={{ background: '#F8F9FA', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ background: '#fff', padding: '16px 20px 12px', borderBottom: '1px solid #F0F0F0', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#1A1A1A', margin: 0 }}>Cửa hàng</h1>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => navigate('/home/orders')} style={{ width: '38px', height: '38px', background: '#F8F9FA', border: 'none', cursor: 'pointer', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={18} color="#555" />
            </button>
            <button onClick={() => navigate('/home/cart')} style={{ width: '38px', height: '38px', background: '#F8F9FA', border: 'none', cursor: 'pointer', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <ShoppingCart size={18} color="#555" />
              {cartCount > 0 && (
                <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '18px', height: '18px', background: '#E74C3C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff' }}>
                  {cartCount > 9 ? '9+' : cartCount}
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: '12px' }}>
          <Search size={16} color="#999" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            placeholder="Tìm kiếm sản phẩm..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '100%', height: '42px', paddingLeft: '40px', paddingRight: '16px', background: '#F8F9FA', border: '1.5px solid #E8E8E8', borderRadius: '12px', fontSize: '14px', outline: 'none', boxSizing: 'border-box', color: '#1A1A1A' }}
          />
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setSelectedCat(cat)} style={{ flexShrink: 0, padding: '6px 14px', background: selectedCat === cat ? '#2ECC71' : '#F0F0F0', color: selectedCat === cat ? '#fff' : '#555', border: 'none', borderRadius: '20px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', boxShadow: selectedCat === cat ? '0 4px 10px rgba(46,204,113,0.3)' : 'none' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px' }}>
        {/* Results count */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>
            <span style={{ fontWeight: 700, color: '#1A1A1A' }}>{filtered.length}</span> sản phẩm
          </p>
          <button style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: '1.5px solid #E8E8E8', borderRadius: '10px', padding: '6px 12px', cursor: 'pointer' }}>
            <Filter size={14} color="#555" />
            <span style={{ fontSize: '12px', color: '#555', fontWeight: 600 }}>Lọc</span>
          </button>
        </div>

        {/* Product grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {filtered.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => navigate(`/home/shop/${p.id}`)}
              style={{ background: '#fff', borderRadius: '18px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', cursor: 'pointer' }}
            >
              {/* Product image */}
              <div style={{ height: '130px', background: '#F5F5F7', position: 'relative', overflow: 'hidden' }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '8px', left: '8px', background: '#E74C3C', borderRadius: '6px', padding: '2px 6px', fontSize: '10px', fontWeight: 700, color: '#fff' }}>
                  -{Math.round((1 - p.price / p.originalPrice) * 100)}%
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '10px' }}>
                <p style={{ fontSize: '11px', color: '#999', margin: '0 0 3px' }}>{p.category}</p>
                <p style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A', margin: '0 0 4px', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.name}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '6px' }}>
                  <Star size={11} color="#F1C40F" fill="#F1C40F" />
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#555' }}>{p.rating}</span>
                  <span style={{ fontSize: '11px', color: '#999' }}>({p.reviews})</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <p style={{ fontSize: '14px', fontWeight: 700, color: '#2ECC71', margin: '0 0 2px' }}>{fmt(p.price)} đ</p>
                  <p style={{ fontSize: '11px', color: '#C0C0C0', margin: 0, textDecoration: 'line-through' }}>{fmt(p.originalPrice)} đ</p>
                </div>
                <button
                  onClick={e => handleAddToCart(e, p)}
                  style={{ width: '100%', height: '32px', background: addedIds.includes(p.id) ? '#27AE60' : 'linear-gradient(135deg, #2ECC71, #27AE60)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '12px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', transition: 'all 0.2s' }}
                >
                  {addedIds.includes(p.id) ? '✓ Đã thêm' : '+ Thêm vào giỏ'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ fontSize: '40px', margin: '0 0 10px' }}>🔍</p>
            <p style={{ fontSize: '16px', fontWeight: 700, color: '#1A1A1A', margin: '0 0 6px' }}>Không tìm thấy sản phẩm</p>
            <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>Thử tìm với từ khóa khác</p>
          </div>
        )}
      </div>
    </div>
  );
}
