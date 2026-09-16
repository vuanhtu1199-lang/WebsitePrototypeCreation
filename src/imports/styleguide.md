# 🎨 Design System & Styleguide

Dựa trên **Product Brief** cho ứng dụng Affiliate E-Commerce, dưới đây là Styleguide chi tiết sử dụng Design System Token và CSS Variable cho phần Color và Typography, để đảm bảo tính nhất quán trên toàn bộ dự án.

## 1. Design Tokens (CSS Variables)

Bạn có thể đưa định nghĩa gốc này vào file `index.css` (hoặc cấu hình setup global theme) của dự án để tái sử dụng.

```css
:root {
  /* =========================================
     🎨 1. COLOR TOKENS
     ========================================= */
  
  /* Brand Colors */
  --color-primary: #2ECC71;     /* Tăng trưởng, tài chính, nút chính */
  --color-secondary: #27AE60;   /* Trạng thái Hover/Active của primary */
  --color-accent: #F1C40F;      /* Thẻ Rank, Cấp bậc, Cảnh báo nổi bật */
  
  /* Background & Surface */
  --color-background: #F8F9FA;  /* Nền ứng dụng chính */
  --color-surface: #FFFFFF;     /* Màu nền cho các Card/Box nổi lên trên nền */
  
  /* Semantic Colors (Trạng thái) */
  --color-success: #2ECC71;     /* Approved, Completed, Success */
  --color-warning: #E67E22;     /* Pending, Waiting for approval */
  --color-error: #E74C3C;       /* Rejected, Failed, Cancelled */
  
  /* Text Colors (Đề xuất thêm để đảm bảo độ tương phản) */
  --color-text-primary: #1A1A1A;   /* Màu chữ chính cho Heading & Body 1 */
  --color-text-secondary: #666666; /* Màu chữ phụ cho Body 2, Caption */
  --color-text-inverse: #FFFFFF;   /* Chữ trắng nằm trên nút màu đậm */

  /* =========================================
     ✍️ 2. TYPOGRAPHY TOKENS
     ========================================= */
     
  /* Font Family */
  --font-family-primary: 'Inter', 'Be Vietnam Pro', sans-serif;
  
  /* Font Sizes */
  --text-h1: 24px;
  --text-h2: 20px;
  --text-h3: 16px;
  --text-body-1: 14px;
  --text-body-2: 12px;
  
  /* Font Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  
  /* Line Heights (Đề xuất cho UI App) */
  --line-height-heading: 1.3;
  --line-height-body: 1.5;
}
```

---

## 2. Hướng dẫn sử dụng chi tiết (Usage Guidelines)

### 2.1 🎨 Colors (Màu sắc)

Thiết kế luôn ưu tiên tạo sự rõ ràng với các trạng thái "Chờ duyệt" hay "Thất bại".

| Loại Màu | Variable / Token | Mã Hex | Ý nghĩa & Cách sử dụng |
| :--- | :--- | :--- | :--- |
| **Primary** | `var(--color-primary)` | <span style="color:#2ECC71; font-weight:bold">#2ECC71</span> | Đóng vai trò màu cốt lõi. Áp dụng: Call-to-action chính, icon mang tính tích cực. Thể hiện sự tăng trưởng & dòng tiền. |
| **Secondary** | `var(--color-secondary)` | <span style="color:#27AE60; font-weight:bold">#27AE60</span> | Áp dụng khi người dùng tương tác (Hover, Pressed) với các thành phần Primary. |
| **Accent** | `var(--color-accent)` | <span style="color:#F1C40F; text-shadow:0 0 1px #000; font-weight:bold">#F1C40F</span> | Điểm nhấn chú ý. Áp dụng: Badge Rank đại lý, Mốc cấp bậc, nhãn mác nổi bật. |
| **Background** | `var(--color-background)` | <span style="color:#F8F9FA; border:1px solid #ddd; padding:2px; font-weight:bold">#F8F9FA</span> | Dùng làm nền tổng thể bao quanh các danh sách dữ liệu, nổi bật lên nội dung (`#FFF`). |
| **Success** | `var(--color-success)` | <span style="color:#2ECC71; font-weight:bold">#2ECC71</span> | Trạng thái hiển thị (dùng cho Text/Badge): Approved, Completed, KYC Success. |
| **Warning/Pending** | `var(--color-warning)` | <span style="color:#E67E22; font-weight:bold">#E67E22</span> | Rất quan trọng trong dự án này! Áp dụng trạng thái: Chờ duyệt, Pending, Đang xác minh. |
| **Error** | `var(--color-error)` | <span style="color:#E74C3C; font-weight:bold">#E74C3C</span> | Trạng thái: Rejected, Failed, Cancelled, lỗi báo đỏ hoặc cần tạo lại (như làm lại KYC). |

### 2.2 ✍️ Typography (Hệ thống Text)

*Ghi chú: Luôn đảm bảo sử dụng bộ Font chữ hiển thị Tiếng Việt chuẩn xác chuyên nghiệp (`Inter` hoặc `Be Vietnam Pro`).*

| Cấp độ Text | Kích thước | Độ đậm (Weight) | Kết hợp Variable | Vị trí áp dụng |
| :--- | :--- | :--- | :--- | :--- |
| **Heading H1** | `24px` | Bold | `font-size: var(--text-h1); font-weight: var(--weight-bold);` | Tiêu đề chính của một màn hình (Title Top Bar). |
| **Heading H2** | `20px` | Semi-bold | `font-size: var(--text-h2); font-weight: var(--weight-semibold);` | Tiêu đề của các Section, khối Block tổng quan trên Dashboard. |
| **Heading H3** | `16px` | Medium | `font-size: var(--text-h3); font-weight: var(--weight-medium);` | Tiêu đề Header trong từng Card dữ liệu nhỏ (Ví dụ: "Số dư VNDT"). |
| **Body 1** | `14px` | Regular | `font-size: var(--text-body-1); font-weight: var(--weight-regular);` | Chữ hiển thị thông thường, văn bản mô tả, tên sản phẩm. |
| **Body 2 / Caption** | `12px` | Regular | `font-size: var(--text-body-2); font-weight: var(--weight-regular);` | Chữ nhỏ chú thích: Thời gian đặt/rút tiền, nhãn trạng thái (Badge). |

---

## 3. Ví dụ Áp dụng (Code Snippet UI Components)

Dưới đây là một số ví dụ khi áp dụng trực tiếp các Token variable vào tạo component UI.

**Nút bấm Primary:**
```css
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  font-family: var(--font-family-primary);
  font-size: var(--text-body-1);
  font-weight: var(--weight-semibold);
  border: none;
  border-radius: 8px; /* Đề xuất tạo góc bo nhẹ tinh tế */
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--color-secondary);
}
```

**Thẻ trạng thái (Badge) - Rất quan trọng ở trạng thái Pending:**
```css
/* Badge Pending / Chờ duyệt */
.badge-warning {
  background-color: rgba(230, 126, 34, 0.1); /* Background nhạt 10% */
  color: var(--color-warning);
  font-family: var(--font-family-primary);
  font-size: var(--text-body-2); /* Chữ nhỏ */
  font-weight: var(--weight-medium);
  padding: 4px 8px;
  border-radius: 4px;
}

/* Badge Approved / Hoàn thành */
.badge-success {
  background-color: rgba(46, 204, 113, 0.1);
  color: var(--color-success);
  font-family: var(--font-family-primary);
  font-size: var(--text-body-2);
  font-weight: var(--weight-medium);
  padding: 4px 8px;
  border-radius: 4px;
}
```
