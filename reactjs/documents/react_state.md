# Adding Interactivity with State / Thêm tính tương tác với State

---

**📅 Created / Ngày tạo:** 2025-12-27  
**📅 Last Updated / Ngày cập nhật:** 2025-12-27

**⬅️ Previous / Bài trước:** [Displaying Data with Props](./react_props.md)  
**➡️ Next / Bài sau:** [From React to Next.js](./react_to_nextjs.md)

---

## Description / Mô tả

This lesson introduces State, one of React's most important concepts for building interactive applications. You will learn how to respond to user events like clicks and form submissions, how to use React Hooks (specifically `useState`) to manage component state, and how state enables your UI to update dynamically. State represents any information that changes over time in your application, usually in response to user interactions. Understanding state is crucial for creating dynamic, interactive user experiences.

Bài học này giới thiệu về State, một trong những khái niệm quan trọng nhất của React để xây dựng các ứng dụng tương tác. Bạn sẽ học cách phản hồi các sự kiện người dùng như nhấp chuột và gửi biểu mẫu, cách sử dụng React Hooks (cụ thể là `useState`) để quản lý state của component, và cách state cho phép giao diện của bạn cập nhật động. State đại diện cho bất kỳ thông tin nào thay đổi theo thời gian trong ứng dụng của bạn, thường là để phản hồi các tương tác của người dùng. Hiểu về state là rất quan trọng để tạo ra trải nghiệm người dùng động và tương tác.

---

## Main Concepts / Khái niệm chính

### Listening to Events / Lắng nghe sự kiện

React allows you to attach event listeners to JSX elements to respond to user interactions. Event names in React are camelCased (like `onClick`, `onChange`, `onSubmit`) rather than lowercase as in HTML. You pass event handlers as props to elements.

React cho phép bạn đính kèm các trình lắng nghe sự kiện vào các phần tử JSX để phản hồi các tương tác của người dùng. Tên sự kiện trong React được viết theo kiểu camelCase (như `onClick`, `onChange`, `onSubmit`) thay vì chữ thường như trong HTML. Bạn truyền các hàm xử lý sự kiện như props cho các phần tử.

```jsx
function HomePage() {
    return (
        <div>
            {/* onClick event listener / Trình lắng nghe sự kiện onClick */}
            <button onClick={}>Like</button>
        </div>
    );
}

// Common event types / Các loại sự kiện phổ biến
function FormExample() {
    return (
        <form onSubmit={}>
            {/* onChange for input fields / onChange cho các trường nhập liệu */}
            <input onChange={} />
            
            {/* onFocus, onBlur for focus events / Sự kiện focus */}
            <input onFocus={} onBlur={} />
            
            {/* onMouseEnter, onMouseLeave for hover / Sự kiện hover */}
            <div onMouseEnter={} onMouseLeave={}>
                Hover me
            </div>
        </form>
    );
}
```

### Handling Events / Xử lý sự kiện

Event handlers are functions that run when user interactions occur. You define them within your component and pass them to event listeners. Handler functions receive an event object as their first parameter containing information about the event.

Các hàm xử lý sự kiện là các hàm chạy khi tương tác người dùng xảy ra. Bạn định nghĩa chúng trong component của mình và truyền chúng cho các trình lắng nghe sự kiện. Các hàm xử lý nhận một đối tượng sự kiện làm tham số đầu tiên chứa thông tin về sự kiện.

```jsx
function HomePage() {
    // Define event handler function / Định nghĩa hàm xử lý sự kiện
    function handleClick() {
        console.log('Button clicked!');
    }
    
    return (
        <div>
            {/* Pass handler to onClick / Truyền hàm xử lý cho onClick */}
            <button onClick={handleClick}>Like</button>
        </div>
    );
}

// Event handler with event object / Hàm xử lý với đối tượng sự kiện
function FormExample() {
    function handleSubmit(event) {
        // Prevent default form submission / Ngăn gửi biểu mẫu mặc định
        event.preventDefault();
        console.log('Form submitted');
    }
    
    function handleChange(event) {
        // Access input value / Truy cập giá trị input
        console.log('Input value:', event.target.value);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
}
```

> [!WARNING]
> When passing event handlers, use `onClick={handleClick}` not `onClick={handleClick()}`. The parentheses would call the function immediately instead of passing it as a reference.
> 
> Khi truyền hàm xử lý sự kiện, sử dụng `onClick={handleClick}` chứ không phải `onClick={handleClick()}`. Dấu ngoặc đơn sẽ gọi hàm ngay lập tức thay vì truyền nó như một tham chiếu.

### State and Hooks / State và Hooks

React Hooks are functions that let you "hook into" React features from function components. The `useState` hook allows you to add state to your components. State is any information in your UI that changes over time, usually triggered by user interaction.

