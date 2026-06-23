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

function getCurrentDayIndex() {
    const today = new Date();
    const day = today.getDay(); 
    if (day === 0) return 6; 
    return day - 1; 
}


function renderTable() {
    const thead = document.getElementById('tableHeader');
    const tbody = document.getElementById('tableBody');
    
    if (!thead || !tbody) return;
    
    thead.innerHTML = `
        <tr>
            <th>روز هفته</th>
            ${timeSlots.map(time => `<th>${time}</th>`).join('')}
        </tr>
    `;
    let tbodyHtml = '';
    const currentDayIndex = getCurrentDayIndex();
    
    for (let i = 0; i < persianDays.length; i++) {
        const dayName = persianDays[i];
        const dayKey = dayMapping[dayName];
        const slots = scheduleData[dayKey];
        
        let rowHtml = `<tr>`;
        rowHtml += `<td class="${i === currentDayIndex ? 'cell-today' : ''}" style="font-weight: bold; color: #ffd966;">${dayName}</td>`;
        
        for (let j = 0; j < slots.length; j++) {
            const isBusy = slots[j];
            rowHtml += `<td class="${isBusy ? 'cell-busy' : 'cell-free'}">
                            <div class="cell-content">${isBusy ? 'مشغول' : 'آزاد'}</div>
                         </td>`;
        }
        rowHtml += `</tr>`;
        tbodyHtml += rowHtml;
    }
    
    tbody.innerHTML = tbodyHtml;
}
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
