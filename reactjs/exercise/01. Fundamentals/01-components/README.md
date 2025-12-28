# 01 - Components / Components (Thành phần)

## 📖 English

### Description

This is your first React exercise! It introduces the fundamental concept of **components** - the building blocks of React applications. Components let you split the UI into independent, reusable pieces that you can think about in isolation.

### 🎯 Learning Objectives

- Understanding what React components are
- Creating your first custom component
- Learning component syntax (arrow function)
- Importing and using components
- Understanding the component hierarchy
- Recognizing the difference between components and regular functions

### 🏗️ Project Structure

```
src/
├── Greet.tsx        # Your first custom component
├── App.tsx          # Main app component
└── main.tsx         # Application entry point
```

### 📦 Components

#### Greet Component
**File**: [`Greet.tsx`](./src/Greet.tsx)

Your first custom React component! A simple greeting component that displays "Greet" in an h1 element.

**Code**:
```typescript
const Greet = () => {
    return <h1>Greet</h1>;
};

export default Greet;
```

**What makes this a component?**
- ✅ It's a JavaScript function
- ✅ Name starts with a capital letter (`Greet`, not `greet`)
- ✅ Returns JSX (React elements)
- ✅ Can be reused anywhere in your app
- ✅ Exported for use in other files

#### App Component  
**File**: [`App.tsx`](./src/App.tsx)

The main application component that uses your custom `Greet` component.

**Code**:
```typescript
import Greet from "./Greet";

function App() {
  return (
    <>
      <div>Component 🤝</div>
      <Greet />
    </>
  )
}

export default App
```

**What it demonstrates**:
- ✅ Imports a custom component
- ✅ Uses React Fragment (`<>`) to wrap multiple elements
- ✅ Renders the custom component using `<Greet />`
- ✅ Combines regular JSX with custom components

#### main.tsx - Entry Point
**File**: [`main.tsx`](./src/main.tsx)

The entry point where React connects to the DOM.

**Code**:
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**What it does**:
- Finds the `root` element in `index.html`
- Creates a React root
- Renders the `App` component inside `StrictMode`
- `StrictMode` helps catch potential problems during development

### 💡 What is a Component?

**Components are the building blocks of React applications.** Think of them as custom, reusable HTML elements.

#### Key Characteristics

| Characteristic | Description | Example |
|----------------|-------------|---------|
| **Function** | Components are JavaScript functions | `const Greet = () => { ... }` |
| **Capital Letter** | Must start with uppercase | `Greet` ✅ not `greet` ❌ |
| **Returns JSX** | Returns React elements (JSX) | `return <h1>Greet</h1>` |
| **Reusable** | Can be used multiple times | `<Greet />` anywhere |
| **Composable** | Can contain other components | `<App>` contains `<Greet>` |

#### Component vs Regular Function

```typescript
// ❌ This is a regular function (not a component)
const greet = () => {
    return "Hello";
}

// ✅ This is a React component
const Greet = () => {
    return <h1>Hello</h1>;
}
```

**Differences**:
- Regular functions return data (strings, numbers, objects)
- Components return JSX (React elements)
- Regular functions use lowercase names
- Components use PascalCase (capital first letter)

### 🎨 Component Syntax Variations

React components can be written in different ways:

#### 1. Arrow Function (Used in this exercise)
```typescript
const Greet = () => {
    return <h1>Greet</h1>;
};
```

#### 2. Traditional Function Declaration
```typescript
function Greet() {
    return <h1>Greet</h1>;
}
```

#### 3. Arrow Function with Implicit Return
```typescript
const Greet = () => <h1>Greet</h1>;
```

**All three are valid!** They produce the exact same result. Choose the style you prefer.

### 🔄 How Components Work

#### Component Hierarchy
```
main.tsx
  └── App
      ├── <div>Component 🤝</div>
      └── Greet
          └── <h1>Greet</h1>
```

#### The Flow
1. **Entry Point**: `main.tsx` runs first
2. **Root Creation**: React creates a root attached to DOM element `#root`
3. **App Renders**: The `App` component renders
4. **Greet Renders**: Inside `App`, the `Greet` component renders
5. **Result**: Final HTML structure is displayed in the browser

### 📋 Component Rules

> [!IMPORTANT]
> **Component Naming**: Component names must start with a capital letter. This is how React distinguishes between HTML tags and custom components.

```typescript
// ✅ Correct - Custom component
<Greet />

// ❌ Wrong - React thinks this is an HTML tag
<greet />
```

> [!NOTE]
> **Export/Import Pattern**: Components need to be exported from their file and imported where they're used.

