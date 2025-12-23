# Images / Hình ảnh HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Forms](./html-forms.md)  
**➡️ Bài sau / Next:** [Audio and Video](./html-audio-video.md)

---

## Mô tả / Description

Bài học này cung cấp tổng quan về cách sử dụng hình ảnh trong HTML. Images tăng tính trực quan và thẩm mỹ cho nội dung web, giúp truyền tải thông tin hiệu quả hơn.

This lesson provides an overview of how to use images in HTML. Images increase visual appeal and aesthetics for web content, helping convey information more effectively.

## Khái niệm chính / Main Concepts

### Basic Image / Hình ảnh cơ bản

```html
<!-- Hìnhảnh cơ bản / Basic image -->
<img src="image.jpg" alt="Mô tả hình ảnh / Image description">

<!-- Với kích thước / With dimensions -->
<img src="photo.jpg" alt="Photo" width="400" height="300">
```

### Alt Attribute / Thuộc tính Alt

```html
<!-- Alt cho accessibility và SEO -->
<!-- Alt for accessibility and SEO -->
<img src="logo.png" alt="Company Logo">

<!-- Decorative image (empty alt) -->
<img src="decoration.png" alt="">
```

### Responsive Images / Hình ảnh responsive

```html
<!-- Lazy loading -->
<img src="large-image.jpg" alt="Description" loading="lazy">

<!-- Srcset for different sizes -->
<img src="small.jpg"
     srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
     sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
     alt="Responsive image">
```

### Picture Element / Phần tử Picture

```html
<picture>
    <!-- WebP for modern browsers -->
    <source srcset="image.webp" type="image/webp">
    <!-- JPEG fallback -->
    <source srcset="image.jpg" type="image/jpeg">
    <img src="image.jpg" alt="Image description">
</picture>
```

### Figure and Figcaption / Figure với chú thích

```html
<figure>
    <img src="chart.png" alt="Sales chart">
    <figcaption>
        Hình 1: Biểu đồ doanh thu 2025<br>
        Figure 1: 2025 Revenue Chart
    </figcaption>
</figure>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Visual appeal**: Tăng tính hấp dẫn / Increase appeal
- **Information**: Truyền tải thông tin nhanh / Convey information quickly
- **SEO**: Alt text cải thiện SEO / Alt text improves SEO
- **Branding**: Logos, graphics / Logos, graphics

### Ứng dụng thực tế / Real-world Applications

- **Product images**: Hình sản phẩm e-commerce / E-commerce product images
- **Blog posts**: Hình minh họa bài viết / Article illustrations
- **Galleries**: Thư viện hình ảnh / Image galleries
- **Logos**: Branding / Branding
- **Icons**: UI elements / UI elements

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn thêm `alt` attribute / Always add `alt` attribute
- ✅ **DO**: Optimize image size / Optimize image size
- ✅ **DO**: Use lazy loading / Use lazy loading
- ❌ **DON'T**: Không dùng images cho text / Don't use images for text

## Tài liệu tham khảo / References

- [MDN - Images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [W3C - Images](https://www.w3.org/TR/html52/semantics-embedded-content.html#the-img-element)
