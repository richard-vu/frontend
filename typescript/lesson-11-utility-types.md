<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 11: Utility Types / Các kiểu tiện ích

## 1. Mô tả tóm tắt / Short Description
**VN**: TypeScript cung cấp sẵn nhiều "Utility Types" giúp biến đổi các kiểu dữ liệu một cách linh hoạt. Bài học này sẽ giới thiệu các Utility Types phổ biến nhất như `Partial`, `Readonly`, `Record`, `Pick` và `Omit`.

**EN**: TypeScript provides many built-in "Utility Types" to facilitate type transformations. This lesson covers the most common Utility Types such as `Partial`, `Readonly`, `Record`, `Pick`, and `Omit`.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **`Partial<T>`**: Tạo một kiểu mới với tất cả các thuộc tính của `T` đều trở thành tùy chọn (optional).
*   **`Readonly<T>`**: Tạo một kiểu mới với tất cả các thuộc tính của `T` đều là chỉ đọc (read-only), không thể gán lại giá trị.
*   **`Record<K, T>`**: Tạo một kiểu object với các key thuộc kiểu `K` và giá trị thuộc kiểu `T`.
*   **`Pick<T, K>`**: Tạo một kiểu mới bằng cách chọn (pick) một tập hợp các thuộc tính `K` từ `T`.
*   **`Omit<T, K>`**: Tạo một kiểu mới bằng cách loại bỏ (omit) một tập hợp các thuộc tính `K` khỏi `T`.

**EN**:
*   **`Partial<T>`**: Constructs a type with all properties of `T` set to optional.
*   **`Readonly<T>`**: Constructs a type with all properties of `T` set to read-only, meaning they cannot be reassigned.
*   **`Record<K, T>`**: Constructs an object type whose property keys are of type `K` and whose property values are of type `T`.
*   **`Pick<T, K>`**: Constructs a type by picking the set of properties `K` from `T`.
*   **`Omit<T, K>`**: Constructs a type by picking all properties from `T` and then removing `K`.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Biến đổi linh hoạt**: Dễ dàng tạo ra các biến thể của một kiểu dữ liệu gốc mà không cần định nghĩa lại (ví dụ: tạo kiểu cho form cập nhật từ kiểu gốc).
*   **Code sạch hơn (Cleaner Code)**: Giảm bớt sự lặp lại (boilerplate) khi định nghĩa các interface tương tự nhau.
*   **DTOs (Data Transfer Objects)**: Hữu ích khi định nghĩa các DTO cho API, nơi thường chỉ cần một phần dữ liệu của model đầy đủ.

**EN**:
*   **Flexible Transformation**: Easily create variations of an existing type without redefinition (e.g., creating a type for an update form from the original type).
*   **Cleaner Code**: Reduces boilerplate when defining similar interfaces.
*   **DTOs**: Useful when defining DTOs for APIs, which often require only a subset of the full model data.

## 4. Ví dụ / Example

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// 1. Partial<T>: Dùng cho hàm update (không bắt buộc nhập hết các trường)
// Useful for update functions (not strictly renaming all fields)
function updateUser(id: number, fieldsToUpdate: Partial<User>) {
    // ... logic update
}
updateUser(1, { name: "New Name" }); // OK

// 2. Readonly<T>: Đảm bảo object không bị sửa đổi
// Ensures object is not modified
const readOnlyUser: Readonly<User> = {
    id: 1, name: "Admin", email: "admin@test.com", age: 30
};
// readOnlyUser.name = "Guest"; // Error: Cannot assign to 'name' because it is a read-only property.

// 3. Record<K, T>: Mapping dữ liệu
// Data mapping
type Page = "home" | "about" | "contact";
interface PageInfo {
    title: string;
}
const nav: Record<Page, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About Us" },
    contact: { title: "Contact" }
};

// 4. Pick<T, K>: Lấy ra vài trường
// Select specific fields
type UserPreview = Pick<User, "id" | "name">;
const preview: UserPreview = { id: 1, name: "Alice" }; // OK

// 5. Omit<T, K>: Bỏ đi vài trường (Ngược lại với Pick)
// Remove specific fields (Opposite of Pick)
type UserWithoutEmail = Omit<User, "email">;
const noEmail: UserWithoutEmail = { id: 1, name: "Bob", age: 25 }; // OK
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Generic Constraints](./lesson-10-generic-constraints.md) | [Bài sau / Next: Advanced Type Manipulation](./lesson-12-advanced-type-manipulation.md) >
