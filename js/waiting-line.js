// داده‌های نمونه برای صف انتظار
let waitingList = [
    { id: 1, name: "دانشگاه صنعتی امیرکبیر", province: "تهران", city: "تهران", date: "۱۴۰۴/۰۲/۲۰", status: "approved", statusText: "تایید شده" },
    { id: 2, name: "دانشگاه علوم پزشکی ایران", province: "تهران", city: "تهران", date: "۱۴۰۴/۰۲/۱۹", status: "pending", statusText: "در انتظار" },
    { id: 3, name: "دانشگاه صنعتی خواجه نصیرالدین طوسی", province: "تهران", city: "تهران", date: "۱۴۰۴/۰۲/۱۸", status: "rejected", statusText: "رد شده" },
    { id: 4, name: "دانشگاه علوم کشاورزی و منابع طبیعی گرگان", province: "گلستان", city: "گرگان", date: "۱۴۰۴/۰۲/۱۷", status: "pending", statusText: "در انتظار" },
    { id: 5, name: "دانشگاه صنعتی نوشیروانی بابل", province: "مازندران", city: "بابل", date: "۱۴۰۴/۰۲/۱۶", status: "approved", statusText: "تایید شده" },
    { id: 6, name: "دانشگاه علوم پزشکی کرمانشاه", province: "کرمانشاه", city: "کرمانشاه", date: "۱۴۰۴/۰۲/۱۵", status: "pending", statusText: "در انتظار" },
    { id: 7, name: "دانشگاه علوم پزشکی همدان", province: "همدان", city: "همدان", date: "۱۴۰۴/۰۲/۱۴", status: "rejected", statusText: "رد شده" },
    { id: 8, name: "دانشگاه علوم پزشکی کرمان", province: "کرمان", city: "کرمان", date: "۱۴۰۴/۰۲/۱۳", status: "pending", statusText: "در انتظار" },
    { id: 9, name: "دانشگاه علوم پزشکی ارومیه", province: "آذربایجان غربی", city: "ارومیه", date: "۱۴۰۴/۰۲/۱۲", status: "pending", statusText: "در انتظار" },
    { id: 10, name: "دانشگاه علوم پزشکی زاهدان", province: "سیستان و بلوچستان", city: "زاهدان", date: "۱۴۰۴/۰۲/۱۱", status: "rejected", statusText: "رد شده" },
    { id: 11, name: "دانشگاه علوم پزشکی بوشهر", province: "بوشهر", city: "بوشهر", date: "۱۴۰۴/۰۲/۱۰", status: "approved", statusText: "تایید شده" },
    { id: 12, name: "دانشگاه علوم پزشکی زنجان", province: "زنجان", city: "زنجان", date: "۱۴۰۴/۰۲/۰۹", status: "pending", statusText: "در انتظار" },
    { id: 13, name: "دانشگاه علوم پزشکی شهرکرد", province: "چهارمحال و بختیاری", city: "شهرکرد", date: "۱۴۰۴/۰۲/۰۸", status: "pending", statusText: "در انتظار" },
    { id: 14, name: "دانشگاه علوم پزشکی ایلام", province: "ایلام", city: "ایلام", date: "۱۴۰۴/۰۲/۰۷", status: "rejected", statusText: "رد شده" },
    { id: 15, name: "دانشگاه علوم پزشکی بجنورد", province: "خراسان شمالی", city: "بجنورد", date: "۱۴۰۴/۰۲/۰۶", status: "pending", statusText: "در انتظار" },
    { id: 16, name: "دانشگاه علوم پزشکی یاسوج", province: "کهگیلویه و بویراحمد", city: "یاسوج", date: "۱۴۰۴/۰۲/۰۵", status: "pending", statusText: "در انتظار" },
    { id: 17, name: "دانشگاه علوم پزشکی بیرجند", province: "خراسان جنوبی", city: "بیرجند", date: "۱۴۰۴/۰۲/۰۴", status: "approved", statusText: "تایید شده" },
    { id: 18, name: "دانشگاه علوم پزشکی سمنان", province: "سمنان", city: "سمنان", date: "۱۴۰۴/۰۲/۰۳", status: "pending", statusText: "در انتظار" },
    { id: 19, name: "دانشگاه علوم پزشکی اردبیل", province: "اردبیل", city: "اردبیل", date: "۱۴۰۴/۰۲/۰۲", status: "rejected", statusText: "رد شده" },
    { id: 20, name: "دانشگاه علوم پزشکی رفسنجان", province: "کرمان", city: "رفسنجان", date: "۱۴۰۴/۰۲/۰۱", status: "pending", statusText: "در انتظار" }
];
    let currentFilter = "all";
    let currentPage = 1;
    const itemsPerPage = 8;
    let filteredList = [];

    function getStatusClass(status) {
        switch(status) {
            case "pending": return "status-pending";
            case "review": return "status-review";
            case "approved": return "status-approved";
            case "rejected": return "status-rejected";
            default: return "status-pending";
        }
    }

    function getStatusText(status) {
        switch(status) {
            case "pending": return "در انتظار";
            case "review": return "در حال بررسی";
            case "approved": return "تایید شده";
            case "rejected": return "رد شده";
            default: return "در انتظار";
        }
    }

    function updateStats() {
        document.getElementById('totalCount').innerText = waitingList.length;
        document.getElementById('pendingCount').innerText = waitingList.filter(item => item.status === "pending").length;
        document.getElementById('reviewCount').innerText = waitingList.filter(item => item.status === "review").length;
        document.getElementById('approvedCount').innerText = waitingList.filter(item => item.status === "approved").length;
    }

    function filterData() {
        if (currentFilter === "all") {
            filteredList = [...waitingList];
        } else {
            filteredList = waitingList.filter(item => item.status === currentFilter);
        }
        currentPage = 1;
        renderTable();
        renderPagination();
    }

    function renderTable() {
        const tbody = document.getElementById('tableBody');
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = filteredList.slice(start, end);

        if (pageData.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 50px;">❌ هیچ درخواستی با این وضعیت یافت نشد</td></tr>';
            return;
        }

        tbody.innerHTML = pageData.map((item, index) => `
            <tr>
                <td>${start + index + 1}</td>
                <td style="text-align: right;">🏛️ ${item.name}</td>
                <td>📍 ${item.province}</td>
                <td>${item.city}</td>
                <td>📅 ${item.date}</td>
                <td><span class="status-badge ${getStatusClass(item.status)}">${getStatusText(item.status)}</span></td>
                <td><button class="view-btn" onclick="viewDetails(${item.id})">مشاهده جزئیات</button></td>
            </tr>
        `).join('');
    }

    function renderPagination() {
        const totalPages = Math.ceil(filteredList.length / itemsPerPage);
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
        const totalPages = Math.ceil(filteredList.length / itemsPerPage);
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        renderTable();
        renderPagination();
    }

    function viewDetails(id) {
        const item = waitingList.find(i => i.id === id);
        if (item) {
            let statusPersian = getStatusText(item.status);
            let message = `🏛️ دانشگاه: ${item.name}\n📍 استان: ${item.province}\n🏙️ شهر: ${item.city}\n📅 تاریخ ثبت: ${item.date}\n📌 وضعیت: ${statusPersian}`;
            
            if (item.status === "pending") {
                message += `\n\n⏳ درخواست شما در صف بررسی قرار دارد. پس از تایید، صفحه اختصاصی دانشگاه فعال خواهد شد.`;
            } else if (item.status === "review") {
                message += `\n\n🔍 درخواست شما در حال بررسی توسط کارشناسان است.`;
            } else if (item.status === "approved") {
                message += `\n\n✅ درخواست شما تایید شده است. صفحه دانشگاه شما فعال می‌باشد.`;
            } else if (item.status === "rejected") {
                message += `\n\n❌ متأسفانه درخواست شما تایید نشده است. لطفاً با پشتیبانی تماس بگیرید.`;
            }
            alert(message);
        }
    }

    // فیلترها
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            filterData();
        });
    });

    updateStats();
    filterData();
