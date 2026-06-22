let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {
    isLoggedIn: true,
    name: "فاطمه محمدی"
};

let gyms = [
    { 
        id: 1,
        name: "باشگاه ستارگان",
        address: "قم، بلوار جمهوری، بعد از میدان سپاه، روبه‌روی اداره ارشاد",
        description: "باشگاه ستارگان می تواند انتخاب مناسبی برای شما باشد. در این مجموعه می توانید در رشته هایی مانند بدنسازی، فیتنس، فیزیک و فیزیک کلاسیک فعالیت کنید و از امکاناتی مانند اتاق ماساژ، دوش، کافی شاپ و بوفه بهره مند شوید.",
        imageUrl: "https://darqomkojast.ir/wp-content/uploads/2025/05/Stars-Gym-Qom.webp",
        submittedBy: "سارا احمدی",
        date: "۱۴۰۴/۰۲/۲۰",
        comments: [
            { id: 1, author: "مریم رضایی", text: "واقعاً باشگاه عالی‌ای هست، رفتم راضی بودم", date: "۱۴۰۴/۰۲/۲۱" },
            { id: 2, author: "نرگس کریمی", text: "هزینه‌اش چنده؟", date: "۱۴۰۴/۰۲/۲۲" },
            { id: 3, author: "زهرا حسینی", text: "ساعت کاریش چطوره؟", date: "۱۴۰۴/۰۲/۲۳" },
            { id: 4, author: "سارا احمدی", text: "خیلی باشگاه خوبیه حتما برید", date: "۱۴۰۴/۰۲/۲۴" },
            { id: 5, author: "فاطمه محمدی", text: "دستشویی‌هاش تمیزه؟", date: "۱۴۰۴/۰۲/۲۵" },
        ]
    },
    { 
        id: 2,
        name: "باشگاه بدنسازی متین",
        address: " قم، خیابان بقیه الله، جنب کارواش",
        description: "این باشگاه با مشاوره تخصصی تغذیه، برنامه تمرینی شخصی سازی شده، کمدهای قفل دار و امکانات بهداشتی مجهز، محیطی ایمن و آرام را فراهم کرده تا بتوانید با تمرکز کامل روی اهداف ورزشی خود کار کنید.",
        imageUrl: "https://darqomkojast.ir/wp-content/uploads/2025/05/Matin-Gym-Qom.webp",
        submittedBy: "مریم کریمی",
        date: "۱۴۰۴/۰۲/۱۸",
        comments: [
            { id: 1, author: "فاطمه محمدی", text: "محیط بسیار تمیز و مربیان حرفه‌ای", date: "۱۴۰۴/۰۲/۱۹" }
        ]
    },
    { 
        id: 3,
        name: "باشگاه ورزشی آریا",
        address: "قم، صفاشهر، بلوار الغدیر",
        description: "فضای بزرگ و مجهز به تهویه مناسب این باشگاه، شرایطی راحت و ایده آل برای تمرین در هر فصل سال فراهم می کند.",
        imageUrl: "https://darqomkojast.ir/wp-content/uploads/2025/05/Max-Gym-Qom.webp",
        submittedBy: "زهرا حسینی",
        date: "۱۴۰۴/۰۲/۱۵",
        comments: []
    },
    { 
        id: 4,
        name: "باشگاه سپهر",
        address: "قم، خیابان امام خمینی، نبش کوچه ۸",
        description: "شرایطی عالی برای تمرینات حرفه ای فراهم می کند.",
        imageUrl: "https://darqomkojast.ir/wp-content/uploads/2025/05/Novin-Gym-Qom.webp",
        submittedBy: "نرگس رحیمی",
        date: "۱۴۰۴/۰۲/۱۲",
        comments: []
    },
    { 
        id: 5,
        name: "باشگاه بدنسازی جوان",
        address: "قم، بلوار شهید بهشتی، بین کوچه 3 و 5",
        description: "این باشگاه در رشته هایی مانند بدنسازی، فیتنس، آمادگی جسمانی، کراس فیت و بوکس فعالیت می کند و با ارائه خدمات متنوع، انتخابی عالی برای علاقه مندان به ورزش در قم محسوب می شود.",
        imageUrl: "https://darqomkojast.ir/wp-content/uploads/2025/05/Javan-Gym-Qom.webp",
        submittedBy: "فاطمه محمدی",
        date: "۱۴۰۴/۰۲/۱۰",
        comments: []
    }
];

let currentSearch = "";
let commentsVisible = {};

function saveGyms() {
    localStorage.setItem('gymsList', JSON.stringify(gyms));
}

function loadGyms() {
    const saved = localStorage.getItem('gymsList');
    if (saved) {
        gyms = JSON.parse(saved);
    } else {
        saveGyms();
    }
}

