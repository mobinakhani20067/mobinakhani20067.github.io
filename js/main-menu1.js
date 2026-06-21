
(function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            hamburgerBtn.classList.toggle('active');
        });

        const menuLinks = document.querySelectorAll('.nav-menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('show');
                    hamburgerBtn.classList.remove('active');
                }
            });
        });

        document.addEventListener('click', function(event) {
            if (window.innerWidth <= 768) {
                const isClickInside = navMenu.contains(event.target) || hamburgerBtn.contains(event.target);
                if (!isClickInside && navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    hamburgerBtn.classList.remove('active');
                }
            }
        });
    }
})();

function showErrorToast(message) {
var oldToast = document.querySelector('.error-toast');
if (oldToast) oldToast.remove();

var toast = document.createElement('div');
toast.className = 'error-toast';
toast.setAttribute('style', 'position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: #e74c3c; color: white; padding: 15px 30px; border-radius: 50px; font-weight: bold; z-index: 10001; box-shadow: 0 5px 20px rgba(0,0,0,0.2); font-family: inherit; animation: fadeInUp 0.3s ease; direction: rtl; text-align: center;');
toast.innerHTML = message;
document.body.appendChild(toast);

setTimeout(function() {
    toast.style.opacity = '0';
    toast.style.transition = '0.3s';
    setTimeout(function() {
        toast.remove();
    }, 300);
}, 3000);
}

var style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px) translateX(-50%);
    }
    to {
        opacity: 1;
        transform: translateY(0) translateX(-50%);
    }
}
.submit-btn {
    transition: all 0.3s ease !important;
}
#adminLoginModal .form-group input {
    transition: all 0.3s ease;
}
`;
document.head.appendChild(style);
