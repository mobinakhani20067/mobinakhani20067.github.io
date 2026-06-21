const weekDays = [
    { name: 'شنبه', number: 12 },
    { name: 'یکشنبه', number: 13 },
    { name: 'دوشنبه', number: 14 },
    { name: 'سه شنبه', number: 15 },
    { name: 'چهار شنبه', number: 16 },
    { name: 'پنج شنبه', number: 17 },
    { name: 'جمعه', number: 18 }
];

const weeklyPlans = {
    'شنبه': [
        { id: 1, title: 'جلسه گروهی پروژه', time: '10:00', category: 'درسی', completed: false },
        { id: 2, title: 'تمرین یوگا', time: '16:30', category: 'ورزشی', completed: false }
    ],
    'یکشنبه': [
        { id: 3, title: 'ارائه پروژه', time: '09:00', category: 'درسی', completed: true },
        { id: 4, title: 'ناهار با دوستان', time: '13:00', category: 'سایر', completed: false }
    ],
    'دوشنبه': [
        { id: 5, title: 'کلاس زبان انگلیسی', time: '14:00', category: 'درسی', completed: false },
        { id: 6, title: 'تمرین بدنسازی', time: '18:00', category: 'ورزشی', completed: false },
        { id: 7, title: 'مطالعه کتاب', time: '21:00', category: 'درسی', completed: false }
    ],
    'سه شنبه': [
        { id: 8, title: 'ملاقات با استاد', time: '11:00', category: 'درسی', completed: false },
        { id: 9, title: 'کار روی پروژه', time: '15:00', category: 'کاری', completed: true }
    ],
    'چهار شنبه': [
        { id: 10, title: 'تمرین شنا', time: '08:00', category: 'ورزشی', completed: false }
    ],
    'پنج شنبه': [
        { id: 11, title: 'خرید هفتگی', time: '10:00', category: 'سایر', completed: false },
        { id: 12, title: 'تمیزکاری خانه', time: '14:00', category: 'سایر', completed: false }
    ],
    'جمعه': [
        { id: 13, title: 'استراحت و فیلم دیدن', time: '20:00', category: 'سایر', completed: false }
    ]
};
let currentDay = 'شنبه';
let selectedDayElement = null;

function formatTime(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const period = hours >= 12 ? 'ب.ظ' : 'ق.ظ';
    const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
    return `${displayHours}:${String(minutes).padStart(2, '0')} ${period}`;
}

function getCategoryColor(category) {
    const colors = {
        'مهم': '#c0392b',
        'درسی': '#2980b9',
        'کاری': '#8e44ad',
        'ورزشی': '#27ae60',
        'سایر': '#f39c12'
    };
    return colors[category] || '#7f8c8d';
}

function renderPlans(dayName) {
    const plansList = document.getElementById('plansList');
    const emptyState = document.getElementById('emptyState');
    const plans = weeklyPlans[dayName] || [];

    plansList.innerHTML = '';

    if (plans.length === 0) {
        emptyState.style.display = 'flex';
        plansList.style.display = 'none';
        return;
    }

    emptyState.style.display = 'none';
    plansList.style.display = 'flex';

    plans.forEach(plan => {
        const planDiv = document.createElement('div');
        planDiv.className = 'plan';
        planDiv.setAttribute('data-id', plan.id);

        const categoryColor = getCategoryColor(plan.category);

        planDiv.innerHTML = `
            <div class="plan-info">
                <div class="plan-title">${plan.title}</div>
                <div class="plan-time">${formatTime(plan.time)}</div>
            </div>
            <div class="plan-category" style="background-color: ${categoryColor};">${plan.category}</div>
            <div class="plan-actions">
                <input type="checkbox" ${plan.completed ? 'checked' : ''} onchange="toggleTask('${dayName}', ${plan.id})">
                <button class="delete-plan" onclick="deleteTask('${dayName}', ${plan.id})">
                    <svg class="deleteIcon" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="2">
                        <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                </button>
            </div>
        `;

        plansList.appendChild(planDiv);
    });

    updateSummary();
}

