function toggleFaq(element) {
    const answer = element.parentElement.querySelector('.faq-answer');
    const icon = element.querySelector('.icon');
    if (answer) {
        answer.classList.toggle('show');
        icon.textContent = answer.classList.contains('show') ? '▲' : '▼';
    }
}

function showToast(msg) {
    const toast = document.getElementById('toastMsg');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function generateTrackingCode() {
    const now = new Date();
    const year = now.getFullYear().toString().slice(2);
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 9000 + 1000).toString();
    return `T-${year}${month}-${random}`;
}

let lastGeneratedCode = '';

function showTrackingModal(code) {
    const modal = document.getElementById('trackingCodeModal');
    const codeDisplay = document.getElementById('generatedCode');
    codeDisplay.textContent = code;
    lastGeneratedCode = code;
    modal.style.display = 'flex';
}

function closeTrackingModal() {
    const modal = document.getElementById('trackingCodeModal');
    modal.style.display = 'none';
}

function copyTrackingCode() {
    const code = document.getElementById('generatedCode').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            کپی شد! ✓
        `;
        copyBtn.classList.add('copied');
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
        showToast('کد پیگیری کپی شد');
    }).catch(() => {
        showToast('خطا در کپی کردن');
    });
}

function saveTicketToLocalStorage(ticketData, trackingCode) {
    let tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
    
    const newTicket = {
        id: Date.now(),
        trackingCode: trackingCode,
        name: ticketData.name,
        email: ticketData.email,
        subject: ticketData.subject,
        message: ticketData.message,
        date: new Date().toLocaleDateString('fa-IR'),
        status: 'pending',
        answer: '',
        answerDate: ''
    };
    
    tickets.push(newTicket);
    localStorage.setItem('supportTickets', JSON.stringify(tickets));
}

const ticketForm = document.getElementById('supportTicketForm');
if (ticketForm) {
    ticketForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const contactInfo = document.getElementById('contactInfo').value;
        const ticketType = document.getElementById('ticketType').value;
        const message = document.getElementById('message').value;
        
        const trackingCode = generateTrackingCode();
        
        const ticketData = {
            name: fullName,
            email: contactInfo,
            subject: ticketType,
            message: message
        };
        saveTicketToLocalStorage(ticketData, trackingCode);
        
        showTrackingModal(trackingCode);
        
        ticketForm.reset();
    });
}

function openAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'flex';
}

function closeAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'none';
}

function adminLogin(event) {
    event.preventDefault();
    const user = document.getElementById('adminUser').value;
    const pass = document.getElementById('adminPass').value;
    if (user === 'admin' && pass === '1234') {
        alert('ورود موفق ✅');
        window.location.href = 'admin_panel.html';
    } else {
        alert('❌ نام کاربری یا رمز عبور اشتباه است');
    }
}

window.onclick = function(event) {
    const modal = document.getElementById('trackingCodeModal');
    const adminModal = document.getElementById('adminLoginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === adminModal) {
        adminModal.style.display = 'none';
    }
}
