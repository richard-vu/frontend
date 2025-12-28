# 06 - List of Data / Danh sách Dữ liệu

## 📖 English

### Description

This exercise demonstrates how to render lists of data in React using the `.map()` method. It covers essential concepts for working with arrays and displaying dynamic content in React components with TypeScript.

### 🎯 Learning Objectives

- Understanding how to render lists in React using `.map()`
- Working with TypeScript interfaces for component props
- Implementing proper key props for list items
- Creating reusable list components
- Handling different data structures (strings, objects)

### 🏗️ Project Structure

```
src/
├── components/
│   ├── Shopping.tsx       # Simple string list component
│   ├── ProductList.tsx    # Product list with price details
│   └── UserList.tsx       # User list with age information
├── App.tsx                # Main application component
├── Shopping.css           # Styling for list components
└── main.tsx              # Application entry point
```

### 📦 Components

#### 1. Shopping Component
**File**: [`Shopping.tsx`](./src/components/Shopping.tsx)

Displays a simple shopping list of items.

**Props**:
```typescript
interface ShoppingProps {
    items: string[];
}
```

**Features**:
- Renders an ordered list of shopping items
- Basic styling with hover effects
- Demonstrates simple array mapping

#### 2. ProductList Component
**File**: [`ProductList.tsx`](./src/components/ProductList.tsx)

Displays a list of products with names and prices.

**Props**:
```typescript
interface ProductListProps {
    products: {
        id: number;
        name: string;
        price: string;
    }[];
}
```

**Features**:
- Renders products with structured data
- Shows how to access nested object properties
- Uses index as key (see best practices note below)

#### 3. UserList Component
**File**: [`UserList.tsx`](./src/components/UserList.tsx)

Displays a list of users with names and ages.

**Props**:
```typescript
interface UserListProps {
    users: {
        id: number;
        name: string;
        age: number;
    }[];
}
```

**Features**:
- Demonstrates mapping over user objects
- Displays multiple properties per user
- Type-safe props with TypeScript

### 🎨 Styling

The [`Shopping.css`](./src/Shopping.css) file provides:
- Clean, centered layout
- Light blue gradient background
- Card-style list items with shadows
- Smooth hover animations (scale transform)

### 💡 Key Concepts Learned

1. **Array.map() Method**: Transform arrays into JSX elements
   ```typescript
   {items.map((item) => (
       <li key={index}>{item}</li>
   ))}
   ```

2. **TypeScript Interfaces**: Define prop types for type safety
   ```typescript
   interface ShoppingProps {
       items: string[];
   }
   ```

3. **Component Props Destructuring**: Clean prop access
   ```typescript
   const Shopping = ({ items }: ShoppingProps) => { ... }
   ```

4. **Key Props**: Essential for React's reconciliation
   ```typescript
   <li key={product.id}>{product.name}</li>
   ```

### ⚠️ Best Practices Note

> [!IMPORTANT]
> **About List Keys**: This exercise uses `index` as the key in some components for simplicity. However, in production applications, you should:
> - Use unique IDs from your data when available (like `product.id` or `user.id`)
> - Avoid using array indices as keys when the list can be reordered, filtered, or modified
> - Never use `Math.random()` for keys, as it changes on every render

