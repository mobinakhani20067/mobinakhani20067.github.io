let requests = [
    { id: 1, name: "دانشگاه علوم پزشکی ایران", president: "دکتر رضایی", presidentPhone: "09123456789", uniPhone: "021-1234567", province: "تهران", city: "تهران", address: "خیابان انقلاب، دانشگاه علوم پزشکی ایران", sports: ["بسکتبال", "والیبال"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۹" },
    { id: 2, name: "دانشگاه علوم کشاورزی و منابع طبیعی گرگان", president: "دکتر کریمی", presidentPhone: "09123456789", uniPhone: "017-1234567", province: "گلستان", city: "گرگان", address: "دانشگاه علوم کشاورزی گرگان", sports: ["والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۷" },
    { id: 3, name: "دانشگاه علوم پزشکی کرمانشاه", president: "دکتر محمدی", presidentPhone: "09123456789", uniPhone: "083-1234567", province: "کرمانشاه", city: "کرمانشاه", address: "دانشگاه علوم پزشکی کرمانشاه", sports: ["بسکتبال", "فوتسال"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۵" },
    { id: 4, name: "دانشگاه علوم پزشکی کرمان", president: "دکتر حسینی", presidentPhone: "09123456789", uniPhone: "034-1234567", province: "کرمان", city: "کرمان", address: "دانشگاه علوم پزشکی کرمان", sports: ["والیبال", "پینگ پنگ"], facilities: ["زمین تنیس"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۳" },
    { id: 5, name: "دانشگاه علوم پزشکی ارومیه", president: "دکتر نادری", presidentPhone: "09123456789", uniPhone: "044-1234567", province: "آذربایجان غربی", city: "ارومیه", address: "دانشگاه علوم پزشکی ارومیه", sports: ["بسکتبال", "والیبال"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۲" },
    { id: 6, name: "دانشگاه علوم پزشکی زنجان", president: "دکتر علیپور", presidentPhone: "09123456789", uniPhone: "024-1234567", province: "زنجان", city: "زنجان", address: "دانشگاه علوم پزشکی زنجان", sports: ["فوتسال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۹" },
    { id: 7, name: "دانشگاه علوم پزشکی شهرکرد", president: "دکتر صمدی", presidentPhone: "09123456789", uniPhone: "038-1234567", province: "چهارمحال و بختیاری", city: "شهرکرد", address: "دانشگاه علوم پزشکی شهرکرد", sports: ["بسکتبال", "والیبال", "شطرنج"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۸" },
    { id: 8, name: "دانشگاه علوم پزشکی بجنورد", president: "دکتر رستمی", presidentPhone: "09123456789", uniPhone: "058-1234567", province: "خراسان شمالی", city: "بجنورد", address: "دانشگاه علوم پزشکی بجنورد", sports: ["والیبال", "پینگ پنگ"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۶" },
    { id: 9, name: "دانشگاه علوم پزشکی یاسوج", president: "دکتر کریمی", presidentPhone: "09123456789", uniPhone: "074-1234567", province: "کهگیلویه و بویراحمد", city: "یاسوج", address: "دانشگاه علوم پزشکی یاسوج", sports: ["بسکتبال", "فوتسال", "تیراندازی"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۵" },
    { id: 10, name: "دانشگاه علوم پزشکی سمنان", president: "دکتر حسینی", presidentPhone: "09123456789", uniPhone: "023-1234567", province: "سمنان", city: "سمنان", address: "دانشگاه علوم پزشکی سمنان", sports: ["والیبال", "بدمینتون"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۳" },
    { id: 11, name: "دانشگاه علوم پزشکی رفسنجان", president: "دکتر محمدی", presidentPhone: "09123456789", uniPhone: "034-1234567", province: "کرمان", city: "رفسنجان", address: "دانشگاه علوم پزشکی رفسنجان", sports: ["بسکتبال", "والیبال", "پینگ پنگ"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۰۱" },
    { id: 12, name: "دانشگاه صنعتی امیرکبیر", president: "دکتر احمدی", presidentPhone: "09123456789", uniPhone: "021-1234567", province: "تهران", city: "تهران", address: "خیابان حافظ، دانشگاه صنعتی امیرکبیر", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن", "استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۲" },
    { id: 13, name: "دانشگاه صنعتی خواجه نصیرالدین طوسی", president: "دکتر کریمی", presidentPhone: "09123456789", uniPhone: "021-1234567", province: "تهران", city: "تهران", address: "خیابان مطهری، دانشگاه صنعتی خواجه نصیر", sports: ["بسکتبال", "والیبال", "تیراندازی"], facilities: ["استخر", "زمین تنیس"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۴" },
    { id: 14, name: "دانشگاه علوم پزشکی قم", president: "دکتر رضایی", presidentPhone: "09123456789", uniPhone: "025-1234567", province: "قم", city: "قم", address: "بلوار جمهوری، دانشگاه علوم پزشکی قم", sports: ["والیبال", "بدمینتون", "پینگ پنگ"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۳" },
    { id: 15, name: "دانشگاه علوم پزشکی البرز", president: "دکتر حسینی", presidentPhone: "09123456789", uniPhone: "026-1234567", province: "البرز", city: "کرج", address: "بلوار دانشجو، دانشگاه علوم پزشکی البرز", sports: ["بسکتبال", "فوتسال"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۱" },
    { id: 16, name: "دانشگاه علوم پزشکی گیلان", president: "دکتر نادری", presidentPhone: "09123456789", uniPhone: "013-1234567", province: "گیلان", city: "رشت", address: "بلوار دانشگاه، دانشگاه علوم پزشکی گیلان", sports: ["والیبال", "شطرنج", "دارت"], facilities: ["زمین تنیس"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۲۰" },
    { id: 17, name: "دانشگاه علوم پزشکی زاهدان", president: "دکتر علیپور", presidentPhone: "09123456789", uniPhone: "054-1234567", province: "سیستان و بلوچستان", city: "زاهدان", address: "بلوار دانشگاه، دانشگاه علوم پزشکی زاهدان", sports: ["بسکتبال", "والیبال", "فوتسال"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۸" },
    { id: 18, name: "دانشگاه علوم پزشکی کردستان", president: "دکتر صمدی", presidentPhone: "09123456789", uniPhone: "087-1234567", province: "کردستان", city: "سنندج", address: "بلوار دانشگاه، دانشگاه علوم پزشکی کردستان", sports: ["بسکتبال", "والیبال", "بدمینتون"], facilities: ["استخر"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۶" },
    { id: 19, name: "دانشگاه علوم پزشکی هرمزگان", president: "دکتر رستمی", presidentPhone: "09123456789", uniPhone: "076-1234567", province: "هرمزگان", city: "بندرعباس", address: "بلوار دانشگاه، دانشگاه علوم پزشکی هرمزگان", sports: ["والیبال", "پینگ پنگ", "تیراندازی"], facilities: ["زمین چمن"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۴" },
    { id: 20, name: "دانشگاه علوم پزشکی اراک", president: "دکتر کریمی", presidentPhone: "09123456789", uniPhone: "086-1234567", province: "مرکزی", city: "اراک", address: "بلوار دانشگاه، دانشگاه علوم پزشکی اراک", sports: ["بسکتبال", "فوتسال", "شطرنج"], facilities: ["استخر", "زمین تنیس"], images: [], status: "pending", date: "۱۴۰۴/۰۲/۱۱" }
];

let currentFilter = "pending";
let currentRequestId = null;
let editRequestId = null;
let currentPage = 1;
let itemsPerPage = 15;

function updateStats() {
    let pendingList = requests.filter(r => r.status === 'pending');
    document.getElementById('totalRequests').innerText = pendingList.length;
    document.getElementById('pendingRequests').innerText = pendingList.length;
    document.getElementById('approvedRequests').innerText = requests.filter(r => r.status === 'approved').length;
}

function filterRequests() {
    currentPage = 1;
    renderRequestsList();
}

function renderRequestsList() {
    let filtered = requests.filter(r => r.status === 'pending');
    let totalItems = filtered.length;
    let totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    if (currentPage < 1) {
        currentPage = 1;
    }
    
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    let pageItems = filtered.slice(startIndex, endIndex);

    let tbody = document.getElementById('requestsTableBody');
    
    if (pageItems.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">هیچ درخواستی یافت نشد</td></tr>';
        renderPaginationControls(totalPages, totalItems);
        return;
    }

    let html = '';
    for (let i = 0; i < pageItems.length; i++) {
        let r = pageItems[i];
        let statusClass = r.status === 'approved' ? 'status-approved' : 'status-pending';
        let statusText = r.status === 'approved' ? 'تایید شده' : 'در انتظار تایید';
        
        html += '<tr>' +
            '<td>' + r.name + '</td>' +
            '<td>' + r.province + '</td>' +
            '<td>' + r.city + '</td>' +
            '<td>' + r.date + '</td>' +
            '<td><span class="status-badge ' + statusClass + '">' + statusText + '</span></td>' +
            '<td><div class="actions-cell">' +
                '<button class="btn-details" onclick="showDetails(' + r.id + ')">' +
                    '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>' +
                    '<span>جزئیات</span>' +
                '</button>' +
                '<button class="btn-approve" onclick="approveRequest(' + r.id + ')">' +
                    '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>' +
                    '<span>تایید</span>' +
                '</button>' +
                '<button class="btn-reject" onclick="rejectRequest(' + r.id + ')">' +
                    '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>' +
                    '<span>رد</span>' +
                '</button>' +
            '</div></td>' +
            '</tr>';
    }
    tbody.innerHTML = html;
    renderPaginationControls(totalPages, totalItems);
}

function renderPaginationControls(totalPages, totalItems) {
    let container = document.getElementById('paginationContainer');
    
    if (totalItems === 0 || totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '';
    html += '<button onclick="goToPage(' + (currentPage - 1) + ')" ' + (currentPage === 1 ? 'disabled' : '') + '>قبلی</button>';
    
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        html += '<button onclick="goToPage(1)">1</button>';
        if (startPage > 2) {
            html += '<span style="padding:0 5px;">...</span>';
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        html += '<button onclick="goToPage(' + i + ')" class="' + (i === currentPage ? 'active-page' : '') + '">' + i + '</button>';
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += '<span style="padding:0 5px;">...</span>';
        }
        html += '<button onclick="goToPage(' + totalPages + ')">' + totalPages + '</button>';
    }
    
    html += '<button onclick="goToPage(' + (currentPage + 1) + ')" ' + (currentPage === totalPages ? 'disabled' : '') + '>بعدی</button>';
    
    container.innerHTML = html;
}

function goToPage(page) {
    let filtered = requests.filter(r => r.status === 'pending');
    let totalPages = Math.ceil(filtered.length / itemsPerPage);
    
    if (page < 1 || page > totalPages) {
        return;
    }
    currentPage = page;
    renderRequestsList();
}

function approveRequest(id) {
    let req = requests.find(r => r.id === id);
    if (req && req.status === 'pending') {
        req.status = 'approved';
        updateStats();
        currentPage = 1;
        renderRequestsList();
        alert('✅ درخواست ' + req.name + ' تایید شد');
        if (currentRequestId === id && document.getElementById('detailsView').style.display === 'block') {
            backToList();
        }
    }
}

function rejectRequest(id) {
    let req = requests.find(r => r.id === id);
    if (req && confirm('آیا از رد درخواست ' + req.name + ' مطمئن هستید؟')) {
        req.status = 'rejected';
        updateStats();
        currentPage = 1;
        renderRequestsList();
        alert('❌ درخواست ' + req.name + ' رد شد');
        if (currentRequestId === id && document.getElementById('detailsView').style.display === 'block') {
            backToList();
        }
    }
}

function openEditModal(id) {
    editRequestId = id;
    let req = requests.find(r => r.id === id);
    if (!req) return;

    document.getElementById('editName').value = req.name;
    document.getElementById('editPresident').value = req.president;
    document.getElementById('editPresidentPhone').value = req.presidentPhone;
    document.getElementById('editUniPhone').value = req.uniPhone;
    document.getElementById('editProvince').value = req.province;
    document.getElementById('editCity').value = req.city;
    document.getElementById('editAddress').value = req.address;
    document.getElementById('editStatus').value = req.status;

    document.getElementById('editModal').style.display = 'flex';
}

function saveEdit() {
    let req = requests.find(r => r.id === editRequestId);
    if (req) {
        req.name = document.getElementById('editName').value;
        req.president = document.getElementById('editPresident').value;
        req.presidentPhone = document.getElementById('editPresidentPhone').value;
        req.uniPhone = document.getElementById('editUniPhone').value;
        req.province = document.getElementById('editProvince').value;
        req.city = document.getElementById('editCity').value;
        req.address = document.getElementById('editAddress').value;
        req.status = document.getElementById('editStatus').value;

        updateStats();
        currentPage = 1;
        renderRequestsList();
        
        if (currentRequestId === editRequestId && document.getElementById('detailsView').style.display === 'block') {
            showDetails(editRequestId);
        }
        
        closeEditModal();
        alert('✅ اطلاعات دانشگاه با موفقیت به روز شد');
    }
}

function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
    editRequestId = null;
}

function showDetails(id) {
    currentRequestId = id;
    let req = requests.find(r => r.id === id);
    if (!req) return;

    let sportsHtml = '';
    for (let i = 0; i < req.sports.length; i++) {
        sportsHtml += '<span class="sport-tag">' + req.sports[i] + '</span>';
    }

    let facilitiesHtml = '';
    for (let i = 0; i < req.facilities.length; i++) {
        facilitiesHtml += '<span class="facility-tag">' + req.facilities[i] + '</span>';
    }

    let imagesHtml = '';
    if (req.images && req.images.length > 0) {
        for (let i = 0; i < req.images.length; i++) {
            imagesHtml += '<img src="' + req.images[i] + '" class="gallery-img" onerror="this.style.display=\'none\'">';
        }
    } else {
        imagesHtml = '<div class="gallery-img" style="display:flex;">📷 تصویری آپلود نشده</div>';
    }

    let detailsHtml = `
        <h2 class="details-title">📌 جزئیات درخواست دانشگاه ${req.name}</h2>
        <div class="details-grid">
            <div class="detail-item"><div class="detail-label">نام دانشگاه</div><div class="detail-value">${req.name}</div></div>
            <div class="detail-item"><div class="detail-label">رئیس دانشگاه</div><div class="detail-value">${req.president}</div></div>
            <div class="detail-item"><div class="detail-label">شماره رئیس دانشگاه</div><div class="detail-value">${req.presidentPhone}</div></div>
            <div class="detail-item"><div class="detail-label">تلفن دانشگاه</div><div class="detail-value">${req.uniPhone}</div></div>
            <div class="detail-item"><div class="detail-label">استان</div><div class="detail-value">${req.province}</div></div>
            <div class="detail-item"><div class="detail-label">شهر</div><div class="detail-value">${req.city}</div></div>
            <div class="detail-item"><div class="detail-label">آدرس دانشگاه</div><div class="detail-value">${req.address}</div></div>
            <div class="detail-item"><div class="detail-label">تاریخ ثبت درخواست</div><div class="detail-value">${req.date}</div></div>
            <div class="detail-item"><div class="detail-label">وضعیت</div><div class="detail-value"><span class="status-badge status-pending">در انتظار تایید</span></div></div>
        </div>
        
        <div class="detail-item" style="margin-bottom:20px;">
            <div class="detail-label">⚽ ورزش‌های قابل اجرا در سالن</div>
            <div class="sports-list">${sportsHtml || 'هیچ ورزشی انتخاب نشده'}</div>
        </div>
        
        <div class="detail-item" style="margin-bottom:20px;">
            <div class="detail-label">🏟️ امکانات جانبی دانشگاه</div>
            <div class="facilities-list">${facilitiesHtml || 'هیچ امکاناتی انتخاب نشده'}</div>
        </div>
        
        <div class="detail-item">
            <div class="detail-label">🖼️ تصاویر آپلود شده</div>
            <div class="images-gallery">${imagesHtml}</div>
        </div>
    `;

    detailsHtml += `
        <div style="margin-top:30px; display:flex; gap:15px; justify-content:center; flex-wrap:wrap;">
            <button class="btn-approve" onclick="approveFromDetail()">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                تایید درخواست
            </button>
            <button class="btn-reject" onclick="rejectFromDetail()">
                <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                رد درخواست
            </button>
        </div>
    `;

    document.getElementById('detailsContainer').innerHTML = detailsHtml;
    
    document.getElementById('listView').style.display = 'none';
    document.getElementById('detailsView').style.display = 'block';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function approveFromDetail() {
    approveRequest(currentRequestId);
    if (document.getElementById('detailsView').style.display === 'block') {
        backToList();
    }
}

function rejectFromDetail() {
    rejectRequest(currentRequestId);
    if (document.getElementById('detailsView').style.display === 'block') {
        backToList();
    }
}

function backToList() {
    document.getElementById('detailsView').style.display = 'none';
    document.getElementById('listView').style.display = 'block';
    currentPage = 1;
    renderRequestsList();
    updateStats();
}

function logout() {
    if (confirm('آیا از خروج از پنل مطمئن هستید؟')) {
        window.location.href = 'main_index.html';
    }
}

let menuToggle = document.getElementById('menuToggleBtn');
let sidebar = document.getElementById('sidebarMenu');
let overlay = document.getElementById('sidebarOverlay');

if (menuToggle) {
    menuToggle.onclick = function() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

if (overlay) {
    overlay.onclick = function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
});

window.onclick = function(event) {
    let modal = document.getElementById('editModal');
    if (event.target === modal) {
        closeEditModal();
    }
}

let profileBtn = document.getElementById('profileBtn');
let profileDropdown = document.getElementById('profileDropdown');

if (profileBtn) {
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });
}

document.addEventListener('click', function(event) {
    if (profileDropdown && profileDropdown.classList.contains('show')) {
        if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.remove('show');
        }
    }
});

let userName = localStorage.getItem('adminName') || 'نام ادمین';
let dropdownName = document.getElementById('dropdownUserName');
if (dropdownName) {
    dropdownName.textContent = userName;
}

updateStats();
renderRequestsList();