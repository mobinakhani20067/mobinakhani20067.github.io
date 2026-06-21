function togglePassword() {
    let passwordInput = document.getElementById('password');
    let toggleBtn = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.innerHTML = `
            <svg width="20" height="20" fill="#8aa08e" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                <line x1="2" y1="2" x2="22" y2="22" stroke="#c0392b" stroke-width="2"/>
            </svg>
        `;
    } else {
        passwordInput.type = 'password';
        toggleBtn.innerHTML = `
            <svg width="20" height="20" fill="#8aa08e" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
            </svg>
        `;
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('username').value.trim();
    let password = document.getElementById('password').value.trim();
    let rememberMe = document.getElementById('rememberMe').checked;
    let errorDiv = document.getElementById('loginError');
    let errorMessage = document.getElementById('errorMessage');
    
    errorDiv.classList.remove('show');
    
    if (!username || !password) {
        errorMessage.textContent = 'لطفاً نام کاربری و رمز عبور را وارد کنید';
        errorDiv.classList.add('show');
        return;
    }
    
    if (username === 'admin' && password === '1234') {
        localStorage.setItem('adminLoggedIn', 'true');
        localStorage.setItem('adminUsername', username);
        localStorage.setItem('adminName', 'مدیر کل');
        localStorage.setItem('adminRole', 'مدیر کل');
        localStorage.setItem('adminOfficialTitle', 'معاون وزیر علوم');
        localStorage.setItem('adminEmail', 'admin@sportuniv.ir');
        localStorage.setItem('adminPhone', '09123456789');
        localStorage.setItem('adminNationalCode', '1234567890');
        localStorage.setItem('adminBirthdate', '۱۳۷۰/۰۱/۰۱');
        localStorage.setItem('adminJoinDate', new Date().toLocaleDateString('fa-IR'));
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        
        let now = new Date();
        let timeStr = now.toLocaleTimeString('fa-IR', {hour: '2-digit', minute: '2-digit'});
        let dateStr = now.toLocaleDateString('fa-IR');
        localStorage.setItem('adminLastLogin', dateStr + ' - ' + timeStr);
        
        sessionStorage.setItem('justLoggedIn', 'true');
        
        window.location.href = 'Aadmin_dashboard.html';
    } else {
        errorMessage.textContent = 'نام کاربری یا رمز عبور اشتباه است';
        errorDiv.classList.add('show');
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
});

// فوکوس اولیه روی فیلد نام کاربری
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('username').focus();
});
