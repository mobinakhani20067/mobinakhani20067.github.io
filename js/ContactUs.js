const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
if (hamburger) hamburger.onclick = () => navMenu.classList.toggle('active-mobile');

const modal = document.getElementById('trackingModal');
const toast = document.getElementById('toastMsg');

function generateTrackingCode() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 9000 + 1000);
    return `T-${year}${month}${day}-${random}`;
}

function showToast(message, isError = false) {
    toast.textContent = message;
    toast.style.visibility = 'visible';
    toast.style.opacity = '1';
    if (isError) {
        toast.style.background = '#e74c3c';
    } else {
        toast.style.background = '#2d6a3f';
    }
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.visibility = 'hidden';
        toast.style.background = '#2d6a3f';
    }, 3000);
}

function showTrackingModal(trackingCode) {
    document.getElementById('trackingCode').innerText = trackingCode;
    modal.style.display = 'flex';
}

function closeTrackingModal() {
    modal.style.display = 'none';
}

function copyTrackingCode() {
    const code = document.getElementById('trackingCode').innerText;
    navigator.clipboard.writeText(code).then(() => {
        showToast('کد پیگیری کپی شد');
    }).catch(() => {
        showToast('خطا در کپی کردن', true);
    });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    if (!fullName) {
        showToast('لطفا نام کامل خود را وارد کنید', true);
        return;
    }
    
    if (!email) {
        showToast('لطفا آدرس ایمیل خود را وارد کنید', true);
        return;
    }
    
    const emailRegex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    if (!emailRegex.test(email)) {
        showToast('لطفا یک آدرس ایمیل معتبر وارد کنید', true);
        return;
    }
    
    if (!subject) {
        showToast('لطفا موضوع پیام را انتخاب کنید', true);
        return;
    }
    
    if (!message) {
        showToast('لطفا متن پیام خود را وارد کنید', true);
        return;
    }
    
    if (message.length < 10) {
        showToast('متن پیام باید حداقل ۱۰ کاراکتر باشد', true);
        return;
    }
    
    const trackingCode = generateTrackingCode();
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({
        code: trackingCode,
        name: fullName,
        email: email,
        subject: subject,
        message: message,
        date: new Date().toLocaleDateString('fa-IR'),
        status: 'در انتظار بررسی'
    });
    localStorage.setItem('contactMessages', JSON.stringify(messages));
    document.getElementById('contactForm').reset();
    
    showTrackingModal(trackingCode);
    showToast('پیام شما با موفقیت ثبت شد');
});
window.onclick = function(event) {
    if (event.target === modal) {
        closeTrackingModal();
    }
};
