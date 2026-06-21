    const iranData = {
        "تهران": ["تهران", "ری", "شمیرانات", "دماوند", "فیروزکوه", "ورامین", "پیشوا", "پاکدشت", "اسلامشهر", "بهارستان", "رباط‌کریم", "قدس", "ملارد", "شهریار", "قرچک", "پردیس", "لواسان"],
            "البرز": ["کرج", "فردیس", "نظرآباد", "طالقان", "اشتهارد", "ساوجبلاغ", "هشتگرد", "ماهدشت", "محمدشهر", "کمال‌شهر", "مشکین‌دشت", "گرمدره"],
            "اصفهان": ["اصفهان", "کاشان", "خمینی‌شهر", "نجف‌آباد", "شاهین‌شهر", "فولادشهر", "فلاورجان", "گلپایگان", "خوانسار", "نطنز", "آران‌وبیدگل", "سمیرم", "مبارکه", "زرین‌شهر"],
            "فارس": ["شیراز", "مرودشت", "کازرون", "فسا", "جهرم", "لار", "آباده", "اقلید", "داراب", "فیروزآباد", "نی‌ریز", "استهبان", "سپیدان"],
            "خراسان رضوی": ["مشهد", "نیشابور", "سبزوار", "تربت‌حیدریه", "کاشمر", "قوچان", "فریمان", "تربت‌جام", "درگز", "گناباد", "چناران", "خواف", "تایباد", "بردسکن"],
            "خوزستان": ["اهواز", "آبادان", "خرمشهر", "دزفول", "ماهشهر", "بهبهان", "اندیمشک", "شوش", "شوشتر", "ایذه", "رامهرمز", "مسجدسلیمان"],
            "آذربایجان شرقی": ["تبریز", "مراغه", "مرند", "اهر", "میانه", "شبستر", "بناب", "بستان‌آباد", "اسکو", "سراب", "هریس", "جلفا"],
            "آذربایجان غربی": ["ارومیه", "خوی", "مهاباد", "بوکان", "سلماس", "ماکو", "نقده", "میاندوآب", "پیرانشهر", "سردشت", "شاهین‌دژ", "تکاب"],
            "مازندران": ["ساری", "بابل", "آمل", "قائم‌شهر", "نوشهر", "چالوس", "تنکابن", "بابلسر", "بهشهر", "جویبار", "نکا", "رامسر"],
            "گیلان": ["رشت", "بندر انزلی", "لاهیجان", "لنگرود", "رودسر", "آستارا", "تالش", "صومعه‌سرا", "فومن", "رودبار", "ماسال", "شفت"],
            "کرمان": ["کرمان", "رفسنجان", "سیرجان", "جیرفت", "بم", "زرند", "شهربابک", "کهنوج", "بردسیر", "بافت", "منوجان"],
            "هرمزگان": ["بندرعباس", "میناب", "قشم", "بندرلنگه", "کیش", "حاجی‌آباد", "رودان", "بستک", "پارسیان", "جاسک", "سیریک"],
            "کرمانشاه": ["کرمانشاه", "اسلام‌آباد غرب", "هرسین", "سنقر", "کنگاور", "صحنه", "جوانرود", "پاوه", "قصرشیرین", "سرپل‌ذهاب", "گیلانغرب"],
            "کردستان": ["سنندج", "سقز", "بانه", "مریوان", "قروه", "دیواندره", "کامیاران", "بیجار", "دهگلان", "سروآباد"],
            "همدان": ["همدان", "ملایر", "نهاوند", "اسدآباد", "تویسرکان", "رزن", "بهار", "کبودرآهنگ", "فامنین"],
            "یزد": ["یزد", "میبد", "اردکان", "بافق", "مهریز", "تفت", "ابرکوه", "اشکذر", "خاتم", "بهاباد"],
            "قزوین": ["قزوین", "تاکستان", "البرز", "آبیک", "بوئین‌زهرا", "محمدیه", "محمودآباد نمونه"],
            "قم": ["قم", "کهک", "جعفریه", "سلفچگان", "قنوات"],
            "زنجان": ["زنجان", "ابهر", "خرمدره", "ماه‌نشان", "سلطانیه", "طارم", "ایجرود"],
            "بوشهر": ["بوشهر", "برازجان", "گناوه", "دیلم", "کنگان", "جم", "دشتستان", "دیر", "عسلویه"],
            "لرستان": ["خرم‌آباد", "بروجرد", "دورود", "الیگودرز", "کوهدشت", "ازنا", "پلدختر", "نورآباد"],
            "چهارمحال و بختیاری": ["شهرکرد", "بروجن", "فارسان", "کوهرنگ", "لردگان", "اردل", "کیار"],
            "کهگیلویه و بویراحمد": ["یاسوج", "گچساران", "دهدشت", "دوگنبدان", "باشت", "لیکک", "سی‌سخت"],
            "گلستان": ["گرگان", "گنبدکاووس", "علی‌آباد کتول", "کردکوی", "آق‌قلا", "بندرترکمن", "مینودشت", "کلاله"],
            "سمنان": ["سمنان", "شاهرود", "دامغان", "گرمسار", "مهدی‌شهر", "آرادان", "میامی", "سرخه"],
            "سیستان و بلوچستان": ["زاهدان", "زابل", "چابهار", "ایرانشهر", "سراوان", "خاش", "نیکشهر", "کنارک", "سرباز"],
            "اردبیل": ["اردبیل", "پارس‌آباد", "مشگین‌شهر", "خلیفان", "نمین", "نیر", "گرمی", "اصلاندوز", "بیله‌سوار", "سرعین"],
            "مرکزی": ["اراک", "ساوه", "خمین", "محلات", "دلیجان", "تفرش", "شازند", "آشتیان"],
            "ایلام": ["ایلام", "دهلران", "مهران", "آبدانان", "دره‌شهر", "ایوان", "چرداول", "بدره"],
            "خراسان جنوبی": ["بیرجند", "قائن", "فردوس", "طبس", "نهبندان", "سربیشه", "درمیان", "سرایان"],
            "خراسان شمالی": ["بجنورد", "شیروان", "اسفراین", "آشخانه", "جاجرم", "فاروج", "گرمه", "راز"]
        };


    const provinceSelect = document.getElementById("provinceSelect");
    const citySelect = document.getElementById("citySelect");

    for (let province in iranData) {
        const opt = document.createElement("option");
        opt.value = province;
        opt.textContent = province;
        provinceSelect.appendChild(opt);
    }

    provinceSelect.addEventListener("change", () => {
        const province = provinceSelect.value;
        citySelect.innerHTML = "";
        citySelect.disabled = !province;
        if (!province) {
            citySelect.innerHTML = `<option value="">ابتدا استان را انتخاب کنید</option>`;
            return;
        }
        iranData[province].forEach(city => {
            const opt = document.createElement("option");
            opt.value = city;
            opt.textContent = city;
            citySelect.appendChild(opt);
        });
    });

    function validateForm() {
        let isValid = true;
        document.querySelectorAll('.error-border').forEach(el => el.classList.remove('error-border'));
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        const uniName = document.getElementById('uniName');
        if (!uniName.value.trim()) {
            uniName.classList.add('error-border');
            document.getElementById('uniNameError').textContent = 'لطفاً نام دانشگاه را وارد کنید';
            isValid = false;
        }
        
        const presidentName = document.getElementById('presidentName');
        if (!presidentName.value.trim()) {
            presidentName.classList.add('error-border');
            document.getElementById('presidentNameError').textContent = 'لطفاً نام رئیس دانشگاه را وارد کنید';
            isValid = false;
        }
        
        const uniPhone = document.getElementById('uniPhone');
        if (!uniPhone.value.trim()) {
            uniPhone.classList.add('error-border');
            document.getElementById('uniPhoneError').textContent = 'لطفاً تلفن دانشگاه را وارد کنید';
            isValid = false;
        }
        
        const presidentPhone = document.getElementById('presidentPhone');
        if (!presidentPhone.value.trim()) {
            presidentPhone.classList.add('error-border');
            document.getElementById('presidentPhoneError').textContent = 'لطفاً شماره رئیس دانشگاه را وارد کنید';
            isValid = false;
        }
        
        if (!provinceSelect.value) {
            provinceSelect.classList.add('error-border');
            document.getElementById('provinceError').textContent = 'لطفاً استان را انتخاب کنید';
            isValid = false;
        }
        
        if (!citySelect.value || citySelect.disabled) {
            citySelect.classList.add('error-border');
            document.getElementById('cityError').textContent = 'لطفاً شهر را انتخاب کنید';
            isValid = false;
        }
        
        const address = document.getElementById('address');
        if (!address.value.trim()) {
            address.classList.add('error-border');
            document.getElementById('addressError').textContent = 'لطفاً آدرس دانشگاه را وارد کنید';
            isValid = false;
        }
        
        return isValid;
    }
    
    function setupRemoveErrorOnInput() {
        const fields = ['uniName', 'presidentName', 'uniPhone', 'presidentPhone', 'address'];
        fields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field) {
                field.addEventListener('input', function() {
                    this.classList.remove('error-border');
                    const errorId = fieldId + 'Error';
                    const errorSpan = document.getElementById(errorId);
                    if (errorSpan) errorSpan.textContent = '';
                });
            }
        });
        
        provinceSelect.addEventListener('change', function() {
            this.classList.remove('error-border');
            document.getElementById('provinceError').textContent = '';
        });
        
        citySelect.addEventListener('change', function() {
            this.classList.remove('error-border');
            document.getElementById('cityError').textContent = '';
        });
    }
    
    setupRemoveErrorOnInput();
    
    document.getElementById('universityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            alert('اطلاعات دانشگاه با موفقیت ثبت شد!');
        }
    });
    
    const fileInputs = document.querySelectorAll('.file-upload input[type="file"]');
    fileInputs.forEach((input, index) => {
        input.addEventListener('change', function() {
            const label = this.parentElement.querySelector('.file-upload-label');
            if (this.files && this.files[0]) {
                const name = this.files[0].name;
                label.innerHTML = `${name.length > 20 ? name.substring(0, 20) + '...' : name}`;
                label.style.background = '#e8f2e8';
            } else {
                label.innerHTML = `انتخاب عکس ${index + 1}`;
                label.style.background = '';
            }
        });
    });
