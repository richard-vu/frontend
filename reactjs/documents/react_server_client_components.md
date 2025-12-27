# Server and Client Components / Server và Client Components

---

**📅 Created / Ngày tạo:** 2025-12-27  
**📅 Last Updated / Ngày cập nhật:** 2025-12-27

**⬅️ Previous / Bài trước:** [Installing Next.js](./react_nextjs_installation.md)  
**➡️ Next / Bài sau:** None / Không có

---

## Description / Mô tả

This lesson explores one of Next.js's most powerful features: Server and Client Components. You will learn the fundamental difference between code that runs on the server versus code that runs in the browser, understand the network boundary that separates these environments, and discover when to use each type of component. By mastering Server and Client Components, you'll be able to optimize your application's performance by rendering content on the server while maintaining interactivity on the client. This knowledge is essential for building modern, performant Next.js applications.

Bài học này khám phá một trong những tính năng mạnh mẽ nhất của Next.js: Server và Client Components. Bạn sẽ học sự khác biệt cơ bản giữa code chạy trên server và code chạy trong trình duyệt, hiểu ranh giới mạng phân tách các môi trường này, và khám phá khi nào sử dụng mỗi loại component. Bằng cách làm chủ Server và Client Components, bạn sẽ có thể tối ưu hóa hiệu suất ứng dụng của mình bằng cách render nội dung trên server trong khi duy trì tính tương tác trên client. Kiến thức này rất quan trọng để xây dựng các ứng dụng Next.js hiện đại, có hiệu suất cao.

---

## Main Concepts / Khái niệm chính

### Server and Client Environments / Môi trường Server và Client

In web applications, there are two distinct environments where your code can execute: the server and the client. Understanding the capabilities and constraints of each environment is crucial for writing efficient Next.js applications.

Trong các ứng dụng web, có hai môi trường riêng biệt nơi code của bạn có thể thực thi: server và client. Hiểu được khả năng và hạn chế của mỗi môi trường là rất quan trọng để viết các ứng dụng Next.js hiệu quả.

**Client (Browser) / Client (Trình duyệt):**
- The browser on a user's device / Trình duyệt trên thiết bị của người dùng
- Sends requests to the server / Gửi yêu cầu đến server
- Receives responses and renders the UI / Nhận phản hồi và render giao diện
- Handles user interactions and DOM updates / Xử lý tương tác người dùng và cập nhật DOM
- Has access to browser APIs (localStorage, etc.) / Có quyền truy cập vào các API trình duyệt

**Server / Server:**
- Computer in a data center / Máy tính trong trung tâm dữ liệu
- Stores and serves application code / Lưu trữ và phục vụ code ứng dụng
- Performs computations and data fetching / Thực hiện tính toán và lấy dữ liệu
- Sends responses back to clients / Gửi phản hồi lại cho clients
- Has access to databases and backend services / Có quyền truy cập vào cơ sở dữ liệu và dịch vụ backend

```jsx
// Server Environment / Môi trường Server
// - Can access databases / Có thể truy cập cơ sở dữ liệu
// - Can perform heavy computations / Có thể thực hiện tính toán nặng
// - Reduces client bundle size / Giảm kích thước bundle client

// Client Environment / Môi trường Client  
// - Can use hooks (useState, useEffect) / Có thể sử dụng hooks
// - Can handle user interactions / Có thể xử lý tương tác người dùng
// - Has access to browser APIs / Có quyền truy cập vào API trình duyệt
```

> [!IMPORTANT]
> The code you write for the server and client is not always the same. Certain operations like data fetching are better suited for the server, while interactivity requires client-side code.
> 
> Code bạn viết cho server và client không phải lúc nào cũng giống nhau. Một số hoạt động như lấy dữ liệu phù hợp hơn cho server, trong khi tính tương tác yêu cầu code phía client.

### Network Boundary / Ranh giới mạng

The Network Boundary is a conceptual line that separates where your code runs. In React and Next.js, you choose where to place this boundary in your component tree.

