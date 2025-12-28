# 02 - JSX / JSX (JavaScript XML)

## 📖 English

### Description

This exercise introduces JSX (JavaScript XML), the syntax extension that allows you to write HTML-like code directly in JavaScript. JSX is fundamental to React development and makes creating user interfaces intuitive and declarative.

### 🎯 Learning Objectives

- Understanding what JSX is and why it's used
- Writing JSX syntax in React components
- Creating simple components with JSX
- Using semantic HTML elements in JSX
- Combining multiple components together
- Understanding the difference between JSX and plain HTML

### 🏗️ Project Structure

```
src/
├── WelcomeMessage.tsx    # Simple welcome component using JSX
├── App.tsx               # Main app with semantic HTML elements
└── main.tsx             # Application entry point
```

### 📦 Components

#### WelcomeMessage Component
**File**: [`WelcomeMessage.tsx`](./src/WelcomeMessage.tsx)

A simple component demonstrating basic JSX syntax.

**Features**:
- Uses arrow function syntax
- Returns JSX wrapped in a `<div>`
- Contains heading and paragraph elements

**Code**:
```typescript
const WelcomeMessage = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Welcome to learning JSX!</p>
        </div>
    );
};

export default WelcomeMessage;
```

**What it demonstrates**:
- ✅ JSX looks like HTML but is actually JavaScript
- ✅ Components return JSX elements
- ✅ JSX must be wrapped in a single parent element (`<div>`)

#### App Component
**File**: [`App.tsx`](./src/App.tsx)

The main component showcasing semantic HTML elements in JSX.

**Features**:
- Uses traditional `function` declaration syntax
- Demonstrates semantic HTML5 elements (`<section>`, `<article>`)
- Shows JSX attributes (`id`, `className`)
- Includes a nested component (`<WelcomeMessage />`)

**Code**:
```typescript
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <section id="section">
      <h1>My Website</h1>
      <article>
        <h2>Welcome To React</h2>
        <p className="text">Paragraph Content</p>
      </article>
      <WelcomeMessage />
    </section>
  )
}

export default App
```

**What it demonstrates**:
- ✅ Semantic HTML elements in JSX
- ✅ JSX attributes (`id`, `className`)
- ✅ Component composition (using `<WelcomeMessage />`)
- ✅ Proper JSX structure with single parent element

### 💡 What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

#### Why JSX?

| Feature | Benefit |
|---------|---------|
| **Declarative** | Write what you want to see, not how to build it |
| **Familiar** | Looks like HTML, easy to learn and read |
| **Powerful** | Full JavaScript power available inside markup |
| **Type-safe** | Works seamlessly with TypeScript |
| **Component-based** | Easy to compose and reuse UI pieces |

#### JSX is NOT HTML

While JSX looks like HTML, there are important differences:

| HTML | JSX | Why Different? |
|------|-----|----------------|
| `<div class="container">` | `<div className="container">` | `class` is a JavaScript keyword |
| `<input type="text">` | `<input type="text" />` | Self-closing tags need `/` |
| `<!-- comment -->` | `{/* comment */}` | Different comment syntax |
| `onclick="handler()"` | `onClick={handler}` | camelCase and JavaScript expressions |

### 🔍 JSX Syntax Breakdown

#### 1. Basic JSX Element
```typescript
const element = <h1>Hello, World!</h1>;
```
This looks like HTML, but it's actually JavaScript!

#### 2. JSX with Attributes
```typescript
<section id="section">
  <p className="text">Content</p>
</section>
```
- Uses `id` attribute (same as HTML)
- Uses `className` instead of `class`

#### 3. Self-Closing Tags
```typescript
<WelcomeMessage />
<img src="logo.png" />
<input type="text" />
```
All self-closing tags must end with `/>`

#### 4. Multi-line JSX
```typescript
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);
```
Wrap multi-line JSX in parentheses `()`

#### 5. Single Parent Element
```typescript
// ❌ Invalid - Multiple root elements
return (
  <h1>Title</h1>
  <p>Paragraph</p>
);

// ✅ Valid - Single parent element
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);
```

### 🎨 Semantic HTML in JSX

This exercise demonstrates semantic HTML5 elements:

```typescript
<section>      {/* Thematic grouping of content */}
  <article>    {/* Self-contained content */}
    <h1>       {/* Main heading */}
    <h2>       {/* Subheading */}
    <p>        {/* Paragraph */}
  </article>
</section>
```

**Benefits of Semantic HTML**:
- 📖 Better readability for developers
- ♿ Improved accessibility for screen readers
- 🔍 Better SEO (Search Engine Optimization)
- 🎯 Clearer document structure

### 🔄 How JSX Works

**What you write**:
```typescript
function App() {
  return <h1>Hello, World!</h1>;
}
```

**What it becomes** (simplified):
```javascript
function App() {
  return React.createElement('h1', null, 'Hello, World!');
}
```

JSX is **syntactic sugar** for `React.createElement()` calls. The JSX compiler (Babel or TypeScript) transforms JSX into regular JavaScript function calls.

