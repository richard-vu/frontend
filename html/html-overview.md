# Overview of HTML / Tổng quan về HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** Không có / None  
**➡️ Bài sau / Next:** [Document Structure](./html-document-structure.md)

---

## Mô tả / Description

Bài học này giới thiệu ngắn gọn về các khái niệm chính trong HTML (HyperText Markup Language). Bạn sẽ hiểu được HTML là gì, tại sao nó quan trọng trong phát triển web, và các nguyên tắc cơ bản để xây dựng trang web. Đây là nền tảng và hiểu biết tổng quan trước khi đi sâu vào kỹ thuật.

This lesson provides a brief introduction to the main concepts in HTML (HyperText Markup Language). You will understand what HTML is, why it's important in web development, and the basic principles for building web pages. This provides a foundation and overall understanding before diving into technical details.

## Khái niệm chính / Main Concepts

### What is HTML? / HTML là gì?

HTML (HyperText Markup Language) là ngôn ngữ đánh dấu chuẩn dùng để tạo và cấu trúc nội dung trên web. HTML không phải là ngôn ngữ lập trình, mà là ngôn ngữ đánh dấu sử dụng các thẻ (tags) để mô tả cấu trúc và ý nghĩa của nội dung.

HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. HTML is not a programming language, but a markup language that uses tags to describe the structure and meaning of content.

```html
<!-- Ví dụ cơ bản / Basic example -->
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang web đầu tiên / My First Web Page</title>
</head>
<body>
    <h1>Xin chào thế giới! / Hello World!</h1>
    <p>Đây là đoạn văn bản đầu tiên. / This is my first paragraph.</p>
</body>
</html>
```

### HTML Elements and Tags / Phần tử và Thẻ HTML

Phần tử HTML (element) bao gồm thẻ mở, nội dung, và thẻ đóng. Thẻ (tag) được đặt trong dấu ngoặc nhọn `< >`.

An HTML element consists of an opening tag, content, and a closing tag. Tags are enclosed in angle brackets `< >`.

```html
<!-- Cấu trúc phần tử / Element structure -->
<p>Đây là nội dung / This is content</p>
<!--
  <p>      - Thẻ mở / Opening tag
  Nội dung - Nội dung / Content
  </p>     - Thẻ đóng / Closing tag
-->

<!-- Thẻ tự đóng / Self-closing tags -->
<img src="image.jpg" alt="Mô tả / Description">
<br>
<hr>
```

### HTML Attributes / Thuộc tính HTML

Thuộc tính cung cấp thông tin bổ sung về phần tử HTML. Chúng luôn được khai báo trong thẻ mở và thường có cặp tên-giá trị.

Attributes provide additional information about HTML elements. They are always specified in the opening tag and usually come in name-value pairs.

```html
<!-- Các thuộc tính phổ biến / Common attributes -->
<a href="https://example.com" target="_blank" title="Liên kết mẫu / Example link">
    Nhấp vào đây / Click here
</a>

<img src="photo.jpg" alt="Mô tả ảnh / Photo description" width="300" height="200">

<div class="container" id="main-content">
    <!-- Nội dung / Content -->
</div>
```

### HTML Document Structure / Cấu trúc tài liệu HTML

Mọi tài liệu HTML đều có cấu trúc cơ bản bao gồm DOCTYPE, html, head và body.

Every HTML document has a basic structure including DOCTYPE, html, head, and body.

```html
<!DOCTYPE html> <!-- Khai báo loại tài liệu / Document type declaration -->
<html lang="vi"> <!-- Phần tử gốc / Root element -->
<head>
    <!-- Metadata và thông tin về trang / Metadata and page information -->
    <meta charset="UTF-8">
    <title>Tiêu đề trang / Page Title</title>
</head>
<body>
    <!-- Nội dung hiển thị / Visible content -->
    <h1>Tiêu đề chính / Main Heading</h1>
    <p>Nội dung trang / Page content</p>
</body>
</html>
```

### Semantic vs Non-Semantic HTML / HTML Ngữ nghĩa và Không ngữ nghĩa

