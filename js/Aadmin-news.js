let newsList = [
    {
        id: 1,
        title: "ثبت بیش از صد دانشگاه در کمتر از یک هفته",
        content: "در کمتر از یک هفته بیش از صد دانشگاه در سایت ثبت شده اند و به آنها سایت تعلق گرفته و در حال استفاده از سایت هستند",
        image: "",
        date: "1405/03/20",
        status: "active"
    },
    {
        id: 2,
        title: "از امکانات ورزشی دانشگاه به راحتی استفاده کنید",
        content: "سایت دانشگاه خود را جستجو کرده و سپس وارد آن شوید و از امکانات سالن ورزشی دانشگاه خود به راحتی استفاده کنید",
        image: "",
        date: "1405/03/15",
        status: "active"
    },
    {
        id: 3,
        title: "قابل توجه روسای دانشگاه های کشور",
        content: "با ثبت نام در سایت و وارد کردن مشخصات خواسته شده، صاب سایت شخصی سازی شده برای امور ورزشی دانشگاه خود بشوید",
        image: "",
        date: "1405/03/14",
        status: "active"
    },
	{
        id: 4,
        title: "",
        content: "",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_VlmJF7jQJyVHaloLBDBJiMPD9k5D5PRw2ROVfNnzBQzkO1T5i8a-3w&s=10",
        date: "1405/03/26",
        status: "active"
    }
	
];

let nextNewsId = 5;
let currentNewsId = null;
let editNewsId = null;
let currentImageBase64 = "";

function updateStats() {
    document.getElementById('totalNews').innerText = newsList.length;
    document.getElementById('activeNews').innerText = newsList.filter(n => n.status === 'active').length;
    document.getElementById('inactiveNews').innerText = newsList.filter(n => n.status === 'inactive').length;
}

function renderNewsList() {
    let tbody = document.getElementById('newsTableBody');
    if (newsList.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">هیچ خبری یافت نشد</td></tr>';
        return;
    }
    let html = '';
    for (let i = newsList.length - 1; i >= 0; i--) {
        let n = newsList[i];
        let statusClass = n.status === 'active' ? 'status-active' : 'status-inactive';
        let statusText = n.status === 'active' ? 'فعال' : 'غیرفعال';
        let imageHtml = n.image ? '<img src="' + n.image + '" width="40" height="40" style="border-radius:12px; object-fit:cover;">' : '<svg width="40" height="40" fill="#999" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>';
        html += '<tr>' +
            '<td>' + imageHtml + '</td>' +
            '<td>' + n.title + '</td>' +
            '<td>' + n.date + '</td>' +
            '<td><span class="status-badge ' + statusClass + '">' + statusText + '</span></td>' +
            '<td><div class="actions-cell">' +
                '<button class="btn-details" onclick="showDetails(' + n.id + ')"><svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg><span>جزئیات</span></button>' +
                '<button class="btn-edit" onclick="editNews(' + n.id + ')"><svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg><span>ویرایش</span></button>' +
                '<button class="btn-delete" onclick="deleteNews(' + n.id + ')"><svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg><span>حذف</span></button>' +
            '</div></td></tr>';
    }
    tbody.innerHTML = html;
}

