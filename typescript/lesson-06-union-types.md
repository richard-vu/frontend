<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 6: Union Types & Narrowing / Kiểu hợp & Thu hẹp kiểu

## 1. Mô tả tóm tắt / Short Description
**VN**: Bài học này giới thiệu về Union Types (Kiểu hợp) - cho phép một biến chứa giá trị thuộc nhiều kiểu khác nhau, và Narrowing (Thu hẹp kiểu) - kỹ thuật để TypeScript hiểu chính xác kiểu dữ liệu cụ thể trong từng khối lệnh.

**EN**: This lesson introduces Union Types - allowing a variable to hold values of multiple different types, and Narrowing - a technique for TypeScript to understand the specific data type within code blocks.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Union Types (`|`)**: Kết hợp nhiều kiểu dữ liệu lại với nhau. Ví dụ: `string | number` nghĩa là "chuỗi HOẶC số".
*   **Narrowing (Thu hẹp kiểu)**: Quá trình kiểm tra kiểu để loại bỏ bớt các trường hợp có thể xảy ra, giúp truy cập an toàn vào các thuộc tính đặc thù của kiểu đó.
*   **Type Guards**: Các biểu thức dùng để thu hẹp kiểu:
    *   `typeof`: Kiểm tra các kiểu nguyên thủy (`string`, `number`, `boolean`).
    *   `instanceof`: Kiểm tra đối tượng thuộc lớp nào.
    *   `in`: Kiểm tra xem property có tồn tại trong object không.
*   **Discriminated Unions**: Mô hình sử dụng một thuộc tính chung (thường là `kind` hoặc `type`) để phân biệt giữa các interface trong một Union.

**EN**:
*   **Union Types (`|`)**: Combining multiple data types. E.g., `string | number` means "string OR number".
*   **Narrowing**: The process of refining types to rule out possible cases, allowing safe access to type-specific properties.
*   **Type Guards**: Expressions used to narrow types:
    *   `typeof`: Checks primitive types (`string`, `number`, `boolean`).
    *   `instanceof`: Checks which class an object belongs to.
    *   `in`: Checks if a property exists in an object.
*   **Discriminated Unions**: A pattern using a common property (usually `kind` or `type`) to distinguish between interfaces in a Union.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Linh hoạt (Flexibility)**: Cho phép hàm xử lý nhiều loại input khác nhau (ví dụ: ID có thể là số hoặc chuỗi).
*   **An toàn runtime (Runtime Safety)**: Bắt buộc lập trình viên phải kiểm tra các trường hợp (case) trước khi xử lý, tránh lỗi crash ứng dụng.
*   **Mô hình hóa trạng thái (State Modeling)**: Discriminated Unions cực kỳ hữu ích để mô tả các trạng thái của dữ liệu (Loading, Success, Error).

**EN**:
*   **Flexibility**: Allows functions to handle various input types (e.g., ID can be a number or string).
*   **Runtime Safety**: Forces developers to check cases before processing, avoiding application crashes.
*   **State Modeling**: Discriminated Unions are extremely useful for describing data states (Loading, Success, Error).

## 4. Ví dụ / Example

```typescript
// 1. Union Type & typeof Guard
function printId(id: number | string) {
    if (typeof id === "string") {
        // Trong block này, TypeScript biết 'id' là string
        console.log("ID String: " + id.toUpperCase());
    } else {
        // TypeScript tự hiểu 'id' là number
        console.log("ID Number: " + id);
    }
}

// 2. 'in' Operator Narrowing
interface Fish { swim: () => void }
interface Bird { fly: () => void }

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim(); // OK, animal is Fish
    } else {
        animal.fly(); // OK, animal is Bird
    }
}

// 3. Discriminated Unions (Quan trọng)
interface SuccessState {
    status: "success"; // Discriminant
    data: string;
}
interface ErrorState {
    status: "error";   // Discriminant
    message: string;
}

type ResponseState = SuccessState | ErrorState;

function handleResponse(response: ResponseState) {
    switch (response.status) {
        case "success":
            console.log("Data:", response.data);
            break;
        case "error":
            console.log("Error:", response.message);
            break;
    }
}
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Objects & Interfaces](./lesson-05-objects-interfaces.md) | [Bài sau / Next: Classes](./lesson-07-classes.md) >
