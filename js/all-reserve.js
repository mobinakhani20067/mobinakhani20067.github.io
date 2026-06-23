const goUp = document.getElementById('goUpBtn');
window.onscroll = () => { window.scrollY > 300 ? goUp.classList.add('show') : goUp.classList.remove('show'); };
goUp.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

let reserveItems = [
    { id: 1, name: "سالن بسکتبال", date: "۱۴۰۵/۰۳/۱۵", time: "۰۸:۰۰ تا ۱۰:۰۰", status: "confirmed" },
    { id: 2, name: "سالن فوتسال", date: "۱۴۰۵/۰۳/۱۷", time: "۱۰:۰۰ تا ۱۲:۰۰", status: "pending" },
    { id: 3, name: "سالن بدمینتون", date: "۱۴۰۵/۰۳/۱۸", time: "۱۴:۰۰ تا ۱۶:۰۰", status: "confirmed" },
    { id: 4, name: "زمین تنیس", date: "۱۴۰۵/۰۳/۲۰", time: "۱۶:۰۰ تا ۱۸:۰۰", status: "pending" },
    { id: 5, name: "سالن والیبال", date: "۱۴۰۵/۰۳/۲۲", time: "۰۹:۰۰ تا ۱۱:۰۰", status: "confirmed" },
    { id: 6, name: "سالن پینگ پنگ", date: "۱۴۰۵/۰۳/۲۵", time: "۱۷:۰۰ تا ۱۹:۰۰", status: "confirmed" }
];

function formatDate(dateStr) {
    const parts = dateStr.split('/');
    if (parts.length === 3) {
        return `${parts[0]}/${parts[1]}/${parts[2]}`;
    }
    return dateStr;
}

function renderReserveList(filter = "all") {
    const container = document.getElementById('reserveList');
    if (!container) return;

    let filteredItems = reserveItems;
    if (filter === "confirmed") {
        filteredItems = reserveItems.filter(item => item.status === "confirmed");
    } else if (filter === "pending") {
        filteredItems = reserveItems.filter(item => item.status === "pending");
    }

    if (filteredItems.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px; background: rgba(255,255,255,0.08); border-radius: 28px; color: rgba(255,255,255,0.5);">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <p style="margin-top: 15px;">هیچ رزروی در این دسته یافت نشد</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredItems.map(item => {
        let icon = "🏀";
        if (item.name.includes("فوتسال")) icon = "⚽";
        else if (item.name.includes("بدمینتون")) icon = "🏸";
        else if (item.name.includes("تنیس")) icon = "🎾";
        else if (item.name.includes("والیبال")) icon = "🏐";
        else if (item.name.includes("پینگ")) icon = "🏓";
        
        return `
            <div class="reserve-item-card">
                <div class="reserve-info">
                    <div class="reserve-icon">${icon}</div>
                    <div class="reserve-details">
                        <h4>${item.name}</h4>
                        <div class="reserve-meta">
                            <span>${formatDate(item.date)}</span>
                            <span>${item.time}</span>
                        </div>
                    </div>
                </div>
                <div class="reserve-actions">
                    <span class="status-badge ${item.status === 'confirmed' ? 'status-confirmed' : 'status-pending'}">
                        ${item.status === 'confirmed' ? 'تأیید شده' : 'در انتظار'}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        renderReserveList(filter);
    });
});
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
renderReserveList('all');
