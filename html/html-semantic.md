# Semantic HTML / HTML Ngữ nghĩa

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Metadata](./html-metadata.md)  
**➡️ Bài sau / Next:** [Headings and Sections](./html-headings-sections.md)

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng các phần tử HTML chính xác để mô tả nội dung tài liệu một cách có ý nghĩa. Semantic HTML giúp trình duyệt, công cụ tìm kiếm và công nghệ hỗ trợ hiểu rõ cấu trúc và mục đích của nội dung. Sử dụng semantic HTML không chỉ cải thiện SEO mà còn nâng cao accessibility và khả năng bảo trì code.

This lesson introduces how to use precise HTML elements to meaningfully describe document content. Semantic HTML helps browsers, search engines, and assistive technologies understand the structure and purpose of content. Using semantic HTML not only improves SEO but also enhances accessibility and code maintainability.

## Khái niệm chính / Main Concepts

### What is Semantic HTML? / HTML Ngữ nghĩa là gì?

HTML ngữ nghĩa sử dụng các thẻ mô tả rõ ràng ý nghĩa của nội dung, không chỉ định dạng giao diện. Nó giúp mã HTML dễ hiểu và có cấu trúc logic.

Semantic HTML uses tags that clearly describe the meaning of content, not just presentation. It makes HTML code easier to understand and logically structured.

```html
<!-- HTML ngữ nghĩa / Semantic HTML -->
<article>
    <header>
        <h1>Tiêu đề bài viết / Article Title</h1>
        <time datetime="2025-12-23">23/12/2025</time>
    </header>
    <p>Nội dung bài viết / Article content</p>
    <footer>
        <p>Tác giả: Nguyễn Văn A / Author: John Doe</p>
    </footer>
</article>

<!-- HTML không ngữ nghĩa / Non-semantic HTML -->
<div class="article">
    <div class="header">
        <div class="title">Tiêu đề bài viết / Article Title</div>
        <span>23/12/2025</span>
    </div>
    <div>Nội dung bài viết / Article content</div>
    <div class="footer">
        <div>Tác giả: Nguyễn Văn A / Author: John Doe</div>
    </div>
</div>
```

### Structural Semantic Elements / Phần tử ngữ nghĩa cấu trúc

Các phần tử này định nghĩa cấu trúc chính của trang web.

These elements define the main structure of the web page.

```html
<!-- Cấu trúc trang web ngữ nghĩa -->
<!-- Semantic page structure -->
<body>
    <!-- Header của trang / Page header -->
    <header>
        <h1>Tên website / Website name</h1>
        <nav>
            <a href="/">Trang chủ / Home</a>
            <a href="/about">Giới thiệu / About</a>
        </nav>
    </header>
    
    <!-- Nội dung chính / Main content -->
    <main>
        <article>
            <h2>Bài viết chính / Main article</h2>
            <p>Nội dung / Content</p>
        </article>
        
        <aside>
            <h3>Sidebar / Thanh bên</h3>
            <p>Nội dung phụ / Secondary content</p>
        </aside>
    </main>
    
    <!-- Footer của trang / Page footer -->
    <footer>
        <p>&copy; 2025 Bản quyền / Copyright</p>
    </footer>
</body>
```

### Content Semantic Elements / Phần tử ngữ nghĩa nội dung

Các thẻ này mô tả loại và ý nghĩa của nội dung.

These tags describe the type and meaning of content.

```html
<!-- Article: Nội dung độc lập / Independent content -->
<article>
    <h2>Tin tức công nghệ / Tech News</h2>
    <p>Nội dung bài báo / Article content</p>
</article>

<!-- Section: Phần thematic trong document -->
<!-- Section: Thematic section in document -->
<section>
    <h2>Dịch vụ / Services</h2>
    <p>Mô tả dịch vụ / Service description</p>
</section>

<!-- Aside: Nội dung liên quan nhưng không phải chính -->
<!-- Aside: Related but not main content -->
<aside>
    <h3>Có thể bạn quan tâm / You might be interested</h3>
    <ul>
        <li>Bài viết liên quan / Related article</li>
    </ul>
</aside>

<!-- Nav: Điều hướng / Navigation -->
<nav>
    <ul>
        <li><a href="/home">Trang chủ / Home</a></li>
        <li><a href="/blog">Blog</a></li>
    </ul>
</nav>
```

### Text-Level Semantic Elements / Phần tử ngữ nghĩa cấp văn bản

Các thẻ này thêm ý nghĩa cho văn bản inline.

These tags add meaning to inline text.

