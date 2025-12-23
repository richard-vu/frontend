# Inheritance / Kế thừa CSS

---

**📅 Ngày tạo / Created:** 2025-12-24  
**📅 Ngày cập nhật / Last Updated:** 2025-12-24

**⬅️ Bài trước / Previous:** [Specificity](./css-specificity.md)  
**➡️ Bài sau / Next:** [Color](./css-color.md)

---

## Mô tả / Description

Bài học này tìm hiểu về Inheritance (kế thừa) - cơ chế cho phép các phần tử con tự động nhận giá trị CSS từ phần tử cha. Bạn sẽ học về các thuộc tính có thể kế thừa, cách kiểm soát inheritance, và sử dụng các giá trị đặc biệt như inherit, initial, unset, và revert. Hiểu rõ inheritance giúp viết CSS hiệu quả và tránh lặp lại code không cần thiết.

ThisThis lesson explores Inheritance - the mechanism that allows child elements to automatically receive CSS values from parent elements. You will learn about inheritable properties, how to control inheritance, and use special values like inherit, initial, unset, and revert. Understanding inheritance helps write efficient CSS and avoid unnecessary code repetition.

## Khái niệm chính / Main Concepts

### What is CSS Inheritance? / Kế thừa CSS là gì?

Inheritance là cơ chế mà một số thuộc tính CSS tự động được truyền từ phần tử cha xuống các phần tử con. Điều này giúp giảm lặp lại code và tạo consistency trong styling.

Inheritance is the mechanism where some CSS properties are automatically passed from parent elements to child elements. This helps reduce code repetition and create styling consistency.

```css
/* Parent element định nghĩa styles / Parent element defines styles */
body {
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}

/* Các phần tử con TỰ ĐỘNG kế thừa / Child elements AUTOMATICALLY inherit */
/* Không cần định nghĩa lại / No need to redefine */
p {
    /* Tự động có font-family: Arial, sans-serif */
    /* Tự động có color: #333 */
    /* Tự động có line-height: 1.6 */
}

h1 {
    /* Cũng kế thừa font-family và line-height */
    /* Also inherits font-family and line-height */
    font-size: 2rem; /* Chỉ cần override size / Only override size */
}
```

```html
<body>
    <div class="container">
        <h1>This heading inherits font-family</h1>
        <p>This paragraph inherits all text properties from body</p>
    </div>
</body>
```

### Inherited Properties / Các thuộc tính được kế thừa

Một số nhóm thuộc tính thường được kế thừa, chủ yếu liên quan đến text và typography.

Some property groups are commonly inherited, mainly related to text and typography.

```css
/* CÁC THUỘC TÍNH THƯỜNG ĐƯỢC KẾ THỪA / COMMONLY INHERITED PROPERTIES */

.container {
    /* Text properties / Thuộc tính văn bản */
    color: #2c3e50;
    font-family: 'Segoe UI', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.6;
    text-align: left;
    text-transform: none;
    letter-spacing: normal;
    word-spacing: normal;
    
    /* List properties / Thuộc tính danh sách */
    list-style-type: disc;
    list-style-position: outside;
    
    /* Table properties / Thuộc tính bảng */
    border-collapse: collapse;
    border-spacing: 0;
    
    /* Visibility */
    visibility: visible;
    
    /* Cursor */
    cursor: pointer;
}

/* Tất cả children kế thừa các giá trị trên */
/* All children inherit the above values */
.container p,
.container h2,
.container li {
    /* Không cần khai báo lại / No need to redeclare */
}
```

### Non-Inherited Properties / Các thuộc tính KHÔNG được kế thừa

Hầu hết các thuộc tính layout và box model KHÔNG được kế thừa tự động.

Most layout and box model properties are NOT automatically inherited.

