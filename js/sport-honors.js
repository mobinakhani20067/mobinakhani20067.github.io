let achievements = [
    { 
        id: 1,
        title: "قهرمانی مسابقات فوتسال دانشگاه‌های کشور",
        category: "فوتسال",
        year: "۱۴۰۳",
        exactDate: "۱۵ اردیبهشت ۱۴۰۳",
        location: "تهران",
        summary: "تیم فوتسال دانشگاه با شکست تیم دانشگاه تهران به مقام قهرمانی دست یافت.",
        fullDescription: "در مسابقات فوتسال دانشگاه‌های سراسر کشور که در تهران برگزار شد، تیم فوتسال دانشگاه ملی مهارت دختران قم با عملکرد درخشان خود موفق شد در دیدار نهایی تیم دانشگاه تهران را با نتیجه ۳ بر ۱ شکست دهد و برای اولین بار قهرمان این مسابقات شود. این موفقیت بزرگ حاصل تلاش و همدلی تمامی اعضای تیم بود.",
        imageUrl: "https://media.khabarvarzeshi.com/d/2025/04/19/4/385332.jpg?ts=1745065851000",
        medalName: "مدال طلا",
        achievers: ["فاطمه محمدی", "سارا حسینی", "مریم رضایی", "نرگس کریمی", "زهرا موسوی", "الهه احمدی", "سعیده باقری", "سمیه رحمانی"]
    },
    { 
        id: 2,
        title: "مقام دوم مسابقات والیبال منطقه ۵ کشور",
        category: "والیبال",
        year: "۱۴۰۲",
        exactDate: "۲۲ بهمن ۱۴۰۲",
        location: "قم",
        summary: "تیم والیبال دانشگاه موفق به کسب مقام دوم مسابقات منطقه ۵ کشور شد.",
        fullDescription: "تیم والیبال دانشگاه در مسابقات منطقه‌ای که با حضور ۱۲ تیم از استان‌های مختلف برگزار شد، پس از رقابت‌های نفس‌گیر موفق شد به فینال راه یابد و با کسب مقام دوم افتخار دیگری برای دانشگاه رقم بزند.",
        imageUrl: "https://volleyball.ir/wp-content/uploads/2025/10/4Y4A3173.jpg",
        medalName: "مدال نقره",
        achievers: ["زهرا موسوی", "فاطمه نادری", "مریم صادقی", "سارا کاظمی", "الناز رضایی"]
    },
    { 
        id: 3,
        title: "قهرمان بدمینتون",
        category: "بدمینتون",
        year: "۱۴۰۳",
        exactDate: "۱۰ خرداد ۱۴۰۳",
        location: "قم",
        summary: "تیم بدمینتون دانشگاه به مقام سوم استانی دست یافت.",
        fullDescription: "نرگس رحیمی، دانشجوی تربیت بدنی دانشگاه، در مسابقات قهرمانی شنای دانشجویان سراسر کشور که در اصفهان برگزار شد، در ماده ۱۰۰ متر آزاد با ثبت زمان ۱:۰۲:۳۴ موفق به کسب مدال طلا شد. این دومین مدال طلای ایشان در رقابت‌های ملی است.",
        imageUrl: "https://cdn.isna.ir/d/off/yazd/2024/02/04/4/62908347.jpg",
        medalName: "مدال برنز",
        achievers: ["نرگس رحیمی"]
    },
    { 
        id: 4,
        title: "مقاوم دوم دارت کشوری ",
        category: "رزمی",
        year: "۱۴۰۲",
        exactDate: "۵ آذر ۱۴۰۲",
        location: "مشهد",
        summary: "زهرا .",
        fullDescription: "",
        imageUrl: "https://media.khabarvarzeshi.com/d/old/hermes/khabarvarzeshi-263983.jpg",
        medalName: "مدال برنز",
        achievers: ["سمیرا احمدی", "فاطمه جعفری", "زهرا محمدی", "مینا کریمی"]
    },
    { 
        id: 5,
        title: "قهرمانی دو و میدانی",
        category: "دو و میدانی",
        year: "۱۴۰۱",
        exactDate: "۲۰ اسفند ۱۴۰۱",
        location: "شیراز",
        summary: "زهرا محمدی در ماده دو ۴۰۰ متر قهرمان کشور شد.",
        fullDescription: "زهرا محمدی دانشجوی ترم ۴ تربیت بدنی، در مسابقات دو و میدانی قهرمانی دانشجویان کشور موفق شد در ماده ۴۰۰ متر با ثبت زمان ۵۴.۲۳ ثانیه مدال طلا را از آن خود کند.",
        imageUrl: "https://cdn.tabnak.ir/files/fa/news/1403/2/7/1808909_398.jpg",
        medalName: "مدال طلا",
        achievers: ["زهرا محمدی"]
    }
];

