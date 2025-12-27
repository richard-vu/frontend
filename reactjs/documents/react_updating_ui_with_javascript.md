# Updating UI with JavaScript / Cập nhật UI với JavaScript

---

**📅 Created / Ngày tạo:** 2025-12-27  
**📅 Last Updated / Ngày cập nhật:** 2025-12-27

**⬅️ Previous / Bài trước:** [Rendering User Interfaces (UI)](./react_rendering_ui.md)  
**➡️ Next / Bài sau:** [Getting Started with React](./react_getting_started_with_react.md)

---

## Description / Mô tả

This lesson demonstrates how to update the user interface using JavaScript and DOM methods through a practical example. You will build a simple project that adds an h1 element to the page, learn the difference between HTML source code and the DOM, and understand the contrast between imperative and declarative programming approaches. This knowledge sets the foundation for understanding why React and other declarative UI libraries are preferred for modern web development.

Bài học này trình bày cách cập nhật giao diện người dùng bằng JavaScript và các phương thức DOM thông qua một ví dụ thực tế. Bạn sẽ xây dựng một dự án đơn giản thêm một phần tử h1 vào trang, học sự khác biệt giữa mã nguồn HTML và DOM, và hiểu sự tương phản giữa các cách tiếp cận lập trình mệnh lệnh và khai báo. Kiến thức này đặt nền móng để hiểu tại sao React và các thư viện giao diện khai báo khác được ưa chuộng cho phát triển web hiện đại.

---

## Main Concepts / Khái niệm chính

### Building a Project with DOM Manipulation / Xây dựng Dự án với Thao tác DOM

Let's start by building a practical example that adds an h1 element to a webpage using JavaScript and DOM methods. This hands-on approach will help you understand how JavaScript can dynamically update the UI.

Hãy bắt đầu bằng cách xây dựng một ví dụ thực tế thêm một phần tử h1 vào trang web bằng JavaScript và các phương thức DOM. Cách tiếp cận thực hành này sẽ giúp bạn hiểu cách JavaScript có thể cập nhật động giao diện.

**Step 1: Create the HTML Structure / Bước 1: Tạo cấu trúc HTML**

```html
<!-- index.html -->
<html>
<body>
    <!-- Container div with unique ID / Div container với ID duy nhất -->
    <div id="app"></div>
</body>
</html>
```

**Step 2: Add JavaScript / Bước 2: Thêm JavaScript**

```html
<html>
<body>
    <div id="app"></div>
    
    <!-- JavaScript code / Code JavaScript -->
    <script type="text/javascript">
        // Select the div element / Chọn phần tử div
        const app = document.getElementById('app');
        
        // Create a new H1 element / Tạo phần tử H1 mới
        const header = document.createElement('h1');
        
        // Create text content / Tạo nội dung văn bản
        const text = 'Develop. Preview. Ship.';
        const headerContent = document.createTextNode(text);
        
        // Append text to H1 / Thêm văn bản vào H1
        header.appendChild(headerContent);
        
        // Place H1 inside the div / Đặt H1 vào trong div
        app.appendChild(header);
    </script>
</body>
</html>
```

**Result / Kết quả:**

When you open this HTML file in a browser, you'll see an h1 tag displaying "Develop. Preview. Ship."

Khi bạn mở file HTML này trong trình duyệt, bạn sẽ thấy thẻ h1 hiển thị "Develop. Preview. Ship."

### HTML vs. the DOM / HTML so với DOM

Understanding the difference between HTML and the DOM is crucial for web development. They represent the same content but at different stages of the page lifecycle.

Hiểu sự khác biệt giữa HTML và DOM là rất quan trọng cho phát triển web. Chúng đại diện cho cùng một nội dung nhưng ở các giai đoạn khác nhau của vòng đời trang.

**HTML (Source Code) / HTML (Mã nguồn):**
- The original code you write / Mã gốc bạn viết
- Static and unchanging / Tĩnh và không thay đổi
- What the server sends to the browser / Những gì server gửi đến trình duyệt

```html
<!-- Original HTML file / File HTML gốc -->
<html>
<body>
    <div id="app"></div>
    <script>/* JavaScript code */</script>
</body>
</html>
```

