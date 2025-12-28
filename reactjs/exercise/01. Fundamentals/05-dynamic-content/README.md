# 05 - Dynamic Content / Nội dung Động

## 📖 English

### Description

This exercise demonstrates how to inject dynamic content into JSX using curly braces `{}`. You'll learn to render JavaScript expressions, variables, functions, and object properties directly in your React components with TypeScript.

### 🎯 Learning Objectives

- Understanding JSX curly braces `{}` syntax for dynamic content
- Rendering JavaScript expressions in JSX
- Displaying variables and function return values
- Accessing object properties dynamically
- Working with dates and arrays in JSX
- Using dynamic values for attributes (like `className`)

### 🏗️ Project Structure

```
src/
├── components/
│   ├── Greeting.tsx       # Dynamic greeting with current date
│   └── ProductInfo.tsx    # Product details from object
├── App.tsx                # Main app with various dynamic examples
└── main.tsx              # Application entry point
```

### 📦 Components

#### 1. App Component
**File**: [`App.tsx`](./src/App.tsx)

The main component showcasing various ways to use dynamic content in JSX.

**Features**:
- **Mathematical Expressions**: `{2 + 2}` - Calculates and displays results
- **Variables**: `{myName}` - Displays variable values
- **Arrays**: `{["Alex", "John", ...]}` - Renders array contents
- **Functions**: `{multiply(2, 2)}` - Calls functions and displays results
- **Dynamic Attributes**: `className={specialClass}` - Sets attributes dynamically

**Code Example**:
```typescript
const App = () => {
  const myName = "Richard Vu";
  const multiply = (a: number, b: number) => a * b;
  const specialClass = "simple-class";

  return (
    <>
      {/* Rendering Expression */}
      <p>2 + 2 = {2 + 2}</p>
      
      {/* Rendering Variable Value */}
      <h1>{myName}</h1>
      
      {/* Rendering Array */}
      <p>My Friends List: {["Alex", "John", "Waheed", "Jordan"]}</p>
      
      {/* Rendering Function Value */}
      <p>2 * 2 = {multiply(2, 2)}</p>
      
      {/* Rendering Class */}
      <p className={specialClass}>This is special class</p>
    </>
  );
};
```

#### 2. Greeting Component
**File**: [`Greeting.tsx`](./src/components/Greeting.tsx)

Displays a dynamic greeting message with the current date.

**Features**:
- Uses variables for greeting text
- Displays current date using JavaScript `Date` object
- Demonstrates calling object methods in JSX

**Code Example**:
```typescript
const Greeting = () => {
    const greet = "Hello";
    const date = new Date();

    return (
        <div>
            <h1>{greet}</h1>
            <p>Date: {date.getDate()}</p>
        </div>
    );
};
```

#### 3. ProductInfo Component
**File**: [`ProductInfo.tsx`](./src/components/ProductInfo.tsx)

Displays product information from an object.

**Features**:
- Creates a `product` object with multiple properties
- Accesses object properties using dot notation in JSX
- Demonstrates structured data rendering

**Product Object**:
```typescript
const product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock",
};
```

**Code Example**:
```typescript
const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In stock",
    };

    return (
        <div>
            <h1>Name: {product.name}</h1>
            <h1>Price: $ {product.price}</h1>
            <h1>Availability: {product.availability}</h1>
        </div>
    );
};
```

### 💡 Key Concepts Learned

#### 1. JSX Curly Braces `{}`
The curly braces allow you to "escape" into JavaScript from JSX:
```typescript
<p>The result is: {2 + 2}</p>  // Outputs: The result is: 4
```

#### 2. Types of Dynamic Content

| Type | Example | Output |
|------|---------|--------|
| Expression | `{2 + 2}` | `4` |
| Variable | `{myName}` | `Richard Vu` |
| Function | `{multiply(2, 2)}` | `4` |
| Object Property | `{product.name}` | `Laptop` |
| Array | `{["A", "B"]}` | `A,B` |
| Method Call | `{date.getDate()}` | Current day number |