let currentSearch = "";
let currentView = "list";
let selectedAchievement = null;

function renderList() {
    const container = document.getElementById('achievementsContainer');
    if (!container) return;

    let filtered = achievements.filter(item => {
        if (currentSearch && !item.title.includes(currentSearch) && !item.summary.includes(currentSearch)) return false;
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state">نتیجه‌ای یافت نشد</div>`;
        return;
    }

    container.innerHTML = `
        <div class="achievements-list">
            ${filtered.map(item => `
                <div class="achievement-card" onclick="showDetail(${item.id})">
                    <img class="achievement-img" src="${item.imageUrl}" alt="${escapeHtml(item.title)}">
                    <div class="achievement-content">
                        <div class="achievement-title">${escapeHtml(item.title)}</div>
                        <div class="achievement-meta">
                            <span class="achievement-year">${item.year}</span>
                            <span class="achievement-category">${item.category}</span>
                        </div>
                        <div class="achievement-summary">${escapeHtml(item.summary)}</div>
                        <button class="read-more-btn" onclick="event.stopPropagation(); showDetail(${item.id})">
                            مشاهده جزئیات
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>    
                    </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderDetail() {
    const container = document.getElementById('achievementsContainer');
    if (!container || !selectedAchievement) return;

    container.innerHTML = `
        <div class="detail-fullscreen">
            <div class="detail-header">
                <h1 class="detail-title">${escapeHtml(selectedAchievement.title)}</h1>
                <div class="detail-meta">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="8" x2="12" y2="12"/>
                            <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        ${selectedAchievement.exactDate}
                    </span>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                            <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z"/>
                        </svg>
                        ${selectedAchievement.medalName}
                    </span>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>
                            <path d="M10 4h4v2h-4V4z"/>
                        </svg>
                        ${selectedAchievement.location}
                    </span>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                            <path d="M4 6h16v12H4z"/>
                            <path d="M8 6v12"/>
                            <path d="M12 6v12"/>
                            <path d="M16 6v12"/>
                            <path d="M4 10h16"/>
                        </svg>
                        ${selectedAchievement.category}
                    </span>
                </div>
            </div>
            <img class="detail-img" src="${selectedAchievement.imageUrl}" alt="${escapeHtml(selectedAchievement.title)}">
            <div class="detail-content">
                <div class="detail-description">${escapeHtml(selectedAchievement.fullDescription)}</div>
                <div class="detail-achievers">
                    <div class="detail-achievers-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
                            <path d="M5 20v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2"/>
                        </svg>
                        اعضای تیم / ورزشکاران
                    </div>
                    <div class="achievers-list">
                        ${selectedAchievement.achievers.map(a => `<span class="achiever-tag">${escapeHtml(a)}</span>`).join('')}
                    </div>
                </div>
                <button class="back-btn" onclick="showList()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <path d="M5 12H19M12 5l7 7-7 7"/>
                    </svg>
                    بازگشت به لیست افتخارات
                </button>
            </div>
        </div>
    `;
}

function showDetail(id) {
    selectedAchievement = achievements.find(a => a.id === id);
    currentView = "detail";
    renderDetail();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showList() {
    currentView = "list";
    selectedAchievement = null;
    renderList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

renderList();

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value;
        if (currentView === "list") {
            renderList();
        }
    });
}

window.showDetail = showDetail;
window.showList = showList;

(function() {
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', function(e) { e.stopPropagation(); profileDropdown.classList.toggle('show'); });
        document.addEventListener('click', function(e) {
            if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
        });
    }
})();

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

function addMsg(t, isUser) {
    let m = document.createElement('div');
    m.className = 'message ' + (isUser ? 'user-message' : 'bot-message');
    m.textContent = t;
    msgDiv.appendChild(m);
    msgDiv.scrollTop = msgDiv.scrollHeight;
}

function getReply(msg) {
    for (let k in resp) {
        if (msg.includes(k)) return resp[k];
    }
    return 'پاسخگوی شما هستیم!';
}

function sendMsg() {
    let m = inp.value.trim();
    if (!m) return;
    addMsg(m, true);
    inp.value = '';
    setTimeout(() => addMsg(getReply(m), false), 400);
}

if (supBtn) {
    supBtn.onclick = () => chat.classList.toggle('active');
}

if (closeChat) {
    closeChat.onclick = () => chat.classList.remove('active');
}

if (send) {
    send.onclick = sendMsg;
}

if (inp) {
    inp.onkeypress = (e) => {
        if (e.key === 'Enter') sendMsg();
    };
}

qBtns.forEach(btn => {
    btn.onclick = () => {
        let m = btn.getAttribute('data-msg');
        addMsg(m, true);
        setTimeout(() => addMsg(getReply(m), false), 400);
    };
});