```css
/* CÁC THUỘC TÍNH KHÔNG ĐƯỢC KẾ THỪA / NON-INHERITED PROPERTIES */

.parent {
    /* Box model - KHÔNG kế thừa / NOT inherited */
    width: 500px;
    height: 300px;
    padding: 20px;
    margin: 10px;
    border: 1px solid black;
    
    /* Positioning - KHÔNG kế thừa / NOT inherited */
    position: relative;
    top: 10px;
    left: 20px;
    z-index: 10;
    
    /* Layout - KHÔNG kế thừa / NOT inherited */
    display: flex;
    flex-direction: row;
    grid-template-columns: repeat(3, 1fr);
    
    /* Background - KHÔNG kế thừa / NOT inherited */
    background-color: white;
    background-image: url('bg.jpg');
    
    /* Transform & Animation - KHÔNG kế thừa / NOT inherited */
    transform: rotate(10deg);
    animation: slide 1s ease;
}

.child {
    /* Phải định nghĩa riêng nếu cần / Must define separately if needed */
    width: 200px; /* Không kế thừa 500px / Doesn't inherit 500px */
    padding: 10px; /* Không kế thừa 20px / Doesn't inherit 20px */
}
```

> [!TIP]
> **Quy tắc chung**: Các thuộc tính liên quan đến text thường được kế thừa, còn layout thì không.
> 
> **General rule**: Text-related properties are usually inherited, layout properties are not.

### The `inherit` Keyword / Từ khóa `inherit`

Từ khóa `inherit` buộc một thuộc tính kế thừa giá trị từ parent, ngay cả khi nó thường không kế thừa.

The `inherit` keyword forces a property to inherit the value from parent, even if it normally doesn't inherit.

```css
/* Parent styles / Styles cha */
.parent {
    border: 2px solid red;
    padding: 20px;
    background-color: lightblue;
}

/* Child kế thừa bắt buộc / Child forced inheritance */
.child {
    /* border thường KHÔNG kế thừa, nhưng ta MỤC buộc nó */
    /* border normally does NOT inherit, but we FORCE it */
    border: inherit; /* Kế thừa "2px solid red" */
    
    /* padding cũng không kế thừa, nhưng ta buộc */
    /* padding also doesn't inherit, but we force it */
    padding: inherit; /* Kế thừa "20px" */
    
    /* background-color không kế thừa, nhưng ta buộc */
    /* background-color doesn't inherit, but we force it */
    background-color: inherit; /* Kế thừa "lightblue" */
}
```

```html
<div class="parent">
    Parent box
    <div class="child">
        This child inherits border, padding, and background from parent
    </div>
</div>
```

### The `initial` Keyword / Từ khóa `initial`

Từ khóa `initial` đặt thuộc tính về giá trị mặc định ban đầu của CSS spec.

The `initial` keyword sets the property to its initial default value from the CSS spec.

```css
/* Ví dụ với color / Example with color */
body {
    color: red; /* Tất cả text màu đỏ / All text is red */
}

p {
    color: inherit; /* Kế thừa màu đỏ / Inherits red */
}

.reset-color {
    color: initial; /* Về màu mặc định: black / Back to default: black */
}

/* Ví dụ với display / Example with display */
.hide-element {
    display: none;
}

.show-again {
    display: initial; /* Về giá trị initial của element */
    /* Cho <div>: block, cho <span>: inline */
    /* For <div>: block, for <span>: inline */
}

/* Ví dụ với position / Example with position */
.positioned {
    position: absolute;
    top: 50px;
}

.reset-position {
    position: initial; /* Về static (giá trị initial) / Back to static */
    top: initial; /* Về auto / Back to auto */
}
```

### The `unset` Keyword / Từ khóa `unset`

Từ khóa `unset` hoạt động như `inherit` cho các thuộc tính được kế thừa, và như `initial` cho các thuộc tính không được kế thừa.

The `unset` keyword acts like `inherit` for inherited properties, and like `initial` for non-inherited properties.

```css
/* Parent định nghĩa / Parent defines */
.parent {
    color: blue; /* Inherited property / Thuộc tính kế thừa */
    border: 2px solid red; /* Non-inherited / Không kế thừa */
    padding: 20px; /* Non-inherited / Không kế thừa */
}

.child {
    color: green; /* Override parent */
    border: 1px dashed black; /* Custom border */
    padding: 10px; /* Custom padding */
}

.child-unset {
    /* unset cho inherited property = inherit */
    color: unset; /* Trở thành blue (từ parent) / Becomes blue (from parent) */
    
    /* unset cho non-inherited property = initial */
    border: unset; /* Trở thành none (initial value) / Becomes none (initial value) */
    padding: unset; /* Trở thành 0 (initial value) / Becomes 0 (initial value) */
}
```

