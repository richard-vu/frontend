# Installing Next.js / Cài đặt Next.js

---

**📅 Created / Ngày tạo:** 2025-12-27  
**📅 Last Updated / Ngày cập nhật:** 2025-12-27

**⬅️ Previous / Bài trước:** [From React to Next.js](./react_to_nextjs.md)  
**➡️ Next / Bài sau:** [Server and Client Components](./react_server_client_components.md)

---

## Description / Mô tả

This lesson guides you through the process of installing Next.js and migrating your React application to use the Next.js framework. You will learn how to install Next.js packages using npm, refactor your code to work with Next.js conventions, understand file-system based routing, and set up the development server. By the end of this lesson, you'll see how Next.js eliminates the need for manual configuration of build tools like Babel and webpack, making your development process simpler and more efficient.

Bài học này hướng dẫn bạn qua quá trình cài đặt Next.js và di chuyển ứng dụng React của bạn để sử dụng framework Next.js. Bạn sẽ học cách cài đặt các gói Next.js bằng npm, tái cấu trúc code của bạn để hoạt động với các quy ước Next.js, hiểu về định tuyến dựa trên hệ thống file, và thiết lập server phát triển. Khi kết thúc bài học này, bạn sẽ thấy cách Next.js loại bỏ nhu cầu cấu hình thủ công các công cụ build như Babel và webpack, làm cho quá trình phát triển của bạn đơn giản và hiệu quả hơn.

---

## Main Concepts / Khái niệm chính

### Installing Dependencies / Cài đặt Dependencies

Instead of loading React from CDN scripts, Next.js allows you to install React and Next.js as local packages using npm. This provides better version control, faster load times, and access to the full ecosystem of npm packages.

Thay vì tải React từ các script CDN, Next.js cho phép bạn cài đặt React và Next.js như các gói cục bộ bằng npm. Điều này cung cấp kiểm soát phiên bản tốt hơn, thời gian tải nhanh hơn và truy cập vào hệ sinh thái đầy đủ của các gói npm.