**Better approach**:
```typescript
{products.map((product) => (
    <div key={product.id}>  {/* ✅ Use unique ID */}
        <h1>Name: {product.name}</h1>
        <h1>Price: {product.price}</h1>
    </div>
))}
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

- [React Lists and Keys](https://react.dev/learn/rendering-lists)
- [TypeScript with React](https://react.dev/learn/typescript)
- [Array.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

## 📖 Tiếng Việt

### Mô tả

Bài tập này minh họa cách render danh sách dữ liệu trong React bằng phương thức `.map()`. Nó bao gồm các khái niệm thiết yếu để làm việc với mảng và hiển thị nội dung động trong các component React với TypeScript.

### 🎯 Mục tiêu Học tập

- Hiểu cách render danh sách trong React bằng `.map()`
- Làm việc với TypeScript interfaces cho props của component
- Triển khai key props phù hợp cho các mục trong danh sách
- Tạo các component danh sách có thể tái sử dụng
- Xử lý các cấu trúc dữ liệu khác nhau (chuỗi, đối tượng)

### 🏗️ Cấu trúc Dự án

```
src/
├── components/
│   ├── Shopping.tsx       # Component danh sách chuỗi đơn giản
│   ├── ProductList.tsx    # Danh sách sản phẩm với chi tiết giá
│   └── UserList.tsx       # Danh sách người dùng với thông tin tuổi
├── App.tsx                # Component ứng dụng chính
├── Shopping.css           # CSS cho các component danh sách
└── main.tsx              # Điểm vào ứng dụng
```

### 📦 Các Component

#### 1. Component Shopping
**File**: [`Shopping.tsx`](./src/components/Shopping.tsx)

Hiển thị danh sách mua sắm đơn giản.

**Props**:
```typescript
interface ShoppingProps {
    items: string[];
}
```

**Tính năng**:
- Render danh sách có thứ tự các mặt hàng
- Styling cơ bản với hiệu ứng hover
- Minh họa mapping mảng đơn giản

#### 2. Component ProductList
**File**: [`ProductList.tsx`](./src/components/ProductList.tsx)

Hiển thị danh sách sản phẩm với tên và giá.

**Props**:
```typescript
interface ProductListProps {
    products: {
        id: number;
        name: string;
        price: string;
    }[];
}
```

**Tính năng**:
- Render sản phẩm với dữ liệu có cấu trúc
- Cho thấy cách truy cập thuộc tính object lồng nhau
- Sử dụng index làm key (xem ghi chú best practices bên dưới)

#### 3. Component UserList
**File**: [`UserList.tsx`](./src/components/UserList.tsx)

Hiển thị danh sách người dùng với tên và tuổi.

**Props**:
```typescript
interface UserListProps {
    users: {
        id: number;
        name: string;
        age: number;
    }[];
}
```

**Tính năng**:
- Minh họa mapping qua các object user
- Hiển thị nhiều thuộc tính mỗi user
- Props type-safe với TypeScript

### 🎨 Styling

File [`Shopping.css`](./src/Shopping.css) cung cấp:
- Layout sạch sẽ, căn giữa
- Nền gradient xanh nhạt
- Các mục danh sách dạng card với shadow
- Animation hover mượt mà (scale transform)

### 💡 Các Khái niệm Chính Đã Học

1. **Phương thức Array.map()**: Chuyển đổi mảng thành các phần tử JSX
   ```typescript
   {items.map((item) => (
       <li key={index}>{item}</li>
   ))}
   ```

2. **TypeScript Interfaces**: Định nghĩa kiểu props để đảm bảo type safety
   ```typescript
   interface ShoppingProps {
       items: string[];
   }
   ```

3. **Destructuring Props của Component**: Truy cập props gọn gàng
   ```typescript
   const Shopping = ({ items }: ShoppingProps) => { ... }
   ```

4. **Key Props**: Thiết yếu cho quá trình reconciliation của React
   ```typescript
   <li key={product.id}>{product.name}</li>
   ```

### ⚠️ Ghi chú Best Practices

> [!IMPORTANT]
> **Về List Keys**: Bài tập này sử dụng `index` làm key trong một số component để đơn giản hóa. Tuy nhiên, trong ứng dụng production, bạn nên:
> - Sử dụng ID duy nhất từ dữ liệu khi có sẵn (như `product.id` hoặc `user.id`)
> - Tránh sử dụng chỉ số mảng làm key khi danh sách có thể được sắp xếp lại, lọc, hoặc sửa đổi
> - Không bao giờ sử dụng `Math.random()` cho keys, vì nó thay đổi mỗi lần render

**Cách làm tốt hơn**:
```typescript
{products.map((product) => (
    <div key={product.id}>  {/* ✅ Sử dụng ID duy nhất */}
        <h1>Name: {product.name}</h1>
        <h1>Price: {product.price}</h1>
    </div>
))}
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

- [React Lists and Keys](https://react.dev/learn/rendering-lists)
- [TypeScript với React](https://react.dev/learn/typescript)
- [Array.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

**Created**: 2025-12-29  
**Tech Stack**: React 18 + TypeScript + Vite