```typescript
// In Greet.tsx
export default Greet;

// In App.tsx
import Greet from "./Greet";
```

### 🎯 Using Components

#### Single Use
```typescript
<Greet />
```

#### Multiple Uses (Reusability!)
```typescript
function App() {
  return (
    <>
      <Greet />
      <Greet />
      <Greet />
    </>
  )
}
// Renders "Greet" heading three times!
```

This is the power of components - write once, use many times! 🚀

### 🔍 Self-Closing Tags

Notice the component is used as `<Greet />` not `<Greet></Greet>`. This is a **self-closing tag**.

```typescript
// Both are valid:
<Greet />           // Self-closing (common when no children)
<Greet></Greet>     // With closing tag (useful when passing children)
```

For components without children (like our `Greet`), self-closing is preferred and cleaner.

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
- "Component 🤝" (from the div in App)
- "Greet" as a large heading (from the Greet component)

### 🎓 Key Takeaways

1. **Components are functions** that return JSX
2. **Component names** must start with a capital letter
3. **Components are reusable** - use them multiple times anywhere
4. **Components compose** - they can contain other components
5. **Export/Import** allows components to be shared between files

### 📚 Additional Resources

- [Your First Component - React](https://react.dev/learn/your-first-component)
- [Components and Props - React](https://react.dev/learn/passing-props-to-a-component)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

---

## 📖 Tiếng Việt

### Mô tả

Đây là bài tập React đầu tiên của bạn! Nó giới thiệu khái niệm cơ bản về **components** - các khối xây dựng của ứng dụng React. Component cho phép bạn chia UI thành các phần độc lập, có thể tái sử dụng mà bạn có thể suy nghĩ một cách riêng biệt.

### 🎯 Mục tiêu Học tập

- Hiểu React component là gì
- Tạo component tùy chỉnh đầu tiên của bạn
- Học cú pháp component (arrow function)
- Import và sử dụng component
- Hiểu cấu trúc phân cấp component
- Nhận biết sự khác biệt giữa component và hàm thông thường

### 🏗️ Cấu trúc Dự án

```
src/
├── Greet.tsx        # Component tùy chỉnh đầu tiên của bạn
├── App.tsx          # Component app chính
└── main.tsx         # Điểm vào ứng dụng
```

### 📦 Các Component

#### Component Greet
**File**: [`Greet.tsx`](./src/Greet.tsx)

Component React tùy chỉnh đầu tiên của bạn! Component chào đơn giản hiển thị "Greet" trong phần tử h1.

**Code**:
```typescript
const Greet = () => {
    return <h1>Greet</h1>;
};

export default Greet;
```

**Điều gì làm cho đây là một component?**
- ✅ Đây là một hàm JavaScript
- ✅ Tên bắt đầu bằng chữ in hoa (`Greet`, không phải `greet`)
- ✅ Trả về JSX (các phần tử React)
- ✅ Có thể tái sử dụng ở bất kỳ đâu trong app của bạn
- ✅ Được export để sử dụng trong các file khác

#### Component App
**File**: [`App.tsx`](./src/App.tsx)

Component ứng dụng chính sử dụng component `Greet` tùy chỉnh của bạn.

**Code**:
```typescript
import Greet from "./Greet";

function App() {
  return (
    <>
      <div>Component 🤝</div>
      <Greet />
    </>
  )
}

export default App
```

**Những gì nó minh họa**:
- ✅ Import một component tùy chỉnh
- ✅ Sử dụng React Fragment (`<>`) để bọc nhiều phần tử
- ✅ Render component tùy chỉnh bằng cách sử dụng `<Greet />`
- ✅ Kết hợp JSX thông thường với các component tùy chỉnh

#### main.tsx - Điểm Vào
**File**: [`main.tsx`](./src/main.tsx)

Điểm vào nơi React kết nối với DOM.

**Code**:
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Nó làm gì**:
- Tìm phần tử `root` trong `index.html`
- Tạo một React root
- Render component `App` bên trong `StrictMode`
- `StrictMode` giúp phát hiện các vấn đề tiềm ẩn trong quá trình phát triển

### 💡 Component là gì?

**Component là các khối xây dựng của ứng dụng React.** Hãy nghĩ về chúng như các phần tử HTML tùy chỉnh, có thể tái sử dụng.

#### Đặc điểm Chính

| Đặc điểm | Mô tả | Ví dụ |
|----------|-------|-------|
| **Function** | Component là các hàm JavaScript | `const Greet = () => { ... }` |
| **Chữ in hoa** | Phải bắt đầu bằng chữ hoa | `Greet` ✅ không phải `greet` ❌ |
| **Trả về JSX** | Trả về các phần tử React (JSX) | `return <h1>Greet</h1>` |
| **Tái sử dụng** | Có thể sử dụng nhiều lần | `<Greet />` ở bất cứ đâu |
| **Có thể kết hợp** | Có thể chứa các component khác | `<App>` chứa `<Greet>` |

#### Component vs Hàm Thông thường

```typescript
// ❌ Đây là hàm thông thường (không phải component)
const greet = () => {
    return "Hello";
}

// ✅ Đây là React component
const Greet = () => {
    return <h1>Hello</h1>;
}
```

**Sự khác biệt**:
- Hàm thông thường trả về dữ liệu (chuỗi, số, object)
- Component trả về JSX (các phần tử React)
- Hàm thông thường sử dụng tên viết thường
- Component sử dụng PascalCase (chữ cái đầu viết hoa)

### 🎨 Các Biến thể Cú pháp Component

Các component React có thể được viết theo nhiều cách khác nhau:

#### 1. Arrow Function (Sử dụng trong bài tập này)
```typescript
const Greet = () => {
    return <h1>Greet</h1>;
};
```

#### 2. Khai báo Function Truyền thống
```typescript
function Greet() {
    return <h1>Greet</h1>;
}
```

#### 3. Arrow Function với Implicit Return
```typescript
const Greet = () => <h1>Greet</h1>;
```

**Cả ba đều hợp lệ!** Chúng tạo ra kết quả hoàn toàn giống nhau. Chọn phong cách bạn thích.

### 🔄 Cách Component Hoạt động

#### Cấu trúc Phân cấp Component
```
main.tsx
  └── App
      ├── <div>Component 🤝</div>
      └── Greet
          └── <h1>Greet</h1>
```

#### Luồng Hoạt động
1. **Điểm Vào**: `main.tsx` chạy đầu tiên
2. **Tạo Root**: React tạo một root gắn với phần tử DOM `#root`
3. **App Render**: Component `App` được render
4. **Greet Render**: Bên trong `App`, component `Greet` được render
5. **Kết quả**: Cấu trúc HTML cuối cùng được hiển thị trong trình duyệt

### 📋 Quy tắc Component

> [!IMPORTANT]
> **Đặt tên Component**: Tên component phải bắt đầu bằng chữ in hoa. Đây là cách React phân biệt giữa thẻ HTML và component tùy chỉnh.

```typescript
// ✅ Đúng - Component tùy chỉnh
<Greet />

// ❌ Sai - React nghĩ đây là thẻ HTML
<greet />
```

> [!NOTE]
> **Pattern Export/Import**: Component cần được export từ file của chúng và import nơi chúng được sử dụng.

```typescript
// Trong Greet.tsx
export default Greet;

// Trong App.tsx
import Greet from "./Greet";
```

### 🎯 Sử dụng Component

#### Sử dụng Đơn
```typescript
<Greet />
```

#### Sử dụng Nhiều lần (Khả năng Tái sử dụng!)
```typescript
function App() {
  return (
    <>
      <Greet />
      <Greet />
      <Greet />
    </>
  )
}
// Render heading "Greet" ba lần!
```

Đây là sức mạnh của component - viết một lần, sử dụng nhiều lần! 🚀

### 🔍 Thẻ Tự Đóng

Lưu ý component được sử dụng như `<Greet />` chứ không phải `<Greet></Greet>`. Đây là **thẻ tự đóng**.

```typescript
// Cả hai đều hợp lệ:
<Greet />           // Tự đóng (phổ biến khi không có children)
<Greet></Greet>     // Với thẻ đóng (hữu ích khi truyền children)
```

Đối với các component không có children (như `Greet` của chúng ta), tự đóng được ưa chuộng hơn và sạch sẽ hơn.

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
- "Component 🤝" (từ div trong App)
- "Greet" như một heading lớn (từ component Greet)

### 🎓 Những Điều Quan trọng

1. **Component là các hàm** trả về JSX
2. **Tên component** phải bắt đầu bằng chữ in hoa
3. **Component có thể tái sử dụng** - sử dụng chúng nhiều lần ở bất cứ đâu
4. **Component có thể kết hợp** - chúng có thể chứa các component khác
5. **Export/Import** cho phép các component được chia sẻ giữa các file

### 📚 Tài liệu Tham khảo

- [Your First Component - React](https://react.dev/learn/your-first-component)
- [Components and Props - React](https://react.dev/learn/passing-props-to-a-component)
- [Thinking in React](https://react.dev/learn/thinking-in-react)

---

**Created**: 2025-12-29  
**Tech Stack**: React 18 + TypeScript + Vite