Ranh giới mạng là một đường ranh giới khái niệm phân tách nơi code của bạn chạy. Trong React và Next.js, bạn chọn nơi đặt ranh giới này trong cây component của mình.

```jsx
// Network Boundary Example / Ví dụ ranh giới mạng

// SERVER SIDE / PHÍA SERVER
// ├── BlogPost (Server Component) - Fetches data / Lấy dữ liệu
// │   ├── PostHeader (Server Component) - Static content / Nội dung tĩnh
// │   ├── PostContent (Server Component) - Rendered on server / Render trên server
// │   └── ─────────── NETWORK BOUNDARY ───────────
//         └── LikeButton (Client Component) - Interactive / Tương tác
// CLIENT SIDE / PHÍA CLIENT

// Server Component / Server Component
async function BlogPost() {
    // This runs on the server / Chạy trên server
    const post = await fetchPost(); // Can access database / Có thể truy cập database
    
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {/* Client Component for interactivity / Client Component cho tính tương tác */}
            <LikeButton postId={post.id} />
        </article>
    );
}
```

### React Server Component Payload (RSC) / React Server Component Payload

After Server Components are rendered, Next.js sends a special data format called the RSC Payload to the client. This payload contains instructions for how to update the DOM efficiently.

Sau khi Server Components được render, Next.js gửi một định dạng dữ liệu đặc biệt gọi là RSC Payload cho client. Payload này chứa hướng dẫn về cách cập nhật DOM một cách hiệu quả.

**RSC Payload contains / RSC Payload chứa:**

1. **Rendered result of Server Components** / Kết quả render của Server Components
2. **Placeholders for Client Components** / Các chỗ trống cho Client Components
3. **References to Client Component JavaScript files** / Tham chiếu đến các file JavaScript của Client Component

```
Flow of RSC Payload / Luồng của RSC Payload:

1. Server renders Server Components / Server render Server Components
   ↓
2. Creates RSC Payload / Tạo RSC Payload
   ↓
3. Sends to browser / Gửi đến trình duyệt
   ↓
4. React consolidates Server and Client Components / React hợp nhất
   ↓
5. Updates DOM / Cập nhật DOM
```

### Server Components (Default) / Server Components (Mặc định)

Next.js uses Server Components by default. These components run only on the server, improving performance by reducing the JavaScript bundle sent to the client.

Next.js sử dụng Server Components theo mặc định. Các components này chỉ chạy trên server, cải thiện hiệu suất bằng cách giảm bundle JavaScript được gửi đến client.

```jsx
// app/page.js - Server Component by default / Server Component theo mặc định
// NO 'use client' needed / KHÔNG cần 'use client'

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    // This component runs on the server / Component này chạy trên server
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    
    return (
        <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    );
}
```

**What Server Components CAN do / Server Components CÓ THỂ làm gì:**
- ✅ Fetch data directly from databases / Lấy dữ liệu trực tiếp từ cơ sở dữ liệu
- ✅ Access backend resources / Truy cập tài nguyên backend
- ✅ Keep sensitive information on server / Giữ thông tin nhạy cảm trên server
- ✅ Reduce client bundle size / Giảm kích thước bundle client

**What Server Components CANNOT do / Server Components KHÔNG THỂ làm gì:**
- ❌ Use hooks (`useState`, `useEffect`, etc.) / Sử dụng hooks
- ❌ Handle browser events (`onClick`, `onChange`, etc.) / Xử lý sự kiện trình duyệt
- ❌ Access browser APIs / Truy cập API trình duyệt

### Client Components / Client Components

Client Components are marked with the `'use client'` directive and run in the browser. Use them when you need interactivity, hooks, or browser APIs.

Client Components được đánh dấu bằng chỉ thị `'use client'` và chạy trong trình duyệt. Sử dụng chúng khi bạn cần tính tương tác, hooks hoặc API trình duyệt.