> [!IMPORTANT]
> To use Next.js, you need Node.js version 20.9 or above installed on your machine. [Download Node.js here](https://nodejs.org/en/).
> 
> Để sử dụng Next.js, bạn cần cài đặt Node.js phiên bản 20.9 trở lên trên máy của bạn.

```bash
# Step 1: Create package.json file / Bước 1: Tạo file package.json
# Create an empty package.json with {} / Tạo package.json rỗng với {}
echo {} > package.json

# Step 2: Install dependencies / Bước 2: Cài đặt dependencies
npm install react@latest react-dom@latest next@latest
```

**After installation, your `package.json` will look like this / Sau khi cài đặt, `package.json` của bạn sẽ trông như thế này:**

```json
{
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

> [!NOTE]
> Version numbers may be higher than shown above. As long as you have `next`, `react`, and `react-dom` installed, you're good to go.
> 
> Số phiên bản có thể cao hơn so với hiển thị ở trên. Miễn là bạn đã cài đặt `next`, `react` và `react-dom`, bạn đã sẵn sàng.

### Refactoring from HTML to JSX / Tái cấu trúc từ HTML sang JSX

When migrating to Next.js, you need to remove HTML boilerplate and CDN scripts since Next.js handles all the build configuration automatically. This includes removing Babel, React CDN links, and manual DOM manipulation code.

Khi di chuyển sang Next.js, bạn cần xóa boilerplate HTML và các script CDN vì Next.js xử lý tất cả cấu hình build tự động. Điều này bao gồm việc xóa Babel, liên kết CDN React và code thao tác DOM thủ công.

```jsx
// BEFORE: React with CDN (index.html) / TRƯỚC: React với CDN
<!DOCTYPE html>
<html>
<body>
    <div id="app"></div>
    
    <!-- CDN scripts / Script CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/jsx">
        const app = document.getElementById("app");
        
        function HomePage() {
            const [likes, setLikes] = React.useState(0);
            return <button>Like ({likes})</button>;
        }
        
        const root = ReactDOM.createRoot(app);
        root.render(<HomePage />);
    </script>
</body>
</html>

// AFTER: Next.js (page.js) / SAU: Next.js
import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
```

**What to remove / Những gì cần xóa:**
1. ✂️ `<html>` and `<body>` tags / Thẻ `<html>` và `<body>`
2. ✂️ `<div id="app">` container / Container `<div id="app">`
3. ✂️ React and ReactDOM CDN scripts / Script CDN React và ReactDOM
4. ✂️ Babel script / Script Babel
5. ✂️ `<script type="text/jsx">` tag / Thẻ `<script type="text/jsx">`
6. ✂️ `document.getElementById()` and `ReactDOM.createRoot()` / Các phương thức DOM
7. ✂️ `React.` prefix from `React.useState()` / Tiền tố `React.` từ `React.useState()`

**What to add / Những gì cần thêm:**
1. ➕ `import { useState } from 'react';` at the top / Import ở đầu file
2. ➕ `export default` before main component / Trước component chính

### File-System Routing / Định tuyến dựa trên File

Next.js uses file-system routing, meaning the folder structure of your project defines your application routes. Instead of configuring routes with code, you simply create files and folders.

Next.js sử dụng định tuyến dựa trên hệ thống file, có nghĩa là cấu trúc thư mục của dự án của bạn định nghĩa các routes của ứng dụng. Thay vì cấu hình routes bằng code, bạn chỉ cần tạo files và folders.

```
Project Structure / Cấu trúc dự án:

Before Next.js / Trước Next.js:
├── index.html          ← All code in one HTML file / Tất cả code trong một file HTML
└── package.json

After Next.js / Sau Next.js:
├── app/                ← App directory / Thư mục app
│   ├── layout.js      ← Root layout (auto-generated) / Layout gốc (tự động tạo)
│   └── page.js        ← Home page (/) / Trang chủ
└── package.json
```

**Creating your first page / Tạo trang đầu tiên:**

1. Create folder `app/` / Tạo thư mục `app/`
2. Move `index.js` to `app/page.js` / Di chuyển `index.js` thành `app/page.js`
3. Add `export default` to main component / Thêm `export default` cho component chính

```jsx
// app/page.js - Main page of your application / Trang chính của ứng dụng
import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

// Export default to tell Next.js this is the main component / Export default
export default function HomePage() {
    // Component code / Code component
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
        </div>
    );
}
```

### Development Server / Server phát triển

Next.js provides a built-in development server with hot reloading, making development faster and more efficient. You simply add a script to `package.json` and run it.

Next.js cung cấp một server phát triển tích hợp với hot reloading, làm cho phát triển nhanh hơn và hiệu quả hơn. Bạn chỉ cần thêm một script vào `package.json` và chạy nó.

```json
// package.json
{
  "scripts": {
    "dev": "next dev"
  },
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

```bash
# Run development server / Chạy server phát triển
npm run dev

# Server will start at http://localhost:3000 / Server sẽ khởi động tại http://localhost:3000
```

**Auto-generated files / Files tự động tạo:**

When you run the development server, Next.js automatically creates a `layout.js` file:

Khi bạn chạy server phát triển, Next.js tự động tạo file `layout.js`:

```jsx
// app/layout.js - Automatically created / Tự động tạo
export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
```

This layout wraps all pages and is perfect for adding shared UI elements like navigation and footers.

Layout này bao bọc tất cả các trang và hoàn hảo để thêm các phần tử UI được chia sẻ như navigation và footers.

### Server vs Client Components / Server so với Client Components

Next.js uses React Server Components by default. Since Server Components don't support `useState`, you need to mark interactive components as Client Components using the `'use client'` directive.

Next.js sử dụng React Server Components theo mặc định. Vì Server Components không hỗ trợ `useState`, bạn cần đánh dấu các components tương tác là Client Components bằng cách sử dụng chỉ thị `'use client'`.

```jsx
// app/page.js - Client Component (interactive) / Client Component (tương tác)
'use client'; // Add this directive for interactivity / Thêm chỉ thị này cho tính tương tác

import { useState } from 'react';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    // useState requires Client Component / useState yêu cầu Client Component
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
```

> [!WARNING]
> Server Components don't support `useState`, `useEffect`, or event handlers. Add `'use client'` at the top of your file to use these features.
> 
> Server Components không hỗ trợ `useState`, `useEffect` hoặc event handlers. Thêm `'use client'` ở đầu file của bạn để sử dụng các tính năng này.

---

## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích

- **No Manual Configuration / Không cần cấu hình thủ công**: Next.js eliminates the need to configure Babel, Webpack, or other build tools. / Next.js loại bỏ nhu cầu cấu hình Babel, Webpack hoặc các công cụ build khác.
- **File-System Routing / Định tuyến hệ thống file**: Routes are automatically created based on your folder structure, no routing library needed. / Routes được tạo tự động dựa trên cấu trúc thư mục, không cần thư viện định tuyến.
- **Fast Refresh / Làm mới nhanh**: See changes instantly without losing component state during development. / Xem thay đổi ngay lập tức mà không mất trạng thái component trong quá trình phát triển.
- **Automatic Code Splitting / Tách code tự động**: Only load the JavaScript needed for each page, improving performance. / Chỉ tải JavaScript cần thiết cho mỗi trang, cải thiện hiệu suất.
- **Built-in Optimization / Tối ưu hóa tích hợp**: Automatic image, font, and script optimizations out of the box. / Tối ưu hóa hình ảnh, font và script tự động ngay từ đầu.
- **TypeScript Support / Hỗ trợ TypeScript**: First-class TypeScript support with automatic configuration. / Hỗ trợ TypeScript hạng nhất với cấu hình tự động.

### Real-world Applications / Ứng dụng thực tế

- **Production Web Applications / Ứng dụng Web Production**: Build scalable, production-ready applications with minimal setup. / Xây dựng các ứng dụng production có khả năng mở rộng với thiết lập tối thiểu.
- **Multi-Page Websites / Trang web nhiều trang**: Create websites with multiple routes using file-system routing. / Tạo các trang web với nhiều routes bằng cách sử dụng định tuyến hệ thống file.
- **E-commerce Platforms / Nền tảng thương mại điện tử**: Develop online stores with product pages, shopping carts, and checkout flows. / Phát triển cửa hàng trực tuyến với trang sản phẩm, giỏ hàng và quy trình thanh toán.
- **Content-Heavy Sites / Trang web nhiều nội dung**: Build blogs, news sites, and documentation with optimal SEO. / Xây dựng blog, trang tin tức và tài liệu với SEO tối ưu.
- **Dashboard Applications / Ứng dụng Dashboard**: Create admin panels and data visualization dashboards. / Tạo bảng quản trị và dashboard trực quan hóa dữ liệu.
- **Portfolio Websites / Trang web Portfolio**: Develop professional portfolios with fast load times and great user experience. / Phát triển portfolio chuyên nghiệp với thời gian tải nhanh và trải nghiệm người dùng tuyệt vời.

---

## Complete Example / Ví dụ hoàn chỉnh

### Migration Steps / Các bước di chuyển

```bash
# Step 1: Initialize project / Bước 1: Khởi tạo dự án
# Create package.json / Tạo package.json
echo {} > package.json

# Step 2: Install dependencies / Bước 2: Cài đặt dependencies
npm install react@latest react-dom@latest next@latest

# Step 3: Create app directory / Bước 3: Tạo thư mục app
mkdir app

# Step 4: Move and rename file / Bước 4: Di chuyển và đổi tên file
# Move index.html content to app/page.js / Di chuyển nội dung index.html sang app/page.js
```

### Before Migration / Trước khi di chuyển

```html
<!-- index.html - Before Next.js / Trước Next.js -->
<!DOCTYPE html>
<html>
<head>
    <title>React App</title>
</head>
<body>
    <div id="app"></div>
    
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/jsx">
        const app = document.getElementById("app");
        
        function Header({ title }) {
            return <h1>{title ? title : 'Default title'}</h1>;
        }
        
        function HomePage() {
            const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
            const [likes, setLikes] = React.useState(0);
            
            function handleClick() {
                setLikes(likes + 1);
            }
            
            return (
                <div>
                    <Header title="Develop. Preview. Ship." />
                    <ul>
                        {names.map((name) => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                    <button onClick={handleClick}>Like ({likes})</button>
                </div>
            );
        }
        
        const root = ReactDOM.createRoot(app);
        root.render(<HomePage />);
    </script>
</body>
</html>
```

### After Migration / Sau khi di chuyển

```jsx
// app/page.js - After Next.js / Sau Next.js
'use client'; // Enable client-side interactivity / Bật tính tương tác client-side

import { useState } from 'react';

// Header component / Component Header
function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

// Main page component / Component trang chính
export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>Like ({likes})</button>
        </div>
    );
}
```

```json
// package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^14.0.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}
```

```bash
# Run the application / Chạy ứng dụng
npm run dev

# Open browser to http://localhost:3000 / Mở trình duyệt tại http://localhost:3000
```

---

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Use the latest versions of Next.js, React, and React DOM. / Sử dụng các phiên bản mới nhất của Next.js, React và React DOM.
- ✅ **DO**: Add `'use client'` directive when using hooks or event handlers. / Thêm chỉ thị `'use client'` khi sử dụng hooks hoặc event handlers.
- ✅ **DO**: Use `export default` for page components. / Sử dụng `export default` cho các components trang.
- ✅ **DO**: Follow Next.js file naming conventions (`page.js`, `layout.js`). / Tuân theo quy ước đặt tên file Next.js.
- ✅ **DO**: Keep Server Components as the default unless interactivity is needed. / Giữ Server Components làm mặc định trừ khi cần tính tương tác.
- ✅ **DO**: Use `npm install` to add packages locally instead of CDN scripts. / Sử dụng `npm install` để thêm gói cục bộ thay vì script CDN.
- ❌ **DON'T**: Try to use `useState` or event handlers in Server Components. / Không cố gắng sử dụng `useState` hoặc event handlers trong Server Components.
- ❌ **DON'T**: Keep HTML boilerplate and CDN scripts when using Next.js. / Không giữ boilerplate HTML và script CDN khi sử dụng Next.js.
- ❌ **DON'T**: Manually configure Babel or Webpack (Next.js handles this). / Không cấu hình thủ công Babel hoặc Webpack (Next.js xử lý điều này).

---

## Common Mistakes / Lỗi thường gặp

### Error 1: Using useState Without 'use client'

**Description**: Next.js uses Server Components by default, which don't support `useState`. This causes an error when running the development server. / Next.js sử dụng Server Components theo mặc định, không hỗ trợ `useState`. Điều này gây ra lỗi khi chạy server phát triển.

**Solution**: Add `'use client'` directive at the top of your file. / Thêm chỉ thị `'use client'` ở đầu file.

```jsx
// ❌ Wrong / Sai - Server Component can't use useState
export default function HomePage() {
    const [likes, setLikes] = useState(0); // Error!
    return <button>Like ({likes})</button>;
}

// ✅ Correct / Đúng - Client Component can use useState
'use client';

import { useState } from 'react';

export default function HomePage() {
    const [likes, setLikes] = useState(0); // Works!
    return <button>Like ({likes})</button>;
}
```

### Error 2: Missing export default

**Description**: Next.js needs to know which component to render as the main page component. Without `export default`, Next.js won't recognize your page. / Next.js cần biết component nào để render như component trang chính. Không có `export default`, Next.js sẽ không nhận ra trang của bạn.

**Solution**: Add `export default` before your main component. / Thêm `export default` trước component chính của bạn.

```jsx
// ❌ Wrong / Sai - no export default
function HomePage() {
    return <h1>Home</h1>;
}

// ✅ Correct / Đúng - with export default
export default function HomePage() {
    return <h1>Home</h1>;
}
```

### Error 3: Wrong File Location

**Description**: Next.js requires pages to be in the `app` directory with specific file names like `page.js`. Putting files in the wrong location breaks routing. / Next.js yêu cầu các trang phải ở trong thư mục `app` với tên file cụ thể như `page.js`. Đặt files ở vị trí sai làm hỏng routing.

**Solution**: Follow Next.js file structure conventions. / Tuân theo quy ước cấu trúc file Next.js.

```
❌ Wrong / Sai:
├── index.js        ← Wrong location / Vị trí sai
└── home.js         ← Wrong name / Tên sai

✅ Correct / Đúng:
└── app/
    └── page.js     ← Correct location and name / Vị trí và tên đúng
```

---

## References / Tài liệu tham khảo

- [Next.js: Installing Next.js](https://nextjs.org/learn/react-foundations/installation)
- [Next.js: Installation Guide](https://nextjs.org/docs/getting-started/installation)
- [Next.js: Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)
- [Next.js: Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes)
- [Next.js: Pages and Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)
- [Node.js Downloads](https://nodejs.org/en/)
