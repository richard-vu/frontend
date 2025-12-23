# Document Structure / Cấu trúc tài liệu HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Overview of HTML](./html-overview.md)  
**➡️ Bài sau / Next:** [Metadata](./html-metadata.md)

---

## Mô tả / Description

Bài học này hướng dẫn cách xây dựng cấu trúc của một tài liệu HTML với nền tảng vững chắc. Bạn sẽ học về các phần tử bắt buộc và cách tổ chức chúng để tạo ra một khung sườn tài liệu chuẩn chỉnh và logic. Hiểu rõ cấu trúc tài liệu là bước quan trọng đầu tiên để xây dựng bất kỳ trang web nào.

This lesson teaches how to build the structure of an HTML document with a solid foundation. You will learn about required elements and how to organize them to create a proper and logical document framework. Understanding document structure is the crucial first step in building any web page.

## Khái niệm chính / Main Concepts

### DOCTYPE Declaration / Khai báo DOCTYPE

DOCTYPE là khai báo bắt buộc ở đầu mỗi tài liệu HTML. Nó cho trình duyệt biết phiên bản HTML đang được sử dụng và đảm bảo trang web được hiển thị đúng cách.

DOCTYPE is a required declaration at the beginning of each HTML document. It tells the browser which HTML version is being used and ensures the web page is displayed correctly.

```html
<!-- HTML5 DOCTYPE (khuyến nghị / recommended) -->
<!DOCTYPE html>

<!-- Đơn giản, ngắn gọn, không phân biệt chữ hoa/thường -->
<!-- Simple, concise, case-insensitive -->
```

### The `<html>` Element / Phần tử `<html>`

Phần tử `<html>` là phần tử gốc (root element) chứa toàn bộ nội dung của tài liệu HTML. Thuộc tính `lang` xác định ngôn ngữ chính của trang.

The `<html>` element is the root element that contains all content of the HTML document. The `lang` attribute specifies the primary language of the page.

```html
<html lang="vi">
    <!-- Toàn bộ nội dung HTML / All HTML content -->
</html>

<!-- Các giá trị lang phổ biến / Common lang values -->
<html lang="en">    <!-- Tiếng Anh / English -->
<html lang="vi">    <!-- Tiếng Việt / Vietnamese -->
<html lang="ja">    <!-- Tiếng Nhật / Japanese -->
<html lang="zh">    <!-- Tiếng Trung / Chinese -->
```

### The `<head>` Element / Phần tử `<head>`

Phần tử `<head>` chứa metadata và thông tin về tài liệu nhưng không hiển thị trực tiếp trên trang. Nó bao gồm tiêu đề, liên kết CSS, scripts, và các thông tin meta khác.

The `<head>` element contains metadata and information about the document but is not directly displayed on the page. It includes the title, CSS links, scripts, and other meta information.

```html
<head>
    <!-- Bắt buộc / Required -->
    <meta charset="UTF-8">
    <title>Tiêu đề trang / Page Title</title>
    
    <!-- Khuyến nghị / Recommended -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mô tả trang web / Page description">
    
    <!-- Tùy chọn / Optional -->
    <link rel="stylesheet" href="styles.css">
    <link rel="icon" href="favicon.ico">
    <script src="script.js" defer></script>
</head>
```

### The `<body>` Element / Phần tử `<body>`

Phần tử `<body>` chứa tất cả nội dung hiển thị của trang web, bao gồm văn bản, hình ảnh, video, liên kết, và các phần tử tương tác khác.

The `<body>` element contains all visible content of the web page, including text, images, videos, links, and other interactive elements.

```html
<body>
    <!-- Header / Phần đầu -->
    <header>
        <nav>
            <a href="/">Trang chủ / Home</a>
            <a href="/about">Giới thiệu / About</a>
        </nav>
    </header>
    
    <!-- Main content / Nội dung chính -->
    <main>
        <article>
            <h1>Tiêu đề chính / Main Heading</h1>
            <p>Nội dung bài viết / Article content</p>
        </article>
    </main>
    
    <!-- Footer / Phần cuối -->
    <footer>
        <p>&copy; 2025 Bản quyền / Copyright</p>
    </footer>
</body>
```

### Complete Document Structure / Cấu trúc tài liệu hoàn chỉnh

Đây là template đầy đủ cho một tài liệu HTML5 chuẩn.

