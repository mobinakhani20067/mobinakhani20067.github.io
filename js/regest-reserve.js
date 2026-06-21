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

document.addEventListener('DOMContentLoaded', function() {
    let dailyLocker = document.getElementById('dailyLockerNum');
    let longLocker = document.getElementById('longLockerNum');
    if (dailyLocker) dailyLocker.value = '45';
    if (longLocker) longLocker.value = '45';
    
    let dailyIcon = document.getElementById('dailyCalendarBtn');
    let dailyInput = document.getElementById('dailyDate');
    let dailyPicker = document.getElementById('dailyCalendarPicker');
    
    let startIcon = document.getElementById('startCalendarBtn');
    let startInput = document.getElementById('startDate');
    let startPicker = document.getElementById('startCalendarPicker');
    
    if (!dailyPicker || !startPicker) return;
    
    let dailyCurrentYear, dailyCurrentMonth;
    let dailyTodayYear, dailyTodayMonth, dailyTodayDay;
    let dailySelectedYear = null, dailySelectedMonth = null, dailySelectedDay = null;
    
    let startCurrentYear, startCurrentMonth;
    let startTodayYear, startTodayMonth, startTodayDay;
    let startSelectedYear = null, startSelectedMonth = null, startSelectedDay = null;
    
    let now = new Date();
    let jalali = gregorianToJalali(now.getFullYear(), now.getMonth() + 1, now.getDate());
    
    function getFirstDayOfMonth(year, month) {
        let g = jalaliToGregorian(year, month, 1);
        let date = new Date(g[0], g[1] - 1, g[2]);
        return (date.getDay() + 1) % 7;
    }
    
    function getMonthDays(year, month) {
        if (month <= 6) return 31;
        if (month <= 11) return 30;
        let g = jalaliToGregorian(year, 12, 1);
        let gNext = jalaliToGregorian(year + 1, 1, 1);
        return Math.round((new Date(gNext[0], gNext[1] - 1, gNext[2]) - new Date(g[0], g[1] - 1, g[2])) / 86400000);
    }
    
    function renderDailyCalendar() {
        let firstDay = getFirstDayOfMonth(dailyCurrentYear, dailyCurrentMonth);
        let daysInMonth = getMonthDays(dailyCurrentYear, dailyCurrentMonth);
        let monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        
        let monthYearSpan = dailyPicker.querySelector('.pickerMonthYear');
        if (monthYearSpan) monthYearSpan.innerHTML = `${monthNames[dailyCurrentMonth - 1]} ${dailyCurrentYear}`;
        
        let calendarDiv = dailyPicker.querySelector('.calendar-days');
        if (!calendarDiv) return;
        calendarDiv.innerHTML = '';
        
        for (let i = 0; i < firstDay; i++) {
            let empty = document.createElement('div');
            empty.className = 'calendar-day empty-day';
            calendarDiv.appendChild(empty);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            let dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            
            let isPast = false;
            if (dailyCurrentYear < dailyTodayYear) isPast = true;
            else if (dailyCurrentYear === dailyTodayYear && dailyCurrentMonth < dailyTodayMonth) isPast = true;
            else if (dailyCurrentYear === dailyTodayYear && dailyCurrentMonth === dailyTodayMonth && day < dailyTodayDay) isPast = true;
            
            if (isPast) dayDiv.classList.add('past-day');
            if (dailyCurrentYear === dailyTodayYear && dailyCurrentMonth === dailyTodayMonth && day === dailyTodayDay) dayDiv.classList.add('today');
            if (dailySelectedYear === dailyCurrentYear && dailySelectedMonth === dailyCurrentMonth && dailySelectedDay === day) dayDiv.classList.add('selected-day');
            
            dayDiv.textContent = day;
            
            if (!isPast) {
                dayDiv.onclick = (function(y, m, d) {
                    return function() {
                        dailySelectedYear = y;
                        dailySelectedMonth = m;
                        dailySelectedDay = d;
                        let formattedDate = `${y}/${m.toString().padStart(2, '0')}/${d.toString().padStart(2, '0')}`;
                        if (dailyInput) dailyInput.value = formattedDate;
                        if (dailyPicker) dailyPicker.style.display = 'none';
                    };
                })(dailyCurrentYear, dailyCurrentMonth, day);
            }
            calendarDiv.appendChild(dayDiv);
        }
    }
    
    function renderStartCalendar() {
        let firstDay = getFirstDayOfMonth(startCurrentYear, startCurrentMonth);
        let daysInMonth = getMonthDays(startCurrentYear, startCurrentMonth);
        let monthNames = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        
        let monthYearSpan = startPicker.querySelector('.pickerMonthYear');
        if (monthYearSpan) monthYearSpan.innerHTML = `${monthNames[startCurrentMonth - 1]} ${startCurrentYear}`;
        
        let calendarDiv = startPicker.querySelector('.calendar-days');
        if (!calendarDiv) return;
        calendarDiv.innerHTML = '';
        
        for (let i = 0; i < firstDay; i++) {
            let empty = document.createElement('div');
            empty.className = 'calendar-day empty-day';
            calendarDiv.appendChild(empty);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            let dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            
            let isPast = false;
            if (startCurrentYear < startTodayYear) isPast = true;
            else if (startCurrentYear === startTodayYear && startCurrentMonth < startTodayMonth) isPast = true;
            else if (startCurrentYear === startTodayYear && startCurrentMonth === startTodayMonth && day < startTodayDay) isPast = true;
            
            if (isPast) dayDiv.classList.add('past-day');
            if (startCurrentYear === startTodayYear && startCurrentMonth === startTodayMonth && day === startTodayDay) dayDiv.classList.add('today');
            if (startSelectedYear === startCurrentYear && startSelectedMonth === startCurrentMonth && startSelectedDay === day) dayDiv.classList.add('selected-day');
            
            dayDiv.textContent = day;
            
            if (!isPast) {
                dayDiv.onclick = (function(y, m, d) {
                    return function() {
                        startSelectedYear = y;
                        startSelectedMonth = m;
                        startSelectedDay = d;
                        let formattedDate = `${y}/${m.toString().padStart(2, '0')}/${d.toString().padStart(2, '0')}`;
                        if (startInput) startInput.value = formattedDate;
                        if (startPicker) startPicker.style.display = 'none';
                        calculateTotalAmount();
                    };
                })(startCurrentYear, startCurrentMonth, day);
            }
            calendarDiv.appendChild(dayDiv);
        }
    }
    
    function calculateTotalAmount() {
        let durationInput = document.getElementById('durationDays');
        let totalAmountSpan = document.getElementById('totalAmount');
        if (!durationInput || !totalAmountSpan) return;
        
        let duration = parseInt(durationInput.value);
        if (isNaN(duration) || duration < 2 || duration > 100) {
            totalAmountSpan.value = '';
            return;
        }
        let total = duration * 10000;
        totalAmountSpan.value = total.toLocaleString() + ' تومان';
    }
    
    function changeDailyMonth(delta) {
        let newMonth = dailyCurrentMonth + delta;
        let newYear = dailyCurrentYear;
        if (newMonth < 1) { newMonth = 12; newYear--; }
        if (newMonth > 12) { newMonth = 1; newYear++; }
        dailyCurrentYear = newYear;
        dailyCurrentMonth = newMonth;
        renderDailyCalendar();
    }
    
    function changeStartMonth(delta) {
        let newMonth = startCurrentMonth + delta;
        let newYear = startCurrentYear;
        if (newMonth < 1) { newMonth = 12; newYear--; }
        if (newMonth > 12) { newMonth = 1; newYear++; }
        startCurrentYear = newYear;
        startCurrentMonth = newMonth;
        renderStartCalendar();
    }
    
    dailyTodayYear = jalali[0];
    dailyTodayMonth = jalali[1];
    dailyTodayDay = jalali[2];
    dailyCurrentYear = dailyTodayYear;
    dailyCurrentMonth = dailyTodayMonth;
    
    startTodayYear = jalali[0];
    startTodayMonth = jalali[1];
    startTodayDay = jalali[2];
    startCurrentYear = startTodayYear;
    startCurrentMonth = startTodayMonth;
    
    if (dailyIcon) {
        dailyIcon.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (dailyPicker.style.display === 'block') {
                dailyPicker.style.display = 'none';
            } else {
                dailyCurrentYear = dailyTodayYear;
                dailyCurrentMonth = dailyTodayMonth;
                renderDailyCalendar();
                dailyPicker.style.display = 'block';
            }
        };
    }
    
    if (dailyInput) {
        dailyInput.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (dailyPicker.style.display === 'block') {
                dailyPicker.style.display = 'none';
            } else {
                dailyCurrentYear = dailyTodayYear;
                dailyCurrentMonth = dailyTodayMonth;
                renderDailyCalendar();
                dailyPicker.style.display = 'block';
            }
        };
    }
    
    let dailyPrevBtn = dailyPicker.querySelector('.pickerPrevBtn');
    let dailyNextBtn = dailyPicker.querySelector('.pickerNextBtn');
    
    if (dailyPrevBtn) {
        dailyPrevBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            changeDailyMonth(-1);
        };
    }
    
    if (dailyNextBtn) {
        dailyNextBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            changeDailyMonth(1);
        };
    }
    
    if (startIcon) {
        startIcon.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (startPicker.style.display === 'block') {
                startPicker.style.display = 'none';
            } else {
                startCurrentYear = startTodayYear;
                startCurrentMonth = startTodayMonth;
                renderStartCalendar();
                startPicker.style.display = 'block';
            }
        };
    }
    
    if (startInput) {
        startInput.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (startPicker.style.display === 'block') {
                startPicker.style.display = 'none';
            } else {
                startCurrentYear = startTodayYear;
                startCurrentMonth = startTodayMonth;
                renderStartCalendar();
                startPicker.style.display = 'block';
            }
        };
    }
    
    let startPrevBtn = startPicker.querySelector('.pickerPrevBtn');
    let startNextBtn = startPicker.querySelector('.pickerNextBtn');
    
    if (startPrevBtn) {
        startPrevBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            changeStartMonth(-1);
        };
    }
    
    if (startNextBtn) {
        startNextBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            changeStartMonth(1);
        };
    }
    
    let durationInput = document.getElementById('durationDays');
    if (durationInput) {
        durationInput.addEventListener('input', calculateTotalAmount);
    }
    
    document.addEventListener('click', function(e) {
        if (dailyPicker && dailyPicker.style.display === 'block' && !dailyPicker.contains(e.target) && e.target !== dailyIcon && e.target !== dailyInput) {
            dailyPicker.style.display = 'none';
        }
        if (startPicker && startPicker.style.display === 'block' && !startPicker.contains(e.target) && e.target !== startIcon && e.target !== startInput) {
            startPicker.style.display = 'none';
        }
    });
});

