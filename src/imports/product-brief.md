# 📱 PROJECT CONTEXT & DESIGN GUIDELINES: AFFILIATE E-COMMERCE APP

## 🎯 0. DESIGN SYSTEM & STYLE GUIDE
Dự án hướng tới sự tin cậy, minh bạch tài chính và tăng trưởng mạng lưới.

### 🎨 Colors (Màu sắc)
- **Primary Color:** `#2ECC71` (Xanh lá cây) - Dùng cho nút bấm chính, icon quan trọng, thể hiện sự tăng trưởng và tài chính.
- **Secondary Color:** `#27AE60` (Xanh lá đậm) - Dùng cho trạng thái Hover/Active.
- **Accent Color:** `#F1C40F` (Vàng) - Dùng cho thẻ Rank, Cấp bậc, Cảnh báo nổi bật.
- **Background:** `#F8F9FA` (Xám nhạt) - Nền ứng dụng giúp làm nổi bật các Card trắng.
- **Semantic Colors:**
  - Success: `#2ECC71` (Approved, Completed)
  - Warning/Pending: `#E67E22` (Pending, Waiting for approval)
  - Error: `#E74C3C` (Rejected, Failed, Cancelled)

### ✍️ Typography (Phông chữ)
- **Font Family:** `Inter` hoặc `Be Vietnam Pro` (Ưu tiên hiển thị tiếng Việt tốt, không chân, hiện đại).
- **Heading:**
  - H1: 24px, Bold (Tiêu đề trang)
  - H2: 20px, Semi-bold (Tiêu đề Section)
  - H3: 16px, Medium (Tiêu đề Card/Group)
- **Body Text:**
  - Body 1: 14px, Regular (Nội dung chính, mô tả)
  - Body 2/Caption: 12px, Regular (Ngày tháng, trạng thái, ghi chú nhỏ)

---

## 🏗️ I. SCREEN INVENTORY (DANH SÁCH MÀN HÌNH)

### 1. Auth & Onboarding
- Splash Screen
- Đăng nhập (Chỉ dùng SĐT -> OTP/Mã PIN)
- Đăng ký (SĐT, Mã PIN, Xác thực PIN, Mã người giới thiệu) *Tự động điền tên người giới thiệu khi nhập mã*
- Màn hình thông báo Đăng ký thành công & Chờ duyệt hệ thống

### 2. KYC & Xét Duyệt (Xác thực danh tính)
- Upload CCCD (chỉ mặt trước)
- Trích xuất tự động (OCR) & Xác nhận thông tin
- Trạng thái Xét duyệt đa màn hình (Chờ xét duyệt, Đang xử lý, Thành công, Thất bại) *Hiển thị lại toàn bộ thông tin đã nhập*

### 3. Trang chủ (Home) - All-in-one Dashboard
- Ví tiền: Số dư VNĐT, Tổng doanh thu cá nhân, Tổng hoa hồng đã nhận, Hạng cá nhân.
- Nút tác vụ Ví: Nạp, Rút, Lịch sử giao dịch.
- Hoạt động gần đây: Hoa hồng tăng giảm, mua hàng, rút tiền (dạng list có nút Xem tất cả).
- Tổng quan hệ thống: Số lượng F1, Số lượng F2, Tổng doanh thu.
- Giới thiệu Batch thưởng: Banner tiền thưởng, câu khuyến khích, Countdown/Thời gian diễn ra, Nút Khám phá thêm.
- Sản phẩm nổi bật: Top sản phẩm được đổi thưởng nhiều nhất.

### 4. Cửa hàng (Shop)
- Danh sách sản phẩm quy đổi bằng VNĐT.
- Icon Giỏ hàng & Lịch sử mua hàng.
- Chi tiết sản phẩm.
- Giỏ hàng & Thanh toán.
- Lịch sử đơn hàng hiện tại (Đã mua, Đang xử lý, Đang giao hàng, Hoàn thành, Huỷ đơn).

### 5. Hệ thống (Network)
- Tổng doanh thu toàn hệ thống.
- Cây thành viên (Tree view/List view).
- Doanh số đội nhóm & Chi tiết nhánh rẽ.
- (Mở rộng) Bảng xếp hạng / Thống kê hoạt động mạng lưới.

