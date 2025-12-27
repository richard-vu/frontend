# Getting Started with React / Bắt đầu với React

---

**📅 Created / Ngày tạo:** 2025-12-27  
**📅 Last Updated / Ngày cập nhật:** 2025-12-27

**⬅️ Previous / Bài trước:** [Updating UI with Javascript](./react_updating_ui_with_javascript.md)  
**➡️ Next / Bài sau:** [Building UI with Components](./react_components.md)

---

## Description / Mô tả

This lesson guides you through the initial steps of using React in your project. You will learn how to load React scripts from a CDN, understand what JSX is and why it's useful, set up Babel to compile JSX into JavaScript, and discover the essential JavaScript concepts you need to know for working with React effectively. By comparing declarative React code with imperative JavaScript, you'll see how React simplifies UI development.

Bài học này hướng dẫn bạn qua các bước ban đầu để sử dụng React trong dự án của bạn. Bạn sẽ học cách tải các scripts React từ CDN, hiểu JSX là gì và tại sao nó hữu ích, thiết lập Babel để biên dịch JSX thành JavaScript, và khám phá các khái niệm JavaScript cốt lõi bạn cần biết để làm việc hiệu quả với React. Bằng cách so sánh code React khai báo với JavaScript mệnh lệnh, bạn sẽ thấy React đơn giản hóa việc phát triển UI như thế nào.

---

## Main Concepts / Khái niệm chính

### Loading React Scripts / Tải React Scripts

To use React, you need to load two essential libraries from a CDN. These libraries work together to enable React functionality in your web page.

Để sử dụng React, bạn cần tải hai thư viện quan trọng từ CDN. Các thư viện này làm việc cùng nhau để kích hoạt chức năng React trong trang web của bạn.

**Two Required Libraries / Hai thư viện bắt buộc:**

1. **react**: The core React library containing all the fundamental React features / Thư viện React cốt lõi chứa tất cả các tính năng React cơ bản
2. **react-dom**: Provides DOM-specific methods that enable React to interact with the browser DOM / Cung cấp các phương thức cụ thể cho DOM cho phép React tương tác với DOM của trình duyệt

```html
<!DOCTYPE html>
<html>
<body>
    <!-- Container for React app / Container cho ứng dụng React -->
    <div id="app"></div>
    
    <!-- Load React library / Tải thư viện React -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    
    <!-- Load React DOM library / Tải thư viện React DOM -->
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <script type="text/javascript">
        // Your React code will go here / Code React của bạn sẽ ở đây
    </script>
</body>
</html>
```

### Using React to Render Content / Sử dụng React để Render Nội dung

Instead of using vanilla JavaScript DOM methods to create elements, React provides a simpler, declarative way to define your UI. You use `ReactDOM.createRoot()` to create a root container and `root.render()` to display content.

Thay vì sử dụng các phương thức DOM JavaScript thuần để tạo elements, React cung cấp một cách khai báo đơn giản hơn để định nghĩa giao diện của bạn. Bạn sử dụng `ReactDOM.createRoot()` để tạo root container và `root.render()` để hiển thị nội dung.

```html
<!DOCTYPE html>
<html>
<body>
    <div id="app"></div>
    
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <script>
        // Get the DOM element / Lấy phần tử DOM
        const app = document.getElementById('app');
        
        // Create a React root / Tạo root React
        const root = ReactDOM.createRoot(app);
        
        // Render content / Hiển thị nội dung
        root.render(<h1>Develop. Preview. Ship.</h1>);
        // This will cause an error! / Điều này sẽ gây ra lỗi!
    </script>
</body>
</html>
```

> [!WARNING]
> The code above will produce a syntax error: `Uncaught SyntaxError: expected expression, got '<'`. This is because `<h1>...</h1>` is JSX, not valid JavaScript.
> 
> Code trên sẽ tạo ra lỗi cú pháp: `Uncaught SyntaxError: expected expression, got '<'`. Điều này là vì `<h1>...</h1>` là JSX, không phải JavaScript hợp lệ.

### What is JSX? / JSX là gì?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes your UI code more readable and intuitive compared to using raw JavaScript DOM methods.

JSX (JavaScript XML) là một phần mở rộng cú pháp cho JavaScript cho phép bạn viết code giống HTML trong các files JavaScript của bạn. Nó làm cho code giao diện của bạn dễ đọc và trực quan hơn so với việc sử dụng các phương thức DOM JavaScript thuần.