This is a complete template for a standard HTML5 document.

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <!-- Mã hóa ký tự / Character encoding -->
    <meta charset="UTF-8">
    
    <!-- Viewport cho responsive design -->
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Tiêu đề trang (hiển thị trên tab) -->
    <!-- Page title (displays on tab) -->
    <title>Tài liệu HTML chuẩn / Standard HTML Document</title>
    
    <!-- Mô tả cho SEO / Description for SEO -->
    <meta name="description" content="Mô tả ngắn gọn về trang web">
    
    <!-- Liên kết CSS / CSS link -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Nội dung trang web / Web page content -->
    <h1>Xin chào! / Hello!</h1>
    <p>Đây là trang web của tôi. / This is my website.</p>
</body>
</html>
```

### Indentation and Formatting / Thụt lề và Định dạng

Code HTML nên được thụt lề đúng cách để dễ đọc và bảo trì.

HTML code should be properly indented for readability and maintainability.

```html
<!-- Tốt / Good -->
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang web / Website</title>
</head>
<body>
    <header>
        <h1>Tiêu đề / Title</h1>
    </header>
    <main>
        <p>Nội dung / Content</p>
    </main>
</body>
</html>

<!-- Không tốt / Bad -->
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Trang web / Website</title>
</head>
<body>
<header>
<h1>Tiêu đề / Title</h1>
</header>
<main>
<p>Nội dung / Content</p>
</main>
</body>
</html>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Chuẩn hóa**: Đảm bảo tài liệu HTML tuân theo chuẩn quốc tế W3C / Ensures HTML document follows W3C international standards
- **Tương thích trình duyệt**: Hiển thị đúng trên mọi trình duyệt hiện đại / Displays correctly across all modern browsers
- **SEO tối ưu**: Cấu trúc rõ ràng giúp công cụ tìm kiếm index tốt hơn / Clear structure helps search engines index better
- **Dễ bảo trì**: Code có tổ chức giúp dễ dàng sửa đổi và mở rộng / Organized code makes it easier to modify and extend
- **Accessibility**: Cấu trúc đúng hỗ trợ screen readers và công nghệ hỗ trợ / Proper structure supports screen readers and assistive technologies
- **Hiệu suất**: Cấu trúc tối ưu giúp trang tải nhanh hơn / Optimized structure helps pages load faster

### Ứng dụng thực tế / Real-world Applications

- **Landing pages**: Tạo trang đích cho sản phẩm, dịch vụ / Create landing pages for products and services
- **Blog và tin tức**: Xây dựng website chia sẻ nội dung / Build content-sharing websites
- **Portfolio**: Trang giới thiệu cá nhân, CV online / Personal introduction pages, online CVs
- **E-commerce**: Nền tảng cho website bán hàng / Foundation for e-commerce websites
- **Documentation**: Tài liệu kỹ thuật, hướng dẫn sử dụng / Technical documentation, user guides
- **Web applications**: Cơ sở cho ứng dụng web phức tạp / Foundation for complex web applications

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn bắt đầu với `<!DOCTYPE html>` / Always start with `<!DOCTYPE html>`
- ✅ **DO**: Sử dụng thuộc tính `lang` trong thẻ `<html>` / Use `lang` attribute in `<html>` tag
- ✅ **DO**: Khai báo charset UTF-8 trong `<head>` / Declare UTF-8 charset in `<head>`
- ✅ **DO**: Thụt lề code đúng cách (2 hoặc 4 spaces) / Indent code properly (2 or 4 spaces)
- ✅ **DO**: Sử dụng lowercase cho tên thẻ và thuộc tính / Use lowercase for tag and attribute names
- ✅ **DO**: Đóng tất cả thẻ đúng cách / Close all tags properly
- ❌ **DON'T**: Không bỏ qua DOCTYPE declaration / Don't skip DOCTYPE declaration
- ❌ **DON'T**: Không đặt nội dung hiển thị ngoài thẻ `<body>` / Don't place visible content outside `<body>` tag
- ❌ **DON'T**: Không sử dụng inline styles và scripts khi không cần thiết / Don't use inline styles and scripts unnecessarily

## Tài liệu tham khảo / References

- [MDN - HTML Document Structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [W3C HTML Specification](https://www.w3.org/TR/html52/)
- [HTML5 Doctor - Document Outline](http://html5doctor.com/outlines/)
