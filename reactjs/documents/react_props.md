# Displaying Data with Props / Hiển thị dữ liệu với Props

---

**📅 Created / Ngày tạo:** 2025-12-27  
**📅 Last Updated / Ngày cập nhật:** 2025-12-27

**⬅️ Previous / Bài trước:** [Building UI with Components](./react_components.md)  
**➡️ Next / Bài sau:** [Adding Interactivity with State](./react_state.md)

---

## Description / Mô tả

This lesson introduces Props (properties), which allow you to pass data from parent components to child components in React. You will learn how to make components reusable by passing custom data through props, how to use JavaScript variables within JSX using curly braces, and how to iterate through arrays to display dynamic lists of data. Props enable you to create flexible, data-driven components that can be reused throughout your application with different content.

Bài học này giới thiệu về Props (properties - thuộc tính), cho phép bạn truyền dữ liệu từ components cha sang components con trong React. Bạn sẽ học cách làm cho components có thể tái sử dụng bằng cách truyền dữ liệu tùy chỉnh thông qua props, cách sử dụng các biến JavaScript trong JSX bằng dấu ngoặc nhọn, và cách lặp qua các mảng để hiển thị danh sách dữ liệu động. Props cho phép bạn tạo các components linh hoạt, dựa trên dữ liệu có thể được tái sử dụng trong toàn bộ ứng dụng với nội dung khác nhau.

---

## Main Concepts / Khái niệm chính

### What are Props? / Props là gì?

Props (short for "properties") are arguments passed into React components, similar to function parameters. They allow you to pass data from parent components to child components, enabling component reusability. In React, data flows down the component tree in one direction (one-way data flow), from parent to child.

Props (viết tắt của "properties" - thuộc tính) là các đối số được truyền vào các components React, tương tự như tham số của hàm. Chúng cho phép bạn truyền dữ liệu từ components cha sang components con, cho phép tái sử dụng components. Trong React, dữ liệu chảy xuống cây components theo một hướng (luồng dữ liệu một chiều), từ cha xuống con.

```jsx
// Parent component passing props to child / Component cha truyền props cho con
function HomePage() {
    return (
        <div>
            {/* Passing title prop to Header component / Truyền prop title cho component Header */}
            <Header title="React" />
            <Header title="A new title" />
        </div>
    );
}

// Child component receiving props / Component con nhận props
function Header(props) {
    // props is an object: { title: "React" } / props là một object
    console.log(props); // { title: "React" }
    return <h1>{props.title}</h1>;
}
```

### Using Props with Destructuring / Sử dụng Props với Destructuring

Since props is an object, you can use object destructuring to extract specific values directly in the function parameters. This makes your code cleaner and more readable.

Vì props là một object, bạn có thể sử dụng destructuring của object để trích xuất các giá trị cụ thể trực tiếp trong các tham số hàm. Điều này làm cho code của bạn gọn gàng và dễ đọc hơn.

```jsx
// Using destructuring to access props / Sử dụng destructuring để truy cập props
function Header({ title }) {
    console.log(title); // "React"
    return <h1>{title}</h1>;
}

// Destructuring multiple props / Destructuring nhiều props
function UserCard({ name, age, email }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

// Using the component / Sử dụng component
function App() {
    return (
        <UserCard 
            name="Ada Lovelace" 
            age={36} 
            email="ada@example.com" 
        />
    );
}
```

### Using Variables in JSX / Sử dụng biến trong JSX

To display JavaScript variables, expressions, or function results in JSX, wrap them in curly braces `{}`. This tells React to evaluate the JavaScript code inside and render the result. You can think of curly braces as entering "JavaScript land" while inside "JSX land".

Để hiển thị các biến JavaScript, biểu thức hoặc kết quả hàm trong JSX, bọc chúng trong dấu ngoặc nhọn `{}`. Điều này cho React biết phải đánh giá mã JavaScript bên trong và hiển thị kết quả. Bạn có thể nghĩ về dấu ngoặc nhọn như việc vào "vùng đất JavaScript" trong khi đang ở "vùng đất JSX".

```jsx
function Header({ title }) {
    // 1. Using props directly / Sử dụng props trực tiếp
    return <h1>{title}</h1>;
}

function Header(props) {
    // 2. Using object property with dot notation / Sử dụng thuộc tính object với ký hiệu chấm
    return <h1>{props.title}</h1>;
}

function Header({ title }) {
    // 3. Using template literals / Sử dụng template literals
    return <h1>{`Cool ${title}`}</h1>;
}

// 4. Using function return value / Sử dụng giá trị trả về của hàm
function createTitle(title) {
    if (title) {
        return title;
    } else {
        return 'Default title';
    }
}

function Header({ title }) {
    return <h1>{createTitle(title)}</h1>;
}

// 5. Using ternary operator for conditional rendering / Sử dụng toán tử ba ngôi để render có điều kiện
function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}
```

### Iterating Through Lists / Lặp qua danh sách

It's common to display data as a list in web applications. You can use JavaScript's `array.map()` method to iterate over arrays and generate UI elements. When rendering lists, React requires each item to have a unique `key` prop to identify which items have changed, been added, or removed.

