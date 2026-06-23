let articles = [
    { 
        id: 1, 
        title: "۵ اشتباه رایج در بدنسازی", 
        summary: "آشنایی با اشتباهات رایج و راهکارهای جلوگیری از آسیب در بدنسازی", 
        date: "۱۴۰۴/۰۲/۲۰",
        readTime: "۵ دقیقه",
        imageUrl: "https://www.chinod.ir/wp-content/uploads/2024/09/sport-Common-mistakes-in-sports-training-chinod-4.jpg",
        hashtags: ["بدنسازی", "تمرین", "آسیب‌شناسی"],
        fullText: "در این مقاله به بررسی ۵ اشتباه رایج در بدنسازی می‌پردازیم:\n\n۱. انجام حرکات با فرم نامناسب\n۲. عدم توجه به گرم کردن قبل از تمرین\n۳. سنگین کردن بیش از حد وزنه‌ها\n۴. استراحت ناکافی بین ستها\n۵. تغذیه نامناسب بعد از تمرین\n\nبرای جلوگیری از آسیب و بهبود نتایج، حتماً به این نکات توجه کنید."
    },
    { 
        id: 2, 
        title: "تغذیه قبل و بعد از تمرین", 
        summary: "چه بخوریم تا بهترین نتیجه را از تمرین بگیریم؟ راهنمای کامل تغذیه ورزشی", 
        date: "۱۴۰۴/۰۲/۱۸",
        readTime: "۷ دقیقه",
        imageUrl: "https://hatmipg.com/wp-content/uploads/2025/04/Flux_Dev_A_splitscene_illustration_showing_two_fitnessthemed_m_1-copy.webp",
        hashtags: ["تغذیه ورزشی", "پروتئین", "کربوهیدرات"],
        fullText: "تغذیه صحیح قبل و بعد از تمرین نقش حیاتی در عملکرد و ریکاوری دارد.\n\nقبل از تمرین:\n- ۲ ساعت قبل: وعده اصلی حاوی کربوهیدرات و پروتئین\n- ۳۰ دقیقه قبل: موز یا خرما\n\nبعد از تمرین:\n- ۳۰ دقیقه اول: پروتئین سریع جذب\n- ۲ ساعت بعد: وعده کامل حاوی پروتئین و کربوهیدرات"
    },
    { 
        id: 3, 
        title: "حرکات اصلاحی برای گردن و کمر", 
        summary: "تمرینات ساده برای کاهش دردهای نشیمنگاهی و بهبود وضعیت بدنی", 
        date: "۱۴۰۴/۰۲/۱۵",
        readTime: "۶ دقیقه",
        imageUrl: "img/sport-article.jpg",
        hashtags: ["حرکات اصلاحی", "گردن درد", "کمر درد"],
        fullText: "دردهای گردن و کمر از مشکلات شایع در میان دانشجویان است. این حرکات ساده می‌تواند کمک کننده باشد:\n\n۱. کشش گردن به طرفین\n۲. چرخش شانه‌ها\n۳. حرکت گربه و شتر\n۴. پل زدن\n۵. تمرین تی آر ای\n\nاین حرکات را روزانه انجام دهید."
    },
    { 
        id: 4, 
        title: "راهنمای شروع دویدن برای مبتدیان", 
        summary: "از صفر تا ده کیلومتر دویدن بدون آسیب، برنامه مخصوص مبتدیان", 
        date: "۱۴۰۴/۰۲/۱۲",
        readTime: "۸ دقیقه",
        imageUrl: "img/sport-article1.jpg",
        hashtags: ["دویدن", "مبتدیان", "برنامه تمرینی"],
        fullText: "شروع دویدن می‌تواند چالش‌برانگیز باشد. این برنامه ۸ هفته‌ای را دنبال کنید:\n\nهفته ۱-۲: دویدن ۱ دقیقه، پیاده‌روی ۲ دقیقه (تکرار ۸ بار)\nهفته ۳-۴: دویدن ۲ دقیقه، پیاده‌روی ۱ دقیقه\nهفته ۵-۶: دویدن ۴ دقیقه، پیاده‌روی ۱ دقیقه\nهفته ۷-۸: دویدن ۱۰ دقیقه پیوسته"
    },
    { 
        id: 5, 
        title: "اهمیت حرکات کششی در ورزش", 
        summary: "چرا کشش قبل و بعد از تمرین ضروری است؟ انواع حرکات کششی و فواید آنها", 
        date: "۱۴۰۴/۰۲/۱۰",
        readTime: "۴ دقیقه",
        imageUrl: "https://agrinsportgroup.com/wp-content/uploads/2024/10/Types-of-stretching-movements.jpg",
        hashtags: ["کشش", "انعطاف‌پذیری", "ریکاوری"],
        fullText: "حرکات کششی بخش جدایی‌ناپذیر هر برنامه ورزشی است.\n\nفواید:\n- افزایش انعطاف‌پذیری\n- کاهش خطر آسیب\n- بهبود جریان خون\n- کاهش درد عضلانی\n\nانواع کشش: ایستا، پویا، باند الاستیک"
    }
];

