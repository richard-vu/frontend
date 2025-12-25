<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 12: Advanced Type Manipulation / Thao tác kiểu nâng cao

## 1. Mô tả tóm tắt / Short Description
**VN**: Bài học này đi sâu vào các công cụ mạnh mẽ của TypeScript để thao tác và biến đổi kiểu dữ liệu, bao gồm `keyof`, `typeof`, Indexed Access Types và Conditional Types.

**EN**: This lesson dives into powerful TypeScript tools for manipulating and transforming types, including `keyof`, `typeof`, Indexed Access Types, and Conditional Types.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **`keyof` Operator**: Tạo ra một kiểu union từ các key của một object type.
*   **`typeof` Operator**: Sử dụng trong context của type để tham chiếu đến kiểu dữ liệu của một biến hoặc đối tượng.
*   **Indexed Access Types (`T[K]`)**: Truy cập kiểu của một thuộc tính cụ thể trong một kiểu khác.
*   **Conditional Types**: Chọn kiểu dữ liệu dựa trên đầu vào giống như câu lệnh `if...else`, cú pháp: `T extends U ? X : Y`.
*   **Mapped Types**: Tạo kiểu mới bằng cách lặp qua các key của một kiểu hiện có.

**EN**:
*   **`keyof` Operator**: Creates a union type from the keys of an object type.
*   **`typeof` Operator**: Used in a type context to refer to the type of a variable or object.
*   **Indexed Access Types (`T[K]`)**: Accesses the type of a specific property within another type.
*   **Conditional Types**: Selects types based on input like an `if...else` statement, syntax: `T extends U ? X : Y`.
*   **Mapped Types**: Creates new types by iterating over keys of an existing type.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Kiểu động (Dynamic Types)**: Tạo ra các kiểu dữ liệu phụ thuộc lẫn nhau, tự động cập nhật khi kiểu gốc thay đổi.
*   **Mạnh mẽ & Linh hoạt (Power & Flexibility)**: Xây dựng các thư viện phức tạp, các hàm helper có khả năng suy diễn kiểu cực tốt.
*   **Giảm lặp code (DRY)**: Tránh việc phải khai báo thủ công các kiểu dữ liệu có cấu trúc tương tự nhau.

**EN**:
*   **Dynamic Types**: Creates interdependent types that automatically update when the original type changes.
*   **Power & Flexibility**: Builds complex libraries and helper functions with excellent type inference capabilities.
*   **DRY (Don't Repeat Yourself)**: Avoids manually declaring types with similar structures.

## 4. Ví dụ / Example

```typescript
interface Person {
    name: string;
    age: number;
    alive: boolean;
}

// 1. keyof Operator
type PersonKeys = keyof Person; // "name" | "age" | "alive"

// 2. typeof Operator
const settings = {
    theme: "dark",
    version: 1.0
};
type Settings = typeof settings; 
// { theme: string; version: number; }

// 3. Indexed Access Types
type AgeType = Person["age"]; // number

// 4. Conditional Types
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>; // "yes"
type B = IsString<number>; // "no"

// 5. Mapped Types (Tự tạo Utility Type đơn giản)
type Booleanify<T> = {
    [K in keyof T]: boolean;
};
type BooleanPerson = Booleanify<Person>;
// { name: boolean; age: boolean; alive: boolean; }
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Utility Types](./lesson-11-utility-types.md) | [Bài sau / Next: TS with React](./lesson-13-ts-with-react.md) >
