let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active-slide'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active-slide');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let newIndex = currentSlide + 1;
    if (newIndex >= slides.length) newIndex = 0;
    showSlide(newIndex);
}

function prevSlide() {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) newIndex = slides.length - 1;
    showSlide(newIndex);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

setInterval(nextSlide, 7000);

const iranCities = {
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


let allUniversities = [
// تهران
{ id: 1, name: "دانشگاه تهران", province: "تهران", city: "تهران" },
{ id: 2, name: "دانشگاه صنعتی شریف", province: "تهران", city: "تهران" },
{ id: 3, name: "دانشگاه شهید بهشتی", province: "تهران", city: "تهران" },
{ id: 4, name: "دانشگاه علم و صنعت ایران", province: "تهران", city: "تهران" },
{ id: 5, name: "دانشگاه خواجه نصیرالدین طوسی", province: "تهران", city: "تهران" },
{ id: 6, name: "دانشگاه علامه طباطبائی", province: "تهران", city: "تهران" },
{ id: 7, name: "دانشگاه تربیت مدرس", province: "تهران", city: "تهران" },
{ id: 8, name: "دانشگاه الزهرا", province: "تهران", city: "تهران" },
{ id: 9, name: "دانشگاه هنر تهران", province: "تهران", city: "تهران" },
{ id: 10, name: "دانشگاه تربیت دبیر شهید رجایی", province: "تهران", city: "تهران" },

// اصفهان
{ id: 11, name: "دانشگاه صنعتی اصفهان", province: "اصفهان", city: "اصفهان" },
{ id: 12, name: "دانشگاه اصفهان", province: "اصفهان", city: "اصفهان" },
{ id: 13, name: "دانشگاه علوم پزشکی اصفهان", province: "اصفهان", city: "اصفهان" },
{ id: 14, name: "دانشگاه هنر اصفهان", province: "اصفهان", city: "اصفهان" },

// شیراز
{ id: 15, name: "دانشگاه شیراز", province: "فارس", city: "شیراز" },
{ id: 16, name: "دانشگاه صنعتی شیراز", province: "فارس", city: "شیراز" },
{ id: 17, name: "دانشگاه علوم پزشکی شیراز", province: "فارس", city: "شیراز" },

// مشهد
{ id: 18, name: "دانشگاه فردوسی مشهد", province: "خراسان رضوی", city: "مشهد" },
{ id: 19, name: "دانشگاه علوم پزشکی مشهد", province: "خراسان رضوی", city: "مشهد" },
{ id: 20, name: "دانشگاه صنعتی مشهد", province: "خراسان رضوی", city: "مشهد" },

// تبریز
{ id: 21, name: "دانشگاه تبریز", province: "آذربایجان شرقی", city: "تبریز" },
{ id: 22, name: "دانشگاه صنعتی سهند", province: "آذربایجان شرقی", city: "تبریز" },
{ id: 23, name: "دانشگاه علوم پزشکی تبریز", province: "آذربایجان شرقی", city: "تبریز" },

// اهواز
{ id: 24, name: "دانشگاه شهید چمران اهواز", province: "خوزستان", city: "اهواز" },
{ id: 25, name: "دانشگاه علوم پزشکی جندی شاپور", province: "خوزستان", city: "اهواز" },
{ id: 26, name: "دانشگاه صنعتی جندی شاپور", province: "خوزستان", city: "اهواز" },

// کرمانشاه
{ id: 27, name: "دانشگاه رازی کرمانشاه", province: "کرمانشاه", city: "کرمانشاه" },
{ id: 28, name: "دانشگاه علوم پزشکی کرمانشاه", province: "کرمانشاه", city: "کرمانشاه" },

// قم
{ id: 29, name: "دانشگاه قم", province: "قم", city: "قم" },
{ id: 30, name: "دانشگاه علوم پزشکی قم", province: "قم", city: "قم" },
{ id: 31, name: "دانشگاه ملی مهارت دختران قم", province: "قم", city: "قم" },
{ id: 32, name: "دانشگاه ملی مهارت پسران قم", province: "قم", city: "قم" },

// کرج
{ id: 33, name: "دانشگاه خوارزمی", province: "البرز", city: "کرج" },
{ id: 34, name: "دانشگاه علوم پزشکی البرز", province: "البرز", city: "کرج" },

// رشت
{ id: 35, name: "دانشگاه گیلان", province: "گیلان", city: "رشت" },
{ id: 36, name: "دانشگاه علوم پزشکی گیلان", province: "گیلان", city: "رشت" },

// کرمان
{ id: 37, name: "دانشگاه شهید باهنر کرمان", province: "کرمان", city: "کرمان" },
{ id: 38, name: "دانشگاه علوم پزشکی کرمان", province: "کرمان", city: "کرمان" },

// ارومیه
{ id: 39, name: "دانشگاه ارومیه", province: "آذربایجان غربی", city: "ارومیه" },
{ id: 40, name: "دانشگاه علوم پزشکی ارومیه", province: "آذربایجان غربی", city: "ارومیه" },

// زاهدان
{ id: 41, name: "دانشگاه سیستان و بلوچستان", province: "سیستان و بلوچستان", city: "زاهدان" },
{ id: 42, name: "دانشگاه علوم پزشکی زاهدان", province: "سیستان و بلوچستان", city: "زاهدان" },

// همدان
{ id: 43, name: "دانشگاه بوعلی سینا", province: "همدان", city: "همدان" },
{ id: 44, name: "دانشگاه علوم پزشکی همدان", province: "همدان", city: "همدان" },

// سنندج
{ id: 45, name: "دانشگاه کردستان", province: "کردستان", city: "سنندج" },
{ id: 46, name: "دانشگاه علوم پزشکی کردستان", province: "کردستان", city: "سنندج" },

// یزد
{ id: 47, name: "دانشگاه یزد", province: "یزد", city: "یزد" },
{ id: 48, name: "دانشگاه علوم پزشکی یزد", province: "یزد", city: "یزد" },

// اراک
{ id: 49, name: "دانشگاه اراک", province: "مرکزی", city: "اراک" },
{ id: 50, name: "دانشگاه علوم پزشکی اراک", province: "مرکزی", city: "اراک" },

// بندرعباس
{ id: 51, name: "دانشگاه هرمزگان", province: "هرمزگان", city: "بندرعباس" },
{ id: 52, name: "دانشگاه علوم پزشکی هرمزگان", province: "هرمزگان", city: "بندرعباس" },

// قزوین
{ id: 53, name: "دانشگاه بین المللی امام خمینی", province: "قزوین", city: "قزوین" },
{ id: 54, name: "دانشگاه علوم پزشکی قزوین", province: "قزوین", city: "قزوین" },

// ساری
{ id: 55, name: "دانشگاه مازندران", province: "مازندران", city: "ساری" },
{ id: 56, name: "دانشگاه علوم پزشکی مازندران", province: "مازندران", city: "ساری" },

// گرگان
{ id: 57, name: "دانشگاه گلستان", province: "گلستان", city: "گرگان" },
{ id: 58, name: "دانشگاه علوم پزشکی گلستان", province: "گلستان", city: "گرگان" },

// خرم‌آباد
{ id: 59, name: "دانشگاه لرستان", province: "لرستان", city: "خرم‌آباد" },
{ id: 60, name: "دانشگاه علوم پزشکی لرستان", province: "لرستان", city: "خرم‌آباد" },

// بوشهر
{ id: 61, name: "دانشگاه خلیج فارس", province: "بوشهر", city: "بوشهر" },
{ id: 62, name: "دانشگاه علوم پزشکی بوشهر", province: "بوشهر", city: "بوشهر" },

// زنجان
{ id: 63, name: "دانشگاه زنجان", province: "زنجان", city: "زنجان" },
{ id: 64, name: "دانشگاه علوم پزشکی زنجان", province: "زنجان", city: "زنجان" },

// شهرکرد
{ id: 65, name: "دانشگاه شهرکرد", province: "چهارمحال و بختیاری", city: "شهرکرد" },
{ id: 66, name: "دانشگاه علوم پزشکی شهرکرد", province: "چهارمحال و بختیاری", city: "شهرکرد" },

// ایلام
{ id: 67, name: "دانشگاه ایلام", province: "ایلام", city: "ایلام" },
{ id: 68, name: "دانشگاه علوم پزشکی ایلام", province: "ایلام", city: "ایلام" },

// بجنورد
{ id: 69, name: "دانشگاه بجنورد", province: "خراسان شمالی", city: "بجنورد" },
{ id: 70, name: "دانشگاه علوم پزشکی بجنورد", province: "خراسان شمالی", city: "بجنورد" },

// یاسوج
{ id: 71, name: "دانشگاه یاسوج", province: "کهگیلویه و بویراحمد", city: "یاسوج" },
{ id: 72, name: "دانشگاه علوم پزشکی یاسوج", province: "کهگیلویه و بویراحمد", city: "یاسوج" },

// بیرجند
{ id: 73, name: "دانشگاه بیرجند", province: "خراسان جنوبی", city: "بیرجند" },
{ id: 74, name: "دانشگاه علوم پزشکی بیرجند", province: "خراسان جنوبی", city: "بیرجند" },

// سمنان
{ id: 75, name: "دانشگاه سمنان", province: "سمنان", city: "سمنان" },
{ id: 76, name: "دانشگاه علوم پزشکی سمنان", province: "سمنان", city: "سمنان" },

// اردبیل
{ id: 77, name: "دانشگاه محقق اردبیلی", province: "اردبیل", city: "اردبیل" },
{ id: 78, name: "دانشگاه علوم پزشکی اردبیل", province: "اردبیل", city: "اردبیل" },

// بابل
{ id: 79, name: "دانشگاه صنعتی نوشیروانی بابل", province: "مازندران", city: "بابل" },
{ id: 80, name: "دانشگاه علوم پزشکی بابل", province: "مازندران", city: "بابل" },

// کاشان
{ id: 81, name: "دانشگاه کاشان", province: "اصفهان", city: "کاشان" },
{ id: 82, name: "دانشگاه علوم پزشکی کاشان", province: "اصفهان", city: "کاشان" },

// دزفول
{ id: 83, name: "دانشگاه علوم پزشکی دزفول", province: "خوزستان", city: "دزفول" },

// آبادان
{ id: 84, name: "دانشگاه علوم پزشکی آبادان", province: "خوزستان", city: "آبادان" },

// مراغه
{ id: 85, name: "دانشگاه مراغه", province: "آذربایجان شرقی", city: "مراغه" },

// جیرفت
{ id: 86, name: "دانشگاه جیرفت", province: "کرمان", city: "جیرفت" },

// رفسنجان
{ id: 87, name: "دانشگاه ولیعصر رفسنجان", province: "کرمان", city: "رفسنجان" },

// شاهرود
{ id: 88, name: "دانشگاه صنعتی شاهرود", province: "سمنان", city: "شاهرود" },

// لاهیجان
{ id: 89, name: "دانشگاه گیلان - پردیس لاهیجان", province: "گیلان", city: "لاهیجان" },

// نور
{ id: 90, name: "دانشگاه صنعتی نوشیروانی بابل - پردیس نور", province: "مازندران", city: "نور" },

// بهبهان
{ id: 91, name: "دانشگاه صنعتی بهبهان", province: "خوزستان", city: "بهبهان" },

// گچساران
{ id: 92, name: "دانشگاه علوم پزشکی گچساران", province: "کهگیلویه و بویراحمد", city: "گچساران" },

// میبد
{ id: 93, name: "دانشگاه میبد", province: "یزد", city: "میبد" },

// تربت حیدریه
{ id: 94, name: "دانشگاه تربت حیدریه", province: "خراسان رضوی", city: "تربت حیدریه" },

// سبزوار
{ id: 95, name: "دانشگاه حکیم سبزواری", province: "خراسان رضوی", city: "سبزوار" },

// دامغان
{ id: 96, name: "دانشگاه دامغان", province: "سمنان", city: "دامغان" },

// جهرم
{ id: 97, name: "دانشگاه جهرم", province: "فارس", city: "جهرم" },

// مرودشت
{ id: 98, name: "دانشگاه آزاد اسلامی مرودشت", province: "فارس", city: "مرودشت" },

// خوی
{ id: 99, name: "دانشگاه خوی", province: "آذربایجان غربی", city: "خوی" },

// سقز
{ id: 100, name: "دانشگاه سقز", province: "کردستان", city: "سقز" }
];

let currentFilteredList = [];
let currentPage = 1;
const itemsPerPage = 8;

function renderUniversities(list) {
    const container = document.getElementById('universitiesList');
    if (!list || list.length === 0) {
        container.innerHTML = '<div style="text-align: center; grid-column: 1/-1; padding: 40px; color: #8a9a8a;">❌ هیچ دانشگاهی با این مشخصات یافت نشد.</div>';
        return;
    }
    container.innerHTML = list.map(uni => `
        <div class="uni-card" onclick="showTransitionModal(${uni.id}, '${uni.name}')">
            <div class="uni-name">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a472a" stroke-width="1.5" style="display: inline; vertical-align: middle; margin-left: 8px;">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                ${uni.name}
            </div>
            <div class="uni-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8a9a8a" stroke-width="1.5" style="display: inline; vertical-align: middle; margin-left: 4px;">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${uni.province} - ${uni.city}
            </div>
            <button class="view-btn">مشاهده صفحه ←</button>
        </div>
    `).join('');
    document.getElementById('uniCount').innerText = allUniversities.length;
}

function showTransitionModal(id, name) {
    document.getElementById('transitionUniName').innerText = `در حال انتقال به صفحه ${name}...`;
    document.getElementById('transitionModal').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('transitionModal').style.display = 'none';
        window.location.href = `index.html?id=${id}`;
    }, 1500);
}