```jsx
// app/like-button.js - Client Component / Client Component
'use client'; // This directive makes it a Client Component / Chỉ thị này làm cho nó là Client Component

import { useState } from 'react';

export default function LikeButton() {
    // Can use useState because it's a Client Component / Có thể dùng useState
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        setLikes(likes + 1);
    }
    
    // Can handle events / Có thể xử lý sự kiện
    return (
        <button onClick={handleClick}>
            Like ({likes})
        </button>
    );
}
```

**When to use Client Components / Khi nào sử dụng Client Components:**
- When using React hooks (useState, useEffect, etc.) / Khi sử dụng React hooks
- When handling user interactions (onClick, onChange, etc.) / Khi xử lý tương tác người dùng
- When accessing browser APIs (localStorage, geolocation, etc.) / Khi truy cập API trình duyệt
- When using browser-only libraries / Khi sử dụng thư viện chỉ dành cho trình duyệt

> [!WARNING]
> Always add `'use client'` at the very top of your file before any imports when creating a Client Component.
> 
> Luôn thêm `'use client'` ở đầu file trước bất kỳ import nào khi tạo Client Component.

---

## Benefits/Applications / Lợi ích/Ứng dụng

### Benefits / Lợi ích

- **Improved Performance / Hiệu suất được cải thiện**: Server Components reduce the JavaScript bundle size sent to the client, resulting in faster page loads. / Server Components giảm kích thước bundle JavaScript gửi đến client, dẫn đến tải trang nhanh hơn.
- **Better SEO / SEO tốt hơn**: Server-rendered content is immediately available to search engines, improving discoverability. / Nội dung được render trên server có sẵn ngay lập tức cho các công cụ tìm kiếm, cải thiện khả năng phát hiện.
- **Automatic Code Splitting / Tách code tự động**: Client Components are automatically code-split, loading only when needed. / Client Components được tách code tự động, chỉ tải khi cần thiết.
- **Secure Backend Access / Truy cập Backend an toàn**: Server Components can directly access databases and APIs without exposing credentials. / Server Components có thể truy cập trực tiếp cơ sở dữ liệu và API mà không tiết lộ thông tin xác thực.
- **Reduced Client-Side Processing / Giảm xử lý phía Client**: Heavy computations happen on the server, keeping the client lightweight. / Các tính toán nặng xảy ra trên server, giữ cho client nhẹ nhàng.
- **Flexibility / Tính linh hoạt**: Choose the best environment for each component based on its requirements. / Chọn môi trường tốt nhất cho mỗi component dựa trên yêu cầu của nó.

### Real-world Applications / Ứng dụng thực tế

- **Data-Heavy Dashboards / Dashboard nhiều dữ liệu**: Fetch and render large datasets on the server, use Client Components only for interactive filters and charts. / Lấy và render tập dữ liệu lớn trên server, chỉ sử dụng Client Components cho bộ lọc và biểu đồ tương tác.
- **E-commerce Product Pages / Trang sản phẩm thương mại điện tử**: Server Component for product details and reviews, Client Component for "Add to Cart" button. / Server Component cho chi tiết sản phẩm và đánh giá, Client Component cho nút "Thêm vào giỏ hàng".
- **Blog Platforms / Nền tảng Blog**: Server Components for article content, Client Components for comment forms and like buttons. / Server Components cho nội dung bài viết, Client Components cho biểu mẫu bình luận và nút like.
- **Admin Panels / Bảng quản trị**: Server Components for displaying data tables, Client Components for edit forms and modals. / Server Components cho hiển thị bảng dữ liệu, Client Components cho biểu mẫu chỉnh sửa và modals.
- **Social Media Feeds / Nguồn cấp mạng xã hội**: Server Components for post content, Client Components for like, share, and comment interactions. / Server Components cho nội dung bài đăng, Client Components cho tương tác like, chia sẻ và bình luận.
- **Search Interfaces / Giao diện tìm kiếm**: Server Component for search results, Client Component for search input with autocomplete. / Server Component cho kết quả tìm kiếm, Client Component cho ô nhập tìm kiếm với tự động hoàn thành.

---

## Complete Example / Ví dụ hoàn chỉnh

### Separating Server and Client Components / Tách Server và Client Components

