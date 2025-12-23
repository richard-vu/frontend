# Nesting / Lồng CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Selectors](./css-selectors.md)  
**➡️ Bài sau / Next:** [The Cascade](./css-cascade.md)

---

## Mô tả / Description

Bài học này giới thiệu về CSS Nesting - một tính năng hiện đại cho phép lồng các quy tắc CSS bên trong nhau, giúp code CSS có tổ chức và dễ bảo trì hơn. Bạn sẽ học cách sử dụng native CSS nesting để nhóm các selectors liên quan, giảm lặp lại code, và tạo cấu trúc CSS rõ ràng hơn. CSS Nesting làm cho code dễ đọc và phản ánh đúng cấu trúc HTML.

This lesson introduces CSS Nesting - a modern feature that allows nesting CSS rules inside each other, making CSS code more organized and maintainable. You will learn how to use native CSS nesting to group related selectors, reduce code repetition, and create clearer CSS structure. CSS Nesting makes code more readable and reflects HTML structure accurately.

## Khái niệm chính / Main Concepts

### What is CSS Nesting? / CSS Nesting là gì?

CSS Nesting cho phép bạn viết selectors bên trong selectors khác, tương tự như cấu trúc HTML. Điều này giúp giảm lặp lại và làm cho code dễ hiểu hơn bằng cách nhóm các styles liên quan.

CSS Nesting allows you to write selectors inside other selectors, similar to HTML structure. This helps reduce repetition and makes code more understandable by grouping related styles.

```css
/* Cách truyền thống (không nesting) / Traditional way (without nesting) */
.card {
    padding: 20px;
    border-radius: 8px;
}

.card .card-header {
    font-size: 1.5rem;
    font-weight: bold;
}

.card .card-body {
    margin-top: 15px;
}

.card .card-footer {
    border-top: 1px solid #ddd;
    padding-top: 15px;
}

/* Cách mới với nesting / New way with nesting */
.card {
    padding: 20px;
    border-radius: 8px;
    
    /* Nested selectors / Selectors lồng nhau */
    .card-header {
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .card-body {
        margin-top: 15px;
    }
    
    .card-footer {
        border-top: 1px solid #ddd;
        padding-top: 15px;
    }
}
```

```html
<div class="card">
    <div class="card-header">Card Title</div>
    <div class="card-body">Card content here</div>
    <div class="card-footer">Card footer</div>
</div>
```

### Nesting with & Symbol / Lồng với ký hiệu &

Ký hiệu `&` (nesting selector) đại diện cho parent selector. Nó rất hữu ích cho pseudo-classes, pseudo-elements, và modifiers.

The `&` symbol (nesting selector) represents the parent selector. It's very useful for pseudo-classes, pseudo-elements, and modifiers.

```css
/* Sử dụng & cho pseudo-classes / Using & for pseudo-classes */
.button {
    background: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    
    /* &:hover tương đương .button:hover */
    /* &:hover is equivalent to .button:hover */
    &:hover {
        background: #2980b9;
        transform: translateY(-2px);
    }
    
    /* &:active tương đương .button:active */
    /* &:active is equivalent to .button:active */
    &:active {
        transform: translateY(0);
    }
    
    /* &:disabled tương đương .button:disabled */
    /* &:disabled is equivalent to .button:disabled */
    &:disabled {
        background: #95a5a6;
        cursor: not-allowed;
    }
}

/* Sử dụng & cho modifiers / Using & for modifiers */
.button {
    background: #3498db;
    padding: 10px 20px;
    
    /* &.primary tương đương .button.primary */
    /* &.primary is equivalent to .button.primary */
    &.primary {
        background: #2ecc71;
    }
    
    /* &.secondary tương đương .button.secondary */
    /* &.secondary is equivalent to .button.secondary */
    &.secondary {
        background: #95a5a6;
    }
    
    /* &.large tương đương .button.large */
    /* &.large is equivalent to .button.large */
    &.large {
        padding: 15px 30px;
        font-size: 1.2rem;
    }
}
```

