let reservation = null;
let timerInterval = null;
let timeLeft = 15 * 60;
let isTimedOut = false;
let currentCaptcha = '';
let generatedOtp = '';
let otpTimerInterval = null;

function numberToWords(num) {
    if (num === 0) return "صفر تومان";
    const units = ["", "هزار", "میلیون", "میلیارد"];
    const numbers = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
    const tens = ["", "ده", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"];
    const hundreds = ["", "صد", "دویست", "سیصد", "چهارصد", "پانصد", "ششصد", "هفتصد", "هشتصد", "نهصد"];
    
    function convertChunk(n) {
        if (n === 0) return "";
        let str = "";
        let hundred = Math.floor(n / 100);
        let remainder = n % 100;
        if (hundred > 0) str += hundreds[hundred] + " ";
        if (remainder >= 10 && remainder <= 19) {
            const teens = ["ده", "یازده", "دوازده", "سیزده", "چهارده", "پانزده", "شانزده", "هفده", "هجده", "نوزده"];
            str += teens[remainder - 10] + " ";
        } else {
            let ten = Math.floor(remainder / 10);
            let one = remainder % 10;
            if (ten > 0) str += tens[ten] + " ";
            if (one > 0) str += numbers[one] + " ";
        }
        return str;
    }
    
    let result = "";
    let chunkIndex = 0;
    let numCopy = num;
    while (numCopy > 0) {
        let chunk = numCopy % 1000;
        if (chunk !== 0) {
            let chunkStr = convertChunk(chunk);
            result = chunkStr + (units[chunkIndex] ? units[chunkIndex] + " " : "") + result;
        }
        numCopy = Math.floor(numCopy / 1000);
        chunkIndex++;
    }
    return result.trim() + " تومان";
}

function getAmountFromURL() {
    const params = new URLSearchParams(window.location.search);
    const amount = params.get('amount');
    const item = params.get('item');
    const donor = params.get('donor');
    
    console.log('URL Params:', { amount, item, donor });
    
    if (amount) {
        const numAmount = parseInt(amount);
        document.getElementById('amountDisplay').textContent = numAmount.toLocaleString();
        document.getElementById('amountText').textContent = numberToWords(numAmount);
    }
    
    if (item) {
        const itemEl = document.getElementById('donationItemName');
        if (itemEl) itemEl.textContent = decodeURIComponent(item);
    }
    
    if (donor) {
        const donorEl = document.getElementById('donorNameDisplay');
        if (donorEl) donorEl.textContent = decodeURIComponent(donor);
    }
}

function showToast(msg) {
    const old = document.querySelector('.toast');
    if (old) old.remove();

    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.3s';
        setTimeout(() => el.remove(), 300);
    }, 2800);
}

function genCaptcha() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    let out = '';
    for (let i = 0; i < 4; i++) out += chars[Math.floor(Math.random() * chars.length)];
    currentCaptcha = out;
    document.getElementById('captchaText').textContent = out;
}

