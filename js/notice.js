const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
if (hamburger) hamburger.onclick = () => navMenu.classList.toggle('active-mobile');

const announcements = [
    {
        id: 1,
        title: "برگزاری مسابقات دارت دانشجویی",
        content: "مسابقه دارت درون دانشگاه برگزار میشود. برای شرکت در مسابقه از طریق پنل کاربری خود اقدام کنید. مهلت ثبت نام تا ۲۵ خرداد ماه می‌باشد. به نفرات برتر جوایز نفیسی اهدا خواهد شد.",
        date: "۱۴۰۵/۰۳/۱۵",
        author: "دکتر احمدی - مدیر تربیت بدنی",
        important: true
    },
    {
        id: 2,
        title: "تمدید مهلت ثبت‌نام ترم تابستان",
        content: "مهلت ثبت‌نام ترم تابستان تا تاریخ ۳۱ خرداد تمدید شد. علاقه‌مندان می‌توانند با مراجعه به سامانه آموزش نسبت به ثبت‌نام اقدام نمایند.",
        date: "۱۴۰۵/۰۳/۱۲",
        author: "دکتر کریمی - مدیر آموزش",
        important: true
    },
    {
        id: 3,
        title: "دوره مربیگری درجه ۳ بسکتبال",
        content: "دوره مربیگری درجه ۳ بسکتبال با حضور مدرسان فدراسیون برگزار می‌گردد. این دوره برای دانشجویان علاقه‌مند به مربیگری ویژه در نظر گرفته شده است.",
        date: "۱۴۰۵/۰۳/۱۰",
        author: "آقای رضایی - مسئول سالن",
        important: false
    },
    {
        id: 4,
        title: "تعطیلی سالن‌های ورزشی به مناسبت عید سعید فطر",
        content: "به مناسبت عید سعید فطر، کلیه سالن‌های ورزشی دانشگاه از تاریخ ۳۰ خرداد تا ۲ تیر ماه تعطیل می‌باشند.",
        date: "۱۴۰۵/۰۳/۰۸",
        author: "دکتر صادقی - مدیر ورزشی",
        important: true
    },
    {
        id: 5,
        title: "جشنواره ورزشی همگانی",
        content: "اولین جشنواره ورزشی همگانی با حضور تیم‌های مختلف از سراسر دانشگاه در تاریخ ۵ تیر ماه برگزار خواهد شد. از تمامی دانشجویان دعوت به عمل می‌آید.",
        date: "۱۴۰۵/۰۳/۰۵",
        author: "خانم حسینی - مدیر فرهنگی",
        important: false
    },
    {
        id: 6,
        title: "کارگاه تغذیه ورزشی",
        content: "کارگاه تخصصی تغذیه ورزشی با حضور اساتید مجرب در تاریخ ۱۵ تیر ماه برگزار می‌شود. ثبت‌نام از طریق پنل کاربری امکان‌پذیر است.",
        date: "۱۴۰۵/۰۳/۰۱",
        author: "دکتر مرادی - مدیر سلامت",
        important: false
    }
];

function renderAnnouncements() {
    const container = document.getElementById('announcementsList');
    if (!container) return;
    
    container.innerHTML = announcements.map(announcement => `
        <li class="announcement-item" onclick="openModal(${announcement.id})">
            <div class="announcement-icon">
                <div class="icon-announcement"></div>
            </div>
            <div class="announcement-content">
                <div class="announcement-title">
                    ${announcement.title}
                    <span class="announcement-date">${announcement.date}</span>
                </div>
                <div class="announcement-desc">
                    ${announcement.content.substring(0, 100)}${announcement.content.length > 100 ? '...' : ''}
                </div>
                <div class="announcement-footer">
                    <span class="announcement-author">${announcement.author}</span>
                    <span class="${announcement.important ? 'badge-important' : 'badge-normal'}">
                        ${announcement.important ? 'مهم' : 'عادی'}
                    </span>
                </div>
            </div>
        </li>
    `).join('');
}

function openModal(id) {
    const announcement = announcements.find(a => a.id === id);
    if (!announcement) return;
    
    document.getElementById('modalTitle').innerHTML = announcement.title;
    document.getElementById('modalDate').innerHTML = `تاریخ انتشار: ${announcement.date} | نویسنده: ${announcement.author}`;
    document.getElementById('modalBody').innerHTML = announcement.content;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};
const goUp = document.getElementById('goUpBtn');
if (goUp) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            goUp.classList.add('show');
        } else {
            goUp.classList.remove('show');
        }
    });
    
    goUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
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
renderAnnouncements();
