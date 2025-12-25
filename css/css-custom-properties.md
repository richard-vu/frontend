# CSS Custom Properties (Variables) / Biến CSS

---

**📅 Ngày tạo / Created:** 2025-12-25  
**📅 Ngày cập nhật / Last Updated:** 2025-12-25

**⬅️ Bài trước / Previous:** [Logical Properties](./css-logical-properties.md)  
**➡️ Bài sau / Next:** [Spacing](./css-spacing.md)

---

## Mô tả / Description

CSS Custom Properties (thường được gọi là Biến CSS - CSS Variables) cho phép bạn lưu trữ các giá trị cụ thể để sử dụng lại trong toàn bộ tài liệu. Chúng giúp code dễ đọc, dễ bảo trì và giảm thiểu lỗi lặp lại. Khác với biến trong các preprocessors như SASS/LESS, CSS Variables tồn tại trên DOM, có thể thay đổi động bằng JavaScript và tuân theo quy tắc thừa kế (cascade) của CSS.

CSS Custom Properties (commonly known as CSS Variables) allow you to store specific values to be reused throughout a document. They make code easier to read, maintain, and reduce repetition errors. Unlike variables in preprocessors like SASS/LESS, CSS Variables exist in the DOM, can be manipulated dynamically with JavaScript, and follow CSS cascade/inheritance rules.

## Khái niệm chính / Main Concepts

### 1. Khai báo biến / Declaring Variables

Biến CSS bắt đầu bằng hai dấu gạch ngang `--`. Thường được khai báo trong `:root` để dùng toàn cục.

CSS Variables start with two dashes `--`. Typically declared in `:root` for global scope.

```css
:root {
    /* Khai báo biến toàn cục / Global variable declaration */
    --primary-color: #3498db;
    --font-size-base: 16px;
    --spacing-unit: 8px;
}
```

### 2. Sử dụng biến / Using Variables

Dùng hàm `var()` để lấy giá trị.

Use the `var()` function to retrieve the value.

```css
.button {
    background-color: var(--primary-color);
    padding: var(--spacing-unit);
    font-size: var(--font-size-base);
}
```

### 3. Giá trị dự phòng / Fallback Values

Tham số thứ 2 của `var()` là giá trị dùng khi biến chưa được định nghĩa.

The 2nd argument of `var()` is the fallback value used if the variable is undefined.

```css
.box {
    /* Nếu --text-color chưa có, dùng black / If --text-color missing, use black */
    color: var(--text-color, black);
    
    /* Fallback lồng nhau / Nested fallback */
    color: var(--text-primary, var(--text-fallback, #333));
}
```

### 4. Phạm vi (Scope) & Kế thừa / Scope & Inheritance

Biến tuân theo cấu trúc DOM. Biến định nghĩa trong `.card` chỉ dùng được trong `.card` và con của nó.

Variables follow the DOM structure. Variables defined inside `.card` are only available inside `.card` and its children.

```css
.card {
    --card-bg: #fff; /* Biến cục bộ / Local variable */
    background: var(--card-bg);
}

.card-title {
    /* Hợp lệ vì là con của .card / Valid because it's a child of .card */
    color: var(--card-bg); 
}

.sidebar {
    /* KHÔNG hợp lệ, --card-bg không tồn tại ở đây / Invalid inside sidebar */
    background: var(--card-bg, gray); 
}
```

### 5. Tính toán với `calc()` / Calculation with `calc()`

Rất mạnh mẽ khi kết hợp biến với `calc`.

Very powerful when combining variables with `calc`.

```css
:root {
    --base-size: 10px;
}

.container {
    padding: calc(var(--base-size) * 2); /* 20px */
    width: calc(100% - var(--base-size));
}
```

### 6. Tương tác với JavaScript / Interaction with JavaScript

Bạn có thể đọc và ghi biến CSS từ JS.

You can read and write CSS variables from JS.

```javascript
// Lấy giá trị / Get value
const root = document.querySelector(':root');
const styles = getComputedStyle(root);
const primaryColor = styles.getPropertyValue('--primary-color');

// Gán giá trị mới / Set new value
root.style.setProperty('--primary-color', 'red');
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **DRY (Don't Repeat Yourself)**: Thay đổi màu chủ đạo ở 1 chỗ, cập nhật toàn bộ trang.
- **Dynamic Theming**: Dễ dàng tạo Dark Mode/Light Mode.
- **Readability**: `var(--main-color)` dễ hiểu hơn `#3498db`.
- **Responsive Values**: Thay đổi giá trị biến trong Media Queries.

### Ứng dụng thực tế / Real-world Applications
- **Design Systems**: Quản lý màu sắc, font, spacing tokens.
- **Dark Mode**: Chuyển đổi theme chỉ bằng việc thay đổi giá trị biến.
- **Mouse Tracking**: Cập nhật tọa độ chuột `--mouse-x`, `--mouse-y` để làm hiệu ứng.

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Đặt tên biến ngữ nghĩa (Semantic Naming). VD: `--text-error` thay vì `--text-red`.
- ✅ **DO**: Định nghĩa biến "nguyên tử" (Primitive) và biến "ngữ nghĩa" (Semantic).
    - Primitive: `--blue-500: #3b82f6;`
    - Semantic: `--btn-primary-bg: var(--blue-500);`
- ✅ **DO**: Sử dụng biến cục bộ cho các component riêng biệt để tránh ô nhiễm global namespace.
- ❌ **DON'T**: Đừng lạm dụng biến cho mọi thứ nhỏ nhặt nếu nó không được tái sử dụng.

## Ví dụ hoàn chỉnh: Dark Mode Theme

Cách đơn giản nhất để triển khai Dark Mode bằng CSS Variables.

The simplest way to implement Dark Mode using CSS Variables.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        /* 1. Định nghĩa màu mặc định (Light Mode) */
        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --primary-color: #007bff;
            --card-bg: #f8f9fa;
        }

        /* 2. Ghi đè biến khi có class 'dark-theme' hoặc system dark mode */
        @media (prefers-color-scheme: dark) {
            :root {
                --bg-color: #121212;
                --text-color: #e0e0e0;
                --primary-color: #3794ff;
                --card-bg: #1e1e1e;
            }
        }
        
        /* Hoặc dùng class để toggle bằng JS */
        body.dark-mode {
            --bg-color: #121212;
            --text-color: #e0e0e0;
            --primary-color: #3794ff;
            --card-bg: #1e1e1e;
        }

        /* 3. Sử dụng biến trong styles */
        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            transition: background-color 0.3s, color 0.3s;
            font-family: sans-serif;
            padding: 20px;
        }

        .card {
            background-color: var(--card-bg);
            border: 1px solid var(--text-color);
            padding: 20px;
            border-radius: 8px;
            max-width: 400px;
        }

        .btn {
            background-color: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>CSS Variables Theme Demo</h1>
    
    <div class="card">
        <h2>Card Title</h2>
        <p>This illustrates how variables make theming easy.</p>
        <button class="btn" onclick="document.body.classList.toggle('dark-mode')">
            Toggle Dark Mode
        </button>
    </div>
</body>
</html>
```

## Tài liệu tham khảo / References
- [MDN - Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Smashing Magazine - CSS Custom Properties Strategy](https://www.smashingmagazine.com/2017/04/start-using-css-custom-properties/)
