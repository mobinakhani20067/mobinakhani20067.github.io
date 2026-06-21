let tasks = [
        { id: 1, name: "جلسه آنلاین تیم", time: "10:30 ق.ظ", category: "کاری", completed: false },
        { id: 2, name: "مطالعه ریاضی", time: "14:00 ب.ظ", category: "درسی", completed: false },
        { id: 3, name: "تمرین یوگا", time: "07:45 ق.ظ", category: "ورزشی", completed: false },
        { id: 4, name: "پروژه برنامه‌نویسی", time: "16:20 ب.ظ", category: "مهم", completed: false },
        { id: 5, name: "خرید هفتگی", time: "18:00 ب.ظ", category: "سایر", completed: false },
        { id: 6, name: "مرور ایمیل‌ها", time: "09:00 ق.ظ", category: "کاری", completed: false }
    ];

    let currentFilter = "همه";

    function updateProgress() {
        let total = tasks.length;
        let completed = tasks.filter(t => t.completed).length;
        let percent = total === 0 ? 0 : Math.round((completed / total) * 100);
        
        document.getElementById('progressPercent').innerHTML = percent + "%<br><small>تکمیل</small>";
        document.getElementById('completedCount').innerText = completed;
        document.getElementById('totalCount').innerText = total;
        
        let circumference = 502;
        let offset = circumference - (percent / 100) * circumference;
        let fillCircle = document.querySelector('.progress-fill');
        if (fillCircle) fillCircle.style.strokeDashoffset = offset;
    }

    function getCategoryColor(cat) {
        const colors = { "مهم": "#B44141", "درسی": "#2C6E9E", "کاری": "#348F6C", "ورزشی": "#E19133", "سایر": "#8F6A9E" };
        return colors[cat] || "#165526";
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    function renderTasks() {
        const plansContainer = document.getElementById("plansList");
        const emptyDiv = document.getElementById("emptyState");
        
        let filteredTasks = tasks.filter(task => currentFilter === "همه" ? true : task.category === currentFilter);
        
        if (filteredTasks.length === 0) {
            plansContainer.style.display = "none";
            emptyDiv.style.display = "flex";
        } else {
            plansContainer.style.display = "flex";
            emptyDiv.style.display = "none";
            plansContainer.innerHTML = "";
            filteredTasks.forEach(task => {
                const planDiv = document.createElement("div");
                planDiv.className = "plan";
                planDiv.innerHTML = `
                    <div class="plan-info">
                        <div class="plan-title">${escapeHtml(task.name)}</div>
                        <div class="plan-time">${escapeHtml(task.time)}</div>
                    </div>
                    <div class="plan-category" style="background: ${getCategoryColor(task.category)};">${task.category}</div>
                    <div class="plan-actions">
                        <input type="checkbox" class="task-checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}">
                        <button class="delete-plan" data-id="${task.id}"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b34e4e'%3E%3Cpath d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z'/%3E%3C/svg%3E" class="deleteIcon"></button>
                    </div>
                `;
                plansContainer.appendChild(planDiv);
            });
            
            document.querySelectorAll('.task-checkbox').forEach(cb => {
                cb.addEventListener('change', (e) => {
                    const id = parseInt(cb.getAttribute('data-id'));
                    const found = tasks.find(t => t.id === id);
                    if (found) {
                        found.completed = cb.checked;
                        renderTasks();
                        updateProgress();
                    }
                    e.stopPropagation();
                });
            });
            
            document.querySelectorAll('.delete-plan').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(btn.getAttribute('data-id'));
                    tasks = tasks.filter(t => t.id !== id);
                    renderTasks();
                    updateProgress();
                    e.stopPropagation();
                });
            });
        }
        updateProgress();
    }

    window.selectDay = function(element, filterValue) {
        currentFilter = filterValue;
        document.querySelectorAll('.filter-btn').forEach(btn => {
            if (btn.getAttribute('data-filter') === filterValue) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        renderTasks();
    };

    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector('.filter-btn[data-filter="همه"]').classList.add('active');
        renderTasks();
        
        const addBtn = document.getElementById("addTaskBtn");
        if (addBtn) {
            addBtn.addEventListener("click", (e) => {
                e.preventDefault();
                const taskName = prompt("نام کار جدید را وارد کنید:", "کار نمونه");
                if (taskName && taskName.trim() !== "") {
                    let category = prompt("دسته‌بندی (مهم/درسی/کاری/ورزشی/سایر)", "سایر");
                    let validCat = ["مهم","درسی","کاری","ورزشی","سایر"];
                    if (!validCat.includes(category)) category = "سایر";
                    let timeInput = prompt("زمان (مثلاً 15:30 ب.ظ)", "12:00 ب.ظ") || "--:--";
                    const newTask = {
                        id: Date.now(),
                        name: taskName.trim(),
                        time: timeInput,
                        category: category,
                        completed: false
                    };
                    tasks.push(newTask);
                    renderTasks();
                }
            });
        }
    }); 


