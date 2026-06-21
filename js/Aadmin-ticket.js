let tickets = [
    {
        id: "T1001",
        userName: "علی محمدی",
        subject: "مشکل در ثبت نام مسابقات",
        message: "سلام، هنگام ثبت نام در مسابقات فوتسال، سیستم خطای داخلی می‌دهد. لطفاً راهنمایی کنید.",
        date: "۱۴۰۴/۰۲/۲۵",
        status: "open",
        adminReply: ""
    },
    {
        id: "T1002",
        userName: "فاطمه کریمی",
        subject: "درخواست اطلاعات بیشتر",
        message: "برای شرکت در لیگ والیبال چه شرایطی وجود دارد؟ لطفاً آیین‌نامه را برای ما ارسال کنید.",
        date: "۱۴۰۴/۰۲/۲۴",
        status: "open",
        adminReply: ""
    },
    {
        id: "T1003",
        userName: "رضا حسینی",
        subject: "مشکل در آپلود مدارک",
        message: "هنگام آپلود مدارک ورزشگاه، خطای حجم فایل دریافت می‌کنیم. حداکثر حجم مجاز چقدر است؟",
        date: "۱۴۰۴/۰۲/۲۳",
        status: "closed",
        adminReply: "حداکثر حجم هر فایل ۵ مگابایت است. لطفاً تصاویر را فشرده کنید."
    },
    {
        id: "T1004",
        userName: "سارا رضایی",
        subject: "گزارش مشکل فنی",
        message: "پنل مدیریت دانشگاه ما نمایش داده نمی‌شود. لطفاً بررسی کنید.",
        date: "۱۴۰۴/۰۲/۲۲",
        status: "open",
        adminReply: ""
    },
    {
        id: "T1005",
        userName: "مهدی اکبری",
        subject: "استعلام وضعیت درخواست",
        message: "درخواست ثبت دانشگاه ما چند روز پیش ارسال شد، چه زمانی نتیجه اعلام می‌شود؟",
        date: "۱۴۰۴/۰۲/۲۱",
        status: "closed",
        adminReply: "درخواست شما در صف بررسی است، حداکثر تا ۴۸ ساعت آینده نتیجه اعلام می‌شود."
    },
    {
        id: "T1006",
        userName: "نرگس احمدی",
        subject: "پیشنهاد برگزاری مسابقه",
        message: "پیشنهاد می‌دهیم مسابقات تنیس روی میز بین دانشگاه‌های جنوب کشور برگزار شود.",
        date: "۱۴۰۴/۰۲/۲۰",
        status: "open",
        adminReply: ""
    }
];

let currentFilter = "all";
let currentTicketId = null;

function updateStats() {
    document.getElementById('totalTickets').innerText = tickets.length;
    document.getElementById('openTickets').innerText = tickets.filter(t => t.status === 'open').length;
    document.getElementById('closedTickets').innerText = tickets.filter(t => t.status === 'closed').length;
}

function filterTickets() {
    currentFilter = document.getElementById('filterSelect').value;
    renderTicketsList();
}

function renderTicketsList() {
    let filtered = tickets;
    if (currentFilter === 'open') {
        filtered = tickets.filter(t => t.status === 'open');
    } else if (currentFilter === 'closed') {
        filtered = tickets.filter(t => t.status === 'closed');
    }

    let tbody = document.getElementById('ticketsTableBody');
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">هیچ تیکتی یافت نشد</td></tr>';
        return;
    }

    let html = '';
    for (let i = 0; i < filtered.length; i++) {
        let t = filtered[i];
        let statusClass = t.status === 'open' ? 'status-open' : 'status-closed';
        let statusText = t.status === 'open' ? 'باز' : 'بسته شده';
        let isClosed = t.status === 'closed';
        
        html += '<tr>' +
            '<td style="font-weight:bold;">' + t.id + '</td>' +
            '<td>' + t.userName + '</td>' +
            '<td>' + t.subject + '</td>' +
            '<td>' + t.date + '</td>' +
            '<td><span class="status-badge ' + statusClass + '">' + statusText + '</span></td>' +
            '<td><div class="actions-cell">' +
                '<button class="btn-icon btn-details" onclick="showDetails(\'' + t.id + '\')">' +
                    '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>' +
                    '<span>جزئیات</span>' +
                '</button>' +
                '<button class="btn-icon btn-reply" onclick="openReplyModal(\'' + t.id + '\')" ' + (isClosed ? 'disabled style="opacity:0.5;cursor:not-allowed;"' : '') + '>' +
                    '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>' +
                    '<span>پاسخ</span>' +
                '</button>' +
            '</div></td></tr>';
    }
    tbody.innerHTML = html;
}

