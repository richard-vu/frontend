<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 5: Objects & Interfaces / Đối tượng và Giao diện

## 1. Mô tả tóm tắt / Short Description
**VN**: Bài học này tập trung vào cách định nghĩa cấu trúc của đối tượng (Object) trong TypeScript sử dụng Interface và Type Alias. Bạn sẽ học cách tạo ra các "bản thiết kế" cho object với các thuộc tính bắt buộc, tùy chọn hoặc chỉ đọc.

**EN**: This lesson focuses on defining object structures in TypeScript using Interfaces and Type Aliases. You will learn how to create "blueprints" for objects with required, optional, or read-only properties.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Interface**: Cách phổ biến nhất để định nghĩa cấu trúc (shape) của một object.
*   **Optional Properties (`?`)**: Thuộc tính có thể có hoặc không trong object.
*   **Readonly Properties (`readonly`)**: Thuộc tính chỉ được gán giá trị một lần duy nhất khi khởi tạo object.
*   **Extending Interfaces (`extends`)**: Tạo interface mới kế thừa các thuộc tính từ interface khác, giúp tái sử dụng code.
*   **Type Alias**: Một cách khác để đặt tên cho kiểu object (tương tự Interface nhưng linh hoạt hơn cho Union/Intersection types).

**EN**:
*   **Interface**: The most common way to define the shape of an object.
*   **Optional Properties (`?`)**: Properties that may or may not be present in the object.
*   **Readonly Properties (`readonly`)**: Properties that can only be assigned a value once upon object initialization.
*   **Extending Interfaces (`extends`)**: Creating a new interface that inherits properties from another, enabling code reuse.
*   **Type Alias**: Another way to name object types (similar to Interface but more flexible for Union/Intersection types).

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Tính nhất quán (Consistency)**: Đảm bảo các object trong ứng dụng tuân thủ đúng cấu trúc đã định nghĩa.
*   **Tái sử dụng (Reusability)**: Định nghĩa một lần và dùng ở nhiều nơi (trong Props của React, tham số hàm, v.v.).
*   **Mở rộng dễ dàng**: Dễ dàng thêm trường mới vào interface gốc hoặc tạo interface con mở rộng.

**EN**:
*   **Consistency**: Ensures objects within the application adhere to the defined structure.
*   **Reusability**: Define once and use everywhere (in React Props, function parameters, etc.).
*   **Easy Extensibility**: Easily add new fields to the base interface or create extended child interfaces.

## 4. Ví dụ / Example

```typescript
// 1. Định nghĩa Interface cơ bản
interface Point {
    x: number;
    y: number;
}

function printPoint(p: Point) {
    console.log(`x: ${p.x}, y: ${p.y}`);
}
printPoint({ x: 10, y: 20 }); // OK

// 2. Optional & Readonly Properties
interface User {
    readonly id: number; // Không thể sửa đổi sau khi tạo
    name: string;
    email?: string;      // Tùy chọn (có hoặc không)
}

const user1: User = { id: 1, name: "Alice" };
// user1.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
// user1.email = "alice@example.com"; // OK (nếu gán lại object hoặc khởi tạo)

// 3. Extending Interfaces (Kế thừa)
interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever"
};

// 4. Interface vs Type Alias (Cơ bản giống nhau khi định nghĩa Object)
type Car = {
    model: string;
    year: number;
}
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Functions](./lesson-04-functions.md) | [Bài sau / Next: Union Types & Narrowing](./lesson-06-union-types.md) >
