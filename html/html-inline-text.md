# Other Inline Text Elements / Các phần tử văn bản nội dòng khác

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Focus](./html-focus.md)  
**➡️ Bài sau / Next:** [Details and Summary](./html-details-summary.md)

---

## Mô tả / Description

Bài học này giới thiệu các phần tử khác dùng để đánh dấu văn bản nội dòng (inline elements). Các thẻ này bổ sung ngữ nghĩa chi tiết cho các đoạn văn bản nhỏ, giúp làm rõ ý nghĩa và mục đích của nội dung.

This lesson introduces other elements used to mark up inline text. These tags add detailed semantics to small text segments, helping clarify the meaning and purpose of content.

## Khái niệm chính / Main Concepts

### Abbreviation / Viết tắt

```html
<p>
    <abbr title="HyperText Markup Language">HTML</abbr> và 
    <abbr title="Cascading Style Sheets">CSS</abbr>
</p>
```

### Citation / Trích dẫn tác phẩm

```html
<p>Đọc thêm trong <cite>HTML5 Specification</cite>.</p>
<p>Read more in <cite>The HTML5 Specification</cite>.</p>
```

### Definition / Định nghĩa

```html
<p>
    <dfn>HTML</dfn> là ngôn ngữ đánh dấu siêu văn bản.<br>
    <dfn>HTML</dfn> is HyperText Markup Language.
</p>
```

### Ruby Annotation / Chú thích Ruby (cho tiếng Nhật, Trung)

```html
<ruby>
    漢字 <rp>(</rp><rt>かんじ</rt><rp>)</rp>
</ruby>

<ruby>
    明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
</ruby>
```

### Bidirectional Text / Văn bản hai chiều

```html
<!-- bdi: Isolate text direction -->
<p>User <bdi>مرحبا</bdi> from Egypt</p>

<!-- bdo: Override text direction -->
<bdo dir="rtl">This text will be right-to-left</bdo>
```

### Word Break Opportunity / Cơ hội ngắt từ

```html
<p>
    supercali<wbr>fragilistic<wbr>expialidocious
</p>

<p>
    https://www<wbr>.example<wbr>.com/very/long/url
</p>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Semantic meaning**: Thêm ý nghĩa ngữ nghĩa / Add semantic meaning
- **Accessibility**: Screen readers hiểu rõ hơn / Screen readers understand better
- **Internationalization**: Hỗ trợ đa ngôn ngữ / Multi-language support
- **Typography**: Kiểm soát typography / Control typography

### Ứng dụng thực tế / Real-world Applications

- **Technical documentation**: Abbreviations và definitions / Abbreviations and definitions
- **Multi-language sites**: Ruby annotations / Ruby annotations
- **Academic content**: Citations / Citations
- **Long URLs**: Word break opportunities / Word break opportunities

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `title` cho `<abbr>` / Use `title` for `<abbr>`
- ✅ **DO**: Dùng semantic tags / Use semantic tags
- ✅ **DO**: Consider accessibility / Consider accessibility

## Tài liệu tham khảo / References

- [MDN - Inline Text Semantics]https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics)
