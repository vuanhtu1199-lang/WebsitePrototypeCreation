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

---

## 🏗️ I. SCREEN INVENTORY (DANH SÁCH MÀN HÌNH)

### 1. Auth & Onboarding
- Splash Screen
- Đăng nhập (SĐT, Mã PIN)
- Quên mã PIN (Nhập SĐT hiển thị sẵn -> Gửi SMS OTP -> Thiết lập lại PIN)
- Đăng ký (SĐT -> SMS OTP -> PIN -> Xác nhận PIN -> Mã người giới thiệu bắt buộc: Auto fill tên).
- Trạng thái Duyệt Đăng ký (Chờ duyệt, Thành công, Thất bại kèm nút Sửa & Gửi lại dữ liệu cũ).

### 2. KYC & Xác Thực Danh Tính
- Upload CCCD (Mặt trước & Mặt sau, kèm note hướng dẫn chụp nét).
- Xác nhận thông tin OCR (Read-only, không cho sửa tay. Nhập sai bắt buộc thao tác chụp lại từ đầu).
- Trạng thái chờ duyệt KYC (Gộp Pending/Processing thành 1 màn hình; hiển thị lại toàn bộ form thông tin đã gửi).

### 3. Trang chủ (Home) - Bảng điều khiển
- Ví tiền: Số dư VNĐT, Tổng doanh thu cá nhân (Tiền hàng quy đổi), Tổng hoa hồng đã nhận (Tiền thực nhận), Hạng cá nhân.
- Nút tác vụ Ví: Nạp, Rút, Lịch sử giao dịch.
- Hoạt động gần đây: Hoa hồng tăng giảm, mua hàng, rút tiền (dạng list rút gọn có nút xem tất cả).
- Tổng quan hệ thống: Số lượng F1, Số lượng F2, Tổng doanh thu hệ thống.
- Giới thiệu Batch thưởng: Banner tiền thưởng, câu khuyến khích, Countdown/Thời gian.
- Nút "Khám phá thêm" (Vào màn Chi tiết Batch Thưởng với Bảng leaderboards Top 10 giao dịch).
- Sản phẩm nổi bật (Top sản phẩm được đổi thưởng nhiều nhất).

### 4. Cửa hàng (Shop)
- Danh sách sản phẩm đổi thưởng (VNĐT).
- Chi tiết sản phẩm.
- Giỏ hàng & Thanh toán. (Tích hợp luồng Popup/Thêm địa chỉ giao hàng siêu tốc tại Checkout).
- Ghi chú Checkout: Phí dịch vụ giao hàng thanh toán sau (COD).
- Lịch sử mua hàng (Gồm 3 trạng thái: Chờ giao hàng, Đang giao, Hoàn thành / Huỷ đơn).
- Chi tiết đơn hàng (Dùng để xem phí COD chuẩn xác và cung cấp Nút Huỷ đơn chỉ hiện khi ở trạng thái Chờ).

### 5. Hệ thống (Network)
- Tổng doanh thu hệ thống.
- Thanh tìm kiếm (Tìm SĐT hoặc Tên member).
- Vinh danh (Top Performer): Hiển thị Top 3 nhánh F1 mang lại doanh thu cao nhất.
- Cây thành viên: Sử dụng List view xổ dọc mượt mà (Danh sách thành viên F1 -> Bấm vào F1 mở rộng ra danh sách F2 của nhánh đó).

### 6. Trang cá nhân (Profile)
- Tên, SĐT, Cấp bậc hiện tại.
- Thanh tiến trình (Progress bar) Rank Up (Lưu ý: Chỉ đếm điều kiện thông qua Doanh thu).
- Thông tin Profile KYC (Read-only các thông tin đã đăng lên ứng dụng).
- Quản lý Ngân hàng (Max 3, có cảnh báo đang chờ duyệt NH).
- Quản lý Địa chỉ (Max 3, dùng để phục vụ giao đơn COD).
- Cài đặt (Đổi PIN, Hỗ trợ: Danh sách Ticket & Chức năng Thêm ticket, Chính sách dịch vụ).
- Đăng xuất.

---

## 🔄 II. USER FLOWS (HÀNH TRÌNH NGƯỜI DÙNG)

