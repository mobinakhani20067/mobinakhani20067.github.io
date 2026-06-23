        let ticketsData = [
            { code: "T-1111-1111", date: "1405/02/20", status: "پاسخ داده شده", message: "بخش ورود به مشکل خورده", answer: "مشکل برطرف شده است. لطفا دوباره تلاش کنید.", answerDate: "1405/02/29" },
            { code: "T-2222-2222", date: "1405/03/17", status: "در انتظار پاسخ", message: "من نمیتونم سالن رزرو کنم", answer: "", answerDate: "" },
            { code: "T-3333-3333", date: "1405/03/12", status: "در انتظار پاسخ", message: "رزرو کمد ها به مشکل خورده", answer: "", answerDate: "" }
        ];

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

        function trackTicket() {
            const codeInput = document.getElementById('trackingCodeInput');
            const code = codeInput.value.trim();
            
            if (!code) {
                showToast('لطفاً کد پیگیری را وارد کنید', true);
                return;
            }
            
            const ticket = ticketsData.find(t => t.code === code);
            
            if (!ticket) {
                showToast('کد پیگیری وارد شده صحیح نمی‌باشد', true);
                return;
            }
            
            document.getElementById('resultCode').textContent = ticket.code;
            document.getElementById('resultDate').textContent = ticket.date;
            document.getElementById('resultStatus').textContent = ticket.status;
            document.getElementById('resultMessage').textContent = ticket.message;
            
            const answerBox = document.getElementById('answerBox');
            const noAnswerBox = document.getElementById('noAnswerBox');
            
            if (ticket.answer && ticket.answer !== '') {
                answerBox.style.display = 'block';
                noAnswerBox.style.display = 'none';
                document.getElementById('resultAnswer').textContent = ticket.answer;
                document.getElementById('answerDate').textContent = ticket.answerDate ? `تاریخ پاسخ: ${ticket.answerDate}` : '';
            } else {
                answerBox.style.display = 'none';
                noAnswerBox.style.display = 'block';
            }
            
            document.getElementById('resultModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        
        function closeResultModal() {
            document.getElementById('resultModal').style.display = 'none';
            document.body.style.overflow = '';
        }
        
        window.onclick = function(event) {
            const modal = document.getElementById('resultModal');
            if (event.target === modal) {
                closeResultModal();
            }
        }
        
        document.getElementById('trackingCodeInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                trackTicket();
            }
        });
        
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
