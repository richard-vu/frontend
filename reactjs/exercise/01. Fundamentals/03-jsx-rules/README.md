# 03 - JSX Rules / Quy tắc JSX

## 📖 English

### Description

This exercise teaches the fundamental rules and syntax of JSX (JavaScript XML), the special syntax that allows you to write HTML-like code in React. Understanding these rules is essential for writing valid React components.

### 🎯 Learning Objectives

- Understanding JSX syntax and its rules
- Learning the difference between HTML and JSX
- Writing valid JSX that compiles correctly
- Understanding why JSX needs specific syntax rules
- Applying camelCase naming conventions for attributes

### 🏗️ Project Structure

```
src/
├── JSXRules.tsx      # Component demonstrating JSX rules
├── App.tsx           # Main app component
└── main.tsx          # Application entry point
```

### 📦 Components

#### JSXRules Component
**File**: [`JSXRules.tsx`](./src/JSXRules.tsx)

A simple component that displays the core rules of JSX.

**Code**:
```typescript
const JSXRules = () => {
    return (
        <div>
            <h1>JSX Rules</h1>
            <p>JSX must return a single parent element.</p>
            <p>JSX elements must be properly closed.</p>
            <p>
                JSX attributes are written using camelCase (e.g., className instead of
                class).
            </p>
        </div>
    );
};

export default JSXRules;
```

#### App Component
**File**: [`App.tsx`](./src/App.tsx)

The main component that renders the JSXRules component.

**Code**:
```typescript
import JSXRules from "./JSXRules";

function App() {
  return (
    <>
      <JSXRules />
    </>
  )
}

export default App
```

### 📋 The Essential JSX Rules

#### 1. **Single Parent Element** 
JSX must return a single parent element. You cannot return multiple sibling elements without a wrapper.

**❌ Invalid (Multiple Root Elements)**:
```typescript
const Component = () => {
    return (
        <h1>Title</h1>
        <p>Paragraph</p>
    );
};
```

**✅ Valid (Single Parent - div)**:
```typescript
const Component = () => {
    return (
        <div>
            <h1>Title</h1>
            <p>Paragraph</p>
        </div>
    );
};
```

**✅ Valid (React Fragment)**:
```typescript
const Component = () => {
    return (
        <>
            <h1>Title</h1>
            <p>Paragraph</p>
        </>
    );
};
```

> [!TIP]
> Use React Fragments (`<>...</>`) when you don't want to add an extra DOM element. Fragments let you group elements without adding extra nodes to the DOM.

#### 2. **Properly Closed Elements**
All JSX elements must be properly closed. Self-closing tags require a `/` at the end.

**❌ Invalid (Unclosed Tags)**:
```typescript
<img src="logo.png">
<input type="text">
<br>
```

**✅ Valid (Properly Closed)**:
```typescript
<img src="logo.png" />
<input type="text" />
<br />
```

**✅ Valid (With Closing Tag)**:
```typescript
<div>Content</div>
<p>Paragraph</p>
```

#### 3. **camelCase Attributes**
JSX attributes use camelCase instead of kebab-case or lowercase. This is because JSX becomes JavaScript, and some HTML attributes conflict with JavaScript keywords.

**Common Attribute Conversions**:

| HTML | JSX | Reason |
|------|-----|--------|
| `class` | `className` | `class` is a reserved JavaScript keyword |
| `for` | `htmlFor` | `for` is a reserved JavaScript keyword |
| `tabindex` | `tabIndex` | camelCase convention |
| `onclick` | `onClick` | camelCase convention |
| `onchange` | `onChange` | camelCase convention |
| `maxlength` | `maxLength` | camelCase convention |
| `readonly` | `readOnly` | camelCase convention |

**❌ Invalid (HTML Syntax)**:
```typescript
<div class="container">
    <label for="name">Name:</label>
    <input type="text" id="name" maxlength="50">
</div>
```

**✅ Valid (JSX Syntax)**:
```typescript
<div className="container">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" maxLength={50} />
</div>
```

#### 4. **JavaScript Expressions with `{}`**
Use curly braces `{}` to embed JavaScript expressions in JSX.

```typescript
const name = "Richard";
const Component = () => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>2 + 2 = {2 + 2}</p>
        </div>
    );
};
```

#### 5. **Comments in JSX**
Comments in JSX must be inside curly braces and use JavaScript comment syntax.

**❌ Invalid (HTML Comments)**:
```typescript
<!-- This won't work -->
```

**✅ Valid (JSX Comments)**:
```typescript
{/* This is a comment */}
{/* 
    Multi-line
    comment
*/}
```

### 🔍 Why These Rules Exist

> [!NOTE]
> **JSX is NOT HTML**: JSX looks like HTML, but it's actually JavaScript. When you write JSX, it gets transpiled (converted) into JavaScript function calls.