```jsx
// app/like-button.js - Client Component / Client Component
'use client'; // Directive at the top / Chỉ thị ở đầu

import { useState } from 'react';

export default function LikeButton() {
    // State and interactivity (Client-side only) / State và tương tác (chỉ Client-side)
    const [likes, setLikes] = useState(0);
    
    function handleClick() {
        setLikes(likes + 1);
    }
    
    return (
        <button onClick={handleClick}>
            Like ({likes})
        </button>
    );
}
```

```jsx
// app/page.js - Server Component (default) / Server Component (mặc định)
// No 'use client' needed / Không cần 'use client'

import LikeButton from './like-button';

// This component runs on the server / Component này chạy trên server
function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    // Data that can be prepared on the server / Dữ liệu có thể chuẩn bị trên server
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    
    return (
        <div>
            {/* Server Component / Server Component */}
            <Header title="Develop. Preview. Ship." />
            
            {/* Static list rendered on server / Danh sách tĩnh render trên server */}
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            
            {/* Client Component for interactivity / Client Component cho tính tương tác */}
            <LikeButton />
        </div>
    );
}
```

### Mixed Server and Client Example / Ví dụ kết hợp Server và Client

```jsx
// app/blog-post.js - Advanced example / Ví dụ nâng cao

// Server Component (default) / Server Component (mặc định)
async function BlogPost({ postId }) {
    // Server-side data fetching / Lấy dữ liệu phía server
    const post = await fetchPostFromDatabase(postId);
    const comments = await fetchComments(postId);
    
    return (
        <article>
            {/* Server-rendered content / Nội dung render trên server */}
            <h1>{post.title}</h1>
            <p className="author">By {post.author}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Server Component for static comments / Server Component cho bình luận tĩnh */}
            <CommentList comments={comments} />
            
            {/* Client Components for interactivity / Client Components cho tính tương tác */}
            <LikeButton initialLikes={post.likes} />
            <ShareButton url={post.url} />
            <CommentForm postId={postId} />
        </article>
    );
}
```

```jsx
// app/comment-form.js - Client Component / Client Component
'use client';

import { useState } from 'react';

export default function CommentForm({ postId }) {
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        
        await submitComment(postId, comment);
        
        setComment('');
        setIsSubmitting(false);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
            />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}
```

---

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Use Server Components by default for better performance. / Sử dụng Server Components theo mặc định để có hiệu suất tốt hơn.
- ✅ **DO**: Only use Client Components when you need interactivity, hooks, or browser APIs. / Chỉ sử dụng Client Components khi bạn cần tính tương tác, hooks hoặc API trình duyệt.
- ✅ **DO**: Place `'use client'` at the very top of the file before imports. / Đặt `'use client'` ở đầu file trước các import.
- ✅ **DO**: Keep Client Components small and focused on interactive features. / Giữ Client Components nhỏ và tập trung vào các tính năng tương tác.
- ✅ **DO**: Fetch data in Server Components to reduce client bundle size. / Lấy dữ liệu trong Server Components để giảm kích thước bundle client.
- ✅ **DO**: Use Server Components for static content and layout. / Sử dụng Server Components cho nội dung tĩnh và layout.
- ❌ **DON'T**: Mark components as 'use client' unnecessarily. / Không đánh dấu components là 'use client' không cần thiết.
- ❌ **DON'T**: Try to use hooks in Server Components. / Không cố gắng sử dụng hooks trong Server Components.
- ❌ **DON'T**: Fetch data on the client when it can be done on the server. / Không lấy dữ liệu trên client khi có thể làm trên server.

---

## Common Mistakes / Lỗi thường gặp

### Error 1: Using Hooks in Server Component

**Description**: Trying to use React hooks like `useState` or `useEffect` in a Server Component causes errors because these hooks only work in the browser. / Cố gắng sử dụng React hooks như `useState` hoặc `useEffect` trong Server Component gây ra lỗi vì các hooks này chỉ hoạt động trong trình duyệt.

