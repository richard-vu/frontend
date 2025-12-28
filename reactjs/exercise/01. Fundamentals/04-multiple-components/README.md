# Exercise: Rendering Multiple Components and Nesting Components / Bài tập: Render nhiều Component và Lồng Component

In this exercise, you will learn how to create multiple components and render one component inside another.

_Trong bài tập này, bạn sẽ học cách tạo nhiều component và render một component bên trong component khác._

## Step 1: Create a `Header` Component / Bước 1: Tạo Component `Header`

1. Create a new file called `Header.jsx`.
   
   _Tạo một file mới có tên `Header.jsx`._

2. Inside this file, create a functional component named `Header`.
   
   _Bên trong file này, tạo một functional component có tên `Header`._

3. The `Header` component should return a `<header>` element with the following:
   
   _Component `Header` nên trả về một phần tử `<header>` với các nội dung sau:_
   
   - A `<h1>` element with the text `"Welcome to My Website!"`
     
     _Một phần tử `<h1>` với nội dung `"Welcome to My Website!"`_
   
   - A `<nav>` element containing three links (`<a>`) with the text `"Home"`, `"About"`, and `"Contact"`.
     
     _Một phần tử `<nav>` chứa ba liên kết (`<a>`) với nội dung `"Home"`, `"About"`, và `"Contact"`._

## Step 2: Create a `Footer` Component / Bước 2: Tạo Component `Footer`

1. Create a new file called `Footer.jsx`.
   
   _Tạo một file mới có tên `Footer.jsx`._

2. Inside this file, create a functional component named `Footer`.
   
   _Bên trong file này, tạo một functional component có tên `Footer`._

3. The `Footer` component should return a `<footer>` element with a `<p>` containing the text `"© 2024 My Website"`.
   
   _Component `Footer` nên trả về một phần tử `<footer>` với một `<p>` chứa nội dung `"© 2024 My Website"`._

## Step 3: Create a `MainContent` Component / Bước 3: Tạo Component `MainContent`

1. Create a new file called `MainContent.jsx`.
   
   _Tạo một file mới có tên `MainContent.jsx`._

2. Inside this file, create a functional component named `MainContent`.
   
   _Bên trong file này, tạo một functional component có tên `MainContent`._

3. The `MainContent` component should return a `<main>` element containing:
   
   _Component `MainContent` nên trả về một phần tử `<main>` chứa:_
   
   - A `<h2>` element with the text `"Main Content"`.
     
     _Một phần tử `<h2>` với nội dung `"Main Content"`._
   
   - A `<p>` element with any text of your choice.
     
     _Một phần tử `<p>` với nội dung bất kỳ theo lựa chọn của bạn._

## Step 4: Render Components Inside `App.jsx` / Bước 4: Render các Component bên trong `App.jsx`

1. In your `App.jsx` file, import the `Header`, `MainContent`, and `Footer` components:
   
   _Trong file `App.jsx` của bạn, import các component `Header`, `MainContent`, và `Footer`:_

   ```jsx
   import Header from "./Header";
   import MainContent from "./MainContent";
   import Footer from "./Footer";
   ```

2. Inside the `App` component's return statement, render the three components inside a single `<div>`, in the following order:
   
   _Bên trong câu lệnh return của component `App`, render ba component bên trong một `<div>` duy nhất, theo thứ tự sau:_
   
   - `Header`
   - `MainContent`
   - `Footer`

Your `App.jsx` should look like this:

_File `App.jsx` của bạn nên trông như thế này:_

```jsx
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
```