```html
<button class="button">Default Button</button>
<button class="button primary">Primary Button</button>
<button class="button secondary large">Large Secondary</button>
<button class="button" disabled>Disabled Button</button>
```

### Nesting Pseudo-elements / Lồng Pseudo-elements

CSS Nesting hoạt động tuyệt vời với pseudo-elements như `::before` và `::after`.

CSS Nesting works great with pseudo-elements like `::before` and `::after`.

```css
/* Card với pseudo-elements / Card with pseudo-elements */
.card {
    position: relative;
    padding: 20px;
    background: white;
    border-radius: 10px;
    
    /* Pseudo-element ::before */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: linear-gradient(to bottom, #667eea, #764ba2);
        border-radius: 10px 0 0 10px;
    }
    
    /* Pseudo-element ::after cho decoration */
    /* Pseudo-element ::after for decoration */
    &::after {
        content: '✓';
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        background: #2ecc71;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }
}

/* Link với underline animation / Link with underline animation */
.link {
    position: relative;
    color: #3498db;
    text-decoration: none;
    
    /* Underline effect với ::after */
    /* Underline effect with ::after */
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #3498db;
        transition: width 0.3s ease;
    }
    
    /* Hover effect */
    &:hover::after {
        width: 100%;
    }
}
```

### Complex Nesting / Lồng phức tạp

Bạn có thể kết hợp nhiều levels của nesting, nhưng nên giữ ở mức 3-4 levels để code dễ đọc.

You can combine multiple levels of nesting, but should keep it to 3-4 levels for readability.

```css
/* Navigation menu với nhiều levels / Navigation menu with multiple levels */
.navigation {
    background: #2c3e50;
    padding: 0;
    
    /* Level 1: Menu list / Danh sách menu */
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        
        /* Level 2: Menu items / Mục menu */
        li {
            position: relative;
            
            /* Level 3: Links / Liên kết */
            a {
                display: block;
                padding: 15px 20px;
                color: white;
                text-decoration: none;
                transition: background 0.3s ease;
                
                /* Level 4: Hover state / Trạng thái hover */
                &:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                
                /* Level 4: Active state / Trạng thái active */
                &.active {
                    background: rgba(255, 255, 255, 0.2);
                    font-weight: bold;
                }
            }
            
            /* Dropdown menu / Menu thả xuống */
            &:hover ul {
                display: block;
            }
        }
    }
}
```

> [!WARNING]
> **Lưu ý**: Tránh lồng quá sâu (> 4 levels) vì sẽ làm code khó đọc và maintain.
> 
> **Note**: Avoid nesting too deep (> 4 levels) as it makes code hard to read and maintain.

### Nesting Media Queries / Lồng Media Queries

Một trong những tính năng mạnh nhất của nesting là khả năng đặt media queries ngay bên trong component styles.

One of the most powerful features of nesting is the ability to place media queries right inside component styles.

```css
/* Component với responsive styles inline */
/* Component with inline responsive styles */
.card {
    width: 100%;
    padding: 30px;
    background: white;
    border-radius: 10px;
    
    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        
        /* Media query ngay trong h2 / Media query right inside h2 */
        @media (max-width: 768px) {
            font-size: 1.5rem;
        }
        
        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    }
    
    p {
        font-size: 1rem;
        line-height: 1.8;
    }
    
    /* Media query cho toàn bộ card / Media query for entire card */
    @media (max-width: 768px) {
        padding: 20px;
    }
    
    @media (max-width: 480px) {
        padding: 15px;
        border-radius: 5px;
    }
}

/* Container với breakpoints / Container with breakpoints */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    
    /* Tablet breakpoint */
    @media (max-width: 1024px) {
        max-width: 960px;
    }
    
    /* Mobile breakpoint */
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0 15px;
    }
}
```

### Nesting with Combinators / Lồng với Combinators

Bạn có thể sử dụng combinators (>, +, ~) bên trong nested selectors.