> [!NOTE]
> **unset = thông minh**: Tự động chọn inherit hoặc initial tùy thuộc vào loại thuộc tính.
> 
> **unset = smart**: Automatically chooses inherit or initial depending on property type.

### The `revert` Keyword / Từ khóa `revert`

Từ khóa `revert` đặt thuộc tính về giá trị mà nó có được từ user agent stylesheet hoặc user stylesheet.

The `revert` keyword sets the property to the value it would have had from the user agent or user stylesheet.

```css
/* User agent (browser) có default / User agent has default */
/* h1 { font-size: 2em; font-weight: bold; } */

h1 {
    /* Override defaults / Ghi đè mặc định */
    font-size: 1rem;
    font-weight: normal;
    color: red;
}

.revert-heading {
    /* Về giá trị browser default / Back to browser default */
    font-size: revert; /* Trở về 2em / Back to 2em */
    font-weight: revert; /* Trở về bold / Back to bold */
    color: revert; /* Trở về black (browser default) / Back to black */
}
```

### The `all` Property with Inheritance / Thuộc tính `all` với Inheritance

Thuộc tính `all` cho phép reset hoặc thiết lập tất cả properties cùng lúc.

The `all` property allows resetting or setting all properties at once.

```css
/* Reset tất cả properties / Reset all properties */
.reset-all-inherit {
    all: inherit; /* Tất cả kế thừa từ parent / All inherit from parent */
}

.reset-all-initial {
    all: initial; /* Tất cả về giá trị initial / All to initial value */
}

.reset-all-unset {
    all: unset; /* Mixed: inherit nếu inherited, initial nếu không */
    /* Mixed: inherit if inherited, initial if not */
}

.reset-all-revert {
    all: revert; /* Tất cả về browser defaults / All to browser defaults */
}

/* Use case thực tế: Isolate widget / Practical use case */
.third-party-widget {
    /* Reset tất cả để tránh conflicts từ global styles */
    /* Reset all to avoid conflicts from global styles */
    all: initial;
    
    /* Sau đó apply widget-specific styles */
    /* Then apply widget-specific styles */
    padding: 20px;
    background: white;
    font-family: Arial, sans-serif;
}
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits
- **Code efficiency**: Giảm lặp lại code cho typography / Reduces code repetition for typography
- **Consistency**: Đảm bảo consistency trong design / Ensures design consistency
- **Maintainability**: Dễ maintain và update styles / Easy to maintain and update styles
- **Cascade control**: Kiểm soát tốt hơn cascade behavior / Better control over cascade behavior
- **Flexible resets**: Dễ dàng reset về defaults / Easy to reset to defaults
- **Performance**: Ít CSS code hơn = tải nhanh hơn / Less CSS code = faster loading

### Ứng dụng thực tế / Real-world Applications
- **Typography systems**: Thiết lập base typography cho toàn site / Set up base typography for entire site
- **Theme inheritance**: Children tự động nhận theme colors / Children automatically receive theme colors
- **Component isolation**: Isolate third-party components / Isolate third-party components
- **Reset strategies**: Implement CSS resets hiệu quả / Implement effective CSS resets
- **Responsive typography**: Base font size cascades down / Base font size cascades down
- **Accessibility**: Inherit font sizes for better accessibility / Inherit font sizes for better accessibility

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng inheritance cho typography trên body / Use inheritance for typography on body
- ✅ **DO**: Dùng `inherit` khi muốn match parent explicitly / Use `inherit` to explicitly match parent
- ✅ **DO**: Dùng `all: initial` để isolate components / Use `all: initial` to isolate components
- ✅ **DO**: Hiểu thuộc tính nào inherited, nào không / Understand which properties are inherited
- ✅ **DO**: Leverage inheritance để giảm CSS / Leverage inheritance to reduce CSS
- ❌ **DON'T**: Không force inherit cho tất cả properties / Don't force inherit for all properties
- ❌ **DON'T**: Không quên reset inherited values khi cần / Don't forget to reset inherited values when needed
- ❌ **DON'T**: Không assume tất cả đều inherit / Don't assume everything inherits

## Ví dụ hoàn chỉnh / Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Inheritance Demo</title>
    <link rel="stylesheet" href="inheritance.css">
</head>
<body>
    <!-- Global inheritance demonstration -->
    <div class="container">
        <h1>CSS Inheritance Examples</h1>
        
        <!-- Example 1: Text inheritance -->
        <section class="text-section">
            <h2>Inherited Text Properties</h2>
            <p>This paragraph inherits font-family, color, and line-height from the section.</p>
            <p class="special">This paragraph has its own color but inherits other properties.</p>
        </section>
        
        <!-- Example 2: Non-inherited properties -->
        <section class="box-section">
            <h2>Non-Inherited Box Properties</h2>
            <div class="parent-box">
                Parent Box (has border and padding)
                <div class="child-box">
                    Child Box (border and padding NOT inherited)
                </div>
                <div class="child-box inherit-border">
                    Child Box (forced to inherit border and padding)
                </div>
            </div>
        </section>
        
        <!-- Example 3: Using keyword values -->
        <section class="keyword-demo">
            <h2>Keyword Values Demo</h2>
            <p class="inherit-example">Using inherit keyword</p>
            <p class="initial-example">Using initial keyword</p>
            <p class="unset-example">Using unset keyword</p>
            <p class="revert-example">Using revert keyword</p>
        </section>
        
        <!-- Example 4: Third-party widget isolation -->
        <div class="widget">
            <h3>Isolated Widget</h3>
            <p>This widget is isolated from global styles using 'all: initial'</p>
        </div>
    </div>
</body>
</html>
```

