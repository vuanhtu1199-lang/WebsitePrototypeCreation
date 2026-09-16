import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useApp } from "../../context/AppContext";
import type { Order } from "../../context/AppContext";

type ShopView = "list" | "detail" | "cart" | "orders" | "orderSuccess";

const PRODUCTS = [
  { id: "1", name: "iPhone 15 Pro Max", price: 32500000, img: "https://images.unsplash.com/photo-1759588071781-d69892bd7ca1?w=400&q=80", category: "Điện thoại", rating: 4.9, sold: 128, desc: "Chip A17 Pro, camera 48MP ProRAW, titan siêu bền. Màn hình Super Retina XDR 6.7 inch." },
  { id: "2", name: "Sony WH-1000XM5", price: 8500000, img: "https://images.unsplash.com/photo-1656457468703-2aaebb8477b6?w=400&q=80", category: "Âm thanh", rating: 4.8, sold: 95, desc: "Chống ồn chủ động hàng đầu, 30h pin, kết nối multipoint, âm thanh Hi-Res." },
  { id: "3", name: "Apple Watch Ultra 2", price: 19900000, img: "https://images.unsplash.com/photo-1733908511568-3abc819b21b5?w=400&q=80", category: "Wearable", rating: 4.9, sold: 72, desc: "Vỏ titan, GPS chính xác, 60h pin, sạc nhanh, màn hình Always-On 49mm." },
  { id: "4", name: "MacBook Air M3", price: 29900000, img: "https://images.unsplash.com/photo-1585435465945-bef5a93f8849?w=400&q=80", category: "Laptop", rating: 4.8, sold: 64, desc: "Chip Apple M3, RAM 8GB, SSD 256GB, pin 18h, thiết kế siêu mỏng không quạt." },
  { id: "5", name: "AirPods Pro 2", price: 6500000, img: "https://images.unsplash.com/photo-1744382945582-0ad00ee47390?w=400&q=80", category: "Âm thanh", rating: 4.7, sold: 156, desc: "ANC thế hệ H2, spatial audio, chống nước IPX4, 30h pin với hộp sạc." },
  { id: "6", name: "Samsung Neo QLED 65\"", price: 35000000, img: "https://images.unsplash.com/photo-1721733258410-35e699661ad6?w=400&q=80", category: "TV", rating: 4.6, sold: 38, desc: "Mini LED 4K, 144Hz, HDR2000, Game Mode Pro, Neural Quantum 4K AI." },
  { id: "7", name: "Gaming Chair Pro X", price: 4800000, img: "https://images.unsplash.com/photo-1770195555068-37103df33bf8?w=400&q=80", category: "Nội thất", rating: 4.5, sold: 87, desc: "Da PU cao cấp, đệm 3D, chân nghỉ, hỗ trợ lưng điều chỉnh, tải 150kg." },
];

const ORDER_STATUS: Record<string, { label: string; color: string; bg: string }> = {
  purchased: { label: "Đã đặt hàng", color: "#3498DB", bg: "rgba(52,152,219,0.08)" },
  processing: { label: "Đang xử lý", color: "#E67E22", bg: "rgba(230,126,34,0.08)" },
  shipping: { label: "Đang giao hàng", color: "#9B59B6", bg: "rgba(155,89,182,0.08)" },
  completed: { label: "Hoàn thành", color: "#2ECC71", bg: "rgba(46,204,113,0.08)" },
  cancelled: { label: "Huỷ đơn", color: "#E74C3C", bg: "rgba(231,76,60,0.08)" },
};

function formatVND(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + "đ";
}

