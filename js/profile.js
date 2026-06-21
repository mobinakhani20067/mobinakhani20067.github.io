const modal = document.getElementById('passwordModal');
const openBtn = document.getElementById('openChangePwdModal');
const closeBtn = document.getElementById('closeModalBtn');
const stepPhoneDiv = document.getElementById('stepPhone');
const stepCodeDiv = document.getElementById('stepCode');
const stepNewDiv = document.getElementById('stepNewPass');
const sendCodeBtn = document.getElementById('sendCodeBtn');
const verifyCodeBtn = document.getElementById('verifyCodeBtn');
const resendCodeBtn = document.getElementById('resendCodeBtn');
const submitPassBtn = document.getElementById('submitNewPassBtn');
const phoneInput = document.getElementById('phoneNumber');
const codeInput = document.getElementById('verificationCode');
const newPassInput = document.getElementById('newPassword');
const confirmPassInput = document.getElementById('confirmPassword');
const timerDisplay = document.getElementById('timerDisplay');
const codeError = document.getElementById('codeError');
const passError = document.getElementById('passError');

let timerInterval = null;
let timeLeft = 120;
let generatedCode = "";

function generateRandomCode() { return Math.floor(100000 + Math.random() * 900000).toString(); }
function stopTimer() { if(timerInterval) { clearInterval(timerInterval); timerInterval = null; } }
function startTimer() {
    stopTimer();
    timeLeft = 120;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        if(timeLeft <= 0) { stopTimer(); timerDisplay.innerHTML = "⏰ زمان تایید به پایان رسید. درخواست مجدد کنید."; 
            verifyCodeBtn.disabled = true; resendCodeBtn.disabled = false; }
        else { timeLeft--; updateTimerDisplay(); }
    }, 1000);
}
function updateTimerDisplay() {
    let mins = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;
    timerDisplay.innerHTML = `⏱️ زمان باقی‌مانده: ${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    if(timeLeft <= 0) timerDisplay.innerHTML = "⌛ کد منقضی شد، روی ارسال مجدد کلیک کنید.";
}

sendCodeBtn.onclick = () => {
    let phone = phoneInput.value.trim();
    if(!phone) { alert("لطفاً شماره تماس را وارد کنید"); return; }
    generatedCode = generateRandomCode();
    alert(`کد تایید (شبیه‌سازی): ${generatedCode}\nدر حالت واقعی به شماره ${phone} پیامک می‌شود.`);
    stepPhoneDiv.style.display = 'none';
    stepCodeDiv.style.display = 'block';
    stepNewDiv.style.display = 'none';
    codeInput.value = "";
    codeError.innerText = "";
    verifyCodeBtn.disabled = false;
    resendCodeBtn.disabled = false;
    startTimer();
};
resendCodeBtn.onclick = () => {
    generatedCode = generateRandomCode();
    alert(`کد جدید (شبیه‌سازی): ${generatedCode}\nارسال مجدد انجام شد.`);
    startTimer();
    codeError.innerText = "";
    verifyCodeBtn.disabled = false;
};
verifyCodeBtn.onclick = () => {
    let enteredCode = codeInput.value.trim();
    if(enteredCode === generatedCode) {
        stepCodeDiv.style.display = 'none';
        stepNewDiv.style.display = 'block';
        stopTimer();
        passError.innerText = "";
    } else {
        codeError.innerText = "❌ کد وارد شده اشتباه است. دوباره تلاش کنید.";
    }
};
submitPassBtn.onclick = () => {
    let newPass = newPassInput.value.trim();
    let confirmPass = confirmPassInput.value.trim();
    if(newPass.length < 4) { passError.innerText = "رمز عبور باید حداقل ۴ کاراکتر باشد."; return; }
    if(newPass !== confirmPass) { passError.innerText = "رمز عبور و تکرار آن مطابقت ندارند."; return; }
    alert("✅ رمز عبور با موفقیت تغییر کرد.\n(شبیه‌سازی شده)");
    modal.style.display = 'none';
    stepPhoneDiv.style.display = 'block';
    stepCodeDiv.style.display = 'none';
    stepNewDiv.style.display = 'none';
    phoneInput.value = "09123456789";
    if(timerInterval) clearInterval(timerInterval);
};
openBtn.onclick = () => { modal.style.display = 'flex'; stepPhoneDiv.style.display = 'block'; stepCodeDiv.style.display = 'none'; stepNewDiv.style.display = 'none'; codeError.innerText = ""; passError.innerText = ""; if(timerInterval) clearInterval(timerInterval); };
closeBtn.onclick = () => { modal.style.display = 'none'; if(timerInterval) clearInterval(timerInterval); };
window.onclick = (e) => { if(e.target === modal) { modal.style.display = 'none'; if(timerInterval) clearInterval(timerInterval); } };
