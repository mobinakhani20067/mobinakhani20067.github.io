const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
if (hamburger) hamburger.onclick = () => navMenu.classList.toggle('active-mobile');

const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');
if (profileBtn) profileBtn.onclick = (e) => { e.stopPropagation(); profileDropdown.classList.toggle('show'); };
document.onclick = (e) => { if (profileDropdown && !profileBtn.contains(e.target)) profileDropdown.classList.remove('show'); };

const supBtn = document.getElementById('supportBtn');
const chat = document.getElementById('chatbotContainer');
const closeChat = document.getElementById('closeChat');
const msgDiv = document.getElementById('chatMessages');
const inp = document.getElementById('chatInput');
const send = document.getElementById('sendMessage');
const qBtns = document.querySelectorAll('.quick-reply-btn');

const resp = {
    'رزرو سالن': 'به بخش رزرو سالن مراجعه یا با ۰۲۱-۱۲۳۴۵۶۷۸ تماس بگیرید.',
    'ساعات کاری': 'شنبه تا چهارشنبه ۸-۲۲، پنجشنبه ۸-۲۰، جمعه ۹-۱۸',
    'قوانین': 'استفاده از لباس مناسب، رعایت نظافت و احترام به دیگران',
    'تماس': '۰۲۱-۱۲۳۴۵۶۷۸'
};

function addMsg(t, isUser) { let m = document.createElement('div'); m.className = 'message ' + (isUser ? 'user-message' : 'bot-message'); m.textContent = t; msgDiv.appendChild(m); msgDiv.scrollTop = msgDiv.scrollHeight; }
function getReply(msg) { for(let k in resp) if(msg.includes(k)) return resp[k]; return 'پاسخگوی شما هستیم!'; }
function sendMsg() { let m = inp.value.trim(); if(!m) return; addMsg(m, true); inp.value = ''; setTimeout(() => addMsg(getReply(m), false), 400); }
if (supBtn) supBtn.onclick = () => chat.classList.toggle('active');
if (closeChat) closeChat.onclick = () => chat.classList.remove('active');
if (send) send.onclick = sendMsg;
if (inp) inp.onkeypress = (e) => { if(e.key === 'Enter') sendMsg(); };
qBtns.forEach(btn => btn.onclick = () => { let m = btn.getAttribute('data-msg'); addMsg(m, true); setTimeout(() => addMsg(getReply(m), false), 400); });

const defaultImage = "img/requeriment.png";

const defaultNeedsItems = [
    { 
        id: 1, 
        title: "تاتامی ورزشی 10 عدد", 
        description: "برای نرمش های کلاسی", 
        target: 10000000, 
        raised: 5500000, 
        donors: 12, 
        status: "active",
        image: defaultImage
    },
    { 
        id: 2, 
        title: "توپ والیبال", 
        description: "10 عدد توپ استاندارد مسابقات بین المللی", 
        target: 15000000, 
        raised: 14995000, 
        donors: 8, 
        status: "active",
        image: defaultImage
    },
    { 
        id: 3, 
        title: "توپ داژبال", 
        description: "2 عدد", 
        target: 1200000, 
        raised: 0, 
        donors: 0, 
        status: "active",
        image: defaultImage
    },
    { 
        id: 4, 
        title: "راکت بدمینتون", 
        description: "5 جفت", 
        target: 6000000, 
        raised: 2600000, 
        donors: 45, 
        status: "active",
        image: defaultImage
    }
];

function loadNeedsData() {
    const saved = localStorage.getItem('needsItems');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            return parsed.map(item => ({
                ...defaultNeedsItems.find(d => d.id === item.id) || {},
                ...item,
                image: item.image || defaultImage
            }));
        } catch(e) {
            console.error('خطا در بارگذاری داده‌ها:', e);
            return JSON.parse(JSON.stringify(defaultNeedsItems));
        }
    }
    return JSON.parse(JSON.stringify(defaultNeedsItems));
}

function saveNeedsData() {
    try {
        localStorage.setItem('needsItems', JSON.stringify(needsItems));
    } catch(e) {
        console.error('خطا در ذخیره داده‌ها:', e);
    }
}