**DOM (Document Object Model) / DOM (Mô hình Đối tượng Tài liệu):**
- The current state of the page / Trạng thái hiện tại của trang
- Dynamic and can be modified by JavaScript / Động và có thể được sửa đổi bởi JavaScript
- What you see in browser developer tools / Những gì bạn thấy trong công cụ nhà phát triển trình duyệt

```html
<!-- DOM (after JavaScript runs) / DOM (sau khi JavaScript chạy) -->
<html>
<body>
    <div id="app">
        <h1>Develop. Preview. Ship.</h1>  <!-- Added by JavaScript / Được thêm bởi JavaScript -->
    </div>
    <script>/* JavaScript code */</script>
</body>
</html>
```

**Viewing the DOM / Xem DOM:**

1. Open your browser's developer tools (`F12` or right-click → Inspect) / Mở công cụ nhà phát triển (`F12` hoặc chuột phải → Inspect)
2. Look at the Elements/Inspector tab / Xem tab Elements/Inspector
3. You'll see the `<h1>` element inside the `<div>` / Bạn sẽ thấy phần tử `<h1>` bên trong `<div>`

> [!NOTE]
> The HTML represents the **initial** page content, while the DOM represents the **current** page content that has been modified by JavaScript.
> 
> HTML đại diện cho nội dung trang **ban đầu**, trong khi DOM đại diện cho nội dung trang **hiện tại** đã được sửa đổi bởi JavaScript.

### Imperative vs. Declarative Programming / Lập trình Mệnh lệnh so với Khai báo

This is a fundamental concept in programming that affects how you write and think about code. Understanding both approaches helps you appreciate React's advantages.

Đây là một khái niệm cơ bản trong lập trình ảnh hưởng đến cách bạn viết và suy nghĩ về code. Hiểu cả hai cách tiếp cận giúp bạn đánh giá cao những ưu điểm của React.

**Imperative Programming / Lập trình Mệnh lệnh:**

You write step-by-step instructions telling the computer **HOW** to do something.

Bạn viết hướng dẫn từng bước cho máy tính biết **LÀM THẾ NÀO** để làm điều gì đó.

```javascript
// IMPERATIVE: Step-by-step instructions / MỆNH LỆNH: Hướng dẫn từng bước

// Step 1: Select the container / Bước 1: Chọn container
const app = document.getElementById('app');

// Step 2: Create element / Bước 2: Tạo phần tử
const header = document.createElement('h1');

// Step 3: Create text / Bước 3: Tạo văn bản
const text = 'Develop. Preview. Ship.';
const headerContent = document.createTextNode(text);

// Step 4: Combine text and element / Bước 4: Kết hợp văn bản và phần tử
header.appendChild(headerContent);

// Step 5: Add to page / Bước 5: Thêm vào trang
app.appendChild(header);
```

**Declarative Programming / Lập trình Khai báo:**

You describe **WHAT** you want to show, and the library figures out HOW to do it.

Bạn mô tả **CÁI GÌ** bạn muốn hiển thị, và thư viện tự tìm ra CÁCH làm điều đó.

```jsx
// DECLARATIVE: Describe the desired result / KHAI BÁO: Mô tả kết quả mong muốn

// Just describe what you want / Chỉ mô tả những gì bạn muốn
<h1>Develop. Preview. Ship.</h1>
```

**Analogy: Ordering Pizza / Phép tương tự: Đặt Pizza**

```
Imperative (How) / Mệnh lệnh (Làm thế nào):
1. Get flour, water, yeast / Lấy bột mì, nước, men
2. Mix ingredients / Trộn các nguyên liệu
3. Knead dough for 10 minutes / Nhào bột trong 10 phút
4. Let it rise for 1 hour / Để nở trong 1 giờ
5. Add tomato sauce / Thêm sốt cà chua
6. Add cheese and toppings / Thêm phô mai và topping
7. Bake at 450°F for 12 minutes / Nướng ở 232°C trong 12 phút

Declarative (What) / Khai báo (Cái gì):
"I want a pepperoni pizza" 🍕
"Tôi muốn một pizza pepperoni"
```

**Code Comparison / So sánh Code:**