function filterUniversities() {
    const province = document.getElementById('provinceSelect').value;
    const city = document.getElementById('citySelect').value;
    const searchText = document.getElementById('searchInput').value.trim();
    let filtered = [...allUniversities];
    if (province && province !== "") filtered = filtered.filter(u => u.province === province);
    if (city && city !== "") filtered = filtered.filter(u => u.city === city);
    if (searchText && searchText !== "") filtered = filtered.filter(u => u.name.includes(searchText));
    currentFilteredList = filtered;
    currentPage = 1;
    updatePaginationAndRender();
}

function updatePaginationAndRender() {
    const totalPages = Math.ceil(currentFilteredList.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = currentFilteredList.slice(start, end);
    renderUniversities(pageItems);
    renderPaginationControls(totalPages);
}

function renderPaginationControls(totalPages) {
    const container = document.getElementById('paginationControls');
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    let html = `<button class="nav-page" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>❮ قبلی</button>`;
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            html += `<span style="margin:0 5px;">...</span>`;
        }
    }
    html += `<button class="nav-page" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>بعدی ❯</button>`;
    container.innerHTML = html;
}

function changePage(page) {
    const totalPages = Math.ceil(currentFilteredList.length / itemsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    updatePaginationAndRender();
}

function searchAndPaginate() { filterUniversities(); }

function populateProvinceSelects() {
    const provinces = Object.keys(iranCities);
    const provinceSelect = document.getElementById('provinceSelect');
    provinceSelect.innerHTML = '<option value="">همه استان‌ها</option>' + provinces.map(p => `<option value="${p}">${p}</option>`).join('');
    const citySelect = document.getElementById('citySelect');
    citySelect.innerHTML = '<option value="">ابتدا استان را انتخاب کنید</option>';
    citySelect.disabled = true;
}

function setupCitySelect() {
    const provinceSelect = document.getElementById('provinceSelect');
    const citySelect = document.getElementById('citySelect');
    provinceSelect.addEventListener('change', function() {
        const province = provinceSelect.value;
        citySelect.innerHTML = '<option value="">ابتدا استان را انتخاب کنید</option>';
        if (province && iranCities[province]) {
            citySelect.disabled = false;
            iranCities[province].forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        } else {
            citySelect.disabled = true;
        }
    });
}

function scrollToSearch() { 
    document.getElementById('searchSection').scrollIntoView({ behavior: 'smooth' }); 
}

populateProvinceSelects();
setupCitySelect();
currentFilteredList = [...allUniversities];
currentPage = 1;
updatePaginationAndRender();

function openTicketTracking() {
    document.getElementById('ticketTrackingModal').style.display = 'flex';
    backToInputMode();
}

function closeTicketModal() {
    document.getElementById('ticketTrackingModal').style.display = 'none';
    document.getElementById('ticketCode').value = '';
}

function backToInputMode() {
    document.getElementById('trackingInputMode').style.display = 'block';
    document.getElementById('trackingResultMode').style.display = 'none';
    document.getElementById('ticketCode').value = '';
}

function trackTicket() {
    const code = document.getElementById('ticketCode').value.trim();
    
    if (!code) {
        alert('لطفاً کد پیگیری را وارد کنید');
        return;
    }

    let tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
    
    const ticket = tickets.find(t => t.trackingCode === code);
    
    if (!ticket) {
        alert('❌ کد پیگیری نامعتبر است. لطفاً مجدداً بررسی کنید.');
        return;
    }

    document.getElementById('resultCode').innerText = ticket.trackingCode;
    document.getElementById('resultDate').innerText = ticket.date;
    document.getElementById('resultMessage').innerText = ticket.message;
    
    const statusElement = document.getElementById('resultStatus');
    const iconElement = document.getElementById('resultIcon');
    const titleElement = document.getElementById('resultTitle');
    
    if (ticket.answer && ticket.answer.trim() !== '') {

        statusElement.innerText = 'پاسخ داده شده ✅';
        statusElement.style.color = '#4caf50';
        iconElement.innerHTML = `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4caf50" stroke-width="1.5">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>`;
        titleElement.innerText = 'پاسخ تیکت شما';
        
        document.getElementById('answerBox').style.display = 'block';
        document.getElementById('noAnswerBox').style.display = 'none';
        document.getElementById('resultAnswer').innerText = ticket.answer;
        document.getElementById('answerDate').innerHTML = `📅 پاسخ در تاریخ: ${ticket.answerDate || 'نامشخص'}`;
    } else {
        statusElement.innerText = 'در انتظار پاسخ ⏳';
        statusElement.style.color = '#ff9800';
        iconElement.innerHTML = `<svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff9800" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>`;
        titleElement.innerText = 'وضعیت تیکت شما';
        
        document.getElementById('answerBox').style.display = 'none';
        document.getElementById('noAnswerBox').style.display = 'block';
    }
    
    document.getElementById('trackingInputMode').style.display = 'none';
    document.getElementById('trackingResultMode').style.display = 'block';
}

function saveTicketToLocalStorage(ticketData) {
    let tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
    
    const trackingCode = generateTrackingCode();
    
    const newTicket = {
        id: Date.now(),
        trackingCode: trackingCode,
        name: ticketData.name,
        email: ticketData.email,
        subject: ticketData.subject,
        message: ticketData.message,
        date: new Date().toLocaleDateString('fa-IR'),
        status: 'pending',
        answer: ticketData.answer || '',
        answerDate: ticketData.answerDate || ''
    };
    
    tickets.push(newTicket);
    localStorage.setItem('supportTickets', JSON.stringify(tickets));
    
    return trackingCode;
}

function generateTrackingCode() {
    const year = new Date().getFullYear().toString().slice(2);
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `T-${year}${random}`;
}

window.openTicketTracking = openTicketTracking;
window.closeTicketModal = closeTicketModal;
window.trackTicket = trackTicket;
window.backToInputMode = backToInputMode;
window.saveTicketToLocalStorage = saveTicketToLocalStorage;
window.generateTrackingCode = generateTrackingCode;

function initMockTickets() {
let existingTickets = localStorage.getItem('supportTickets');

if (existingTickets && JSON.parse(existingTickets).length > 0) {
    return;     }

const mockTickets = [
    {
        id: 1001,
        trackingCode: "T-4444-4444",
        name: "رضا محمدی",
        email: "reza@example.com",
        subject: "مشکل در ثبت ورزشگاه",
        message: "سلام. من قصد ثبت ورزشگاه دانشگاه رو دارم ولی سیستم خطای نامعتبر بودن مدارک رو میده. لطفاً راهنمایی کنید.",
        date: "۱۴۰5/۰۱/۱۵",
        status: "answered",
        answer: "حجم عکس هاتون حداکثر 2 مگابایت و با فرمت jpg باشه",
        answerDate: "۱۴۰5/۰۱/۱۶"
    },
    {
        id: 1002,
        trackingCode: "T-5555-5555",
        name: "سارا احمدی",
        email: "sara@example.com",
        subject: "درخواست تجهیزات ورزشی",
        message: "سالن بدنسازی دانشگاه تجهیزات مناسبی نداره. میشه درخواست تجهیزات جدید بدیم؟",
        date: "1405/۰۲/۰۵",
        status: "pending",
        answer: "",
        answerDate: ""
    }
];

localStorage.setItem('supportTickets', JSON.stringify(mockTickets));
console.log('✅ دیتای رندوم تیکت‌ها با موفقیت ذخیره شد.');
}

initMockTickets();

function addNewTicket(ticketData) {
let tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');

const trackingCode = generateTrackingCode();

const newTicket = {
    id: Date.now(),
    trackingCode: trackingCode,
    name: ticketData.name,
    email: ticketData.email,
    subject: ticketData.subject,
    message: ticketData.message,
    date: new Date().toLocaleDateString('fa-IR'),
    status: 'pending',
    answer: '',
    answerDate: ''
};zfzzzzzzz

tickets.push(newTicket);
localStorage.setItem('supportTickets', JSON.stringify(tickets));

return trackingCode;
}

function answerTicket(trackingCode, answerText) {
let tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');

const ticketIndex = tickets.findIndex(t => t.trackingCode === trackingCode);

if (ticketIndex !== -1) {
    tickets[ticketIndex].status = 'answered';
    tickets[ticketIndex].answer = answerText;
    tickets[ticketIndex].answerDate = new Date().toLocaleDateString('fa-IR');
    
    localStorage.setItem('supportTickets', JSON.stringify(tickets));
    return true;
}

return false;
}

function getAllTickets() {
return JSON.parse(localStorage.getItem('supportTickets') || '[]');
}

function getPendingTickets() {
const tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
return tickets.filter(t => t.status === 'pending');
}

function getAnsweredTickets() {
const tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
return tickets.filter(t => t.status === 'answered');
}
