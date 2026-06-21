const allReports = [
	{id:1, code:"TKT-243445-001", date:"1405/02/15", status:"بر طرف شده", statusColor:"#DCECE1", statusTextColor:"#136A37", desc:"مشکل درب کمد برطرف شد"},
	{id:2, code:"TKT-243445-002", date:"1405/02/14", status:"دیده نشده", statusColor:"#D5E9FF", statusTextColor:"#345E86", desc:"هنوز توسط کارشناس بررسی نشده"},
	{id:3, code:"TKT-243445-003", date:"1405/02/13", status:"در حال بررسی", statusColor:"#FFFABA", statusTextColor:"#E2B534", desc:"در دست بررسی توسط تیم فنی"},
	{id:4, code:"TKT-243445-004", date:"1405/02/12", status:"دیده نشده", statusColor:"#D5E9FF", statusTextColor:"#345E86", desc:"منتظر بررسی کارشناس"},
	{id:5, code:"TKT-243445-005", date:"1405/02/11", status:"رد شده", statusColor:"#F6B9C0", statusTextColor:"#FF0000", desc:"گزارش نامعتبر شناخته شد"},
	{id:6, code:"TKT-243445-006", date:"1405/02/10", status:"بر طرف شده", statusColor:"#DCECE1", statusTextColor:"#136A37", desc:"قفل کمد تعویض شد"},
	{id:7, code:"TKT-243445-007", date:"1405/02/09", status:"در حال بررسی", statusColor:"#FFFABA", statusTextColor:"#E2B534", desc:"در انتظار تایید نهایی"},
	{id:8, code:"TKT-243445-008", date:"1405/02/08", status:"رد شده", statusColor:"#F6B9C0", statusTextColor:"#FF0000", desc:"مشکل یافت نشد"},
	{id:9, code:"TKT-243445-009", date:"1405/02/07", status:"بر طرف شده", statusColor:"#DCECE1", statusTextColor:"#136A37", desc:"سرویس دوره ای انجام شد"},
	{id:10, code:"TKT-243445-010", date:"1405/02/06", status:"دیده نشده", statusColor:"#D5E9FF", statusTextColor:"#345E86", desc:"در صف بررسی"},
	{id:11, code:"TKT-243445-011", date:"1405/02/05", status:"در حال بررسی", statusColor:"#FFFABA", statusTextColor:"#E2B534", desc:"کارشناس در حال بررسی"},
	{id:12, code:"TKT-243445-012", date:"1405/02/04", status:"رد شده", statusColor:"#F6B9C0", statusTextColor:"#FF0000", desc:"تکراری بودن گزارش"},
	{id:13, code:"TKT-243445-013", date:"1405/02/03", status:"بر طرف شده", statusColor:"#DCECE1", statusTextColor:"#136A37", desc:"تعمیرات انجام شد"},
	{id:14, code:"TKT-243445-014", date:"1405/02/02", status:"دیده نشده", statusColor:"#D5E9FF", statusTextColor:"#345E86", desc:"در انتظار تخصیص"},
	{id:15, code:"TKT-243445-015", date:"1405/02/01", status:"در حال بررسی", statusColor:"#FFFABA", statusTextColor:"#E2B534", desc:"بررسی اولیه انجام شد"},
	{id:16, code:"TKT-243445-016", date:"1405/01/30", status:"بر طرف شده", statusColor:"#DCECE1", statusTextColor:"#136A37", desc:"مشکل رفع گردید"},
	{id:17, code:"TKT-243445-017", date:"1405/01/29", status:"رد شده", statusColor:"#F6B9C0", statusTextColor:"#FF0000", desc:"عدم تطابق با مشکل اعلامی"},
	{id:18, code:"TKT-243445-018", date:"1405/01/28", status:"دیده نشده", statusColor:"#D5E9FF", statusTextColor:"#345E86", desc:"جدید"},
	{id:19, code:"TKT-243445-019", date:"1405/01/27", status:"در حال بررسی", statusColor:"#FFFABA", statusTextColor:"#E2B534", desc:"در حال برسی تخصصی"},
	{id:20, code:"TKT-243445-020", date:"1405/01/26", status:"بر طرف شده", statusColor:"#DCECE1", statusTextColor:"#136A37", desc:"کاملا رفع شد"}
];

let currentPage = 1;
const itemsPerPage = 10;

function buildTable(page) {
	const start = (page - 1) * itemsPerPage;
	const end = start + itemsPerPage;
	const pageReports = allReports.slice(start, end);
	const tbody = document.getElementById('tableBody');
	tbody.innerHTML = '';
	
	pageReports.forEach(report => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${report.id}</td>
			<td>${report.code}</td>
			<td>${report.date}</td>
			<td><span class="status-badge" style="background-color:${report.statusColor}; color:${report.statusTextColor};">${report.status}</span></td>
			<td><a href="#" class="detail-link" onclick="showReportDetails(${report.id}); return false;">›</a></td>
		`;
		tbody.appendChild(row);
	});
}

function buildPagination() {
	const totalPages = Math.ceil(allReports.length / itemsPerPage);
	const paginationDiv = document.getElementById('pagination');
	paginationDiv.innerHTML = '';
	
	const prevBtn = document.createElement('button');
	prevBtn.textContent = '‹ قبلی';
	prevBtn.className = 'page-btn';
	prevBtn.disabled = currentPage === 1;
	prevBtn.onclick = () => {
		if(currentPage > 1) {
			currentPage--;
			buildTable(currentPage);
			buildPagination();
		}
	};
	paginationDiv.appendChild(prevBtn);
	
	for(let i = 1; i <= totalPages; i++) {
		const pageBtn = document.createElement('button');
		pageBtn.textContent = i;
		pageBtn.className = 'page-btn';
		if(i === currentPage) pageBtn.classList.add('active');
		pageBtn.onclick = () => {
			currentPage = i;
			buildTable(currentPage);
			buildPagination();
		};
		paginationDiv.appendChild(pageBtn);
	}
	
	const nextBtn = document.createElement('button');
	nextBtn.textContent = 'بعدی ›';
	nextBtn.className = 'page-btn';
	nextBtn.disabled = currentPage === totalPages;
	nextBtn.onclick = () => {
		if(currentPage < totalPages) {
			currentPage++;
			buildTable(currentPage);
			buildPagination();
		}
	};
	paginationDiv.appendChild(nextBtn);
}

function showReportDetails(id) {
	const report = allReports.find(r => r.id === id);
	if(report) {
		document.getElementById('modalCode').textContent = report.code;
		document.getElementById('modalDate').textContent = report.date;
		document.getElementById('modalStatus').innerHTML = `<span style="background-color:${report.statusColor}; color:${report.statusTextColor}; padding:2px 10px; border-radius:15px;">${report.status}</span>`;
		document.getElementById('modalDesc').textContent = report.desc;
		document.getElementById('reportModal').style.display = 'flex';
	}
}

function closeModal() {
	document.getElementById('reportModal').style.display = 'none';
}

document.getElementById('reportModal').addEventListener('click', function(e) {
	if(e.target === this) closeModal();
});

buildTable(currentPage);
buildPagination();
loadMenuState();
