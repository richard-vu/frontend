# Attributes / Thuộc tính HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Headings and Sections](./html-headings-sections.md)  
**➡️ Bài sau / Next:** [Text Basics](./html-text-basics.md)

---

## Mô tả / Description

Bài học này giới thiệu về các thuộc tính (attributes) trong HTML, bao gồm thuộc tính toàn cầu và thuộc tính riêng biệt của từng phần tử. Thuộc tính cung cấp thêm thông tin cấu hình và chức năng cho các phần tử HTML. Hiểu rõ về attributes giúp bạn tạo ra các trang web linh hoạt, accessible và interactive hơn.

This lesson introduces attributes in HTML, including global attributes and element-specific attributes. Attributes provide additional configuration information and functionality to HTML elements. Understanding attributes helps you create more flexible, accessible, and interactive web pages.

## Khái niệm chính / Main Concepts

### What are Attributes? / Thuộc tính là gì?

Thuộc tính là thông tin bổ sung được thêm vào thẻ mở của phần tử HTML. Chúng có định dạng `name="value"` và cung cấp metadata hoặc cấu hình.

Attributes are additional information added to the opening tag of HTML elements. They have the format `name="value"` and provide metadata or configuration.

```html
<!-- Cú pháp cơ bản / Basic syntax -->
<element attribute="value">Content</element>

<!-- Nhiều thuộc tính / Multiple attributes -->
<img src="photo.jpg" alt="Mô tả / Description" width="300" height="200">

<!-- Boolean attributes (không cần value) -->
<!-- Boolean attributes (no value needed) -->
<input type="checkbox" checked>
<button disabled>Click</button>
```

### Global Attributes / Thuộc tính toàn cầu

Thuộc tính toàn cầu có thể được sử dụng trên mọi phần tử HTML.

Global attributes can be used on any HTML element.

```html
<!-- id: Định danh duy nhất / Unique identifier -->
<div id="header">Header content</div>

<!-- class: Phân loại cho CSS/JS / Classification for CSS/JS -->
<p class="highlight important">Text</p>

<!-- style: Inline CSS (tránh nếu có thể) -->
<!-- style: Inline CSS (avoid if possible) -->
<p style="color: blue; font-size: 16px;">Styled text</p>

<!-- title: Tooltip khi hover / Tooltip on hover -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- data-*: Custom data attributes -->
<div data-user-id="123" data-role="admin">User info</div>

<!-- lang: Ngôn ngữ / Language -->
<p lang="vi">Xin chào</p>
<p lang="en">Hello</p>

<!-- hidden: Ẩn phần tử / Hide element -->
<div hidden>Not visible</div>
```

### Common Element-Specific Attributes / Thuộc tính riêng phổ biến

Mỗi phần tử HTML có các thuộc tính riêng cho mục đích cụ thể.

Each HTML element has specific attributes for particular purposes.

```html
<!-- Links / Liên kết -->
<a href="https://example.com" target="_blank" rel="noopener">
    Link mở tab mới / Link opens in new tab
</a>

<!-- Images / Hình ảnh -->
<img src="image.jpg" 
     alt="Mô tả cho screen readers / Description for screen readers"
     width="400" 
     height="300"
     loading="lazy">

<!-- Forms / Biểu mẫu -->
<input type="email" 
       name="email" 
       placeholder="Email của bạn / Your email"
       required 
       autocomplete="email">

<textarea cols="30" rows="10" maxlength="500"></textarea>

<!-- Buttons / Nút -->
<button type="submit" disabled>Gửi / Submit</button>
```

### The `id` Attribute / Thuộc tính `id`

`id` cung cấp định danh duy nhất cho phần tử, dùng cho CSS, JavaScript và anchor links.

`id` provides a unique identifier for an element, used for CSS, JavaScript, and anchor links.

```html
<!-- Định danh duy nhất / Unique identifier -->
<div id="main-content">
    <h1 id="page-title">Tiêu đề / Title</h1>
</div>

<!-- Liên kết đến id (anchor) -->
<!-- Link to id (anchor) -->
<a href="#main-content">Đến nội dung chính / Go to main content</a>

<!-- JavaScript -->
<script>
    const element = document.getElementById('page-title');
</script>

<!-- Quy tắc / Rules:
    - Phải duy nhất trong trang / Must be unique in page
    - Không có khoảng trắng / No spaces
    - Case-sensitive -->
```

### The `class` Attribute / Thuộc tính `class`

`class` phân loại phần tử để styling hoặc scripting. Một phần tử có thể có nhiều classes.

`class` classifies elements for styling or scripting. An element can have multiple classes.