let needsItems = loadNeedsData();
let currentDonationItem = null;

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberToWords(num) {
    if (num === 0) return "صفر";
    const units = ["", "هزار", "میلیون", "میلیارد"];
    const numbers = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
    const tens = ["", "ده", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"];
    const hundreds = ["", "صد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"];
    
    function convertChunk(n) {
        if (n === 0) return "";
        let str = "";
        let hundred = Math.floor(n / 100);
        let remainder = n % 100;
        if (hundred > 0) str += hundreds[hundred] + " ";
        if (remainder >= 10 && remainder <= 19) {
            const teens = ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"];
            str += teens[remainder - 10] + " ";
        } else {
            let ten = Math.floor(remainder / 10);
            let one = remainder % 10;
            if (ten > 0) str += tens[ten] + " ";
            if (one > 0) str += numbers[one] + " ";
        }
        return str;
    }
    
    let result = "";
    let chunkIndex = 0;
    let numCopy = num;
    while (numCopy > 0) {
        let chunk = numCopy % 1000;
        if (chunk !== 0) {
            let chunkStr = convertChunk(chunk);
            result = chunkStr + (units[chunkIndex] ? units[chunkIndex] + " " : "") + result;
        }
        numCopy = Math.floor(numCopy / 1000);
        chunkIndex++;
    }
    return result.trim();
}

function renderNeeds() {
    const container = document.getElementById('needsGrid');
    if (!container) return;
    
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    
    let filtered = needsItems.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm);
        const matchStatus = activeFilter === 'all' ? true : item.status === activeFilter;
        return matchSearch && matchStatus;
    });
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="empty-state">هیچ نیازمندی‌ای با این شرایط یافت نشد</div>';
        return;
    }
    
    container.innerHTML = filtered.map(item => {
        const percent = Math.min(100, Math.floor((item.raised / item.target) * 100));
        const remaining = item.target - item.raised;
        
        return `
            <div class="need-card ${item.status === 'completed' ? 'completed' : ''}">
                <div class="need-image">
                    <img src="${item.image}" alt="${item.title}" onerror="this.src='${defaultImage}'">
                </div>
                <div class="need-content">
                    <div class="need-title">${item.title}</div>
                    <div class="need-desc">${item.description}</div>
                    <div class="progress-section">
                        <div class="progress-bar"><div class="progress-fill" style="width: ${percent}%;"></div></div>
                        <div class="progress-stats">
                            <span class="target-amount">هدف: ${formatNumber(item.target)} تومان</span>
                            <span class="raised-amount">جمع‌آوری: ${formatNumber(item.raised)} تومان</span>
                            <span class="remaining-amount">باقیمانده: ${formatNumber(remaining)} تومان</span>
                        </div>
                        <div class="donors-count">تعداد اهداکنندگان: ${item.donors} نفر</div>
                    </div>
                    ${item.status === 'active' ? `<button class="donate-btn" data-id="${item.id}">اهدای مبلغ</button>` : '<div class="completed-message">✅ این پروژه با موفقیت تکمیل شده است</div>'}
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.donate-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(btn.getAttribute('data-id'));
            const item = needsItems.find(i => i.id === id);
            if (item) openDonationModal(item);
        });
    });
}

function openDonationModal(item) {
    currentDonationItem = item;
    document.getElementById('donationItemTitle').innerHTML = item.title;
    document.getElementById('donationAmount').value = '';
    document.getElementById('donorName').value = '';
    document.getElementById('amountInWords').innerHTML = '';
    document.getElementById('donationModal').style.display = 'flex';
}

function closeDonationModal() {
    document.getElementById('donationModal').style.display = 'none';
    currentDonationItem = null;
}

function showToast(message, isError = false) {
    const toast = document.getElementById('toastMsg');
    toast.textContent = message;
    toast.classList.add('show');
    if (isError) {
        toast.classList.add('error');
    } else {
        toast.classList.remove('error');
    }
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('error');
    }, 3000);
}

document.getElementById('confirmDonationBtn')?.addEventListener('click', function() {
    console.log('دکمه تایید و پرداخت کلیک شد');
    
    const amountInput = document.getElementById('donationAmount');
    const amount = parseInt(amountInput.value);
    const name = document.getElementById('donorName').value.trim();
    
    console.log('مبلغ:', amount);
    console.log('نام:', name);
    console.log('آیتم:', currentDonationItem);
    
    if (!amount || amount < 10000) {
        showToast('حداقل مبلغ قابل اهدا 10,000 تومان است', true);
        return;
    }
    
    if (!currentDonationItem) {
        showToast('خطا: آیتم انتخاب نشده است', true);
        return;
    }
    
    saveNeedsData();
    
    const donationData = {
        amount: amount,
        itemName: currentDonationItem.title,
        donorName: name || 'ناشناس',
        type: 'donation'
    };
    
    localStorage.setItem('pendingDonation', JSON.stringify(donationData));
    closeDonationModal();
    
    console.log('رفتن به صفحه پرداخت با داده:', donationData);
    window.location.href = 'payment.html';
});

document.getElementById('donationAmount')?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    if (val && val > 0) {
        document.getElementById('amountInWords').innerHTML = numberToWords(val) + " تومان";
    } else {
        document.getElementById('amountInWords').innerHTML = '';
    }
});

document.getElementById('searchInput')?.addEventListener('input', () => renderNeeds());
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderNeeds();
    });
});

function checkDonationUpdate() {
    const updateData = localStorage.getItem('donationUpdate');
    if (updateData) {
        try {
            const data = JSON.parse(updateData);
            console.log('به‌روزرسانی اهدا:', data);
            
            const item = needsItems.find(i => i.title === data.itemName);
            if (item) {
                item.raised += data.amount;
                item.donors += 1;
                
                if (item.raised >= item.target) {
                    item.status = 'completed';
                    item.raised = item.target;
                }
                
                saveNeedsData();
                showToast(`✅ مبلغ ${formatNumber(data.amount)} تومان به "${item.title}" اضافه شد`, false);
                renderNeeds();
                localStorage.removeItem('donationUpdate');
            } else {
                console.error('آیتم مورد نظر یافت نشد:', data.itemName);
                localStorage.removeItem('donationUpdate');
            }
        } catch (e) {
            console.error('خطا در پردازش به‌روزرسانی:', e);
            localStorage.removeItem('donationUpdate');
        }
    }
}

function resetNeedsData() {
    if (confirm('آیا مطمئن هستید؟ همه داده‌ها به حالت اولیه برمی‌گردند.')) {
        needsItems = JSON.parse(JSON.stringify(defaultNeedsItems));
        saveNeedsData();
        renderNeeds();
        showToast('داده‌ها به حالت اولیه بازگشتند');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    needsItems = loadNeedsData();
    checkDonationUpdate();
    renderNeeds();
    console.log('داده‌های جاری:', needsItems);
});

renderNeeds();
