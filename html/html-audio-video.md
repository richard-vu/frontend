# Audio and Video / Âm thanh và Video HTML

---

**📅 Ngày tạo / Created:** 2025-12-23  
**📅 Ngày cập nhật / Last Updated:** 2025-12-23

**⬅️ Bài trước / Previous:** [Images](./html-images.md)  
**➡️ Bài sau / Next:** [Template, Slot, and Shadow](./html-template-slot-shadow.md)

---

## Mô tả / Description

Bài học này khám phá cách làm việc với các phương tiện truyền thông như âm thanh và video trong HTML. HTML5 cung cấp các thẻ native để tích hợp nội dung nghe nhìn trực tiếp vào trang web mà không cần plugin.

This lesson explores how to work with media such as audio and video in HTML. HTML5 provides native tags to integrate audiovisual content directly into web pages without plugins.

## Khái niệm chính / Main Concepts

### Video Element / Phần tử Video

```html
<!-- Video cơ bản / Basic video -->
<video src="movie.mp4" controls width="640" height="360">
    Trình duyệt không hỗ trợ video / Browser doesn't support video
</video>

<!-- Multiple sources / Nhiều nguồn -->
<video controls width="640" height="360">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    <source src="movie.ogg" type="video/ogg">
    Trình duyệt của bạn không hỗ trợ video / Your browser doesn't support video
</video>

<!-- Video với poster và autoplay -->
<!-- Video with poster and autoplay -->
<video controls poster="thumbnail.jpg" autoplay muted loop>
    <source src="video.mp4" type="video/mp4">
</video>
```

###Audio Element / Phần tử Audio

```html
<!-- Audio cơ bản / Basic audio -->
<audio src="song.mp3" controls>
    Trình duyệt không hỗ trợ audio / Browser doesn't support audio
</audio>

<!-- Multiple sources -->
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
    Trình duyệt của bạn không hỗ trợ audio / Your browser doesn't support audio
</audio>

<!-- Preload và autoplay -->
<audio controls preload="metadata" autoplay>
    <source src="music.mp3" type="audio/mpeg">
</audio>
```

### Track Element / Phần tử Track (Phụ đề)

```html
<video controls>
    <source src="movie.mp4" type="video/mp4">
    
    <!-- Subtitles / Phụ đề -->
    <track src="subtitles-vi.vtt" kind="subtitles" srclang="vi" label="Tiếng Việt">
    <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English" default>
    
    <!-- Captions for deaf / Phụ đề cho người điếc -->
    <track src="captions.vtt" kind="captions" srclang="en" label="English CC">
</video>
```

### Iframe Embed (YouTube, Vimeo) / Nhúng iframe

```html
<!-- YouTube embed -->
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
</iframe>

<!-- Vimeo embed -->
<iframe src="https://player.vimeo.com/video/VIDEO_ID"
        width="640" height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen>
</iframe>
```

## Lợi ích/Ứng dụng / Benefits/Applications

### Lợi ích / Benefits

- **Native support**: Không cần plugin / No plugins needed
- **Controls**: Điều khiển native / Native controls
- **Accessibility**: Hỗ trợ subtitles / Supports subtitles
- **Responsive**: Có thể responsive / Can be responsive

### Ứng dụng thực tế / Real-world Applications

- **Video tutorials**:  Hướng dẫn / Tutorials
- **Music players**: Trình phát nhạc / Music players
- **Product demos**: Demo sản phẩm / Product demonstrations
- **Podcasts**: Podcast / Podcasts
- **Webinars**: Hội thảo trực tuyến / Online seminars

## Best Practices / Thực hành tốt nhất

- ✅ **DO**:Cung cấp nhiều format / Provide multiple formats
- ✅ **DO**: Thêm subtitles / Add subtitles
- ✅ **DO**: Sử dụng `preload="metadata"` / Use `preload="metadata"`
- ❌ **DON'T**: Không autoplay với sound / Don't autoplay with sound

## Tài liệu tham khảo / References

- [MDN - Video and Audio](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [W3C - Media Elements](https://www.w3.org/TR/html52/semantics-embedded-content.html#media-elements)