### ⚠️ Important Notes

> [!IMPORTANT]
> **JSX Must Return One Element**: Your JSX must always return a single root element. You can use:
> - `<div>` wrapper
> - `<section>`, `<article>`, or other semantic elements
> - React Fragment: `<>...</>` (doesn't add extra DOM node)

> [!TIP]
> **className vs class**: In JSX, always use `className` instead of `class` for CSS classes. This is because `class` is a reserved keyword in JavaScript.

### 📊 Component Comparison

| Aspect | WelcomeMessage | App |
|--------|----------------|-----|
| Syntax | Arrow function | Function declaration |
| Parent Element | `<div>` | `<section>` |
| Complexity | Simple | Moderate |
| Nesting | No nested components | Includes `<WelcomeMessage />` |
| Attributes | None | `id`, `className` |

### 🚀 Running the Project

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. Open your browser to the displayed local URL (typically `http://localhost:5173`)

You should see:
- "My Website" heading
- "Welcome To React" in an article section
- "Hello, World!" from the WelcomeMessage component
- "Welcome to learning JSX!" paragraph

### 📚 Additional Resources

- [Writing Markup with JSX - React](https://react.dev/learn/writing-markup-with-jsx)
- [JSX In Depth - React](https://react.dev/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript)
- [Introducing JSX - React Legacy Docs](https://legacy.reactjs.org/docs/introducing-jsx.html)

---

## 📖 Tiếng Việt

### Mô tả

Bài tập này giới thiệu JSX (JavaScript XML), phần mở rộng cú pháp cho phép bạn viết code giống HTML trực tiếp trong JavaScript. JSX là nền tảng cơ bản trong phát triển React và làm cho việc tạo giao diện người dùng trở nên trực quan và declarative.

### 🎯 Mục tiêu Học tập

- Hiểu JSX là gì và tại sao nó được sử dụng
- Viết cú pháp JSX trong các component React
- Tạo các component đơn giản với JSX
- Sử dụng các phần tử HTML semantic trong JSX
- Kết hợp nhiều component với nhau
- Hiểu sự khác biệt giữa JSX và HTML thuần

### 🏗️ Cấu trúc Dự án

```
src/
├── WelcomeMessage.tsx    # Component chào mừng đơn giản sử dụng JSX
├── App.tsx               # App chính với các phần tử HTML semantic
└── main.tsx             # Điểm vào ứng dụng
```

### 📦 Các Component

#### Component WelcomeMessage
**File**: [`WelcomeMessage.tsx`](./src/WelcomeMessage.tsx)

Component đơn giản minh họa cú pháp JSX cơ bản.

**Tính năng**:
- Sử dụng cú pháp arrow function
- Trả về JSX được bọc trong `<div>`
- Chứa các phần tử heading và paragraph

**Code**:
```typescript
const WelcomeMessage = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Welcome to learning JSX!</p>
        </div>
    );
};

export default WelcomeMessage;
```

**Những gì nó minh họa**:
- ✅ JSX trông giống HTML nhưng thực chất là JavaScript
- ✅ Các component trả về các phần tử JSX
- ✅ JSX phải được bọc trong một phần tử cha duy nhất (`<div>`)

#### Component App
**File**: [`App.tsx`](./src/App.tsx)

Component chính giới thiệu các phần tử HTML5 semantic trong JSX.

**Tính năng**:
- Sử dụng cú pháp khai báo `function` truyền thống
- Minh họa các phần tử HTML5 semantic (`<section>`, `<article>`)
- Cho thấy các thuộc tính JSX (`id`, `className`)
- Bao gồm component lồng nhau (`<WelcomeMessage />`)

**Code**:
```typescript
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <section id="section">
      <h1>My Website</h1>
      <article>
        <h2>Welcome To React</h2>
        <p className="text">Paragraph Content</p>
      </article>
      <WelcomeMessage />
    </section>
  )
}

export default App
```

**Những gì nó minh họa**:
- ✅ Các phần tử HTML semantic trong JSX
- ✅ Các thuộc tính JSX (`id`, `className`)
- ✅ Component composition (sử dụng `<WelcomeMessage />`)
- ✅ Cấu trúc JSX đúng với phần tử cha duy nhất

### 💡 JSX là gì?

**JSX (JavaScript XML)** là phần mở rộng cú pháp cho JavaScript cho phép bạn viết markup giống HTML bên trong file JavaScript.

#### Tại sao JSX?

| Tính năng | Lợi ích |
|-----------|---------|
| **Declarative** | Viết những gì bạn muốn thấy, không phải cách xây dựng nó |
| **Quen thuộc** | Trông giống HTML, dễ học và đọc |
| **Mạnh mẽ** | Toàn bộ sức mạnh JavaScript có sẵn bên trong markup |
| **Type-safe** | Hoạt động liền mạch với TypeScript |
| **Component-based** | Dễ dàng kết hợp và tái sử dụng các phần UI |

#### JSX KHÔNG PHẢI là HTML

Mặc dù JSX trông giống HTML, có những khác biệt quan trọng:

| HTML | JSX | Tại sao khác? |
|------|-----|---------------|
| `<div class="container">` | `<div className="container">` | `class` là từ khóa JavaScript |
| `<input type="text">` | `<input type="text" />` | Thẻ tự đóng cần `/` |
| `<!-- comment -->` | `{/* comment */}` | Cú pháp comment khác |
| `onclick="handler()"` | `onClick={handler}` | camelCase và biểu thức JavaScript |

### 🔍 Phân tích Cú pháp JSX

#### 1. Phần tử JSX Cơ bản
```typescript
const element = <h1>Hello, World!</h1>;
```
Trông giống HTML, nhưng thực chất là JavaScript!

#### 2. JSX với Thuộc tính
```typescript
<section id="section">
  <p className="text">Content</p>
</section>
```
- Sử dụng thuộc tính `id` (giống HTML)
- Sử dụng `className` thay vì `class`

#### 3. Thẻ Tự Đóng
```typescript
<WelcomeMessage />
<img src="logo.png" />
<input type="text" />
```
Tất cả thẻ tự đóng phải kết thúc với `/>`

#### 4. JSX Nhiều Dòng
```typescript
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);
```
Bọc JSX nhiều dòng trong dấu ngoặc đơn `()`

#### 5. Phần tử Cha Duy nhất
```typescript
// ❌ Không hợp lệ - Nhiều root element
return (
  <h1>Title</h1>
  <p>Paragraph</p>
);

// ✅ Hợp lệ - Phần tử cha duy nhất
return (
  <div>
    <h1>Title</h1>
    <p>Paragraph</p>
  </div>
);
```

### 🎨 HTML Semantic trong JSX

Bài tập này minh họa các phần tử HTML5 semantic:

```typescript
<section>      {/* Nhóm nội dung theo chủ đề */}
  <article>    {/* Nội dung độc lập */}
    <h1>       {/* Tiêu đề chính */}
    <h2>       {/* Tiêu đề phụ */}
    <p>        {/* Đoạn văn */}
  </article>
</section>
```

**Lợi ích của HTML Semantic**:
- 📖 Dễ đọc hơn cho developer
- ♿ Cải thiện khả năng tiếp cận cho screen reader
- 🔍 SEO tốt hơn (Tối ưu hóa Công cụ Tìm kiếm)
- 🎯 Cấu trúc tài liệu rõ ràng hơn

### 🔄 Cách JSX Hoạt động

**Những gì bạn viết**:
```typescript
function App() {
  return <h1>Hello, World!</h1>;
}
```

**Những gì nó trở thành** (đơn giản hóa):
```javascript
function App() {
  return React.createElement('h1', null, 'Hello, World!');
}
```

JSX là **syntactic sugar** cho các lời gọi `React.createElement()`. Trình biên dịch JSX (Babel hoặc TypeScript) chuyển đổi JSX thành các lời gọi hàm JavaScript thông thường.

### ⚠️ Ghi chú Quan trọng

> [!IMPORTANT]
> **JSX Phải Trả về Một Phần tử**: JSX của bạn phải luôn trả về một root element duy nhất. Bạn có thể sử dụng:
> - Wrapper `<div>`
> - `<section>`, `<article>`, hoặc các phần tử semantic khác
> - React Fragment: `<>...</>` (không thêm node DOM thừa)

> [!TIP]
> **className vs class**: Trong JSX, luôn sử dụng `className` thay vì `class` cho các CSS class. Điều này là do `class` là từ khóa được bảo lưu trong JavaScript.

### 📊 So sánh Component

| Khía cạnh | WelcomeMessage | App |
|-----------|----------------|-----|
| Cú pháp | Arrow function | Function declaration |
| Phần tử Cha | `<div>` | `<section>` |
| Độ phức tạp | Đơn giản | Trung bình |
| Lồng nhau | Không có component lồng | Bao gồm `<WelcomeMessage />` |
| Thuộc tính | Không có | `id`, `className` |

### 🚀 Chạy Dự án

1. Cài đặt dependencies:
   ```bash
   npm install
   # hoặc
   yarn install
   ```

2. Khởi động development server:
   ```bash
   npm run dev
   # hoặc
   yarn dev
   ```

3. Mở trình duyệt tới URL local hiển thị (thường là `http://localhost:5173`)

Bạn sẽ thấy:
- Tiêu đề "My Website"
- "Welcome To React" trong section article
- "Hello, World!" từ component WelcomeMessage
- Đoạn văn "Welcome to learning JSX!"

### 📚 Tài liệu Tham khảo

- [Writing Markup with JSX - React](https://react.dev/learn/writing-markup-with-jsx)
- [JSX In Depth - React](https://react.dev/learn/writing-markup-with-jsx#jsx-putting-markup-into-javascript)
- [Introducing JSX - React Legacy Docs](https://legacy.reactjs.org/docs/introducing-jsx.html)

---

**Created**: 2025-12-29  
**Tech Stack**: React 18 + TypeScript + Vite
