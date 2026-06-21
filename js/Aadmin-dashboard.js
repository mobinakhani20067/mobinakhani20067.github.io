let universities = [
    { id: 1, name: "دانشگاه تهران", province: "تهران", status: "approved", date: "۱۴۰۴/۰۲/۱۰" },
    { id: 2, name: "دانشگاه صنعتی شریف", province: "تهران", status: "approved", date: "۱۴۰۴/۰۲/۰۵" },
    { id: 3, name: "دانشگاه شهید بهشتی", province: "تهران", status: "approved", date: "۱۴۰۴/۰۲/۲۳" },
    { id: 4, name: "دانشگاه صنعتی اصفهان", province: "اصفهان", status: "approved", date: "۱۴۰۴/۰۲/۲۲" },
    { id: 5, name: "دانشگاه فردوسی مشهد", province: "خراسان رضوی", status: "approved", date: "۱۴۰۴/۰۲/۱۸" },
    { id: 6, name: "دانشگاه شیراز", province: "فارس", status: "approved", date: "۱۴۰۴/۰۲/۲۰" },
    { id: 7, name: "دانشگاه تبریز", province: "آذربایجان شرقی", status: "approved", date: "۱۴۰۴/۰۲/۱۵" },
    { id: 8, name: "دانشگاه شهید چمران اهواز", province: "خوزستان", status: "approved", date: "۱۴۰۴/۰۲/۱۲" },
    { id: 9, name: "دانشگاه رازی کرمانشاه", province: "کرمانشاه", status: "approved", date: "۱۴۰۴/۰۲/۰۸" },
    { id: 10, name: "دانشگاه گیلان", province: "گیلان", status: "approved", date: "۱۴۰۴/۰۲/۰۳" },
    { id: 11, name: "دانشگاه مازندران", province: "مازندران", status: "approved", date: "۱۴۰۴/۰۱/۲۸" },
    { id: 12, name: "دانشگاه خوارزمی", province: "البرز", status: "approved", date: "۱۴۰۴/۰۱/۲۵" },
    { id: 13, name: "دانشگاه بوعلی سینا همدان", province: "همدان", status: "approved", date: "۱۴۰۴/۰۱/۲۰" },
    { id: 14, name: "دانشگاه سیستان و بلوچستان", province: "سیستان و بلوچستان", status: "approved", date: "۱۴۰۴/۰۱/۱۵" },
    { id: 15, name: "دانشگاه قم", province: "قم", status: "approved", date: "۱۴۰۴/۰۱/۱۰" },
    { id: 16, name: "دانشگاه ارومیه", province: "آذربایجان غربی", status: "approved", date: "۱۴۰۴/۰۱/۰۵" },
    { id: 17, name: "دانشگاه کردستان", province: "کردستان", status: "approved", date: "۱۴۰۴/۰۱/۰۱" },
    { id: 18, name: "دانشگاه یزد", province: "یزد", status: "approved", date: "۱۴۰۳/۱۲/۲۸" },
    { id: 19, name: "دانشگاه اراک", province: "مرکزی", status: "approved", date: "۱۴۰۳/۱۲/۲۵" },
    { id: 20, name: "دانشگاه هرمزگان", province: "هرمزگان", status: "approved", date: "۱۴۰۳/۱۲/۲۰" },
    { id: 21, name: "دانشگاه بین المللی امام خمینی", province: "قزوین", status: "approved", date: "۱۴۰۳/۱۲/۱۵" },
    { id: 22, name: "دانشگاه گلستان", province: "گلستان", status: "approved", date: "۱۴۰۳/۱۲/۱۰" },
    { id: 23, name: "دانشگاه لرستان", province: "لرستان", status: "approved", date: "۱۴۰۳/۱۲/۰۵" },
    { id: 24, name: "دانشگاه خلیج فارس", province: "بوشهر", status: "approved", date: "۱۴۰۳/۱۲/۰۱" },
    { id: 25, name: "دانشگاه زنجان", province: "زنجان", status: "approved", date: "۱۴۰۳/۱۱/۲۵" },
    { id: 26, name: "دانشگاه شهرکرد", province: "چهارمحال و بختیاری", status: "approved", date: "۱۴۰۳/۱۱/۲۰" },
    { id: 27, name: "دانشگاه ایلام", province: "ایلام", status: "approved", date: "۱۴۰۳/۱۱/۱۵" },
    { id: 28, name: "دانشگاه بجنورد", province: "خراسان شمالی", status: "approved", date: "۱۴۰۳/۱۱/۱۰" },
    { id: 29, name: "دانشگاه یاسوج", province: "کهگیلویه و بویراحمد", status: "approved", date: "۱۴۰۳/۱۱/۰۵" },
    { id: 30, name: "دانشگاه بیرجند", province: "خراسان جنوبی", status: "approved", date: "۱۴۰۳/۱۱/۰۱" },
    { id: 31, name: "دانشگاه سمنان", province: "سمنان", status: "approved", date: "۱۴۰۳/۱۰/۲۸" },
    { id: 32, name: "دانشگاه محقق اردبیلی", province: "اردبیل", status: "approved", date: "۱۴۰۳/۱۰/۲۵" },
    { id: 33, name: "دانشگاه صنعتی نوشیروانی بابل", province: "مازندران", status: "approved", date: "۱۴۰۳/۱۰/۲۰" },
    { id: 34, name: "دانشگاه کاشان", province: "اصفهان", status: "approved", date: "۱۴۰۳/۱۰/۱۵" },
    { id: 35, name: "دانشگاه مراغه", province: "آذربایجان شرقی", status: "approved", date: "۱۴۰۳/۱۰/۱۰" },
    { id: 36, name: "دانشگاه جیرفت", province: "کرمان", status: "approved", date: "۱۴۰۳/۱۰/۰۵" },
    { id: 37, name: "دانشگاه ولیعصر رفسنجان", province: "کرمان", status: "approved", date: "۱۴۰۳/۱۰/۰۱" },
    { id: 38, name: "دانشگاه صنعتی شاهرود", province: "سمنان", status: "approved", date: "۱۴۰۳/۰۹/۲۸" },
    { id: 39, name: "دانشگاه حکیم سبزواری", province: "خراسان رضوی", status: "approved", date: "۱۴۰۳/۰۹/۲۵" },
    { id: 40, name: "دانشگاه دامغان", province: "سمنان", status: "approved", date: "۱۴۰۳/۰۹/۲۰" },
    { id: 41, name: "دانشگاه جهرم", province: "فارس", status: "approved", date: "۱۴۰۳/۰۹/۱۵" },
    { id: 42, name: "دانشگاه خوی", province: "آذربایجان غربی", status: "approved", date: "۱۴۰۳/۰۹/۱۰" },
    { id: 43, name: "دانشگاه سقز", province: "کردستان", status: "approved", date: "۱۴۰۳/۰۹/۰۵" },
    { id: 44, name: "دانشگاه میبد", province: "یزد", status: "approved", date: "۱۴۰۳/۰۹/۰۱" },
    { id: 45, name: "دانشگاه تربت حیدریه", province: "خراسان رضوی", status: "approved", date: "۱۴۰۳/۰۸/۲۸" },
    { id: 46, name: "دانشگاه صنعتی بهبهان", province: "خوزستان", status: "approved", date: "۱۴۰۳/۰۸/۲۵" },
    { id: 47, name: "دانشگاه علوم پزشکی گچساران", province: "کهگیلویه و بویراحمد", status: "approved", date: "۱۴۰۳/۰۸/۲۰" },
    { id: 48, name: "دانشگاه علوم پزشکی دزفول", province: "خوزستان", status: "approved", date: "۱۴۰۳/۰۸/۱۵" },
    { id: 49, name: "دانشگاه علوم پزشکی آبادان", province: "خوزستان", status: "approved", date: "۱۴۰۳/۰۸/۱۰" },
    { id: 50, name: "دانشگاه علوم پزشکی بابل", province: "مازندران", status: "approved", date: "۱۴۰۳/۰۸/۰۵" },
    { id: 51, name: "دانشگاه علوم پزشکی البرز", province: "البرز", status: "approved", date: "۱۴۰۳/۰۸/۰۱" },
    { id: 52, name: "دانشگاه علوم پزشکی کرمانشاه", province: "کرمانشاه", status: "approved", date: "۱۴۰۳/۰۷/۲۸" },
    { id: 53, name: "دانشگاه علوم پزشکی همدان", province: "همدان", status: "approved", date: "۱۴۰۳/۰۷/۲۵" },
    { id: 54, name: "دانشگاه علوم پزشکی قزوین", province: "قزوین", status: "approved", date: "۱۴۰۳/۰۷/۲۰" },
    { id: 55, name: "دانشگاه علوم پزشکی گلستان", province: "گلستان", status: "approved", date: "۱۴۰۳/۰۷/۱۵" },
    { id: 56, name: "دانشگاه علوم پزشکی لرستان", province: "لرستان", status: "approved", date: "۱۴۰۳/۰۷/۱۰" },
    { id: 57, name: "دانشگاه علوم پزشکی اراک", province: "مرکزی", status: "approved", date: "۱۴۰۳/۰۷/۰۵" },
    { id: 58, name: "دانشگاه علوم پزشکی هرمزگان", province: "هرمزگان", status: "approved", date: "۱۴۰۳/۰۷/۰۱" },
    { id: 59, name: "دانشگاه علوم پزشکی زنجان", province: "زنجان", status: "approved", date: "۱۴۰۳/۰۶/۲۸" },
    { id: 60, name: "دانشگاه علوم پزشکی شهرکرد", province: "چهارمحال و بختیاری", status: "approved", date: "۱۴۰۳/۰۶/۲۵" },
    { id: 61, name: "دانشگاه علوم پزشکی ایلام", province: "ایلام", status: "approved", date: "۱۴۰۳/۰۶/۲۰" },
    { id: 62, name: "دانشگاه علوم پزشکی بجنورد", province: "خراسان شمالی", status: "approved", date: "۱۴۰۳/۰۶/۱۵" },
    { id: 63, name: "دانشگاه علوم پزشکی یاسوج", province: "کهگیلویه و بویراحمد", status: "approved", date: "۱۴۰۳/۰۶/۱۰" },
    { id: 64, name: "دانشگاه علوم پزشکی بیرجند", province: "خراسان جنوبی", status: "approved", date: "۱۴۰۳/۰۶/۰۵" },
    { id: 65, name: "دانشگاه علوم پزشکی سمنان", province: "سمنان", status: "approved", date: "۱۴۰۳/۰۶/۰۱" },
    { id: 66, name: "دانشگاه علوم پزشکی اردبیل", province: "اردبیل", status: "approved", date: "۱۴۰۳/۰۵/۲۸" },
    { id: 67, name: "دانشگاه علوم پزشکی جندی شاپور", province: "خوزستان", status: "approved", date: "۱۴۰۳/۰۵/۲۵" },
    { id: 68, name: "دانشگاه صنعتی جندی شاپور", province: "خوزستان", status: "approved", date: "۱۴۰۳/۰۵/۲۰" },
    { id: 69, name: "دانشگاه علوم پزشکی مشهد", province: "خراسان رضوی", status: "approved", date: "۱۴۰۳/۰۵/۱۵" },
    { id: 70, name: "دانشگاه صنعتی مشهد", province: "خراسان رضوی", status: "approved", date: "۱۴۰۳/۰۵/۱۰" },
    { id: 71, name: "دانشگاه علوم پزشکی تبریز", province: "آذربایجان شرقی", status: "approved", date: "۱۴۰۳/۰۵/۰۵" },
    { id: 72, name: "دانشگاه علوم پزشکی اصفهان", province: "اصفهان", status: "approved", date: "۱۴۰۳/۰۵/۰۱" },
    { id: 73, name: "دانشگاه هنر اصفهان", province: "اصفهان", status: "approved", date: "۱۴۰۳/۰۴/۲۸" },
    { id: 74, name: "دانشگاه صنعتی شیراز", province: "فارس", status: "approved", date: "۱۴۰۳/۰۴/۲۵" },
    { id: 75, name: "دانشگاه علوم پزشکی شیراز", province: "فارس", status: "approved", date: "۱۴۰۳/۰۴/۲۰" },
    { id: 76, name: "دانشگاه علوم پزشکی کرمان", province: "کرمان", status: "approved", date: "۱۴۰۳/۰۴/۱۵" },
    { id: 77, name: "دانشگاه شهید باهنر کرمان", province: "کرمان", status: "approved", date: "۱۴۰۳/۰۴/۱۰" },
    { id: 78, name: "دانشگاه علوم پزشکی ارومیه", province: "آذربایجان غربی", status: "approved", date: "۱۴۰۳/۰۴/۰۵" },
    { id: 79, name: "دانشگاه علوم پزشکی زاهدان", province: "سیستان و بلوچستان", status: "approved", date: "۱۴۰۳/۰۴/۰۱" },
    { id: 80, name: "دانشگاه علوم پزشکی قم", province: "قم", status: "approved", date: "۱۴۰۳/۰۳/۲۸" },
    { id: 81, name: "دانشگاه علوم پزشکی کردستان", province: "کردستان", status: "approved", date: "۱۴۰۳/۰۳/۲۵" },
    { id: 82, name: "دانشگاه علوم پزشکی یزد", province: "یزد", status: "approved", date: "۱۴۰۳/۰۳/۲۰" },
    { id: 83, name: "دانشگاه علوم پزشکی بوشهر", province: "بوشهر", status: "approved", date: "۱۴۰۳/۰۳/۱۵" },
    { id: 84, name: "دانشگاه علوم پزشکی گیلان", province: "گیلان", status: "approved", date: "۱۴۰۳/۰۳/۱۰" },
    { id: 85, name: "دانشگاه علوم پزشکی مازندران", province: "مازندران", status: "approved", date: "۱۴۰۳/۰۳/۰۵" },
    { id: 86, name: "دانشگاه علوم پزشکی جیرفت", province: "کرمان", status: "approved", date: "۱۴۰۳/۰۳/۰۱" },
    { id: 87, name: "دانشگاه آزاد اسلامی مرودشت", province: "فارس", status: "approved", date: "۱۴۰۳/۰۲/۲۸" },
    { id: 88, name: "دانشگاه علوم پزشکی رفسنجان", province: "کرمان", status: "approved", date: "۱۴۰۳/۰۲/۲۵" },
    { id: 89, name: "دانشگاه صنعتی قم", province: "قم", status: "approved", date: "۱۴۰۳/۰۲/۲۰" },
    { id: 90, name: "دانشگاه علوم پزشکی سبزوار", province: "خراسان رضوی", status: "approved", date: "۱۴۰۳/۰۲/۱۵" },
    { id: 91, name: "دانشگاه علوم پزشکی شاهرود", province: "سمنان", status: "approved", date: "۱۴۰۳/۰۲/۱۰" },
    { id: 92, name: "دانشگاه علوم پزشکی دامغان", province: "سمنان", status: "approved", date: "۱۴۰۳/۰۲/۰۵" },
    { id: 93, name: "دانشگاه علوم پزشکی خوی", province: "آذربایجان غربی", status: "approved", date: "۱۴۰۳/۰۲/۰۱" },
    { id: 94, name: "دانشگاه علوم پزشکی سقز", province: "کردستان", status: "approved", date: "۱۴۰۳/۰۱/۲۸" },
    { id: 95, name: "دانشگاه علوم پزشکی میبد", province: "یزد", status: "approved", date: "۱۴۰۳/۰۱/۲۵" },
    { id: 96, name: "دانشگاه علوم پزشکی تربت حیدریه", province: "خراسان رضوی", status: "approved", date: "۱۴۰۳/۰۱/۲۰" },
    { id: 97, name: "دانشگاه علوم پزشکی بهبهان", province: "خوزستان", status: "approved", date: "۱۴۰۳/۰۱/۱۵" },
    { id: 98, name: "دانشگاه علوم پزشکی گچساران", province: "کهگیلویه و بویراحمد", status: "approved", date: "۱۴۰۳/۰۱/۱۰" },
    { id: 99, name: "دانشگاه علوم پزشکی دزفول", province: "خوزستان", status: "approved", date: "۱۴۰۳/۰۱/۰۵" },
    { id: 100, name: "دانشگاه علوم پزشکی آبادان", province: "خوزستان", status: "approved", date: "۱۴۰۳/۰۱/۰۱" }
];