function showDetails(id) {
    currentTicketId = id;
    let ticket = tickets.find(t => t.id === id);
    if (!ticket) return;

    let statusClass = ticket.status === 'open' ? 'status-open' : 'status-closed';
    let statusText = ticket.status === 'open' ? 'باز' : 'بسته شده';
    let isClosed = ticket.status === 'closed';

    let detailsHtml = `
        <h2 class="details-title">
            <svg width="28" height="28" fill="#1c542c" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z"/></svg>
            تیکت ${ticket.id}
        </h2>
        <div class="detail-item">
            <div class="detail-label">نام کاربر</div>
            <div class="detail-value">${ticket.userName}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">موضوع</div>
            <div class="detail-value">${ticket.subject}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">تاریخ ثبت</div>
            <div class="detail-value">${ticket.date}</div>
        </div>
        <div class="detail-item">
            <div class="detail-label">وضعیت</div>
            <div class="detail-value"><span class="status-badge ${statusClass}">${statusText}</span></div>
        </div>
        <div class="detail-item">
            <div class="detail-label">متن پیام</div>
            <div class="detail-value">${ticket.message}</div>
        </div>
    `;
	window.scrollTo({ top: 0, behavior: 'smooth' });

    if (ticket.adminReply) {
        detailsHtml += `
            <div class="detail-item" style="background:#e8f5e8;">
                <div class="detail-label">پاسخ ادمین</div>
                <div class="detail-value">${ticket.adminReply}</div>
            </div>
        `;
    }

    if (!isClosed) {
        detailsHtml += `
            <div class="reply-box">
                <div class="detail-label">پاسخ به تیکت</div>
                <textarea id="detailReplyText" class="reply-textarea" placeholder="پاسخ خود را وارد کنید..."></textarea>
                <button class="btn-icon btn-reply" onclick="sendReplyFromDetail()" style="margin-top:15px;">
                    <svg width="14" height="14" fill="white" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    ارسال پاسخ
                </button>
            </div>
        `;
    }

    document.getElementById('detailsContainer').innerHTML = detailsHtml;
    
    document.getElementById('listView').style.display = 'none';
    document.getElementById('detailsView').style.display = 'block';
}

function openReplyModal(id) {
    currentTicketId = id;
    document.getElementById('replyContent').value = '';
    document.getElementById('replyModal').style.display = 'flex';
}

function sendReply() {
    let reply = document.getElementById('replyContent').value.trim();
    if (!reply) {
        alert('لطفاً متن پاسخ را وارد کنید');
        return;
    }

    let ticket = tickets.find(t => t.id === currentTicketId);
    if (ticket) {
        ticket.adminReply = reply;
        ticket.status = 'closed';
        updateStats();
        renderTicketsList();
        
        if (document.getElementById('detailsView').style.display === 'block' && currentTicketId === ticket.id) {
            showDetails(currentTicketId);
        }
        
        closeReplyModal();
        alert('✅ پاسخ با موفقیت ارسال شد و تیکت بسته شد.');
    }
}

function sendReplyFromDetail() {
    let reply = document.getElementById('detailReplyText').value.trim();
    if (!reply) {
        alert('لطفاً متن پاسخ را وارد کنید');
        return;
    }

    let ticket = tickets.find(t => t.id === currentTicketId);
    if (ticket) {
        ticket.adminReply = reply;
        ticket.status = 'closed';
        updateStats();
        renderTicketsList();
        showDetails(currentTicketId);
        alert('✅ پاسخ با موفقیت ارسال شد و تیکت بسته شد.');
    }
}

function closeReplyModal() {
    document.getElementById('replyModal').style.display = 'none';
    currentTicketId = null;
}

function backToList() {
    document.getElementById('detailsView').style.display = 'none';
    document.getElementById('listView').style.display = 'block';
    renderTicketsList();
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
    let modal = document.getElementById('replyModal');
    if (event.target === modal) {
        closeReplyModal();
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
renderTicketsList();