### 1. Flow Đăng ký & Đăng nhập
**Khởi chạy (Splash & Onboarding):** Splash Screen (Logo) -> Onboarding Steps (Giới thiệu lợi ích siêu phẩm ngân hàng số, kiếm điểm thưởng) -> **Gateway Số Điện Thoại**.

**Gateway Nhập SĐT:** User chỉ điền duy nhất SĐT -> Bấm Tiếp tục.
- *Nếu SĐT chưa tồn tại:* Thông báo "Tài khoản chưa tồn tại" -> User bấm chọn "Đăng ký ngay" -> Chuyển sang màn Đăng ký (SĐT được điền tự động).
- *Nếu SĐT đã tồn tại:* Trực tiếp sang màn Nhập Mã PIN (Ở màn này có lựa chọn Quên mã PIN).

**Đăng ký:** SĐT (Auto-fill) -> Gửi và Xác thực qua OTP (SMS) -> Tạo mã PIN (Giới hạn 6 số) & Xác nhận -> Nhập Mã giới thiệu (Auto-fetch hiển thị Tên) -> Submit thành công -> **Danh sách Chờ Duyệt (Pending)**. Lưu ý: Không cần note chữ "bắt buộc" vì tất cả field ở đây đều là require.
**Trường hợp Thất bại / Bị Admin từ chối duyệt:** Hiển thị màn hình từ chối kèm nút "Chỉnh sửa & Gửi lại" (Hệ thống tự động đổ lại dữ liệu cũ) và Nút "Quay lại trang Đăng nhập".

*(Quên mật khẩu PIN: Ở màn Nhập PIN, bấm Quên mã PIN -> Xác nhận SĐT -> Gửi OTP -> Xác thực -> Đặt PIN thay thế).*

### 2. Flow KYC
Khởi tạo KYC -> Upload Mặt trước CCCD -> Upload Mặt sau CCCD (Có nhắc nhở chú ý chống lóa, rõ nét) -> Hệ thống trích xuất OCR text -> Xác nhận thông tin Read-only (Nếu nhận thấy hệ thống OCR đọc sai, user không sửa được mà bấm nút "Tải/Chụp lại ảnh" để chạy lại) -> Confirm -> **Trạng thái Chờ duyệt**.

### 3. Vòng đời Giao dịch Đơn hàng
Vào Danh sách Cửa hàng -> Chọn và Xem chi tiết SP -> Thêm/giỏ hàng -> Checkout.
- Nếu không có địa chỉ, user được cấp một popup khai báo địa chỉ nhanh không cần thoát ứng dụng.
- Checkout sẽ xác nhận thanh toán tiền hàng bằng VNĐT, tiền ship luôn tính COD.
- Sinh ra đơn hàng tại kho. Vòng đời gồm: **`Chờ giao hàng`** (có thể click vào Chi tiết hóa đơn và chọn [Hủy đơn]) -> duyệt đi qua trạng thái **`Đang giao`** -> End tại **`Hoàn thành`** hoặc **`Huỷ đơn`**.

### 4. Gating Control & Các cơ chế Khóa (Lock/Disable)
- Trạng thái chờ Đăng ký / Chờ duyệt KYC: Tài khoản bị khóa cổng, không được quyền access vào xem Trang chủ hoặc sản phẩm.
- Khi user vừa thiết lập 1 Ngân hàng: Do trạng thái NH đang chờ Admin duyệt, các nút nghiệp vụ **Nạp Tiền** / **Rút Tiền** trên Trang chủ ví bị đóng băng / Disabled để tránh giao dịch lỗi.

---

## 🧭 III. GỢI Ý CẤU TRÚC NAVIGATION (BOTTOM TABS)
Sử dụng **Bottom Tab Navigation** tinh gọn với 4 tính năng:
1. **Trang chủ:** Bảng điều khiển (Ví doanh thu, Cập nhật mới, Top Sản phẩm, Batch thưởng).
2. **Mua hàng:** List sản phẩm, Giỏ hàng, Quản lý Lịch sử đơn hàng.
3. **Hệ thống:** Tổng doanh thu, Search, Vinh danh F1 xuất sắc, Sơ đồ List dạng Accordion F1-F2.
4. **Tài khoản:** Profile, Tiến trình đạt Rank, Menu quản lý phương thức thanh toán, Hỗ trợ Ticket.