**What you write**:
```typescript
<div className="container">
    <h1>Hello</h1>
</div>
```

**What it becomes** (simplified):
```javascript
React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, 'Hello')
)
```

This is why:
- Multiple root elements don't work (function can only return one value)
- All tags must be closed (proper JavaScript syntax)
- Attributes use camelCase (they become JavaScript object properties)
- `class` becomes `className` (`class` is a JavaScript keyword)

### ⚠️ Common JSX Mistakes

| Mistake | Issue | Solution |
|---------|-------|----------|
| Using `class` | Reserved keyword | Use `className` |
| Multiple root elements | Invalid JSX | Wrap in `<div>` or `<>` |
| Unclosed self-closing tags | Parse error | Add `/` like `<img />` |
| HTML comments | Not valid in JSX | Use `{/* comment */}` |
| Inline styles as strings | JSX expects object | Use `style={{ color: 'red' }}` |

### 💡 Additional JSX Features

#### Inline Styles
In JSX, the `style` attribute accepts a JavaScript object with camelCased properties:

**❌ Invalid (HTML String)**:
```typescript
<div style="color: red; font-size: 16px;">Text</div>
```

**✅ Valid (JSX Object)**:
```typescript
<div style={{ color: 'red', fontSize: '16px' }}>Text</div>
```

#### Boolean Attributes
For boolean attributes, you can use shorthand:

```typescript
{/* Both are equivalent */}
<input disabled={true} />
<input disabled />

{/* To disable: */}
<input disabled={false} />
```

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

### 📚 Additional Resources

