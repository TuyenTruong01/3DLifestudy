# 3D LIFE – Thiết kế nội thất 3D (Frontend demo)

Giao diện React + Vite mô phỏng cách bố trí phần mềm thiết kế kiểu SketchUp: toolbar trên cùng, canvas thiết kế trung tâm, danh sách đối tượng bên trái, thuộc tính/vật liệu/lớp bên phải.

## Chạy

```bash
npm install
npm run dev
```

## Chức năng demo

- Chọn công cụ (chọn, vẽ, xoay, đo, vật liệu); có thông báo rõ với các thao tác CAD chưa được triển khai.
- Chọn đối tượng từ danh sách, thêm tấm ván minh họa, sửa tên và các giá trị thuộc tính.
- Chọn màu vật liệu trong cấu hình; chưa phản ánh vào ảnh mô phỏng.
- Zoom canvas mô phỏng, bật lưới, bật/tắt danh sách và bảng thuộc tính.
- Undo/redo khi thay đổi dữ liệu, lưu/khôi phục bằng localStorage, xuất JSON demo.

**Giới hạn:** Canvas là ảnh render tĩnh, không phải mô hình có thể thiết kế CAD/3D thật; giá trị kích thước và vật liệu chỉ là dữ liệu demo. Không có xuất file CNC, DXF, GLB, CAD. Đây là frontend prototype độc lập, chưa gắn vào dự án 3D LIFE chính.

Ảnh trong `public/images/wardrobe-workspace.webp` cắt từ ảnh thiết kế mẫu đã được tạo cho cuộc trò chuyện này.
