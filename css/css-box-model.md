# Box Model / Mô hình hộp CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Welcome to Learn CSS!](./css-introduction.md)  
**➡️ Bài sau / Next:** [Selectors](./css-selectors.md)

---

## Mô tả / Description

Bài học này giới thiệu về CSS Box Model - mô hình hộp là nền tảng cốt lõi của cách trình duyệt hiển thị và bố trí các phần tử HTML. Bạn sẽ học về bốn thành phần chính: content, padding, border và margin, cũng như cách chúng ảnh hưởng đến kích thước và vị trí của phần tử. Hiểu rõ Box Model là điều thiết yếu để làm chủ CSS layout.

This lesson introduces the CSS Box Model - the box model is the core foundation of how browsers display and lay out HTML elements. You will learn about the four main components: content, padding, border, and margin, as well as how they affect the size and position of elements. Understanding the Box Model is essential to mastering CSS layout.

## Khái niệm chính / Main Concepts

### The Box Model / Mô hình hộp

Mọi phần tử HTML được xem như một hộp chữ nhật. Box Model mô tả cách các lớp khác nhau (content, padding, border, margin) được sắp xếp từ trong ra ngoài.

Every HTML element is treated as a rectangular box. The Box Model describes how different layers (content, padding, border, margin) are arranged from inside to outside.

```css
/* Ví dụ cơ bản về box model / Basic box model example */
.box {
    /* Nội dung / Content */
    width: 300px;
    height: 200px;
    
    /* Padding - Khoảng cách bên trong / Inner spacing */
    padding: 20px;
    
    /* Border - Đường viền / Border */
    border: 5px solid #333;
    
    /* Margin - Khoảng cách bên ngoài / Outer spacing */
    margin: 10px;
    
    background-color: lightblue;
}
```

```html
<div class="box">
    This is the content area
</div>
```

> [!NOTE]
> **Tổng chiều rộng thực tế / Total actual width:**  
> 300px (content) + 20px (padding-left) + 20px (padding-right) + 5px (border-left) + 5px (border-right) = **350px**
> 
> **Tổng chiều cao thực tế / Total actual height:**  
> 200px (content) + 20px (padding-top) + 20px (padding-bottom) + 5px (border-top) + 5px (border-bottom) = **250px**

### Content Area / Vùng nội dung

Content area là vùng chứa nội dung thực tế như văn bản, hình ảnh, hoặc các phần tử con. Kích thước được xác định bởi thuộc tính `width` và `height`.

The content area is the region that contains actual content like text, images, or child elements. Size is determined by the `width` and `height` properties.

```css
/* Thiết lập kích thước content / Setting content size */
.content-box {
    /* Chiều rộng nội dung / Content width */
    width: 400px;
    
    /* Chiều cao nội dung / Content height */
    height: 300px;
    
    /* Chiều rộng/cao tối thiểu / Minimum width/height */
    min-width: 200px;
    min-height: 150px;
    
    /* Chiều rộng/cao tối đa / Maximum width/height */
    max-width: 800px;
    max-height: 600px;
    
    background-color: #f0f0f0;
}
```

### Padding / Khoảng đệm

Padding là khoảng cách giữa nội dung và border. Padding tạo không gian bên trong phần tử và có cùng màu nền với phần tử.

Padding is the space between content and border. Padding creates space inside the element and has the same background color as the element.

```css
/* Cách khác nhau để thiết lập padding / Different ways to set padding */

/* Cách 1: Padding cho tất cả bốn phía / All four sides */
.box1 {
    padding: 20px;
}

/* Cách 2: Padding dọc và ngang / Vertical and horizontal */
.box2 {
    padding: 20px 40px; /* top/bottom left/right */
}

/* Cách 3: Padding từng phía riêng / Each side separately */
.box3 {
    padding: 10px 20px 30px 40px; /* top right bottom left (clockwise) */
}

/* Cách 4: Padding từng phía cụ thể / Specific sides */
.box4 {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
}

/* Ví dụ thực tế / Practical example */
.card {
    width: 300px;
    padding: 25px; /* Tạo khoảng cách đều xung quanh nội dung / Even spacing around content */
    background-color: white;
    border: 1px solid #ddd;
}
```

### Border / Đường viền

Border là đường viền bao quanh padding và content. Border có ba thuộc tính chính: width (độ dày), style (kiểu), và color (màu).

Border is the outline that surrounds padding and content. Border has three main properties: width (thickness), style (type), and color.

