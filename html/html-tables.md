# Tables / Bảng HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Navigation](./html-navigation.md)  
**➡️ Bài sau / Next:** [Forms](./html-forms.md)

---

## Mô tả / Description

Bài học này giới thiệu cách sử dụng bảng để đánh dấu dữ liệu dạng bảng. Tables trong HTML dùng để hiển thị thông tin dữ liệu phức tạp một cách trực quan và dễ hiểu, như bảng giá,  lịch trình, hoặc kết quả khảo sát.

This lesson introduces how to use tables to mark up tabular data. HTML tables are used to display complex data information visually and comprehensibly, such as price tables, schedules, or survey results.

## Khái niệm chính / Main Concepts

### Basic Table Structure / Cấu trúc bảng cơ bản

```html
<table>
    <tr> <!-- Table row / Hàng -->
        <th>Tên / Name</th> <!-- Table header / Tiêu đề -->
        <th>Tuổi / Age</th>
    </tr>
    <tr>
        <td>John</td> <!-- Table data / Dữ liệu -->
        <td>25</td>
    </tr>
    <tr>
        <td>Jane</td>
        <td>30</td>
    </tr>
</table>
```

### Table with Caption / Bảng với chú thích

```html
<table>
    <caption>Danh sách sinh viên / Student List</caption>
    <tr>
        <th>ID</th>
        <th>Tên / Name</th>
        <th>Điểm / Score</th>
    </tr>
    <tr>
        <td>1</td>
        <td>John</td>
        <td>85</td>
    </tr>
</table>
```

### Table Sections / Phân đoạn bảng

```html
<table>
    <thead> <!-- Table head / Phần đầu -->
        <tr>
            <th>Sản phẩm / Product</th>
            <th>Giá / Price</th>
        </tr>
    </thead>
    <tbody> <!-- Table body / Nội dung chính -->
        <tr>
            <td>Laptop</td>
            <td>$1000</td>
        </tr>
        <tr>
            <td>Mouse</td>
            <td>$20</td>
        </tr>
    </tbody>
    <tfoot> <!-- Table footer / Phần cuối -->
        <tr>
            <td>Tổng / Total</td>
            <td>$1020</td>
        </tr>
    </tfoot>
</table>
```

### Colspan and Rowspan / Gộp cột và hàng

```html
<table>
    <tr>
        <th colspan="2">Thông tin / Information</th>
    </tr>
    <tr>
        <td>Tên / Name</td>
        <td>John</td>
    </tr>
    <tr>
        <td rowspan="2">Địa chỉ / Address</td>
        <td>123 Street</td>
    </tr>
    <tr>
        <td>City, Country</td>
    </tr>
</table>
```

### Accessible Tables / Bảng accessible

```html
<table>
    <caption>Bảng giá sản phẩm / Product Pricing</caption>
    <thead>
        <tr>
            <th scope="col">Sản phẩm / Product</th>
            <th scope="col">Giá / Price</th>
            <th scope="col">Số lượng / Quantity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Laptop</th>
            <td>$1000</td>
            <td>5</td>
        </tr>
    </tbody>
</table>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Trực quan**: Hiển thị dữ liệu rõ ràng / Clear data display
- **Organized**: Tổ chức thông tin có cấu trúc / Organized structured information
- **Accessible**: Screen readers đọc tables tốt / Screen readers read tables well
- **Responsive**: Có thể responsive với CSS / Can be made responsive with CSS

### Ứng dụng thực tế / Real-world Applications

- **Pricing tables**: Bảng giá sản phẩm / Product pricing
- **Schedules**: Lịch trình, thời khóa biểu / Timetables, schedules
- **Data comparison**: So sánh tính năng / Feature comparison
- **Financial reports**: Báo cáo tài chính / Financial reports

## Best Practices / Thực hành tốt nhất

- ✅ **DO**: Sử dụng `<th>` cho headers / Use `<th>` for headers
- ✅ **DO**: Thêm `scope` attribute / Add `scope` attribute
- ✅ **DO**: Sử dụng `<caption>` / Use `<caption>`
- ❌ **DON'T**: Không dùng tables cho layout / Don't use tables for layout

## Tài liệu tham khảo / References

- [MDN - HTML Tables](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables)
- [W3C - Tables](https://www.w3.org/TR/html52/tabular-data.html)
