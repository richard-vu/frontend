# Metadata / Siêu dữ liệu HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Document Structure](./html-document-structure.md)  
**➡️ Bài sau / Next:** [Semantic HTML](./html-semantic.md)

---

## Mô tả / Description

Bài học này hướng dẫn cách sử dụng các thẻ meta để cung cấp thông tin về tài liệu HTML. Metadata không hiển thị trực tiếp trên trang nhưng cung cấp thông tin quan trọng cho trình duyệt, công cụ tìm kiếm và các dịch vụ web khác. Hiểu và sử dụng đúng metadata giúp cải thiện SEO, khả năng chia sẻ trên mạng xã hội và trải nghiệm người dùng.

This lesson teaches how to use meta tags to provide information about the HTML document. Metadata is not directly displayed on the page but provides important information to browsers, search engines, and other web services. Understanding and using metadata correctly helps improve SEO, social media sharing, and user experience.

## Khái niệm chính / Main Concepts

### Character Encoding / Mã hóa ký tự

Thẻ meta charset xác định bộ mã ký tự cho tài liệu HTML. UTF-8 là tiêu chuẩn được khuyến nghị vì hỗ trợ hầu hết các ngôn ngữ trên thế giới.

The meta charset tag specifies the character encoding for the HTML document. UTF-8 is the recommended standard as it supports most languages worldwide.

```html
<head>
    <!-- Luôn đặt đầu tiên trong <head> -->
    <!-- Always place first in <head> -->
    <meta charset="UTF-8">
</head>
```

### Viewport Meta Tag / Thẻ Meta Viewport

Viewport meta tag kiểm soát cách trang web hiển thị trên thiết bị di động, rất quan trọng cho responsive design.

The viewport meta tag controls how the web page displays on mobile devices, essential for responsive design.

```html
<head>
    <!-- Responsive design cơ bản / Basic responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Tùy chọn nâng cao / Advanced options -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
</head>
```

### SEO Meta Tags / Thẻ Meta SEO

Các thẻ meta này giúp công cụ tìm kiếm hiểu và index trang web tốt hơn.

These meta tags help search engines understand and index the web page better.

```html
<head>
    <!-- Mô tả trang (hiển thị trong kết quả tìm kiếm) -->
    <!-- Page description (displays in search results) -->
    <meta name="description" content="Học HTML từ cơ bản đến nâng cao với các ví dụ thực tế">
    
    <!-- Từ khóa (ít quan trọng hiện nay) -->
    <!-- Keywords (less important nowadays) -->
    <meta name="keywords" content="HTML, web development, tutorial, học lập trình">
    
    <!-- Tác giả / Author -->
    <meta name="author" content="Nguyễn Văn A">
    
    <!-- Robots (điều khiển indexing) -->
    <!-- Robots (controls indexing) -->
    <meta name="robots" content="index, follow">
</head>
```

### Open Graph Meta Tags / Thẻ Meta Open Graph

Open Graph tags kiểm soát cách nội dung hiển thị khi được chia sẻ trên Facebook, LinkedIn và các mạng xã hội khác.

Open Graph tags control how content appears when shared on Facebook, LinkedIn, and other social networks.

```html
<head>
    <!-- Tiêu đề khi chia sẻ / Share title -->
    <meta property="og:title" content="Học HTML cơ bản">
    
    <!-- Mô tả khi chia sẻ / Share description -->
    <meta property="og:description" content="Khóa học HTML từ cơ bản đến nâng cao">
    
    <!-- Hình ảnh khi chia sẻ / Share image -->
    <meta property="og:image" content="https://example.com/image.jpg">
    
    <!-- URL trang / Page URL -->
    <meta property="og:url" content="https://example.com/course">
    
    <!-- Loại nội dung / Content type -->
    <meta property="og:type" content="website">
    
    <!-- Ngôn ngữ / Language -->
    <meta property="og:locale" content="vi_VN">
</head>
```

### Twitter Card Meta Tags / Thẻ Meta Twitter Card

