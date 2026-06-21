
let lostItems = [
    { id: 1, name: "کیف ورزشی مشکی", location: "سالن ", date: "1405/03/15", status: "found" },
    { id: 2, name: "بطری آب", location: "سالن", date: "1405/03/13", status: "searching" },
    { id: 3, name: "ساعت هوشمند ", location: "رختکن سالن", date: "1405/03/10", status: "searching" },
    { id: 4, name: "هدفون بی سیم", location: "سالن ", date: "1405/03/08", status: "found" },
    { id: 5, name: "کفش ورزشی", location: "رختکن", date: "1405/03/05", status: "searching"},
    { id: 6, name: "کیف پول", location: "محوطه دانشگاه", date: "1405/03/01", status: "found"}
];

let claims = [
    { id: 1, lostItemId: 1, claimantName: "فاطمه احمدی", claimantPhone: "09123456789", description: "کیف منه و من توش کلید دارم", status: "pending", date: "1405/03/16" },
    { id: 2, lostItemId: 1, claimantName: "سارا کریمی", claimantPhone: "09198765432", description: "اگه برندش آدیداسه برای منه", status: "pending", date: "1405/03/17" },
    { id: 3, lostItemId: 2, claimantName: "مریم حسینی", claimantPhone: "09123334455", description: "اگه یه بطری آبیه برای من هستش", status: "pending", date: "1405/03/14" },
    { id: 4, lostItemId: 4, claimantName: "زهرا رضایی", claimantPhone: "09011223344", description: "هدفون بی‌سیم مشکی جا گذاشتم", status: "approved", date: "1405/03/12" },
    { id: 5, lostItemId: 5, claimantName: "مهدی کریمی", claimantPhone: "09132223344", description: "کفش نایک سایز ۴۲", status: "pending", date: "1405/03/11" },
    { id: 6, lostItemId: 6, claimantName: "ندا محمدی", claimantPhone: "09151234567", description: "کیف پول قهوه‌ای با کارت بانکی", status: "pending", date: "1405/03/09" }
];

let currentEditId = null;
let currentViewItemId = null;
let currentPage = 1;
let filteredItems = [];
const itemsPerPage = 8;

function saveToLocal() {
    localStorage.setItem('adminLostItems', JSON.stringify(lostItems));
    localStorage.setItem('adminLostClaims', JSON.stringify(claims));
}

function loadFromLocal() {
    const savedItems = localStorage.getItem('adminLostItems');
    const savedClaims = localStorage.getItem('adminLostClaims');
    if (savedItems) lostItems = JSON.parse(savedItems);
    if (savedClaims) claims = JSON.parse(savedClaims);
    filterData();
}

function showToast(msg, isError = false) {
    const toast = document.getElementById('toastMsg');
    toast.textContent = msg;
    toast.classList.add('show');
    if (isError) toast.classList.add('error');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('error');
    }, 3000);
}

function filterData() {
    const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const status = document.getElementById('statusFilter')?.value || 'all';
    filteredItems = lostItems.filter(item => {
        const matchSearch = item.name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search);
        const matchStatus = status === 'all' ? true : item.status === status;
        return matchSearch && matchStatus;
    });
    currentPage = 1;
    renderTable();
}

function renderTable() {
    const tbody = document.getElementById('lostTableBody');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredItems.slice(start, end);
    const noDataMsg = document.getElementById('noDataMessage');

    tbody.innerHTML = '';
    if (filteredItems.length === 0) {
        noDataMsg.style.display = 'block';
        document.getElementById('paginationControls').innerHTML = '';
        return;
    }
    noDataMsg.style.display = 'none';

    pageData.forEach(item => {
        const itemClaims = claims.filter(c => c.lostItemId === item.id);
        const pendingCount = itemClaims.filter(c => c.status === 'pending').length;
        const row = tbody.insertRow();
        row.innerHTML = `
            <td style="font-weight: bold;">${escapeHtml(item.name)}</td>
            <td>${escapeHtml(item.location)}</td>
            <td>${escapeHtml(item.date)}</td>
            <td><span class="status-badge ${item.status === 'searching' ? 'status-searching' : 'status-found'}">${item.status === 'searching' ? 'در جستجو' : 'پیدا شده'}</span></td>
            <td><span class="claims-count" onclick="viewClaims(${item.id})">${pendingCount} درخواست</span></td>
            <td>
                <div class="action-buttons">
                    <button class="action-btn edit-btn" onclick="editItem(${item.id})">✏️ ویرایش</button>
                    <button class="action-btn delete-btn" onclick="deleteItem(${item.id})">🗑️ حذف</button>
                </div>
            </td>
        `;
    });
    updatePagination();
}

function updatePagination() {
    const paginationDiv = document.getElementById('paginationControls');
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    paginationDiv.innerHTML = '';
    if (totalPages <= 1) return;
    
    const prevBtn = document.createElement('button');
    prevBtn.innerText = 'قبلی';
    prevBtn.onclick = () => changePage(currentPage - 1);
    prevBtn.disabled = currentPage === 1;
    paginationDiv.appendChild(prevBtn);
    
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        if (i === currentPage) btn.classList.add('active');
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
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable();
    }
}

