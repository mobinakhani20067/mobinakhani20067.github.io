function getSubjectIcon(subject) {
    if(subject === 'پرسش') {
        return '<svg class="subject-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>';
    } else if(subject === 'پشتیبانی') {
        return '<svg class="subject-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.8"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>';
    } else {
        return '<svg class="subject-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';
    }
}

function getStatusIcon(status) {
    if(status === 'خوانده شده') {
        return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
    } else if(status === 'خوانده نشده') {
        return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="none"/></svg>';
    } else {
        return '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
    }
}

let commentsData = [
    { id: 'MSG-001', name: 'زهرا یاسینی', email: 'z.yasini@example.com', subject: 'پشتیبانی', message: 'ورود به سایت مشکل دارد. لطفا راهنمایی کنید', status: 'خوانده نشده', date: '1405/02/25' },
    { id: 'MSG-002', name: 'رها امینی', email: 'r.amini@example.com', subject: 'نظرات', message: 'سایت بسیار عالی است. دستتون درد نکنه', status: 'خوانده شده', date: '1405/02/24' },
    { id: 'MSG-003', name: 'علی رضایی', email: 'a.rezaei@example.com', subject: 'پرسش', message: 'چگونه میتوانم کمد رزرو کنم؟', status: 'پاسخ داده شده', date: '1405/02/23', reply: 'با سلام، برای رزرو کمد به بخش رزرو کمد مراجعه کنید.', replyDate: '1405/02/24' },
    { id: 'MSG-004', name: 'سارا محمدی', email: 's.mohammadi@example.com', subject: 'پشتیبانی', message: 'رمز عبور خود را فراموش کرده ام', status: 'خوانده نشده', date: '1405/02/22' },
    { id: 'MSG-005', name: 'رضا کریمی', email: 'r.karimi@example.com', subject: 'نظرات', message: 'برنامه غذایی عالی بود، ممنون', status: 'خوانده شده', date: '1405/02/21' },
    { id: 'MSG-006', name: 'مریم حسینی', email: 'm.hosseini@example.com', subject: 'پرسش', message: 'ساعت کلاس های ورزشی از چه ساعتی است؟', status: 'پاسخ داده شده', date: '1405/02/20', reply: 'کلاس‌های ورزشی از ساعت 8 صبح تا 8 شب برگزار می‌شود.', replyDate: '1405/02/21' },
    { id: 'MSG-007', name: 'حسین نوری', email: 'h.nouri@example.com', subject: 'پشتیبانی', message: 'امکان تغییر رمز عبور وجود ندارد', status: 'خوانده نشده', date: '1405/02/19' },
    { id: 'MSG-008', name: 'الهام شریفی', email: 'e.sharifi@example.com', subject: 'نظرات', message: 'کیفیت خدمات بسیار خوب است', status: 'خوانده شده', date: '1405/02/18' },
    { id: 'MSG-009', name: 'محمد جعفری', email: 'm.jafari@example.com', subject: 'پرسش', message: 'آیا میتوانم چند کمد همزمان رزرو کنم؟', status: 'پاسخ داده شده', date: '1405/02/17', reply: 'خیر، هر کاربر فقط می‌تواند یک کمد رزرو کند.', replyDate: '1405/02/18' },
    { id: 'MSG-010', name: 'فاطمه احمدی', email: 'f.ahmadi@example.com', subject: 'پشتیبانی', message: 'پیام من نمایش داده نمیشود', status: 'خوانده نشده', date: '1405/02/16' },
    { id: 'MSG-011', name: 'امیر موسوی', email: 'a.mousavi@example.com', subject: 'نظرات', message: 'برنامه ورزشی عالی بود، سپاسگزارم', status: 'خوانده شده', date: '1405/02/15' }
];

let filteredData = [];
let currentPage = 1;
const rowsPerPage = 8;
let currentEditId = null;

const searchInput = document.getElementById('searchInput');
const subjectFilter = document.getElementById('subjectFilter');
const statusFilter = document.getElementById('statusFilter');
const tableBody = document.getElementById('tableBody');
const noDataMsg = document.getElementById('noDataMessage');

function getStatusText(status) {
    switch(status) {
        case 'خوانده شده': return { text: 'خوانده شده', class: 'status-resolved' };
        case 'خوانده نشده': return { text: 'خوانده نشده', class: 'status-pending' };
        case 'پاسخ داده شده': return { text: 'پاسخ داده شده', class: 'status-in-progress' };
        default: return { text: status, class: '' };
    }
}

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const selectedSubject = subjectFilter.value;
    const selectedStatus = statusFilter.value;
    
    filteredData = commentsData.filter(item => {
        const matchSearch = item.id.toLowerCase().includes(searchText) || item.name.toLowerCase().includes(searchText) || item.email.toLowerCase().includes(searchText);
        const matchSubject = selectedSubject === '' || item.subject === selectedSubject;
        const matchStatus = selectedStatus === '' || item.status === selectedStatus;
        return matchSearch && matchSubject && matchStatus;
    });
    
    currentPage = 1;
    renderTable();
}

