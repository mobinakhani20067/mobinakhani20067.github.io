const weeks = Array.from({length: 16}, (_, i) => `هفته ${i+1}`);

const persianMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

let startYear = 1405;
let startMonth = 8; 
let startDay = 15;

function jalaliToGregorian(jy, jm, jd) {
    let daysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    let totalDays = 0;
    for (let i = 0; i < jm - 1; i++) {
        totalDays += daysInMonth[i];
    }
    totalDays += jd - 1;
    let baseDate = new Date(2026, 10, 6);
    let result = new Date(baseDate);
    result.setDate(result.getDate() + totalDays);
    return result;
}

const tuesdays = [];
for(let i = 0; i < 16; i++) {
    let date = new Date(2026, 10, 6);
    date.setDate(date.getDate() + (i * 7));
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    tuesdays.push(`${year}/${month}/${day}`);
}

let attendanceStatus = [
	{ status: 'حاضر', date: tuesdays[0] },
	{ status: 'حاضر', date: tuesdays[1] },
	{ status: 'غایب', date: tuesdays[2] },
	{ status: 'حاضر', date: tuesdays[3] },
	{ status: 'تأخیر', date: tuesdays[4] },
	{ status: 'حاضر', date: tuesdays[5] },
	{ status: 'کنسل شده', date: tuesdays[6] },
	{ status: 'غایب', date: tuesdays[7] },
	{ status: 'حاضر', date: tuesdays[8] },
	{ status: 'تأخیر', date: tuesdays[9] },
	{ status: 'کنسل شده', date: tuesdays[10] },
	{ status: 'حاضر', date: tuesdays[11] },
	{ status: 'حاضر', date: tuesdays[12] },
	{ status: 'غایب', date: tuesdays[13] },
	{ status: 'حاضر', date: tuesdays[14] },
	{ status: 'در انتظار', date: tuesdays[15] }
];

function getStatusText(status) {
	switch(status) {
		case 'حاضر': return { text: '✅ حاضر', class: 'status-present' };
		case 'غایب': return { text: '❌ غایب', class: 'status-absent' };
		case 'تأخیر': return { text: '⏰ تأخیر', class: 'status-late' };
		case 'کنسل شده': return { text: '❌ کنسل شده', class: 'status-cancelled' };
		default: return { text: '⏳ در انتظار', class: 'status-upcoming' };
	}
}

function renderAttendanceTable() {
	const tbody = document.getElementById('attendanceBody');
	
	tbody.innerHTML = '';
	let present = 0, absent = 0, late = 0, cancelled = 0, remaining = 0;
	
	attendanceStatus.forEach((item, index) => {
		let row = document.createElement('tr');
		let statusInfo = getStatusText(item.status);

		if(item.status === 'حاضر') present++;
		else if(item.status === 'غایب') absent++;
		else if(item.status === 'تأخیر') late++;
		else if(item.status === 'کنسل شده') cancelled++;
		else remaining++;
		
		let statusClass = '';
		if(item.status === 'حاضر') statusClass = 'status-present';
		else if(item.status === 'غایب') statusClass = 'status-absent';
		else if(item.status === 'تأخیر') statusClass = 'status-late';
		else if(item.status === 'کنسل شده') statusClass = 'status-cancelled';
		else statusClass = 'status-upcoming';
		
		row.innerHTML = `
			<td><b>هفته ${index + 1}</b></td>
			<td>${item.date}</td>
			<td><span class="status-badge ${statusClass}">${statusInfo.text}</span></td>
		`;
		tbody.appendChild(row);
	});
	
	document.getElementById('presentCount').innerText = present;
	document.getElementById('absentCount').innerText = absent;
	document.getElementById('lateCount').innerText = late;
	document.getElementById('cancelledCount').innerText = cancelled;
	document.getElementById('remainingCount').innerText = remaining;
}

renderAttendanceTable();
