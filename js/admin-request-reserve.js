let allRequests = [
    { name: "سارا مولایی", date: "1405/02/29", day: "سه شنبه", time: "08:00 تا 10:00", uni: "دانشگاه قم", type: "کلاس دانشگاه", activity: "والیبال", status: "تایید شده" },
    { name: "زهرا فروغی", date: "1405/02/30", day: "چهارشنبه", time: "18:00 تا 20:00", uni: "دانشگاه آزاد قم", type: "تمرین", activity: "فوتبال", status: "در انتظار" },
    { name: "نازنین شغیعی", date: "1405/02/27", day: "یکشنبه", time: "18:00 تا 20:00", uni: "دانشگاه صنعتی قم", type: "تمرین", activity: "بسکتبال", status: "رد شده" },
    { name: "علیا رضایی", date: "1405/02/28", day: "دوشنبه", time: "16:00 تا 18:00", uni: "دانشگاه قم", type: "مسابقات", activity: "پینگ پنگ", status: "تایید شده" },
    { name: "مریم احمدی", date: "1405/03/01", day: "پنجشنبه", time: "09:00 تا 11:00", uni: "دانشگاه آزاد قم", type: "جلسه", activity: "بدمینتون", status: "در انتظار" },
    { name: "محیا کریمی", date: "1405/03/02", day: "جمعه", time: "10:00 تا 12:00", uni: "دانشگاه صنعتی قم", type: "تمرین", activity: "والیبال", status: "تایید شده" },
    { name: "سحر نوری", date: "1405/03/03", day: "شنبه", time: "14:00 تا 16:00", uni: "دانشگاه قم", type: "کلاس", activity: "فوتبال", status: "رد شده" },
    { name: "ریحانه کاظمی", date: "1405/03/04", day: "یکشنبه", time: "18:00 تا 20:00", uni: "دانشگاه آزاد قم", type: "تمرین", activity: "پینگ پنگ", status: "در انتظار" },
    { name: "لیلا موسوی", date: "1405/03/05", day: "دوشنبه", time: "08:00 تا 10:00", uni: "دانشگاه صنعتی قم", type: "مسابقات", activity: "بسکتبال", status: "تایید شده" },
    { name: "حسنا جعفری", date: "1405/03/06", day: "سه شنبه", time: "16:00 تا 18:00", uni: "دانشگاه قم", type: "تمرین", activity: "بدمینتون", status: "در انتظار" },
    { name: "نگار صادقی", date: "1405/03/07", day: "چهارشنبه", time: "10:00 تا 12:00", uni: "دانشگاه آزاد قم", type: "کلاس", activity: "والیبال", status: "تایید شده" },
    { name: "آیدا حسینی", date: "1405/03/08", day: "پنجشنبه", time: "18:00 تا 20:00", uni: "دانشگاه صنعتی قم", type: "تمرین", activity: "فوتبال", status: "رد شده" }
];

let filteredRequests = [];
let currentPage = 1;
let currentEditIndex = null;
let currentEditId = null;
const itemsPerPage = 8;

function getStatusIcon(status) {
    switch(status) {
        case 'تایید شده':
            return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
        case 'در انتظار':
            return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
        case 'رد شده':
            return '<svg class="status-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="18" y1="6" x2="6" y2="18"/></svg>';
        default:
            return '';
    }
}

function renderTable() {
    const tbody = document.getElementById('requestTableBody');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredRequests.slice(start, end);
    const noDataMsg = document.getElementById('noDataMessage');
    
    tbody.innerHTML = '';
    if(filteredRequests.length === 0) {
        noDataMsg.style.display = 'block';
        noDataMsg.innerHTML = 'موردی یافت نشد';
        document.getElementById('paginationControls').innerHTML = '';
        return;
    }
    noDataMsg.style.display = 'none';
    
    pageData.forEach((item, idx) => {
        let row = tbody.insertRow();
        let statusClass = item.status === 'تایید شده' ? 'confirmed' : (item.status === 'رد شده' ? 'rejected' : 'waiting');
        let statusIcon = getStatusIcon(item.status);
        let statusText = item.status === 'تایید شده' ? 'تایید شده' : (item.status === 'رد شده' ? 'رد شده' : 'در انتظار');
        
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.date}</td>
            <td>${item.day}</td>
            <td>${item.time}</td>
            <td>${item.uni}</td>
            <td>${item.type}</td>
            <td>${item.activity}</td>
            <td><span class="status ${statusClass}">${statusIcon} ${statusText}</span></td>
            <td><a href="#" onclick="openModal(${start + idx})">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"/>
                </svg>
                جزئیات
            </a></td>
        `;
    });
    
    updatePagination();
}

function updatePagination() {
    const paginationDiv = document.getElementById('paginationControls');
    const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
    paginationDiv.innerHTML = '';
    
    if(totalPages <= 1) return;
    
    const prevBtn = document.createElement('button');
    prevBtn.innerText = 'قبلی';
    prevBtn.onclick = () => changePage(currentPage - 1);
    prevBtn.disabled = currentPage === 1;
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
    nextBtn.disabled = currentPage === totalPages;
    paginationDiv.appendChild(nextBtn);
}

function changePage(page) {
    const totalPages = Math.ceil(filteredRequests.length / itemsPerPage);
    if(page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable();
    }
}

function filterData() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const statusValue = document.getElementById('categoryFilter').value;
    
    filteredRequests = allRequests.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchText) || 
            item.date.includes(searchText) || 
            item.day.includes(searchText) ||
            item.activity.toLowerCase().includes(searchText);
        const matchesStatus = statusValue === '' || item.status === statusValue;
        return matchesSearch && matchesStatus;
    });
    
    currentPage = 1;
    renderTable();
}

function openModal(index) {
    const item = filteredRequests[index];
    if(!item) return;
    
    currentEditIndex = index;
    currentEditId = item.name + item.date;
    
    document.getElementById('detailName').value = item.name;
    document.getElementById('detailDate').value = item.date;

    document.getElementById('detailDay').value = item.day;
    document.getElementById('detailHour').value = item.time;
    document.getElementById('detailActivity').value = item.activity;
    document.getElementById('detailReserve').value = item.type;
    
    const statusSelect = document.getElementById('detailStatus');
    for(let i = 0; i < statusSelect.options.length; i++) {
        if(statusSelect.options[i].value === item.status) {
            statusSelect.selectedIndex = i;
            break;
        }
    }
    
    document.getElementById('editModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
    currentEditIndex = null;
    currentEditId = null;
}

function saveChanges() {
    if(currentEditIndex === null) return;
    
    const newStatus = document.getElementById('detailStatus').value;
    const item = filteredRequests[currentEditIndex];
    
    const originalIndex = allRequests.findIndex(r => r.name === item.name && r.date === item.date);
    if(originalIndex !== -1) {
        allRequests[originalIndex].status = newStatus;
    }
    
    filteredRequests[currentEditIndex].status = newStatus;
    
    alert('وضعیت درخواست با موفقیت تغییر کرد');
    closeModal();
    renderTable();
}

window.onclick = function(event) {
    let modal = document.getElementById('editModal');
    if(event.target === modal) closeModal();
}

document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('categoryFilter').addEventListener('change', filterData);

filteredRequests = [...allRequests];
renderTable();

window.openModal = openModal;
window.closeModal = closeModal;
window.saveChanges = saveChanges;