React Hooks là các hàm cho phép bạn "móc vào" các tính năng React từ các function components. Hook `useState` cho phép bạn thêm state vào các components của bạn. State là bất kỳ thông tin nào trong giao diện của bạn thay đổi theo thời gian, thường được kích hoạt bởi tương tác người dùng.

```jsx
function HomePage() {
    // useState returns an array with two values / useState trả về một mảng với hai giá trị
    // [currentState, updaterFunction] / [state hiện tại, hàm cập nhật]
    const [likes, setLikes] = React.useState(0);
    
    // likes: current state value (starts at 0) / giá trị state hiện tại
    // setLikes: function to update state / hàm để cập nhật state
    
    return (
        <div>
            <p>Likes: {likes}</p>
        </div>
    );
}

// Multiple state variables / Nhiều biến state
function Counter() {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('');
    const [isActive, setIsActive] = React.useState(false);
    
    return (
        <div>
            <p>Count: {count}</p>
            <p>Name: {name}</p>
            <p>Active: {isActive ? 'Yes' : 'No'}</p>
        </div>
    );
}
```

### Managing State / Quản lý State

To update state, call the setter function returned by `useState` with the new value. When state updates, React re-renders the component to reflect the changes. State is local to each component instance and should be managed in the component where it's created.

Để cập nhật state, gọi hàm setter được trả về bởi `useState` với giá trị mới. Khi state cập nhật, React render lại component để phản ánh các thay đổi. State là cục bộ cho mỗi instance của component và nên được quản lý trong component nơi nó được tạo ra.

```jsx
function LikeButton() {
    const [likes, setLikes] = React.useState(0);
    
    function handleClick() {
        // Update state with new value / Cập nhật state với giá trị mới
        setLikes(likes + 1);
    }
    
    return (
        <button onClick={handleClick}>
            Likes ({likes})
        </button>
    );
}

// State updates trigger re-render / Cập nhật state kích hoạt render lại
function TodoList() {
    const [todos, setTodos] = React.useState(['Task 1', 'Task 2']);
    const [inputValue, setInputValue] = React.useState('');
    
    function addTodo() {
        // Add new todo to array / Thêm todo mới vào mảng
        setTodos([...todos, inputValue]);
        setInputValue(''); // Clear input / Xóa input
    }
    
    return (
        <div>
            <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
```

> [!IMPORTANT]
> State is local to each component instance. Unlike props which are passed from parent to child, state is initiated and stored within a component. You can pass state to children as props, but the logic for updating state should remain in the component where it was created.
> 
> State là cục bộ cho mỗi instance của component. Không giống như props được truyền từ cha xuống con, state được khởi tạo và lưu trữ trong component. Bạn có thể truyền state cho con như props, nhưng logic để cập nhật state nên ở lại trong component nơi nó được tạo ra.

---

## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích

- **Dynamic UI Updates / Cập nhật giao diện động**: State allows components to re-render automatically when data changes, keeping the UI in sync with data. / State cho phép components tự động render lại khi dữ liệu thay đổi, giữ cho giao diện đồng bộ với dữ liệu.
- **User Interactivity / Tính tương tác người dùng**: Makes applications responsive to user actions like clicks, typing, and form submissions. / Làm cho ứng dụng phản hồi các hành động của người dùng như nhấp chuột, gõ phím và gửi biểu mẫu.
- **Component Encapsulation / Đóng gói Component**: Each component manages its own state independently, promoting modularity. / Mỗi component quản lý state riêng của nó một cách độc lập, thúc đẩy tính module.
- **Predictable Updates / Cập nhật có thể dự đoán**: React's one-way data flow makes state changes easier to track and debug. / Luồng dữ liệu một chiều của React làm cho các thay đổi state dễ theo dõi và debug hơn.
- **Performance Optimization / Tối ưu hóa hiệu suất**: React efficiently updates only the parts of the UI that changed, not the entire page. / React cập nhật hiệu quả chỉ những phần của giao diện đã thay đổi, không phải toàn bộ trang.

### Real-world Applications / Ứng dụng thực tế

- **Form Inputs / Nhập liệu biểu mẫu**: Managing input values, validation states, and error messages in real-time. / Quản lý giá trị nhập, trạng thái xác thực và thông báo lỗi trong thời gian thực.
- **Shopping Carts / Giỏ hàng**: Tracking items added to cart, quantities, and total prices dynamically. / Theo dõi các mặt hàng được thêm vào giỏ hàng, số lượng và tổng giá động.
- **Like/Favorite Buttons / Nút thích/yêu thích**: Toggling states for user preferences and social interactions. / Chuyển đổi trạng thái cho sở thích người dùng và tương tác xã hội.
- **Modal Dialogs / Hộp thoại Modal**: Opening and closing dialogs, popups, and dropdown menus based on user actions. / Mở và đóng hộp thoại, popup và menu thả xuống dựa trên hành động người dùng.
- **Counters and Timers / Bộ đếm và Đồng hồ**: Creating interactive counters, timers, stopwatches, and progress indicators. / Tạo bộ đếm tương tác, đồng hồ, đồng hồ bấm giờ và chỉ báo tiến trình.
- **Tab Navigation / Điều hướng Tab**: Switching between different views or content sections. / Chuyển đổi giữa các chế độ xem hoặc phần nội dung khác nhau.

