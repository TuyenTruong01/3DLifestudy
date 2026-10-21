export const tools3d = [
  {
    id: 'interior-layout',
    title: 'Bố trí Nội thất 3D',
    description: 'Tạo phòng, kéo thả đồ nội thất và hoàn thiện không gian bằng màu sắc, vật liệu.',
    preview: 1,
    icon: 'box',
    status: 'Bản demo độc lập',
    url: import.meta.env.DEV ? 'http://localhost:5174/studio/room/' : '/studio/room/',
  },
  {
    id: 'furniture-design',
    title: 'Thiết kế Nội thất 3D',
    description: 'Thiết kế bàn, tủ, kệ dạng tấm; nhập kích thước, cấu tạo, phụ kiện và mô phỏng CNC.',
    preview: 4,
    icon: 'pen-tool',
    status: 'Bản demo độc lập',
    url: import.meta.env.DEV ? 'http://localhost:5175/studio/furniture/' : '/studio/furniture/',
  },
  {
    id: 'device-explorer',
    title: 'Khám phá Thiết bị 3D',
    description: 'Khám phá thiết bị gia đình, công nghiệp và quy trình sản xuất trực quan.',
    preview: 6,
    icon: 'settings',
    status: 'Bản demo độc lập',
    url: import.meta.env.DEV ? 'http://localhost:5176/lab/equipment/' : '/lab/equipment/',
  },
];
