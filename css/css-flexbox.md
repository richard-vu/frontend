# Flexbox / Bố cục Flexbox

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Layout](./css-layout.md)  
**➡️ Bài sau / Next:** [Grid](./css-grid.md)

---

## Mô tả / Description

Bài học này đi sâu vào Flexbox - một mô hình layout mạnh mẽ được thiết kế để phân bố không gian giữa các items trong interface và căn chỉnh chúng. Bạn sẽ học về hai trục chính (Main Axis và Cross Axis), các thuộc tính cho container và items, và cách xây dựng các layouts linh hoạt một chiều (row hoặc column) mà không cần dùng float hay positioning phức tạp. Flexbox là công cụ thiết yếu cho modern web design.

This lesson dives into Flexbox - a powerful layout model designed to distribute space between items in an interface and align them. You will learn about the two main axes (Main Axis and Cross Axis), properties for container and items, and how to build flexible one-dimensional layouts (row or column) without using float or complex positioning. Flexbox is an essential tool for modern web design.

## Khái niệm chính / Main Concepts

### Flex Container & Items / Container và Items Flex

Để sử dụng Flexbox, bạn cần thiết lập `display: flex` cho phần tử cha (container). Các phần tử con trực tiếp sẽ tự động trở thành flex items.

To use Flexbox, you need to set `display: flex` on the parent element (container). Direct child elements automatically become flex items.

```css
/* Flex Container */
.container {
    display: flex; /* Hoặc inline-flex */
    background-color: #f0f0f0;
}

/* Flex Items */
.item {
    background-color: #3498db;
    color: white;
    padding: 20px;
    margin: 10px;
}
```

```html
<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>
```

### Main Axis & Cross Axis / Trục chính và Trục phụ

Hiểu về hai trục là chìa khóa của Flexbox.
- **Main Axis**: Hướng của flex items (xác định bởi `flex-direction`).
- **Cross Axis**: Vuông góc với Main Axis.

Understanding the two axes is key to Flexbox.
- **Main Axis**: Direction of flex items (defined by `flex-direction`).
- **Cross Axis**: Perpendicular to Main Axis.

```css
.container {
    display: flex;
    
    /* flex-direction xác định Main Axis / Defines Main Axis */
    flex-direction: row;           /* Default: trái sang phải / Left to right */
    /* flex-direction: row-reverse;   Phải sang trái / Right to left */
    /* flex-direction: column;        Trên xuống dưới / Top to bottom */
    /* flex-direction: column-reverse; Dưới lên trên / Bottom to top */
}
```

### Flex Container Properties / Thuộc tính Container

Các thuộc tính áp dụng cho container để điều khiển layout chung.

Properties applied to the container to control the overall layout.

```css
.container {
    display: flex;
    
    /* 1. flex-wrap: Điều khiển xuống dòng */
    /* 1. flex-wrap: Controls wrapping */
    flex-wrap: nowrap;       /* Default: ép tất cả trên 1 dòng / Force on 1 line */
    /* flex-wrap: wrap;         Cho phép xuống dòng / Allow wrapping */
    /* flex-wrap: wrap-reverse; Xuống dòng ngược hướng / Wrap in reverse */
    
    /* 2. justify-content: Căn chỉnh trên MAIN Axis (ngang nếu row) */
    /* 2. justify-content: Alignment on MAIN Axis (horizontal if row) */
    justify-content: flex-start;    /* Default: Bắt đầu */
    justify-content: flex-end;      /* Kết thúc */
    justify-content: center;        /* Giữa */
    justify-content: space-between; /* Khoảng cách đều, sát mép */
    justify-content: space-around;  /* Khoảng cách đều xung quanh */
    justify-content: space-evenly;  /* Khoảng cách đều hoàn toàn */
    
    /* 3. align-items: Căn chỉnh trên CROSS Axis (dọc nếu row) */
    /* 3. align-items: Alignment on CROSS Axis (vertical if row) */
    align-items: stretch;     /* Default: Kéo giãn full chiều cao */
    align-items: flex-start;  /* Bắt đầu trục phụ (trên cùng) */
    align-items: flex-end;    /* Kết thúc trục phụ (dưới cùng) */
    align-items: center;      /* Giữa trục phụ */
    align-items: baseline;    /* Căn theo dòng kẻ chữ */
    
    /* 4. align-content: Căn chỉnh các dòng (chỉ khi có wrap) */
    /* 4. align-content: Align lines (only when wrapped) */
    align-content: flex-start;
    align-content: center;
    align-content: space-between;
    
    /* 5. gap: Khoảng cách giữa các items */
    /* 5. gap: Space between items */
    gap: 20px;
}
```