- [Writing Markup with JSX - React](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces - React](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [JSX In Depth - React](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx)

---

## 📖 Tiếng Việt

### Mô tả

Bài tập này dạy các quy tắc và cú pháp cơ bản của JSX (JavaScript XML), cú pháp đặc biệt cho phép bạn viết code giống HTML trong React. Hiểu các quy tắc này là điều cần thiết để viết các component React hợp lệ.

### 🎯 Mục tiêu Học tập

- Hiểu cú pháp JSX và các quy tắc của nó
- Học sự khác biệt giữa HTML và JSX
- Viết JSX hợp lệ để compile chính xác
- Hiểu tại sao JSX cần các quy tắc cú pháp cụ thể
- Áp dụng quy ước đặt tên camelCase cho các thuộc tính

### 🏗️ Cấu trúc Dự án

```
src/
├── JSXRules.tsx      # Component minh họa quy tắc JSX
├── App.tsx           # Component app chính
└── main.tsx          # Điểm vào ứng dụng
```

### 📦 Các Component

#### Component JSXRules
**File**: [`JSXRules.tsx`](./src/JSXRules.tsx)

Component đơn giản hiển thị các quy tắc cốt lõi của JSX.

**Code**:
```typescript
const JSXRules = () => {
    return (
        <div>
            <h1>JSX Rules</h1>
            <p>JSX must return a single parent element.</p>
            <p>JSX elements must be properly closed.</p>
            <p>
                JSX attributes are written using camelCase (e.g., className instead of
                class).
            </p>
        </div>
    );
};

export default JSXRules;
```

#### Component App
**File**: [`App.tsx`](./src/App.tsx)

Component chính render component JSXRules.

**Code**:
```typescript
import JSXRules from "./JSXRules";

function App() {
  return (
    <>
      <JSXRules />
    </>
  )
}

export default App
```

### 📋 Các Quy tắc JSX Thiết yếu

#### 1. **Phần tử Cha Duy nhất**
JSX phải trả về một phần tử cha duy nhất. Bạn không thể trả về nhiều phần tử anh em mà không có wrapper.

**❌ Không hợp lệ (Nhiều Root Element)**:
```typescript
const Component = () => {
    return (
        <h1>Title</h1>
        <p>Paragraph</p>
    );
};
```

**✅ Hợp lệ (Cha Duy nhất - div)**:
```typescript
const Component = () => {
    return (
        <div>
            <h1>Title</h1>
            <p>Paragraph</p>
        </div>
    );
};
```

**✅ Hợp lệ (React Fragment)**:
```typescript
const Component = () => {
    return (
        <>
            <h1>Title</h1>
            <p>Paragraph</p>
        </>
    );
};
```

> [!TIP]
> Sử dụng React Fragments (`<>...</>`) khi bạn không muốn thêm phần tử DOM bổ sung. Fragment cho phép bạn nhóm các phần tử mà không thêm node thừa vào DOM.

#### 2. **Đóng Thẻ Đúng cách**
Tất cả các phần tử JSX phải được đóng đúng cách. Các thẻ tự đóng yêu cầu `/` ở cuối.

**❌ Không hợp lệ (Thẻ Chưa Đóng)**:
```typescript
<img src="logo.png">
<input type="text">
<br>
```

**✅ Hợp lệ (Đóng Đúng cách)**:
```typescript
<img src="logo.png" />
<input type="text" />
<br />
```

**✅ Hợp lệ (Với Thẻ Đóng)**:
```typescript
<div>Content</div>
<p>Paragraph</p>
```

#### 3. **Thuộc tính camelCase**
Các thuộc tính JSX sử dụng camelCase thay vì kebab-case hoặc chữ thường. Điều này là do JSX trở thành JavaScript, và một số thuộc tính HTML xung đột với từ khóa JavaScript.

**Chuyển đổi Thuộc tính Thông dụng**:

| HTML | JSX | Lý do |
|------|-----|-------|
| `class` | `className` | `class` là từ khóa JavaScript được bảo lưu |
| `for` | `htmlFor` | `for` là từ khóa JavaScript được bảo lưu |
| `tabindex` | `tabIndex` | Quy ước camelCase |
| `onclick` | `onClick` | Quy ước camelCase |
| `onchange` | `onChange` | Quy ước camelCase |
| `maxlength` | `maxLength` | Quy ước camelCase |
| `readonly` | `readOnly` | Quy ước camelCase |

**❌ Không hợp lệ (Cú pháp HTML)**:
```typescript
<div class="container">
    <label for="name">Name:</label>
    <input type="text" id="name" maxlength="50">
</div>
```

**✅ Hợp lệ (Cú pháp JSX)**:
```typescript
<div className="container">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" maxLength={50} />
</div>
```

#### 4. **Biểu thức JavaScript với `{}`**
Sử dụng dấu ngoặc nhọn `{}` để nhúng biểu thức JavaScript trong JSX.

```typescript
const name = "Richard";
const Component = () => {
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>2 + 2 = {2 + 2}</p>
        </div>
    );
};
```

#### 5. **Comment trong JSX**
Comment trong JSX phải ở trong dấu ngoặc nhọn và sử dụng cú pháp comment JavaScript.

**❌ Không hợp lệ (Comment HTML)**:
```typescript
<!-- This won't work -->
```

**✅ Hợp lệ (Comment JSX)**:
```typescript
{/* This is a comment */}
{/* 
    Multi-line
    comment
*/}
```

### 🔍 Tại sao Các Quy tắc này Tồn tại

> [!NOTE]
> **JSX KHÔNG phải HTML**: JSX trông giống HTML, nhưng thực chất là JavaScript. Khi bạn viết JSX, nó được transpile (chuyển đổi) thành các lời gọi hàm JavaScript.

**Những gì bạn viết**:
```typescript
<div className="container">
    <h1>Hello</h1>
</div>
```

**Những gì nó trở thành** (đơn giản hóa):
```javascript
React.createElement(
    'div',
    { className: 'container' },
    React.createElement('h1', null, 'Hello')
)
```

Đây là lý do tại sao:
- Nhiều root element không hoạt động (hàm chỉ có thể return một giá trị)
- Tất cả thẻ phải được đóng (cú pháp JavaScript đúng)
- Thuộc tính sử dụng camelCase (chúng trở thành thuộc tính object JavaScript)
- `class` trở thành `className` (`class` là từ khóa JavaScript)

### ⚠️ Lỗi JSX Thường gặp

| Lỗi | Vấn đề | Giải pháp |
|-----|--------|-----------|
| Sử dụng `class` | Từ khóa được bảo lưu | Sử dụng `className` |
| Nhiều root element | JSX không hợp lệ | Bọc trong `<div>` hoặc `<>` |
| Thẻ tự đóng chưa đóng | Lỗi parse | Thêm `/` như `<img />` |
| Comment HTML | Không hợp lệ trong JSX | Sử dụng `{/* comment */}` |
| Inline style dạng chuỗi | JSX yêu cầu object | Sử dụng `style={{ color: 'red' }}` |

### 💡 Tính năng JSX Bổ sung

#### Inline Styles
Trong JSX, thuộc tính `style` chấp nhận object JavaScript với các thuộc tính camelCase:

**❌ Không hợp lệ (Chuỗi HTML)**:
```typescript
<div style="color: red; font-size: 16px;">Text</div>
```

**✅ Hợp lệ (Object JSX)**:
```typescript
<div style={{ color: 'red', fontSize: '16px' }}>Text</div>
```

#### Thuộc tính Boolean
Đối với thuộc tính boolean, bạn có thể sử dụng cú pháp rút gọn:

```typescript
{/* Cả hai đều tương đương */}
<input disabled={true} />
<input disabled />

{/* Để vô hiệu hóa: */}
<input disabled={false} />
```

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

### 📚 Tài liệu Tham khảo

- [Writing Markup with JSX - React](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces - React](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [JSX In Depth - React](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx)

---

**Created**: 2025-12-29  
**Tech Stack**: React 18 + TypeScript + Vite