export default function ShopScreen() {
  const { cart, addToCart, removeFromCart, updateCartQty, placeOrder, user, orders } = useApp();
  const [view, setView] = useState<ShopView>("list");
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedQty, setSelectedQty] = useState(1);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [address, setAddress] = useState("123 Nguyễn Huệ, Q.1, TP.HCM");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Tất cả", "Điện thoại", "Âm thanh", "Wearable", "Laptop", "TV", "Nội thất"];
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const filteredProducts = PRODUCTS.filter(p =>
    (activeCategory === "Tất cả" || p.category === activeCategory) &&
    (!searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleBuy = () => {
    const order = placeOrder(address);
    setLastOrder(order);
    setView("orderSuccess");
  };

  if (view === "orderSuccess" && lastOrder) {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", alignItems: "center", justifyContent: "center", padding: 24 }}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.4 }}
          style={{ width: 100, height: 100, borderRadius: 32, background: "linear-gradient(135deg, #2ECC71, #27AE60)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: "0 16px 40px rgba(46,204,113,0.4)", fontSize: 42 }}
        >🎉</motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A" }}>Đặt hàng thành công!</div>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#666", marginTop: 6 }}>Mã đơn: <strong>{lastOrder.id}</strong></div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          style={{ background: "white", borderRadius: 20, padding: "20px", width: "100%", marginTop: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>Tổng tiền</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#E74C3C" }}>{formatVND(lastOrder.total)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>Thanh toán</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#2ECC71" }}>VNĐT</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>Địa chỉ</span>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "#1A1A1A", textAlign: "right", maxWidth: 180 }}>{lastOrder.address}</span>
          </div>
        </motion.div>
        <div style={{ display: "flex", gap: 12, marginTop: 24, width: "100%" }}>
          <button onClick={() => setView("orders")} style={{ flex: 1, padding: "14px", borderRadius: 14, border: "1.5px solid #E8E8E8", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 500, color: "#666", cursor: "pointer" }}>
            Xem đơn hàng
          </button>
          <button onClick={() => setView("list")} style={{ flex: 1, padding: "14px", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #2ECC71, #27AE60)", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "white", cursor: "pointer", boxShadow: "0 6px 20px rgba(46,204,113,0.3)" }}>
            Mua tiếp
          </button>
        </div>
      </div>
    );
  }

  if (view === "detail") {
    const inCart = cart.find(c => c.id === selectedProduct.id);
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA" }}>
        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ position: "relative" }}>
            <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: "100%", height: 240, objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)" }} />
            <button onClick={() => setView("list")} style={{ position: "absolute", top: 52, left: 16, width: 38, height: 38, borderRadius: 12, background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4L6 9l5 5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={() => setView("cart")} style={{ position: "absolute", top: 52, right: 16, width: 38, height: 38, borderRadius: 12, background: "rgba(255,255,255,0.9)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 2h2l2.4 8.4a1 1 0 001 .6H14l2-6H5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7.5" cy="15.5" r="1" fill="#1A1A1A"/><circle cx="13.5" cy="15.5" r="1" fill="#1A1A1A"/></svg>
              {cartCount > 0 && <div style={{ position: "absolute", top: 4, right: 4, width: 14, height: 14, borderRadius: 7, background: "#E74C3C", fontFamily: "Inter, sans-serif", fontSize: 9, fontWeight: 700, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</div>}
            </button>
          </div>
          <div style={{ padding: "20px 20px 24px" }}>
            <div style={{ display: "inline-block", padding: "3px 10px", borderRadius: 20, background: "rgba(46,204,113,0.1)", marginBottom: 8 }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "#2ECC71" }}>{selectedProduct.category}</span>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginBottom: 6, lineHeight: 1.3 }}>{selectedProduct.name}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {"⭐".repeat(Math.floor(selectedProduct.rating))}
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{selectedProduct.rating}</span>
              </div>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#999" }}>• Đã bán {selectedProduct.sold}</span>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 24, fontWeight: 800, color: "#2ECC71", marginBottom: 12 }}>{formatVND(selectedProduct.price)}</div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#555", lineHeight: 1.6, marginBottom: 20 }}>{selectedProduct.desc}</div>
            
            {/* Qty selector */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#666" }}>Số lượng:</span>
              <div style={{ display: "flex", alignItems: "center", gap: 0, background: "#F8F8F8", borderRadius: 12, overflow: "hidden" }}>
                <button onClick={() => setSelectedQty(q => Math.max(1, q - 1))} style={{ width: 36, height: 36, border: "none", background: "transparent", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 18, color: "#1A1A1A" }}>−</button>
                <span style={{ width: 36, textAlign: "center", fontFamily: "Inter, sans-serif", fontSize: 15, fontWeight: 600, color: "#1A1A1A" }}>{selectedQty}</span>
                <button onClick={() => setSelectedQty(q => q + 1)} style={{ width: 36, height: 36, border: "none", background: "transparent", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 18, color: "#2ECC71" }}>+</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky bottom buttons */}
        <div style={{ padding: "12px 20px 20px", background: "white", borderTop: "0.5px solid #F0F0F0", display: "flex", gap: 10 }}>
          <button
            onClick={() => { addToCart({ id: selectedProduct.id, name: selectedProduct.name, price: selectedProduct.price, qty: selectedQty, image: selectedProduct.img }); }}
            style={{ flex: 1, padding: "14px", borderRadius: 14, border: "1.5px solid #2ECC71", background: "white", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#2ECC71", cursor: "pointer" }}
          >
            Thêm giỏ hàng
          </button>
          <button
            onClick={() => { addToCart({ id: selectedProduct.id, name: selectedProduct.name, price: selectedProduct.price, qty: selectedQty, image: selectedProduct.img }); setView("cart"); }}
            style={{ flex: 1.5, padding: "14px", borderRadius: 14, border: "none", background: "linear-gradient(135deg, #2ECC71, #27AE60)", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "white", cursor: "pointer", boxShadow: "0 8px 24px rgba(46,204,113,0.35)" }}
          >
            Mua ngay
          </button>
        </div>
      </div>
    );
  }

  if (view === "cart") {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
        <div style={{ background: "white", padding: "52px 20px 16px", borderBottom: "0.5px solid #E8E8E8" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => setView("list")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 5L7.5 10l5 5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 17, fontWeight: 700, color: "#1A1A1A" }}>Giỏ hàng ({cartCount})</div>
            <button onClick={() => setView("orders")} style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#2ECC71", background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}>Lịch sử</button>
          </div>
        </div>
        <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 10 }}>
          {cart.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 12 }}>
              <div style={{ fontSize: 48 }}>🛒</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 500, color: "#666" }}>Giỏ hàng trống</div>
              <button onClick={() => setView("list")} style={{ padding: "12px 24px", borderRadius: 14, background: "linear-gradient(135deg, #2ECC71, #27AE60)", border: "none", fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "white", cursor: "pointer" }}>
                Khám phá sản phẩm
              </button>
            </div>
          ) : (
            <>
              {cart.map(item => (
                <motion.div key={item.id} layout style={{ background: "white", borderRadius: 16, padding: "12px", display: "flex", gap: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                  <img src={item.image} alt={item.name} style={{ width: 70, height: 70, borderRadius: 12, objectFit: "cover", flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1A1A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#2ECC71", marginTop: 4 }}>{formatVND(item.price)}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                      <button onClick={() => updateCartQty(item.id, item.qty - 1)} style={{ width: 28, height: 28, borderRadius: 8, border: "1px solid #E8E8E8", background: "white", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 16, color: "#E74C3C" }}>−</button>
                      <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#1A1A1A", minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                      <button onClick={() => updateCartQty(item.id, item.qty + 1)} style={{ width: 28, height: 28, borderRadius: 8, border: "1px solid #E8E8E8", background: "white", cursor: "pointer", fontFamily: "Inter, sans-serif", fontSize: 16, color: "#2ECC71" }}>+</button>
                      <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "auto", width: 28, height: 28, borderRadius: 8, border: "none", background: "rgba(231,76,60,0.08)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 4h10M5 4V3h4v1M6 7v4M8 7v4M3 4l.7 7a1 1 0 001 .9h4.6a1 1 0 001-.9L11 4" stroke="#E74C3C" strokeWidth="1.3" strokeLinecap="round"/></svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Address */}
              <div style={{ background: "white", borderRadius: 16, padding: "14px 16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: "#666", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 8 }}>Địa chỉ giao hàng</div>
                <input value={address} onChange={e => setAddress(e.target.value)} style={{ width: "100%", border: "1px solid #E8E8E8", borderRadius: 10, padding: "10px 12px", fontFamily: "Inter, sans-serif", fontSize: 13, color: "#1A1A1A", outline: "none", boxSizing: "border-box" }} />
              </div>

              {/* Order summary */}
              <div style={{ background: "white", borderRadius: 16, padding: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>Tạm tính</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#1A1A1A" }}>{formatVND(cartTotal)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#666" }}>Phí giao hàng</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#2ECC71", fontWeight: 600 }}>Miễn phí</span>
                </div>
                <div style={{ borderTop: "0.5px solid #F0F0F0", paddingTop: 8, display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>Tổng cộng</span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 800, color: "#E74C3C" }}>{formatVND(cartTotal)}</span>
                </div>
                <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#666" }}>Số dư: </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 600, color: user.balance >= cartTotal ? "#2ECC71" : "#E74C3C" }}>
                    {formatVND(user.balance)} VNĐT
                  </span>
                  {user.balance < cartTotal && <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#E74C3C" }}>— Không đủ số dư</span>}
                </div>
              </div>

              <button onClick={handleBuy} disabled={user.balance < cartTotal}
                style={{ width: "100%", padding: "16px", borderRadius: 14, border: "none", background: user.balance >= cartTotal ? "linear-gradient(135deg, #2ECC71, #27AE60)" : "#E8E8E8", fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 600, color: user.balance >= cartTotal ? "white" : "#999", cursor: user.balance >= cartTotal ? "pointer" : "default", boxShadow: user.balance >= cartTotal ? "0 8px 24px rgba(46,204,113,0.35)" : "none" }}>
                Thanh toán bằng VNĐT
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (view === "orders") {
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
        <div style={{ background: "white", padding: "52px 20px 16px", borderBottom: "0.5px solid #E8E8E8" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => setView("list")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 5L7.5 10l5 5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 17, fontWeight: 700, color: "#1A1A1A" }}>Lịch sử đơn hàng</div>
            <div style={{ width: 20 }} />
          </div>
        </div>
        <div style={{ flex: 1, padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
          {orders.length === 0 ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: 12 }}>
              <div style={{ fontSize: 48 }}>📦</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 500, color: "#666" }}>Chưa có đơn hàng nào</div>
            </div>
          ) : orders.map(order => {
            const cfg = ORDER_STATUS[order.status];
            return (
              <div key={order.id} style={{ background: "white", borderRadius: 16, padding: "14px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>#{order.id}</span>
                  <div style={{ padding: "4px 10px", borderRadius: 20, background: cfg.bg }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: cfg.color }}>{cfg.label}</span>
                  </div>
                </div>
                {order.items.map(item => (
                  <div key={item.id} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                    <img src={item.image} alt={item.name} style={{ width: 48, height: 48, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 500, color: "#1A1A1A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#666", marginTop: 2 }}>x{item.qty} — {formatVND(item.price)}</div>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "0.5px solid #F0F0F0", paddingTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999" }}>{order.date}</span>
                  </div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>{formatVND(order.total)}</span>
                </div>
                {/* Order lifecycle */}
                <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 0 }}>
                  {["purchased", "processing", "shipping", "completed"].map((s, i) => {
                    const steps = ["purchased", "processing", "shipping", "completed"];
                    const currentIdx = steps.indexOf(order.status);
                    const done = i <= currentIdx && order.status !== "cancelled";
                    return (
                      <React.Fragment key={s}>
                        <div style={{ width: 8, height: 8, borderRadius: 4, background: done ? "#2ECC71" : "#E8E8E8", flexShrink: 0, border: i === currentIdx && order.status !== "cancelled" ? "2px solid #27AE60" : "none" }} />
                        {i < 3 && <div style={{ flex: 1, height: 2, background: done && i < currentIdx ? "#2ECC71" : "#E8E8E8" }} />}
                      </React.Fragment>
                    );
                  })}
                </div>
                {order.status === "processing" && (
                  <button style={{ marginTop: 10, padding: "8px 16px", borderRadius: 10, border: "1px solid #E74C3C", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "#E74C3C", cursor: "pointer" }}>
                    Huỷ đơn hàng
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // List view
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#F8F9FA", overflowY: "auto" }}>
      {/* Header */}
      <div style={{ background: "white", padding: "52px 20px 16px", borderBottom: "0.5px solid #E8E8E8" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A" }}>Cửa hàng 🛍️</div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setView("orders")} style={{ width: 36, height: 36, borderRadius: 10, background: "#F8F8F8", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="12" rx="2" stroke="#666" strokeWidth="1.5"/><path d="M5 7h8M5 10h6" stroke="#666" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            <button onClick={() => setView("cart")} style={{ width: 36, height: 36, borderRadius: 10, background: "#F8F8F8", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 2h2l2.4 8.4a1 1 0 001 .6H14l2-6H5" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="7.5" cy="15.5" r="1" fill="#666"/><circle cx="13.5" cy="15.5" r="1" fill="#666"/></svg>
              {cartCount > 0 && <div style={{ position: "absolute", top: 4, right: 4, width: 14, height: 14, borderRadius: 7, background: "#E74C3C", fontFamily: "Inter, sans-serif", fontSize: 9, fontWeight: 700, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</div>}
            </button>
          </div>
        </div>
        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#F8F8F8", borderRadius: 12, padding: "10px 14px" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="#999" strokeWidth="1.5"/><path d="M10.5 10.5L14 14" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Tìm kiếm sản phẩm..." style={{ flex: 1, border: "none", background: "transparent", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1A1A1A", outline: "none" }} />
        </div>
      </div>

      {/* Categories */}
      <div style={{ display: "flex", gap: 8, padding: "12px 16px", overflowX: "auto", background: "white", borderBottom: "0.5px solid #E8E8E8" }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            style={{ padding: "6px 14px", borderRadius: 20, border: "none", cursor: "pointer", flexShrink: 0, background: activeCategory === cat ? "#2ECC71" : "#F5F5F5", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: activeCategory === cat ? 600 : 400, color: activeCategory === cat ? "white" : "#666", transition: "all 0.2s" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, paddingBottom: 24 }}>
        {filteredProducts.map(prod => (
          <motion.div key={prod.id} whileTap={{ scale: 0.97 }} onClick={() => { setSelectedProduct(prod); setView("detail"); }}
            style={{ background: "white", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", cursor: "pointer" }}
          >
            <div style={{ position: "relative" }}>
              <img src={prod.img} alt={prod.name} style={{ width: "100%", height: 130, objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 8, right: 8, padding: "2px 8px", borderRadius: 20, background: "rgba(0,0,0,0.4)" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 10, fontWeight: 600, color: "white" }}>⭐ {prod.rating}</span>
              </div>
            </div>
            <div style={{ padding: "10px 10px 12px" }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "#1A1A1A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{prod.name}</div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#999", marginTop: 2 }}>Đã bán: {prod.sold}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 6 }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, fontWeight: 700, color: "#2ECC71" }}>{(prod.price / 1000000).toFixed(1)}M</span>
                <button onClick={e => { e.stopPropagation(); addToCart({ id: prod.id, name: prod.name, price: prod.price, qty: 1, image: prod.img }); }}
                  style={{ width: 26, height: 26, borderRadius: 8, border: "none", background: "linear-gradient(135deg, #2ECC71, #27AE60)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2.5v8M2.5 6.5h8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}