---

## Complete Example / Ví dụ hoàn chỉnh

```jsx
<!DOCTYPE html>
<html>
<head>
    <title>React State Example</title>
    <!-- Load React and ReactDOM / Tải React và ReactDOM -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- Load Babel to compile JSX / Tải Babel để biên dịch JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        button {
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: #0070f3;
            color: white;
            font-size: 16px;
        }
        button:hover {
            background-color: #0051cc;
        }
        input {
            padding: 10px;
            margin: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <!-- Container for React app / Container cho ứng dụng React -->
    <div id="app"></div>

    <script type="text/jsx">
        // Header component / Component tiêu đề
        function Header({ title }) {
            return <h1>{title}</h1>;
        }

        // Like button with state / Nút Like với state
        function LikeButton() {
            // Initialize state / Khởi tạo state
            const [likes, setLikes] = React.useState(0);
            
            // Event handler / Hàm xử lý sự kiện
            function handleClick() {
                setLikes(likes + 1);
            }
            
            return (
                <button onClick={handleClick}>
                    👍 Likes ({likes})
                </button>
            );
        }

        // Counter with increment and decrement / Bộ đếm với tăng và giảm
        function Counter() {
            const [count, setCount] = React.useState(0);
            
            return (
                <div style={{ margin: '20px 0' }}>
                    <h3>Counter: {count}</h3>
                    <button onClick={() => setCount(count + 1)}>
                        Increment
                    </button>
                    <button onClick={() => setCount(count - 1)}>
                        Decrement
                    </button>
                    <button onClick={() => setCount(0)}>
                        Reset
                    </button>
                </div>
            );
        }

        // Todo list with state / Danh sách todo với state
        function TodoList() {
            const [todos, setTodos] = React.useState([
                'Learn React',
                'Build a project',
                'Deploy to production'
            ]);
            const [inputValue, setInputValue] = React.useState('');
            
            function handleAddTodo() {
                if (inputValue.trim()) {
                    setTodos([...todos, inputValue]);
                    setInputValue('');
                }
            }
            
            return (
                <div style={{ margin: '20px 0' }}>
                    <h3>Todo List ({todos.length} items)</h3>
                    <div>
                        <input 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                            placeholder="Add new todo..."
                        />
                        <button onClick={handleAddTodo}>Add</button>
                    </div>
                    <ul>
                        {todos.map((todo, index) => (
                            <li key={index}>{todo}</li>
                        ))}
                    </ul>
                </div>
            );
        }

        // Main app component / Component ứng dụng chính
        function HomePage() {
            return (
                <div>
                    <Header title="React State Examples" />
                    <LikeButton />
                    <Counter />
                    <TodoList />
                </div>
            );
        }

        // Get container and render / Lấy container và hiển thị
        const app = document.getElementById('app');
        const root = ReactDOM.createRoot(app);
        root.render(<HomePage />);
    </script>
</body>
</html>
```

---

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Use descriptive names for state variables (e.g., `isLoading`, `userCount`) / Sử dụng tên mô tả cho các biến state.
- ✅ **DO**: Name setter functions with the `set` prefix (e.g., `setCount`, `setIsLoading`) / Đặt tên hàm setter với tiền tố `set`.
- ✅ **DO**: Initialize state with appropriate default values in `useState()` / Khởi tạo state với các giá trị mặc định phù hợp.
- ✅ **DO**: Keep state as simple as possible; split complex state into multiple state variables / Giữ state đơn giản nhất có thể; tách state phức tạp thành nhiều biến state.
- ✅ **DO**: Update state based on previous state when needed: `setState(prev => prev + 1)` / Cập nhật state dựa trên state trước đó khi cần.
- ✅ **DO**: Pass event handlers without calling them: `onClick={handleClick}` / Truyền hàm xử lý sự kiện mà không gọi chúng.
- ❌ **DON'T**: Mutate state directly; always use the setter function / Không biến đổi state trực tiếp; luôn sử dụng hàm setter.
- ❌ **DON'T**: Call hooks conditionally or inside loops / Không gọi hooks có điều kiện hoặc bên trong vòng lặp.
- ❌ **DON'T**: Use too many state variables; consider grouping related state / Không sử dụng quá nhiều biến state; cân nhắc nhóm các state liên quan.

