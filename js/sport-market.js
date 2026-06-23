let listings = [
    { id: 1, type: "rent", title: "راکت تنیس حرفه‌ای", price: "30,000", desc: "راکت حرفه‌ای برند ویلسون، یک ماه اجاره", owner: "سارا احمدی", contact: "@sara.ahmadi", date: "۱۴۰۴/۰۲/۲۰" },
    { id: 2, type: "sale", title: "توپ فوتبال", price: "250,000", desc: "توپ فوتبال استاندارد، کم کارکرد", owner: "مریم کریمی", contact: "09123456789", date: "۱۴۰۴/۰۲/۱۸" },
    { id: 3, type: "donate", title: "دمبل 5 کیلویی", price: "رایگان", desc: "کاملاً نو، فقط یکبار استفاده", owner: "زهرا حسینی", contact: "@zahra.h", date: "۱۴۰۴/۰۲/۱۵" },
    { id: 4, type: "rent", title: "تشک یوگا", price: "15,000", desc: "تشک یوگا با ضخامت مناسب", owner: "نرگس رحیمی", contact: "09198765432", date: "۱۴۰۴/۰۲/۱۴" },
    { id: 5, type: "sale", title: "ساک ورزشی", price: "180,000", desc: "ساک بزرگ برند نایک، در حد نو", owner: "فاطمه محمدی", contact: "@fatemeh.m", date: "۱۴۰۴/۰۲/۱۲" },
    { id: 6, type: "donate", title: "کفش کوهپیمایی", price: "رایگان", desc: "سایز 38، فقط دو بار استفاده", owner: "مینا احمدی", contact: "09123334455", date: "۱۴۰۴/۰۲/۱۰" }
];

let currentFilter = "all";
let currentSearch = "";
let selectedListing = null;

function saveListings() {
    localStorage.setItem('marketplaceListings', JSON.stringify(listings));
}

