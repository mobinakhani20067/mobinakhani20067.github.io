let reportsData = [
    { id: 'TCK-001', name: 'زهرا یاسینی', studentId: '98123456', category: 'کمبود امکانات', desc: 'دستگاه اسکوات موجود نیست', status: 'در حال بررسی', date: '1405/02/25' },
    { id: 'TCK-002', name: 'رها امینی', studentId: '98123457', category: 'نظافت', desc: 'سالن بدنسازی تمیز نیست', status: 'برطرف شده', date: '1405/02/24' },
    { id: 'TCK-003', name: 'علی رضایی', studentId: '98123458', category: 'ایمنی', desc: 'کپسول آتش نشانی خراب است', status: 'رد شده', date: '1405/02/23' },
    { id: 'TCK-004', name: 'سارا محمدی', studentId: '98123459', category: 'آسیب وسایل', desc: 'دستگاه تردمیل صدا می‌دهد', status: 'دیده نشده', date: '1405/02/22' },
    { id: 'TCK-005', name: 'رضا کریمی', studentId: '98123460', category: 'کمبود امکانات', desc: 'تعداد دمبل‌ها کافی نیست', status: 'در حال بررسی', date: '1405/02/21' },
    { id: 'TCK-006', name: 'مریم حسینی', studentId: '98123461', category: 'نظافت', desc: 'رختکن دوش آب گرم ندارد', status: 'برطرف شده', date: '1405/02/20' },
    { id: 'TCK-007', name: 'حسین نوری', studentId: '98123462', category: 'ایمنی', desc: 'کف سالن لغزنده است', status: 'دیده نشده', date: '1405/02/19' },
    { id: 'TCK-008', name: 'الهام شریفی', studentId: '98123463', category: 'آسیب وسایل', desc: 'توپ والیبال باد ندارند', status: 'برطرف شده', date: '1405/02/18' }
];

let filteredData = [];
let currentPage = 1;
const rowsPerPage = 8;
let currentEditId = null;

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const statusFilter = document.getElementById('statusFilter');
const tableBody = document.getElementById('tableBody');
const noDataMsg = document.getElementById('noDataMessage');

function getStatusIcon(status) {
    switch(status) {
        case 'در حال بررسی':
            return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>';
        case 'برطرف شده':
            return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        case 'رد شده':
            return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="18" y1="6" x2="6" y2="18"/></svg>';
        case 'دیده نشده':
            return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/><line x1="12" y1="8" x2="12" y2="16"/></svg>';
        default:
            return '';
    }
}

function getStatusClass(status) {
    switch(status) {
        case 'در حال بررسی': return 'status-in-progress';
        case 'برطرف شده': return 'status-resolved';
        case 'رد شده': return 'status-rejected';
        case 'دیده نشده': return 'status-pending';
        default: return '';
    }
}

function getCategoryIcon(category) {
    if(category === 'کمبود امکانات') {
        return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>';
    } else if(category === 'نظافت') {
        return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.8"><path d="M3 6h18M3 12h18M3 18h18"/><path d="M8 6v12M16 6v12"/></svg>';
    } else if(category === 'ایمنی') {
        return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.8"><path d="M12 2L3 7l9 5 9-5-9-5z"/><path d="M3 7v5l9 5 9-5V7"/></svg>';
    } else {
        return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>';
    }
}

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedStatus = statusFilter.value;
    
    filteredData = reportsData.filter(item => {
        const matchSearch = item.id.toLowerCase().includes(searchText) || 
                            item.name.toLowerCase().includes(searchText) || 
                            item.studentId.includes(searchText);
        const matchCategory = selectedCategory === '' || item.category === selectedCategory;
        const matchStatus = selectedStatus === '' || item.status === selectedStatus;
        return matchSearch && matchCategory && matchStatus;
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
    
    pageData.forEach(report => {
        let row = document.createElement('tr');
        let statusClass = getStatusClass(report.status);
        let statusIcon = getStatusIcon(report.status);
        let categoryIcon = getCategoryIcon(report.category);
        
        row.innerHTML = `
            <td style="cursor:pointer; color:#2c5a2e; text-decoration:underline;" onclick="openReportDetails('${report.id}')">${report.id}</td>
            <td>${report.name}</td>
            <td>${report.studentId}</td>
            <td>${categoryIcon} ${report.category}</td>
            <td><span class="status-badge ${statusClass}">${statusIcon} ${report.status}</span></td>
            <td>${report.date}</td>
        `;
        row.addEventListener('click', () => openReportDetails(report.id));
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

function openReportDetails(reportId) {
    const report = reportsData.find(r => r.id === reportId);
    if(report) {
        currentEditId = reportId;
        document.getElementById('detailId').value = report.id;
        document.getElementById('detailUser').value = report.name;
        document.getElementById('detailStudentId').value = report.studentId;
        document.getElementById('detailCategory').value = report.category;
        document.getElementById('detailDesc').value = report.desc;
        document.getElementById('detailStatus').value = report.status;
        
        document.getElementById('editModal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
    currentEditId = null;
}

function saveChanges() {
    if(!currentEditId) return;
    const newStatus = document.getElementById('detailStatus').value;
    const index = reportsData.findIndex(r => r.id === currentEditId);
    if(index !== -1) {
        reportsData[index].status = newStatus;
        alert('وضعیت گزارش با موفقیت تغییر کرد');
        closeModal();
        applyFilters();
    }
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
statusFilter.addEventListener('change', applyFilters);

window.onclick = function(event) {
    let modal = document.getElementById('editModal');
    if(event.target === modal) closeModal();
}

window.openReportDetails = openReportDetails;
window.closeModal = closeModal;
window.saveChanges = saveChanges;

applyFilters();