### 6. Trang cá nhân (Profile)
- Thông tin Tên, Số điện thoại.
- Cấp bậc hiện tại & Tiến trình (Progress bar) đạt Rank tiếp theo kèm ưu đãi thẻ.
- Thông tin cá nhân & Tình trạng KYC (Read-only các thông tin đã đăng ký).
- Quản lý Ngân hàng (Max 3 tài khoản, có hiển thị trạng thái chờ duyệt).
- Quản lý Địa chỉ (Max 3 địa chỉ).
- Cài đặt: Đổi mã PIN, Hỗ trợ (Danh sách Ticket, Tạo Ticket), Chính sách / Điều khoản sử dụng.
- Đăng xuất.

---

## 🔄 II. USER FLOWS (HÀNH TRÌNH NGƯỜI DÙNG)

### 1. Flow Đăng ký 
Splash Screen → Màn Đăng nhập → Chọn Đăng ký → Nhập SĐT, PIN, Xác nhận PIN, Mã giới thiệu (Hệ thống tự động điền Tên nếu đúng mã, sai báo lỗi) → Submit → **Thông báo Đăng ký Thành công & Chờ hệ thống duyệt**.

### 2. Flow Đăng nhập & KYC
Đăng nhập (Nhập SĐT) → Nhập Mã PIN:
- **TH1 (Đã KYC):** Vào thẳng Trang chủ (Home).
- **TH2 (Chưa KYC):** Vào luồng KYC → Upload ảnh mặt trước CCCD → Hệ thống tự OCR đọc thông tin → User Xác nhận thông tin → Confirm → **Chuyển sang màn Chờ Duyệt**.

*Lưu ý: Mọi màn hình Trạng thái xét duyệt (Đăng ký, KYC, Ngân hàng) đều phải hiển thị lại đầy đủ thông tin user đã điền trước đó cho dù ở trạng thái Pending, Processing, Hay Failed.*

### 3. Flow Mua Hàng
Cửa hàng → Chọn sản phẩm → Xem Chi tiết → Thêm Giỏ hàng / Mua ngay → Giỏ hàng → Thanh toán bằng VNĐT → Thông báo Thành công/Thất bại.
- Sau đó user có thể **Mua tiếp** hoặc check **Tình trạng sản phẩm** (Lịch sử đơn hàng).
- Trạng thái vòng đời đơn: `Đã mua` → `Đang xử lý` (có thể huỷ) → `Đang giao hàng` → `Hoàn thành` (Thành công) hoặc `Huỷ đơn`.

### 4. Flow Xét Duyệt Ngân Hàng
Thêm Ngân hàng (tối đa 3) → Chuyển sang trạng thái "Chờ duyệt" → Có thể xem lại thông tin → Admin duyệt thành công mới xuất hiện vào list ngân hàng có thể Rút tiền.

---

## 🧭 III. GỢI Ý CẤU TRÚC NAVIGATION (BOTTOM TABS)
Sử dụng **Bottom Tab Navigation** với 4 tabs chính:
1. **Trang chủ:** Dashboard tổng hợp (Ví tiền, doanh thu, hoạt động, batch thưởng, top sản phẩm).
2. **Mua hàng:** Danh sách sản phẩm, Giỏ hàng, Lịch sử mua hàng.
3. **Hệ thống:** Doanh thu hệ thống, quản lý F1/F2, cây thành viên mạng lưới.
4. **Tài khoản:** Cấp bậc hiện tại, Profile, Ngân hàng, Địa chỉ, Support, Cài đặt.

---

## ⚠️ IV. NOTE QUAN TRỌNG (CHO DEV & DESIGN)
1. **Xử lý Pending State:** Ứng dụng phụ thuộc vào Admin duyệt (Manual) tại nhiều bước (Đăng ký, KYC, Ngân hàng, Lệnh giao dịch). Cần thiết kế template chuẩn mực cho "Trạng thái chờ duyệt" bao gồm 4 biến thể: Chờ xét duyệt, Đang xử lý, Thành công, Thất bại (luôn show kèm data gốc của Form).
2. **Dữ liệu Read-only:** Các form như KYC sau khi gửi sẽ không xoá trắng mà lưu lại UI để tiện theo dõi.
3. **Cơ chế Khóa (Gating):** Chưa KYC thì chỉ dừng ở trạng thái KYC review, không được cho pass vào Trang chủ.