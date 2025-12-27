# From React to Next.js / Từ React đến Next.js

---

**📅 Created / Ngày tạo:** 2025-12-27  
**📅 Last Updated / Ngày cập nhật:** 2025-12-27

**⬅️ Previous / Bài trước:** [Adding Interactivity with State](./react_state.md)  
**➡️ Next / Bài sau:** [Installing Next.js](./react_nextjs_installation.md)

---

## Description / Mô tả

This lesson serves as a transition point from learning fundamental React concepts to building production-ready applications with Next.js. You will review the essential React concepts covered (components, props, and state), understand why frameworks like Next.js are valuable for building scalable React applications, and learn about the additional features Next.js provides beyond React. This lesson prepares you for the next phase of learning where you'll discover how Next.js handles setup, configuration, and introduces advanced features like Server and Client Components.

Bài học này đóng vai trò như điểm chuyển tiếp từ việc học các khái niệm React cơ bản sang xây dựng các ứng dụng sẵn sàng production với Next.js. Bạn sẽ xem lại các khái niệm React quan trọng đã được đề cập (components, props và state), hiểu tại sao các framework như Next.js có giá trị cho việc xây dựng các ứng dụng React có khả năng mở rộng, và tìm hiểu về các tính năng bổ sung mà Next.js cung cấp ngoài React. Bài học này chuẩn bị cho bạn giai đoạn học tiếp theo nơi bạn sẽ khám phá cách Next.js xử lý thiết lập, cấu hình và giới thiệu các tính năng nâng cao như Server và Client Components.

---

## Main Concepts / Khái niệm chính

### React Foundations Recap / Tổng kết nền tảng React

Throughout the previous lessons, you learned three essential React concepts that form the foundation of building interactive user interfaces. These concepts are crucial for understanding how React works and are the building blocks for any React application.

Trong các bài học trước, bạn đã học ba khái niệm React quan trọng tạo nền tảng cho việc xây dựng giao diện người dùng tương tác. Những khái niệm này rất quan trọng để hiểu cách React hoạt động và là các khối xây dựng cho bất kỳ ứng dụng React nào.

```jsx
// Complete React example / Ví dụ React hoàn chỉnh
<!DOCTYPE html>
<html>
<body>
    <div id="app"></div>
    
    <!-- React libraries / Thư viện React -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/jsx">
        const app = document.getElementById("app");
        
        // 1. Components: Reusable UI building blocks / Components: Khối xây dựng UI có thể tái sử dụng
        function Header({ title }) {
            return <h1>{title ? title : "Default title"}</h1>;
        }
        
        function HomePage() {
            const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
            
            // 3. State: Data that changes over time / State: Dữ liệu thay đổi theo thời gian
            const [likes, setLikes] = React.useState(0);
            
            function handleClick() {
                setLikes(likes + 1);
            }
            
            return (
                <div>
                    {/* 2. Props: Pass data to components / Props: Truyền dữ liệu cho components */}
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

**The Three Essential Concepts / Ba khái niệm quan trọng:**

1. **Components**: Self-contained, reusable pieces of UI code / Các đoạn code UI độc lập, có thể tái sử dụng
2. **Props**: Data passed from parent to child components / Dữ liệu được truyền từ component cha sang con
3. **State**: Data that changes over time in response to user interactions / Dữ liệu thay đổi theo thời gian để phản hồi tương tác người dùng

### Gradual Adoption of React / Áp dụng React dần dần

React can be adopted gradually in existing projects. You can use `<script>` tags to add React to a single page or a small section of your website, then expand React's usage as needed. This approach allows you to experiment with React without rewriting your entire application.

React có thể được áp dụng dần dần trong các dự án hiện có. Bạn có thể sử dụng thẻ `<script>` để thêm React vào một trang đơn hoặc một phần nhỏ của trang web của bạn, sau đó mở rộng việc sử dụng React khi cần thiết. Cách tiếp cận này cho phép bạn thử nghiệm với React mà không cần viết lại toàn bộ ứng dụng của bạn.

```html
<!-- Adding React to an existing page / Thêm React vào trang hiện có -->
<!DOCTYPE html>
<html>
<head>
    <title>Existing Website</title>
