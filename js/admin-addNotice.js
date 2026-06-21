let announcementsData = [
    { id: 1, title: 'تعطیلی دانشگاه به مناسبت ۱۳ آبان', category: 'اعلامیه دانشگاه', sport: '', priority: 'مهم', desc: 'دانشگاه روز سه‌شنبه ۱۳ آبان تعطیل می‌باشد.', date: '1405/08/10', image: '' },
    { id: 2, title: 'فراخوان تیم فوتبال دانشگاه', category: 'اعلامیه تیم یابی', sport: 'فوتبال', priority: 'عادی', desc: 'دانشجویان علاقه‌مند به فوتبال جهت هماهنگی به واحد تربیت بدنی مراجعه کنند.', date: '1405/08/08', image: '' },
    { id: 3, title: 'تخفیف ویژه ثبت‌نام ترم جدید', category: 'بنر صفحه اصلی', sport: '', priority: 'عادی', desc: 'تا پایان مهرماه ۲۰٪ تخفیف برای ثبت‌نام ترم جدید.', date: '1405/08/05', image: '' }
];

let filteredData = [];
let currentPage = 1;
const rowsPerPage = 8;
let nextId = 4;
let editingId = null;

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const tableBody = document.getElementById('tableBody');
const noDataMsg = document.getElementById('noDataMessage');
function showToast(msg, isError = false) {
    let toast = document.getElementById('toastMsg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastMsg';
        toast.className = 'toast-msg';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    if (isError) toast.classList.add('error');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('error');
    }, 3000);
}
const announceImage = document.getElementById('announceImage');
if(announceImage) {
    announceImage.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const previewDiv = document.getElementById('imagePreview');
        const previewImg = document.getElementById('previewImg');
        
        if(file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                if(previewImg) previewImg.src = event.target.result;
                if(previewDiv) previewDiv.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            if(previewDiv) previewDiv.style.display = 'none';
            if(previewImg) previewImg.src = '';
        }
    });
}

function toggleExtraFields() {
    const category = document.getElementById('announceCategory').value;
    const sportField = document.getElementById('sportField');
    const priorityField = document.getElementById('priorityField');
    
    if(category === 'اعلامیه تیم یابی') {
        if(sportField) sportField.style.display = 'flex';
        if(priorityField) priorityField.style.display = 'none';
    } else if(category === 'اعلامیه دانشگاه') {
        if(sportField) sportField.style.display = 'none';
        if(priorityField) priorityField.style.display = 'flex';
    } else {
        if(sportField) sportField.style.display = 'none';
        if(priorityField) priorityField.style.display = 'none';
    }
}

function cancelEdit() {
    editingId = null;
    const formTitle = document.getElementById('formTitle');
    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    if(formTitle) formTitle.innerHTML = 'افزودن اطلاعیه جدید';
    if(submitBtn) submitBtn.innerHTML = 'ثبت اطلاعیه';
    if(cancelBtn) cancelBtn.style.display = 'none';
    clearForm();
    showToast('ویرایش لغو شد');
}

function clearForm() {
    const titleInput = document.getElementById('announceTitle');
    const categorySelect = document.getElementById('announceCategory');
    const descTextarea = document.getElementById('announceDesc');
    const imageInput = document.getElementById('announceImage');
    const sportSelect = document.getElementById('announceSport');
    const prioritySelect = document.getElementById('announcePriority');
    const previewDiv = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImg');
    const sportField = document.getElementById('sportField');
    const priorityField = document.getElementById('priorityField');
    
    if(titleInput) titleInput.value = '';
    if(categorySelect) categorySelect.value = '';
    if(descTextarea) descTextarea.value = '';
    if(imageInput) imageInput.value = '';
    if(sportSelect) sportSelect.value = '';
    if(prioritySelect) prioritySelect.value = 'عادی';
    if(previewDiv) previewDiv.style.display = 'none';
    if(previewImg) previewImg.src = '';
    if(sportField) sportField.style.display = 'none';
    if(priorityField) priorityField.style.display = 'none';
}