```css
/* File: inheritance.css */

/* ===========================================
   GLOBAL INHERITANCE SETUP
   Thiết lập kế thừa toàn cục
   =========================================== */

/* Các thuộc tính này sẽ được kế thừa bởi TẤT CẢ elements */
/* These properties will be inherited by ALL elements */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 40px 20px;
}

/* Container không cần định nghĩa lại font, color, line-height */
/* Container doesn't need to redefine font, color, line-height */
.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Headings kế thừa font-family và line-height, chỉ override size */
/* Headings inherit font-family and line-height, only override size */
h1 {
    font-size: 2.5rem;
    color: white; /* Override inherited color */
    margin-bottom: 30px;
}

h2 {
    font-size: 1.8rem;
    color: white;
    margin-bottom: 20px;
}

/* ===========================================
   DEMONSTRATION 1: TEXT INHERITANCE
   =========================================== */

.text-section {
    background: white;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    
    /* Thiết lập text properties sẽ được children inherit */
    /* Set text properties that children will inherit */
    font-size: 1.1rem;
    color: #2c3e50;
    line-height: 1.8;
}

.text-section p {
    /* Tự động inherit font-size, color, line-height từ .text-section */
    /* Automatically inherits font-size, color, line-height from .text-section */
    margin-bottom: 15px;
}

.text-section .special {
    /* Override color nhưng vẫn inherit font-size và line-height */
    /* Override color but still inherit font-size and line-height */
    color: #e74c3c;
    font-weight: bold;
}

/* ===========================================
   DEMONSTRATION 2: NON-INHERITED PROPERTIES
   =========================================== */

.box-section {
    background: white;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
}

.parent-box {
    /* Các thuộc tính này KHÔNG tự động kế thừa */
    /* These properties do NOT automatically inherit */
    border: 3px solid #3498db;
    padding: 20px;
    margin: 10px 0;
    background-color: #ecf0f1;
}

.child-box {
    /* KHÔNG inherit border, padding, margin, background */
    /* Does NOT inherit border, padding, margin, background */
    margin-top: 15px;
    padding: 10px;
    background-color: white;
    
    /* Phải define riêng nếu muốn */
    /* Must define separately if wanted */
}

.inherit-border {
    /* BẮT BUỘC kế thừa border và padding */
    /* FORCE inherit border and padding */
    border: inherit; /* Nhận 3px solid #3498db */
    padding: inherit; /* Nhận 20px */
    background-color: inherit; /* Nhận #ecf0f1 */
}

/* ===========================================
   DEMONSTRATION 3: KEYWORD VALUES
   =========================================== */

.keyword-demo {
    background: white;
    padding: 30px;
    margin-bottom: 30px;
    border-radius: 10px;
    
    /* Set some inherited properties */
    color: #2ecc71;
    font-size: 1.2rem;
    font-weight: bold;
}

.keyword-demo p {
    margin: 10px 0;
    padding: 15px;
    border-left: 4px solid #95a5a6;
    background: #f8f9fa;
}

/* inherit - Kế thừa từ parent */
.inherit-example {
    color: inherit; /* Kế thừa #2ecc71 từ .keyword-demo */
    font-weight: inherit; /* Kế thừa bold */
}

/* initial - Về giá trị CSS spec default */
.initial-example {
    color: initial; /* Về black (initial value) */
    font-weight: initial; /* Về normal (initial value) */
    font-size: initial; /* Về medium (initial value) */
}

/* unset  - Smart: inherit nếu inherited, initial nếu không */
.unset-example {
    color: unset; /* inherited property → inherit → #2ecc71 */
    border-left: unset; /* non-inherited property → initial → none */
}

/* revert - Về browser default */
.revert-example {
    color: revert; /* Về browser default (black) */
    font-weight: revert; /* Về browser default (normal) */
}

/* ===========================================
   DEMONSTRATION 4: WIDGET ISOLATION
   =========================================== */

.widget {
    /* Reset TẤT CẢ properties về initial */
    /* Reset ALL properties to initial */
    all: initial;
    
    /* Sau đó define widget-specific styles */
    /* Then define widget-specific styles */
    display: block;
    background: white;
    padding: 25px;
    margin: 30px 0;
    border-radius: 10px;
    border: 3px solid #9b59b6;
    font-family: 'Courier New', monospace;
    color: #8e44ad;
}

.widget h3 {
    /* Cũng phải define vì widget đã reset all */
    /* Also must define because widget reset all */
    font-size: 1.5rem;
    margin: 0 0 15px 0;
    color: #8e44ad;
    font-family: inherit; /* Inherit từ .widget */
}

.widget p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    color: inherit;
}

/* ===========================================
   INHERITANCE REFERENCE TABLE
   
   INHERITED PROPERTIES (main ones):
   - color
   - font-family, font-size, font-weight, font-style
   - line-height, letter-spacing, word-spacing
   - text-align, text-transform, text-indent
   - list-style-type, list-style-position
   - cursor, visibility
   
   NOT INHERITED (main ones):
   - width, height, min-*, max-*
   - padding, margin, border
   - position, top, right, bottom, left
   - display, flex-*, grid-*
   - background-*, transform, animation
   =========================================== */
```

## Inheritance Reference / Tham khảo Kế thừa

| Property Type | Examples | Inherited? |
|--------------|----------|------------|
| Text | color, font-family, font-size | ✅ Yes |
| Text | line-height, text-align | ✅ Yes |
| Box Model | width, height, padding, margin | ❌ No |
| Border | border, border-radius, outline | ❌ No |
| Background | background-color, background-image | ❌ No |
| Position | position, top, left, z-index | ❌ No |
| Layout | display, flex, grid | ❌ No |
| List | list-style-type, list-style-position | ✅ Yes |
| Other | cursor, visibility | ✅ Yes |

## Tài liệu tham khảo / References

- [MDN - Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)
- [MDN - inherit](https://developer.mozilla.org/en-US/docs/Web/CSS/inherit)
- [MDN - initial](https://developer.mozilla.org/en-US/docs/Web/CSS/initial)
- [MDN - unset](https://developer.mozilla.org/en-US/docs/Web/CSS/unset)
- [MDN - revert](https://developer.mozilla.org/en-US/docs/Web/CSS/revert)
- [W3C - Value Processing](https://www.w3.org/TR/css-cascade-4/#value-stages)