function renderTable() {
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);
    
    if(pageData.length === 0) {
        noDataMsg.style.display = 'block';
        document.getElementById('paginationControls').innerHTML = '';
        return;
    }
    noDataMsg.style.display = 'none';
    
    pageData.forEach(comment => {
        let row = document.createElement('tr');
        let statusInfo = getStatusText(comment.status);
        let subjectIcon = getSubjectIcon(comment.subject);
        let statusIcon = getStatusIcon(comment.status);
        
        row.innerHTML = `
            <td style="cursor:pointer; color:#2c5a2e; text-decoration:underline;" onclick="openCommentDetails('${comment.id}')">${comment.id}</td>
            <td>${comment.name}</td>
            <td>${comment.email}</td>
            <td>${subjectIcon} ${comment.subject}</td>
            <td><span class="status-badge ${statusInfo.class}">${statusIcon} ${statusInfo.text}</span></td>
            <td>${comment.date}</td>
            <td><a href="#" onclick="openCommentDetails('${comment.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/>
                </svg>
                جزئیات
            </a></td>
        `;
        tableBody.appendChild(row);
    });
    
    updatePaginationButtons();
}

function updatePaginationButtons() {
    const paginationDiv = document.getElementById('paginationControls');
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    paginationDiv.innerHTML = '';
    
    if(totalPages <= 1) return;
    
    const prevBtn = document.createElement('button');
    prevBtn.innerText = 'قبلی';
    prevBtn.onclick = () => changePage(currentPage - 1);
    paginationDiv.appendChild(prevBtn);
    
    for(let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        if(i === currentPage) btn.classList.add('active');
        btn.onclick = () => changePage(i);
        paginationDiv.appendChild(btn);
    }
    
    const nextBtn = document.createElement('button');
    nextBtn.innerText = 'بعدی';
    nextBtn.onclick = () => changePage(currentPage + 1);
    paginationDiv.appendChild(nextBtn);
}

function changePage(page) {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if(page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable();
    }
}

function openCommentDetails(commentId) {
    const comment = commentsData.find(c => c.id === commentId);
    if(comment) {
        currentEditId = commentId;
        document.getElementById('detailId').value = comment.id;
        document.getElementById('detailName').value = comment.name;
        document.getElementById('detailEmail').value = comment.email;
        document.getElementById('detailSubject').value = comment.subject;
        document.getElementById('detailDate').value = comment.date;
        document.getElementById('detailMessage').value = comment.message;
        document.getElementById('detailStatus').value = comment.status;
        document.getElementById('replyMessage').value = '';
        
        if(comment.reply) {
            document.getElementById('replyDisplay').style.display = 'flex';
            document.getElementById('oldReply').value = comment.reply;
        } else {
            document.getElementById('replyDisplay').style.display = 'none';
        }
        
        document.getElementById('detailModal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
    currentEditId = null;
}

function saveCommentStatus() {
    if(!currentEditId) return;
    const newStatus = document.getElementById('detailStatus').value;
    const index = commentsData.findIndex(c => c.id === currentEditId);
    if(index !== -1) {
        commentsData[index].status = newStatus;
        alert('وضعیت پیام با موفقیت تغییر کرد');
        closeModal();
        applyFilters();
    }
}

function sendReply() {
    if(!currentEditId) return;
    const replyText = document.getElementById('replyMessage').value.trim();
    const comment = commentsData.find(c => c.id === currentEditId);
    
    if(!replyText) {
        alert('لطفا متن پاسخ را وارد کنید');
        return;
    }
    
    const index = commentsData.findIndex(c => c.id === currentEditId);
    if(index !== -1) {
        commentsData[index].reply = replyText;
        commentsData[index].replyDate = new Date().toLocaleDateString('fa-IR');
        commentsData[index].status = 'پاسخ داده شده';
    }
    
    alert(`پاسخ شما ذخیره و به ایمیل ${comment.email} ارسال شد.\n\nمتن پاسخ:\n${replyText}`);
    
    document.getElementById('replyMessage').value = '';
    closeModal();
    applyFilters();
}

searchInput.addEventListener('input', applyFilters);
subjectFilter.addEventListener('change', applyFilters);
statusFilter.addEventListener('change', applyFilters);

window.onclick = function(event) {
    let modal = document.getElementById('detailModal');
    if(event.target === modal) closeModal();
}

window.openCommentDetails = openCommentDetails;
window.closeModal = closeModal;
window.saveCommentStatus = saveCommentStatus;
window.sendReply = sendReply;

applyFilters();