function editAnnouncement(id) {
    const item = announcementsData.find(a => a.id === id);
    if(item) {
        editingId = id;
        const formTitle = document.getElementById('formTitle');
        const submitBtn = document.getElementById('submitBtn');
        const cancelBtn = document.getElementById('cancelBtn');
        const titleInput = document.getElementById('announceTitle');
        const categorySelect = document.getElementById('announceCategory');
        const descTextarea = document.getElementById('announceDesc');
        const sportSelect = document.getElementById('announceSport');
        const prioritySelect = document.getElementById('announcePriority');
        const previewDiv = document.getElementById('imagePreview');
        const previewImg = document.getElementById('previewImg');
        const sportField = document.getElementById('sportField');
        const priorityField = document.getElementById('priorityField');
        
        if(formTitle) formTitle.innerHTML = 'ویرایش اطلاعیه';
        if(submitBtn) submitBtn.innerHTML = 'ذخیره تغییرات';
        if(cancelBtn) cancelBtn.style.display = 'inline-flex';
        
        if(titleInput) titleInput.value = item.title;
        if(categorySelect) categorySelect.value = item.category;
        if(descTextarea) descTextarea.value = item.desc;
        if(sportSelect) sportSelect.value = item.sport || '';
        if(prioritySelect) prioritySelect.value = item.priority || 'عادی';
        
        if(item.category === 'اعلامیه تیم یابی') {
            if(sportField) sportField.style.display = 'flex';
            if(priorityField) priorityField.style.display = 'none';
        } else if(item.category === 'اعلامیه دانشگاه') {
            if(sportField) sportField.style.display = 'none';
            if(priorityField) priorityField.style.display = 'flex';
        } else {
            if(sportField) sportField.style.display = 'none';
            if(priorityField) priorityField.style.display = 'none';
        }
        
        if(item.image) {
            if(previewImg) previewImg.src = item.image;
            if(previewDiv) previewDiv.style.display = 'block';
        } else {
            if(previewDiv) previewDiv.style.display = 'none';
            if(previewImg) previewImg.src = '';
        }
    }
}

function addAnnouncement() {
    const titleInput = document.getElementById('announceTitle');
    const categorySelect = document.getElementById('announceCategory');
    const descTextarea = document.getElementById('announceDesc');
    const sportSelect = document.getElementById('announceSport');
    const prioritySelect = document.getElementById('announcePriority');
    const imageInput = document.getElementById('announceImage');
    
    const title = titleInput ? titleInput.value.trim() : '';
    const category = categorySelect ? categorySelect.value : '';
    const desc = descTextarea ? descTextarea.value.trim() : '';
    const sport = sportSelect ? sportSelect.value : '';
    const priority = prioritySelect ? prioritySelect.value : 'عادی';
    const imageFile = imageInput ? imageInput.files[0] : null;
    
    if(!title) {
        showToast('لطفا عنوان اطلاعیه را وارد کنید', true);
        return;
    }
    if(!category) {
        showToast('لطفا دسته بندی را انتخاب کنید', true);
        return;
    }
    if(!desc) {
        showToast('لطفا متن اطلاعیه را وارد کنید', true);
        return;
    }
    if(category === 'اعلامیه تیم یابی' && !sport) {
        showToast('لطفا نوع ورزش را انتخاب کنید', true);
        return;
    }
    
    if(editingId) {
        const index = announcementsData.findIndex(a => a.id === editingId);
        if(index !== -1) {
            if(imageFile) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    announcementsData[index] = {
                        ...announcementsData[index],
                        title: title,
                        category: category,
                        sport: category === 'اعلامیه تیم یابی' ? sport : '',
                        priority: priority,
                        desc: desc,
                        image: event.target.result
                    };
                    finishEdit();
                };
                reader.readAsDataURL(imageFile);
            } else {
                announcementsData[index] = {
                    ...announcementsData[index],
                    title: title,
                    category: category,
                    sport: category === 'اعلامیه تیم یابی' ? sport : '',
                    priority: priority,
                    desc: desc
                };
                finishEdit();
            }
        }
    } else {
        if(imageFile) {
            const reader = new FileReader();
            reader.onload = function(event) {
                saveNewAnnouncement(title, category, sport, priority, desc, event.target.result);
            };
            reader.readAsDataURL(imageFile);
        } else {
            saveNewAnnouncement(title, category, sport, priority, desc, '');
        }
    }
}