function toggleTask(dayName, taskId) {
    const plans = weeklyPlans[dayName];
    if (!plans) return;

    const task = plans.find(p => p.id === taskId);
    if (task) {
        task.completed = !task.completed;
        renderPlans(dayName);
        updateSummary();
    }
}

function deleteTask(dayName, taskId) {
    if (!confirm('آیا از حذف این کار مطمئن هستید؟')) return;

    const plans = weeklyPlans[dayName];
    if (!plans) return;

    const index = plans.findIndex(p => p.id === taskId);
    if (index !== -1) {
        plans.splice(index, 1);
        renderPlans(dayName);
        updateSummary();
    }
}

function selectDay(element, dayName) {
    document.querySelectorAll('.week-button').forEach(btn => {
        btn.classList.remove('active');
    });

    element.classList.add('active');
    selectedDayElement = element;

    currentDay = dayName;

    renderPlans(dayName);
}

function updateSummary() {
    let totalTasks = 0;
    let completedTasks = 0;

    for (const day in weeklyPlans) {
        const plans = weeklyPlans[day];
        totalTasks += plans.length;
        completedTasks += plans.filter(p => p.completed).length;
    }

    document.getElementById('totalTasks').textContent = totalTasks;
    document.getElementById('completedTasks').textContent = completedTasks;
}

function buildWeekDays() {
    const row = document.getElementById('weekDaysRow');
    row.innerHTML = '';

    weekDays.forEach((day, index) => {
        const td = document.createElement('td');
        const div = document.createElement('div');
        div.className = 'week-button';
        if (index === 0) div.classList.add('active');
        
        div.innerHTML = `<b>${day.name}</b><span>${day.number}</span>`;
        div.onclick = function() {
            selectDay(this, day.name);
        };

        td.appendChild(div);
        row.appendChild(td);
    });

    const firstDay = weekDays[0].name;
    currentDay = firstDay;
    renderPlans(firstDay);
    updateSummary();
}

function addNewTask(dayName, taskData) {
    if (!weeklyPlans[dayName]) {
        weeklyPlans[dayName] = [];
    }

    const newTask = {
        id: Date.now(),
        title: taskData.title,
        time: taskData.time,
        category: taskData.category,
        completed: false
    };

    weeklyPlans[dayName].push(newTask);

    if (currentDay === dayName) {
        renderPlans(dayName);
    }
    updateSummary();
}

document.addEventListener('DOMContentLoaded', function() {
    buildWeekDays();
});

function checkForNewTask() {
    const newTaskData = localStorage.getItem('newTask');
    if (newTaskData) {
        try {
            const data = JSON.parse(newTaskData);
            addNewTask(data.day, data);
            localStorage.removeItem('newTask');
        } catch (e) {
            console.error('خطا در پردازش کار جدید:', e);
            localStorage.removeItem('newTask');
        }
    }
}

setInterval(checkForNewTask, 2000);
checkForNewTask();
function getPlansForDay(dayName) {
    return weeklyPlans[dayName] || [];
}

function getAllPlans() {
    return weeklyPlans;
}

function savePlansToLocalStorage() {
    try {
        localStorage.setItem('weeklyPlans', JSON.stringify(weeklyPlans));
    } catch (e) {
        console.error('خطا در ذخیره داده‌ها:', e);
    }
}

function loadPlansFromLocalStorage() {
    const saved = localStorage.getItem('weeklyPlans');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            for (const day in parsed) {
                if (weeklyPlans[day]) {
                    weeklyPlans[day] = parsed[day];
                }
            }
        } catch (e) {
            console.error('خطا در بارگذاری داده‌ها:', e);
        }
    }
}

loadPlansFromLocalStorage();
setInterval(savePlansToLocalStorage, 5000);
window.addEventListener('beforeunload', function() {
    savePlansToLocalStorage();
});
