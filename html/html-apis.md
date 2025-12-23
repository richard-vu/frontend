# HTML APIs / API HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Template, Slot, and Shadow](./html-template-slot-shadow.md)  
**➡️ Bài sau / Next:** [Focus](./html-focus.md)

---

## Mô tả / Description

Bài học này giới thiệu cách thông tin HTML được hiển thị và thao tác thông qua JavaScript. HTML APIs cho phép xây dựng các tính năng web động và tương tác cao, từ thao tác DOM đến local storage và geolocation.

This lesson introduces how HTML information is displayed and manipulated through JavaScript. HTML APIs allow building dynamic and highly interactive web features, from DOM manipulation to local storage and geolocation.

## Khái niệm chính / Main Concepts

### DOM Manipulation / Thao tác DOM

```html
<div id="content">Nội dung / Content</div>

<script>
// Lấy element / Get element
const div = document.getElementById('content');
const elements = document.querySelectorAll('.class');

// Thay đổi nội dung / Change content
div.textContent = 'New content / Nội dung mới';
div.innerHTML = '<strong>Bold text</strong>';

// Thêm/xóa class / Add/remove class
div.classList.add('active');
div.classList.remove('inactive');
div.classList.toggle('visible');

// Tạo element mới / Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'New div';
document.body.appendChild(newDiv);
</script>
```

### Local Storage API

```html
<script>
// Lưu dữ liệu / Save data
localStorage.setItem('username', 'John');
localStorage.setItem('settings', JSON.stringify({theme: 'dark'}));

// Đọc dữ liệu / Read data
const username = localStorage.getItem('username');
const settings = JSON.parse(localStorage.getItem('settings'));

// Xóa dữ liệu / Remove data
localStorage.removeItem('username');
localStorage.clear(); // Xóa tất cả / Clear all
</script>
```

### Geolocation API / API Định vị

```html
<button onclick="getLocation()">Lấy vị trí / Get Location</button>
<div id="location"></div>

<script>
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Trình duyệt không hỗ trợ / Browser not supported');
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById('location').textContent = 
        `Lat: ${lat}, Lon: ${lon}`;
}
</script>
```

### Canvas API

```html
<canvas id="myCanvas" width="400" height="200"></canvas>

<script>
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Vẽ hình chữ nhật / Draw rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 150, 100);

// Vẽ text / Draw text
ctx.font = '30px Arial';
ctx.fillText('Hello Canvas', 50, 180);
</script>
```

### Fetch API

```html
<script>
// GET request
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST request
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: 'John', age: 30})
})
.then(response => response.json())
.then(data => console.log(data));
</script>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Interactivity**: Tương tác động / Dynamic interaction
- **Data persistence**: Lưu trữ dữ liệu local / Local data storage
- **Location services**: Dịch vụ định vị / Location services
- **Graphics**: Vẽ đồ họa / Draw graphics

### Ứng dụng thực tế / Real-world Applications

- **SPAs**: Single Page Applications
- **Maps**: Bản đồ tương tác / Interactive maps
- **Games**: Trò chơi web / Web games
- **Charts**: Biểu đồ / Charts and graphs
- **Forms**: Form validation và submission / Form validation and submission

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Kiểm tra browser support / Check browser support
- ✅ **DO**: Handle errors properly / Handle errors properly
- ✅ **DO**: Use async/await / Use async/await
- ❌ **DON'T**: Không lưu sensitive data trong localStorage / Don't store sensitive data in localStorage

## Tài liệu tham khảo / References

- [MDN - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)
- [MDN - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