---

## Common Mistakes / Lỗi thường gặp

### Error 1: Mutating State Directly

**Description**: Directly modifying state instead of using the setter function won't trigger a re-render and breaks React's reactivity. / Sửa đổi trực tiếp state thay vì sử dụng hàm setter sẽ không kích hoạt render lại và phá vỡ tính phản ứng của React.

**Solution**: Always use the setter function to update state. / Luôn sử dụng hàm setter để cập nhật state.

```jsx
// ❌ Wrong / Sai - mutating state directly
function Counter() {
    const [count, setCount] = React.useState(0);
    
    function handleClick() {
        count = count + 1; // Don't do this!
    }
    
    return <button onClick={handleClick}>{count}</button>;
}

// ✅ Correct / Đúng - using setter function
function Counter() {
    const [count, setCount] = React.useState(0);
    
    function handleClick() {
        setCount(count + 1); // Use setter function
    }
    
    return <button onClick={handleClick}>{count}</button>;
}
```

### Error 2: Calling Handler Instead of Passing It

**Description**: Adding parentheses when passing event handlers causes them to execute immediately during render instead of when the event occurs. / Thêm dấu ngoặc đơn khi truyền hàm xử lý sự kiện khiến chúng thực thi ngay lập tức trong quá trình render thay vì khi sự kiện xảy ra.

**Solution**: Pass the function reference without parentheses. / Truyền tham chiếu hàm mà không có dấu ngoặc đơn.

```jsx
// ❌ Wrong / Sai - calling function immediately
function App() {
    function handleClick() {
        console.log('Clicked');
    }
    
    return <button onClick={handleClick()}>Click</button>;
    // This runs immediately on render!
}

// ✅ Correct / Đúng - passing function reference
function App() {
    function handleClick() {
        console.log('Clicked');
    }
    
    return <button onClick={handleClick}>Click</button>;
}

// ✅ Also correct / Cũng đúng - inline arrow function
function App() {
    return <button onClick={() => console.log('Clicked')}>Click</button>;
}
```

### Error 3: Updating State Based on Stale Values

**Description**: When updating state multiple times in succession, using the current state value directly can lead to incorrect results due to how React batches updates. / Khi cập nhật state nhiều lần liên tiếp, sử dụng giá trị state hiện tại trực tiếp có thể dẫn đến kết quả không chính xác do cách React gom nhóm các cập nhật.

**Solution**: Use the functional update form with previous state when updates depend on the previous value. / Sử dụng dạng cập nhật hàm với state trước đó khi các cập nhật phụ thuộc vào giá trị trước đó.

```jsx
// ❌ Potentially problematic / Có thể có vấn đề
function Counter() {
    const [count, setCount] = React.useState(0);
    
    function increment() {
        setCount(count + 1);
        setCount(count + 1); // May not work as expected
        setCount(count + 1); // All use the same 'count' value
    }
    
    return <button onClick={increment}>{count}</button>;
}

// ✅ Correct / Đúng - using functional update
function Counter() {
    const [count, setCount] = React.useState(0);
    
    function increment() {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1); // Works correctly
        setCount(prev => prev + 1); // Each uses the latest value
    }
    
    return <button onClick={increment}>{count}</button>;
}
```

### Error 4: Using Hooks Conditionally

**Description**: Calling hooks inside conditions, loops, or nested functions breaks React's rules of hooks and can cause unpredictable behavior. / Gọi hooks bên trong điều kiện, vòng lặp hoặc các hàm lồng nhau vi phạm quy tắc của hooks React và có thể gây ra hành vi không thể dự đoán.

**Solution**: Always call hooks at the top level of your component. / Luôn gọi hooks ở cấp cao nhất của component.

```jsx
// ❌ Wrong / Sai - conditional hook
function App({ condition }) {
    if (condition) {
        const [count, setCount] = React.useState(0); // Don't do this!
    }
    return <div>App</div>;
}

// ✅ Correct / Đúng - hook at top level
function App({ condition }) {
    const [count, setCount] = React.useState(0);
    
    if (condition) {
        // Use the state conditionally, not declare it conditionally
        return <div>{count}</div>;
    }
    return <div>App</div>;
}
```

---

## References / Tài liệu tham khảo

- [Next.js: Adding Interactivity with State](https://nextjs.org/learn/react-foundations/updating-state)
- [React Documentation: State - A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [React Documentation: Meet Your First Hook](https://react.dev/learn/state-a-components-memory#meet-your-first-hook)
- [React Documentation: Responding to Events](https://react.dev/learn/responding-to-events)
- [React Documentation: Adding Interactivity](https://react.dev/learn/adding-interactivity)
- [React Documentation: Managing State](https://react.dev/learn/managing-state)