**Solution**: Move the interactive code to a Client Component with `'use client'` directive. / Di chuyển code tương tác sang Client Component với chỉ thị `'use client'`.

```jsx
// ❌ Wrong / Sai - Server Component with useState
export default function HomePage() {
    const [likes, setLikes] = useState(0); // Error!
    return <button onClick={() => setLikes(likes + 1)}>Like</button>;
}

// ✅ Correct / Đúng - Separate Client Component
// app/like-button.js
'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    return <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>;
}

// app/page.js - Server Component
import LikeButton from './like-button';

export default function HomePage() {
    return (
        <div>
            <h1>Welcome</h1>
            <LikeButton />
        </div>
    );
}
```

### Error 2: Forgetting 'use client' Directive

**Description**: Creating an interactive component but forgetting to add `'use client'` at the top results in the component being treated as a Server Component, causing errors when using hooks or event handlers. / Tạo component tương tác nhưng quên thêm `'use client'` ở đầu dẫn đến component bị coi là Server Component, gây lỗi khi sử dụng hooks hoặc event handlers.

**Solution**: Always add `'use client'` as the first line in files that need client-side features. / Luôn thêm `'use client'` làm dòng đầu tiên trong các files cần tính năng phía client.

```jsx
// ❌ Wrong / Sai - Missing 'use client'
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0); // Will cause error
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// ✅ Correct / Đúng - With 'use client'
'use client'; // Must be first line / Phải là dòng đầu tiên

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Error 3: Placing 'use client' After Imports

**Description**: The `'use client'` directive must be at the very top of the file, before any imports. Placing it after imports won't work. / Chỉ thị `'use client'` phải ở đầu file, trước bất kỳ import nào. Đặt nó sau các import sẽ không hoạt động.

**Solution**: Always place `'use client'` as the absolute first line. / Luôn đặt `'use client'` làm dòng đầu tiên tuyệt đối.

```jsx
// ❌ Wrong / Sai - 'use client' after imports
import { useState } from 'react';
'use client'; // Too late!

export default function Component() {
    // ...
}

// ✅ Correct / Đúng - 'use client' first
'use client'; // First line / Dòng đầu tiên

import { useState } from 'react';

export default function Component() {
    // ...
}
```

### Error 4: Making Entire App Client-Side

**Description**: Adding `'use client'` to the root layout or every component defeats the purpose of Server Components and increases bundle size. / Thêm `'use client'` vào layout gốc hoặc mọi component phá vỡ mục đích của Server Components và tăng kích thước bundle.

**Solution**: Only use Client Components for interactive parts, keep the rest as Server Components. / Chỉ sử dụng Client Components cho các phần tương tác, giữ phần còn lại là Server Components.

```jsx
// ❌ Wrong / Sai - Everything is client-side
// app/layout.js
'use client'; // This makes EVERYTHING client-side!

export default function RootLayout({ children }) {
    return <html><body>{children}</body></html>;
}

// ✅ Correct / Đúng - Strategic use of Client Components
// app/layout.js (Server Component)
export default function RootLayout({ children }) {
    return <html><body>{children}</body></html>;
}

// app/page.js (Server Component)
import InteractiveWidget from './interactive-widget';

export default function Page() {
    return (
        <div>
            <h1>Server-rendered content</h1>
            {/* Only interactive part is client-side / Chỉ phần tương tác là client-side */}
            <InteractiveWidget />
        </div>
    );
}

// app/interactive-widget.js (Client Component)
'use client';

export default function InteractiveWidget() {
    // Interactive code here / Code tương tác ở đây
}
```

---

## References / Tài liệu tham khảo

- [Next.js: Server and Client Components](https://nextjs.org/learn/react-foundations/server-and-client-components)
- [Next.js: Server Components Documentation](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Next.js: Client Components Documentation](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
- [Next.js: Composition Patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
- [React: The "use client" Directive](https://react.dev/reference/react/use-client)
- [React: The "use server" Directive](https://react.dev/reference/react/use-server)
- [Next.js: Fast Refresh](https://nextjs.org/docs/architecture/fast-refresh)