function clickingOnLogin() {
    let login = document.getElementById('login');
    let reset = document.getElementById('reset');
    if (login) login.style.display = 'block';
    if (reset) reset.style.display = 'none';
    
    let btns = document.querySelectorAll('.buttons .button');
    if (btns[0]) btns[0].classList.add('active');
    if (btns[1]) btns[1].classList.remove('active');
}

function clickingOnReset() {
    let login = document.getElementById('login');
    let reset = document.getElementById('reset');
    if (login) login.style.display = 'none';
    if (reset) reset.style.display = 'block';
    
    let btns = document.querySelectorAll('.buttons .button');
    if (btns[0]) btns[0].classList.remove('active');
    if (btns[1]) btns[1].classList.add('active');
}

function submitDailyReserve() {
    let date = document.getElementById('dailyDate').value;
    let lockerNum = document.getElementById('dailyLockerNum').value;
    
    if (!date) {
        alert('لطفا تاریخ را انتخاب کنید');
        return;
    }
    if (!lockerNum) {
        alert('لطفا شماره کمد را وارد کنید');
        return;
    }
    
    alert('✅ رزرو روزانه شما با موفقیت انجام شد!\n📅 تاریخ: ' + date + '\n🔢 شماره کمد: ' + lockerNum);
    
    let dailyReservation = {
        type: 'daily',
        date: date,
        lockerNum: lockerNum,
        amount: 10000,
        timestamp: new Date().toISOString()
    };
    
    let allReservations = JSON.parse(localStorage.getItem('allReservations') || '[]');
    allReservations.push(dailyReservation);
    localStorage.setItem('allReservations', JSON.stringify(allReservations));
    
    document.getElementById('dailyDate').value = '';
}

function submitLongReserve() {
    let startDate = document.getElementById('startDate').value;
    let duration = document.getElementById('durationDays').value;
    let lockerNum = document.getElementById('longLockerNum').value;
    
    if (!startDate) {
        alert('لطفا تاریخ شروع را انتخاب کنید');
        return;
    }
    if (!duration) {
        alert('لطفا تعداد روز را وارد کنید');
        return;
    }
    if (duration < 2 || duration > 100) {
        alert('تعداد روز باید بین 2 تا 100 باشد');
        return;
    }
    if (!lockerNum) {
        alert('لطفا شماره کمد را وارد کنید');
        return;
    }
    
    let amount = parseInt(duration) * 10000;
    
    let reserveData = {
        type: 'long',
        startDate: startDate,
        duration: parseInt(duration),
        lockerNum: lockerNum,
        amount: amount,
        amountFormatted: amount.toLocaleString() + ' تومان',
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('pendingReservation', JSON.stringify(reserveData));
    
    window.location.href = 'payment.html';
}
