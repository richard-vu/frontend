# Lists / Danh sách HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Links](./html-links.md)  
**➡️ Bài sau / Next:** [Navigation](./html-navigation.md)

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng danh sách và các phương pháp khác để nhóm nội dung trong HTML. Lists giúp tổ chức các mục thông tin có liên quan một cách khoa học và dễ đọc. HTML cung cấp ba loại danh sách chính: ordered lists, unordered lists, và description lists.

This lesson introduces how to use lists and other methods to group content in HTML. Lists help organize related information items scientifically and readably. HTML provides three main types of lists: ordered lists, unordered lists, and description lists.

## Khái niệm chính / Main Concepts

### Unordered Lists / Danh sách không thứ tự

`<ul>` tạo danh sách bullet points. Mỗi item dùng `<li>`.

`<ul>` creates a bulletpoint list. Each item uses `<li>`.

```html
<!-- Danh sách cơ bản / Basic list -->
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<!-- Danh sách lồng / Nested list -->
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend
        <ul>
            <li>Python</li>
            <li>Node.js</li>
        </ul>
    </li>
</ul>
```

### Ordered Lists / Danh sách có thứ tự

`<ol>` tạo danh sách đánh số. Có thể tùy chỉnh kiểu số.

`<ol>` creates a numbered list. Can customize number style.

```html
<!-- Danh sách số / Numbered list -->
<ol>
    <li>Bước 1: Mở file HTML / Step 1: Open HTML file</li>
    <li>Bước 2: Viết code / Step 2: Write code</li>
    <li>Bước 3: Lưu file / Step 3: Save file</li>
</ol>

<!-- Bắt đầu từ số khác / Start from different number -->
<ol start="5">
    <li>Item 5</li>
    <li>Item 6</li>
</ol>

<!-- Kiểu số khác nhau / Different numbering types -->
<ol type="A">  <!-- A, B, C -->
    <li>Item A</li>
</ol>

<ol type="a">  <!-- a, b, c -->
    <li>Item a</li>
</ol>

<ol type="I">  <!-- I, II, III -->
    <li>Item I</li>
</ol>

<ol type="i">  <!-- i, ii, iii -->
    <li>Item i</li>
</ol>

<!-- Đảo ngược thứ tự / Reverse order -->
<ol reversed>
    <li>Third</li>
    <li>Second</li>
    <li>First</li>
</ol>
```

### Description Lists / Danh sách mô tả

`<dl>` tạo danh sách term-description. Dùng `<dt>` cho term và `<dd>` cho description.

`<dl>` creates a term-description list. Use `<dt>` for term and `<dd>` for description.

```html
<!-- Glossary / Bảng thuật ngữ -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - Ngôn ngữ đánh dấu siêu văn bản</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - Bảng mã phong cách xếp tầng</dd>
    
    <dt>JavaScript</dt>
    <dd>Ngôn ngữ lập trình cho web</dd>
    <dd>Programming language for the web</dd>
</dl>

<!-- FAQ -->
<dl>
    <dt>HTML là gì? / What is HTML?</dt>
    <dd>HTML là ngôn ngữ đánh dấu cho web. / HTML is a markup language for the web.</dd>
    
    <dt>Làm sao học HTML? / How to learn HTML?</dt>
    <dd>Thực hành và làm dự án. / Practice and build projects.</dd>
</dl>
```

### Nested Lists / Danh sách lồng ghép

Có thể lồng các loại list khác nhau vào nhau.

Can nest different types of lists within each other.

```html
<ol>
    <li>Phần 1 / Section 1
        <ul>
            <li>Chủ đề A / Topic A</li>
            <li>Chủ đề B / Topic B</li>
        </ul>
    </li>
    <li>Phần 2 / Section 2
        <ol type="a">
            <li>Phần 2a / Section 2a</li>
            <li>Phần 2b / Section 2b</li>
        </ol>
    </li>
</ol>
```

### Styling Lists with CSS / Style danh sách với CSS

```html
<style>
/* Thay đổi bullet style / Change bullet style */
ul.custom {
    list-style-type: square;  /* circle, disc, square, none */
}

/* Custom marker */
ul.check {
    list-style-type: none;
    padding-left: 0;
}

ul.check li::before {
    content: "✓ ";
    color: green;
    font-weight: bold;
}

/* Remove list styling */
ul.no-style {
    list-style: none;
    padding: 0;
}

/* Horizontal list / Danh sách ngang */
ul.horizontal li {
    display: inline-block;
    margin-right: 20px;
}
</style>

<ul class="custom">
    <li>Square bullets</li>
</ul>

<ul class="check">
    <li>Checked item 1</li>
    <li>Checked item 2</li>
</ul>
```

### Lists for Navigation / Danh sách cho điều hướng

Danhsách thường dùng để tạo menus và navigation.

Lists are commonly used to create menus and navigation.

```html
<nav>
    <ul>
        <li><a href="/">Trang chủ / Home</a></li>
        <li><a href="/about">Giới thiệu / About</a></li>
        <li><a href="/services">Dịch vụ / Services</a>
            <ul>
                <li><a href="/services/web">Web Development</a></li>
                <li><a href="/services/mobile">Mobile Apps</a></li>
            </ul>
        </li>
        <li><a href="/contact">Liên hệ / Contact</a></li>
    </ul>
</nav>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Tổ chức thông tin**: Nhóm nội dung liên quan / Group related content
- **Dễ đọc**: Cải thiện readability / Improve readability  
- **SEO**: Cấu trúc rõ ràng tốt cho SEO / Clear structure good for SEO
- **Accessibility**: Screen readers đọc lists hiệu quả / Screen readers read lists effectively
- **Navigation**: Tạo menus và breadcrumbs / Create menus and breadcrumbs

### Ứng dụng thực tế / Real-world Applications

- **Todo lists**: Danh sách công việc / Task lists
- **Navigation menus**: Menu điều hướng / Navigation menus
- **Product features**: Liệt kê tính năng sản phẩm / List product features
- **Step-by-step guides**: Hướng dẫn từng bước / Step-by-step tutorials
- **Glossaries**: Bảng thuật ngữ / Term definitions
- **FAQ sections**: Câu hỏi thường gặp / Frequently asked questions

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `<ul>` cho lists không có thứ tự / Use `<ul>` for unordered lists
- ✅ **DO**: Sử dụng `<ol>` cho steps và rankings / Use `<ol>` for steps and rankings
- ✅ **DO**: Sử dụng `<dl>` cho term-definition pairs / Use `<dl>` for term-definition pairs
- ✅ **DO**: Nest lists đúng cách (li > ul/ol) / Nest lists correctly (li > ul/ol)
- ❌ **DON'T**: Không dùng lists chỉ để tạo layout / Don't use lists only for layout
- ❌ **DON'T**: Không bỏ qua thẻ `<li>` / Don't skip `<li>` tags

## Tài liệu tham khảo / References

- [MDN - HTML Lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [W3C - Lists](https://www.w3.org/TR/html52/grouping-content.html#the-ul-element)
