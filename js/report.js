let selectedCategory = null;
function selectCategory(element, value) {
document.querySelectorAll('.category-img td').forEach(td => td.classList.remove('selected'));
element.classList.add('selected');
selectedCategory = value;
let radio = element.querySelector('input[type="radio"]');
if(radio) radio.checked = true;
}

function goToStep2() {
if(!selectedCategory) {
	alert('❌ لطفا یک دسته بندی را انتخاب کنید');
	return;
}
document.getElementById('s1').style.display = 'none';
document.getElementById('s3').style.display = 'none';
document.getElementById('s2').style.display = 'block';
}

function goToStep1() {
document.getElementById('s2').style.display = 'none';
document.getElementById('s1').style.display = 'block';
}

function goToStep3() {
let name = document.getElementById('reporterName').value;
let studentId = document.getElementById('studentId').value;
let title = document.getElementById('reportTitle').value;

if(!name) { alert('❌ لطفا نام خود را وارد کنید'); return; }
if(!studentId) { alert('❌ لطفا کد دانشجویی را وارد کنید'); return; }
if(!title) { alert('❌ لطفا عنوان گزارش را وارد کنید'); return; }

document.getElementById('s2').style.display = 'none';
document.getElementById('s3').style.display = 'block';
}

function goToStep2again() {
document.getElementById('s3').style.display = 'none';
document.getElementById('s2').style.display = 'block';
}

function goToStep4() {
let code = 'RPT-' + Math.floor(Math.random() * 1000000);
document.getElementById('trackingCode').innerHTML = code;

document.getElementById('s3').style.display = 'none';
document.getElementById('s4').style.display = 'block';
}

function submitReport() {
let reportData = {
	category: selectedCategory,
	name: document.getElementById('reporterName').value,
	studentId: document.getElementById('studentId').value,
	title: document.getElementById('reportTitle').value,
	description: document.getElementById('reportDesc').value,
	trackingCode: document.getElementById('trackingCode').innerText,
	date: new Date().toLocaleDateString('fa-IR')
};

let reports = JSON.parse(localStorage.getItem('reports') || '[]');
reports.push(reportData);
localStorage.setItem('reports', JSON.stringify(reports));

alert(`✅ گزارش شما با موفقیت ثبت شد!\nکد پیگیری: ${reportData.trackingCode}`);

document.getElementById('reporterName').value = '';
document.getElementById('studentId').value = '';
document.getElementById('reportTitle').value = '';
document.getElementById('reportDesc').value = '';
document.getElementById('photoInput').value = '';
document.getElementById('photoPreview').style.display = 'none';
document.getElementById('previewText').style.display = 'block';
selectedCategory = null;
document.querySelectorAll('.category-img td').forEach(td => td.classList.remove('selected'));

document.getElementById('s4').style.display = 'none';
document.getElementById('s1').style.display = 'block';
}

const input = document.getElementById('photoInput');
const img = document.getElementById('photoPreview');
const text = document.getElementById('previewText');
let objectUrl = null;

input.addEventListener('change', () => {
const file = input.files && input.files[0] ? input.files[0] : null;
if (!file) {
	img.style.display = 'none';
	text.style.display = 'block';
	if (objectUrl) URL.revokeObjectURL(objectUrl);
	objectUrl = null;
	return;
}
if (!file.type.startsWith('image/')) {
	alert('لطفاً فقط فایل عکس انتخاب کنید.');
	input.value = '';
	return;
}
if (objectUrl) URL.revokeObjectURL(objectUrl);
objectUrl = URL.createObjectURL(file);
img.src = objectUrl;
img.style.display = 'block';
text.style.display = 'none';
});

window.goToStep2 = goToStep2;
window.goToStep1 = goToStep1;
window.goToStep3 = goToStep3;
window.goToStep4 = goToStep4;
window.submitReport = submitReport;
window.selectCategory = selectCategory;
window.goToStep2again = goToStep2again;