function openAddModal() {
    currentEditId = null;
    document.getElementById('modalTitle').innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> افزودن وسیله جدید`;
    document.getElementById('itemName').value = '';
    document.getElementById('itemLocation').value = '';
    document.getElementById('itemDate').value = new Date().toLocaleDateString('fa-IR');
    document.getElementById('itemStatus').value = 'searching';
    document.getElementById('itemModal').style.display = 'flex';
}

function editItem(id) {
    const item = lostItems.find(i => i.id === id);
    if (!item) return;
    currentEditId = id;
    document.getElementById('modalTitle').innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.5"><path d="M17 3l4 4L7 21H3v-4L17 3z"/></svg> ویرایش وسیله`;
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemLocation').value = item.location;
    document.getElementById('itemDate').value = item.date;
    document.getElementById('itemStatus').value = item.status;
    document.getElementById('itemModal').style.display = 'flex';
}

function saveItem() {
    const name = document.getElementById('itemName').value.trim();
    const location = document.getElementById('itemLocation').value.trim();
    const date = document.getElementById('itemDate').value.trim();
    const status = document.getElementById('itemStatus').value;

    if (!name) { showToast('لطفاً نام وسیله را وارد کنید', true); return; }
    if (!location) { showToast('لطفاً مکان را وارد کنید', true); return; }
    if (!date) { showToast('لطفاً تاریخ را وارد کنید', true); return; }

    if (currentEditId === null) {
        const newId = lostItems.length > 0 ? Math.max(...lostItems.map(i => i.id)) + 1 : 4;
        lostItems.push({
            id: newId,
            name: name,
            location: location,
            date: date,
            status: status
        });
        showToast(`وسیله "${name}" با موفقیت اضافه شد`);
    } else {
        const index = lostItems.findIndex(i => i.id === currentEditId);
        if (index !== -1) {
            lostItems[index] = { ...lostItems[index], name, location, date, status };
            showToast(`وسیله "${name}" با موفقیت ویرایش شد`);
        }
    }
    saveToLocal();
    filterData();
    closeItemModal();
}

function deleteItem(id) {
    if (confirm('آیا از حذف این وسیله اطمینان دارید؟')) {
        const item = lostItems.find(i => i.id === id);
        lostItems = lostItems.filter(i => i.id !== id);
        claims = claims.filter(c => c.lostItemId !== id);
        saveToLocal();
        filterData();
        showToast(`وسیله "${item?.name}" حذف شد`);
    }
}

function viewClaims(itemId) {
    currentViewItemId = itemId;
    const itemClaims = claims.filter(c => c.lostItemId === itemId);
    
    const container = document.getElementById('claimsList');
    if (itemClaims.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:20px;">هیچ درخواست مالکیتی برای این وسیله ثبت نشده است</div>';
    } else {
        container.innerHTML = itemClaims.map(claim => `
            <div class="claim-item">
                <h4>${escapeHtml(claim.claimantName)}</h4>
                <div class="claim-detail"><strong>شماره تماس:</strong> ${escapeHtml(claim.claimantPhone)}</div>
                <div class="claim-detail"><strong>تاریخ درخواست:</strong> ${escapeHtml(claim.date)}</div>
                <div class="claim-detail"><strong>توضیحات:</strong> ${escapeHtml(claim.description)}</div>
                <div><span class="claim-status ${claim.status === 'pending' ? 'claim-pending' : (claim.status === 'approved' ? 'claim-approved' : 'claim-rejected')}">
                    ${claim.status === 'pending' ? 'در انتظار بررسی' : (claim.status === 'approved' ? 'تأیید شده' : 'رد شده')}
                </span></div>
                <div class="claim-actions">
                    <button class="claim-approve" onclick="updateClaimStatus(${claim.id}, 'approved')">✓ تأیید</button>
                    <button class="claim-reject" onclick="updateClaimStatus(${claim.id}, 'rejected')">✗ رد</button>
                </div>
            </div>
        `).join('');
    }
    document.getElementById('claimsModal').style.display = 'flex';
}

function updateClaimStatus(claimId, newStatus) {
    const claim = claims.find(c => c.id === claimId);
    if (claim) {
        claim.status = newStatus;
        saveToLocal();
        if (currentViewItemId) viewClaims(currentViewItemId);
        showToast(`وضعیت درخواست "${claim.claimantName}" تغییر کرد`);
    }
}

function closeItemModal() {
    document.getElementById('itemModal').style.display = 'none';
    currentEditId = null;
}

function closeClaimsModal() {
    document.getElementById('claimsModal').style.display = 'none';
    currentViewItemId = null;
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

document.getElementById('searchInput')?.addEventListener('input', filterData);
document.getElementById('statusFilter')?.addEventListener('change', filterData);
window.onclick = function(e) {
    if (e.target.classList.contains('modal')) {
        closeItemModal();
        closeClaimsModal();
    }
}

loadFromLocal();
