import React, { createContext, useContext, useState } from "react";

export type KYCStatus = "none" | "pending" | "processing" | "approved" | "failed";
export type OrderStatus = "purchased" | "processing" | "shipping" | "completed" | "cancelled";
export type BankStatus = "pending" | "approved";

export interface UserProfile {
  name: string;
  phone: string;
  rank: "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond";
  rankProgress: number; // 0-100
  balance: number;
  revenue: number;
  commission: number;
  f1Count: number;
  f2Count: number;
  totalSystemRevenue: number;
  referralCode: string;
  avatar: string;
}

export interface KYCData {
  idNumber: string;
  fullName: string;
  dob: string;
  hometown: string;
  address: string;
  issueDate: string;
  issuePlace: string;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  image: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: string;
  address: string;
}

export interface BankAccount {
  id: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  status: BankStatus;
}

export interface NetworkMember {
  id: string;
  name: string;
  phone: string;
  rank: string;
  revenue: number;
  joinDate: string;
  level: "F1" | "F2";
  f2Count?: number;
  isExpanded?: boolean;
}

export interface SupportTicket {
  id: string;
  title: string;
  status: "open" | "processing" | "closed";
  date: string;
  lastMessage: string;
}

interface AppState {
  isLoggedIn: boolean;
  kycStatus: KYCStatus;
  user: UserProfile;
  kycData: KYCData | null;
  cart: CartItem[];
  orders: Order[];
  banks: BankAccount[];
  networkMembers: NetworkMember[];
  tickets: SupportTicket[];
  registrationPhone: string;
}

interface AppContextType extends AppState {
  login: (phone: string) => void;
  logout: () => void;
  submitKYC: (data: KYCData) => void;
  setKYCStatus: (status: KYCStatus) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateCartQty: (id: string, qty: number) => void;
  clearCart: () => void;
  placeOrder: (address: string) => Order;
  setRegistrationPhone: (phone: string) => void;
  addBankAccount: (bank: Omit<BankAccount, "id" | "status">) => void;
  setKYCData: (data: KYCData) => void;
}

const mockNetworkMembers: NetworkMember[] = [
  { id: "f1-1", name: "Trần Thị Bích", phone: "0901234567", rank: "Gold", revenue: 15200000, joinDate: "2024-01-15", level: "F1", f2Count: 8 },
  { id: "f1-2", name: "Lê Văn Cường", phone: "0912345678", rank: "Silver", revenue: 8750000, joinDate: "2024-02-20", level: "F1", f2Count: 5 },
  { id: "f1-3", name: "Phạm Thị Dung", phone: "0923456789", rank: "Platinum", revenue: 24300000, joinDate: "2023-12-10", level: "F1", f2Count: 12 },
  { id: "f1-4", name: "Nguyễn Quốc Huy", phone: "0934567890", rank: "Gold", revenue: 18500000, joinDate: "2024-03-05", level: "F1", f2Count: 7 },
  { id: "f1-5", name: "Võ Thị Lan", phone: "0945678901", rank: "Silver", revenue: 6200000, joinDate: "2024-04-18", level: "F1", f2Count: 3 },
  { id: "f2-1", name: "Đặng Văn Minh", phone: "0956789012", rank: "Bronze", revenue: 2100000, joinDate: "2024-03-20", level: "F2" },
  { id: "f2-2", name: "Hoàng Thị Nga", phone: "0967890123", rank: "Silver", revenue: 5400000, joinDate: "2024-02-28", level: "F2" },
  { id: "f2-3", name: "Bùi Văn Phong", phone: "0978901234", rank: "Bronze", revenue: 1850000, joinDate: "2024-04-05", level: "F2" },
  { id: "f2-4", name: "Dương Thị Quỳnh", phone: "0989012345", rank: "Gold", revenue: 9200000, joinDate: "2024-01-30", level: "F2" },
  { id: "f2-5", name: "Tô Văn Sơn", phone: "0990123456", rank: "Bronze", revenue: 1200000, joinDate: "2024-05-01", level: "F2" },
];

const mockTickets: SupportTicket[] = [
  { id: "TK001", title: "Không rút được tiền về ngân hàng", status: "processing", date: "2024-04-10", lastMessage: "Chúng tôi đang xem xét vấn đề của bạn..." },
  { id: "TK002", title: "Hoa hồng chưa được cập nhật", status: "closed", date: "2024-03-28", lastMessage: "Vấn đề đã được giải quyết thành công." },
  { id: "TK003", title: "Lỗi đăng ký mã giới thiệu", status: "open", date: "2024-04-14", lastMessage: "Xin chào! Bạn hãy mô tả vấn đề cụ thể hơn." },
];