</head>
<body>
    <!-- Your existing content / Nội dung hiện có của bạn -->
    <header>
        <h1>My Website</h1>
        <nav><!-- Existing navigation / Điều hướng hiện có --></nav>
    </header>
    
    <!-- React component container / Container cho React component -->
    <div id="react-widget"></div>
    
    <!-- More existing content / Nội dung hiện có khác -->
    <footer><!-- Existing footer / Footer hiện có --></footer>
    
    <!-- Add React for just one component / Thêm React chỉ cho một component -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/jsx">
        // Only this widget uses React / Chỉ widget này sử dụng React
        function InteractiveWidget() {
            const [count, setCount] = React.useState(0);
            return (
                <div>
                    <p>Widget Count: {count}</p>
                    <button onClick={() => setCount(count + 1)}>
                        Increment
                    </button>
                </div>
            );
        }
        
        const container = document.getElementById("react-widget");
        const root = ReactDOM.createRoot(container);
        root.render(<InteractiveWidget />);
    </script>
</body>
</html>
```

### Why Next.js? / Tại sao Next.js?

While React excels at building user interfaces, creating a fully functioning, scalable, production-ready application requires additional setup and configuration. Next.js is a React framework that handles much of this complexity for you, providing features beyond what React offers alone.

Mặc dù React xuất sắc trong việc xây dựng giao diện người dùng, việc tạo một ứng dụng hoàn chỉnh, có khả năng mở rộng và sẵn sàng production đòi hỏi thêm thiết lập và cấu hình. Next.js là một framework React xử lý phần lớn sự phức tạp này cho bạn, cung cấp các tính năng vượt xa những gì React cung cấp.

**Next.js provides / Next.js cung cấp:**

- **Build System / Hệ thống build**: Automatic setup for bundling, compiling, and optimizing code / Thiết lập tự động để đóng gói, biên dịch và tối ưu hóa code
- **Routing / Định tuyến**: File-based routing system for navigation / Hệ thống định tuyến dựa trên file để điều hướng
- **Server Components / Server Components**: New React features for server-rendered components / Tính năng React mới cho các components được render trên server
- **Data Fetching / Lấy dữ liệu**: Built-in data fetching methods with caching / Phương thức lấy dữ liệu tích hợp với caching
- **Performance / Hiệu suất**: Automatic code splitting, image optimization, and more / Tách code tự động, tối ưu hóa hình ảnh và nhiều hơn nữa
- **Developer Experience / Trải nghiệm nhà phát triển**: Fast refresh, TypeScript support, and excellent tooling / Làm mới nhanh, hỗ trợ TypeScript và công cụ tuyệt vời

```jsx
// React only (manual setup needed) / Chỉ React (cần thiết lập thủ công)
// You need to manually configure: / Bạn cần cấu hình thủ công:
// - Webpack or Vite for bundling / Webpack hoặc Vite để đóng gói
// - Babel for JSX compilation / Babel để biên dịch JSX
// - React Router for navigation / React Router để điều hướng
// - Server setup for deployment / Thiết lập server để triển khai

