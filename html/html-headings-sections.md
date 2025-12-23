# Headings and Sections / Tiêu đề và Phân đoạn

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Semantic HTML](./html-semantic.md)  
**➡️ Bài sau / Next:** [Attributes](./html-attributes.md)

---

## Mô tả / Description

Bài học này hướng dẫn cách sử dụng chính xác các phần tử phân đoạn và tiêu đề để tạo ý nghĩa cho nội dung. Headings (h1-h6) và sectioning elements giúp tạo ra cấu trúc phân cấp rõ ràng, cải thiện khả năng điều hướng và accessibility. Việc sử dụng đúng các thẻ này rất quan trọng cho SEO và trải nghiệm người dùng.

This lesson teaches how to correctly use sectioning elements and headings to create meaningful content. Headings (h1-h6) and sectioning elements help create a clear hierarchical structure, improving navigation and accessibility. Proper use of these tags is crucial for SEO and user experience.

## Khái niệm chính / Main Concepts

### Heading Elements (h1-h6) / Phần tử tiêu đề (h1-h6)

HTML cung cấp 6 cấp độ tiêu đề từ `<h1>` (quan trọng nhất) đến `<h6>` (ít quan trọng nhất). Sử dụng đúng hierarchy giúp cấu trúc nội dung logic.

HTML provides 6 heading levels from `<h1>` (most important) to `<h6>` (least important). Using correct hierarchy helps structure content logically.

```html
<h1>Tiêu đề chính của trang / Main Page Heading</h1>

<h2>Phần 1: Giới thiệu / Section 1: Introduction</h2>
<p>Nội dung phần 1 / Section 1 content</p>

    <h3>Phần 1.1: Lịch sử / Subsection 1.1: History</h3>
    <p>Nội dung phần 1.1 / Subsection 1.1 content</p>

    <h3>Phần 1.2: Tầm quan trọng / Subsection 1.2: Importance</h3>
    <p>Nội dung phần 1.2 / Subsection 1.2 content</p>

<h2>Phần 2: Phương pháp / Section 2: Methodology</h2>
<p>Nội dung phần 2 / Section 2 content</p>
```

### The `<section>` Element / Phần tử `<section>`

`<section>` định nghĩa một phần thematic (chủ đề) trong document. Thường có heading riêng và nhóm nội dung liên quan.

`<section>` defines a thematic section in a document. Usually has its own heading and groups related content.

```html
<!-- Ví dụ trang sản phẩm / Product page example -->
<article>
    <h1>Điện thoại XYZ / XYZ Smartphone</h1>
    
    <section>
        <h2>Đặc điểm nổi bật / Key Features</h2>
        <ul>
            <li>Camera 48MP</li>
            <li>Pin 5000mAh</li>
        </ul>
    </section>
    
    <section>
        <h2>Thông số kỹ thuật / Technical Specifications</h2>
        <table>
            <!-- Bảng thông số / Specs table -->
        </table>
    </section>
    
    <section>
        <h2>Đánh giá / Reviews</h2>
        <p>Đánh giá từ khách hàng / Customer reviews</p>
    </section>
</article>
```

### The `<article>` Element / Phần tử `<article>`

`<article>` đại diện cho nội dung độc lập, có thể phân phối riêng lẻ (blog post, bài báo, comment).

`<article>` represents independent content that can be distributed separately (blog post, news article, comment).

```html
<!-- Blog post / Bài viết blog -->
<article>
    <header>
        <h2>Cách học HTML hiệu quả / How to Learn HTML Effectively</h2>
        <p>
            Đăng bởi: <strong>Nguyễn Văn A</strong> / 
            Posted by: <strong>John Doe</strong>
            vào <time datetime="2025-12-23">23/12/2025</time>
        </p>
    </header>
    
    <p>Nội dung bài viết... / Article content...</p>
    
    <footer>
        <p>Tags: HTML, Tutorial, Web Development</p>
    </footer>
</article>

<!-- Comments / Bình luận -->
<section>
    <h3>Bình luận / Comments</h3>
    
    <article>
        <header>
            <strong>User123:</strong>
            <time datetime="2025-12-23T10:30">10:30</time>
        </header>
        <p>Bài viết hay! / Great article!</p>
    </article>
</section>
```

### The `<header>` and `<footer>` Elements / Phần tử `<header>` và `<footer>`

`<header>` chứa nội dung giới thiệu hoặc điều hướng. `<footer>` chứa thông tin về tác giả, copyright, liên kết liên quan.

`<header>` contains introductory content or navigation. `<footer>` contains information about author, copyright, related links.

```html
<!-- Header trang web / Website header -->
<header>
    <h1>Tên công ty / Company Name</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
</header>

<!-- Header của article -->
<!-- Article header -->
<article>
    <header>
        <h2>Tiêu đề bài viết / Article Title</h2>
        <p>Tác giả / Author: <strong>Jane Doe</strong></p>
        <time>2025-12-23</time>
    </header>
    
    <p>Nội dung / Content...</p>
    
    <footer>
        <p>Danh mục / Category: Technology</p>
        <p>Tags: HTML, CSS, JavaScript</p>
    </footer>
</article>

<!-- Footer trang web / Website footer -->
<footer>
    <p>&copy; 2025 Company Name. All rights reserved.</p>
    <nav>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
    </nav>
</footer>
```

