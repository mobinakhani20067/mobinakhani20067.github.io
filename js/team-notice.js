let teamAnnouncements = [
    { id: 1, title: 'فراخوان تیم فوتبال دانشگاه', category: 'اعلامیه تیم یابی', sport: 'فوتبال', desc: 'تیم فوتبال دانشگاه برای مسابقات لیگ برتر دانشجویان نیازمند بازیکن در پست‌های هافبک و مهاجم می‌باشد.', date: '1405/08/10', image: '', teamLeader: 'علی کریمی', contact: '09123456789' },
    { id: 2, title: 'تشکیل تیم والیبال بانوان', category: 'اعلامیه تیم یابی', sport: 'والیبال', desc: 'تیم والیبال بانوان دانشگاه برای حضور در مسابقات منطقه‌ای از دانشجویان علاقه‌مند دعوت به همکاری می‌کند.', date: '1405/08/08', image: '', teamLeader: 'مریم حسینی', contact: '09123456788' },
    { id: 3, title: 'جذب بازیکن بسکتبال', category: 'اعلامیه تیم یابی', sport: 'بسکتبال', desc: 'تیم بسکتبال دانشگاه در پست‌های گارد و فوروارد نیازمند بازیکن جدید است. دارای سابقه قهرمانی استان.', date: '1405/08/05', image: '', teamLeader: 'رضا محمدی', contact: '09123456787' },
    { id: 4, title: 'تیم فوتسال دانشگاه', category: 'اعلامیه تیم یابی', sport: 'فوتسال', desc: 'تیم فوتسال دانشگاه آماده جذب بازیکنان مستعد برای مسابقات لیگ دانشجویان.', date: '1405/08/03', image: '', teamLeader: 'سعید احمدی', contact: '09123456786' },
    { id: 5, title: 'تیم شنا دانشگاه فرصت طلایی', category: 'اعلامیه تیم یابی', sport: 'شنا', desc: 'تیم شنا دانشگاه از شناگران ماهر برای حضور در مسابقات قهرمانی دانشجویان دعوت می‌کند.', date: '1405/08/01', image: '', teamLeader: 'امیرحسین غلامی', contact: '09123456785' }
];

let filteredData = [];
let currentPage = 1;
const itemsPerPage = 6;

const searchInput = document.getElementById('searchInput');
const sportFilter = document.getElementById('sportFilter');
const gridContainer = document.getElementById('announcementsGrid');
const noDataMsg = document.getElementById('noDataMessage');

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    const selectedSport = sportFilter.value;
    
    filteredData = teamAnnouncements.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(searchText) || item.desc.toLowerCase().includes(searchText);
        const matchSport = selectedSport === '' || item.sport === selectedSport;
        return matchSearch && matchSport;
    });
    
    currentPage = 1;
    renderGrid();
}

function renderGrid() {
    if(!gridContainer) return;
    gridContainer.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredData.slice(start, end);
    
    if(pageData.length === 0) {
        if(noDataMsg) noDataMsg.style.display = 'block';
        const paginationDiv = document.getElementById('paginationControls');
        if(paginationDiv) paginationDiv.innerHTML = '';
        return;
    }
    if(noDataMsg) noDataMsg.style.display = 'none';
    
    pageData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'announcement-card';
        
        let sportIcon = '';
        switch(item.sport) {
            case 'فوتبال': sportIcon = '⚽'; break;
            case 'والیبال': sportIcon = '🏐'; break;
            case 'بسکتبال': sportIcon = '🏀'; break;
            case 'فوتسال': sportIcon = '⚽'; break;
            case 'شنا': sportIcon = '🏊'; break;
            default: sportIcon = '🏅';
        }
        
        card.innerHTML = `
            <h3>${sportIcon} ${item.title}</h3>
            <span class="category">${item.sport}</span>
            <div class="date">📅 ${item.date}</div>
            <p class="desc">${item.desc}</p>
            <button class="btn-apply" onclick="openApplyModal(${item.id}, '${item.title.replace(/'/g, "\\'")}')">➕ درخواست عضویت</button>
        `;
        gridContainer.appendChild(card);
    });
    
    updatePaginationButtons();
}