let messages = [
    { from: "admin_super", text: "لطفاً درخواست‌های جدید را بررسی کنید", time: "۱۰:۳۰", read: false, isMine: false },
    { from: "modir_sport", text: "بخش کامنت ها نیاز به بررسی ادمین کل داره", time: "۰۹:۱۵", read: false, isMine: false },
    { from: "شما", text: "در درسترس قرار گرفت", time: "دیروز", read: true, isMine: true },
    { from: "news_admin", text: "سایت برای کاربرا از دسترس خارج شده", time: "دیروز", read: true, isMine: false }
];
//تشکیل تقویم
function gregorianToJalali(gy, gm, gd) {
    var g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var jy = (gy <= 1600) ? 0 : 979;
    gy -= (gy <= 1600) ? 621 : 1600;
    var days = (365 * gy) + (Math.floor((gy + 3) / 4)) - (Math.floor((gy + 99) / 100)) + (Math.floor((gy + 399) / 400)) - 80 + gd + g_d_m[gm - 1];
    if (gm > 2 && ((gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0)) days++;
    jy += 33 * Math.floor(days / 12053);
    days %= 12053;
    jy += 4 * Math.floor(days / 1461);
    days %= 1461;
    if (days > 365) {
        jy += Math.floor((days - 1) / 365);
        days = (days - 1) % 365;
    }
    var jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
    var jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
    return [jy, jm, jd];
}

function jalaliToGregorian(jy, jm, jd) {
    jy += 1595;
    var days = -355668 + (365 * jy) + (Math.floor(jy / 33) * 8) + (Math.floor(((jy % 33) + 3) / 4)) + jd;
    if (jm < 7) {
        days += (jm - 1) * 31;
    } else {
        days += 186 + (jm - 7) * 30;
    }
    var gy = 400 * Math.floor(days / 146097);
    days %= 146097;
    if (days > 36524) {
        days--;
        gy += 100 * Math.floor(days / 36524);
        days %= 36524;
        if (days >= 365) days++;
    }
    gy += 4 * Math.floor(days / 1461);
    days %= 1461;
    if (days > 365) {
        gy += Math.floor((days - 1) / 365);
        days = (days - 1) % 365;
    }
    var gd = days + 1;
    var g_m_d = [0, 31, (gy % 4 === 0 && gy % 100 !== 0) || gy % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var gm = 1;
    for (gm = 1; gm <= 12; gm++) {
        if (gd <= g_m_d[gm]) break;
        gd -= g_m_d[gm];
    }
    return [gy, gm, gd];
}

let currentYear, currentMonth;
let todayYear, todayMonth, todayDay;
let events = JSON.parse(localStorage.getItem('calendarEvents') || '{}');

function saveEvents() {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
}

function getFirstDayOfMonth(year, month) {
    let g = jalaliToGregorian(year, month, 1);
    let date = new Date(g[0], g[1] - 1, g[2]);
    let dayOfWeek = date.getDay();
    let iranDay = (dayOfWeek + 1) % 7;
    return iranDay;
}

function getMonthDays(year, month) {
    if (month <= 6) return 31;
    if (month <= 11) return 30;
    let g = jalaliToGregorian(year, 12, 1);
    let gNext = jalaliToGregorian(year + 1, 1, 1);
    let daysDiff = Math.round((new Date(gNext[0], gNext[1] - 1, gNext[2]) - new Date(g[0], g[1] - 1, g[2])) / 86400000);
    return daysDiff;
}

function renderCalendar() {
    let firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    let daysInMonth = getMonthDays(currentYear, currentMonth);
    let monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    
    document.getElementById('monthYear').innerHTML = monthNames[currentMonth - 1] + ' ' + currentYear;
    
    let calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    let weekdays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
    for (let w of weekdays) {
        let wd = document.createElement('div');
        wd.className = 'cal-weekday';
        wd.textContent = w;
        calendar.appendChild(wd);
    }
    
    for (let i = 0; i < firstDay; i++) {
        let empty = document.createElement('div');
        empty.className = 'calendar-day empty-day';
        calendar.appendChild(empty);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        let key = currentYear + '-' + currentMonth + '-' + day;
        
        if (events[key]) dayDiv.classList.add('has-event');
        if (currentYear === todayYear && currentMonth === todayMonth && day === todayDay) {
            dayDiv.classList.add('today');
        }
        
        if (currentYear < todayYear) {
            dayDiv.classList.add('past');
        } else if (currentYear === todayYear && currentMonth < todayMonth) {
            dayDiv.classList.add('past');
        } else if (currentYear === todayYear && currentMonth === todayMonth && day < todayDay) {
            dayDiv.classList.add('past');
        }
        
        let dayNum = document.createElement('div');
        dayNum.className = 'day-number';
        dayNum.textContent = day;
        dayDiv.appendChild(dayNum);
        
        if (events[key]) {
            let eventSpan = document.createElement('div');
            eventSpan.className = 'event-title';
            eventSpan.textContent = events[key].length > 10 ? events[key].substring(0, 8) + '...' : events[key];
            dayDiv.appendChild(eventSpan);
        }
        
        dayDiv.onclick = (function(y, m, d) {
            return function() { openModal(y, m, d); };
        })(currentYear, currentMonth, day);
        
        calendar.appendChild(dayDiv);
    }
}

let selectedYear, selectedMonth, selectedDay;

function openModal(year, month, day) {
    if (year < todayYear) {
        alert("امکان ثبت برنامه برای روزهای گذشته وجود ندارد!");
        return;
    }
    if (year === todayYear && month < todayMonth) {
        alert("امکان ثبت برنامه برای روزهای گذشته وجود ندارد!");
        return;
    }
    if (year === todayYear && month === todayMonth && day < todayDay) {
        alert("امکان ثبت برنامه برای روزهای گذشته وجود ندارد!");
        return;
    }
    
    selectedYear = year;
    selectedMonth = month;
    selectedDay = day;
    let monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    
    let gDate = jalaliToGregorian(year, month, day);
    let gregorianStr = gDate[0] + '/' + gDate[1] + '/' + gDate[2];
    
    let hijriDate = getHijriDate(year, month, day);
    
    document.getElementById('modalDateTitle').innerHTML = monthNames[month - 1] + ' ' + day + ' ' + year;
    document.getElementById('modalSolar').innerHTML = day + ' ' + monthNames[month - 1] + ' ' + year + ' (شمسی)';
    document.getElementById('modalGregorian').innerHTML = gregorianStr + ' (میلادی)';
    document.getElementById('modalHijri').innerHTML = hijriDate + ' (قمری)';
    
    let key = year + '-' + month + '-' + day;
    let eventText = events[key] || '';
    document.getElementById('modalEvent').innerHTML = eventText || 'بدون رویداد';
    document.getElementById('eventInput').value = eventText;
    
    document.getElementById('dateModal').classList.add('show');
}

function getHijriDate(year, month, day) {
    let hijriDates = {
        "1404-1-1": "۱۴۴۶/۰۷/۰۱",
        "1404-1-13": "۱۴۴۶/۰۷/۱۳",
        "1404-2-4": "۱۴۴۶/۰۸/۰۴",
        "1404-3-14": "۱۴۴۶/۰۹/۱۴",
        "1404-3-20": "۱۴۴۶/۰۹/۲۰",
        "1404-3-25": "۱۴۴۶/۰۹/۲۵"
    };
    let key = year + '-' + month + '-' + day;
    if (hijriDates[key]) return hijriDates[key];
    let hijriDay = (day + 20) % 30 + 1;
    let hijriMonth = (month + 2) % 12 + 1;
    return "۱۴۴۶/" + String(hijriMonth).padStart(2, '0') + "/" + String(hijriDay).padStart(2, '0');
}

function closeDateModal() {
    document.getElementById('dateModal').classList.remove('show');
}

function saveEvent() {
    let title = document.getElementById('eventInput').value.trim();
    let key = selectedYear + '-' + selectedMonth + '-' + selectedDay;
    
    if (title) {
        events[key] = title;
    } else {
        delete events[key];
    }
    saveEvents();
    renderCalendar();
    closeDateModal();
}

function deleteEvent() {
    let key = selectedYear + '-' + selectedMonth + '-' + selectedDay;
    if (events[key]) {
        if (confirm('آیا از حذف این رویداد مطمئن هستید؟')) {
            delete events[key];
            saveEvents();
            renderCalendar();
            closeDateModal();
        }
    } else {
        alert('هیچ رویدادی برای این روز ثبت نشده است');
    }
}

function changeMonth(delta) {
    let newMonth = currentMonth + delta;
    let newYear = currentYear;
    if (newMonth < 1) { newMonth = 12; newYear--; }
    if (newMonth > 12) { newMonth = 1; newYear++; }
    currentYear = newYear;
    currentMonth = newMonth;
    renderCalendar();
}

function updateStats() {
    let universities = JSON.parse(localStorage.getItem('allUniversities') || '[]');
    let totalUni = universities.length || 100;
    
    let todayVisitors = Math.floor(Math.random() * 50 + 20);
    let weekVisitors = Math.floor(Math.random() * 300 + 100);
    let monthVisitors = Math.floor(Math.random() * 1200 + 300);
    let onlineUsers = Math.floor(Math.random() * 15 + 3);
    
    document.getElementById('totalUniversities').innerText = totalUni;
    document.getElementById('todayVisitors').innerText = todayVisitors.toLocaleString();
    document.getElementById('weekVisitors').innerText = weekVisitors.toLocaleString();
    document.getElementById('monthVisitors').innerText = monthVisitors.toLocaleString();
    document.getElementById('onlineUsers').innerText = onlineUsers;
}

function renderMessages() {
    let container = document.getElementById('messageList');
    let unreadCount = messages.filter(m => !m.read).length;
    document.getElementById('unreadCount').innerHTML = unreadCount + ' پیام جدید';
    
    let html = '';
    for (let i = messages.length - 1; i >= 0; i--) {
        let msg = messages[i];
        let unreadClass = msg.read ? '' : 'unread';
        let alignClass = msg.isMine ? 'message-mine' : 'message-other';
        html += `
            <div class="message-item ${unreadClass} ${alignClass}" onclick="markAsRead(this, ${i})">
                <div class="message-avatar">
                    <svg width="18" height="18" fill="#2d6a3f" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div class="message-content">
                    <div class="message-sender">${msg.from}</div>
                    <div class="message-text">${msg.text}</div>
                    <div class="message-time">${msg.time}</div>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
    
    container.scrollTop = container.scrollHeight;
}

function markAsRead(element, index) {
    let actualIndex = messages.length - 1 - index;
    if (messages[actualIndex]) {
        messages[actualIndex].read = true;
    }
    element.classList.remove('unread');
    let unreadCount = messages.filter(m => !m.read).length;
    document.getElementById('unreadCount').innerHTML = unreadCount + ' پیام جدید';
}

function sendMessage() {
    let text = document.getElementById('messageInput').value.trim();
    
    if (!text) {
        alert('لطفاً متن پیام را بنویسید');
        return;
    }
    
    messages.push({
        from: 'شما',
        text: text,
        time: 'لحظاتی پیش',
        read: false,
        isMine: true
    });
    
    renderMessages();
    document.getElementById('messageInput').value = '';
    let container = document.getElementById('messageList');
    container.scrollTop = container.scrollHeight;
}

function logout() {
    if (confirm('آیا از خروج از پنل مطمئن هستید؟')) {
        window.location.href = 'main_index.html';
    }
}

let now = new Date();
let gy = now.getFullYear();
let gm = now.getMonth() + 1;
let gd = now.getDate();
let jalali = gregorianToJalali(gy, gm, gd);
todayYear = jalali[0];
todayMonth = jalali[1];
todayDay = jalali[2];
currentYear = todayYear;
currentMonth = todayMonth;

let menuToggle = document.getElementById('menuToggleBtn');
let sidebar = document.getElementById('sidebarMenu');
let overlay = document.getElementById('sidebarOverlay');

if (menuToggle) {
    menuToggle.onclick = function() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

if (overlay) {
    overlay.onclick = function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
});

let profileBtn = document.getElementById('profileBtn');
let profileDropdown = document.getElementById('profileDropdown');

if (profileBtn) {
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });
}

document.addEventListener('click', function(event) {
    if (profileDropdown && profileDropdown.classList.contains('show')) {
        if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.remove('show');
        }
    }
});

let userName = localStorage.getItem('adminName') || 'نام ادمین';
let dropdownName = document.getElementById('dropdownUserName');
if (dropdownName) {
    dropdownName.textContent = userName;
}

function updateHeaderAvatar() {
    let savedAvatar = localStorage.getItem('adminAvatar');
    let headerImg = document.getElementById('headerAvatarImg');
    let headerDefault = document.getElementById('headerDefaultAvatar');
    let dropdownImg = document.getElementById('dropdownAvatarImg');
    let dropdownDefault = document.getElementById('dropdownDefaultAvatar');
    
    if (savedAvatar && savedAvatar !== '') {
        if (headerImg) {
            headerImg.src = savedAvatar;
            headerImg.style.display = 'block';
            headerDefault.style.display = 'none';
        }
        if (dropdownImg) {
            dropdownImg.src = savedAvatar;
            dropdownImg.style.display = 'block';
            dropdownDefault.style.display = 'none';
        }
    } else {
        if (headerImg) {
            headerImg.style.display = 'none';
            headerDefault.style.display = 'block';
        }
        if (dropdownImg) {
            dropdownImg.style.display = 'none';
            dropdownDefault.style.display = 'block';
        }
    }
}

updateHeaderAvatar();

window.addEventListener('storage', function(e) {
    if (e.key === 'adminAvatar') {
        updateHeaderAvatar();
    }
});

document.getElementById('todayDate').innerHTML = todayYear + '/' + todayMonth + '/' + todayDay;

renderCalendar();
updateStats();
renderMessages();

//پیام ورود اولیه
document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem('justLoggedIn') === 'true') {
        sessionStorage.removeItem('justLoggedIn');
        
        var notification = document.createElement('div');
        notification.setAttribute('style', 'position: fixed; bottom: 30px; right: 30px; background: #1a472a; color: #ffefc0; padding: 15px 25px; border-radius: 50px; font-weight: bold; z-index: 10000; box-shadow: 0 5px 20px rgba(0,0,0,0.2); font-family: Vazir FD-WOL, B Nazanin, Tahoma, sans-serif;');
        notification.innerHTML = '👋 کاربر عزیز به پنل مدیریت خوش آمدید';
        document.body.appendChild(notification);
        
        setTimeout(function() {
            notification.remove();
        }, 3000);
    }
});
