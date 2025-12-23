# Links / Liên kết HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Text Basics](./html-text-basics.md)  
**➡️ Bài sau / Next:** [Lists](./html-lists.md)

---

## Mô tả / Description

Bài học này bao gồm tất cả những điều cần biết về các liên kết trong HTML. Links (hay hyperlinks) là thành phần cốt lõi của web, cho phép kết nối các trang web và tài nguyên với nhau. Hiểu rõ cách tạo và sử dụng links giúp xây dựng navigation tốt và cải thiện trải nghiệm người dùng.

This lesson covers everything you need to know about links in HTML. Links (or hyperlinks) are the core component of the web, allowing connections between web pages and resources. Understanding how to create and use links helps build good navigation and improve user experience.

## Khái niệm chính / Main Concepts

### Basic Links / Liên kết cơ bản

Thẻ `<a>` (anchor) tạo hyperlink. Thuộc tính `href` chỉ định URL đích.

The `<a>` (anchor) tag creates a hyperlink. The `href` attribute specifies the destination URL.

```html
<!-- Liên kết cơ bản / Basic link -->
<a href="https://example.com">Truy cập Example.com / Visit Example.com</a>

<!-- Liên kết nội bộ / Internal link -->
<a href="/about">Giới thiệu / About</a>
<a href="./contact.html">Liên hệ / Contact</a>

<!-- Liên kết tương đối / Relative link -->
<a href="../index.html">Trang chủ / Home</a>
```

### Target Attribute / Thuộc tính Target

`target` xác định nơi mở link (same tab, new tab, iframe).

`target` specifies where to open the link (same tab, new tab, iframe).

```html
<!-- Mở trong tab mới / Open in new tab -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Link mới / New tab link
</a>

<!-- Mở trong cùng tab (mặc định) / Open in same tab (default) -->
<a href="page.html" target="_self">Same tab</a>

<!-- Mở trong parent frame -->
<a href="page.html" target="_parent">Parent frame</a>

<!-- Mở trong full window -->
<a href="page.html" target="_top">Full window</a>
```

### Email and Telephone Links / Liên kết Email và Điện thoại

```html
<!-- Email link -->
<a href="mailto:example@email.com">Gửi email / Send email</a>

<!-- Email với subject và body -->
<!-- Email with subject and body -->
<a href="mailto:example@email.com?subject=Hello&body=Hi there">
    Email với nội dung / Email with content
</a>

<!-- Telephone link -->
<a href="tel:+84123456789">Gọi điện / Call now</a>

<!-- SMS link -->
<a href="sms:+84123456789">Gửi SMS / Send SMS</a>
```

### Anchor Links / Liên kết neo

Anchor links nhảy đến vị trí cụ thể trong trang.

Anchor links jump to a specific location on the page.

```html
<!-- Tạo anchor / Create anchor -->
<h2 id="section-1">Phần 1 / Section 1</h2>

<!-- Link đến anchor / Link to anchor -->
<a href="#section-1">Đến Phần 1 / Go to Section 1</a>

<!-- Link đến anchor trong trang khác -->
<!-- Link to anchor in another page -->
<a href="page.html#section-2">Phần 2 của trang khác / Section 2 of other page</a>

<!-- Back to top link -->
<a href="#top">Lên đầu trang / Back to top</a>
```

### Download Links / Liên kết tải xuống

Thuộc tính `download` chỉ định file nên được tải xuống thay vì mở.

The `download` attribute specifies that the file should be downloaded instead of opened.

```html
<!-- Tải file / Download file -->
<a href="document.pdf" download>
    Tải PDF / Download PDF
</a>

<!-- Đổi tên file khi tải / Rename file on download -->
<a href="report-2025.pdf" download="my-report.pdf">
    Tải báo cáo / Download Report
</a>
```

### Link States and Styling / Trạng thái và Style liên kết

Links có các pseudo-classes CSS khác nhau cho các trạng thái.

Links have different CSS pseudo-classes for various states.

```html
<style>
/* Chưa ghé thăm / Unvisited */
a:link {
    color: blue;
}

/* Đã ghé thăm / Visited */
a:visited {
    color: purple;
}

/* Hover */
a:hover {
    color: red;
    text-decoration: underline;
}

/* Active (khi click) / Active (when clicking) */
a:active {
    color: green;
}

/* Focus (keyboard navigation) */
a:focus {
    outline: 2px solid orange;
}
</style>

<a href="page.html">Liên kết mẫu / Sample link</a>
```

### rel Attribute / Thuộc tính rel

`rel` chỉ định mối quan hệ giữa trang hiện tại và trang đích.

`rel` specifies the relationship between the current page and the destination page.

```html
<!-- noopener: Bảo mật cho target="_blank" -->
<!-- noopener: Security for target="_blank" -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
    External link
</a>

<!-- nofollow: Không follow link (SEO) -->
<!-- nofollow: Don't follow link (SEO) -->
<a href="https://spam.com" rel="nofollow">
    User generated content
</a>

<!-- sponsored: Link quảng cáo / Sponsored link -->
<a href="https://sponsor.com" rel="sponsored">
    Sponsored link
</a>

<!-- prev/next: Navigation -->
<a href="page1.html" rel="prev">Trang trước / Previous page</a>
<a href="page3.html" rel="next">Trang sau / Next page</a>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Navigation**: Điều hướng giữa các trang / Navigate between pages
- **Connectivity**: Kết nối tài nguyên web / Connect web resources
- **User interaction**: Tạo call-to-action buttons / Create call-to-action buttons
- **SEO**: Internal linking cải thiện SEO / Internal linking improves SEO
- **Accessibility**: Keyboard navigation support / Keyboard navigation support

### Ứng dụng thực tế / Real-world Applications

- **Website navigation**: Menu, breadcrumbs / Menu, breadcrumbs
- **E-commerce**: Product links, checkout / Product links, checkout
- **Blog**: Related posts, categories / Related posts, categories
- **Documentation**: Table of contents, cross-references / Table of contents, cross-references
- **Contact**: Email, phone links / Email, phone links

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng descriptive link text / Use descriptive link text
- ✅ **DO**: Thêm `rel="noopener noreferrer"` cho `target="_blank"` / Add `rel="noopener noreferrer"` for `target="_blank"`
- ✅ **DO**: Dùng `title` attribute cho context thêm / Use `title` attribute for additional context
- ❌ **DON'T**: Không dùng "click here" làm link text / Don't use "click here" as link text
- ❌ **DON'T**: Không mở nhiều new tabs không cần thiết / Don't open many unnecessary new tabs

## Tài liệu tham khảo / References

- [MDN - Links](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [W3C - Links](https://www.w3.org/TR/html52/links.html)
