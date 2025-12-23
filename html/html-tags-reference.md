# HTML Tags Reference / Tài Liệu Tham Khảo Các Thẻ HTML

## Common HTML Tags / Các Thẻ HTML Thông Dụng

| Tên thẻ<br>Tag Name | Cú pháp<br>Syntax | Mục đích<br>Purpose | Ví dụ<br>Example |
|---------------------|-------------------|---------------------|------------------|
| **Document Structure / Cấu trúc tài liệu** |
| `<!DOCTYPE>` | `<!DOCTYPE html>` | Khai báo loại tài liệu HTML<br>Declares the HTML document type | `<!DOCTYPE html>` |
| `<html>` | `<html>...</html>` | Thẻ gốc của tài liệu HTML<br>Root element of HTML document | `<html lang="en">...</html>` |
| `<head>` | `<head>...</head>` | Chứa metadata và thông tin về trang<br>Contains metadata and page information | `<head><title>My Page</title></head>` |
| `<title>` | `<title>...</title>` | Tiêu đề trang web (hiển thị trên tab)<br>Page title (shown in browser tab) | `<title>Welcome</title>` |
| `<body>` | `<body>...</body>` | Chứa nội dung hiển thị của trang<br>Contains visible page content | `<body><h1>Hello</h1></body>` |
| **Text Content / Nội dung văn bản** |
| `<h1>` to `<h6>` | `<h1>...</h1>` | Tiêu đề các cấp độ (h1 lớn nhất, h6 nhỏ nhất)<br>Headings (h1 largest, h6 smallest) | `<h1>Main Title</h1>` |
| `<p>` | `<p>...</p>` | Đoạn văn bản<br>Paragraph of text | `<p>This is a paragraph.</p>` |
| `<span>` | `<span>...</span>` | Container inline cho text/nội dung<br>Inline container for text/content | `<span class="highlight">text</span>` |
| `<br>` | `<br>` | Ngắt dòng<br>Line break | `Line 1<br>Line 2` |
| `<hr>` | `<hr>` | Đường kẻ ngang phân cách<br>Horizontal rule separator | `<hr>` |
| **Formatting / Định dạng** |
| `<strong>` | `<strong>...</strong>` | Văn bản quan trọng (in đậm)<br>Important text (bold) | `<strong>Important!</strong>` |
| `<b>` | `<b>...</b>` | Văn bản in đậm<br>Bold text | `<b>Bold text</b>` |
| `<em>` | `<em>...</em>` | Văn bản nhấn mạnh (in nghiêng)<br>Emphasized text (italic) | `<em>Emphasis</em>` |
| `<i>` | `<i>...</i>` | Văn bản in nghiêng<br>Italic text | `<i>Italic text</i>` |
| `<mark>` | `<mark>...</mark>` | Văn bản được đánh dấu (highlight)<br>Marked/highlighted text | `<mark>Highlighted</mark>` |
| `<small>` | `<small>...</small>` | Văn bản nhỏ hơn<br>Smaller text | `<small>Small print</small>` |
| `<del>` | `<del>...</del>` | Văn bản bị xóa (gạch ngang)<br>Deleted text (strikethrough) | `<del>Old price</del>` |
| `<ins>` | `<ins>...</ins>` | Văn bản được chèn thêm (gạch dưới)<br>Inserted text (underlined) | `<ins>New content</ins>` |
| `<sub>` | `<sub>...</sub>` | Chữ viết ở dưới (subscript)<br>Subscript text | `H<sub>2</sub>O` |
| `<sup>` | `<sup>...</sup>` | Chữ viết ở trên (superscript)<br>Superscript text | `x<sup>2</sup>` |
| **Lists / Danh sách** |
| `<ul>` | `<ul>...</ul>` | Danh sách không có thứ tự<br>Unordered list | `<ul><li>Item</li></ul>` |
| `<ol>` | `<ol>...</ol>` | Danh sách có thứ tự<br>Ordered list | `<ol><li>First</li></ol>` |
| `<li>` | `<li>...</li>` | Mục trong danh sách<br>List item | `<li>List item</li>` |
| `<dl>` | `<dl>...</dl>` | Danh sách mô tả<br>Description list | `<dl><dt>Term</dt></dl>` |
| `<dt>` | `<dt>...</dt>` | Thuật ngữ trong danh sách mô tả<br>Term in description list | `<dt>HTML</dt>` |
| `<dd>` | `<dd>...</dd>` | Mô tả thuật ngữ<br>Description of term | `<dd>Markup language</dd>` |
| **Links / Liên kết** |
| `<a>` | `<a href="url">...</a>` | Liên kết/đường dẫn<br>Hyperlink/anchor | `<a href="page.html">Link</a>` |
| **Images & Media / Hình ảnh & Media** |
| `<img>` | `<img src="url" alt="text">` | Chèn hình ảnh<br>Insert image | `<img src="logo.png" alt="Logo">` |
| `<video>` | `<video>...</video>` | Chèn video<br>Embed video | `<video src="movie.mp4" controls></video>` |
| `<audio>` | `<audio>...</audio>` | Chèn âm thanh<br>Embed audio | `<audio src="sound.mp3" controls></audio>` |
| `<iframe>` | `<iframe src="url">...</iframe>` | Nhúng trang web khác<br>Embed another webpage | `<iframe src="page.html"></iframe>` |
| **Tables / Bảng** |
| `<table>` | `<table>...</table>` | Tạo bảng<br>Create table | `<table><tr><td>Cell</td></tr></table>` |
| `<thead>` | `<thead>...</thead>` | Phần tiêu đề bảng<br>Table header section | `<thead><tr><th>Header</th></tr></thead>` |
| `<tbody>` | `<tbody>...</tbody>` | Phần nội dung bảng<br>Table body section | `<tbody><tr><td>Data</td></tr></tbody>` |
| `<tfoot>` | `<tfoot>...</tfoot>` | Phần chân bảng<br>Table footer section | `<tfoot><tr><td>Footer</td></tr></tfoot>` |
| `<tr>` | `<tr>...</tr>` | Hàng trong bảng<br>Table row | `<tr><td>Cell 1</td><td>Cell 2</td></tr>` |
| `<th>` | `<th>...</th>` | Ô tiêu đề trong bảng<br>Table header cell | `<th>Column Title</th>` |
| `<td>` | `<td>...</td>` | Ô dữ liệu trong bảng<br>Table data cell | `<td>Data value</td>` |
| **Forms / Biểu mẫu** |
| `<form>` | `<form action="url">...</form>` | Tạo biểu mẫu<br>Create form | `<form action="/submit" method="post">...</form>` |
| `<input>` | `<input type="text">` | Trường nhập liệu<br>Input field | `<input type="email" name="email">` |
| `<textarea>` | `<textarea>...</textarea>` | Vùng nhập văn bản nhiều dòng<br>Multi-line text input area | `<textarea rows="4" cols="50"></textarea>` |
| `<button>` | `<button>...</button>` | Nút bấm<br>Button | `<button type="submit">Submit</button>` |
| `<select>` | `<select>...</select>` | Danh sách thả xuống<br>Dropdown list | `<select><option>One</option></select>` |
| `<option>` | `<option>...</option>` | Tùy chọn trong select<br>Option in select | `<option value="1">Option 1</option>` |
| `<label>` | `<label>...</label>` | Nhãn cho input<br>Label for input | `<label for="name">Name:</label>` |
| `<fieldset>` | `<fieldset>...</fieldset>` | Nhóm các trường trong form<br>Group form fields | `<fieldset><legend>Info</legend></fieldset>` |
| `<legend>` | `<legend>...</legend>` | Tiêu đề cho fieldset<br>Caption for fieldset | `<legend>Personal Info</legend>` |
| **Semantic Elements / Thẻ ngữ nghĩa** |
| `<header>` | `<header>...</header>` | Phần đầu trang/section<br>Page/section header | `<header><h1>Site Title</h1></header>` |
| `<nav>` | `<nav>...</nav>` | Menu điều hướng<br>Navigation menu | `<nav><a href="/">Home</a></nav>` |
| `<main>` | `<main>...</main>` | Nội dung chính của trang<br>Main content of page | `<main><article>...</article></main>` |
| `<section>` | `<section>...</section>` | Phần/mục trong tài liệu<br>Section in document | `<section><h2>About</h2></section>` |
| `<article>` | `<article>...</article>` | Nội dung độc lập<br>Independent content | `<article><h2>Blog Post</h2></article>` |
| `<aside>` | `<aside>...</aside>` | Nội dung phụ/sidebar<br>Side content/sidebar | `<aside>Related links</aside>` |
| `<footer>` | `<footer>...</footer>` | Phần chân trang/section<br>Page/section footer | `<footer>&copy; 2025</footer>` |
| **Container Elements / Thẻ container** |
| `<div>` | `<div>...</div>` | Container khối chung<br>Generic block container | `<div class="container">Content</div>` |
| `<span>` | `<span>...</span>` | Container inline chung<br>Generic inline container | `<span style="color:red">Text</span>` |
| **Meta Information / Thông tin meta** |
| `<meta>` | `<meta name="..." content="...">` | Metadata của trang<br>Page metadata | `<meta charset="UTF-8">` |
| `<link>` | `<link rel="..." href="...">` | Liên kết tài nguyên ngoài<br>Link external resources | `<link rel="stylesheet" href="style.css">` |
| `<style>` | `<style>...</style>` | CSS nội tuyến<br>Inline CSS | `<style>body { margin: 0; }</style>` |
| `<script>` | `<script>...</script>` | JavaScript code<br>JavaScript code | `<script src="app.js"></script>` |