Việc hiển thị dữ liệu dưới dạng danh sách rất phổ biến trong các ứng dụng web. Bạn có thể sử dụng phương thức `array.map()` của JavaScript để lặp qua các mảng và tạo các phần tử giao diện. Khi hiển thị danh sách, React yêu cầu mỗi mục phải có một prop `key` duy nhất để xác định các mục nào đã thay đổi, được thêm hoặc bị xóa.

```jsx
function HomePage() {
    // Array of data / Mảng dữ liệu
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    
    return (
        <div>
            <Header title="Team Members" />
            <ul>
                {/* Using map to iterate and create list items / Sử dụng map để lặp và tạo các mục danh sách */}
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

// More complex example with objects / Ví dụ phức tạp hơn với objects
function ProductList() {
    const products = [
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Mouse', price: 29 },
        { id: 3, name: 'Keyboard', price: 79 }
    ];
    
    return (
        <ul>
            {products.map((product) => (
                // Using unique id as key / Sử dụng id duy nhất làm key
                <li key={product.id}>
                    {product.name} - ${product.price}
                </li>
            ))}
        </ul>
    );
}
```

> [!IMPORTANT]
> Always provide a unique `key` prop when rendering lists. Use a guaranteed unique identifier like an ID rather than array indices, as indices can cause issues when the list order changes.
> 
> Luôn cung cấp một prop `key` duy nhất khi hiển thị danh sách. Sử dụng một định danh duy nhất được đảm bảo như ID thay vì chỉ số mảng, vì chỉ số có thể gây ra vấn đề khi thứ tự danh sách thay đổi.

---

## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích

- **Component Reusability / Tính tái sử dụng Component**: Props allow the same component to display different data, eliminating code duplication. / Props cho phép cùng một component hiển thị dữ liệu khác nhau, loại bỏ việc lặp lại code.
- **One-way Data Flow / Luồng dữ liệu một chiều**: Data flows from parent to child, making it easier to understand and debug how data moves through your application. / Dữ liệu chảy từ cha xuống con, giúp dễ dàng hiểu và debug cách dữ liệu di chuyển trong ứng dụng của bạn.
- **Dynamic Content / Nội dung động**: Props enable components to render different content based on external data sources or user interactions. / Props cho phép components hiển thị nội dung khác nhau dựa trên nguồn dữ liệu bên ngoài hoặc tương tác người dùng.
- **Type Safety / An toàn kiểu**: Props can be validated with PropTypes or TypeScript to catch errors early. / Props có thể được xác thực với PropTypes hoặc TypeScript để phát hiện lỗi sớm.
- **Composability / Tính kết hợp**: Props make it easy to compose complex UIs from simple, reusable components. / Props giúp dễ dàng kết hợp các giao diện phức tạp từ các components đơn giản, có thể tái sử dụng.

### Real-world Applications / Ứng dụng thực tế

- **Product Listings / Danh sách sản phẩm**: Display product cards with different names, prices, and images using props passed from a catalog. / Hiển thị thẻ sản phẩm với tên, giá và hình ảnh khác nhau bằng cách sử dụng props được truyền từ catalog.
- **User Profiles / Hồ sơ người dùng**: Show user information like avatars, names, and bios by passing user data as props. / Hiển thị thông tin người dùng như avatar, tên và tiểu sử bằng cách truyền dữ liệu người dùng làm props.
- **Comment Sections / Phần bình luận**: Render comment components with author, timestamp, and content passed through props. / Hiển thị các components bình luận với tác giả, thời gian và nội dung được truyền qua props.
- **Navigation Menus / Menu điều hướng**: Create dynamic navigation menus where menu items are generated from an array of routes. / Tạo menu điều hướng động trong đó các mục menu được tạo từ một mảng các routes.
- **Data Tables / Bảng dữ liệu**: Generate table rows dynamically from arrays of data objects with consistent formatting. / Tạo các hàng trong bảng động từ các mảng đối tượng dữ liệu với định dạng nhất quán.

---

## Complete Example / Ví dụ hoàn chỉnh