function formatDate() {
    const now = new Date();
    return `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
}

function addComment(gymId, commentText) {
    if (!currentUser.isLoggedIn) {
        showToast("برای ثبت کامنت ابتدا وارد شوید", true);
        return false;
    }

    if (!commentText.trim()) {
        showToast("لطفاً متن کامنت را وارد کنید", true);
        return false;
    }

    const gym = gyms.find(g => g.id === gymId);
    if (!gym) return false;

    const newComment = {
        id: Date.now(),
        author: currentUser.name,
        text: commentText.trim(),
        date: formatDate()
    };

    gym.comments.push(newComment);
    saveGyms();
    renderGyms();
    showToast("کامنت شما با موفقیت ثبت شد");
    return true;
}

function toggleCommentsVisibility(gymId) {
    const commentsList = document.getElementById(`comments-list-${gymId}`);
    if (commentsList) {
        const isCurrentlyVisible = commentsVisible[gymId];
        if (isCurrentlyVisible) {
            commentsList.classList.remove('show');
            commentsVisible[gymId] = false;
        } else {
            commentsList.classList.add('show');
            commentsVisible[gymId] = true;
        }
    }
}

function renderGyms() {
    const container = document.getElementById('gymsContainer');
    if (!container) return;

    let filtered = gyms.filter(gym => {
        if (currentSearch && !gym.name.includes(currentSearch) && !gym.address.includes(currentSearch) && !gym.description.includes(currentSearch)) return false;
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state">نتیجه‌ای یافت نشد</div>`;
        return;
    }

    container.innerHTML = `
        <div class="gyms-list">
            ${filtered.map(gym => {
                const isVisible = commentsVisible[gym.id] || false;
                const hasComments = gym.comments.length > 0;
                const commentsCount = gym.comments.length;
                
                return `
                    <div class="gym-card">
                        <img class="gym-img" src="${gym.imageUrl}" alt="${escapeHtml(gym.name)}" onerror="this.src='https://via.placeholder.com/400x160?text=No+Image'">
                        <div class="gym-content">
                            <div class="gym-name">${escapeHtml(gym.name)}</div>
                            <div class="gym-address">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                                    <circle cx="12" cy="9" r="2.5"/>
                                </svg>
                                ${escapeHtml(gym.address)}
                            </div>
                            <div class="gym-desc">${escapeHtml(gym.description)}</div>
                            <div class="gym-meta">
                                <span>👤 معرفی توسط: ${escapeHtml(gym.submittedBy)}</span>
                                <span>📅 ${gym.date}</span>
                            </div>
                            
                            <div class="comments-section">
                                <div class="comments-header">
                                    <span class="comments-count">💬 ${commentsCount} نظر</span>
                                    <button class="toggle-comments-btn" onclick="toggleCommentsVisibility(${gym.id})">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <polyline points="${isVisible ? '18 15 12 9 6 15' : '6 9 12 15 18 9'}"/>
                                        </svg>
                                        ${isVisible ? 'بستن نظرات' : (hasComments ? 'دیدن نظرات' : 'بدون نظر')}
                                    </button>
                                </div>
                                <div class="comments-list ${isVisible ? 'show' : ''}" id="comments-list-${gym.id}">
                                    ${hasComments ? `
                                        <div class="comments-scroll-container">
                                            ${gym.comments.map(comment => `
                                                <div class="comment-item">
                                                    <div class="comment-author">${escapeHtml(comment.author)}</div>
                                                    <div class="comment-text">${escapeHtml(comment.text)}</div>
                                                    <div class="comment-date">${comment.date}</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    ` : `
                                        <div class="no-comments">هنوز نظری ثبت نشده است</div>
                                    `}
                                    
                                    ${currentUser.isLoggedIn ? `
                                        <div class="add-comment-form" id="comment-form-${gym.id}">
                                            <textarea id="comment-text-${gym.id}" rows="2" placeholder="نظر خود را بنویسید..."></textarea>
                                            <button class="comment-submit-btn" onclick="submitComment(${gym.id})">ارسال نظر</button>
                                        </div>
                                    ` : `
                                        <div class="login-message">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#856404" stroke-width="1.5">
                                                <circle cx="12" cy="12" r="10"/>
                                                <line x1="12" y1="8" x2="12" y2="12"/>
                                                <circle cx="12" cy="16" r="0.5" fill="#856404" stroke="none"/>
                                            </svg>
                                            برای ثبت نظر ابتدا وارد حساب کاربری خود شوید
                                        </div>
                                    `}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function submitComment(gymId) {
    const textarea = document.getElementById(`comment-text-${gymId}`);
    if (!textarea) return;
    const commentText = textarea.value;
    if (addComment(gymId, commentText)) {
        textarea.value = '';
        if (!commentsVisible[gymId]) {
            commentsVisible[gymId] = true;
        }
    }
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

window.toggleCommentsVisibility = toggleCommentsVisibility;
window.submitComment = submitComment;

loadGyms();
renderGyms();

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value;
        renderGyms();
    });
}

(function() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) { e.stopPropagation(); navMenu.classList.toggle('active-mobile'); });
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active-mobile') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active-mobile');
            }
        });
    }
})();

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
