# Navigation / Điều hướng HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Lists](./html-lists.md)  
**➡️ Bài sau / Next:** [Tables](./html-tables.md)

---

## Mô tả / Description

Bài học này hướng dẫn xây dựng hệ thống điều hướng bắt đầu từ HTML. Navigation giúp người dùng dễ dàng di chuyển giữa các phần của trang web hoặc ứng dụng. Một navigation system tốt cải thiện user experience và accessibility đáng kể.

This lesson teaches how to build a navigation system starting from HTML. Navigation helps users easily move between sections of a website or application. A good navigation system significantly improves user experience and accessibility.

## Khái niệm chính / Main Concepts

### The `<nav>` Element / Phần tử `<nav>`

`<nav>` chứa các liên kết điều hướng chính.

`<nav>` contains major navigation links.

```html
<nav>
    <ul>
        <li><a href="/">Trang chủ / Home</a></li>
        <li><a href="/about">Giới thiệu / About</a></li>
        <li><a href="/contact">Liên hệ / Contact</a></li>
    </ul>
</nav>
```

### Main Navigation / Điều hướng chính

```html
<header>
    <nav aria-label="Main Navigation">
        <ul>
            <li><a href="/" aria-current="page">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</header>
```

### Breadcrumb Navigation / Điều hướng Breadcrumb

```html
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/products/laptops">Laptops</a></li>
        <li aria-current="page">Gaming Laptop</li>
    </ol>
</nav>
```

### Mobile Navigation / Điều hướng di động

```html
<button id="menu-toggle" aria-label="Toggle menu">
    ☰ Menu
</button>

<nav id="main-nav">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</nav>
```

### Skip Navigation / Bỏ qua điều hướng

```html
<a href="#main-content" class="skip-link">
    Bỏ qua điều hướng / Skip to main content
</a>

<nav><!-- Navigation menu --></nav>

<main id="main-content">
    <!-- Main content -->
</main>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **User experience**: Dễ dàng di chuyển / Easy navigation
- **Accessibility**: Hỗ trợ keyboard và screen readers / Supports keyboard and screen readers
- **SEO**: Cấu trúc site tốt / Good site structure
- **Mobile-friendly**: Responsive navigation / Responsive navigation

### Ứng dụng thực tế / Real-world Applications

- **Website menus**: Menu chính, footer menu / Main menu, footer menu
- **Breadcrumbs**: Hiển thị vị trí hiện tại / Show current location
- **Pagination**: Chuyển trang / Page navigation
- **Table of contents**: Mục lục tài liệu / Document table of contents

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `<nav>` cho navigation chính / Use `<nav>` for main navigation
- ✅ **DO**: Thêm `aria-label` cho multiple nav / Add `aria-label` for multiple nav
- ✅ **DO**: Sử dụng `<ul>` cho navigation lists / Use `<ul>` for navigation lists
- ❌ **DON'T**: Không dùng quá nhiều `<nav>` / Don't overuse `<nav>`

## Tài liệu tham khảo / References

- [MDN - nav element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
- [W3C - Navigation](https://www.w3.org/TR/wai-aria-practices-1.1/#aria_lh_navigation)