You can use combinators (>, +, ~) inside nested selectors.

```css
/* Sử dụng child combinator / Using child combinator */
.menu {
    list-style: none;
    
    /* Chỉ direct children / Only direct children */
    > li {
        display: inline-block;
        
        /* Links trong direct children */
        /* Links in direct children */
        > a {
            padding: 10px 15px;
            color: #333;
        }
    }
}

/* Sử dụng adjacent sibling / Using adjacent sibling */
article {
    h2 {
        color: #2c3e50;
        
        /* Paragraph ngay sau h2 / Paragraph right after h2 */
        + p {
            font-weight: bold;
            font-size: 1.1rem;
        }
    }
    
    /* Tất cả paragraphs / All paragraphs */
    p {
        line-height: 1.6;
        
        /* Paragraphs tiếp theo / Subsequent paragraphs */
        ~ p {
            margin-top: 15px;
        }
    }
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Better organization**: Code được tổ chức tốt hơn, phản ánh cấu trúc HTML / Code is better organized, reflecting HTML structure
- **Reduced repetition**: Giảm việc lặp lại selectors / Reduces selector repetition
- **Improved readability**: Code dễ đọc và hiểu hơn / Code is easier to read and understand
- **Easier maintenance**: Dễ dàng maintain và update styles / Easier to maintain and update styles
- **Scoped styles**: Styles được scope rõ ràng theo component / Styles are clearly scoped by component
- **Inline media queries**: Media queries gần với styles liên quan / Media queries close to related styles

### Ứng dụng thực tế / Real-world Applications
- **Component-based styling**: Style components theo cách có tổ chức / Style components in an organized way
- **Theme systems**: Tạo theme variants dễ dàng / Create theme variants easily
- **State management**: Quản lý states (hover, active, disabled) / Manage states (hover, active, disabled)
- **Responsive components**: Embed media queries trong components / Embed media queries in components
- **BEM methodology**: Kết hợp với BEM naming / Combine with BEM naming
- **Design systems**: Xây dựng scalable design systems / Build scalable design systems

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Giữ nesting ở mức 3-4 levels tối đa / Keep nesting at 3-4 levels maximum
- ✅ **DO**: Sử dụng & cho pseudo-classes và modifiers / Use & for pseudo-classes and modifiers
- ✅ **DO**: Nhóm các styles liên quan cùng nhau / Group related styles together
- ✅ **DO**: Đặt media queries ngay trong component / Place media queries inside component
- ✅ **DO**: Sử dụng nesting để phản ánh HTML structure / Use nesting to reflect HTML structure
- ❌ **DON'T**: Không lồng quá sâu (> 4 levels) / Don't nest too deep (> 4 levels)
- ❌ **DON'T**: Không lồng chỉ vì có thể / Don't nest just because you can
- ❌ **DON'T**: Không tạo selectors quá specific / Don't create overly specific selectors

## Browser Support / Hỗ trợ trình duyệt

| Trình duyệt / Browser | Phiên bản / Version |
|----------------------|---------------------|
| Chrome               | 112+                |
| Firefox              | 117+                |
| Safari               | 16.5+               |
| Edge                 | 112+                |

> [!NOTE]
> CSS Nesting là tính năng tương đối mới. Kiểm tra browser support trước khi sử dụng trong production.
> 
> CSS Nesting is a relatively new feature. Check browser support before using in production.

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Nesting Demo</title>
    <link rel="stylesheet" href="nesting.css">
</head>
<body>
    <!-- Navigation / Điều hướng -->
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <h1>My Website</h1>
            </div>
            <ul class="navbar-menu">
                <li><a href="#" class="active">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Main content / Nội dung chính -->
    <main class="container">
        <!-- Card component -->
        <article class="card">
            <div class="card-header">
                <h2>CSS Nesting Features</h2>
                <span class="badge">New</span>
            </div>
            <div class="card-body">
                <p>CSS Nesting makes your code more organized and maintainable.</p>
                <ul class="feature-list">
                    <li>Better code organization</li>
                    <li>Reduced selector repetition</li>
                    <li>Improved readability</li>
                </ul>
            </div>
            <div class="card-footer">
                <button class="button primary">Learn More</button>
                <button class="button secondary">Share</button>
            </div>
        </article>
    </main>
</body>
</html>
```