### Flex Item Properties / Thuộc tính Item

Các thuộc tính áp dụng cho từng item riêng lẻ để điều khiển kích thước và thứ tự.

Properties applied to individual items to control size and order.

```css
.item {
    /* 1. flex-grow: Khả năng giãn nở (số dương) */
    /* 1. flex-grow: Ability to grow (positive number) */
    flex-grow: 1; /* Chiếm lấy không gian còn trống / Take available space */
    /* flex-grow: 0;  Default: Không giãn / Don't grow */
    
    /* 2. flex-shrink: Khả năng co lại */
    /* 2. flex-shrink: Ability to shrink */
    flex-shrink: 1; /* Default: Co lại nếu thiếu chỗ / Shrink if needed */
    /* flex-shrink: 0; Không co lại / Don't shrink */
    
    /* 3. flex-basis: Kích thước cơ bản trước khi grow/shrink */
    /* 3. flex-basis: Base size before grow/shrink */
    flex-basis: 200px; /* Bắt đầu ở 200px / Start at 200px */
    /* flex-basis: auto; Default: Dựa trên content sizes */
    
    /* Shorthand phổ biến / Common shorthand */
    /* flex: grow shrink basis */
    flex: 1;          /* flex: 1 1 0% (Thông minh nhất) */
    flex: 0 0 auto;   /* flex: initial (Không đổi kích thước) */
    
    /* 4. align-self: Override align-items cho item này */
    /* 4. align-self: Override align-items for this item */
    align-self: flex-end;
    
    /* 5. order: Thay đổi thứ tự hiển thị */
    /* 5. order: Change visual order */
    order: 1; /* Default là 0. Số lớn hơn xếp sau, nhỏ hơn xếp trước */
}
```

> [!TIP]
> Sử dụng `flex: 1` cho các phần tử muốn chiếm hết không gian còn lại. Đây là pattern rất phổ biến.
>
> Use `flex: 1` for elements you want to take up all remaining space. This is a very common pattern.

### Common Layout Patterns / Các mẫu bố cục phổ biến

Flexbox giải quyết rất nhiều bài toán layout cổ điển một cách dễ dàng.

Flexbox solves many classic layout problems easily.

