const scheduleData = {
    saturday: [true, false, true, false, true, false],    
    sunday: [false, true, false, true, false, true],       
    monday: [true, true, false, false, true, true],      
    tuesday: [false, false, true, true, false, false],    
    wednesday: [true, false, true, false, true, false],    
    thursday: [false, true, false, true, false, true],    
    friday: [true, true, true, false, false, false]      
};

const dayMapping = {
    'شنبه': 'saturday',
    'یکشنبه': 'sunday',
    'دوشنبه': 'monday',
    'سه شنبه': 'tuesday',
    'چهارشنبه': 'wednesday',
    'پنجشنبه': 'thursday',
    'جمعه': 'friday'
};

const persianDays = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

const timeSlots = ['08:00 - 10:00', '10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'];

function isMobile() {
    return window.innerWidth <= 500;
}

function getCurrentDayIndex() {
    const today = new Date();
    const day = today.getDay(); 
    if (day === 0) return 1;
    if (day === 1) return 2;
    if (day === 2) return 3;
    if (day === 3) return 4;
    if (day === 4) return 5;
    if (day === 5) return 6;
    if (day === 6) return 0;
    return 0;
}

function getClockIcon() {
    return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffd966" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
    </svg>`;
}

function renderTable() {
    const thead = document.getElementById('tableHeader');
    const tbody = document.getElementById('tableBody');
    
    if (!thead || !tbody) return;
    
    const mobile = isMobile();
    
    let headerHtml = `<tr><th style="display: flex; align-items: center; justify-content: center; gap: 5px;">${getClockIcon()} ${mobile ? '' : 'ساعات'}</th>`;
    for (let i = 0; i < persianDays.length; i++) {
        const dayName = persianDays[i];
        const isToday = (i === getCurrentDayIndex());
        let displayName = dayName;
        if (mobile) {
            if (dayName === 'شنبه') displayName = 'ش';
            else if (dayName === 'یکشنبه') displayName = 'ی';
            else if (dayName === 'دوشنبه') displayName = 'د';
            else if (dayName === 'سه شنبه') displayName = 'س';
            else if (dayName === 'چهارشنبه') displayName = 'چ';
            else if (dayName === 'پنجشنبه') displayName = 'پ';
            else if (dayName === 'جمعه') displayName = 'ج';
        }
        headerHtml += `<th class="${isToday ? 'cell-today' : ''}" style="font-weight: bold; color: #ffd966; ${mobile ? 'font-size: 0.8rem; padding: 5px 2px;' : ''}">${displayName}</th>`;
    }
    headerHtml += `</tr>`;
    thead.innerHTML = headerHtml;
    
    let tbodyHtml = '';
    const currentDayIndex = getCurrentDayIndex();
    
    for (let j = 0; j < timeSlots.length; j++) {
        const timeSlot = timeSlots[j];
        let displayTime = timeSlot;
        if (mobile) {
            displayTime = timeSlot.replace(' - ', '\n');
        }
        
        let rowHtml = `<tr>`;
        rowHtml += `<td style="font-weight: bold; color: #ffd966; background: rgba(255, 217, 102, 0.05); ${mobile ? 'font-size: 0.55rem; padding: 2px; white-space: pre-line;' : ''}">${displayTime}</td>`;
        
        for (let i = 0; i < persianDays.length; i++) {
            const dayName = persianDays[i];
            const dayKey = dayMapping[dayName];
            const slots = scheduleData[dayKey];
            const isBusy = slots[j];
            const isToday = (i === currentDayIndex);
            
            let cellClass = isBusy ? 'cell-busy' : 'cell-free';
            if (isToday) {
                cellClass += ' today-column';
            }
            
            const timeValue = timeSlot.replace(' - ', '-');
            const cellText = mobile ? '' : (isBusy ? 'مشغول' : 'آزاد');
            const dataLabel = isBusy ? '●' : '●';
            
            rowHtml += `<td class="${cellClass}" 
                            data-day="${dayName}" 
                            data-time="${timeValue}"
                            data-busy="${isBusy}"
                            onclick="handleCellClick(this)"
                            style="${mobile ? 'padding: 2px; min-height: 30px; height: 35px;' : ''}">
                            <div class="cell-content" data-label="${dataLabel}" style="${mobile ? 'font-size: 0;' : ''}">${cellText}</div>
                         </td>`;
        }
        rowHtml += `</tr>`;
        tbodyHtml += rowHtml;
    }
    
    tbody.innerHTML = tbodyHtml;
}

function handleCellClick(element) {
    const isBusy = element.dataset.busy === 'true';
    if (isBusy) {
        alert('این ساعت مشغول است و قابل رزرو نمی‌باشد.');
        return;
    }
    
    const day = element.dataset.day;
    const time = element.dataset.time;
    
    localStorage.setItem('selectedDay', day);
    localStorage.setItem('selectedTime', time);
    
    window.location.href = 'hallReservation.html';
}

let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        renderTable();
    }, 250);
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

renderTable();
