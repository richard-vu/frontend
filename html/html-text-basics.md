# Text Basics / Định dạng văn bản cơ bản

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước**/ Previous:** [Attributes](./html-attributes.md)  
**➡️ Bài sau / Next:** [Links](./html-links.md)

---

## Mô tả / Description

Bài học này hướng dẫn cách định dạng văn bản bằng ngôn ngữ HTML. Bạn sẽ học về các thẻ để tạo đoạn văn, in đậm, in nghiêng, gạch chân, và nhiều định dạng khác. Việc sử dụng đúng các thẻ văn bản giúp trình bày nội dung chữ viết một cách có cấu trúc và có ý nghĩa trên web.

This lesson teaches how to format text using HTML. You'll learn about tags for creating paragraphs, bold, italic, underline, and many other formats. Using correct text tags helps present written content in a structured and meaningful way on the web.

## Khái niệm chính / Main Concepts

### Paragraphs / Đoạn văn

Thẻ `<p>` định nghĩa đoạn văn. Trình duyệt tự động thêm khoảng trống trước và sau mỗi đoạn văn.

The `<p>` tag defines a paragraph. Browsers automatically add space before and after each paragraph.

```html
<p>Đây là đoạn văn đầu tiên. / This is the first paragraph.</p>
<p>Đây là đoạn văn thứ hai. / This is the second paragraph.</p>
```

### Line Breaks / Ngắt dòng

Thẻ `<br>` tạo ngắt dòng (line break) trong văn bản.

The `<br>` tag creates a line break in text.

```html
<p>
    Dòng thứ nhất<br>
    Dòng thứ hai<br>
    Dòng thứ ba
</p>

<!-- Địa chỉ / Address -->
<address>
    123 Đường ABC<br>
    Quận 1, TP.HCM<br>
    Việt Nam
</address>
```

### Bold and Strong / In đậm và Nhấn mạnh mạnh

`<b>` in đậm không có ý nghĩa. `<strong>` in đậm với ý nghĩa quan trọng.

`<b>` bolds without meaning. `<strong>` bolds with importance meaning.

```html
<!-- Chỉ in đậm / Just bold -->
<p>Text bình thường và <b>text in đậm</b>.</p>

<!-- In đậm với ý nghĩa quan trọng / Bold with importance -->
<p>Cảnh báo: <strong>Không được hút thuốc!</strong></p>
<p>Warning: <strong>No smoking!</strong></p>
```

### Italic and Emphasis / In nghiêng và Nhấn mạnh

`<i>` in nghiêng không có ý nghĩa. `<em>` in nghiêng với ý nghĩa nhấn mạnh.

`<i>` italicizes without meaning. `<em>` italicizes with emphasis meaning.

```html
<!-- Chỉ in nghiêng (thuật ngữ, tên riêng) -->
<!-- Just italic (terms, proper names) -->
<p>Tôi đang đọc <i>Harry Potter</i>.</p>
<p>I'm reading <i>Harry Potter</i>.</p>

<!-- In nghiêng với ý nghĩa nhấn mạnh -->
<!-- Italic with emphasis -->
<p>Bạn <em>phải</em> hoàn thành bài tập!</p>
<p>You <em>must</em> complete the homework!</p>
```

### Mark and Highlight / Đánh  dấu

Thẻ `<mark>` đánh dấu hoặc highlight văn bản.

The `<mark>` tag marks or highlights text.

```html
<p>
    Tìm kiếm: "HTML"<br>
    Kết quả: Học <mark>HTML</mark> cơ bản với <mark>HTML</mark>5
</p>
```

### Small, Subscript, Superscript / Chữ nhỏ, Chỉ số dưới, Chỉ số trên

```html
<!-- Small text / Chữ nhỏ -->
<p>Giá: 100.000đ <small>(Đã bao gồm VAT)</small></p>
<p>Price: $100 <small>(VAT included)</small></p>

<!-- Subscript / Chỉ số dưới -->
<p>Công thức hóa học: H<sub>2</sub>O</p>
<p>Chemical formula: H<sub>2</sub>O</p>

<!-- Superscript / Chỉ số trên -->
<p>Diện tích: 100m<sup>2</sup></p>
<p>Area: 100m<sup>2</sup></p>
<p>E = mc<sup>2</sup></p>
```