```javascript
// IMPERATIVE: 6 lines, manual steps / MỆNH LỆNH: 6 dòng, các bước thủ công
const app = document.getElementById('app');
const header = document.createElement('h1');
const text = 'Develop. Preview. Ship.';
const headerContent = document.createTextNode(text);
header.appendChild(headerContent);
app.appendChild(header);

// DECLARATIVE: 1 line, describe result / KHAI BÁO: 1 dòng, mô tả kết quả
root.render(<h1>Develop. Preview. Ship.</h1>);
```

> [!IMPORTANT]
> As applications grow larger and more complex, imperative DOM manipulation becomes increasingly difficult to manage. Declarative programming reduces this complexity significantly.
> 
> Khi ứng dụng phát triển lớn hơn và phức tạp hơn, thao tác DOM mệnh lệnh trở nên ngày càng khó quản lý. Lập trình khai báo giảm đáng kể sự phức tạp này.

### React: A Declarative UI Library / React: Thư viện Giao diện Khai báo

React is a popular declarative library that allows you to build user interfaces efficiently. Instead of manually manipulating the DOM, you tell React what the UI should look like, and React handles all the complex DOM updates for you.

React là một thư viện khai báo phổ biến cho phép bạn xây dựng giao diện người dùng một cách hiệu quả. Thay vì thao tác DOM thủ công, bạn cho React biết giao diện nên trông như thế nào, và React xử lý tất cả các cập nhật DOM phức tạp cho bạn.

**Benefits of React's Declarative Approach / Lợi ích của cách tiếp cận khai báo của React:**

1. **Less Code / Ít code hơn**: Write less, accomplish more / Viết ít, đạt được nhiều hơn
2. **Easier to Read / Dễ đọc hơn**: UI description matches the visual result / Mô tả giao diện phù hợp với kết quả trực quan
3. **Easier to Debug / Dễ debug hơn**: Clearer code structure / Cấu trúc code rõ ràng hơn
4. **Better Performance / Hiệu suất tốt hơn**: React optimizes DOM updates / React tối ưu hóa cập nhật DOM
5. **Team Collaboration / Hợp tác nhóm**: Easier for multiple developers to work together / Dễ dàng hơn cho nhiều nhà phát triển làm việc cùng nhau

```jsx
// Example: Complex UI in React / Ví dụ: Giao diện phức tạp trong React
function UserProfile({ user }) {
    return (
        <div className="profile">
            <img src={user.avatar} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <button>Follow</button>
        </div>
    );
}

// Imagine writing this with imperative DOM manipulation!
// Hãy tưởng tượng viết điều này với thao tác DOM mệnh lệnh!
// It would be 30+ lines of createElement, appendChild, etc.
// Nó sẽ là 30+ dòng createElement, appendChild, v.v.
```

---

## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích

- **Faster Development / Phát triển nhanh hơn**: Declarative code reduces development time by eliminating repetitive DOM manipulation logic. / Code khai báo giảm thời gian phát triển bằng cách loại bỏ logic thao tác DOM lặp đi lặp lại.
- **Better Maintainability / Khả năng bảo trì tốt hơn**: Describing UI state is clearer than describing steps to achieve that state. / Mô tả trạng thái giao diện rõ ràng hơn mô tả các bước để đạt được trạng thái đó.
- **Improved Performance / Hiệu suất được cải thiện**: React optimizes DOM updates using Virtual DOM, often faster than manual manipulation. / React tối ưu hóa cập nhật DOM bằng Virtual DOM, thường nhanh hơn thao tác thủ công.
- **Scalability / Khả năng mở rộng**: Declarative approach scales better as applications grow in complexity. / Cách tiếp cận khai báo mở rộng tốt hơn khi ứng dụng phát triển về độ phức tạp.
- **Reduced Bugs / Giảm lỗi**: Less manual DOM manipulation means fewer opportunities for errors. / Ít thao tác DOM thủ công hơn có nghĩa là ít cơ hội cho lỗi hơn.
- **Team Productivity / Năng suất nhóm**: New team members can understand declarative code more quickly. / Thành viên nhóm mới có thể hiểu code khai báo nhanh hơn.

### Real-world Applications / Ứng dụng thực tế

