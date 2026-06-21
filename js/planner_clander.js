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
    
    document.getElementById('monthYear').innerHTML = `${monthNames[currentMonth - 1]} ${currentYear}`;
    
    let calendar = document.getElementById('calendar');
    calendar.innerHTML = '';
    
    for (let i = 0; i < firstDay; i++) {
        let empty = document.createElement('div');
        empty.className = 'calendar-day empty-day';
        calendar.appendChild(empty);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement('div');
        dayDiv.className = 'calendar-day';
        let key = `${currentYear}-${currentMonth}-${day}`;
        
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
    document.getElementById('modalDate').innerHTML = `${monthNames[month - 1]} ${day} ${year}`;
    document.getElementById('eventInput').value = events[`${year}-${month}-${day}`] || '';
    document.getElementById('modal').classList.add('active');
}
        
        function closeModal() {
            document.getElementById('modal').classList.remove('active');
        }
        
        function saveEvent() {
            let title = document.getElementById('eventInput').value.trim();
            let key = `${selectedYear}-${selectedMonth}-${selectedDay}`;
            if (title) events[key] = title;
            else delete events[key];
            saveEvents();
            renderCalendar();
            closeModal();
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
        
        renderCalendar();
        
        document.getElementById('prevBtn').onclick = () => changeMonth(-1);
        document.getElementById('nextBtn').onclick = () => changeMonth(1);
        document.getElementById('saveBtn').onclick = saveEvent;
        document.getElementById('cancelBtn').onclick = closeModal;
        document.getElementById('modal').onclick = (e) => { if (e.target === document.getElementById('modal')) closeModal(); };
