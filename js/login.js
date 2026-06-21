const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
if (hamburger) hamburger.onclick = () => navMenu.classList.toggle('active-mobile');

function clickingOnLogin() {
    document.getElementById('reset').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    resetLoginErrors();
}

function clickingOnReset() {
    document.getElementById('reset').style.display = 'block';
    document.getElementById('login').style.display = 'none';
    resetResetForm();
}

function toggleLoginButton() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    
    if (username && password && loginBtn) {
        if (username.value.trim().length >= 3 && password.value.length >= 4) {
            loginBtn.disabled = false;
        } else {
            loginBtn.disabled = true;
        }
    }
}

function toggleSendCodeButton() {
    const phone = document.getElementById('phone2');
    const sendBtn = document.getElementById('sendCodeBtn');
    
    if (phone && sendBtn) {
        if (phone.value.trim().length === 11) {
            sendBtn.disabled = false;
        } else {
            sendBtn.disabled = true;
        }
    }
}

function validateAndSubmit() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    let isValid = true;
    
    removeError(username);
    removeError(password);
    document.getElementById('usernameError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    
    if (!username.value.trim()) {
        showError(username);
        document.getElementById('usernameError').innerText = 'نام کاربری نمی‌تواند خالی باشد';
        isValid = false;
    } else if (username.value.trim().length < 3) {
        showError(username);
        document.getElementById('usernameError').innerText = 'نام کاربری باید حداقل ۳ کاراکتر باشد';
        isValid = false;
    }
    
    if (!password.value) {
        showError(password);
        document.getElementById('passwordError').innerText = 'رمز عبور نمی‌تواند خالی باشد';
        isValid = false;
    } else if (password.value.length < 4) {
        showError(password);
        document.getElementById('passwordError').innerText = 'رمز عبور باید حداقل ۴ کاراکتر باشد';
        isValid = false;
    }
    
    if (isValid) {
        if (document.getElementById('remember').checked) {
            localStorage.setItem('savedUsername', username.value.trim());
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('savedUsername');
            localStorage.setItem('rememberMe', 'false');
        }
        GoIndex();
    }
}

function showError(inputElement) {
    inputElement.classList.add('error');
}

function removeError(inputElement) {
    inputElement.classList.remove('error');
}

function resetLoginErrors() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (username) removeError(username);
    if (password) removeError(password);
    const usernameErr = document.getElementById('usernameError');
    const passwordErr = document.getElementById('passwordError');
    if (usernameErr) usernameErr.innerText = '';
    if (passwordErr) passwordErr.innerText = '';
}

function sendCode() {
    const phoneInput = document.getElementById('phone2');
    const phoneError = document.getElementById('phoneError');
    const phone = phoneInput.value.trim();
    let isValid = true;
    
    phoneError.innerText = '';
    phoneInput.classList.remove('error');
    
    if (!phone) {
        phoneError.innerText = 'لطفا شماره تلفن خود را وارد کنید';
        phoneInput.classList.add('error');
        isValid = false;
    } else if (phone.length !== 11) {
        phoneError.innerText = 'شماره تلفن باید ۱۱ رقم باشد';
        phoneInput.classList.add('error');
        isValid = false;
    } else if (!phone.startsWith('09')) {
        phoneError.innerText = 'شماره تلفن باید با 09 شروع شود';
        phoneInput.classList.add('error');
        isValid = false;
    } else if (!/^\d+$/.test(phone)) {
        phoneError.innerText = 'شماره تلفن باید فقط شامل اعداد باشد';
        phoneInput.classList.add('error');
        isValid = false;
    }
    
    if (!isValid) return;
    
    document.getElementById('resetStep1').style.display = 'none';
    document.getElementById('resetStep2').style.display = 'block';
    
    document.getElementById('verificationCode').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
    
    clearResetErrors();
}

