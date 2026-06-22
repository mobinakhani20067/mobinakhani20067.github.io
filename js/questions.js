const faqData = [
    {
        id: 1,
        question: 'چگونه می‌توانم یک سالن ورزشی رزرو کنم؟',
        answer: 'برای رزرو سالن ورزشی، ابتدا به بخش "رزرو سالن" در منو بروید. سپس تاریخ و ساعت مورد نظر را انتخاب کرده و سالن مناسب را انتخاب کنید. پس از تایید، رزرو شما ثبت خواهد شد.'
    },
    {
        id: 2,
        question: 'ساعت کاری مجموعه ورزشی دانشگاه چه ساعتی است؟',
        answer: 'مجموعه ورزشی دانشگاه از ساعت ۷ صبح تا ۲۲ شب فعال است. روزهای تعطیل رسمی، مجموعه تعطیل می‌باشد.'
    },
    {
        id: 3,
        question: 'آیا برای استفاده از امکانات ورزشی نیاز به ثبت‌نام دارم؟',
        answer: 'بله، تمام کاربران باید در سامانه ثبت‌نام کنند. ثبت‌نام رایگان است و از طریق بخش "ورود" در منو قابل انجام است.'
    },
    {
        id: 4,
        question: 'هزینه رزرو سالن چقدر است؟',
        answer: 'استفاده از امکانات ورزشی دانشگاه برای دانشجویان رایگان است. برای کارمندان و اساتید نیز تخفیف‌های ویژه در نظر گرفته شده است.'
    },
    {
        id: 5,
        question: 'چگونه می‌توانم از کلاس‌های ورزشی مطلع شوم؟',
        answer: 'برای اطلاع از کلاس‌های ورزشی، به بخش "ساعات کلاس‌ها" در منو مراجعه کنید. تمام کلاس‌ها با زمان و روزهای برگزاری در آن بخش نمایش داده می‌شوند.'
    },
    {
        id: 6,
        question: 'آیا می‌توانم رزرو خود را لغو کنم؟',
        answer: 'بله، می‌توانید تا ۲۴ ساعت قبل از زمان رزرو، آن را لغو کنید. برای لغو رزرو به بخش "پنل کاربری" بروید و از گزینه "لغو رزرو" استفاده کنید.'
    },
    {
        id: 7,
        question: 'چگونه می‌توانم تیکت پشتیبانی ارسال کنم؟',
        answer: 'برای ارسال تیکت پشتیبانی، از دکمه پشتیبانی شناور در گوشه صفحه استفاده کنید یا از طریق بخش "تماس با ما" اقدام کنید.'
    },
    {
        id: 8,
        question: 'آیا امکانات ورزشی برای دانشجویان غیر ایرانی نیز وجود دارد؟',
        answer: 'بله، تمام دانشجویان دانشگاه صرف‌نظر از ملیت، می‌توانند از امکانات ورزشی استفاده کنند. برای استفاده، ابتدا باید در سامانه ثبت‌نام کنید.'
    }
];

let filteredData = [...faqData];

function renderFaqs(data) {
    const container = document.getElementById('faqContainer');
    
    if (!data || data.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span style="font-size: 40px; display: block; margin-bottom: 15px;">🔍</span>
                سوالی با این جستجو پیدا نشد!
            </div>
        `;
        return;
    }
    
    let html = '';
    data.forEach((item, index) => {
        const delay = (index * 0.05).toFixed(2);
        html += `
            <div class="faq-item" data-id="${item.id}" style="animation-delay: ${delay}s;">
                <div class="faq-question" onclick="toggleFaq(${item.id})">
                    <span class="question-title">
                        <svg class="question-icon" viewBox="0 0 24 24" fill="none" stroke="#ffd966" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        ${item.question}
                    </span>
                    <svg class="toggle-icon" viewBox="0 0 24 24" fill="none" stroke="#ffd966" stroke-width="2.5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <div class="faq-answer">
                    <div class="answer-content">
                        ${item.answer}
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function toggleFaq(id) {
    const item = document.querySelector(`.faq-item[data-id="${id}"]`);
    if (!item) return;
    item.classList.toggle('open');
}

function searchFaqs(query) {
    const searchTerm = query.toLowerCase().trim();
    if (!searchTerm) {
        filteredData = [...faqData];
    } else {
        filteredData = faqData.filter(item => 
            item.question.includes(searchTerm) || 
            item.answer.includes(searchTerm)
        );
    }
    renderFaqs(filteredData);
}

document.addEventListener('DOMContentLoaded', function() {
    renderFaqs(faqData);
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchFaqs(this.value);
        });
    }
});

const supportBtn = document.getElementById('supportBtn');
const chatbotContainer = document.getElementById('chatbotContainer');
const closeChatBtn = document.getElementById('closeChat');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');

if (supportBtn) {
    supportBtn.addEventListener('click', function() {
        chatbotContainer.classList.toggle('active');
    });
}

if (closeChatBtn) {
    closeChatBtn.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
    });
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    chatMessages.innerHTML += `<div class="message user-message">${message}</div>`;
    chatInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    setTimeout(() => {
        let reply = 'متوجه سوال شما نشدم. لطفاً دقیق‌تر بپرسید.';
        if (message.includes('رزرو') || message.includes('سالن')) {
            reply = 'برای رزرو سالن، از بخش "رزرو سالن" در منو استفاده کنید.';
        } else if (message.includes('ساعت') || message.includes('کاری')) {
            reply = 'ساعت کاری مجموعه: ۷ صبح تا ۲۲ شب';
        } else if (message.includes('قانون') || message.includes('قوانین')) {
            reply = 'قوانین مجموعه در بخش "قوانین" منو قابل مشاهده است.';
        } else if (message.includes('تماس') || message.includes('شماره')) {
            reply = 'شماره تماس: ۰۲۱-۹۱۲۳۴۵۶۷';
        }
        chatMessages.innerHTML += `<div class="message bot-message">${reply}</div>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

if (sendBtn) {
    sendBtn.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

document.querySelectorAll('.quick-reply-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        chatInput.value = this.dataset.msg;
        sendMessage();
    });
});

const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('show');
    });
}
