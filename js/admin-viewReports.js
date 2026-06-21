const reportsData = [
    { id: 'TKT-001', user: 'زهرا یاسینی', studentId: '03184578664', category: 'کمبود امکانات', status: 'در حال بررسی', date: '25 اردیبهشت 1405' },
    { id: 'TKT-002', user: 'رها امینی', studentId: '03184578665', category: 'نظافت', status: 'برطرف شده', date: '25 اردیبهشت 1405' },
    { id: 'TKT-003', user: 'علی رضایی', studentId: '03184578666', category: 'آسیب وسایل', status: 'رد شده', date: '25 اردیبهشت 1405' },
    { id: 'TKT-004', user: 'سارا محمدی', studentId: '03184578667', category: 'ایمنی', status: 'دیده نشده', date: '26 اردیبهشت 1405' },
    { id: 'TKT-005', user: 'رضا کریمی', studentId: '03184578668', category: 'کمبود امکانات', status: 'در حال بررسی', date: '26 اردیبهشت 1405' },
    { id: 'TKT-006', user: 'مریم حسینی', studentId: '03184578669', category: 'نظافت', status: 'برطرف شده', date: '26 اردیبهشت 1405' },
    { id: 'TKT-007', user: 'حسین نوری', studentId: '03184578670', category: 'آسیب وسایل', status: 'رد شده', date: '27 اردیبهشت 1405' },
    { id: 'TKT-008', user: 'الهام شریفی', studentId: '03184578671', category: 'ایمنی', status: 'دیده نشده', date: '27 اردیبهشت 1405' },
    { id: 'TKT-009', user: 'محمد جعفری', studentId: '03184578672', category: 'نظافت', status: 'در حال بررسی', date: '28 اردیبهشت 1405' },
    { id: 'TKT-010', user: 'فاطمه احمدی', studentId: '03184578673', category: 'کمبود امکانات', status: 'برطرف شده', date: '28 اردیبهشت 1405' },
    { id: 'TKT-011', user: 'امیر موسوی', studentId: '03184578674', category: 'آسیب وسایل', status: 'رد شده', date: '29 اردیبهشت 1405' },
];

let filteredData = [];
let currentPage = 1;
const rowsPerPage = 7;

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const statusFilter = document.getElementById('statusFilter');
const tableBody = document.getElementById('tableBody');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');
const noDataMsg = document.getElementById('noDataMessage');
const paginationControls = document.getElementById('paginationControls');

const editModal = document.getElementById('editModal');
const detailIdInput = document.getElementById('detailId');
const detailUserInput = document.getElementById('detailUser');
const detailStudentIdInput = document.getElementById('detailStudentId');
const detailCategoryInput = document.getElementById('detailCategory');
const detailStatusSelect = document.getElementById('detailStatus');
const detailDescInput = document.getElementById('detailDesc'); 

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedStatus = statusFilter.value;

    filteredData = reportsData.filter(item => {
        const matchSearch = item.id.toLowerCase().includes(searchText) || item.user.toLowerCase().includes(searchText) ||item.studentId.includes(searchText);
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
    const paginatedItems = filteredData.slice(start, end);

    if (paginatedItems.length === 0) {
        noDataMsg.style.display = 'block';
        paginationControls.style.display = 'none';
        return;
    } else {
        noDataMsg.style.display = 'none';
        paginationControls.style.display = 'flex';
    }

    paginatedItems.forEach(report => {
        const row = document.createElement('tr');
        
        let statusClass = '';
        switch(report.status) {
            case 'در حال بررسی': statusClass = 'status-in-progress'; break;
            case 'برطرف شده': statusClass = 'status-resolved'; break;
            case 'رد شده': statusClass = 'status-rejected'; break;
            case 'دیده نشده': statusClass = 'status-pending'; break;
        }

        row.innerHTML = `
            <td style="cursor: pointer; color: blue; text-decoration: underline;" onclick="openTicketDetails('${report.id}')">${report.id}</td>
            <td>${report.user}</td>
            <td>${report.studentId}</td>
            <td>${report.category}</td>
            <td><span class="status-badge ${statusClass}">${report.status}</span></td>
            <td>${report.date}</td>
        `;
        tableBody.appendChild(row);
    });

    updatePaginationUI();
}

function openTicketDetails(ticketId) {
    const ticket = reportsData.find(t => t.id === ticketId);
    
    if (ticket) {
        detailIdInput.value = ticket.id;
        detailUserInput.value = ticket.user;
        detailStudentIdInput.value = ticket.studentId;
        detailCategoryInput.value = ticket.category;
        detailStatusSelect.value = ticket.status;
        detailDescInput.value = "";
        editModal.style.display = "block";
    }
}
function closeModal() {
    editModal.style.display = "none";
}
function saveChanges() {
    const updatedId = detailIdInput.value;
    const newStatus = detailStatusSelect.value;
        const index = reportsData.findIndex(t => t.id === updatedId);
    if(index !== -1) {
        reportsData[index].status = newStatus;
        alert("تغییرات با موفقیت ذخیره شد.");
        closeModal();
        applyFilters();
    }
}

function updatePaginationUI() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    pageInfo.textContent = `صفحه ${currentPage} از ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages || totalPages === 0;
}

function changePage(direction) {
    currentPage += direction;
    renderTable();
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
statusFilter.addEventListener('change', applyFilters);

applyFilters();
