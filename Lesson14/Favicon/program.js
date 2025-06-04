let favicon = document.querySelector("link[rel~='icon']")
if (!favicon) {
    favicon = document.createElement('link')
    favicon.rel = 'icon'
    document.head.appendChild(favicon)
}
favicon.href = 'myicon.png'
document.title = 'Мухомор'