```html
<p>
    <!-- Nhấn mạnh / Emphasis -->
    <em>Văn bản nhấn mạnh / Emphasized text</em>
    
    <!-- Quan trọng / Strong importance -->
    <strong>Văn bản quan trọng / Important text</strong>
    
    <!-- Mark: Đánh dấu / Highlight -->
    <mark>Văn bản được đánh dấu / Highlighted text</mark>
    
    <!-- Code / Mã code -->
    <code>const x = 10;</code>
    
    <!-- Time: Thời gian / Time -->
    <time datetime="2025-12-23">23 tháng 12, 2025</time>
    
    <!-- Abbr: Viết tắt / Abbreviation -->
    <abbr title="HyperText Markup Language">HTML</abbr>
</p>
```

### Form Semantic Elements / Phần tử ngữ nghĩa form

Các thẻ semantic cho biểu mẫu giúp accessibility và UX tốt hơn.

Semantic form tags help with better accessibility and UX.

```html
<form>
    <!-- Nhóm các trường liên quan / Group related fields -->
    <fieldset>
        <legend>Thông tin cá nhân / Personal Information</legend>
        
        <!-- Label kết nối với input -->
        <!-- Label connected to input -->
        <label for="name">Họ tên / Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </fieldset>
    
    <button type="submit">Gửi / Submit</button>
</form>
```

### Multimedia Semantic Elements / Phần tử ngữ nghĩa đa phương tiện

Các thẻ semantic cho hình ảnh, video và audio.

Semantic tags for images, videos, and audio.

```html
<!-- Figure: Hình ảnh với caption -->
<!-- Figure: Image with caption -->
<figure>
    <img src="chart.png" alt="Biểu đồ doanh thu / Revenue chart">
    <figcaption>Hình 1: Biểu đồ doanh thu năm 2025 / Figure 1: 2025 Revenue Chart</figcaption>
</figure>

<!-- Video với phụ đề / Video with subtitles -->
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track src="subtitles-vi.vtt" kind="subtitles" srclang="vi" label="Tiếng Việt">
    <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
</video>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **SEO tốt hơn**: Công cụ tìm kiếm hiểu rõ cấu trúc và nội dung / Search engines better understand structure and content
- **Accessibility cao**: Screen readers và assistive technologies hoạt động hiệu quả hơn / Screen readers and assistive technologies work more effectively
- **Dễ bảo trì**: Code dễ đọc và hiểu hơn cho developers / Code is easier to read and understand for developers
- **Tương thích tốt**: Hoạt động nhất quán trên các trình duyệt / Works consistently across browsers
- **Future-proof**: Chuẩn bị tốt cho công nghệ web tương lai / Well-prepared for future web technologies
- **Performance**: Trình duyệt có thể optimize rendering tốt hơn / Browsers can optimize rendering better

### Ứng dụng thực tế / Real-world Applications

- **Blog và tin tức**: Cấu trúc bài viết rõ ràng với `<article>`, `<header>`, `<footer>` / Clear article structure with `<article>`, `<header>`, `<footer>`
- **E-commerce**: Mô tả sản phẩm semantic giúp SEO / Semantic product descriptions help SEO
- **Documentation**: Tổ chức tài liệu kỹ thuật logic / Logically organize technical documentation
- **Landing pages**: Cấu trúc sections rõ ràng / Clear section structures
- **Web applications**: Accessibility tốt hơn cho mọi người dùng / Better accessibility for all users
- **Portfolio**: Trình bày dự án và thông tin chuyên nghiệp / Present projects and information professionally

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `<header>`, `<main>`, `<footer>` cho cấu trúc trang / Use `<header>`, `<main>`, `<footer>` for page structure
- ✅ **DO**: Dùng `<article>` cho nội dung độc lập / Use `<article>` for independent content
- ✅ **DO**: Dùng `<nav>` cho menu điều hướng / Use `<nav>` for navigation menus
- ✅ **DO**: Dùng `<section>` để nhóm nội dung liên quan / Use `<section>` to group related content
- ✅ **DO**: Dùng `<time>` cho ngày tháng / Use `<time>` for dates
- ✅ **DO**: Dùng `<strong>` và `<em>` thay vì `<b>` và `<i>` / Use `<strong>` and `<em>` instead of `<b>` and `<i>`
- ❌ **DON'T**: Không dùng `<div>` khi có thẻ semantic phù hợp / Don't use `<div>` when appropriate semantic tag exists
- ❌ **DON'T**: Không lạm dụng `<section>` cho mọi khối / Don't overuse `<section>` for every block
- ❌ **DON'T**: Không quên thuộc tính `alt` cho hình ảnh / Don't forget `alt` attribute for images

## Tài liệu tham khảo / References

- [MDN - HTML Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
- [HTML5 Doctor](http://html5doctor.com/)
- [W3C - Semantic HTML](https://www.w3.org/TR/html52/dom.html#kinds-of-content)