### Inserted and Deleted Text / Văn bản chèn thêm và xóa

`<ins>` hiển thị nội dung được chèn thêm. `<del>` hiển thị nội dung bị xóa.

`<ins>` displays inserted content. `<del>` displays deleted content.

```html
<!-- Track changes / Theo dõi thay đổi -->
<p>
    Giá cũ: <del>200.000đ</del><br>
    Giá mới: <ins>150.000đ</ins>
</p>

<p>
    Old price: <del>$200</del><br>
    New price: <ins>$150</ins>
</p>
```

### Code, Keyboard, Sample Output / Mã code, Bàn phím, Output mẫu

```html
<!-- Code / Mã code -->
<p>Sử dụng hàm <code>console.log()</code> để debug.</p>
<p>Use <code>console.log()</code> function to debug.</p>

<!-- Keyboard input / Phím bàn phím -->
<p>Nhấn <kbd>Ctrl</kbd> + <kbd>C</kbd> để copy.</p>
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>

<!-- Sample output / Output mẫu -->
<p>Kết quả: <samp>Hello World</samp></p>
<p>Output: <samp>Hello World</samp></p>

<!-- Variable / Biến -->
<p>Công thức: <var>a</var> + <var>b</var> = <var>c</var></p>
```

### Quotations / Trích dẫn

```html
<!-- Blockquote: Trích dẫn dài / Long quotation -->
<blockquote cite="https://example.com">
    <p>
        "Học, học nữa, học mãi."<br>
        "Learn, learn more, learn forever."
    </p>
    <footer>— V.I. Lenin</footer>
</blockquote>

<!-- Inline quote / Trích dẫn ngắn -->
<p>Einstein nói: <q>Imagination is more important than knowledge.</q></p>

<!-- Citation / Trích dẫn tác phẩm -->
<p>Đọc thêm trong <cite>HTML5 Specification</cite>.</p>
```

### Abbreviations and Definitions / Viết tắt và Định nghĩa

```html
<!-- Abbreviation / Viết tắt -->
<p>
    <abbr title="HyperText Markup Language">HTML</abbr> và 
    <abbr title="Cascading Style Sheets">CSS</abbr>
</p>

<!-- Definition / Định nghĩa -->
<p>
    <dfn>HTML</dfn> là ngôn ngữ đánh dấu cho web.
</p>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Cấu trúc rõ ràng**: Tổ chức văn bản có ý nghĩa / Organize text meaningfully
- **SEO**: Sử dụng semantic tags cải thiện SEO / Using semantic tags improves SEO
- **Accessibility**: Screen readers hiểu được ý nghĩa / Screen readers understand meaning
- **Styling**: Dễ dàng style với CSS / Easy to style with CSS
- **Maintainability**: Code dễ đọc và bảo trì / Code is easy to read and maintain

### Ứng dụng thực tế / Real-world Applications

- **Blog và bài viết**: Format nội dung chuyên nghiệp / Format content professionally
- **Documentation**: Hiển thị code và commands / Display code and commands
- **E-commerce**: Hiển thị giá cũ, giá mới / Display old price, new price
- **Legal documents**: Track changes với `<ins>` và `<del>` / Track changes with `<ins>` and `<del>`
- **Academic content**: Công thức, trích dẫn / Formulas, quotations

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Dùng `<strong>` và `<em>` thay vì `<b>` và `<i>` / Use `<strong>` and `<em>` instead of `<b>` and `<i>`
- ✅ **DO**: Dùng `<code>` cho code snippets / Use `<code>` for code snippets
- ✅ **DO**: Thêm `title` cho `<abbr>` / Add `title` to `<abbr>`
- ❌ **DON'T**: Không dùng `<br>` để tạo khoảng trống / Don't use `<br>` to create spacing

## Tài liệu tham khảo / References

- [MDN - HTML Text Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [W3C - Text-level semantics](https://www.w3.org/TR/html52/textlevel-semantics.html)
