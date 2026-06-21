function logout() {
    if (document.getElementById('logoutModal')) return;
    
    var modal = document.createElement('div');
    modal.id = 'logoutModal';
    modal.setAttribute('style', 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); z-index: 20000; display: flex; justify-content: center; align-items: center;');
    
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 30px;
            padding: 35px;
            text-align: center;
            max-width: 380px;
            width: 90%;
            animation: fadeInUp 0.3s ease;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            font-family: 'Vazir FD-WOL', 'B Nazanin', Tahoma, sans-serif;
        ">
            <div style="margin-bottom: 15px;">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8L22 12L18 16" stroke="#e74c3c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 12H22" stroke="#e74c3c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20H12" stroke="#e74c3c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h3 style="color: #1a472a; font-size: 1.4rem; margin-bottom: 10px;">خروج از پنل</h3>
            <p style="color: #6b7c6e; margin-bottom: 25px;">آیا مطمئن هستید که می‌خواهید از پنل مدیریت خارج شوید؟</p>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button id="logoutCancelBtn" style="
                    background: #e0e8e0;
                    color: #4a5a4a;
                    border: none;
                    padding: 10px 25px;
                    border-radius: 30px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: 0.3s;
                    font-family: inherit;
                " onmouseover="this.style.background='#c0d0c0'" onmouseout="this.style.background='#e0e8e0'">انصراف</button>
                
                <button id="logoutConfirmBtn" style="
                    background: #e74c3c;
                    color: white;
                    border: none;
                    padding: 10px 25px;
                    border-radius: 30px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: 0.3s;
                    font-family: inherit;
                " onmouseover="this.style.background='#c0392b'" onmouseout="this.style.background='#e74c3c'">خروج</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('logoutCancelBtn').addEventListener('click', function() {
        closeLogoutModal();
    });
    
    document.getElementById('logoutConfirmBtn').addEventListener('click', function() {
        confirmLogout();
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeLogoutModal();
        }
    });
}

function closeLogoutModal() {
    var modal = document.getElementById('logoutModal');
    if (modal) {
        modal.remove();
    }
}

function confirmLogout() {
    closeLogoutModal();
    sessionStorage.setItem('justLoggedOut', 'true');
    window.location.href = 'main_index.html';
}

let menuLinks = document.querySelectorAll('.sidebar-menu li a');
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function(e) {
        if (this.getAttribute('href') && this.getAttribute('href') !== '#') {
            return;
        }
        e.preventDefault();
        if (i !== 0) {
            alert('این بخش در صفحه جداگانه قرار دارد');
        }
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        }
    }
}

let goToLink = document.getElementById('goToRequestsLink');
if (goToLink) {
    goToLink.onclick = function(e) {
        e.preventDefault();
        alert('صفحه درخواست‌ها');
    }
}
