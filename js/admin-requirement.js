let needs = [
    { id: 1, title: "تاتامی ورزشی 10 عدد", desc: "برای نرمش های کلاسی", targetAmount: 10000000, raisedAmount: 5500000, donors: 12 },
    { id: 2, title: "توپ والیبال ", desc: "10 عدد توپ استاندارد مسابقات بین‌المللی", targetAmount: 15000000, raisedAmount: 14995000, donors: 8 },
    { id: 3, title: "توپ داژبال", desc: "2 عدد", targetAmount: 1200000, raisedAmount: 0, donors: 0 },
    { id: 4, title: "راکت بدمینتون", desc: "5 جفت", targetAmount: 6000000, raisedAmount: 2600000, donors: 45 }
];

let filteredNeeds = [];
let currentPage = 1;
let currentEditId = null;
const itemsPerPage = 8;
let manualCompleteLogs = [];

function loadManualLogs() {
    const saved = localStorage.getItem('manualCompleteLogs');
    if (saved) {
        manualCompleteLogs = JSON.parse(saved);
    }
}

function saveManualLogs() {
    localStorage.setItem('manualCompleteLogs', JSON.stringify(manualCompleteLogs));
}

function addManualCompleteLog(need, remainingAmount) {
    const log = {
        id: Date.now(),
        needId: need.id,
        needTitle: need.title,
        remainingAmount: remainingAmount,
        completedBy: "ادمین سیستم",
        completedAt: new Date().toLocaleString('fa-IR'),
        timestamp: Date.now()
    };
    manualCompleteLogs.unshift(log);
    saveManualLogs();
    showToast(`✅ نیازمندی "${need.title}" به صورت دستی تکمیل شد`, false);
     console.log("📝 لاگ تکمیل دستی ثبت شد:", log);
}

function forceCompleteNeed(id, remainingAmount) {
    const need = needs.find(n => n.id === id);
    if (!need) return;
    
    if (confirm(`⚠️ مبلغ باقی‌مانده: ${remainingAmount.toLocaleString()} تومان\n\nآیا از تکمیل دستی نیازمندی "${need.title}" اطمینان دارید؟\n(این عملیات قابل بازگشت نیست)`)) {
        const oldRaised = need.raisedAmount;
        need.raisedAmount = need.targetAmount;
        addManualCompleteLog(need, remainingAmount);      
        saveToLocalStorage();
        filterData();
        showToast(`✅ نیازمندی "${need.title}" تکمیل شد!\n💰 مبلغ اضافه شده: ${remainingAmount.toLocaleString()} تومان\n🕐 زمان: ${new Date().toLocaleString('fa-IR')}`);
        renderTable();
    }
}