function updateTimer() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timerClock').textContent =
        `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

    if (timeLeft <= 0 && !isTimedOut) {
        isTimedOut = true;
        clearInterval(timerInterval);
        document.getElementById('timeoutModal').style.display = 'flex';
    }
    timeLeft--;
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 15 * 60;
    isTimedOut = false;
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function startOtpTimer(btn) {
    clearInterval(otpTimerInterval);
    let sec = 120;
    btn.disabled = true;

    otpTimerInterval = setInterval(() => {
        sec--;
        if (sec <= 0) {
            clearInterval(otpTimerInterval);
            otpTimerInterval = null;
            btn.disabled = false;
            btn.textContent = 'دریافت';
        } else {
            const m = Math.floor(sec / 60);
            const s = sec % 60;
            btn.textContent = `${m}:${String(s).padStart(2, '0')}`;
        }
    }, 1000);
}

function detectCardBrand(number) {
    const clean = number.replace(/-/g, '');
    const firstFour = clean.substring(0, 4);

    if (firstFour === '6037' || firstFour === '5022' || firstFour === '5029' || firstFour === '5892') return 'mellat';
    if (firstFour === '6274') return 'saderat';
    if (firstFour === '6273' || firstFour === '5859') return 'tejarat';
    if (firstFour === '6276' || firstFour === '5020' || firstFour === '6037') return 'melli';
    if (firstFour === '5058' || firstFour === '6036') return 'sepah';
    if (firstFour === '6362') return 'saman';
    if (clean.substring(0, 1) === '4') return 'visa';
    if (clean.substring(0, 1) === '5') return 'mastercard';
    return 'unknown';
}

document.getElementById('cardNumber').addEventListener('input', function(e) {
    let v = this.value.replace(/-/g, '').replace(/\D/g, '');
    if (v.length > 16) v = v.slice(0, 16);
    let f = '';
    for (let i = 0; i < v.length; i++) {
        if (i > 0 && i % 4 === 0) f += '-';
        f += v[i];
    }
    this.value = f;

    const brand = detectCardBrand(v);
    const brandEl = document.getElementById('cardBrand');
    if (brand !== 'unknown' && v.length >= 4) {
        brandEl.classList.add('active');
    } else {
        brandEl.classList.remove('active');
    }

    if (v.length === 16) {
        document.getElementById('expireMonth').focus();
    }
});

document.getElementById('expireMonth').addEventListener('input', function(e) {
    let v = this.value.replace(/\D/g, '');
    if (parseInt(v) > 12) v = '12';
    this.value = v.slice(0, 2);

    if (this.value.length === 2) {
        document.getElementById('expireYear').focus();
    }
});

document.getElementById('expireYear').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').slice(0, 2);

    if (this.value.length === 2) {
        document.getElementById('cvv2').focus();
    }
});

document.getElementById('cvv2').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').slice(0, 4);

    if (this.value.length === 4) {
        document.getElementById('otp').focus();
    }
});

document.getElementById('otp').addEventListener('input', function(e) {
    this.value = this.value.replace(/\D/g, '').slice(0, 6);

    if (this.value.length === 6) {
        document.getElementById('captchaInput').focus();
    }
});

document.getElementById('captchaInput').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase().slice(0, 4);

    if (this.value.length === 4) {
        document.getElementById('payBtn').focus();
    }
});

document.getElementById('getOtpBtn').addEventListener('click', function() {
    generatedOtp = String(Math.floor(100000 + Math.random() * 900000));
    showToast(`رمز پویا: ${generatedOtp}`);
    startOtpTimer(this);
});

document.getElementById('refreshCaptcha').addEventListener('click', function() {
    genCaptcha();
    document.getElementById('captchaInput').value = '';
    document.getElementById('captchaInput').focus();
});

document.getElementById('cvvHint').addEventListener('click', function() {
    showToast('سه یا چهار رقم پشت کارت');
});

document.getElementById('backBtn').addEventListener('click', function() {
    clearInterval(timerInterval);
    clearInterval(otpTimerInterval);
    const params = new URLSearchParams(window.location.search);
    if (params.get('amount')) {
        window.location.href = 'Requirements.html';
    } else {
        window.location.href = 'reservation.html';
    }
});

document.getElementById('timeoutBackBtn').addEventListener('click', function() {
    clearInterval(timerInterval);
    clearInterval(otpTimerInterval);
    window.location.href = 'Requirements.html';
});

document.getElementById('retryBtn').addEventListener('click', function() {
    document.getElementById('errorModal').style.display = 'none';
});

document.getElementById('payBtn').addEventListener('click', function(e) {
    e.preventDefault();

    if (isTimedOut) {
        document.getElementById('timeoutModal').style.display = 'flex';
        return;
    }

    const card = document.getElementById('cardNumber').value.replace(/-/g, '');
    const month = document.getElementById('expireMonth').value;
    const year = document.getElementById('expireYear').value;
    const cvv = document.getElementById('cvv2').value;
    const otp = document.getElementById('otp').value;
    const captcha = document.getElementById('captchaInput').value;

    if (card.length !== 16) return showToast('شماره کارت ۱۶ رقم است');
    if (!month || month.length !== 2) return showToast('ماه را وارد کنید');
    if (!year || year.length !== 2) return showToast('سال را وارد کنید');
    if (cvv.length < 3) return showToast('CVV2 را وارد کنید');
    if (otp.length !== 6) return showToast('رمز ۶ رقمی را وارد کنید');
    if (otp !== generatedOtp) return showToast('رمز پویا اشتباه است');
    if (captcha.toUpperCase() !== currentCaptcha) {
        showToast('کد امنیتی اشتباه است');
        genCaptcha();
        document.getElementById('captchaInput').value = '';
        return;
    }

    const btn = this;
    btn.disabled = true;
    btn.classList.add('loading');

    document.getElementById('processingModal').style.display = 'flex';

    setTimeout(() => {
        document.getElementById('processingModal').style.display = 'none';
        btn.disabled = false;
        btn.classList.remove('loading');

        clearInterval(timerInterval);
        clearInterval(otpTimerInterval);

        const isDonation = reservation && reservation.type === 'donation';
        
        const paymentData = {
            amount: reservation ? reservation.amount : 0,
            phone: document.getElementById('phoneNumber').value,
            email: document.getElementById('email').value,
            date: new Date().toLocaleDateString('fa-IR'),
            time: new Date().toLocaleTimeString('fa-IR'),
            code: 'TRX-' + String(Math.floor(100000 + Math.random() * 900000))
        };

        if (isDonation) {
            const donationAmount = reservation.amount;
            const itemName = reservation.itemName;
            
            console.log('به‌روزرسانی اهدا:', { itemName, donationAmount });
            
            const donationUpdate = {
                itemName: itemName,
                amount: donationAmount,
                donorName: reservation.donorName || 'ناشناس'
            };
            localStorage.setItem('donationUpdate', JSON.stringify(donationUpdate));
            
            paymentData.type = 'donation';
            paymentData.item = itemName;
            paymentData.donor = reservation.donorName || 'ناشناس';
            localStorage.setItem('lastPayment', JSON.stringify(paymentData));
            
            localStorage.removeItem('pendingDonation');
            
            document.getElementById('successModal').style.display = 'flex';
            setTimeout(() => {
                window.location.href = 'Requirements.html';
            }, 1800);
            
        } else {
            paymentData.type = 'reservation';
            paymentData.lockerNumber = reservation ? reservation.lockerNumber : null;
            paymentData.duration = reservation ? reservation.duration : null;
            localStorage.setItem('lastPayment', JSON.stringify(paymentData));
            localStorage.removeItem('pendingReservation');
            
            document.getElementById('successModal').style.display = 'flex';
            setTimeout(() => {
                window.location.href = 'reservation.html';
            }, 1800);
        }
    }, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('صفحه پرداخت لود شد');
    
    const donationPending = localStorage.getItem('pendingDonation');
    const reservationPending = localStorage.getItem('pendingReservation');
    
    if (donationPending) {
        const data = JSON.parse(donationPending);
        console.log('داده‌های اهدا:', data);
        
        document.getElementById('amountDisplay').textContent = 
            `${Number(data.amount).toLocaleString()} تومان`;
        document.getElementById('amountText').textContent = 
            numberToWords(data.amount);
        
        const itemEl = document.getElementById('donationItemName');
        if (itemEl) {
            itemEl.textContent = data.itemName;
            itemEl.style.display = 'block';
        }
        
        const donorEl = document.getElementById('donorNameDisplay');
        if (donorEl) {
            donorEl.textContent = data.donorName;
            donorEl.style.display = 'block';
        }
        
        reservation = {
            amount: data.amount,
            itemName: data.itemName,
            donorName: data.donorName,
            type: 'donation'
        };
        
        localStorage.removeItem('pendingDonation');
        
    } else if (reservationPending) {
        reservation = JSON.parse(reservationPending);
        const params = new URLSearchParams(window.location.search);
        if (!params.get('amount')) {
            document.getElementById('amountDisplay').textContent = 
                `${Number(reservation.amount).toLocaleString()} تومان`;
            document.getElementById('amountText').textContent = 
                numberToWords(reservation.amount);
        }
        
    } else {
        getAmountFromURL();
    }
    
    genCaptcha();
    startTimer();
});

const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
if (hamburger) hamburger.onclick = () => navMenu.classList.toggle('active-mobile');
