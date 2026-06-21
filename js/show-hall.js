const lockerGrid = document.getElementById('lockerGrid');
for (let i = 1; i <= 50; i++) {
    const locker = document.createElement('div');
    locker.className = 'locker';
    if (i <= 20) {
        locker.classList.add('busy');
        locker.innerHTML = `${i}<span style="font-size:8px;">🔴</span>`;
    } else {
        locker.innerHTML = `${i}<span style="font-size:8px;">✅</span>`;
    }
    locker.onclick = (function(num, isBusy) {
        return function() {
            if (isBusy) alert(`کمد شماره ${num}\nوضعیت: پر (رزرو شده)`);
            else alert(`کمد شماره ${num}\nوضعیت: خالی ✅`);
        };
    })(i, i <= 20);
    lockerGrid.appendChild(locker);
}

const galleryImages = [
    { src: "img/hall-view1.jpg", caption: "نمای کلی سالن" },
    { src: "img/hall-view2.jpg", caption: "محل استقرار تماشاگران" },
    { src: "img/hall-view3.jpg", caption: "سیستم نورپردازی" },
    { src: "img/lockers-view.jpg", caption: "کمدهای ذخیره وسایل" },
];

const galleryGrid = document.getElementById('galleryGrid');
galleryImages.forEach(img => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.onclick = () => openGalleryModal(img.src);
    item.innerHTML = `
        <img src="${img.src}" class="gallery-img" alt="${img.caption}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Crect width=%27100%27 height=%27100%27 fill=%27%238b5a2b%27/%3E%3Ctext x=%2750%27 y=%2755%27 text-anchor=%27middle%27 fill=%27white%27 font-size=%2740%27%3E📷%3C/text%3E%3C/svg%3E'">
        <div class="gallery-caption">${img.caption}</div>
    `;
    galleryGrid.appendChild(item);
});

function openGalleryModal(src) {
    document.getElementById('galleryModal').style.display = 'flex';
    document.getElementById('modalImage').src = src;
}

function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none';
}
