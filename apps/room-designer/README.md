# 3D LIFE — Bố trí Nội thất 3D (Frontend Demo)

Frontend React + Vite dựa trên giao diện tham chiếu của người dùng.

## Chạy

```bash
npm install
npm run dev
```

Mở URL Vite thông báo (mặc định `http://localhost:5173`).

## Tính năng demo
- Chọn phòng, mẫu thiết kế, đổi kiểu phòng
- Thư viện nội thất: chọn hoặc kéo/thả ảnh đại diện vào khu vực thiết kế
- Di chuyển đối tượng demo trên mặt phẳng 2D, xoay 45°, xóa
- Thay vật liệu hiển thị, kích thước phòng, zoom ảnh
- Lưu/khôi phục dự án bằng localStorage

**Lưu ý:** vùng phòng trung tâm hiện sử dụng ảnh minh họa trích từ ảnh tham khảo, các đối tượng kéo thả đang ở lớp 2D. Chưa phải engine thiết kế 3D thật; chức năng thay đổi vật liệu, phối cảnh và đo kích thước của mô hình 3D sẽ yêu cầu tích hợp Three.js/React Three Fiber cùng dữ liệu GLB trong giai đoạn tiếp theo. Những thumbnail cũng được tạm trích từ ảnh người dùng cung cấp để thể hiện giao diện demo.

## Tích hợp với 3D LIFE hiện tại
Đây là dự án demo độc lập để tránh thay đổi website hiện tại. Có thể chuyển component và stylesheet vào route `/studio/room` sau khi kiểm tra.
