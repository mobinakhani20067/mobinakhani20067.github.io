const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
if (hamburger) hamburger.onclick = () => navMenu.classList.toggle('active-mobile');

const scheduleData = {
    saturday: [true, false, true, false, true, false],    
    sunday: [false, true, false, true, false, true],       
    monday: [true, true, false, false, true, true],      
    tuesday: [false, false, true, true, false, false],    
    wednesday: [true, false, true, false, true, false],    
    thursday: [false, true, false, true, false, true],    
    friday: [true, true, true, false, false, false]      
};

const dayMapping = {
    'شنبه': 'saturday',
    'یکشنبه': 'sunday',
    'دوشنبه': 'monday',
    'سه شنبه': 'tuesday',
    'چهارشنبه': 'wednesday',
    'پنجشنبه': 'thursday',
    'جمعه': 'friday'
};

const persianDays = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

const timeSlots = ['08:00 - 10:00', '10:00 - 12:00', '12:00 - 14:00', '14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'];

function getCurrentDayIndex() {
    const today = new Date();
    const day = today.getDay(); 
    if (day === 0) return 6; 
    return day - 1; 
}


function renderTable() {
    const thead = document.getElementById('tableHeader');
    const tbody = document.getElementById('tableBody');
    
    if (!thead || !tbody) return;
    
    thead.innerHTML = `
        <tr>
            <th>روز هفته</th>
            ${timeSlots.map(time => `<th>${time}</th>`).join('')}
        </tr>
    `;
    let tbodyHtml = '';
    const currentDayIndex = getCurrentDayIndex();
    
    for (let i = 0; i < persianDays.length; i++) {
        const dayName = persianDays[i];
        const dayKey = dayMapping[dayName];
        const slots = scheduleData[dayKey];
        
        let rowHtml = `<tr>`;
        rowHtml += `<td class="${i === currentDayIndex ? 'cell-today' : ''}" style="font-weight: bold; color: #ffd966;">${dayName}</td>`;
        
        for (let j = 0; j < slots.length; j++) {
            const isBusy = slots[j];
            rowHtml += `<td class="${isBusy ? 'cell-busy' : 'cell-free'}">
                            <div class="cell-content">${isBusy ? 'مشغول' : 'آزاد'}</div>
                         </td>`;
        }
        rowHtml += `</tr>`;
        tbodyHtml += rowHtml;
    }
    
    tbody.innerHTML = tbodyHtml;
}
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

renderTable();
