import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ChevronLeft, Star, ShoppingCart, Minus, Plus, Heart, Share2, Shield, Truck, Award } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const fmt = (n: number) => new Intl.NumberFormat('vi-VN').format(n);

export default function ProductDetailScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, addToCart, cart } = useApp();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'reviews'>('desc');

  const product = products.find(p => p.id === Number(id));
  if (!product) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column', gap: '10px' }}>
      <p style={{ fontSize: '40px' }}>🔍</p>
      <p style={{ fontWeight: 700, color: '#1A1A1A' }}>Không tìm thấy sản phẩm</p>
      <button onClick={() => navigate('/home/shop')} style={{ color: '#2ECC71', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>← Quay lại cửa hàng</button>
    </div>
  );

  const cartItem = cart.find(i => i.product.id === product.id);
  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, qty);
    navigate('/home/cart');
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F9FA' }}>
      {/* Scrollable content */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {/* Product image + header */}
        <div style={{ background: '#fff', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
            <button onClick={() => navigate('/home/shop')} style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <ChevronLeft size={20} color="#1A1A1A" />
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setLiked(!liked)} style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Heart size={18} color={liked ? '#E74C3C' : '#555'} fill={liked ? '#E74C3C' : 'none'} />
              </button>
              <button style={{ width: '36px', height: '36px', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <Share2 size={18} color="#555" />
              </button>
            </div>
          </div>

          <div style={{ height: '240px', background: '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Discount badge */}
          <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: '#E74C3C', borderRadius: '10px', padding: '4px 12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>-{discount}%</span>
          </div>
        </div>

        <div style={{ padding: '16px' }}>
          {/* Product info */}
          <div style={{ background: '#fff', borderRadius: '20px', padding: '16px', marginBottom: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: '11px', color: '#888', fontWeight: 500, background: '#F0F0F0', borderRadius: '6px', padding: '3px 8px' }}>{product.category}</span>
            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', margin: '8px 0 6px', lineHeight: 1.3 }}>{product.name}</h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={14} color="#F1C40F" fill={i <= Math.floor(product.rating) ? '#F1C40F' : 'none'} />)}
              </div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#1A1A1A' }}>{product.rating}</span>
              <span style={{ fontSize: '12px', color: '#999' }}>({product.reviews} đánh giá)</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <p style={{ fontSize: '24px', fontWeight: 800, color: '#2ECC71', margin: '0 0 2px', letterSpacing: '-0.3px' }}>{fmt(product.price)} đ</p>
                <p style={{ fontSize: '13px', color: '#C0C0C0', margin: 0, textDecoration: 'line-through' }}>{fmt(product.originalPrice)} đ</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '11px', color: '#888', margin: '0 0 2px' }}>Còn lại</p>
                <p style={{ fontSize: '14px', fontWeight: 700, color: product.stock > 5 ? '#2ECC71' : '#E67E22', margin: 0 }}>{product.stock} sản phẩm</p>
              </div>
            </div>
          </div>

          {/* Qty selector */}
          <div style={{ background: '#fff', borderRadius: '16px', padding: '14px 16px', marginBottom: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A' }}>Số lượng</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: '32px', height: '32px', background: qty === 1 ? '#F0F0F0' : 'rgba(46,204,113,0.1)', border: 'none', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Minus size={16} color={qty === 1 ? '#C0C0C0' : '#2ECC71'} />
              </button>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#1A1A1A', minWidth: '24px', textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(q => Math.min(product.stock, q + 1))} style={{ width: '32px', height: '32px', background: 'rgba(46,204,113,0.1)', border: 'none', borderRadius: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Plus size={16} color="#2ECC71" />
              </button>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#1A1A1A' }}>{fmt(product.price * qty)} đ</span>
          </div>

          {/* Features */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
            {[
              { icon: Shield, label: 'Bảo hành 12 tháng', color: '#2ECC71' },
              { icon: Truck, label: 'Giao hàng nhanh', color: '#2980B9' },
              { icon: Award, label: 'Chính hãng 100%', color: '#F1C40F' },
            ].map(f => (
              <div key={f.label} style={{ flex: 1, background: '#fff', borderRadius: '12px', padding: '10px 8px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <f.icon size={18} color={f.color} style={{ margin: '0 auto 4px', display: 'block' }} />
                <p style={{ fontSize: '10px', color: '#555', margin: 0, lineHeight: 1.3 }}>{f.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', marginBottom: '12px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid #F0F0F0' }}>
              {[['desc', 'Mô tả'], ['specs', 'Thông số'], ['reviews', 'Đánh giá']].map(([k, l]) => (
                <button key={k} onClick={() => setActiveTab(k as typeof activeTab)} style={{ flex: 1, height: '42px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: activeTab === k ? 700 : 500, color: activeTab === k ? '#2ECC71' : '#888', borderBottom: activeTab === k ? '2px solid #2ECC71' : '2px solid transparent', transition: 'all 0.2s' }}>{l}</button>
              ))}
            </div>
            <div style={{ padding: '16px' }}>
              {activeTab === 'desc' && <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, margin: 0 }}>{product.description}</p>}
              {activeTab === 'specs' && (
                <div>
                  {[['Thương hiệu', 'Apple / Samsung'], ['Bộ nhớ', '256GB / 512GB'], ['RAM', '8GB'], ['Pin', '4422 mAh'], ['Màn hình', '6.7 inch OLED'], ['Kết nối', '5G, WiFi 6E, Bluetooth 5.3']].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #F8F8F8' }}>
                      <span style={{ fontSize: '12px', color: '#888' }}>{k}</span>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A' }}>{v}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'reviews' && (
                <div>
                  {[{ name: 'Nguyễn M.K', rating: 5, text: 'Sản phẩm tuyệt vời, đúng như mô tả. Giao hàng nhanh, đóng gói cẩn thận!' },
                    { name: 'Trần T.H', rating: 5, text: 'Chất lượng rất tốt, giá hợp lý. Sẽ giới thiệu cho bạn bè.' }].map((r, i) => (
                    <div key={i} style={{ marginBottom: i === 0 ? '12px' : 0, paddingBottom: i === 0 ? '12px' : 0, borderBottom: i === 0 ? '1px solid #F0F0F0' : 'none' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>{r.name}</span>
                        <div style={{ display: 'flex', gap: '2px' }}>
                          {[...Array(r.rating)].map((_, j) => <Star key={j} size={12} color="#F1C40F" fill="#F1C40F" />)}
                        </div>
                      </div>
                      <p style={{ fontSize: '12px', color: '#555', margin: 0, lineHeight: 1.6 }}>{r.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {cartItem && (
            <div style={{ background: 'rgba(46,204,113,0.08)', border: '1px solid rgba(46,204,113,0.2)', borderRadius: '12px', padding: '10px 14px', marginBottom: '12px', fontSize: '13px', color: '#27AE60', fontWeight: 500 }}>
              🛒 Đã có {cartItem.quantity} sản phẩm trong giỏ hàng
            </div>
          )}
        </div>
      </div>

      {/* Bottom actions */}
      <div style={{ padding: '12px 16px', background: '#fff', borderTop: '1px solid #F0F0F0', display: 'flex', gap: '10px' }}>
        <button
          onClick={handleAddToCart}
          style={{ flex: 1, height: '50px', background: added ? '#27AE60' : 'rgba(46,204,113,0.1)', color: added ? '#fff' : '#2ECC71', border: '2px solid #2ECC71', borderRadius: '14px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', transition: 'all 0.2s' }}
        >
          <ShoppingCart size={16} /> {added ? '✓ Đã thêm!' : 'Thêm giỏ'}
        </button>
        <button
          onClick={handleBuyNow}
          style={{ flex: 2, height: '50px', background: 'linear-gradient(135deg, #2ECC71, #27AE60)', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', boxShadow: '0 8px 20px rgba(46,204,113,0.35)' }}
        >
          Mua ngay
        </button>
      </div>
    </div>
  );
}