```html
<!-- Một class / Single class -->
<p class="highlight">Highlighted text</p>

<!-- Nhiều classes (cách nhau bởi space) -->
<!-- Multiple classes (separated by space) -->
<div class="container primary-section featured">Content</div>

<!-- CSS -->
<style>
    .highlight { background: yellow; }
    .container { max-width: 1200px; }
    .primary-section { color: blue; }
</style>

<!-- JavaScript -->
<script>
    const elements = document.getElementsByClassName('highlight');
    const element = document.querySelector('.container');
</script>
```

### Data Attributes / Thuộc tính Data

Data attributes (`data-*`) lưu trữ custom data riêng cho ứng dụng.

Data attributes (`data-*`) store custom data private to the application.

```html
<!-- Lưu trữ metadata / Store metadata -->
<article data-post-id="12345" 
         data-author="John Doe" 
         data-category="technology"
         data-published="2025-12-23">
    Article content
</article>

<!-- Truy cập qua JavaScript / Access via JavaScript -->
<button data-action="delete" data-item-id="789">
    Xóa / Delete
</button>

<script>
    const button = document.querySelector('button');
    console.log(button.dataset.action);  // "delete"
    console.log(button.dataset.itemId);  // "789"
</script>

<!-- Sử dụng với CSS / Use with CSS -->
<style>
    [data-category="technology"] {
        border-left: 3px solid blue;
    }
</style>
```

### ARIA Attributes / Thuộc tính ARIA

ARIA (Accessible Rich Internet Applications) attributes cải thiện accessibility.

ARIA (Accessible Rich Internet Applications) attributes improve accessibility.

```html
<!-- aria-label: Mô tả cho screen readers -->
<!-- aria-label: Description for screen readers -->
<button aria-label="Đóng cửa sổ / Close dialog">
    <span aria-hidden="true">&times;</span>
</button>

<!-- aria-describedby: Mô tả chi tiết -->
<!-- aria-describedby: Detailed description -->
<input type="password" 
       id="pwd" 
       aria-describedby="pwd-help">
<p id="pwd-help">Mật khẩu ít nhất 8 ký tự / Password must be at least 8 characters</p>

<!-- role: Vai trò của phần tử -->
<!-- role: Role of element -->
<div role="alert">Thông báo quan trọng / Important notification</div>

<!-- aria-live: Dynamic content updates -->
<div aria-live="polite" aria-atomic="true">
    Đang tải... / Loading...
</div>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Cấu hình linh hoạt**: Tùy chỉnh hành vi và giao diện phần tử / Customize element behavior and appearance
- **Accessibility**: ARIA attributes giúp assistive technologies / ARIA attributes help assistive technologies
- **SEO**: Attributes like `alt`, `title` cải thiện SEO / Attributes like `alt`, `title` improve SEO
- **JavaScript integration**: Dễ dàng thao tác DOM / Easy DOM manipulation
- **Data storage**: Data attributes lưu metadata / Data attributes store metadata
- **Styling**: Class và id cho CSS targeting / Class and id for CSS targeting

### Ứng dụng thực tế / Real-world Applications

- **Forms**: Validation với `required`, `pattern`, `maxlength` / Validation with `required`, `pattern`, `maxlength`
- **Images**: SEO và accessibility với `alt`, lazy loading với `loading="lazy"` / SEO and accessibility with `alt`, lazy loading with `loading="lazy"`
- **Links**: Open in new tab với `target="_blank"`, security với `rel="noopener"` / Open in new tab with `target="_blank"`, security with `rel="noopener"`
- **Custom components**: Data attributes cho state management / Data attributes for state management
- **Accessibility**: ARIA attributes cho screen readers / ARIA attributes for screen readers
- **Analytics**: Track user behavior với data attributes / Track user behavior with data attributes

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn dùng quotes cho attribute values / Always use quotes for attribute values
- ✅ **DO**: Sử dụng lowercase cho attribute names / Use lowercase for attribute names
- ✅ **DO**: Thêm `alt` cho mọi `<img>` / Add `alt` to every `<img>`
- ✅ **DO**: Dùng `data-*` cho custom data / Use `data-*` for custom data
- ✅ **DO**: Dùng semantic attributes (`required`, `disabled`) / Use semantic attributes (`required`, `disabled`)
- ✅ **DO**: Validate HTML để kiểm tra attributes / Validate HTML to check attributes
- ❌ **DON'T**: Không duplicate `id` trong cùng trang / Don't duplicate `id` in the same page
- ❌ **DON'T**: Không overuse inline `style` / Don't overuse inline `style`
- ❌ **DON'T**: Không dùng `onclick` và event handlers inline / Don't use `onclick` and inline event handlers

## Tài liệu tham khảo / References

- [MDN - HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- [MDN - Global Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
- [MDN - Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)