function changePassword() {
    const enteredCode = document.getElementById('verificationCode').value.trim();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let isValid = true;
    
    clearResetErrors();
    
    if (!enteredCode) {
        document.getElementById('codeError').innerText = 'لطفا کد تایید را وارد کنید';
        document.getElementById('verificationCode').classList.add('error');
        isValid = false;
    }
    
    if (!newPassword) {
        document.getElementById('newPasswordError').innerText = 'لطفا رمز عبور جدید را وارد کنید';
        document.getElementById('newPassword').classList.add('error');
        isValid = false;
    } else if (newPassword.length < 4) {
        document.getElementById('newPasswordError').innerText = 'رمز عبور باید حداقل ۴ کاراکتر باشد';
        document.getElementById('newPassword').classList.add('error');
        isValid = false;
    }
    
    if (!confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'لطفا رمز عبور را تکرار کنید';
        document.getElementById('confirmPassword').classList.add('error');
        isValid = false;
    } else if (newPassword !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'رمز عبور با تکرار آن مطابقت ندارد';
        document.getElementById('confirmPassword').classList.add('error');
        isValid = false;
    }
    
    if (isValid) {
        alert('رمز عبور با موفقیت تغییر یافت.\nلطفا با رمز جدید وارد شوید.');
        clickingOnLogin();
        resetResetForm();
    }
}

function backToStep1() {
    document.getElementById('resetStep1').style.display = 'block';
    document.getElementById('resetStep2').style.display = 'none';
    document.getElementById('phone2').value = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('phone2').classList.remove('error');
    toggleSendCodeButton();
}

function resetResetForm() {
    backToStep1();
    clearResetErrors();
}

function clearResetErrors() {
    const codeErr = document.getElementById('codeError');
    const newPassErr = document.getElementById('newPasswordError');
    const confirmErr = document.getElementById('confirmPasswordError');
    const phoneErr = document.getElementById('phoneError');
    
    if (codeErr) codeErr.innerText = '';
    if (newPassErr) newPassErr.innerText = '';
    if (confirmErr) confirmErr.innerText = '';
    if (phoneErr) phoneErr.innerText = '';
    
    document.getElementById('verificationCode')?.classList.remove('error');
    document.getElementById('newPassword')?.classList.remove('error');
    document.getElementById('confirmPassword')?.classList.remove('error');
    document.getElementById('phone2')?.classList.remove('error');
}

function GoIndex() {
    window.location.replace("index_after_login.html");
}

document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const phoneInput = document.getElementById('phone2');
    
    if (usernameInput) {
        usernameInput.addEventListener('input', function() {
            removeError(this);
            document.getElementById('usernameError').innerText = '';
            toggleLoginButton();
        });
    }
    
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            removeError(this);
            document.getElementById('passwordError').innerText = '';
            toggleLoginButton();
        });
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            document.getElementById('phoneError').innerText = '';
            this.classList.remove('error');
            toggleSendCodeButton();
        });
    }
    if (localStorage.getItem('rememberMe') === 'true') {
        const savedUsername = localStorage.getItem('savedUsername');
        if (savedUsername && usernameInput) {
            usernameInput.value = savedUsername;
            document.getElementById('remember').checked = true;
            usernameInput.dispatchEvent(new Event('input'));
            toggleLoginButton();
        }
    }

    toggleLoginButton();
    toggleSendCodeButton();
    
		document.addEventListener('input', function(e) {
        const id = e.target.id;
        if (id === 'verificationCode') {
            e.target.classList.remove('error');
            const err = document.getElementById('codeError');
            if (err) err.innerText = '';
        } else if (id === 'newPassword') {
            e.target.classList.remove('error');
            const err = document.getElementById('newPasswordError');
            if (err) err.innerText = '';
        } else if (id === 'confirmPassword') {
            e.target.classList.remove('error');
            const err = document.getElementById('confirmPasswordError');
            if (err) err.innerText = '';
        }
    });
});