function showDetails(id) {
    currentNewsId = id;
    let news = newsList.find(n => n.id === id);
    if (!news) return;
    let statusText = news.status === 'active' ? 'فعال' : 'غیرفعال';
    let statusClass = news.status === 'active' ? 'status-active' : 'status-inactive';
    let imageHtml = news.image ? '<img src="' + news.image + '" class="news-image">' : '<div style="background:#f0f0f0; padding:40px; text-align:center; border-radius:16px;"><svg width="48" height="48" fill="#999" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg><br>تصویری برای این خبر آپلود نشده است</div>';
    let detailsHtml = '<h2 class="details-title"><svg width="28" height="28" fill="#1c542c" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/></svg>' + news.title + '</h2>' +
        '<div class="detail-item"><div class="detail-label"><svg width="18" height="18" fill="#1a472a" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>تاریخ انتشار</div><div class="detail-value">' + news.date + '</div></div>' +
        '<div class="detail-item"><div class="detail-label"><svg width="18" height="18" fill="#1a472a" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>وضعیت</div><div class="detail-value"><span class="status-badge ' + statusClass + '">' + statusText + '</span></div></div>' +
        '<div class="detail-item"><div class="detail-label"><svg width="18" height="18" fill="#1a472a" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>تصویر خبر</div><div class="detail-value">' + imageHtml + '</div></div>' +
        '<div class="detail-item"><div class="detail-label"><svg width="18" height="18" fill="#1a472a" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4v-2h4v2zm0-4H4v-2h4v2zm0-4H4V8h4v2zm12 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V8h8v2z"/></svg>متن خبر</div><div class="detail-value">' + news.content.replace(/\n/g, '<br>') + '</div></div>';
    detailsHtml += '<div style="margin-top:30px; display:flex; gap:15px; justify-content:center;"><button class="btn-edit" onclick="editNews(' + news.id + ')"><svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>ویرایش خبر</button></div>';
    document.getElementById('detailsContainer').innerHTML = detailsHtml;
    document.getElementById('listView').style.display = 'none';
    document.getElementById('detailsView').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openAddNewsModal() {
    editNewsId = null;
    document.getElementById('modalTitle').innerHTML = '<svg width="24" height="24" fill="#1c542c" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>افزودن خبر جدید';
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsContent').value = '';
    document.getElementById('newsStatus').value = 'active';
    document.getElementById('newsImage').value = '';
    document.getElementById('imagePreview').style.display = 'none';
    currentImageBase64 = '';
    document.getElementById('newsModal').style.display = 'flex';
}

function editNews(id) {
    editNewsId = id;
    let news = newsList.find(n => n.id === id);
    if (!news) return;
    document.getElementById('modalTitle').innerHTML = '<svg width="24" height="24" fill="#1c542c" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>ویرایش خبر';
    document.getElementById('newsTitle').value = news.title;
    document.getElementById('newsContent').value = news.content;
    document.getElementById('newsStatus').value = news.status;
    currentImageBase64 = news.image || '';
    if (news.image) {
        let preview = document.getElementById('imagePreview');
        preview.src = news.image;
        preview.style.display = 'block';
    } else {
        document.getElementById('imagePreview').style.display = 'none';
    }
    document.getElementById('newsImage').value = '';
    document.getElementById('newsModal').style.display = 'flex';
}

function previewImage() {
    let file = document.getElementById('newsImage').files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let preview = document.getElementById('imagePreview');
            preview.src = e.target.result;
            preview.style.display = 'block';
            currentImageBase64 = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function saveNews() {
    let title = document.getElementById('newsTitle').value.trim();
    let content = document.getElementById('newsContent').value.trim();
    let status = document.getElementById('newsStatus').value;
    if (!title) { alert('لطفاً عنوان خبر را وارد کنید'); return; }
    if (!content) { alert('لطفاً متن خبر را وارد کنید'); return; }
    let today = new Date().toLocaleDateString('fa-IR');
    if (editNewsId) {
        let news = newsList.find(n => n.id === editNewsId);
        if (news) {
            news.title = title;
            news.content = content;
            news.status = status;
            if (currentImageBase64) news.image = currentImageBase64;
            alert('✅ خبر با موفقیت ویرایش شد');
        }
    } else {
        let newNews = { id: nextNewsId++, title: title, content: content, image: currentImageBase64 || "", date: today, status: status };
        newsList.push(newNews);
        alert('✅ خبر جدید با موفقیت اضافه شد');
    }
    updateStats();
    renderNewsList();
    closeNewsModal();
    if (document.getElementById('detailsView').style.display === 'block') { backToList(); }
}

function deleteNews(id) {
    if (confirm('آیا از حذف این خبر مطمئن هستید؟')) {
        newsList = newsList.filter(n => n.id !== id);
        updateStats();
        renderNewsList();
        alert('❌ خبر حذف شد');
        if (currentNewsId === id && document.getElementById('detailsView').style.display === 'block') { backToList(); }
    }
}

function closeNewsModal() {
    document.getElementById('newsModal').style.display = 'none';
    editNewsId = null;
    currentImageBase64 = '';
}

function backToList() {
    document.getElementById('detailsView').style.display = 'none';
    document.getElementById('listView').style.display = 'block';
    renderNewsList();
    updateStats();
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
    let modal = document.getElementById('newsModal');
    if (event.target === modal) { closeNewsModal(); }
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
renderNewsList();