let currentSearch = "";
let currentView = "list";
let selectedArticle = null;

const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');

function getMetaIcon(type) {
    if (type === 'date') {
        return `<svg class="meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>`;
    } else {
        return `<svg class="meta-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                </svg>`;
    }
}

function renderList() {
    const container = document.getElementById('articlesContainer');
    if (!container) return;

    let filtered = articles.filter(article => {
        if (currentSearch && !article.title.includes(currentSearch) && !article.summary.includes(currentSearch)) return false;
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state">نتیجه‌ای یافت نشد</div>`;
        return;
    }

    container.innerHTML = `
        <div class="articles-list">
            ${filtered.map(article => `
                <div class="article-card" onclick="showArticle(${article.id})">
                    <div class="article-image" style="background-image: url('${article.imageUrl}');"></div>
                    <div class="article-content">
                        <div class="article-title">${escapeHtml(article.title)}</div>
                        <div class="article-meta">
                            <span>${getMetaIcon('date')} ${article.date}</span>
                            <span>${getMetaIcon('time')} ${article.readTime}</span>
                        </div>
                        <div class="article-summary">${escapeHtml(article.summary)}</div>
                        <div class="hashtags">
                            ${article.hashtags.map(tag => `<span class="hashtag">#${escapeHtml(tag)}</span>`).join('')}
                        </div>
                        <button class="read-more-btn" onclick="event.stopPropagation(); showArticle(${article.id})">
                            ادامه مطلب
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
    const container = document.getElementById('articlesContainer');
    if (!container || !selectedArticle) return;

    container.innerHTML = `
        <div class="article-detail">
            <div class="detail-header">
                <h1 class="detail-title">${escapeHtml(selectedArticle.title)}</h1>
                <div class="detail-meta">
                    <span>${getMetaIcon('date')} ${selectedArticle.date}</span>
                    <span>${getMetaIcon('time')} ${selectedArticle.readTime} مطالعه</span>
                </div>
                <div class="detail-hashtags">
                    ${selectedArticle.hashtags.map(tag => `<span class="detail-hashtag">#${escapeHtml(tag)}</span>`).join('')}
                </div>
            </div>
            <div class="detail-image" style="background-image: url('${selectedArticle.imageUrl}');"></div>
            <div class="detail-content">
                <div class="detail-text">${escapeHtml(selectedArticle.fullText).replace(/\n/g, '<br>')}</div>
                <button class="back-btn" onclick="showList()">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <path d="M5 12H19M12 5l7 7-7 7"/>
                    </svg>
                    بازگشت به لیست مقالات		
                </button>
            </div>
        </div>
    `;
}

function showArticle(id) {
    selectedArticle = articles.find(a => a.id === id);
    currentView = "detail";
    searchBar.classList.add('hide');
    renderDetail();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showList() {
    currentView = "list";
    selectedArticle = null;
    searchBar.classList.remove('hide');
    renderList();
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

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value;
        if (currentView === "list") {
            renderList();
        }
    });
}

window.showArticle = showArticle;
window.showList = showList;

renderList();

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