```css
/* Các thuộc tính border / Border properties */

/* Border cơ bản / Basic border */
.bordered-box {
    border: 2px solid black;
    /* border: width style color */
}

/* Border từng phía / Individual borders */
.custom-border {
    border-top: 3px solid red;
    border-right: 2px dashed blue;
    border-bottom: 1px dotted green;
    border-left: 4px double orange;
}

/* Các kiểu border / Border styles */
.border-styles {
    /* solid - Liền / Solid line */
    border-top: 2px solid black;
    
    /* dashed - Gạch đứt / Dashed line */
    border-right: 2px dashed black;
    
    /* dotted - Chấm / Dotted line */
    border-bottom: 2px dotted black;
    
    /* double - Đường đôi / Double line */
    border-left: 3px double black;
}

/* Border radius - Bo góc / Rounded corners */
.rounded-box {
    width: 200px;
    height: 200px;
    border: 2px solid #667eea;
    border-radius: 10px; /* Bo tất cả các góc / Round all corners */
}

.circle {
    width: 100px;
    height: 100px;
    border: 2px solid #764ba2;
    border-radius: 50%; /* Tạo hình tròn / Create circle */
}
```

### Margin / Lề

Margin là khoảng cách bên ngoài border, tạo khoảng cách giữa phần tử với các phần tử khác. Margin không có màu nền và luôn trong suốt.

Margin is the space outside the border, creating distance between the element and other elements. Margin has no background color and is always transparent.

```css
/* Các cách thiết lập margin / Ways to set margin */

/* Margin cho tất cả bốn phía / All four sides */
.box1 {
    margin: 20px;
}

/* Margin dọc và ngang / Vertical and horizontal */
.box2 {
    margin: 20px 40px; /* top/bottom left/right */
}

/* Margin từng phía / Each side */
.box3 {
    margin-top: 10px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-left: 40px;
}

/* Căn giữa phần tử / Center element */
.centered {
    width: 600px;
    margin: 0 auto; /* Căn giữa theo chiều ngang / Center horizontally */
}

/* Margin âm / Negative margin */
.overlap {
    margin-top: -20px; /* Kéo phần tử lên trên / Pull element up */
}

/* Margin collapsing - Gộp margin dọc / Vertical margin collapsing */
.box-top {
    margin-bottom: 30px;
}

.box-bottom {
    margin-top: 20px;
}
/* Khoảng cách thực tế giữa hai box: 30px (không phải 50px) */
/* Actual space between boxes: 30px (not 50px) */
```

### Box-Sizing / Tính toán kích thước hộp

Thuộc tính `box-sizing` xác định cách tính toán width và height của phần tử. Giá trị `border-box` rất hữu ích vì nó tính cả padding và border vào width/height.

The `box-sizing` property determines how width and height of an element are calculated. The `border-box` value is very useful because it includes padding and border in width/height.

