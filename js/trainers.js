const defaultProfile="https://4kia.ir/s4/img_project/44748_1561984670.jpg";
    let trainers = [
        { 
            id: 1, 
            name: "نرگس مولایی", 
            specialty: "ورزش های رزمی",
            bio: "مربی تربیت بدنی دانشگاه با ۷ سال سابقه تدریس.",
            fullBio: "فاطمه احمدی فارغ‌التحصیل رشته تربیت بدنی از دانشگاه آزاد قم است. ایشان به عنوان مربی تربیت بدنی دانشگاه مشغول به فعالیت بوده و کلاس‌های آمادگی جسمانی و ورزش‌های پایه را برگزار می‌کنند.",
            contact: "@fatemeh.ahmadi",
            imageUrl: defaultProfile
        },
        { 
            id: 2, 
            name: "زهرا رضایی", 
            specialty: "آمادگی جسمانی",
            bio: "مربی آمادگی جسمانی و حرکات اصلاحی.",
            fullBio: "زهرا رضایی کارشناس ارشد فیزیولوژی ورزشی است. ایشان در زمینه آمادگی جسمانی و حرکات اصلاحی تخصص دارند و به دانشجویان در بهبود وضعیت بدنی کمک می‌کنند.",
            contact: "@zahra.rezaei",
            imageUrl: defaultProfile
        },
        { 
            id: 3, 
            name: "مریم حسینی", 
            specialty: "ورزش‌های توپی",
            bio: "مربی رسمی فدراسیون والیبال و بسکتبال.",
            fullBio: "مریم حسینی دارای مدرک مربیگری درجه یک فدراسیون والیبال و بسکتبال است. ایشان تیم‌های ورزشی دانشگاه را در مسابقات ملی هدایت کرده‌اند.",
            contact: "@maryam.hosseini",
            imageUrl: defaultProfile
        },
        { 
            id: 4, 
            name: "سارا کریمی", 
            specialty: "ورزش های توپی ",
            bio: "مسئول فنی سالن‌های ورزشی دانشگاه.",
            fullBio: "سارا کریمی با ۱۲ سال سابقه مدیریت و مربیگری در سالن‌های ورزشی، مسئولیت نظارت بر اجرای صحیح برنامه‌های ورزشی دانشجویان را بر عهده دارند.",
            contact: "@sara.karimi",
            imageUrl: defaultProfile
        },
        { 
            id: 5, 
            name: "مهسا علیپور", 
            specialty: "ورزش های توپی",
            bio: "مربی برنامه‌ریزی تمرینات ورزشی.",
            fullBio: "مهسا علیپور دارای مدرک تخصصی در زمینه برنامه‌ریزی تمرینات ورزشی برای دانشجویان در سطوح مختلف آمادگی جسمانی است.",
            contact: "@mahsa.alipour",
            imageUrl: defaultProfile
        }
    ];

        let currentSearch = "";
        let currentView = "list";
        let selectedTrainer = null;

        const searchBar = document.getElementById('searchBar');
        const searchInput = document.getElementById('searchInput');

        function renderList() {
            const container = document.getElementById('trainersContainer');
            if (!container) return;

            let filtered = trainers.filter(trainer => {
                if (currentSearch && !trainer.name.includes(currentSearch) && !trainer.specialty.includes(currentSearch) && !trainer.bio.includes(currentSearch)) return false;
                return true;
            });

            if (filtered.length === 0) {
                container.innerHTML = `<div class="empty-state">نتیجه‌ای یافت نشد</div>`;
                return;
            }

            container.innerHTML = `
                <div class="trainers-grid">
                    ${filtered.map(trainer => `
                        <div class="trainer-card" onclick="showTrainerDetail(${trainer.id})">
                            <div class="trainer-image" style="background-image: url('${trainer.imageUrl}');"></div>
                            <div class="trainer-content">
                                <div class="trainer-name">${escapeHtml(trainer.name)}</div>
                                <span class="trainer-specialty">${escapeHtml(trainer.specialty)}</span>
                                <div class="trainer-bio">${escapeHtml(trainer.bio)}</div>
                                <div class="trainer-contact">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                    </svg>
                                    ${escapeHtml(trainer.contact)}
                                </div>
                                <button class="contact-btn" onclick="event.stopPropagation(); showTrainerDetail(${trainer.id})">
								مشاهده پروفایل
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
            const container = document.getElementById('trainersContainer');
            if (!container || !selectedTrainer) return;

            container.innerHTML = `
                <div class="trainer-detail">
                    <div class="detail-header">
                        <h1 class="detail-name">${escapeHtml(selectedTrainer.name)}</h1>
                        <span class="detail-specialty">${escapeHtml(selectedTrainer.specialty)}</span>
                    </div>
                    <div class="detail-image" style="background-image: url('${selectedTrainer.imageUrl}');"></div>
                    <div class="detail-content">
                        <div class="detail-bio">${escapeHtml(selectedTrainer.fullBio)}</div>
                        <div class="detail-contact">
                            <div class="detail-contact-title">راه‌های ارتباطی</div>
                            <div class="detail-contact-info">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                                </svg>
                                <span>${escapeHtml(selectedTrainer.contact)}</span>
                            </div>
                        </div>
                        <button class="back-btn" onclick="showList()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
								<path d="M5 12H19M12 5l7 7-7 7"/>
							</svg>
						بازگشت به لیست مربیان
                        </button>
                    </div>
                </div>
            `;
        }

        function showTrainerDetail(id) {
            selectedTrainer = trainers.find(t => t.id === id);
            currentView = "detail";
            searchBar.classList.add('hide');
            renderDetail();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function showList() {
            currentView = "list";
            selectedTrainer = null;
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

        window.showTrainerDetail = showTrainerDetail;
        window.showList = showList;

        renderList();

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