HTML ngữ nghĩa sử dụng các thẻ mô tả rõ ràng ý nghĩa của nội dung, trong khi HTML không ngữ nghĩa chỉ định dạng giao diện.

Semantic HTML uses tags that clearly describe the meaning of content, while non-semantic HTML only defines presentation.

```html
<!-- HTML ngữ nghĩa / Semantic HTML -->
<article>
    <header>
        <h1>Tiêu đề bài viết / Article Title</h1>
    </header>
    <section>
        <p>Nội dung chính / Main content</p>
    </section>
    <footer>
        <p>Tác giả: Nguyễn Văn A / Author: John Doe</p>
    </footer>
</article>

<!-- HTML không ngữ nghĩa / Non-semantic HTML -->
<div>
    <div>
        <span>Tiêu đề / Title</span>
    </div>
    <div>
        <span>Nội dung / Content</span>
    </div>
</div>
```

### HTML Versions / Các phiên bản HTML

HTML đã phát triển qua nhiều phiên bản, với HTML5 là phiên bản hiện đại nhất hiện nay.

HTML has evolved through many versions, with HTML5 being the most modern version today.

```html
<!-- HTML5 (hiện tại / current) -->
<!DOCTYPE html>

<!-- HTML 4.01 (cũ / older) -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML 1.0 (cũ / older) -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Nền tảng web**: HTML là nền tảng cơ bản của mọi trang web, không thể thiếu trong phát triển web / HTML is the fundamental foundation of all web pages, essential in web development
- **Dễ học**: Cú pháp đơn giản, dễ hiểu, phù hợp cho người mới bắt đầu / Simple syntax, easy to understand, suitable for beginners
- **Tương thích đa nền tảng**: Hoạt động trên mọi trình duyệt và thiết bị / Works across all browsers and devices
- **SEO-friendly**: Cấu trúc HTML tốt giúp tối ưu hóa công cụ tìm kiếm / Good HTML structure helps with search engine optimization
- **Accessibility**: Hỗ trợ công nghệ hỗ trợ như screen readers cho người khuyết tật / Supports assistive technologies like screen readers for people with disabilities
- **Miễn phí và mã nguồn mở**: Không cần license, cộng đồng hỗ trợ lớn / No license required, large community support

### Ứng dụng thực tế / Real-world Applications

- **Website cá nhân và blog**: Tạo portfolio, blog cá nhân, CV online / Create portfolios, personal blogs, online CVs
- **Trang web doanh nghiệp**: Xây dựng website công ty, landing page sản phẩm / Build company websites, product landing pages
- **Ứng dụng web**: Nền tảng cho web applications với JavaScript và CSS / Foundation for web applications with JavaScript and CSS
- **Email templates**: Thiết kế email marketing và newsletters / Design marketing emails and newsletters
- **Tài liệu điện tử**: Tạo ebooks, tài liệu hướng dẫn trực tuyến / Create ebooks, online documentation
- **Form và khảo sát**: Thu thập thông tin từ người dùng / Collect information from users

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn sử dụng `<!DOCTYPE html>` ở đầu tài liệu / Always use `<!DOCTYPE html>` at the start of the document
- ✅ **DO**: Sử dụng thẻ ngữ nghĩa thay vì `<div>` và `<span>` khi có thể / Use semantic tags instead of `<div>` and `<span>` when possible
- ✅ **DO**: Thêm thuộc tính `alt` cho tất cả hình ảnh / Add `alt` attribute to all images
- ✅ **DO**: Viết code HTML có cấu trúc và indent rõ ràng / Write well-structured and clearly indented HTML code
- ✅ **DO**: Validate HTML code bằng W3C Validator / Validate HTML code using W3C Validator
- ❌ **DON'T**: Không sử dụng thẻ lỗi thời như `<font>`, `<center>` / Don't use deprecated tags like `<font>`, `<center>`
- ❌ **DON'T**: Không bỏ qua thẻ đóng cho các phần tử không tự đóng / Don't skip closing tags for non-self-closing elements
- ❌ **DON'T**: Không lồng ghép thẻ sai cấu trúc / Don't improperly nest tags

## Tài liệu tham khảo / References

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Specification](https://www.w3.org/TR/html52/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