```css
/* File: nesting.css */

/* Global reset / Reset toàn cục */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f5f7fa;
}

/* Container / Khung chứa */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    
    /* Responsive breakpoints ngay trong container */
    /* Responsive breakpoints right inside container */
    @media (max-width: 768px) {
        padding: 0 15px;
    }
}

/* Navbar component với nesting / Navbar component with nesting */
.navbar {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    
    /* Container trong navbar / Container inside navbar */
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        /* Responsive layout */
        @media (max-width: 768px) {
            flex-direction: column;
            gap: 15px;
        }
    }
    
    /* Brand / Thương hiệu */
    .navbar-brand {
        h1 {
            color: white;
            font-size: 1.8rem;
            
            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }
    }
    
    /* Menu / Thực đơn */
    .navbar-menu {
        list-style: none;
        display: flex;
        gap: 10px;
        
        @media (max-width: 768px) {
            flex-wrap: wrap;
            justify-content: center;
        }
        
        /* Menu items / Các mục menu */
        li {
            a {
                color: white;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 5px;
                display: block;
                transition: all 0.3s ease;
                
                /* Hover state / Trạng thái hover */
                &:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: translateY(-2px);
                }
                
                /* Active state / Trạng thái active */
                &.active {
                    background: rgba(255, 255, 255, 0.3);
                    font-weight: bold;
                }
            }
        }
    }
}

/* Card component với nesting đầy đủ / Card component with full nesting */
.card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    margin: 40px 0;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    /* Hover effect cho toàn bộ card */
    /* Hover effect for entire card */
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    
    /* Card header */
    .card-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h2 {
            font-size: 1.8rem;
            margin: 0;
            
            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }
        
        /* Badge / Nhãn */
        .badge {
            background: rgba(255, 255, 255, 0.3);
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
        }
    }
    
    /* Card body */
    .card-body {
        padding: 30px;
        
        p {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 20px;
        }
        
        /* Feature list / Danh sách tính năng */
        .feature-list {
            list-style: none;
            
            li {
                padding: 10px 0;
                padding-left: 30px;
                position: relative;
                
                /* Icon với pseudo-element */
                /* Icon with pseudo-element */
                &::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    color: #2ecc71;
                    font-weight: bold;
                    font-size: 1.2rem;
                }
            }
        }
    }
    
    /* Card footer */
    .card-footer {
        padding: 20px 30px;
        background: #f8f9fa;
        display: flex;
        gap: 15px;
        
        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
}

/* Button component với modifiers / Button component with modifiers */
.button {
    padding: 12px 30px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    
    /* Hover state */
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    /* Active state */
    &:active {
        transform: translateY(0);
    }
    
    /* Primary modifier / Biến thể primary */
    &.primary {
        background: #3498db;
        color: white;
        
        &:hover {
            background: #2980b9;
        }
    }
    
    /* Secondary modifier / Biến thể secondary */
    &.secondary {
        background: white;
        color: #3498db;
        border: 2px solid #3498db;
        
        &:hover {
            background: #3498db;
            color: white;
        }
    }
    
    /* Disabled state / Trạng thái disabled */
    &:disabled {
        background: #95a5a6;
        cursor: not-allowed;
        
        &:hover {
            transform: none;
            box-shadow: none;
        }
    }
}
```

## Tài liệu tham khảo / References

- [MDN - CSS Nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting)
- [W3C - CSS Nesting Module](https://www.w3.org/TR/css-nesting-1/)
- [Can I Use - CSS Nesting](https://caniuse.com/css-nesting)
- [Chrome Developers - CSS Nesting](https://developer.chrome.com/articles/css-nesting/)