- **Complex User Interfaces / Giao diện Người dùng Phức tạp**: Managing state and UI updates in large applications with hundreds of components. / Quản lý trạng thái và cập nhật giao diện trong các ứng dụng lớn với hàng trăm components.
- **Dynamic Content / Nội dung Động**: Displaying frequently changing data without manually tracking DOM nodes. / Hiển thị dữ liệu thay đổi thường xuyên mà không cần theo dõi thủ công các nút DOM.
- **Single Page Applications (SPAs) / Ứng dụng Trang Đơn**: Building app-like experiences where the UI updates without page reloads. / Xây dựng trải nghiệm giống ứng dụng nơi giao diện cập nhật mà không cần tải lại trang.
- **Interactive Dashboards / Bảng điều khiển Tương tác**: Creating data visualization tools with real-time updates. / Tạo công cụ trực quan hóa dữ liệu với cập nhật thời gian thực.
- **E-commerce Platforms / Nền tảng Thương mại điện tử**: Managing product catalogs, shopping carts, and checkout processes. / Quản lý danh mục sản phẩm, giỏ hàng và quy trình thanh toán.
- **Social Media Feeds / Nguồn cấp Mạng xã hội**: Displaying and updating posts, comments, and notifications dynamically. / Hiển thị và cập nhật bài đăng, bình luận và thông báo động.
- **Form-Heavy Applications / Ứng dụng Nhiều Biểu mẫu**: Building complex forms with validation, conditional fields, and dynamic sections. / Xây dựng biểu mẫu phức tạp với xác thực, trường có điều kiện và phần động.

---

## Complete Example / Ví dụ hoàn chỉnh

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Updating UI with JavaScript</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        #app {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
            color: #0070f3;
            margin: 0 0 20px 0;
        }
        .info {
            padding: 15px;
            background: #e1f5ff;
            border-left: 4px solid #0070f3;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <!-- Container will be populated by JavaScript / Container sẽ được điền bởi JavaScript -->
    <div id="app"></div>
    
    <script type="text/javascript">
        // IMPERATIVE APPROACH / CÁCH TIẾP CẬN MỆNH LỆNH
        
        // Step 1: Select the container / Bước 1: Chọn container
        const app = document.getElementById('app');
        
        // Step 2: Create header element / Bước 2: Tạo phần tử header
        const header = document.createElement('h1');
        const headerText = document.createTextNode('Develop. Preview. Ship. 🚀');
        header.appendChild(headerText);
        
        // Step 3: Create paragraph element / Bước 3: Tạo phần tử paragraph
        const paragraph = document.createElement('p');
        paragraph.textContent = 'This content was added using imperative JavaScript DOM manipulation.';
        
        // Step 4: Create info box / Bước 4: Tạo hộp thông tin
        const infoBox = document.createElement('div');
        infoBox.className = 'info';
        
        const infoText = document.createElement('p');
        infoText.innerHTML = '<strong>Note:</strong> Open the browser developer tools to see the difference between the HTML source and the DOM.';
        infoBox.appendChild(infoText);
        
        // Step 5: Create list / Bước 5: Tạo danh sách
        const listTitle = document.createElement('h3');
        listTitle.textContent = 'Steps we used:';
        
        const list = document.createElement('ul');
        const steps = [
            'Selected the container',
            'Created elements',
            'Added content',
            'Appended to DOM'
        ];
        
        steps.forEach(step => {
            const listItem = document.createElement('li');
            listItem.textContent = step;
            list.appendChild(listItem);
        });
        
        // Step 6: Add everything to the page / Bước 6: Thêm mọi thứ vào trang
        app.appendChild(header);
        app.appendChild(paragraph);
        app.appendChild(infoBox);
        app.appendChild(listTitle);
        app.appendChild(list);
        
        // Log to console / Ghi vào console
        console.log('DOM manipulation complete!');
        console.log('HTML source vs DOM: Check the Elements tab in DevTools');
    </script>
</body>
</html>
```

---

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Place scripts at the end of the body or use `DOMContentLoaded` event / Đặt scripts ở cuối body hoặc sử dụng sự kiện `DOMContentLoaded`.
- ✅ **DO**: Use meaningful variable names (e.g., `header`, not `el1`) / Sử dụng tên biến có ý nghĩa.
- ✅ **DO**: Understand imperative DOM manipulation before learning React / Hiểu thao tác DOM mệnh lệnh trước khi học React.
- ✅ **DO**: Consider declarative libraries like React for complex applications / Cân nhắc các thư viện khai báo như React cho ứng dụng phức tạp.
- ✅ **DO**: Use `textContent` for plain text (safer than `innerHTML`) / Sử dụng `textContent` cho văn bản thuần.
- ❌ **DON'T**: Manually manipulate DOM for large, complex UIs (use React instead) / Không thao tác DOM thủ công cho giao diện lớn, phức tạp.
- ❌ **DON'T**: Forget that imperative code becomes harder to maintain as it grows / Không quên rằng code mệnh lệnh trở nên khó bảo trì hơn khi phát triển.
- ❌ **DON'T**: Mix imperative and declarative approaches in the same codebase / Không trộn lẫn cách tiếp cận mệnh lệnh và khai báo trong cùng một codebase.

---

## Common Mistakes / Lỗi thường gặp

### Error 1: Not Waiting for DOM to Load

**Description**: Trying to select elements before the DOM is fully loaded results in `null` references. / Cố gắng chọn các phần tử trước khi DOM được tải đầy đủ dẫn đến tham chiếu `null`.

**Solution**: Place scripts at the end of body or use `DOMContentLoaded` event. / Đặt scripts ở cuối body hoặc sử dụng sự kiện `DOMContentLoaded`.

```html
<!-- ❌ Wrong / Sai - Script runs before DOM is ready -->
<html>
<head>
    <script>
        const app = document.getElementById('app'); // null!
    </script>
</head>
<body>
    <div id="app"></div>
</body>
</html>

<!-- ✅ Correct / Đúng - Script runs after DOM is ready -->
<html>
<body>
    <div id="app"></div>
    <script>
        const app = document.getElementById('app'); // Works!
    </script>
</body>
</html>

<!-- ✅ Also correct / Cũng đúng - Using event listener -->
<html>
<head>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const app = document.getElementById('app'); // Works!
        });
    </script>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