```css
/* 1. Căn giữa hoàn toàn (Centering) */
.center-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* 2. Navbar with Space Between */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* 3. Sidebar + Main Content (Sidebar cố định, Main giãn) */
.layout {
    display: flex;
}
.sidebar {
    flex: 0 0 250px; /* Cố định 250px, không co giãn */
}
.main {
    flex: 1; /* Chiếm hết phần còn lại */
}

/* 4. Footer luôn ở đáy (Sticky Footer) */
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex: 1; /* Đẩy footer xuống đáy / Pushes footer to bottom */
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Alignment control**: Dễ dàng căn giữa dọc và ngang / Easy vertical and horizontal centering
- **Dynamic sizing**: Items tự động giãn nở hoặc co lại theo màn hình / Items automatically grow or shrink with screen
- **Source order independence**: Thay đổi thứ tự hiển thị mà không sửa HTML / Change visual order without editing HTML
- **Direction flexibility**: Dễ dàng chuyển từ hàng sang cột (responsive) / Easy row-to-col switch
- **Space distribution**: Phân chia khoảng cách thông minh / Smart space distribution

### Ứng dụng thực tế / Real-world Applications
- **Navigation bars**: Menus ngang hoặc dọc / Horizontal or vertical menus
- **Card layouts**: Grid các cards (với wrap) / Grid of cards (with wrap)
- **Media objects**: Hình ảnh bên trái, text bên phải căn giữa / Image left, text right centered
- **Form elements**: Input và button trên một dòng / Input and button inline
- **Sticky footers**: Giữ footer ở đáy trang / Keep footer at bottom
- **Center anything**: Modal windows, loading spinners

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng Flexboc cho layout 1 chiều (hàng HOẶC cột) / Use Flexbox for 1D layouts (row OR column)
- ✅ **DO**: Sử dụng `gap` thay vì margin để tạo khoảng cách giữa items / Use `gap` instead of margin for spacing
- ✅ **DO**: Sử dụng shorthand `flex` để tránh lỗi logic / Use `flex` shorthand to avoid logic errors
- ✅ **DO**: Kết hợp Flexbox với Media Queries cho responsive / Combine with Media Queries for responsive
- ❌ **DON'T**: Không lạm dụng Flexbox cho grid layout phức tạp 2 chiều (Dùng CSS Grid) / Don't misuse Flexbox for complex 2D grids (Use CSS Grid)
- ❌ **DON'T**: Tránh dùng `float` bên trong flex container / Avoid using `float` inside flex container

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Demo</title>
    <link rel="stylesheet" href="flexbox.css">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar">
        <div class="logo">FlexBrand</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <button class="login-btn">Login</button>
    </nav>

    <!-- Hero Section (Centered) -->
    <header class="hero">
        <div class="hero-content">
            <h1>Flexbox Magic</h1>
            <p>Layouts made simple and flexible.</p>
            <div class="hero-buttons">
                <a href="#" class="btn primary">Get Started</a>
                <a href="#" class="btn secondary">Learn More</a>
            </div>
        </div>
    </header>

    <!-- Features (Row to Column) -->
    <section class="features">
        <div class="feature-card">
            <h3>Responsive</h3>
            <p>Adapts to any screen size automatically.</p>
        </div>
        <div class="feature-card">
            <h3>Flexible</h3>
            <p>Control alignment and spacing easily.</p>
        </div>
        <div class="feature-card">
            <h3>Modern</h3>
            <p>The standard for web layouts today.</p>
        </div>
    </section>
</body>
</html>
```

```css
/* File: flexbox.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

/* Navbar */
.navbar {
    display: flex;
    justify-content: space-between; /* Logo trái, Login phải */
    align-items: center; /* Căn giữa dọc */
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
}

.logo {
    font-weight: bold;
    font-size: 1.5rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 20px; /* Khoảng cách giữa các links */
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.login-btn {
    padding: 0.5rem 1rem;
    background-color: #3498db;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

/* Hero Section */
.hero {
    display: flex;
    justify-content: center; /* Căn giữa ngang */
    align-items: center; /* Căn giữa dọc */
    height: 400px;
    background-color: #f4f4f4;
    text-align: center;
}

.hero-buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.btn {
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
}
.btn.primary { background-color: #3498db; color: white; }
.btn.secondary { background-color: white; color: #333; border: 1px solid #333; }

/* Features Section */
.features {
    display: flex;
    flex-wrap: wrap; /* Cho phép xuống dòng nếu hết chỗ */
    justify-content: center;
    gap: 30px;
    padding: 40px 20px;
}

.feature-card {
    flex: 1 1 250px; /* Grow: 1, Shrink: 1, Basis: 250px */
    max-width: 350px;
    padding: 20px;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    border-radius: 8px;
    text-align: center;
}

/* Responsive adjustment */
@media (max-width: 600px) {
    .navbar {
        flex-direction: column;
        gap: 15px;
    }
    .nav-links {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
}
```

## Tài liệu tham khảo / References

- [MDN - CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy - A game for learning Flexbox](https://flexboxfroggy.com/)
- [W3C - CSS Flexbox Specification](https://www.w3.org/TR/css-flexbox-1/)
