<!--
Ngày tạo / Created: 2025-12-25
Ngày cập nhật / Updated: 2025-12-25
-->

# Lesson 13: TS with React / Sử dụng TypeScript với React

## 1. Mô tả tóm tắt / Short Description
**VN**: Bài học này hướng dẫn cách tích hợp TypeScript vào dự án React. Chúng ta sẽ tìm hiểu cách định nghĩa kiểu cho Props, State, Refs và các sự kiện (Events) để xây dựng ứng dụng React an toàn và dễ bảo trì hơn.

**EN**: This lesson guides you on how to integrate TypeScript into a React project. We will learn how to type Props, State, Refs, and Events to build safer and more maintainable React applications.

## 2. Khái niệm chính / Main Concepts
**VN**:
*   **Typing Props**: Sử dụng Interface hoặc Type Alias để định nghĩa cấu trúc dữ liệu truyền vào component.
*   **Typing Hooks**:
    *   `useState<T>`: Định nghĩa kiểu dữ liệu cho state.
    *   `useRef<T>`: Định nghĩa kiểu cho tham chiếu DOM hoặc giá trị mutable.
*   **Event Handling**: Sử dụng các kiểu có sẵn của React như `React.ChangeEvent`, `React.FormEvent`, `React.MouseEvent` để xử lý sự kiện chính xác.
*   **`React.FC` vs `JSX.Element`**: Các cách khai báo Functional Component.

**EN**:
*   **Typing Props**: Using Interfaces or Type Aliases to define the data structure passed to components.
*   **Typing Hooks**:
    *   `useState<T>`: Defining data types for state.
    *   `useRef<T>`: Defining types for DOM references or mutable values.
*   **Event Handling**: Using React's built-in types like `React.ChangeEvent`, `React.FormEvent`, `React.MouseEvent` for accurate event handling.
*   **`React.FC` vs `JSX.Element`**: Ways to declare Functional Components.

## 3. Lợi ích/Ứng dụng / Benefits/Applications
**VN**:
*   **Phát hiện lỗi sớm (Early Error Detection)**: Báo lỗi ngay khi truyền sai Props hoặc sử dụng sai State.
*   **Trải nghiệm phát triển tốt hơn (Better DX)**: Autocomplete (gợi ý code) hoạt động tuyệt vời trong JSX, giúp code nhanh hơn.
*   **Refactoring an toàn (Safe Refactoring)**: Dễ dàng thay đổi cấu trúc component mà không lo làm hỏng các nơi sử dụng component đó.

**EN**:
*   **Early Error Detection**: Reports errors immediately when passing incorrect Props or using State incorrectly.
*   **Better DX**: Autocomplete works directly in JSX, speeding up coding.
*   **Safe Refactoring**: Easily modify component structures without worrying about breaking usages elsewhere.

## 4. Ví dụ / Example

```tsx
import React, { useState, useRef } from 'react';

// 1. Định nghĩa kiểu cho Props
// Defining Props types
interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean; // Optional prop
}

const MyButton: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

// 2. Component chính với State và Event
// Main component with State and Event
interface User {
    id: number;
    name: string;
}

const UserProfile = () => {
    // Typing useState
    const [user, setUser] = useState<User | null>(null);
    const [inputName, setInputName] = useState<string>("");

    // Typing useRef
    const inputRef = useRef<HTMLInputElement>(null);

    // Typing Event Handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputName(e.target.value);
    };

    const handleLogin = () => {
        setUser({ id: 1, name: inputName });
        inputRef.current?.focus(); // Optional chaining safe access
    };

    return (
        <div>
            <h2>User Profile</h2>
            <input 
                ref={inputRef}
                type="text" 
                value={inputName} 
                onChange={handleInputChange} 
            />
            <MyButton label="Login" onClick={handleLogin} />
            
            {user && <p>Welcome, {user.name}</p>}
        </div>
    );
};

export default UserProfile;
```

## 5. Điều hướng / Navigation
< [Bài trước / Previous: Advanced Type Manipulation](./lesson-12-advanced-type-manipulation.md) | [Bài sau / Next: TS with Backend/Node.js](./lesson-14-ts-with-backend.md) >
