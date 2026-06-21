
let reservationsData = [
    {id:1, locker:"04", name:"نازنین دولیر", type:"روزانه", start:"1405/2/27", end:"1405/2/27"},
    {id:2, locker:"24", name:"مطهره حمیدی", type:"طولانی مدت", start:"1405/2/27", end:"1405/3/27"},
    {id:3, locker:"13", name:"مبینا اسدی", type:"طولانی مدت", start:"1405/2/27", end:"1405/3/27"},
    {id:4, locker:"36", name:"مبینا اسدی", type:"طولانی مدت", start:"1405/2/27", end:"1405/3/27"},
    {id:5, locker:"19", name:"مبینا اسدی", type:"طولانی مدت", start:"1405/2/27", end:"1405/3/27"},
    {id:6, locker:"48", name:"سارا محمدی", type:"روزانه", start:"1405/2/28", end:"1405/2/28"},
    {id:7, locker:"50", name:"فاطمه رضایی", type:"روزانه", start:"1405/2/29", end:"1405/2/29"},
    {id:8, locker:"16", name:"مریم کریمی", type:"طولانی مدت", start:"1405/2/27", end:"1405/3/27"},
    {id:9, locker:"44", name:"زهرا احمدی", type:"طولانی مدت", start:"1405/2/27", end:"1405/3/27"},
    {id:10, locker:"29", name:"الناز حیدری", type:"روزانه", start:"1405/2/27", end:"1405/3/27"},
    {id:11, locker:"14", name:"نگار موسوی", type:"طولانی مدت", start:"1405/2/27", end:"1405/3/27"}
];

let currentPage = 1;
let filteredData = [];
let currentEditId = null;
const rowsPerPage = 10;

function renderTable() {
    const tbody = document.getElementById('reserveBody');
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);
    
    tbody.innerHTML = '';
    
    if(pageData.length === 0) {
        tbody.innerHTML = '';
        const noDataMsg = document.getElementById('noDataMessage');
        noDataMsg.style.display = 'block';
        noDataMsg.innerHTML = 'موردی یافت نشد';
        document.getElementById('paginationControls').innerHTML = '';
        return;
    }
    const noDataMsg = document.getElementById('noDataMessage');
    noDataMsg.style.display = 'none';
    
    pageData.forEach(item => {
        let row = tbody.insertRow();
        row.setAttribute('data-id', item.id);
        row.setAttribute('data-type', item.type);
        
        row.insertCell(0).innerHTML = item.locker;
        row.insertCell(1).innerHTML = item.name;
        let typeClass = item.type === 'روزانه' ? 'daily' : 'long';
        row.insertCell(2).innerHTML = `<span class="reserve-type ${typeClass}">${item.type}</span>`;
        row.insertCell(3).innerHTML = item.start;
        row.insertCell(4).innerHTML = item.end;
        
        let actionCell = row.insertCell(5);
        actionCell.className = 'action';
        
        let editHtml = '';
        if(item.type === 'روزانه') {
            editHtml = '<img src="img/edit.png" style="opacity:0.3; cursor:not-allowed;" title="رزرو روزانه قابل ویرایش نیست">';
        } else {
            editHtml = `<img src="img/edit.png" onclick="openEditModal(${item.id})" style="cursor:pointer;">`;
        }
        
        actionCell.innerHTML = `<img src="img/delete.png" onclick="deleteRow(${item.id})" style="cursor:pointer;">` + editHtml;
    });
    
    updatePaginationButtons();
}

function filterTable() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    
    if(searchText === "") {
        filteredData = [...reservationsData];
    } else {
        filteredData = reservationsData.filter(item => 
            item.locker.includes(searchText) || 
            item.name.toLowerCase().includes(searchText) ||
            item.type.includes(searchText)
        );
    }
    currentPage = 1;
    renderTable();
}

function updatePaginationButtons() {
    const paginationDiv = document.getElementById('paginationControls');
    const pageCount = Math.ceil(filteredData.length / rowsPerPage);
    paginationDiv.innerHTML = '';
    
    if(pageCount <= 1) return;
    
    const prevBtn = document.createElement('button');
    prevBtn.innerText = 'قبلی';
    prevBtn.onclick = () => changePage(currentPage - 1);
    paginationDiv.appendChild(prevBtn);
    
    for(let i = 1; i <= pageCount; i++) {
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
    const pageCount = Math.ceil(filteredData.length / rowsPerPage);
    if(page >= 1 && page <= pageCount) {
        currentPage = page;
        renderTable();
    }
}

function openEditModal(id) {
    const item = reservationsData.find(r => r.id === id);
    
    if(!item) {
        alert('آیتم پیدا نشد');
        return;
    }
    
    if(item.type === 'روزانه') {
        alert('رزروهای روزانه قابل ویرایش نیستند');
        return;
    }
    
    currentEditId = id;
    document.getElementById('editLockerNo').value = item.locker;
    document.getElementById('editName').value = item.name;
    document.getElementById('editType').value = item.type;
    document.getElementById('editDateStart').value = item.start;
    document.getElementById('editDateEnd').value = item.end;
    document.getElementById('editModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('editModal').style.display = 'none';
    currentEditId = null;
}

function saveChanges() {
    if(!currentEditId) return;
    
    const newStart = document.getElementById('editDateStart').value.trim();
    const newEnd = document.getElementById('editDateEnd').value.trim();
    
    if(!newStart || !newEnd) {
        alert('لطفا تاریخ را وارد کنید');
        return;
    }
    
    const index = reservationsData.findIndex(r => r.id === currentEditId);
    
    if(index !== -1 && reservationsData[index].type !== 'روزانه') {
        reservationsData[index].start = newStart;
        reservationsData[index].end = newEnd;
        
        const filteredIndex = filteredData.findIndex(r => r.id === currentEditId);
        if(filteredIndex !== -1) {
            filteredData[filteredIndex].start = newStart;
            filteredData[filteredIndex].end = newEnd;
        }
        
        renderTable();
        alert('اطلاعات با موفقیت ویرایش شد');
    }
    
    closeModal();
}

function deleteRow(id) {
    if(confirm('آیا مطمئن هستید؟')) {
        reservationsData = reservationsData.filter(r => r.id !== id);
        filterTable();
    }
}

window.onclick = function(event) {
    let modal = document.getElementById('editModal');
    if(event.target === modal) closeModal();
}

filteredData = [...reservationsData];
renderTable();
document.getElementById('searchInput').addEventListener('input', function() {
    filterTable();
});
window.openEditModal = openEditModal;
window.closeModal = closeModal;
window.saveChanges = saveChanges;
window.deleteRow = deleteRow;
