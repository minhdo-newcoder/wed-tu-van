# DO MT - Website Tư vấn Môi trường

Đây là website chuyên nghiệp cung cấp các dịch vụ tư vấn môi trường kèm theo hệ thống quản lý nội dung (CMS) đơn giản.

## 📁 Cấu trúc Dự án

```
do_mt_website/
├── index.html           # Trang chủ
├── services.html        # Trang dịch vụ
├── about.html           # Trang giới thiệu
├── news.html            # Trang tin tức
├── contact.html         # Trang liên hệ
├── admin.html           # Trang quản lý nội dung (CMS)
├── css/
│   ├── style.css        # CSS cho website chính
│   └── admin.css        # CSS cho CMS
├── js/
│   ├── main.js          # JavaScript cho website
│   └── admin.js         # JavaScript cho CMS
├── data/                # Thư mục dữ liệu
├── assets/
│   └── images/          # Thư mục hình ảnh
└── README.md            # File này
```

## 🚀 Cách Sử dụng

### 1. Mở Website

Mở file `index.html` trong trình duyệt hoặc sử dụng Live Server:

```bash
# Nếu dùng Python 3:
python -m http.server 8000

# Hoặc dùng Node.js http-server:
npx http-server
```

Sau đó truy cập `http://localhost:8000`

### 2. Truy cập Quản lý Nội dung (CMS)

- Mở file `admin.html` hoặc truy cập `http://localhost:8000/admin.html`
- Login không cần mật khẩu (đơn giản cho mục đích demo)

## 📋 Các Tính năng

### Website Chính

- **Trang Chủ (index.html)**
  - Banner quảng cáo
  - Hiển thị 4 dịch vụ nổi bật
  - Những lý do chọn công ty
  - CTA (Call-to-Action) kêu gọi khách hàng

- **Trang Dịch vụ (services.html)**
  - Danh sách đầy đủ các dịch vụ
  - Mô tả chi tiết mỗi dịch vụ
  - Link để liên hệ tư vấn

- **Trang Giới thiệu (about.html)**
  - Thông tin về công ty
  - Sứ mệnh, tầm nhìn, giá trị cốt lõi
  - Giới thiệu đội ngũ chuyên gia
  - Chứng chỉ và đối tác

- **Trang Tin tức (news.html)**
  - Danh sách bài viết về môi trường
  - Cập nhật luật, chính sách
  - Link "Đọc thêm" cho từng bài

- **Trang Liên hệ (contact.html)**
  - Thông tin liên hệ công ty
  - Form liên hệ để khách hàng gửi tin nhắn
  - Thông tin địa chỉ, điện thoại, email

### Hệ thống CMS (admin.html)

#### Dashboard
- Thống kê: số lượng liên hệ, bài viết, dịch vụ

#### Quản lý Dịch vụ
- Thêm dịch vụ mới
- Sửa thông tin dịch vụ
- Xóa dịch vụ

#### Quản lý Tin tức
- Thêm bài viết mới
- Sửa bài viết
- Xóa bài viết

#### Quản lý Liên hệ
- Xem danh sách liên hệ từ khách hàng
- Xóa liên hệ

#### Cài đặt
- Thay đổi tên công ty
- Cập nhật email, điện thoại, địa chỉ
- Chỉnh sửa giới thiệu công ty

## 💾 Lưu trữ Dữ liệu

Tất cả dữ liệu được lưu trong **localStorage** của trình duyệt:

- `domt_content_data` - Chứa dịch vụ và tin tức
- `domt_settings` - Chứa cài đặt công ty
- `contacts` - Chứa danh sách liên hệ từ khách hàng

**Lưu ý:** Dữ liệu sẽ bị xóa nếu bạn xóa cache/cookies của trình duyệt.

## 🎨 Thiết kế

### Màu sắc
- **Màu chính:** #1abc9c (Xanh lá)
- **Màu phụ:** #2980b9 (Xanh dương)
- **Màu nhấn:** #27ae60 (Xanh đậm)
- **Màu tối:** #2c3e50 (Xám đen)

### Font
- Sử dụng font mặc định hệ thống: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

### Responsive
- Website tự động điều chỉnh cho các thiết bị khác nhau
- Hỗ trợ desktop, tablet, mobile

## 📝 Nội dung Mặc định

### Dịch vụ
1. Đánh giá Tác động Môi trường (ĐTM)
2. Giám sát Quan trắc Môi trường
3. Xin Giấy phép Môi trường
4. Quản lý Chất thải & Xử lý Nước thải
5. Huấn luyện & Đào tạo Nhân sự
6. Tư vấn Kỹ thuật

### Tin tức Mặc định
- Luật Bảo vệ Môi trường 2024 - Những thay đổi quan trọng
- Hướng dẫn chuẩn bị hồ sơ xin giấy phép môi trường
- Tiêu chuẩn chất lượng nước thải xả ra môi trường

## 🔧 Cách Chỉnh sửa Nội dung

### Sử dụng CMS (Admin)
1. Mở `admin.html`
2. Chọn mục "Quản lý Dịch vụ" hoặc "Quản lý Tin tức"
3. Nhấn "+ Thêm" hoặc "Sửa" để chỉnh sửa
4. Nhấn "Lưu" để lưu thay đổi

### Sửa trực tiếp HTML (nâng cao)
1. Mở file HTML trong trình soạn thảo
2. Tìm dòng cần chỉnh sửa
3. Lưu file

## 📱 Chức năng form Liên hệ

Khi khách hàng gửi form liên hệ trên trang `contact.html`:
1. Dữ liệu được lưu vào localStorage
2. Khách hàng nhận thông báo "Cảm ơn! Chúng tôi sẽ liên hệ lại trong 24 giờ"
3. Admin có thể xem liên hệ trong trang `admin.html` > "Liên hệ từ Khách hàng"

## 🚀 Triển khai (Deploy)

### Cách 1: Github Pages
1. Upload toàn bộ folder lên Github
2. Bật Github Pages trong Settings
3. Website sẽ có sẵn tại `https://username.github.io/do_mt_website`

### Cách 2: Hosting bình thường
1. Upload toàn bộ file lên hosting
2. Truy cập domain của bạn

### Cách 3: Local
1. Giữ folder như hiện tại
2. Dùng Live Server hoặc http-server để chạy

## ⚠️ Ghi chú Quan trọng

1. **CMS này chỉ là bản demo** - dữ liệu được lưu trong localStorage và sẽ mất nếu xóa cache
2. Để sử dụng cho production, cần kết nối với database thật (PHP, Node.js, etc.)
3. Form liên hệ hiện tại chỉ lưu dữ liệu, không gửi email tự động
4. Để gửi email tự động, cần integrate với mail service (Gmail API, SendGrid, etc.)

## 📧 Liên hệ & Hỗ trợ

- Email: info@domt.vn
- Phone: 0123-456-789
- Address: 123 Đường ABC, Quận ABC, Hà Nội, Việt Nam

---

**Version:** 1.0  
**Last Updated:** 09/05/2026  
**Language:** Vietnamese