```jsx
// JSX (looks like HTML) / JSX (trông giống HTML)
const element = <h1>Develop. Preview. Ship.</h1>;

// What browsers actually understand / Những gì trình duyệt thực sự hiểu
// This is what JSX compiles to / Đây là những gì JSX biên dịch thành
const element = React.createElement('h1', null, 'Develop. Preview. Ship.');
```

**JSX Benefits / Lợi ích của JSX:**
- More readable and familiar syntax / Cú pháp dễ đọc và quen thuộc hơn
- Allows you to write UI alongside logic / Cho phép bạn viết giao diện cùng với logic
- Provides better error messages and warnings / Cung cấp thông báo lỗi và cảnh báo tốt hơn
- Follows [three JSX rules](https://react.dev/learn/writing-markup-with-jsx#the-rules-of-jsx) / Tuân theo ba quy tắc JSX

> [!IMPORTANT]
> Browsers don't understand JSX natively. You need a compiler like Babel to transform JSX into regular JavaScript before the browser can execute it.
> 
> Trình duyệt không hiểu JSX một cách tự nhiên. Bạn cần một trình biên dịch như Babel để chuyển đổi JSX thành JavaScript thông thường trước khi trình duyệt có thể thực thi nó.

### Adding Babel / Thêm Babel

Babel is a JavaScript compiler that transforms modern JavaScript and JSX into code that all browsers can understand. For development purposes, you can add Babel via a CDN script.

Babel là một trình biên dịch JavaScript chuyển đổi JavaScript hiện đại và JSX thành code mà tất cả các trình duyệt có thể hiểu. Cho mục đích phát triển, bạn có thể thêm Babel qua script CDN.

```html
<!DOCTYPE html>
<html>
<body>
    <div id="app"></div>
    
    <!-- Load React / Tải React -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <!-- Load Babel compiler / Tải trình biên dịch Babel -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- Change script type to text/jsx / Đổi loại script thành text/jsx -->
    <script type="text/jsx">
        const domNode = document.getElementById('app');
        const root = ReactDOM.createRoot(domNode);
        root.render(<h1>Develop. Preview. Ship.</h1>);
    </script>
</body>
</html>
```

**Important Steps / Các bước quan trọng:**
1. Add Babel script tag / Thêm thẻ script Babel
2. Change script type from `text/javascript` to `type="text/jsx"` / Đổi loại script từ `text/javascript` thành `type="text/jsx"`

### Declarative vs Imperative Programming / Lập trình Khai báo vs Mệnh lệnh

React uses a declarative approach, which means you describe what you want to display, and React handles the "how". This contrasts with imperative programming where you manually describe each step.

React sử dụng cách tiếp cận khai báo, có nghĩa là bạn mô tả những gì bạn muốn hiển thị, và React xử lý "cách thức". Điều này trái ngược với lập trình mệnh lệnh nơi bạn mô tả thủ công từng bước.

```html
<!-- IMPERATIVE: Step-by-step instructions / MỆNH LỆNH: Hướng dẫn từng bước -->
<script type="text/javascript">
    // Step 1: Get the container / Bước 1: Lấy container
    const app = document.getElementById('app');
    
    // Step 2: Create an h1 element / Bước 2: Tạo phần tử h1
    const header = document.createElement('h1');
    
    // Step 3: Create text content / Bước 3: Tạo nội dung văn bản
    const text = 'Develop. Preview. Ship.';
    const headerContent = document.createTextNode(text);
    
    // Step 4: Append text to h1 / Bước 4: Thêm văn bản vào h1
    header.appendChild(headerContent);
    
    // Step 5: Append h1 to container / Bước 5: Thêm h1 vào container
    app.appendChild(header);
</script>

<!-- DECLARATIVE: Describe what you want / KHAI BÁO: Mô tả những gì bạn muốn -->
<script type="text/jsx">
    const domNode = document.getElementById('app');
    const root = ReactDOM.createRoot(domNode);
    
    // Just describe the desired output / Chỉ mô tả đầu ra mong muốn
    root.render(<h1>Develop. Preview. Ship.</h1>);
</script>
```

**Comparison / So sánh:**
- **Imperative / Mệnh lệnh**: 9 lines of code, many steps / 9 dòng code, nhiều bước
- **Declarative / Khai báo**: 3 lines of code, clear intent / 3 dòng code, ý định rõ ràng

### Essential JavaScript for React / JavaScript Cốt lõi cho React

While you can learn JavaScript and React simultaneously, being familiar with certain JavaScript concepts will make learning React easier. Here are the essential topics you should know:

Mặc dù bạn có thể học JavaScript và React đồng thời, việc làm quen với một số khái niệm JavaScript nhất định sẽ giúp việc học React dễ dàng hơn. Dưới đây là các chủ đề cốt lõi bạn nên biết:

**1. Functions and Arrow Functions / Hàm và Hàm mũi tên:**

```jsx
// Regular function / Hàm thông thường
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// Arrow function / Hàm mũi tên
const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>;
};

// Concise arrow function / Hàm mũi tên ngắn gọn
const Welcome = (props) => <h1>Hello, {props.name}</h1>;
```

**2. Objects and Arrays / Đối tượng và Mảng:**

```jsx
// Objects / Đối tượng
const user = {
    name: 'Ada Lovelace',
    age: 36
};

// Arrays / Mảng
const names = ['Ada', 'Grace', 'Margaret'];

// Array methods (map, filter, etc.) / Phương thức mảng
const list = names.map((name) => <li key={name}>{name}</li>);
```

**3. Destructuring / Phá cấu trúc:**

```jsx
// Object destructuring / Phá cấu trúc đối tượng
const { name, age } = user;

// Array destructuring / Phá cấu trúc mảng
const [first, second] = names;

// Props destructuring / Phá cấu trúc props
function Welcome({ name, age }) {
    return <h1>Hello, {name}</h1>;
}
```

**4. Template Literals / Chuỗi mẫu:**

```jsx
const name = 'Ada';
const greeting = `Hello, ${name}!`; // "Hello, Ada!"

// In JSX / Trong JSX
<h1>{`Welcome, ${name}`}</h1>
```

**5. Ternary Operators / Toán tử ba ngôi:**

```jsx
// Conditional rendering / Render có điều kiện
const isLoggedIn = true;
<div>
    {isLoggedIn ? <Dashboard /> : <Login />}
</div>
```

**6. ES Modules (Import/Export) / ES Modules (Import/Export):**

```jsx
// Exporting / Xuất
export function Welcome() { }
export default App;

// Importing / Nhập
import React from 'react';
import { Welcome } from './Welcome';
```

---

## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích

- **Simplified Development / Phát triển đơn giản hóa**: JSX and declarative syntax reduce code complexity and make UI development more intuitive. / JSX và cú pháp khai báo giảm độ phức tạp của code và làm cho phát triển giao diện trực quan hơn.
- **Better Readability / Khả năng đọc tốt hơn**: JSX looks similar to HTML, making it easier to visualize the UI structure. / JSX trông giống HTML, giúp dễ hình dung cấu trúc giao diện.
- **Browser Compatibility / Tương thích trình duyệt**: Babel ensures your modern JavaScript and JSX work across all browsers. / Babel đảm bảo JavaScript hiện đại và JSX của bạn hoạt động trên tất cả các trình duyệt.
- **Less Boilerplate / Ít mã soạn sẵn hơn**: React eliminates repetitive DOM manipulation code. / React loại bỏ code thao tác DOM lặp đi lặp lại.
- **Faster Development / Phát triển nhanh hơn**: Declarative approach lets you focus on what to build, not how to build it. / Cách tiếp cận khai báo cho phép bạn tập trung vào những gì cần xây dựng, không phải cách xây dựng.

### Real-world Applications / Ứng dụng thực tế

- **Interactive Web Applications / Ứng dụng Web tương tác**: Building dashboards, social media platforms, and complex user interfaces. / Xây dựng bảng điều khiển, nền tảng mạng xã hội và giao diện người dùng phức tạp.
- **Single Page Applications (SPAs) / Ứng dụng Trang đơn (SPAs)**: Creating smooth, app-like experiences without page reloads. / Tạo trải nghiệm mượt mà, giống ứng dụng mà không cần tải lại trang.
- **Component Libraries / Thư viện Component**: Building reusable UI components for consistent design systems. / Xây dựng các components giao diện có thể tái sử dụng cho hệ thống thiết kế nhất quán.
- **Progressive Web Apps (PWAs) / Ứng dụng Web Tiến bộ**: Developing offline-capable, installable web applications. / Phát triển các ứng dụng web có thể cài đặt, hoạt động ngoại tuyến.
- **E-commerce Platforms / Nền tảng Thương mại điện tử**: Creating dynamic product catalogs, shopping carts, and checkout flows. / Tạo danh mục sản phẩm động, giỏ hàng và quy trình thanh toán.

---

## Complete Example / Ví dụ hoàn chỉnh

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Getting Started with React</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        h1 {
            color: #0070f3;
        }
    </style>
</head>
<body>
    <!-- React root container / Container root React -->
    <div id="app"></div>
    
    <!-- Load React library / Tải thư viện React -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    
    <!-- Load React DOM library / Tải thư viện React DOM -->
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    
    <!-- Load Babel compiler / Tải trình biên dịch Babel -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- React code with JSX / Code React với JSX -->
    <script type="text/jsx">
        // Get the DOM node / Lấy nút DOM
        const domNode = document.getElementById('app');
        
        // Create React root / Tạo root React
        const root = ReactDOM.createRoot(domNode);
        
        // Render content using JSX / Hiển thị nội dung bằng JSX
        root.render(
            <div>
                <h1>Develop. Preview. Ship.</h1>
                <p>Welcome to React!</p>
            </div>
        );
    </script>
</body>
</html>
```

---

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Use CDN scripts for quick prototyping and learning. / Sử dụng scripts CDN để tạo nguyên mẫu nhanh và học tập.
- ✅ **DO**: Always include both `react` and `react-dom` scripts in correct order. / Luôn bao gồm cả scripts `react` và `react-dom` theo đúng thứ tự.
- ✅ **DO**: Add Babel before your JSX code and use `type="text/jsx"`. / Thêm Babel trước code JSX của bạn và sử dụng `type="text/jsx"`.
- ✅ **DO**: Learn essential JavaScript concepts before diving deep into React. / Học các khái niệm JavaScript cốt lõi trước khi đi sâu vào React.
- ✅ **DO**: Use declarative JSX instead of imperative DOM manipulation. / Sử dụng JSX khai báo thay vì thao tác DOM mệnh lệnh.
- ❌ **DON'T**: Use CDN Babel in production (it's slow for production). / Không sử dụng CDN Babel trong production (nó chậm cho production).
- ❌ **DON'T**: Forget to change script type to `text/jsx` when using JSX. / Không quên đổi loại script thành `text/jsx` khi sử dụng JSX.
- ❌ **DON'T**: Load scripts in wrong order (React must come before ReactDOM). / Không tải scripts sai thứ tự (React phải đến trước ReactDOM).

---

## Common Mistakes / Lỗi thường gặp

### Error 1: Syntax Error with JSX

**Description**: Using JSX without Babel or without setting `type="text/jsx"` causes syntax errors. / Sử dụng JSX mà không có Babel hoặc không đặt `type="text/jsx"` gây ra lỗi cú pháp.

**Error Message**: `Uncaught SyntaxError: expected expression, got '<'`

**Solution**: Add Babel script and set correct script type. / Thêm script Babel và đặt loại script đúng.

```html
<!-- ❌ Wrong / Sai -->
<script type="text/javascript">
    root.render(<h1>Hello</h1>); // Error!
</script>

<!-- ✅ Correct / Đúng -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/jsx">
    root.render(<h1>Hello</h1>); // Works!
</script>
```

### Error 2: Script Loading Order

**Description**: Loading React scripts in the wrong order causes errors because ReactDOM depends on React. / Tải scripts React sai thứ tự gây ra lỗi vì ReactDOM phụ thuộc vào React.

**Solution**: Always load React before ReactDOM. / Luôn tải React trước ReactDOM.

```html
<!-- ❌ Wrong / Sai -->
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>

<!-- ✅ Correct / Đúng -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

### Error 3: Missing Container Element

**Description**: Trying to create a React root on a non-existent DOM element causes errors. / Cố gắng tạo root React trên một phần tử DOM không tồn tại gây ra lỗi.

**Solution**: Ensure the container element exists before creating root. / Đảm bảo phần tử container tồn tại trước khi tạo root.

```html
<!-- ❌ Wrong / Sai -->
<script type="text/jsx">
    const root = ReactDOM.createRoot(document.getElementById('app'));
    // Error if #app doesn't exist / Lỗi nếu #app không tồn tại
</script>
<div id="app"></div>

<!-- ✅ Correct / Đúng -->
<div id="app"></div>
<script type="text/jsx">
    const root = ReactDOM.createRoot(document.getElementById('app'));
    // DOM element exists before script runs / Phần tử DOM tồn tại trước khi script chạy
</script>
```

---

## References / Tài liệu tham khảo

- [Next.js: Getting Started with React](https://nextjs.org/learn/react-foundations/getting-started-with-react)
- [React Documentation: Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React Documentation: Understanding Your UI as a Tree](https://react.dev/learn/understanding-your-ui-as-a-tree)
- [React Documentation: createRoot](https://react.dev/reference/react-dom/client/createRoot)
- [Babel Documentation](https://babeljs.io/)
- [MDN: JavaScript Guide](https://developer.mozilla.org/docs/Web/JavaScript/Guide)
- [MDN: Functions](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions)
- [MDN: Arrow Functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [MDN: Template Literals](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Template_literals)
