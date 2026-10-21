# 3D LIFE – Khám phá Thiết bị 3D (UI demo)

## Chạy thử
```bash
npm install
npm run dev
```
Mở URL Vite hiển thị trong terminal. Build: `npm run build`.

## Phạm vi demo
- Bố cục ba vùng: danh mục thiết bị, xem mô hình, thông tin bộ phận.
- Bộ lọc, tìm kiếm, chọn thiết bị, chọn điểm chú thích và các chế độ xem.
- Phóng to/thu nhỏ, đặt lại và xoay **ảnh minh họa 2D**; không phải phép xoay mô hình 3D.
- Nút lưu bài học là trạng thái frontend demo, không ghi dữ liệu lên server.
- Ảnh minh họa được cắt từ **ảnh mẫu do người dùng cung cấp**, không phải các file GLB hay hình ảnh riêng của từng thiết bị.
- Chưa có engine Three.js, thao tác tháo bộ phận thật, mô phỏng vật lý hoặc dữ liệu backend.

## Tích hợp vào 3D LIFE
Tách `src/main.jsx` thành module page/feature theo hệ thống router hiện tại, gắn `/lab/equipment`, dùng lại CSS tokens chung. Thay ảnh dưới `public/images` bằng URL asset/model GLB thực tế và dùng Three.js hoặc React Three Fiber khi có dữ liệu.
