<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 14: TS with Backend/Node.js / Sử dụng TypeScript với Backend/Node.js

## 1. Mô tả tóm tắt / Short Description
**VN**: Bài học này hướng dẫn cách sử dụng TypeScript trong môi trường Backend với Node.js. Bạn sẽ học cách cấu hình dự án, định nghĩa kiểu cho Request/Response trong Express, và chia sẻ kiểu dữ liệu (Shared Types) giữa Frontend và Backend.

**EN**: This lesson guides you on how to use TypeScript in a Backend environment with Node.js. You will learn how to configure a project, define types for Request/Response in Express, and share data types (Shared Types) between Frontend and Backend.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **`tsconfig.json` for Node**: Cấu hình TypeScript để chạy trên môi trường Node.js (thường dùng `module: commonjs` hoặc `nodenext`).
*   **Typing Frameworks (Express/NestJS)**: Sử dụng các type definitions (`@types/express`, `@types/node`) để có autocomplete và kiểm tra lỗi cho `req`, `res`.
*   **DTOs (Data Transfer Objects)**: Sử dụng Class hoặc Interface để định nghĩa cấu trúc dữ liệu gửi/nhận từ API, giúp validate dữ liệu chặt chẽ.
*   **Shared Types**: Kỹ thuật chia sẻ Interface/Type giữa Frontend và Backend (thường qua Monorepo hoặc npm package) để đảm bảo tính nhất quán của dữ liệu.

**EN**:
*   **`tsconfig.json` for Node**: Configuring TypeScript to run in a Node.js environment (often using `module: commonjs` or `nodenext`).
*   **Typing Frameworks (Express/NestJS)**: Using type definitions (`@types/express`, `@types/node`) to provide autocomplete and error checking for `req`, `res`.
*   **DTOs (Data Transfer Objects)**: Using Classes or Interfaces to define data structures sent/received from APIs, aiding in strict data validation.
*   **Shared Types**: A technique to share Interfaces/Types between Frontend and Backend (usually via Monorepo or npm package) to ensure data consistency.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Đồng bộ Contract (Contract Synchronization)**: Nếu Backend thay đổi kiểu dữ liệu trả về, Frontend sẽ báo lỗi ngay lập tức nếu dùng Shared Types.
*   **Bảo trì dễ dàng (Maintainability)**: Code Backend trở nên rõ ràng, dễ hiểu hơn nhờ hệ thống kiểu mạnh.
*   **Validation tốt hơn**: Kết hợp với các thư viện như `class-validator` để tự động kiểm tra dữ liệu đầu vào.

**EN**:
*   **Contract Synchronization**: If Backend changes the return data type, Frontend will report errors immediately if using Shared Types.
*   **Maintainability**: Backend code becomes clearer and easier to understand thanks to the strong type system.
*   **Better Validation**: Combine with libraries like `class-validator` to automatically validate input data.

## 4. Ví dụ / Example

```typescript
// 1. Cài đặt (Setup)
// npm install typescript @types/node @types/express ts-node --save-dev

// 2. Định nghĩa DTO & Interface
// Defining DTO & Interface
interface CreateUserDto {
    username: string;
    email: string;
}

interface UserResponse {
    id: number;
    username: string;
    email: string;
}

// 3. Ví dụ với Express
// Example with Express
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// Định nghĩa Generic cho Request<Params, ResBody, ReqBody, Query>
// Defining Generics for Request<Params, ResBody, ReqBody, Query>
app.post('/users', (req: Request<{}, UserResponse, CreateUserDto>, res: Response<UserResponse>) => {
    const { username, email } = req.body; // Autocomplete here!
    
    // Giả lập lưu vào DB
    // Simulate saving to DB
    const newUser: UserResponse = {
        id: Date.now(),
        username,
        email
    };

    res.status(201).json(newUser);
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: TS with React](./lesson-13-ts-with-react.md) | [Hoàn thành / Completed] >
