<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 10: Generic Constraints / Ràng buộc trong Generics

## 1. Mô tả tóm tắt / Short Description
**VN**: Bài học này giải thích cách sử dụng từ khóa `extends` để định nghĩa các ràng buộc (constraints) cho Generics. Thay vì cho phép mọi kiểu dữ liệu (`any`), chúng ta có thể yêu cầu kiểu dữ liệu truyền vào phải có những thuộc tính hoặc phương thức nhất định.

**EN**: This lesson explains how to use the `extends` keyword to define constraints for Generics. Instead of allowing any data type, we can require that the passed type must have certain properties or methods.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **`extends` Keyword**: Được sử dụng trong khai báo Generic `<T extends SomeType>` để giới hạn `T` phải là kiểu con hoặc tương thích với `SomeType`.
*   **Ràng buộc về thuộc tính (Property Constraints)**: Đảm bảo biến kiểu Generic có các thuộc tính cụ thể (ví dụ: `.length`) để có thể truy cập chúng trong hàm mà không gây lỗi.
*   **`keyof` Constraint**: Sử dụng `<K extends keyof T>` để ràng buộc `K` chỉ được phép là một trong các tên key (thuộc tính) của kiểu `T`.

**EN**:
*   **`extends` Keyword**: Used in Generic declarations `<T extends SomeType>` to limit `T` to be a subtype of or compatible with `SomeType`.
*   **Property Constraints**: Ensures the Generic type variable has specific properties (e.g., `.length`) so they can be accessed inside the function without errors.
*   **`keyof` Constraint**: Uses `<K extends keyof T>` to constrain `K` to only be one of the key names (properties) of type `T`.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Truy cập an toàn (Safe Access)**: Cho phép truy cập các thuộc tính của biến Generic (như `.length`, `.toString()`) mà trình biên dịch sẽ không báo lỗi.
*   **Ngăn chặn lỗi (Error Prevention)**: Ngăn người dùng truyền vào các kiểu dữ liệu không hợp lệ (ví dụ: truyền `number` vào hàm cần `.length`).
*   **Thao tác trên Object (Object Manipulation)**: Rất hữu ích khi viết các hàm lấy hoặc sửa giá trị thuộc tính của object một cách động và an toàn kiểu.

**EN**:
*   **Safe Access**: Allows accessing properties of Generic variables (like `.length`, `.toString()`) without compiler errors.
*   **Error Prevention**: Prevents users from passing invalid data types (e.g., passing `number` to a function requiring `.length`).
*   **Object Manipulation**: Extremely useful when writing functions to dynamically get or set object property values with type safety.

## 4. Ví dụ / Example

```typescript
// 1. Ràng buộc về thuộc tính (Property Constraint)
// Yêu cầu T phải có thuộc tính length là number
// Require T to have a length property of type number
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    // Bây giờ chúng ta có thể truy cập .length an toàn
    // Now we can access .length safely
    console.log(arg.length); 
    return arg;
}

loggingIdentity("Hello"); // OK (string có .length)
loggingIdentity([1, 2, 3]); // OK (array có .length)
loggingIdentity({ length: 10, value: 3 }); // OK
// loggingIdentity(100); // Error: number không có .length

// 2. Ràng buộc keyof (keyof Constraint)
// Hàm lấy giá trị thuộc tính của object, đảm bảo key tồn tại
// Function to get object property value, ensuring key exists
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // OK
// getProperty(x, "m"); // Error: "m" is not a key of x
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Generics Basics](./lesson-09-generics-basics.md) | [Bài sau / Next: Utility Types](./lesson-11-utility-types.md) >