function loadListings() {
    const saved = localStorage.getItem('marketplaceListings');
    if (saved) {
        listings = JSON.parse(saved);
    } else {
        saveListings();
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
                left: 50%;
                transform: translateX(-50%) translateY(100px);
                background: #27ae60;
                color: white;
                padding: 12px 24px;
                border-radius: 30px;
                font-size: 13px;
                z-index: 10000;
                opacity: 0;
                transition: all 0.3s ease;
                pointer-events: none;
                white-space: nowrap;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            }
            .toast-msg.show {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            .toast-msg.error {
                background: #e74c3c;
            }
            @media (max-width: 768px) {
                .toast-msg { white-space: normal; text-align: center; max-width: 80%; font-size: 11px; }
            }
        `;
        document.head.appendChild(style);
    }
    
    toast.textContent = msg;
    toast.classList.add('show');
    if (isError) toast.classList.add('error');
    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.remove('error');
    }, 3000);
}

function getTypeIcon(type) {
    if (type === "rent") {
        return `<img src="img/rent.png" width='70px' class="icon-rent">`;
    } else if (type === "sale") {
        return `<img src="img/icon-sale.png" width='70px' class="icon-sale">`;
    } else {
        return `<img src="img/donate.png" width='70px' class="icon-donate">`;
    }
}

function renderListings() {
    const container = document.getElementById('listingsGrid');
    if (!container) return;

    let filtered = listings.filter(item => {
        if (currentFilter !== "all" && item.type !== currentFilter) return false;
        if (currentSearch && !item.title.includes(currentSearch) && !item.desc.includes(currentSearch) && !item.owner.includes(currentSearch)) return false;
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state">نتیجه‌ای یافت نشد</div>`;
        return;
    }

    container.innerHTML = filtered.map(item => {
        const priceClass = item.type === "rent" ? "rent" : (item.type === "sale" ? "sale" : "donate");
        const priceText = item.price === "رایگان" ? "رایگان" : item.price + " تومان";
        
        return `
            <div class="listing-card">
                <div class="listing-image ${item.type}">
                    ${getTypeIcon(item.type)}
                </div>
                <div class="listing-content">
                    <div class="listing-header">
                        <span class="listing-title">${escapeHtml(item.title)}</span>
                        <span class="listing-price ${priceClass}">${priceText}</span>
                    </div>
                    <div class="listing-desc">${escapeHtml(item.desc)}</div>
                    <div class="listing-owner">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
                            <path d="M5 20v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2"/>
                        </svg>
                        ${escapeHtml(item.owner)}
                    </div>
                    <div class="listing-date">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${item.date}
                    </div>
                    <button class="contact-btn" onclick="window.openMessageModal(${item.id})">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5">
                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                        </svg>
                        ارسال پیام
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

window.openMessageModal = function(id) {
    selectedListing = listings.find(l => l.id === id);
    if (!selectedListing) return;
    
    const recipientEl = document.getElementById('messageRecipient');
    if (recipientEl) {
        recipientEl.innerHTML = `ارسال پیام به: <strong>${escapeHtml(selectedListing.owner)}</strong>`;
    }
    
    const nameInput = document.getElementById('senderName');
    const contactInput = document.getElementById('senderContact');
    const textInput = document.getElementById('messageText');
    
    if (nameInput) nameInput.value = '';
    if (contactInput) contactInput.value = '';
    if (textInput) textInput.value = '';
    
    const modal = document.getElementById('messageModal');
    if (modal) modal.style.display = 'flex';
}

window.closeMessageModal = function() {
    const modal = document.getElementById('messageModal');
    if (modal) modal.style.display = 'none';
}

function sendMessage() {
    const nameInput = document.getElementById('senderName');
    const contactInput = document.getElementById('senderContact');
    const textInput = document.getElementById('messageText');
    
    const name = nameInput ? nameInput.value.trim() : '';
    const contact = contactInput ? contactInput.value.trim() : '';
    const message = textInput ? textInput.value.trim() : '';

    if (!name) { showToast("لطفاً نام خود را وارد کنید", true); return; }
    if (!contact) { showToast("لطفاً شماره تماس یا آیدی را وارد کنید", true); return; }
    if (!message) { showToast("لطفاً متن پیام را وارد کنید", true); return; }

    let messages = JSON.parse(localStorage.getItem('marketplaceMessages')) || [];
    messages.push({
        listingId: selectedListing.id,
        listingTitle: selectedListing.title,
        owner: selectedListing.owner,
        ownerContact: selectedListing.contact,
        senderName: name,
        senderContact: contact,
        message: message,
        date: new Date().toLocaleDateString('fa-IR'),
        time: new Date().toLocaleTimeString('fa-IR')
    });
    localStorage.setItem('marketplaceMessages', JSON.stringify(messages));

    closeMessageModal();
    showToast(`پیام شما برای ${selectedListing.owner} ارسال شد.`);
}

document.addEventListener('DOMContentLoaded', function() {
    loadListings();
    renderListings();
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderListings();
        });
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            currentSearch = this.value;
            renderListings();
        });
    }
    
    const sendMsgBtn = document.getElementById('sendMsgBtn');
    if (sendMsgBtn) {
        const newBtn = sendMsgBtn.cloneNode(true);
        sendMsgBtn.parentNode.replaceChild(newBtn, sendMsgBtn);
        newBtn.addEventListener('click', sendMessage);
    }
    
    const cancelBtn = document.querySelector('.cancel-btn');
    if (cancelBtn) {
        const newCancelBtn = cancelBtn.cloneNode(true);
        cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
        newCancelBtn.addEventListener('click', closeMessageModal);
    }
    
    const modal = document.getElementById('messageModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeMessageModal();
            }
        });
    }

    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');
    if (profileBtn && profileDropdown) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        document.addEventListener('click', function(e) {
            if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.classList.remove('show');
            }
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

    
});
				
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

