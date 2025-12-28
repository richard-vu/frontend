# Exercise: Using Dynamic Content with `{}` in JSX / Bài tập: Sử dụng Nội dung Động với `{}` trong JSX

In this exercise, you'll learn how to inject dynamic data into JSX using curly braces `{}`.

_Trong bài tập này, bạn sẽ học cách chèn dữ liệu động vào JSX bằng cách sử dụng dấu ngoặc nhọn `{}`._

## Step 1: Create a `Greeting` Component / Bước 1: Tạo Component `Greeting`

1. Create a new file called `Greeting.jsx`.
   
   _Tạo một file mới có tên `Greeting.jsx`._

2. Inside this file, create a functional component named `Greeting`.
   
   _Bên trong file này, tạo một functional component có tên `Greeting`._

3. The `Greeting` component should return a `<div>` containing:
   
   _Component `Greeting` nên trả về một `<div>` chứa:_

   - A `<h1>` element that dynamically displays a greeting message.
     
     _Một phần tử `<h1>` hiển thị động một thông điệp chào hỏi._

   - A `<p>` element that dynamically displays the current date.
     
     _Một phần tử `<p>` hiển thị động ngày hiện tại._

4. Use JavaScript expressions inside `{}` to dynamically render the following:
   
   _Sử dụng các biểu thức JavaScript bên trong `{}` để render động các nội dung sau:_
   
   - A `name` variable containing a name, such as `"John"`.
     
     _Một biến `name` chứa một tên, ví dụ như `"John"`._
   
   - A `new Date()` object to display the current date.
     
     _Một đối tượng `new Date()` để hiển thị ngày hiện tại._

## Step 2: Create a `ProductInfo` Component / Bước 2: Tạo Component `ProductInfo`

1. Create a new file called `ProductInfo.jsx`.
   
   _Tạo một file mới có tên `ProductInfo.jsx`._

2. Inside this file, create a functional component named `ProductInfo`.
   
   _Bên trong file này, tạo một functional component có tên `ProductInfo`._

3. The `ProductInfo` component should return a `<div>` that dynamically displays product details:
   
   _Component `ProductInfo` nên trả về một `<div>` hiển thị động các chi tiết sản phẩm:_

   - Use a `product` object that contains the following properties:
     
     _Sử dụng một đối tượng `product` chứa các thuộc tính sau:_
     
     - `name`: `"Laptop"`,
     - `price`: `$1200`,
     - `availability`: `"In stock"`

4. Display the product name, price, and availability using `{}`.
   
   _Hiển thị tên sản phẩm, giá và tình trạng có sẵn bằng cách sử dụng `{}`._

## Step 3: Render Components in `App.jsx` / Bước 3: Render các Component trong `App.jsx`

1. In your `App.jsx` file, import the `Greeting` and `ProductInfo` components:
   
   _Trong file `App.jsx` của bạn, import các component `Greeting` và `ProductInfo`:_

   ```jsx
   import Greeting from "./Greeting";
   import ProductInfo from "./ProductInfo";
   ```

2. Inside the `App` component's return statement, render both components:
   
   _Bên trong câu lệnh return của component `App`, render cả hai component:_

   ```jsx
   function App() {
     return (
       <div>
         <Greeting />
         <ProductInfo />
       </div>
     );
   }

   export default App;
   ```