// Next.js (automatic setup) / Next.js (thiết lập tự động)
// pages/index.js - File-based routing / Định tuyến dựa trên file
export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Next.js!</h1>
            <p>Everything is configured automatically</p>
        </div>
    );
}
// No manual configuration needed! / Không cần cấu hình thủ công!
```

### Server and Client Components / Server và Client Components

Next.js introduces the concept of Server and Client Components, which are newer React features that require a framework to implement. These components allow you to optimize when and where your code runs.

Next.js giới thiệu khái niệm về Server và Client Components, là các tính năng React mới hơn đòi hỏi một framework để triển khai. Các components này cho phép bạn tối ưu hóa khi nào và ở đâu code của bạn chạy.

```jsx
// Server Component (default in Next.js App Router) / Server Component (mặc định)
// Runs on the server, can access databases directly / Chạy trên server
// pages/products.js
async function ProductList() {
    // This runs on the server / Chạy trên server
    const products = await fetchProductsFromDatabase();
    
    return (
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

// Client Component (needs 'use client' directive) / Client Component
// Runs in the browser, can use hooks and interactivity / Chạy trong trình duyệt
'use client';

import { useState } from 'react';

function AddToCartButton({ productId }) {
    const [isAdded, setIsAdded] = useState(false);
    
    return (
        <button onClick={() => setIsAdded(true)}>
            {isAdded ? 'Added to Cart ✓' : 'Add to Cart'}
        </button>
    );
}
```

> [!IMPORTANT]
> Server and Client Components are advanced React features that require a framework like Next.js. Understanding the difference between them is crucial for building performant Next.js applications.
> 
> Server và Client Components là các tính năng React nâng cao đòi hỏi một framework như Next.js. Hiểu sự khác biệt giữa chúng là rất quan trọng để xây dựng các ứng dụng Next.js có hiệu suất cao.

---

## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích

- **Faster Development / Phát triển nhanh hơn**: Next.js eliminates the need for manual configuration and setup, allowing you to focus on building features. / Next.js loại bỏ nhu cầu cấu hình và thiết lập thủ công, cho phép bạn tập trung vào việc xây dựng tính năng.
- **Better Performance / Hiệu suất tốt hơn**: Automatic optimizations like code splitting, image optimization, and server-side rendering improve app performance. / Tối ưu hóa tự động như tách code, tối ưu hóa hình ảnh và server-side rendering cải thiện hiệu suất ứng dụng.
- **Built-in Routing / Định tuyến tích hợp**: File-based routing is simpler and more intuitive than configuring a separate routing library. / Định tuyến dựa trên file đơn giản và trực quan hơn so với việc cấu hình thư viện định tuyến riêng.
- **Production-Ready / Sẵn sàng Production**: Next.js provides everything needed for production deployments out of the box. / Next.js cung cấp mọi thứ cần thiết cho triển khai production ngay từ đầu.
- **Enhanced SEO / SEO được cải thiện**: Server-side rendering and static generation improve search engine optimization. / Server-side rendering và tạo tĩnh cải thiện tối ưu hóa công cụ tìm kiếm.
- **Modern React Features / Tính năng React hiện đại**: Access to the latest React innovations like Server Components and Suspense. / Truy cập vào các đổi mới React mới nhất như Server Components và Suspense.

### Real-world Applications / Ứng dụng thực tế

- **E-commerce Platforms / Nền tảng thương mại điện tử**: Build fast, SEO-friendly online stores with product listings, shopping carts, and checkout flows. / Xây dựng cửa hàng trực tuyến nhanh, thân thiện với SEO với danh sách sản phẩm, giỏ hàng và quy trình thanh toán.
- **Content Management Systems / Hệ thống quản lý nội dung**: Create blogs, news sites, and documentation platforms with optimal performance. / Tạo blog, trang tin tức và nền tảng tài liệu với hiệu suất tối ưu.
- **SaaS Applications / Ứng dụng SaaS**: Develop complex web applications with dashboards, user management, and real-time features. / Phát triển các ứng dụng web phức tạp với bảng điều khiển, quản lý người dùng và tính năng thời gian thực.
- **Marketing Websites / Trang web tiếp thị**: Build high-performance landing pages with excellent SEO and fast load times. / Xây dựng trang đích hiệu suất cao với SEO xuất sắc và thời gian tải nhanh.
- **Social Media Platforms / Nền tảng mạng xã hội**: Create interactive social applications with feeds, profiles, and real-time updates. / Tạo các ứng dụng xã hội tương tác với nguồn cấp, hồ sơ và cập nhật thời gian thực.
- **Portfolio and Personal Sites / Portfolio và trang cá nhân**: Build professional portfolios with case studies, blogs, and contact forms. / Xây dựng portfolio chuyên nghiệp với nghiên cứu điển hình, blog và biểu mẫu liên hệ.

---

## Complete Example / Ví dụ hoàn chỉnh

### React Application (Vanilla) / Ứng dụng React (thuần)

```html
<!DOCTYPE html>
<html>
<head>
    <title>React App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        button {
            padding: 10px 20px;
            background: #0070f3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background: #0051cc;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            padding: 10px;
            background: #f5f5f5;
            margin: 5px 0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div id="app"></div>
    
    <!-- Load React / Tải React -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <script type="text/jsx">
        // Component: Reusable UI / Component: UI có thể tái sử dụng
        function Header({ title }) {
            return <h1>{title ? title : "Default title"}</h1>;
        }
        
        // Main component with props and state / Component chính với props và state
        function HomePage() {
            // Data list / Danh sách dữ liệu
            const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
            
            // State: Interactive data / State: Dữ liệu tương tác
            const [likes, setLikes] = React.useState(0);
            
            // Event handler / Hàm xử lý sự kiện
            function handleClick() {
                setLikes(likes + 1);
            }
            
            return (
                <div>
                    {/* Props: Pass data to component / Props: Truyền dữ liệu cho component */}
                    <Header title="Develop. Preview. Ship." />
                    
                    <h2>Famous Computer Scientists</h2>
                    <ul>
                        {/* Rendering lists / Hiển thị danh sách */}
                        {names.map((name) => (
                            <li key={name}>{name}</li>
                        ))}
                    </ul>
                    
                    {/* Interactive button / Nút tương tác */}
                    <button onClick={handleClick}>
                        👍 Like ({likes})
                    </button>
                </div>
            );
        }
        
        // Render to DOM / Hiển thị lên DOM
        const app = document.getElementById("app");
        const root = ReactDOM.createRoot(app);
        root.render(<HomePage />);
    </script>
</body>
</html>
```

### Next Steps to Next.js / Bước tiếp theo đến Next.js

```jsx
// The same app in Next.js would look like this: / Cùng ứng dụng trong Next.js
// app/page.js (Next.js 13+ App Router)

'use client'; // Client component for interactivity / Client component cho tương tác

import { useState } from 'react';

// Component / Component
function Header({ title }) {
    return <h1>{title || "Default title"}</h1>;
}

// Main page component / Component trang chính
export default function HomePage() {
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        setLikes(likes + 1);
    }
    
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            
            <h2>Famous Computer Scientists</h2>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            
            <button onClick={handleClick}>
                👍 Like ({likes})
            </button>
        </div>
    );
}

// Benefits of Next.js version: / Lợi ích của phiên bản Next.js:
// ✅ No manual script imports / Không cần import script thủ công
// ✅ Automatic routing / Định tuyến tự động
// ✅ Built-in optimizations / Tối ưu hóa tích hợp
// ✅ Production-ready / Sẵn sàng production
// ✅ TypeScript support out of the box / Hỗ trợ TypeScript ngay từ đầu
```

---

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Master React fundamentals (components, props, state) before learning Next.js. / Làm chủ các nguyên tắc cơ bản của React trước khi học Next.js.
- ✅ **DO**: Use Next.js for production applications that need routing, optimization, and scalability. / Sử dụng Next.js cho các ứng dụng production cần định tuyến, tối ưu hóa và khả năng mở rộng.
- ✅ **DO**: Start with vanilla React for learning and small experiments. / Bắt đầu với React thuần để học và thử nghiệm nhỏ.
- ✅ **DO**: Understand the difference between Server and Client Components in Next.js. / Hiểu sự khác biệt giữa Server và Client Components trong Next.js.
- ✅ **DO**: Leverage Next.js features like file-based routing and automatic optimizations. / Tận dụng các tính năng Next.js như định tuyến dựa trên file và tối ưu hóa tự động.
- ❌ **DON'T**: Use Next.js if you only need to add a small React widget to an existing site. / Không sử dụng Next.js nếu bạn chỉ cần thêm một widget React nhỏ vào trang hiện có.
- ❌ **DON'T**: Skip learning React fundamentals and jump directly to Next.js. / Không bỏ qua việc học các nguyên tắc cơ bản của React và nhảy trực tiếp vào Next.js.
- ❌ **DON'T**: Manually configure build tools when Next.js can handle it automatically. / Không cấu hình thủ công các công cụ build khi Next.js có thể xử lý tự động.

---

## Next Steps / Bước tiếp theo

Now that you have a solid foundation in React, you're ready to move on to Next.js. In the next chapter, you will:

Bây giờ bạn đã có nền tảng vững chắc trong React, bạn đã sẵn sàng chuyển sang Next.js. Trong chương tiếp theo, bạn sẽ:

1. **Install Next.js** / Cài đặt Next.js
2. **Migrate your React app to Next.js** / Di chuyển ứng dụng React của bạn sang Next.js
3. **Learn about the Next.js file structure** / Tìm hiểu về cấu trúc file Next.js
4. **Understand Server vs Client Components** / Hiểu Server so với Client Components
5. **Explore the Next.js App Router** / Khám phá Next.js App Router

---

## References / Tài liệu tham khảo

- [Next.js: From React to Next.js](https://nextjs.org/learn/react-foundations/from-react-to-nextjs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Next.js: Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Next.js: Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Next.js Learn Course](https://nextjs.org/learn)