const defaultUser: UserProfile = {
  name: "Nguyễn Văn An",
  phone: "0912345678",
  rank: "Diamond",
  rankProgress: 72,
  balance: 25750000,
  revenue: 48320000,
  commission: 12480000,
  f1Count: 12,
  f2Count: 45,
  totalSystemRevenue: 285000000,
  referralCode: "NVA2024",
  avatar: "https://images.unsplash.com/photo-1633058851349-55a9a188e338?w=200&q=80",
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>({
    isLoggedIn: false,
    kycStatus: "none",
    user: defaultUser,
    kycData: null,
    cart: [],
    orders: [
      {
        id: "ORD001",
        items: [{ id: "1", name: "iPhone 15 Pro Max", price: 32500000, qty: 1, image: "https://images.unsplash.com/photo-1759588071781-d69892bd7ca1?w=200&q=80" }],
        total: 32500000,
        status: "shipping",
        date: "2024-04-12",
        address: "123 Nguyễn Huệ, Q.1, TP.HCM",
      },
      {
        id: "ORD002",
        items: [{ id: "2", name: "Sony WH-1000XM5", price: 8500000, qty: 1, image: "https://images.unsplash.com/photo-1656457468703-2aaebb8477b6?w=200&q=80" }],
        total: 8500000,
        status: "completed",
        date: "2024-03-28",
        address: "456 Lê Lợi, Q.3, TP.HCM",
      },
    ],
    banks: [
      { id: "bank-1", bankName: "Vietcombank", accountNumber: "1234567890", accountName: "NGUYEN VAN AN", status: "approved" },
      { id: "bank-2", bankName: "Techcombank", accountNumber: "9876543210", accountName: "NGUYEN VAN AN", status: "pending" },
    ],
    networkMembers: mockNetworkMembers,
    tickets: mockTickets,
    registrationPhone: "",
  });

  const login = (phone: string) => setState(s => ({ ...s, isLoggedIn: true, kycStatus: "approved", user: { ...s.user, phone } }));
  const logout = () => setState(s => ({ ...s, isLoggedIn: false, kycStatus: "none" }));
  const submitKYC = (data: KYCData) => setState(s => ({ ...s, kycData: data, kycStatus: "pending" }));
  const setKYCStatus = (status: KYCStatus) => setState(s => ({ ...s, kycStatus: status }));
  const setKYCData = (data: KYCData) => setState(s => ({ ...s, kycData: data }));
  const setRegistrationPhone = (phone: string) => setState(s => ({ ...s, registrationPhone: phone }));

  const addToCart = (item: CartItem) =>
    setState(s => {
      const existing = s.cart.find(c => c.id === item.id);
      if (existing) return { ...s, cart: s.cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c) };
      return { ...s, cart: [...s.cart, item] };
    });

  const removeFromCart = (id: string) => setState(s => ({ ...s, cart: s.cart.filter(c => c.id !== id) }));
  const updateCartQty = (id: string, qty: number) =>
    setState(s => ({ ...s, cart: qty <= 0 ? s.cart.filter(c => c.id !== id) : s.cart.map(c => c.id === id ? { ...c, qty } : c) }));
  const clearCart = () => setState(s => ({ ...s, cart: [] }));

  const placeOrder = (address: string): Order => {
    const order: Order = {
      id: `ORD${Date.now().toString().slice(-4)}`,
      items: state.cart,
      total: state.cart.reduce((sum, i) => sum + i.price * i.qty, 0),
      status: "purchased",
      date: new Date().toISOString().split("T")[0],
      address,
    };
    setState(s => ({
      ...s,
      orders: [order, ...s.orders],
      cart: [],
      user: { ...s.user, balance: s.user.balance - order.total },
    }));
    return order;
  };

  const addBankAccount = (bank: Omit<BankAccount, "id" | "status">) =>
    setState(s => ({ ...s, banks: [...s.banks, { ...bank, id: `bank-${Date.now()}`, status: "pending" }] }));

  return (
    <AppContext.Provider value={{ ...state, login, logout, submitKYC, setKYCStatus, addToCart, removeFromCart, updateCartQty, clearCart, placeOrder, setRegistrationPhone, addBankAccount, setKYCData }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
