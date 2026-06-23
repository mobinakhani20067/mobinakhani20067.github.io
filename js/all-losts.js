    const goUp = document.getElementById('goUpBtn');
    window.onscroll = () => { window.scrollY > 300 ? goUp.classList.add('show') : goUp.classList.remove('show'); };
    goUp.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    let currentItemId = null;

    let lostItems = [
        { id: 1, name: "کیف ورزشی مشکی", location: "سالن ", date: "1405/03/15", status: "found" },
        { id: 2, name: "بطری آب", location: "سالن", date: "1405/03/13", status: "searching" },
        { id: 3, name: "ساعت هوشمند ", location: "رختکن سالن", date: "1405/03/10", status: "searching" },
        { id: 4, name: "هدفون بی سیم", location: "سالن ", date: "1405/03/08", status: "found" },
        { id: 5, name: "کفش ورزشی", location: "رختکن", date: "1405/03/05", status: "searching"},
        { id: 6, name: "کیف پول", location: "محوطه دانشگاه", date: "1405/03/01", status: "found"}
    ];

    function renderLostList(filter = "all") {
        const container = document.getElementById('lostList');
        if (!container) return;

        let filteredItems = lostItems;
        if (filter === "searching") {
            filteredItems = lostItems.filter(item => item.status === "searching");
        } else if (filter === "found") {
            filteredItems = lostItems.filter(item => item.status === "found");
        }

        if (filteredItems.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 50px; background: rgba(255,255,255,0.08); border-radius: 28px; color: rgba(255,255,255,0.6);">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/>
                        <path d="M12 2v12m-3-3 3 3 3-3"/>
                        <path d="M4 8h16"/>
                    </svg>
                    <p style="margin-top: 15px;">هیچ وسیله‌ای در این دسته یافت نشد</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredItems.map(item => `
            <div class="lost-item-card">
                <div class="lost-info">
                    <div class="lost-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            ${item.name.includes("کیف") ? '<path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/><path d="M10 4h4v2h-4V4z"/>' :
                            item.name.includes("ساعت") ? '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' :
                            item.name.includes("بطری") ? '<path d="M14 2H6v20h12V2z"/><path d="M14 2v4h-4V2"/>' :
                            '<path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="M12 2v12m-3-3 3 3 3-3"/><path d="M4 8h16"/>'}
                        </svg>
                    </div>
                    <div class="lost-details">
                        <h4>${item.name}</h4>
                        <div class="lost-meta">
                            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg> ${item.location}</span>
                            <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${item.date}</span>
                        </div>
                    </div>
                </div>
                <div class="lost-actions">
                    <span class="status-badge ${item.status === 'found' ? 'status-found' : 'status-searching'}">
                        ${item.status === 'found' ? 'پیدا شده' : 'در جستجو'}
                    </span>
                    <button class="claim-btn" onclick="openClaimModal(${item.id}, '${item.name}')">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/>
                            <path d="M12 2v12m-3-3 3 3 3-3"/>
                            <path d="M4 8h16"/>
                        </svg>
                        من مالک این وسیله هستم
                    </button>
                </div>
            </div>
        `).join('');
    }

    function openClaimModal(itemId, itemName) {
        currentItemId = itemId;
        document.getElementById('claimantName').value = '';
        document.getElementById('claimantPhone').value = '';
        document.getElementById('claimantDesc').value = '';
        document.getElementById('modalTitle').innerHTML = `ادعای مالکیت: ${itemName}`;
        document.getElementById('claimModal').style.display = 'flex';
    }

    function closeClaimModal() {
        document.getElementById('claimModal').style.display = 'none';
        currentItemId = null;
    }

    function submitClaim() {
        const name = document.getElementById('claimantName').value.trim();
        const phone = document.getElementById('claimantPhone').value.trim();
        const desc = document.getElementById('claimantDesc').value.trim();
        
        if (!name) {
            alert('لطفا نام و نام خانوادگی خود را وارد کنید');
            return;
        }
        if (!phone) {
            alert('لطفا شماره تماس خود را وارد کنید');
            return;
        }
        if (phone.length !== 11 || !phone.startsWith('09')) {
            alert('شماره تماس باید ۱۱ رقم و با 09 شروع شود');
            return;
        }
        if (!desc) {
            alert('لطفا مشخصات وسیله را وارد کنید');
            return;
        }
        
        const item = lostItems.find(i => i.id === currentItemId);
        
        console.log('درخواست ادعای مالکیت:');
        console.log(`وسیله: ${item.name}`);
        console.log(`مکان: ${item.location}`);
        console.log(`تاریخ ثبت: ${item.date}`);
        console.log(`نام: ${name}`);
        console.log(`شماره تماس: ${phone}`);
        console.log(`توضیحات: ${desc}`);
        
        alert(`درخواست شما برای وسیله "${item.name}" با موفقیت ثبت شد.\n\nپشتیبانی در اسرع وقت با شما تماس خواهد گرفت.`);
        
        closeClaimModal();
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            renderLostList(filter);
        });
    });

    window.onclick = (e) => {
        const modal = document.getElementById('claimModal');
        if (e.target === modal) closeClaimModal();
    };
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
    renderLostList('all');
