const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

function toggleMenu() {
navMenu.classList.toggle('active-mobile');
}

function closeMenu() {
navMenu.classList.remove('active-mobile');
}

if (hamburger) {
hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});
}

document.addEventListener('click', function(event) {
if (navMenu.classList.contains('active-mobile') && 
    !navMenu.contains(event.target) && 
    !hamburger.contains(event.target)) {
    closeMenu();
}
});

const allLinks = document.querySelectorAll('.menu-item');
allLinks.forEach(link => {
link.addEventListener('click', function(e) {
    if (window.innerWidth <= 991) {
        closeMenu();
    }
    allLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    if (this.getAttribute('href') === '#') {
        e.preventDefault();
        alert(this.innerText.trim());
    }
});
});

(function() {
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

let pickerCurrentYear, pickerCurrentMonth;
let pickerTodayYear, pickerTodayMonth, pickerTodayDay;
let selectedPickerYear = null, selectedPickerMonth = null, selectedPickerDay = null;

function getFirstDayOfMonth(year, month) {
    let g = jalaliToGregorian(year, month, 1);
    let date = new Date(g[0], g[1] - 1, g[2]);
    let dayOfWeek = date.getDay();
    return (dayOfWeek + 1) % 7;
}

function getMonthDays(year, month) {
    if (month <= 6) return 31;
    if (month <= 11) return 30;
    let g = jalaliToGregorian(year, 12, 1);
    let gNext = jalaliToGregorian(year + 1, 1, 1);
    return Math.round((new Date(gNext[0], gNext[1] - 1, gNext[2]) - new Date(g[0], g[1] - 1, g[2])) / 86400000);
}

function getWeekDayName(year, month, day) {
    let g = jalaliToGregorian(year, month, day);
    let date = new Date(g[0], g[1] - 1, g[2]);
    let weekDays = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];
    let iranDay = (date.getDay() + 1) % 7;
    return weekDays[iranDay];
}

function renderCalendar() {
    let firstDay = getFirstDayOfMonth(pickerCurrentYear, pickerCurrentMonth);
    let daysInMonth = getMonthDays(pickerCurrentYear, pickerCurrentMonth);
    let monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
    
    document.getElementById('pickerMonthYear').innerHTML = `${monthNames[pickerCurrentMonth - 1]} ${pickerCurrentYear}`;
    
    let calendar = document.getElementById('pickerCalendar');
    calendar.innerHTML = '';
    
    for (let i = 0; i < firstDay; i++) {
        let empty = document.createElement('div');
        empty.className = 'calendar-day empty-day';
        calendar.appendChild(empty);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        
        let isPast = false;
        if (pickerCurrentYear < pickerTodayYear) isPast = true;
        else if (pickerCurrentYear === pickerTodayYear && pickerCurrentMonth < pickerTodayMonth) isPast = true;
        else if (pickerCurrentYear === pickerTodayYear && pickerCurrentMonth === pickerTodayMonth && day < pickerTodayDay) isPast = true;
        
        if (isPast) dayDiv.classList.add('past-day');
        if (pickerCurrentYear === pickerTodayYear && pickerCurrentMonth === pickerTodayMonth && day === pickerTodayDay) dayDiv.classList.add('today');
        if (selectedPickerYear === pickerCurrentYear && selectedPickerMonth === pickerCurrentMonth && selectedPickerDay === day) dayDiv.classList.add('selected-day');
        
        dayDiv.textContent = day;
        
        if (!isPast) {
            dayDiv.onclick = (function(y, m, d) {
                return function() { selectDate(y, m, d); };
            })(pickerCurrentYear, pickerCurrentMonth, day);
        }
        
        calendar.appendChild(dayDiv);
    }
}

function selectDate(year, month, day) {
    selectedPickerYear = year;
    selectedPickerMonth = month;
    selectedPickerDay = day;
    
    let formattedDate = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    document.getElementById('dateInput').value = formattedDate;
    
    let weekDayName = getWeekDayName(year, month, day);
    let weekDaySelect = document.getElementById('weekDay');
    for(let i = 0; i < weekDaySelect.options.length; i++) {
        if(weekDaySelect.options[i].value === weekDayName) {
            weekDaySelect.value = weekDayName;
            break;
        }
    }
    
    closePicker();
    checkFormValidity();
}

function changeMonth(delta) {
    let newMonth = pickerCurrentMonth + delta;
    let newYear = pickerCurrentYear;
    if (newMonth < 1) { newMonth = 12; newYear--; }
    if (newMonth > 12) { newMonth = 1; newYear++; }
    pickerCurrentYear = newYear;
    pickerCurrentMonth = newMonth;
    renderCalendar();
}

function openPicker() {
    let picker = document.getElementById('calendarPicker');
    if (picker.style.display === 'block') {
        picker.style.display = 'none';
        return;
    }
    
    let currentDate = document.getElementById('dateInput').value;
    if (currentDate && currentDate.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
        let parts = currentDate.split('/');
        pickerCurrentYear = parseInt(parts[0]);
        pickerCurrentMonth = parseInt(parts[1]);
        selectedPickerYear = pickerCurrentYear;
        selectedPickerMonth = pickerCurrentMonth;
        selectedPickerDay = parseInt(parts[2]);
    } else {
        pickerCurrentYear = pickerTodayYear;
        pickerCurrentMonth = pickerTodayMonth;
    }
    
    renderCalendar();
    picker.style.display = 'block';
}

function closePicker() {
    document.getElementById('calendarPicker').style.display = 'none';
}

function checkFormValidity() {
    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('dateInput').value.trim();
    const day = document.getElementById('weekDay').value;
    const time = document.getElementById('time').value;
    const facilities = document.getElementById('facilities').value;
    const booking = document.getElementById('bookingType').value;
    const uni = document.getElementById('university').value.trim();
    const act = document.getElementById('activity').value;
    
    const submitBtn = document.querySelector('.submit');
    
    if (name && phone && date && day && time && facilities && booking && uni && act) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function submitForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('dateInput').value.trim();
    const day = document.getElementById('weekDay').value;
    const time = document.getElementById('time').value;
    const facilities = document.getElementById('facilities').value;
    const booking = document.getElementById('bookingType').value;
    const uni = document.getElementById('university').value.trim();
    const act = document.getElementById('activity').value;
    
    if (!name || !phone || !date || !day || !time || !facilities || !booking || !uni || !act) {
        return;
    }
    
    if (!/^09[0-9]{9}$/.test(phone)) {
        alert('شماره تلفن باید ۱۱ رقم و با 09 شروع شود');
        return;
    }
    
    alert('فرم با موفقیت ثبت شد!');
}

let now = new Date();
let jalali = gregorianToJalali(now.getFullYear(), now.getMonth() + 1, now.getDate());
pickerTodayYear = jalali[0];
pickerTodayMonth = jalali[1];
pickerTodayDay = jalali[2];

document.addEventListener('DOMContentLoaded', function() {
    let calendarIcon = document.getElementById('calendarIconBtn');
    let dateInput = document.getElementById('dateInput');
    let prevBtn = document.getElementById('pickerPrevBtn');
    let nextBtn = document.getElementById('pickerNextBtn');
    let submitBtn = document.querySelector('.submit');
    
    if (submitBtn) submitBtn.disabled = true;
    
    if (calendarIcon) {
        calendarIcon.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            openPicker();
        };
    }
    
    if (dateInput) {
        dateInput.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            openPicker();
        };
    }
    
    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            changeMonth(-1);
        };
    }
    
    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            changeMonth(1);
        };
    }
    
    document.addEventListener('click', function(e) {
        let picker = document.getElementById('calendarPicker');
        let icon = document.getElementById('calendarIconBtn');
        let input = document.getElementById('dateInput');
        if (picker && picker.style.display === 'block' && !picker.contains(e.target) && e.target !== icon && e.target !== input) {
            closePicker();
        }
    });
    
    const inputs = ['fullName', 'phone', 'weekDay', 'time', 'facilities', 'bookingType', 'university', 'activity'];
    inputs.forEach(function(id) {
        let el = document.getElementById(id);
        if(el) {
            el.addEventListener('input', function() { checkFormValidity(); });
            el.addEventListener('change', function() { checkFormValidity(); });
        }
    });
    
    if (submitBtn) {
        submitBtn.onclick = submitForm;
    }
});
})();

