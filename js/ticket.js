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
            const hamburger = document.getElementById('hamburgerBtn');
            const navMenu = document.getElementById('navMenu');
            if (hamburger && navMenu) {
                hamburger.addEventListener('click', function(e) { e.stopPropagation(); navMenu.classList.toggle('active-mobile'); });
                document.addEventListener('click', function(e) {
                    if (navMenu.classList.contains('active-mobile') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                        navMenu.classList.remove('active-mobile');
                    }
                });
            }
        })();
        
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
        
        (function() {
            const supportBtn = document.getElementById('supportBtn');
            const chat = document.getElementById('chatbotContainer');
            const closeChat = document.getElementById('closeChat');
            if (supportBtn && chat) {
                supportBtn.addEventListener('click', () => chat.classList.toggle('active'));
                if (closeChat) closeChat.addEventListener('click', () => chat.classList.remove('active'));
            }
        })();