function showManualLogs() {
    if (manualCompleteLogs.length === 0) {
        showToast(" هیچ لاگ تکمیل دستی وجود ندارد", true);
        return;
    }
    
    let logsHtml = `
        <div style="direction: rtl; max-height: 500px; overflow-y: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
                <thead>
                    <tr style="background: #2c5a2e; color: white; position: sticky; top: 0;">
                        <th style="padding: 8px;">زمان</th>
                        <th style="padding: 8px;">عنوان نیازمندی</th>
                        <th style="padding: 8px;">مبلغ باقی‌مانده</th>
                        <th style="padding: 8px;">تکمیل‌کننده</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    manualCompleteLogs.forEach(log => {
        logsHtml += `
            <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 8px;">${log.completedAt}</td>
                <td style="padding: 8px; font-weight: bold;">${escapeHtml(log.needTitle)}</td>
                <td style="padding: 8px; color: #27ae60;">${log.remainingAmount.toLocaleString()} تومان</td>
                <td style="padding: 8px;">${log.completedBy}</td>
            </tr>
        `;
    });
    
    logsHtml += `
                </tbody>
            </table>
        </div>
        <div style="margin-top: 15px; text-align: center;">
            <button onclick="clearAllLogs()" style="background: #c0392b; color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer;">🗑️ پاک کردن همه لاگ‌ها</button>
            <button onclick="closeLogModal()" style="background: #2c5a2e; color: white; border: none; padding: 8px 16px; border-radius: 8px; cursor: pointer; margin-right: 10px;">بستن</button>
        </div>
    `;
    
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'logModal';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        z-index: 2500;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    modalOverlay.innerHTML = `
        <div style="background: white; border-radius: 16px; width: 90%; max-width: 800px; max-height: 80%; overflow: hidden; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 2px solid #CBECA7; padding-bottom: 10px;">
                <h3 style="color: #2c5a2e; margin: 0;"> تاریخچه تکمیل دستی نیازمندی‌ها</h3>
                <span onclick="closeLogModal()" style="cursor: pointer; font-size: 24px; color: #999;">&times;</span>
            </div>
            ${logsHtml}
        </div>
    `;
    
    document.body.appendChild(modalOverlay);
}

function closeLogModal() {
    const modal = document.getElementById('logModal');
    if (modal) modal.remove();
}

function clearAllLogs() {
    if (confirm("⚠️ آیا از پاک کردن تمام لاگ‌های تکمیل دستی اطمینان دارید؟ این عمل غیرقابل بازگشت است.")) {
        manualCompleteLogs = [];
        saveManualLogs();
        closeLogModal();
        showToast("🗑️ تمام لاگ‌ها پاک شدند");
    }
}

function numberToWords(num) {
    if (num === 0 || isNaN(num)) return "";
    
    const ones = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
    const tens = ["", "ده", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"];
    const hundreds = ["", "یکصد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"];
    const thousands = ["", "هزار", "میلیون", "میلیارد"];
    
    function convertChunk(n) {
        if (n === 0) return "";
        let result = "";
        let h = Math.floor(n / 100);
        let r = n % 100;
        if (h > 0) result += hundreds[h] + " ";
        if (r >= 10 && r <= 19) {
            if (r === 10) result += "ده";
            else if (r === 11) result += "یازده";
            else if (r === 12) result += "دوازده";
            else if (r === 13) result += "سیزده";
            else if (r === 14) result += "چهارده";
            else if (r === 15) result += "پانزده";
            else if (r === 16) result += "شانزده";
            else if (r === 17) result += "هفده";
            else if (r === 18) result += "هجده";
            else if (r === 19) result += "نوزده";
        } else {
            let t = Math.floor(r / 10);
            let o = r % 10;
            if (t > 0) result += tens[t] + " ";
            if (o > 0) result += ones[o];
        }
        return result.trim();
    }
    
    let result = "";
    let chunkIndex = 0;
    let n = num;
    
    while (n > 0) {
        let chunk = n % 1000;
        if (chunk !== 0) {
            let chunkStr = convertChunk(chunk);
            result = chunkStr + " " + thousands[chunkIndex] + " " + result;
        }
        n = Math.floor(n / 1000);
        chunkIndex++;
    }
    
    return result.trim() + " تومان";
}

function updateTargetWords() {
    const targetInput = document.getElementById('needTarget');
    const targetWords = document.getElementById('targetWords');
    const amount = parseInt(targetInput.value);
    
    if (!isNaN(amount) && amount > 0) {
        targetWords.style.display = 'block';
        targetWords.innerHTML = numberToWords(amount);
    } else {
        targetWords.style.display = 'none';
    }
}

function saveToLocalStorage() {
    localStorage.setItem('adminNeeds', JSON.stringify(needs));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('adminNeeds');
    if (saved) {
        needs = JSON.parse(saved);
    } else {
        saveToLocalStorage();
    }
}

function showToast(msg, isError = false) {
    let toast = document.getElementById('toastMsg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastMsg';
        toast.className = 'toast-msg';
        document.body.appendChild(toast);
        
        const style = document.createElement('style');
        style.textContent = `
            .toast-msg {
                position: fixed;
                bottom: 30px;
                right: 30px;
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
                white-space: pre-line;
                max-width: 350px;
            }
            .toast-msg.show { opacity: 1; }
            .toast-msg.error { background: #c0392b; }
        `;
        document.head.appendChild(style);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    if (isError) toast.classList.add('error');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('error');
    }, 4000);
}

function formatNumber(num) {
    return num.toLocaleString();
}

function getStatus(need) {
    return need.raisedAmount >= need.targetAmount ? "completed" : "active";
}

function filterData() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const statusValue = document.getElementById('statusFilter').value;

    filteredNeeds = needs.filter(need => {
        const matchesSearch = need.title.toLowerCase().includes(searchText) || 
                              need.desc.toLowerCase().includes(searchText);
        const needStatus = getStatus(need);
        const matchesStatus = statusValue === 'all' || needStatus === statusValue;
        return matchesSearch && matchesStatus;
    });

    currentPage = 1;
    renderTable();
}

function renderTable() {
    const tbody = document.getElementById('needsTableBody');
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredNeeds.slice(start, end);
    const noDataMsg = document.getElementById('noDataMessage');

    tbody.innerHTML = '';
    if (filteredNeeds.length === 0) {
        noDataMsg.style.display = 'block';
        document.getElementById('paginationControls').innerHTML = '';
        return;
    }
    noDataMsg.style.display = 'none';

    pageData.forEach(need => {
        const percent = need.targetAmount > 0 ? (need.raisedAmount / need.targetAmount) * 100 : 0;
        const isCompleted = need.raisedAmount >= need.targetAmount;
        const remaining = need.targetAmount - need.raisedAmount;
        const isAlmostComplete = (remaining > 0 && remaining < 10000) && !isCompleted;
        
        const statusClass = isCompleted ? 'status-completed' : 'status-active';
        const statusText = isCompleted ? "✅ تکمیل شده" : "🔄 در حال جمع‌آوری";

        const row = tbody.insertRow();
        
        let actionsHtml = `
            <div class="action-buttons">
                <button class="action-btn edit-btn" onclick="editNeed(${need.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path d="M17 3l4 4L7 21H3v-4L17 3z"/>
                    </svg>
                    ویرایش
                </button>
                <button class="action-btn delete-btn" onclick="deleteNeed(${need.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path d="M4 7h16M10 11v6M14 11v6M5 7l1 14h12l1-14"/>
                        <line x1="9" y1="3" x2="15" y2="3"/>
                    </svg>
                    حذف
                </button>
        `;
        
        if (isAlmostComplete) {
            actionsHtml += `
                <button class="action-btn complete-btn" onclick="forceCompleteNeed(${need.id}, ${remaining})" style="background: #27ae60; color: white;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" width="14" height="14">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    ✨ تکمیل دستی (${remaining.toLocaleString()} تومان)
                </button>
            `;
        }
        
        actionsHtml += `</div>`;
        let warningBadge = '';
        if (isAlmostComplete) {
            warningBadge = `<span style="display: inline-block; background: #ff9800; color: white; font-size: 10px; padding: 2px 6px; border-radius: 12px; margin-right: 8px;">⚠️ باقی‌مانده کمتر از ۱۰ هزار</span>`;
        }
        
        row.innerHTML = `
            <td style="font-weight: bold;">${escapeHtml(need.title)} ${warningBadge}</td>
            <td style="max-width: 250px; white-space: normal;">${escapeHtml(need.desc)}</td>
            <td>${formatNumber(need.targetAmount)}</td>
            <td>${formatNumber(need.raisedAmount)}</td>
            <td class="progress-cell">
                <div class="progress-bar-container">
                    <div class="progress-fill" style="width: ${Math.min(percent, 100)}%"></div>
                </div>
                <span class="progress-text">${percent.toFixed(1)}%</span>
            </td>
            <td>${need.donors} نفر</td>
            <td><span class="status-badge ${statusClass}">${statusText}</span></td>
            <td>${actionsHtml}</td>
        `;
    });

    updatePagination();
}

function updatePagination() {
    const paginationDiv = document.getElementById('paginationControls');
    const totalPages = Math.ceil(filteredNeeds.length / itemsPerPage);
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
    const totalPages = Math.ceil(filteredNeeds.length / itemsPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderTable();
    }
}

function openAddModal() {
    currentEditId = null;
    document.getElementById('modalTitle').innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.5">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        افزودن نیازمندی جدید
    `;
    document.getElementById('needTitle').value = '';
    document.getElementById('needDesc').value = '';
    document.getElementById('needTarget').value = '';
    document.getElementById('targetWords').style.display = 'none';
    document.getElementById('needModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function editNeed(id) {
    const need = needs.find(n => n.id === id);
    if (!need) return;
    currentEditId = id;
    document.getElementById('modalTitle').innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2c5a2e" stroke-width="1.5">
            <path d="M17 3l4 4L7 21H3v-4L17 3z"/>
        </svg>
        ویرایش نیازمندی
    `;
    document.getElementById('needTitle').value = need.title;
    document.getElementById('needDesc').value = need.desc;
    document.getElementById('needTarget').value = need.targetAmount;
    updateTargetWords();
    document.getElementById('needModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function saveNeed() {
    const title = document.getElementById('needTitle').value.trim();
    const desc = document.getElementById('needDesc').value.trim();
    const targetAmount = parseInt(document.getElementById('needTarget').value);

    if (!title) {
        showToast("لطفاً عنوان نیازمندی را وارد کنید", true);
        return;
    }
    if (!desc) {
        showToast("لطفاً توضیحات را وارد کنید", true);
        return;
    }
    if (isNaN(targetAmount) || targetAmount <= 0) {
        showToast("مبلغ هدف معتبر وارد کنید", true);
        return;
    }

    if (currentEditId === null) {
        const newId = needs.length > 0 ? Math.max(...needs.map(n => n.id)) + 1 : 5;
        needs.push({
            id: newId,
            title: title,
            desc: desc,
            targetAmount: targetAmount,
            raisedAmount: 0,
            donors: 0
        });
        showToast(`نیازمندی "${title}" با موفقیت اضافه شد`);
    } else {
        const index = needs.findIndex(n => n.id === currentEditId);
        if (index !== -1) {
            needs[index] = {
                ...needs[index],
                title: title,
                desc: desc,
                targetAmount: targetAmount
            };
            showToast(`نیازمندی "${title}" با موفقیت ویرایش شد`);
        }
    }

    saveToLocalStorage();
    filterData();
    closeNeedModal();
}

function deleteNeed(id) {
    const need = needs.find(n => n.id === id);
    if (need) {
        if (confirm(`آیا از حذف نیازمندی "${need.title}" اطمینان دارید؟`)) {
            needs = needs.filter(n => n.id !== id);
            saveToLocalStorage();
            filterData();
            showToast(`نیازمندی "${need.title}" حذف شد`);
        }
    }
}

function closeNeedModal() {
    document.getElementById('needModal').style.display = 'none';
    document.body.style.overflow = '';
    currentEditId = null;
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

document.getElementById('searchInput').addEventListener('input', filterData);
document.getElementById('statusFilter').addEventListener('change', filterData);
document.getElementById('needTarget').addEventListener('input', updateTargetWords);

loadFromLocalStorage();
loadManualLogs();
filteredNeeds = [...needs];
renderTable();

const addLogsButton = () => {
    const filtersDiv = document.querySelector('.filters');
    if (filtersDiv && !document.getElementById('showLogsBtn')) {
        const logsBtn = document.createElement('button');
        logsBtn.id = 'showLogsBtn';
        logsBtn.innerHTML = '📋 تاریخچه تکمیل دستی';
        logsBtn.style.cssText = `
            background: #6c5ce7;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 13px;
            font-weight: bold;
        `;
        logsBtn.onclick = showManualLogs;
        filtersDiv.appendChild(logsBtn);
    }
};

setTimeout(addLogsButton, 100);