```css
/* content-box (mặc định) / content-box (default) */
.content-box {
    box-sizing: content-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Tổng chiều rộng / Total width: 300 + 40 + 10 = 350px */
}

/* border-box (khuyến khích) / border-box (recommended) */
.border-box {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    /* Tổng chiều rộng / Total width: 300px (padding và border được tính vào) */
    /* Total width: 300px (padding and border included) */
}

/* Best practice: Áp dụng cho tất cả elements / Apply to all elements */
* {
    box-sizing: border-box;
}

/* Hoặc / Or */
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

> [!IMPORTANT]
> **Best Practice**: Nên sử dụng `box-sizing: border-box` để làm việc với kích thước dễ dàng hơn.
> 
> **Best Practice**: Use `box-sizing: border-box` to work with sizes more easily.

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Precise layout control**: Kiểm soát chính xác kích thước và vị trí phần tử / Precise control over element size and position
- **Consistent spacing**: Tạo khoảng cách nhất quán trong design / Create consistent spacing in design
- **Responsive design**: Nền tảng cho layouts responsive / Foundation for responsive layouts
- **Visual hierarchy**: Tạo thứ bậc trực quan với spacing / Create visual hierarchy with spacing
- **Easy debugging**: Dễ dàng debug layout issues / Easy to debug layout issues
- **Predictable behavior**: Hiểu cách elements được render / Understand how elements are rendered

### Ứng dụng thực tế / Real-world Applications
- **Card components**: Tạo cards với padding và margins đều / Create cards with even padding and margins
- **Button styling**: Design buttons với padding phù hợp / Design buttons with appropriate padding
- **Container layouts**: Thiết lập containers với width và spacing / Set up containers with width and spacing
- **Spacing systems**: Xây dựng hệ thống spacing nhất quán / Build consistent spacing systems
- **Grid layouts**: Tạo grids với gap control / Create grids with gap control
- **Form elements**: Style inputs và forms với proper spacing / Style inputs and forms with proper spacing

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `box-sizing: border-box` globally / Use `box-sizing: border-box` globally
- ✅ **DO**: Sử dụng margin cho khoảng cách bên ngoài / Use margin for external spacing
- ✅ **DO**: Sử dụng padding cho khoảng cách bên trong / Use padding for internal spacing
- ✅ **DO**: Sử dụng DevTools để visualize box model / Use DevTools to visualize box model
- ✅ **DO**: Giữ cho spacing values nhất quán (8px, 16px, 24px...) / Keep spacing values consistent
- ❌ **DON'T**: Không mix margin và padding một cách tùy tiện / Don't mix margin and padding arbitrarily
- ❌ **DON'T**: Không dùng quá nhiều negative margins / Don't use too many negative margins
- ❌ **DON'T**: Không quên tính padding/border vào total width / Don't forget to account for padding/border in total width

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Box Model Demo</title>
    <link rel="stylesheet" href="box-model.css">
</head>
<body>
    <!-- Container / Khung chứa -->
    <div class="container">
        <!-- Card với box model rõ ràng / Card with clear box model -->
        <div class="card">
            <div class="card-header">
                <h2>Understanding Box Model</h2>
            </div>
            <div class="card-body">
                <p>This card demonstrates the CSS Box Model with content, padding, border, and margin.</p>
                <button class="btn">Click Me</button>
            </div>
        </div>
        
        <!-- Card thứ hai / Second card -->
        <div class="card">
            <div class="card-header">
                <h2>Box Sizing: Border Box</h2>
            </div>
            <div class="card-body">
                <p>Using border-box makes width calculations much easier!</p>
                <button class="btn btn-secondary">Learn More</button>
            </div>
        </div>
    </div>
</body>
</html>
```

```css
/* File: box-model.css */

/* Reset và box-sizing cho tất cả / Reset and box-sizing for all */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 40px 20px;
}

/* Container / Khung chứa chính */
.container {
    max-width: 1200px;
    margin: 0 auto; /* Căn giữa / Center */
    display: flex;
    gap: 30px; /* Khoảng cách giữa cards / Gap between cards */
    flex-wrap: wrap;
}

/* Card styling - Minh họa box model / Card styling - Box model illustration */
.card {
    /* Content width - với border-box, đây là total width */
    /* Content width - with border-box, this is total width */
    width: calc(50% - 15px);
    min-width: 300px;
    
    /* Border - Đường viền */
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    
    /* Background */
    background: white;
    
    /* Box shadow để tạo depth / Box shadow for depth */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    
    /* Margin bên ngoài / Outer margin */
    margin-bottom: 20px;
    
    /* Transition cho hover effect */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

/* Card header */
.card-header {
    /* Padding bên trong / Inner padding */
    padding: 25px;
    
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 12px 12px 0 0;
}

.card-header h2 {
    font-size: 1.5rem;
    font-weight: 600;
}

/* Card body */
.card-body {
    /* Padding tạo khoảng cách đều / Padding for even spacing */
    padding: 30px 25px;
}

.card-body p {
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px; /* Margin dưới paragraph / Bottom margin */
}

/* Button styling */
.btn {
    /* Padding làm button lớn hơn / Padding makes button larger */
    padding: 12px 30px;
    
    /* Border */
    border: 2px solid #667eea;
    border-radius: 8px;
    
    /* Styling */
    background: #667eea;
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    
    /* Margin để tách khỏi phần tử khác / Margin to separate from other elements */
    margin-top: 10px;
    
    transition: all 0.3s ease;
}

.btn:hover {
    background: #5568d3;
    border-color: #5568d3;
    transform: scale(1.05);
}

.btn-secondary {
    background: white;
    color: #667eea;
}

.btn-secondary:hover {
    background: #f0f0f0;
}

/* Responsive / Đáp ứng */
@media (max-width: 768px) {
    .card {
        width: 100%;
    }
    
    .container {
        gap: 20px;
    }
}
```

## Tài liệu tham khảo / References

- [MDN - CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)
- [MDN - box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [CSS-Tricks - The CSS Box Model](https://css-tricks.com/the-css-box-model/)
- [W3C - CSS Box Model Specification](https://www.w3.org/TR/css-box-3/)