#### 3. Dynamic Attributes
You can use `{}` for HTML attributes too:
```typescript
const specialClass = "highlight";
<p className={specialClass}>Text</p>
```

#### 4. Multiple Expressions
You can include multiple dynamic values in a single element:
```typescript
<p>Price: $ {product.price}</p>
<p>Total: ${quantity * price}</p>
```

### ⚠️ Important Notes

> [!IMPORTANT]
> **Valid JavaScript Expressions Only**: Inside `{}`, you can only use expressions (things that return a value), not statements like `if` or `for` loops.

**✅ Valid**:
```typescript
{2 + 2}
{myVariable}
{myFunction()}
{condition ? "Yes" : "No"}  // Ternary operator
```

**❌ Invalid**:
```typescript
{if (condition) { ... }}  // Use ternary instead
{for (let i = 0; ...) { ... }}  // Use .map() instead
```

> [!TIP]
> **Arrays in JSX**: When rendering arrays directly like `{["A", "B", "C"]}`, React will display them as comma-separated strings (`A,B,C`). For proper list rendering, use `.map()` (covered in the next exercise).

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

- [JavaScript in JSX with Curly Braces - React](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [TypeScript with React](https://react.dev/learn/typescript)
- [JSX Expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

---

## 📖 Tiếng Việt

### Mô tả

Bài tập này minh họa cách chèn nội dung động vào JSX bằng cách sử dụng dấu ngoặc nhọn `{}`. Bạn sẽ học cách render các biểu thức JavaScript, biến, hàm và thuộc tính object trực tiếp trong các component React với TypeScript.

### 🎯 Mục tiêu Học tập

- Hiểu cú pháp dấu ngoặc nhọn `{}` trong JSX cho nội dung động
- Render các biểu thức JavaScript trong JSX
- Hiển thị biến và giá trị trả về từ hàm
- Truy cập thuộc tính object một cách động
- Làm việc với date và array trong JSX
- Sử dụng giá trị động cho các thuộc tính (như `className`)

### 🏗️ Cấu trúc Dự án

```
src/
├── components/
│   ├── Greeting.tsx       # Lời chào động với ngày hiện tại
│   └── ProductInfo.tsx    # Chi tiết sản phẩm từ object
├── App.tsx                # App chính với nhiều ví dụ động
└── main.tsx              # Điểm vào ứng dụng
```

### 📦 Các Component

#### 1. Component App
**File**: [`App.tsx`](./src/App.tsx)

Component chính giới thiệu nhiều cách sử dụng nội dung động trong JSX.

**Tính năng**:
- **Biểu thức Toán học**: `{2 + 2}` - Tính toán và hiển thị kết quả
- **Biến**: `{myName}` - Hiển thị giá trị biến
- **Mảng**: `{["Alex", "John", ...]}` - Render nội dung mảng
- **Hàm**: `{multiply(2, 2)}` - Gọi hàm và hiển thị kết quả
- **Thuộc tính Động**: `className={specialClass}` - Đặt thuộc tính động

**Ví dụ Code**:
```typescript
const App = () => {
  const myName = "Richard Vu";
  const multiply = (a: number, b: number) => a * b;
  const specialClass = "simple-class";

  return (
    <>
      {/* Rendering Expression */}
      <p>2 + 2 = {2 + 2}</p>
      
      {/* Rendering Variable Value */}
      <h1>{myName}</h1>
      
      {/* Rendering Array */}
      <p>My Friends List: {["Alex", "John", "Waheed", "Jordan"]}</p>
      
      {/* Rendering Function Value */}
      <p>2 * 2 = {multiply(2, 2)}</p>
      
      {/* Rendering Class */}
      <p className={specialClass}>This is special class</p>
    </>
  );
};
```

#### 2. Component Greeting
**File**: [`Greeting.tsx`](./src/components/Greeting.tsx)

Hiển thị thông điệp chào động với ngày hiện tại.

**Tính năng**:
- Sử dụng biến cho văn bản chào
- Hiển thị ngày hiện tại bằng đối tượng `Date` của JavaScript
- Minh họa cách gọi phương thức object trong JSX

**Ví dụ Code**:
```typescript
const Greeting = () => {
    const greet = "Hello";
    const date = new Date();

    return (
        <div>
            <h1>{greet}</h1>
            <p>Date: {date.getDate()}</p>
        </div>
    );
};
```

#### 3. Component ProductInfo
**File**: [`ProductInfo.tsx`](./src/components/ProductInfo.tsx)

Hiển thị thông tin sản phẩm từ một object.

**Tính năng**:
- Tạo object `product` với nhiều thuộc tính
- Truy cập thuộc tính object bằng dot notation trong JSX
- Minh họa cách render dữ liệu có cấu trúc

**Object Product**:
```typescript
const product = {
    name: "Laptop",
    price: 1200,
    availability: "In stock",
};
```

**Ví dụ Code**:
```typescript
const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In stock",
    };

    return (
        <div>
            <h1>Name: {product.name}</h1>
            <h1>Price: $ {product.price}</h1>
            <h1>Availability: {product.availability}</h1>
        </div>
    );
};
```

### 💡 Các Khái niệm Chính Đã Học

#### 1. Dấu Ngoặc Nhọn `{}` trong JSX
Dấu ngoặc nhọn cho phép bạn "thoát" vào JavaScript từ JSX:
```typescript
<p>Kết quả là: {2 + 2}</p>  // Xuất: Kết quả là: 4
```

#### 2. Các Loại Nội dung Động

| Loại | Ví dụ | Kết quả |
|------|--------|---------|
| Biểu thức | `{2 + 2}` | `4` |
| Biến | `{myName}` | `Richard Vu` |
| Hàm | `{multiply(2, 2)}` | `4` |
| Thuộc tính Object | `{product.name}` | `Laptop` |
| Mảng | `{["A", "B"]}` | `A,B` |
| Gọi Phương thức | `{date.getDate()}` | Số ngày hiện tại |

#### 3. Thuộc tính Động
Bạn cũng có thể sử dụng `{}` cho các thuộc tính HTML:
```typescript
const specialClass = "highlight";
<p className={specialClass}>Text</p>
```

#### 4. Nhiều Biểu thức
Bạn có thể bao gồm nhiều giá trị động trong một phần tử:
```typescript
<p>Giá: $ {product.price}</p>
<p>Tổng: ${quantity * price}</p>
```

### ⚠️ Ghi chú Quan trọng

> [!IMPORTANT]
> **Chỉ Biểu thức JavaScript Hợp lệ**: Bên trong `{}`, bạn chỉ có thể sử dụng các biểu thức (những thứ trả về giá trị), không phải các câu lệnh như `if` hoặc vòng lặp `for`.

**✅ Hợp lệ**:
```typescript
{2 + 2}
{myVariable}
{myFunction()}
{condition ? "Yes" : "No"}  // Toán tử ternary
```

**❌ Không hợp lệ**:
```typescript
{if (condition) { ... }}  // Sử dụng ternary thay thế
{for (let i = 0; ...) { ... }}  // Sử dụng .map() thay thế
```

> [!TIP]
> **Mảng trong JSX**: Khi render mảng trực tiếp như `{["A", "B", "C"]}`, React sẽ hiển thị chúng dưới dạng chuỗi phân tách bởi dấu phẩy (`A,B,C`). Để render danh sách đúng cách, sử dụng `.map()` (được đề cập trong bài tập tiếp theo).

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

- [JavaScript in JSX with Curly Braces - React](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [TypeScript với React](https://react.dev/learn/typescript)
- [JSX Expressions - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

---

**Created**: 2025-12-29  
**Tech Stack**: React 18 + TypeScript + Vite