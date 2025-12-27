# What is React and Next.js? / React và Next.js là gì?

---

**📅 Created / Ngày tạo:** 2025-12-27  
**📅 Last Updated / Ngày cập nhật:** 2025-12-27

**⬅️ Previous / Bài trước:** None / Không có  
**➡️ Next / Bài sau:** [Rendering User Interfaces (UI)](./react_rendering_ui.md)

---

## Description / Mô tả

This lesson introduces the fundamental concepts of React and Next.js, helping you clearly understand the difference between a "library" and a "framework". You will grasp how React helps build interactive user interfaces and how Next.js provides the necessary tools to develop complete and efficient web applications.

Bài học này giới thiệu về các khái niệm cơ bản của React và Next.js, giúp bạn hiểu rõ sự khác biệt giữa "thư viện" và "framework". Bạn sẽ nắm được cách React giúp xây dựng giao diện người dùng tương tác và cách Next.js cung cấp các công cụ cần thiết để phát triển ứng dụng web hoàn chỉnh và hiệu quả.

---

## Main Concepts / Khái niệm chính

### Web Application Building Blocks / Các khối xây dựng ứng dụng Web

When building modern applications, you need to consider many factors such as User Interface (UI), Routing, Data Fetching, Rendering, and Performance. You can build solutions for each part yourself or use existing tools like libraries and frameworks.

Khi xây dựng ứng dụng hiện đại, bạn cần xem xét nhiều yếu tố như Giao diện người dùng (UI), Định tuyến (Routing), Lấy dữ liệu (Data Fetching), Rendering, và Hiệu suất (Performance). Bạn có thể tự xây dựng các giải pháp cho từng phần hoặc sử dụng các công cụ có sẵn như thư viện và framework.

### React (Library) / React (Thư viện)

React is a JavaScript library for building interactive user interfaces (UI). As a "library", React provides helpful functions (APIs) to create UI but does not enforce opinions on routing or data fetching, offering great flexibility to developers.

React là một thư viện JavaScript dùng để xây dựng giao diện người dùng (UI) tương tác. Là một "thư viện", React cung cấp các hàm (APIs) hữu ích để tạo UI nhưng không áp đặt về cách tổ chức routing hay lấy dữ liệu, mang lại sự linh hoạt lớn cho lập trình viên.

```jsx
// Example of a Component in React / Ví dụ về Component trong React
function Header({ title }) {
  // Return h1 tag with title content / Trả về thẻ h1 với nội dung title
  return <h1>{title}</h1>;
}
```

### Next.js (Framework) / Next.js (Framework)

Next.js is a React framework that gives you building blocks to create web applications. As a "framework", Next.js handles the tooling and configuration needed for React, while adding features like routing, optimizations, and data fetching to improve the experience for both developers and end-users.

Next.js là một React framework cung cấp các khối xây dựng để tạo ứng dụng web. Là một "framework", Next.js xử lý các công cụ và cấu hình cần thiết cho React, đồng thời bổ sung các tính năng như định tuyến (routing), tối ưu hóa (optimizations) và lấy dữ liệu (data fetching) giúp cải thiện trải nghiệm của cả lập trình viên và người dùng cuối.

```jsx
// Example of a page in Next.js / Ví dụ về trang trong Next.js
// Next.js uses file system for routing / Next.js sử dụng hệ thống file để định tuyến
export default function HomePage() {
  return (
    <div>
      {/* Using React component / Sử dụng component React */}
      <h1>Welcome to Next.js!</h1>
    </div>
  );
}
```

---

## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích
- **Rich Ecosystem / Hệ sinh thái phong phú**: React has a large community and many supporting libraries. / React có một cộng đồng lớn và nhiều thư viện hỗ trợ.
- **Automatic Configuration / Cấu hình tự động**: Next.js handles complex tooling, letting you focus on code. / Next.js xử lý các công cụ phức tạp, giúp bạn tập trung vào code.
- **Performance Optimization / Tối ưu hóa hiệu suất**: Next.js provides features like code splitting and pre-rendering. / Next.js cung cấp các tính năng như code splitting và pre-rendering.

### Real-world Applications / Ứng dụng thực tế
- **Single Page Applications (SPA)**: Building smooth applications like mobile apps. / Xây dựng các ứng dụng mượt mà như app mobile.
- **E-commerce Sites / Trang thương mại điện tử**: Leveraging Next.js's SEO capabilities and page load speed. / Tận dụng khả năng SEO và tốc độ tải trang của Next.js.
- **Dashboard / Bảng điều khiển**: Creating complex and highly interactive admin interfaces. / Tạo các giao diện quản trị phức tạp và tương tác cao.

---

## References / Tài liệu tham khảo

- [React Foundations: What is React and Next.js?](https://nextjs.org/learn/react-foundations/what-is-react-and-nextjs)
- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