Twitter Card tags tùy chỉnh cách nội dung hiển thị trên Twitter/X.

Twitter Card tags customize how content appears on Twitter/X.

```html
<head>
    <!-- Loại card / Card type -->
    <meta name="twitter:card" content="summary_large_image">
    
    <!-- Tài khoản Twitter / Twitter account -->
    <meta name="twitter:site" content="@username">
    
    <!-- Tiêu đề / Title -->
    <meta name="twitter:title" content="Học HTML cơ bản">
    
    <!-- Mô tả / Description -->
    <meta name="twitter:description" content="Khóa học HTML từ cơ bản đến nâng cao">
    
    <!-- Hình ảnh / Image -->
    <meta name="twitter:image" content="https://example.com/image.jpg">
</head>
```

### Other Important Meta Tags / Các thẻ Meta quan trọng khác

Một số thẻ meta hữu ích khác cho các mục đích cụ thể.

Some other useful meta tags for specific purposes.

```html
<head>
    <!-- Làm mới trang tự động (ít dùng) -->
    <!-- Auto-refresh page (rarely used) -->
    <meta http-equiv="refresh" content="30">
    
    <!-- Tương thích IE / IE compatibility -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Theme color cho mobile browser -->
    <!-- Theme color for mobile browser -->
    <meta name="theme-color" content="#4285f4">
    
    <!-- Apple Web App -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="App Name">
    
    <!-- Ngăn chặn phone number detection -->
    <!-- Prevent phone number detection -->
    <meta name="format-detection" content="telephone=no">
</head>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **SEO tối ưu**: Cải thiện thứ hạng trên công cụ tìm kiếm / Improves search engine rankings
- **Social media sharing**: Kiểm soát cách hiển thị khi chia sẻ trên mạng xã hội / Controls appearance when shared on social media
- **Responsive design**: Đảm bảo hiển thị tốt trên mọi thiết bị / Ensures good display on all devices
- **Trải nghiệm người dùng**: Cải thiện tốc độ tải và hiển thị / Improves loading speed and display
- **Accessibility**: Hỗ trợ công nghệ hỗ trợ / Supports assistive technologies
- **Analytics**: Giúp công cụ phân tích hiểu trang web tốt hơn / Helps analytics tools understand the website better

### Ứng dụng thực tế / Real-world Applications

- **Website doanh nghiệp**: Tối ưu SEO cho trang công ty / Optimize SEO for company pages
- **Blog và tin tức**: Tối ưu chia sẻ bài viết trên social media / Optimize article sharing on social media
- **E-commerce**: Hiển thị sản phẩm đẹp khi chia sẻ / Display products beautifully when shared
- **Landing pages**: Tăng conversion rate với metadata tốt / Increase conversion rate with good metadata
- **Portfolio**: Tạo ấn tượng khi chia sẻ CV online / Create impression when sharing online CV
- **Web applications**: Cải thiện UX trên mobile / Improve UX on mobile

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn đặt charset UTF-8 đầu tiên trong `<head>` / Always place UTF-8 charset first in `<head>`
- ✅ **DO**: Sử dụng viewport meta tag cho mọi trang web / Use viewport meta tag for all websites
- ✅ **DO**: Viết description ngắn gọn (150-160 ký tự) / Write concise description (150-160 characters)
- ✅ **DO**: Sử dụng hình ảnh chất lượng cao cho OG image (1200x630px) / Use high-quality images for OG image (1200x630px)
- ✅ **DO**: Test metadata với Facebook Debugger và Twitter Card Validator / Test metadata with Facebook Debugger and Twitter Card Validator
- ❌ **DON'T**: Không spam keywords / Don't spam keywords
- ❌ **DON'T**: Không duplicate content trong description / Don't duplicate content in description
- ❌ **DON'T**: Không bỏ qua viewport tag trên trang responsive / Don't skip viewport tag on responsive pages

## Tài liệu tham khảo / References

- [MDN - Meta Tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