## Common Input Types / Các Loại Input Thông Dụng

| Type | Cú pháp<br>Syntax | Mục đích<br>Purpose | Ví dụ<br>Example |
|------|-------------------|---------------------|------------------|
| Text | `<input type="text">` | Nhập văn bản thường<br>Regular text input | `<input type="text" name="username">` |
| Password | `<input type="password">` | Nhập mật khẩu (ẩn ký tự)<br>Password input (hidden chars) | `<input type="password" name="pwd">` |
| Email | `<input type="email">` | Nhập email (có validation)<br>Email input (with validation) | `<input type="email" name="email">` |
| Number | `<input type="number">` | Nhập số<br>Number input | `<input type="number" min="1" max="10">` |
| Date | `<input type="date">` | Chọn ngày<br>Date picker | `<input type="date" name="birthday">` |
| Checkbox | `<input type="checkbox">` | Ô chọn (nhiều lựa chọn)<br>Checkbox (multiple choice) | `<input type="checkbox" name="agree">` |
| Radio | `<input type="radio">` | Nút chọn (một lựa chọn)<br>Radio button (single choice) | `<input type="radio" name="gender" value="male">` |
| File | `<input type="file">` | Chọn file upload<br>File upload | `<input type="file" name="photo">` |
| Submit | `<input type="submit">` | Nút gửi form<br>Submit button | `<input type="submit" value="Send">` |
| Reset | `<input type="reset">` | Nút reset form<br>Reset button | `<input type="reset" value="Clear">` |

## Notes / Ghi chú

- **Self-closing tags / Thẻ tự đóng**: Một số thẻ như `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>` không cần thẻ đóng.
- **Attributes / Thuộc tính**: Hầu hết các thẻ đều chấp nhận các thuộc tính như `class`, `id`, `style` để styling và JavaScript manipulation.
- **Semantic HTML / HTML ngữ nghĩa**: Nên sử dụng các thẻ semantic (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.) thay vì chỉ dùng `<div>` để code có ý nghĩa hơn và tốt cho SEO.
