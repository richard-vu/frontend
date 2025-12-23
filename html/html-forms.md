# Forms / Biểu mẫu HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Tables](./html-tables.md)  
**➡️ Bài sau / Next:** [Images](./html-images.md)

---

## Mô tả / Description

Bài học này cung cấp tổng quan về các biểu mẫu trong HTML. Forms cho phép thu thập dữ liệu và tương tác với người dùng, là thành phần quan trọng trong hầu hết các website và ứng dụng web.

This lesson provides an overview of forms in HTML. Forms allow data collection and user interaction, essential components in most websites and web applications.

## Khái niệm chính / Main Concepts

### Basic Form Structure / Cấu trúc form cơ bản

```html
<form action="/submit" method="POST">
    <label for="name">Tên / Name:</label>
    <input type="text" id="name" name="name" required>
    
    <button type="submit">Gửi / Submit</button>
</form>
```

### Input Types / Các loại input

```html
<!-- Text input -->
<input type="text" name="username" placeholder="Tên đăng nhập / Username">

<!-- Email -->
<input type="email" name="email" required>

<!-- Password -->
<input type="password" name="password" minlength="8">

<!-- Number -->
<input type="number" name="age" min="18" max="100">

<!-- Date -->
<input type="date" name="birthdate">

<!-- Checkbox -->
<input type="checkbox" id="agree" name="agree" value="yes">
<label for="agree">Tôi đồng ý / I agree</label>

<!-- Radio -->
<input type="radio" id="male" name="gender" value="male">
<label for="male">Nam / Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Nữ / Female</label>
```

### Textarea and Select / Textarea và Select

```html
<!-- Textarea -->
<label for="message">Tin nhắn / Message:</label>
<textarea id="message" name="message" rows="5" cols="50"></textarea>

<!-- Select dropdown -->
<label for="country">Quốc gia / Country:</label>
<select id="country" name="country">
    <option value="">-- Chọn / Select --</option>
    <option value="vn">Việt Nam / Vietnam</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
</select>
```

### Form Validation / Xác thực form

```html
<form>
    <!-- Required field / Trường bắt buộc -->
    <input type="text" name="name" required>
    
    <!-- Pattern validation -->
    <input type="tel" name="phone" pattern="[0-9]{10}" 
           title="10 chữ số / 10 digits">
    
    <!-- Min/Max length -->
    <input type="password" name="pwd" minlength="8" maxlength="20">
    
    <!-- Min/Max value -->
    <input type="number" name="quantity" min="1" max="10">
</form>
```

### Fieldset and Legend / Nhóm trường

```html
<form>
    <fieldset>
        <legend>Thông tin cá nhân / Personal Information</legend>
        <label for="fname">Họ / First name:</label>
        <input type="text" id="fname" name="fname">
        
        <label for="lname">Tên / Last name:</label>
        <input type="text" id="lname" name="lname">
    </fieldset>
    
    <fieldset>
        <legend>Thông tin liên hệ / Contact Information</legend>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </fieldset>
</form>
```

### Buttons / Các loại nút

```html
<!-- Submit button -->
<button type="submit">Gửi / Submit</button>

<!-- Reset button -->
<button type="reset">Đặt lại / Reset</button>

<!-- Regular button -->
<button type="button" onclick="myFunction()">Click me</button>

<!-- Input button -->
<input type="submit" value="Gửi / Submit">
<input type="reset" value="Đặt lại / Reset">
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **User interaction**: Tương tác với người dùng / Interact with users
- **Data collection**: Thu thập thông tin / Collect information
- **Validation**: Kiểm tra dữ liệu client-side / Client-side data validation
- **Accessibility**: Hỗ trợ keyboard navigation / Supports keyboard navigation

### Ứng dụng thực tế / Real-world Applications

- **Login forms**: Đăng nhập / Authentication
- **Registration**: Đăng ký tài khoản / Account registration
- **Contact forms**: Liên hệ / Contact
- **Search**: Tìm kiếm / Search
- **Checkout**: Thanh toán / Payment
- **Surveys**: Khảo sát / Surveys

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Luôn dùng `<label>` cho inputs / Always use `<label>` for inputs
- ✅ **DO**: Sử dụng appropriate input types / Use appropriate input types
- ✅ **DO**: Thêm validation attributes / Add validation attributes
- ❌ **DON'T**: Không bỏ qua accessibility / Don't skip accessibility

## Tài liệu tham khảo / References

- [MDN - HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [W3C - Forms](https://www.w3.org/TR/html52/sec-forms.html)
