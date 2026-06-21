        const hamburger = document.getElementById('hamburgerBtn');
        const navMenu = document.getElementById('navMenu');
        if (hamburger) hamburger.onclick = () => navMenu.classList.toggle('active-mobile');

        const profileBtn = document.getElementById('profileBtn');
        const profileDropdown = document.getElementById('profileDropdown');
        if (profileBtn) profileBtn.onclick = (e) => { e.stopPropagation(); profileDropdown.classList.toggle('show'); };
        document.onclick = (e) => { if (profileDropdown && !profileBtn.contains(e.target)) profileDropdown.classList.remove('show'); };

        function animateNumbers() {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(el => {
                const target = parseInt(el.getAttribute('data-target'));
                let current = 0;
                const increment = target / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target;
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 20);
            });
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

        document.querySelectorAll('.stat-card, .news-slider-section, .quick-section, .two-cards, .glass-card').forEach(el => observer.observe(el));

        window.onload = () => {
            animateNumbers();
            document.querySelectorAll('.stat-card, .news-slider-section, .quick-section, .two-cards, .glass-card').forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('visible');
            });
        };

		const goUp = document.getElementById('goUpBtn');
		if (goUp) {
			window.addEventListener('scroll', function() {
				if (window.scrollY > 300) {
					goUp.classList.add('show');
				} else {
					goUp.classList.remove('show');
				}
			});

			goUp.addEventListener('click', function() {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			});
		}

        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        function showSlide(idx) {
            slides.forEach(s => s.classList.remove('active-slide'));
            dots.forEach(d => d.classList.remove('active'));
            slides[idx].classList.add('active-slide');
            dots[idx].classList.add('active');
            currentSlide = idx;
        }
        dots.forEach((dot, i) => dot.onclick = () => showSlide(i));
        setInterval(() => { let n = (currentSlide + 1) % slides.length; showSlide(n); }, 5000);

        const phoneModal = document.getElementById('phoneModal');
        const showPhone = document.getElementById('showPhoneBtn');
        const copyPhone = document.getElementById('copyPhoneBtn');
        if (showPhone) showPhone.onclick = () => phoneModal.style.display = 'flex';
        if (copyPhone) copyPhone.onclick = () => { navigator.clipboard.writeText('۰۲۱-۱۲۳۴۵۶۷۸'); alert('شماره تماس کپی شد!'); };
        window.closePhoneModal = () => phoneModal.style.display = 'none';
        if (phoneModal) phoneModal.onclick = (e) => { if (e.target === phoneModal) phoneModal.style.display = 'none'; };

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
        function addMsg(t, isUser) { let m = document.createElement('div'); m.className = 'message ' + (isUser ? 'user-message' : 'bot-message'); m.textContent = t; msgDiv.appendChild(m); msgDiv.scrollTop = msgDiv.scrollHeight; }
        function getReply(msg) { for(let k in resp) if(msg.includes(k)) return resp[k]; return 'پاسخگوی شما هستیم!'; }
        function sendMsg() { let m = inp.value.trim(); if(!m) return; addMsg(m, true); inp.value = ''; setTimeout(() => addMsg(getReply(m), false), 400); }
        if (supBtn) supBtn.onclick = () => chat.classList.toggle('active');
        if (closeChat) closeChat.onclick = () => chat.classList.remove('active');
        if (send) send.onclick = sendMsg;
        if (inp) inp.onkeypress = (e) => { if(e.key === 'Enter') sendMsg(); };
        qBtns.forEach(btn => btn.onclick = () => { let m = btn.getAttribute('data-msg'); addMsg(m, true); setTimeout(() => addMsg(getReply(m), false), 400); });

        (function initRating() {
            const stars = document.querySelectorAll('.rating-stars .star');
            const ratingValueSpan = document.getElementById('avgRatingValue');
            const ratingCountSpan = document.getElementById('ratingCount');
            const avgStarsDisplay = document.getElementById('avgStarsDisplay');
            const ratingMessage = document.getElementById('ratingMessage');
            
            if (!stars.length) return;
            
            let savedRating = localStorage.getItem('userRating');
            let ratingCount = parseInt(localStorage.getItem('ratingCount') || 0);
            let ratingSum = parseFloat(localStorage.getItem('ratingSum') || 0);
            let avgRating = ratingCount > 0 ? (ratingSum / ratingCount).toFixed(1) : 0;
            
            function generateSmallStars(rating) {
                let html = '';
                let full = Math.floor(rating);
                let half = rating % 1 >= 0.5;
                for (let i = 1; i <= 5; i++) {
                    if (i <= full) html += '<span class="star-small">★</span>';
                    else if (i === full + 1 && half) html += '<span class="star-small">½</span>';
                    else html += '<span class="star-small">☆</span>';
                }
                return html;
            }
            
            function updateAvgDisplay() {
                ratingValueSpan.textContent = avgRating;
                ratingCountSpan.textContent = `(${ratingCount} نظر)`;
                avgStarsDisplay.innerHTML = generateSmallStars(avgRating);
            }
            
            function saveRating(score) {
                if (savedRating) {
                    ratingSum -= parseFloat(savedRating);
                    ratingCount--;
                }
                savedRating = score;
                ratingSum += score;
                ratingCount++;
                avgRating = (ratingSum / ratingCount).toFixed(1);
                localStorage.setItem('userRating', score);
                localStorage.setItem('ratingCount', ratingCount);
                localStorage.setItem('ratingSum', ratingSum);
                updateAvgDisplay();
                ratingMessage.textContent = 'از امتیاز شما سپاسگزاریم!';
                setTimeout(() => { ratingMessage.textContent = ''; }, 3000);
            }
            
            updateAvgDisplay();
            
            if (savedRating) {
                stars.forEach((star, index) => {
                    if (index < savedRating) {
                        star.innerHTML = '★';
                        star.classList.add('active');
                    }
                });
            }
            
            stars.forEach(star => {
                star.addEventListener('mouseenter', function() {
                    let val = parseInt(this.getAttribute('data-value'));
                    stars.forEach((s, idx) => {
                        if (idx < val) { s.innerHTML = '★'; s.style.color = '#ffc107'; }
                        else { s.innerHTML = '☆'; s.style.color = 'rgba(255,255,255,0.5)'; }
                    });
                });
                star.addEventListener('click', function() {
                    let val = parseInt(this.getAttribute('data-value'));
                    saveRating(val);
                    stars.forEach((s, idx) => {
                        if (idx < val) { s.innerHTML = '★'; s.classList.add('active'); }
                        else { s.innerHTML = '☆'; s.classList.remove('active'); }
                    });
                });
            });
            const starsContainer = document.querySelector('.rating-stars');
            if (starsContainer) {
                starsContainer.addEventListener('mouseleave', function() {
                    stars.forEach((star, idx) => {
                        if (savedRating && idx < savedRating) { star.innerHTML = '★'; star.style.color = '#ffc107'; }
                        else { star.innerHTML = '☆'; star.style.color = 'rgba(255,255,255,0.5)'; }
                    });
                });
            }
        })();