### Error 2: Confusing HTML Source with DOM

**Description**: Expecting to see dynamically added elements in "View Source" instead of DevTools. / Mong đợi thấy các phần tử được thêm động trong "View Source" thay vì DevTools.

**Solution**: Use DevTools (F12) to inspect the live DOM, not "View Source". / Sử dụng DevTools (F12) để kiểm tra DOM trực tiếp, không phải "View Source".

```
View Source (Ctrl+U) / Xem nguồn:
- Shows the original HTML file / Hiển thị file HTML gốc
- Does NOT show JavaScript changes / KHÔNG hiển thị thay đổi JavaScript

DevTools (F12) / Công cụ phát triển:
- Shows the live DOM / Hiển thị DOM trực tiếp
- DOES show JavaScript changes / HIỂN THỊ thay đổi JavaScript ✓
```

### Error 3: Overcomplicating Simple Updates

**Description**: Writing verbose imperative code when a declarative approach would be simpler and clearer. / Viết code mệnh lệnh dài dòng khi cách tiếp can khai báo sẽ đơn giản và rõ ràng hơn.

**Solution**: For complex UIs, use React or other declarative frameworks. / Đối với giao diện phức tạp, sử dụng React hoặc các frameworks khai báo khác.

```javascript
// ❌ Overly complex with vanilla JS / Quá phức tạp với vanilla JS
function updateUserList(users) {
    const list = document.getElementById('users');
    list.innerHTML = ''; // Clear existing / Xóa hiện có
    
    users.forEach(user => {
        const li = document.createElement('li');
        const name = document.createElement('span');
        name.textContent = user.name;
        const email = document.createElement('span');
        email.textContent = user.email;
        li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li);
    });
}

// ✅ Simple with React / Đơn giản với React
function UserList({ users }) {
    return (
        <ul id="users">
            {users.map(user => (
                <li key={user.id}>
                    <span>{user.name}</span>
                    <span>{user.email}</span>
                </li>
            ))}
        </ul>
    );
}
```

---

## References / Tài liệu tham khảo

- [Next.js: Updating UI with JavaScript](https://nextjs.org/learn/react-foundations/updating-ui-with-javascript)
- [Chrome DevTools: HTML vs. the DOM](https://developer.chrome.com/docs/devtools/dom/#appendix)
- [React: How Declarative UI Compares to Imperative](https://react.dev/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative)
- [MDN: Manipulating Documents](https://developer.mozilla.org/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [MDN: Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [MDN: Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [MDN: Node.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