function finishEdit() {
    showToast('اطلاعیه با موفقیت ویرایش شد');
    editingId = null;
    const formTitle = document.getElementById('formTitle');
    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    if(formTitle) formTitle.innerHTML = 'افزودن اطلاعیه جدید';
    if(submitBtn) submitBtn.innerHTML = 'ثبت اطلاعیه';
    if(cancelBtn) cancelBtn.style.display = 'none';
    clearForm();
    applyFilters();
}

function saveNewAnnouncement(title, category, sport, priority, desc, imageData) {
    const now = new Date();
    const date = `${now.getFullYear()}/${now.getMonth()+1}/${now.getDate()}`;
    
    const newAnnouncement = {
        id: nextId++,
        title: title,
        category: category,
        sport: category === 'اعلامیه تیم یابی' ? sport : '',
        priority: priority,
        desc: desc,
        date: date,
        image: imageData
    };
    
    announcementsData.unshift(newAnnouncement);
    clearForm();
    showToast('اطلاعیه با موفقیت ثبت شد');
    applyFilters();
}

function deleteAnnouncement(id) {
    const item = announcementsData.find(a => a.id === id);
    if(item) {
        announcementsData = announcementsData.filter(item => item.id !== id);
        if(editingId === id) {
            cancelEdit();
        }
        applyFilters();
        showToast(`اطلاعیه "${item.title}" حذف شد`);
    }
}

function applyFilters() {
    if(!searchInput || !categoryFilter) return;
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    filteredData = announcementsData.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(searchText) || item.desc.toLowerCase().includes(searchText);
        const matchCategory = selectedCategory === '' || item.category === selectedCategory;
        return matchSearch && matchCategory;
    });
    
    currentPage = 1;
    renderTable();
}

function renderTable() {
    if(!tableBody) return;
    tableBody.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);
    
    if(pageData.length === 0) {
        if(noDataMsg) noDataMsg.style.display = 'block';
        const paginationDiv = document.getElementById('paginationControls');
        if(paginationDiv) paginationDiv.innerHTML = '';
        return;
    }
    if(noDataMsg) noDataMsg.style.display = 'none';
    
    pageData.forEach((item, index) => {
        let row = document.createElement('tr');
        let displayText = item.category;
        if(item.category === 'اعلامیه تیم یابی' && item.sport) {
            displayText = `${item.category} (${item.sport})`;
        }
        let priorityClass = item.priority === 'مهم' ? 'priority-high' : 'priority-normal';
        let priorityText = item.priority === 'مهم' ? 'مهم' : 'عادی';
        
        row.innerHTML = `
            <td>${(currentPage-1)*rowsPerPage + index + 1}</td>
            <td style="cursor:pointer; color:#2c5a2e; text-decoration:underline;" onclick="editAnnouncement(${item.id})">${escapeHtml(item.title)}</td>
            <td>${displayText}</td>
            <td><span class="priority-badge ${priorityClass}">${priorityText}</span></td>
            <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(item.desc)}</td>
            <td>${item.date}</td>
            <td><button class="btn-delete" onclick="deleteAnnouncement(${item.id})">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <path d="M4 7h16M10 11v6M14 11v6M5 7l1 14h12l1-14"/>
                    <line x1="9" y1="3" x2="15" y2="3"/>
                </svg>
                حذف
            </button></td>
        `;
        tableBody.appendChild(row);
    });
    
    updatePaginationButtons();
}

function updatePaginationButtons() {
    const paginationDiv = document.getElementById('paginationControls');
    if(!paginationDiv) return;
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

function escapeHtml(str) {
    if(!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}

if(searchInput) searchInput.addEventListener('input', applyFilters);
if(categoryFilter) categoryFilter.addEventListener('change', applyFilters);

const toastStyle = document.createElement('style');
toastStyle.textContent = `
    .toast-msg {
        position: fixed;
        bottom: 30px;
        left: 30px;
        right: auto;
        background: #2c7a4a;
        color: white;
        padding: 12px 24px;
        border-radius: 30px;
        font-size: 14px;
        z-index: 3000;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        font-family: 'Vazir FD-WOL', Tahoma, sans-serif;
    }
    .toast-msg.show { opacity: 1; }
    .toast-msg.error { background: #c0392b; }
`;
document.head.appendChild(toastStyle);

if(!document.getElementById('toastMsg')) {
    const toastDiv = document.createElement('div');
    toastDiv.id = 'toastMsg';
    toastDiv.className = 'toast-msg';
    document.body.appendChild(toastDiv);
}

applyFilters();