```jsx
<!DOCTYPE html>
<html>
<head>
    <title>React Props Example</title>
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
        .user-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 16px;
        }
        .user-card h2 {
            margin: 0 0 8px 0;
        }
    </style>
</head>
<body>
    <!-- Container for React app / Container cho ứng dụng React -->
    <div id="app"></div>

    <script type="text/jsx">
        // Header component with default prop / Component Header với prop mặc định
        function Header({ title }) {
            return <h1>{title ? title : 'Default Title'}</h1>;
        }

        // UserCard component with multiple props / Component UserCard với nhiều props
        function UserCard({ name, role, email }) {
            return (
                <div className="user-card">
                    <h2>{name}</h2>
                    <p><strong>Role:</strong> {role}</p>
                    <p><strong>Email:</strong> {email}</p>
                </div>
            );
        }

        // Main app component / Component ứng dụng chính
        function HomePage() {
            // Array of user data / Mảng dữ liệu người dùng
            const users = [
                { id: 1, name: 'Ada Lovelace', role: 'Mathematician', email: 'ada@example.com' },
                { id: 2, name: 'Grace Hopper', role: 'Computer Scientist', email: 'grace@example.com' },
                { id: 3, name: 'Margaret Hamilton', role: 'Software Engineer', email: 'margaret@example.com' }
            ];

            return (
                <div>
                    {/* Using Header with custom title / Sử dụng Header với tiêu đề tùy chỉnh */}
                    <Header title="Team Members" />
                    
                    {/* Iterating through users array / Lặp qua mảng users */}
                    {users.map((user) => (
                        <UserCard
                            key={user.id}
                            name={user.name}
                            role={user.role}
                            email={user.email}
                        />
                    ))}
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

- ✅ **DO**: Use destructuring to make props access cleaner and more explicit. / Sử dụng destructuring để việc truy cập props gọn gàng và rõ ràng hơn.
- ✅ **DO**: Provide unique `key` props when rendering lists, preferably using IDs. / Cung cấp props `key` duy nhất khi hiển thị danh sách, tốt nhất là sử dụng ID.
- ✅ **DO**: Use default values with ternary operators or default parameters for optional props. / Sử dụng giá trị mặc định với toán tử ba ngôi hoặc tham số mặc định cho các props tùy chọn.
- ✅ **DO**: Keep props simple and focused; pass only the data a component needs. / Giữ props đơn giản và tập trung; chỉ truyền dữ liệu mà component cần.
- ✅ **DO**: Use descriptive prop names that clearly indicate what data they contain. / Sử dụng tên props mô tả rõ ràng chúng chứa dữ liệu gì.
- ❌ **DON'T**: Modify props inside child components; props are read-only. / Không sửa đổi props bên trong các components con; props là chỉ đọc.
- ❌ **DON'T**: Use array indices as keys when the list order might change. / Không sử dụng chỉ số mảng làm keys khi thứ tự danh sách có thể thay đổi.
- ❌ **DON'T**: Pass too many props to a single component; consider restructuring if needed. / Không truyền quá nhiều props cho một component; hãy cân nhhắc tái cấu trúc nếu cần.

---

## Common Mistakes / Lỗi thường gặp

### Error 1: Forgetting Curly Braces for Variables

**Description**: When displaying variables in JSX, forgetting the curly braces will cause React to render the variable name as plain text instead of its value. / Khi hiển thị biến trong JSX, quên dấu ngoặc nhọn sẽ khiến React hiển thị tên biến dưới dạng văn bản thuần thay vì giá trị của nó.

**Solution**: Always wrap JavaScript expressions in curly braces `{}` within JSX. / Luôn bọc các biểu thức JavaScript trong dấu ngoặc nhọn `{}` trong JSX.

```jsx
// ❌ Wrong / Sai - displays the word "title"
function Header({ title }) {
    return <h1>title</h1>;
}

// ✅ Correct / Đúng - displays the value of title
function Header({ title }) {
    return <h1>{title}</h1>;
}
```

### Error 2: Missing Key Prop in Lists

**Description**: When rendering lists with `map()`, forgetting to add a `key` prop causes React warnings and can lead to rendering issues when the list updates. / Khi hiển thị danh sách với `map()`, quên thêm prop `key` gây ra cảnh báo React và có thể dẫn đến vấn đề hiển thị khi danh sách cập nhật.

**Solution**: Always provide a unique `key` prop for each element in a list. / Luôn cung cấp prop `key` duy nhất cho mỗi phần tử trong danh sách.

```jsx
// ❌ Wrong / Sai - missing key prop
function NameList() {
    const names = ['Ada', 'Grace', 'Margaret'];
    return (
        <ul>
            {names.map((name) => (
                <li>{name}</li> // Missing key!
            ))}
        </ul>
    );
}

// ✅ Correct / Đúng - includes unique key
function NameList() {
    const names = ['Ada', 'Grace', 'Margaret'];
    return (
        <ul>
            {names.map((name) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    );
}
```

### Error 3: Mutating Props

**Description**: Props are read-only and should never be modified directly within a component. Attempting to mutate props violates React's one-way data flow principle. / Props là chỉ đọc và không bao giờ nên được sửa đổi trực tiếp trong component. Việc cố gắng biến đổi props vi phạm nguyên tắc luồng dữ liệu một chiều của React.

**Solution**: Use state if you need to modify data. Props should only be read, not written. / Sử dụng state nếu bạn cần sửa đổi dữ liệu. Props chỉ nên được đọc, không được ghi.

```jsx
// ❌ Wrong / Sai - mutating props
function Counter({ count }) {
    count = count + 1; // Don't do this!
    return <div>{count}</div>;
}

// ✅ Correct / Đúng - use state for mutable data (covered in next lesson)
// Will be explained in the State lesson
function Counter({ initialCount }) {
    const [count, setCount] = React.useState(initialCount);
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
```

---

## References / Tài liệu tham khảo

- [Next.js: Displaying Data with Props](https://nextjs.org/learn/react-foundations/displaying-data-with-props)
- [React Documentation: Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [React Documentation: Rendering Lists](https://react.dev/learn/rendering-lists)
- [React Documentation: Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [MDN: Object Destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
