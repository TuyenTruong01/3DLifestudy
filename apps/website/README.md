# 3D LIFE — Frontend trình diễn

Giao diện React/Vite lấy cảm hứng từ ảnh mẫu xanh lá nhạt của chương trình **Trải Nghiệm & Kỹ Năng**.

## Chạy trên máy

Yêu cầu Node.js 20+.

```bash
npm install
npm run dev
```

Mở địa chỉ hiển thị từ Vite (thường là http://localhost:5173).

## Xây dựng bản production

```bash
npm run build
npm run preview
```

## Những màn hình đã có

- Trang chủ — bố cục theo ảnh mẫu, xanh lá nhạt.
- Chương trình học — lọc Tiểu học/THCS, tìm khóa học.
- Chi tiết khóa học — danh sách các buổi và bản xem nhanh nội dung.
- Thư viện 3D — các nhóm học liệu dùng chung.
- Dành cho giáo viên — mô tả quy trình sử dụng.
- Báo cáo mẫu — “Hôm nay con học được gì?”
- Về chúng tôi.

Có **7 khóa học**: 3 khóa Tiểu học, 3 khóa THCS và một khóa Thiết kế Nội thất 3D chuyên sâu 24–48 buổi. Ảnh minh họa được trích xuất từ bản thiết kế mẫu đã tạo trong cuộc trò chuyện.

**Lưu ý:** Đây là frontend demo, không có đăng nhập thật, dữ liệu học sinh, backend hoặc viewer 3D tương tác. Các ảnh 3D hiện là hình tĩnh minh họa; có thể tích hợp Three.js/React Three Fiber ở giai đoạn tiếp theo. Dữ liệu khóa học mẫu nằm ở `src/data.js`.