function updatePaginationButtons() {
    const paginationDiv = document.getElementById('paginationControls');
    if(!paginationDiv) return;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    paginationDiv.innerHTML = '';
    
    if(totalPages <= 1) return;
    
    const prevBtn = document.createElement('button');
    prevBtn.innerText = '‹ قبلی';
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
    nextBtn.innerText = 'بعدی ›';
    nextBtn.onclick = () => changePage(currentPage + 1);
    paginationDiv.appendChild(nextBtn);
}

function changePage(page) {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if(page >= 1 && page <= totalPages) {
        currentPage = page;
        renderGrid();
    }
}

function openApplyModal(teamId, teamName) {
    const teamIdField = document.getElementById('teamId');
    const teamNameField = document.getElementById('teamName');
    const fullNameField = document.getElementById('fullName');
    const studentIdField = document.getElementById('studentId');
    const fieldStudyField = document.getElementById('fieldStudy');
    const termField = document.getElementById('term');
    const experienceField = document.getElementById('experience');
    const phoneField = document.getElementById('phone');
    const applyModal = document.getElementById('applyModal');
    
    if(teamIdField) teamIdField.value = teamId;
    if(teamNameField) teamNameField.value = teamName;
    if(fullNameField) fullNameField.value = '';
    if(studentIdField) studentIdField.value = '';
    if(fieldStudyField) fieldStudyField.value = '';
    if(termField) termField.value = '';
    if(experienceField) experienceField.value = '';
    if(phoneField) phoneField.value = '';
    if(applyModal) applyModal.style.display = 'flex';
}

function closeModal() {
    const applyModal = document.getElementById('applyModal');
    if(applyModal) applyModal.style.display = 'none';
}

function submitRequest() {
    const fullName = document.getElementById('fullName')?.value.trim() || '';
    const studentId = document.getElementById('studentId')?.value.trim() || '';
    const fieldStudy = document.getElementById('fieldStudy')?.value.trim() || '';
    const term = document.getElementById('term')?.value || '';
    const experience = document.getElementById('experience')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const teamName = document.getElementById('teamName')?.value || '';
    
    if(!fullName) { alert('❌ لطفا نام و نام خانوادگی را وارد کنید'); return; }
    if(!studentId) { alert('❌ لطفا شماره دانشجویی را وارد کنید'); return; }
    if(!fieldStudy) { alert('❌ لطفا رشته تحصیلی را وارد کنید'); return; }
    if(!term) { alert('❌ لطفا ترم تحصیلی را انتخاب کنید'); return; }
    if(!phone) { alert('❌ لطفا شماره تماس را وارد کنید'); return; }
    if(!/^09[0-9]{9}$/.test(phone)) { alert('❌ شماره تماس باید با 09 شروع شود و 11 رقم باشد'); return; }
    
    const requestData = {
        teamName: teamName,
        fullName: fullName,
        studentId: studentId,
        fieldStudy: fieldStudy,
        term: term,
        experience: experience || 'بدون سابقه',
        phone: phone,
        date: new Date().toLocaleDateString('fa-IR'),
        status: 'در انتظار بررسی'
    };
    
    let requests = JSON.parse(localStorage.getItem('teamJoinRequests') || '[]');
    requests.push(requestData);
    localStorage.setItem('teamJoinRequests', JSON.stringify(requests));
    
    alert(`✅ درخواست عضویت شما برای تیم "${teamName}" با موفقیت ثبت شد.\nبه زودی با شما تماس گرفته می‌شود.`);
    closeModal();
}

if(searchInput) searchInput.addEventListener('input', applyFilters);
if(sportFilter) sportFilter.addEventListener('change', applyFilters);

window.onclick = function(event) {
    let modal = document.getElementById('applyModal');
    if(event.target === modal) closeModal();
}

window.openApplyModal = openApplyModal;
window.closeModal = closeModal;
window.submitRequest = submitRequest;

applyFilters();