### The `<nav>` Element / Phần tử `<nav>`

`<nav>` chứa các liên kết điều hướng chính của trang hoặc website.

`<nav>` contains major navigation links of the page or website.

```html
<!-- Main navigation / Điều hướng chính -->
<nav aria-label="Main Navigation">
    <ul>
        <li><a href="/">Trang chủ / Home</a></li>
        <li><a href="/products">Sản phẩm / Products</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Liên hệ / Contact</a></li>
    </ul>
</nav>

<!-- Breadcrumb navigation / Điều hướng breadcrumb -->
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li>Laptop</li>
    </ol>
</nav>

<!-- Table of contents / Mục lục -->
<nav aria-label="Table of Contents">
    <h2>Mục lục / Table of Contents</h2>
    <ul>
        <li><a href="#intro">Giới thiệu / Introduction</a></li>
        <li><a href="#methods">Phương pháp / Methods</a></li>
        <li><a href="#conclusion">Kết luận / Conclusion</a></li>
    </ul>
</nav>
```

### The `<aside>` Element / Phần tử `<aside>`

`<aside>` chứa nội dung liên quan nhưng có thể tách riêng khỏi nội dung chính (sidebar, callouts).

`<aside>` contains related content that can be separated from main content (sidebar, callouts).

```html
<main>
    <article>
        <h1>Bài viết chính / Main Article</h1>
        <p>Nội dung bài viết... / Article content...</p>
        
        <!-- Aside trong article -->
        <!-- Aside within article -->
        <aside>
            <h3>Ghi chú / Note</h3>
            <p>Thông tin bổ sung / Additional information</p>
        </aside>
    </article>
    
    <!-- Sidebar / Thanh bên -->
    <aside>
        <h2>Bài viết liên quan / Related Articles</h2>
        <ul>
            <li><a href="#">Article 1</a></li>
            <li><a href="#">Article 2</a></li>
        </ul>
        
        <h2>Quảng cáo / Advertisement</h2>
        <!-- Ad content -->
    </aside>
</main>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Cấu trúc rõ ràng**: Tổ chức nội dung logic và dễ theo dõi / Organizes content logically and easy to follow
- **SEO tối ưu**: Công cụ tìm kiếm hiểu cấu trúc trang tốt hơn / Search engines understand page structure better
- **Accessibility**: Screen readers điều hướng hiệu quả / Screen readers navigate effectively
- **Bảo trì dễ dàng**: Code dễ đọc và sửa đổi / Code is easy to read and modify
- **User experience**: Người dùng dễ dàng scan và tìm thông tin / Users easily scan and find information
- **Semantic meaning**: Mỗi phần có ý nghĩa rõ ràng / Each section has clear meaning

### Ứng dụng thực tế / Real-world Applications

- **Blog và tin tức**: Cấu trúc bài viết với header, sections, footer / Structure articles with header, sections, footer
- **E-commerce**: Tổ chức trang sản phẩm với các section khác nhau / Organize product pages with different sections
- **Documentation**: Tạo mục lục và phân cấp nội dung / Create table of contents and content hierarchy
- **Landing pages**: Chia trang thành các sections rõ ràng / Divide page into clear sections
- **Portfolio**: Tổ chức projects và skills theo sections / Organize projects and skills by sections
- **Corporate website**: Cấu trúc trang About, Services, Contact / Structure About, Services, Contact pages

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng một `<h1>` duy nhất cho mỗi trang / Use one `<h1>` per page
- ✅ **DO**: Không bỏ qua level heading (h1→h2→h3, không h1→h3) / Don't skip heading levels (h1→h2→h3, not h1→h3)
- ✅ **DO**: Đặt heading trong mọi `<section>` / Place heading in every `<section>`
- ✅ **DO**: Sử dụng `<article>` cho nội dung độc lập / Use `<article>` for independent content
- ✅ **DO**: Dùng `<nav>` chỉ cho navigation chính / Use `<nav>` only for major navigation
- ✅ **DO**: Thêm `aria-label` cho multiple `<nav>` / Add `aria-label` for multiple `<nav>` elements
- ❌ **DON'T**: Không dùng heading chỉ để tạo font size / Don't use headings just for font size
- ❌ **DON'T**: Không lồng `<header>` và `<footer>` / Don't nest `<header>` and `<footer>`
- ❌ **DON'T**: Không dùng `<section>` thay cho `<div>` styling / Don't use `<section>` as a replacement for `<div>` styling

## Tài liệu tham khảo / References

- [MDN - Document and website structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [HTML5 Doctor - Sectioning Elements](http://html5doctor.com/outlines/)
- [W3C - Sections](https://www.w3.org/TR/html52/sections.html)
