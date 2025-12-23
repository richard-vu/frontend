# Details and Summary / Chi tiết và Tóm tắt

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Other Inline Text Elements](./html-inline-text.md)  
**➡️ Bài sau / Next:** [Dialog](./html-dialog.md)

---

## Mô tả / Description

Bài học này giới thiệu cách hoạt động và trường hợp sử dụng các phần tử details và summary. Chúng tạo nội dung có thể đóng/mở (disclosure widget) để tiết kiệm không gian hiển thị và cải thiện user experience.

This lesson introduces how details and summary elements work and their use cases. They create collapsible disclosure widgets to save display space and improve user experience.

## Khái niệm chính / Main Concepts

### Basic Details / Details cơ bản

```html
<details>
    <summary>Nhấp để mở / Click to open</summary>
    <p>Nội dung ẩn / Hidden content</p>
</details>
```

### Open by Default / Mở mặc định

```html
<details open>
    <summary>Đã mở sẵn / Already open</summary>
    <p>Nội dung hiển thị / Visible content</p>
</details>
```

### FAQ Example / Ví dụ FAQ

```html
<details>
    <summary>HTML là gì? / What is HTML?</summary>
    <p>
        HTML là ngôn ngữ đánh dấu siêu văn bản.<br>
        HTML is HyperText Markup Language.
    </p>
</details>

<details>
    <summary>CSS là gì? / What is CSS?</summary>
    <p>
        CSS là bảng mã phong cách xếp tầng.<br>
        CSS is Cascading Style Sheets.
    </p>
</details>
```

### Nested Details / Details lồng nhau

```html
<details>
    <summary>Chương 1 / Chapter 1</summary>
    <p>Nội dung chương 1 / Chapter 1 content</p>
    
    <details>
        <summary>Phần 1.1 / Section 1.1</summary>
        <p>Nội dung phần 1.1 / Section 1.1 content</p>
    </details>
</details>
```

### Styling Details / Style Details

```html
<style>
details {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
}

summary {
    cursor: pointer;
    font-weight: bold;
    padding: 5px;
}

summary:hover {
    background: #f0f0f0;
}

details[open] summary {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
}
</style>

<details>
    <summary>Styled Details</summary>
    <p>Content with custom styling</p>
</details>
```

### JavaScript Integration / Tích hợp JavaScript

```html
<details id="myDetails">
    <summary>Interactive Details</summary>
    <p>Content</p>
</details>

<script>
const details = document.getElementById('myDetails');

details.addEventListener('toggle', () => {
    if (details.open) {
        console.log('Opened / Đã mở');
    } else {
        console.log('Closed / Đã đóng');
    }
});
</script>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Space saving**: Tiết kiệm không gian / Save space
- **Progressive disclosure**: Hiển thị thông tin dần dần / Progressive information disclosure
- **No JavaScript**: Không cần JavaScript / No JavaScript needed
- **Accessible**: Accessible by default / Accessible by default

### Ứng dụng thực tế / Real-world Applications

- **FAQ sections**: Câu hỏi thường gặp / Frequently asked questions
- **Accordions**: Nội dung accordion / Accordion content
- **Documentation**: Tài liệu kỹ thuật / Technical documentation
- **Mobile menus**: Menu responsive / Responsive menus

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng semantic `<summary>` / Use semantic `<summary>`
- ✅ **DO**: Add clear summary text / Add clear summary text
- ✅ **DO**: Consider keyboard navigation / Consider keyboard navigation
- ❌ **DON'T**: Không lồng quá nhiều levels / Don't nest too many levels

## Tài liệu tham khảo / References

- [MDN - details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
- [MDN - summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
