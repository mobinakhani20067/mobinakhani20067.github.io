let profileBtn = document.getElementById('profileBtn');
let profileDropdown = document.getElementById('profileDropdown');

if (profileBtn) {
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });
}

document.addEventListener('click', function(event) {
    if (profileDropdown && profileDropdown.classList.contains('show')) {
        if (!profileBtn.contains(event.target) && !profileDropdown.contains(event.target)) {
            profileDropdown.classList.remove('show');
        }
    }
});

let userName = localStorage.getItem('adminName') || 'نام ادمین';
let userRole = localStorage.getItem('adminRole') || 'مدیر کل';
let userOfficialTitle = localStorage.getItem('adminOfficialTitle') || 'معاون وزیر علوم';
let userEmail = localStorage.getItem('adminEmail') || 'admin@sportuniv.ir';
let userPhone = localStorage.getItem('adminPhone') || '09123456789';
let userNationalCode = localStorage.getItem('adminNationalCode') || '1234567890';
let userBirthdate = localStorage.getItem('adminBirthdate') || '۱۳۷۰/۰۱/۰۱';
let joinDate = localStorage.getItem('adminJoinDate') || '۱۴۰۴/۰۱/۰۱';
let userAvatar = localStorage.getItem('adminAvatar') || '';

document.getElementById('dropdownUserName').textContent = userName;
document.getElementById('profileName').textContent = userName;
document.getElementById('profileRole').textContent = userRole;
document.getElementById('profileOfficialTitle').textContent = userOfficialTitle;
document.getElementById('infoFullName').textContent = userName;
document.getElementById('infoUsername').textContent = localStorage.getItem('adminUsername') || 'admin_super';
document.getElementById('infoRole').textContent = userRole;
document.getElementById('infoOfficialTitle').textContent = userOfficialTitle;
document.getElementById('infoEmail').textContent = userEmail;
document.getElementById('infoPhone').textContent = userPhone;
document.getElementById('infoNationalCode').textContent = userNationalCode;
document.getElementById('infoBirthdate').textContent = userBirthdate;
document.getElementById('infoDate').textContent = joinDate;

function loadAvatar() {
    let avatarImg = document.getElementById('profileAvatarImg');
    let defaultAvatar = document.getElementById('defaultAvatar');
    let savedAvatar = localStorage.getItem('adminAvatar');
    
    if (savedAvatar && savedAvatar !== '') {
        avatarImg.src = savedAvatar;
        avatarImg.style.display = 'block';
        defaultAvatar.style.display = 'none';
    } else {
        avatarImg.style.display = 'none';
        defaultAvatar.style.display = 'block';
    }
}
loadAvatar();

function uploadAvatar(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imageData = e.target.result;
            localStorage.setItem('adminAvatar', imageData);
            
            let avatarImg = document.getElementById('profileAvatarImg');
            let defaultAvatar = document.getElementById('defaultAvatar');
            avatarImg.src = imageData;
            avatarImg.style.display = 'block';
            defaultAvatar.style.display = 'none';
            
            updateHeaderAvatar();
        };
        reader.readAsDataURL(file);
    }
}

function updateHeaderAvatar() {
    let savedAvatar = localStorage.getItem('adminAvatar');
    let headerImg = document.getElementById('headerAvatarImg');
    let headerDefault = document.getElementById('headerDefaultAvatar');
    let dropdownImg = document.getElementById('dropdownAvatarImg');
    let dropdownDefault = document.getElementById('dropdownDefaultAvatar');
    
    if (savedAvatar && savedAvatar !== '') {
        if (headerImg) {
            headerImg.src = savedAvatar;
            headerImg.style.display = 'block';
            headerDefault.style.display = 'none';
        }
        if (dropdownImg) {
            dropdownImg.src = savedAvatar;
            dropdownImg.style.display = 'block';
            dropdownDefault.style.display = 'none';
        }
    } else {
        if (headerImg) {
            headerImg.style.display = 'none';
            headerDefault.style.display = 'block';
        }
        if (dropdownImg) {
            dropdownImg.style.display = 'none';
            dropdownDefault.style.display = 'block';
        }
    }
}

updateHeaderAvatar();

window.addEventListener('storage', function(e) {
    if (e.key === 'adminAvatar') {
        loadAvatar();
        updateHeaderAvatar();
    }
});

let editFullName = document.getElementById('editFullName');
let editOfficialTitle = document.getElementById('editOfficialTitle');
let editEmail = document.getElementById('editEmail');
let editPhone = document.getElementById('editPhone');
let editNationalCode = document.getElementById('editNationalCode');
let editBirthdate = document.getElementById('editBirthdate');

editFullName.value = userName;
editOfficialTitle.value = userOfficialTitle;
editEmail.value = userEmail;
editPhone.value = userPhone;
editNationalCode.value = userNationalCode;
editBirthdate.value = userBirthdate;

function editProfile() {
    document.getElementById('editProfileModal').classList.add('show');
}

function closeEditModal() {
    document.getElementById('editProfileModal').classList.remove('show');
}

function saveProfile(event) {
    event.preventDefault();
    
    let name = editFullName.value.trim();
    let officialTitle = editOfficialTitle.value.trim();
    let email = editEmail.value.trim();
    let phone = editPhone.value.trim();
    let nationalCode = editNationalCode.value.trim();
    let birthdate = editBirthdate.value.trim();
    
    if (!name) {
        alert('لطفاً نام کامل را وارد کنید');
        return;
    }
    if (!email) {
        alert('لطفاً ایمیل را وارد کنید');
        return;
    }
    if (nationalCode && nationalCode.length !== 10) {
        alert('کد ملی باید ۱۰ رقمی باشد');
        return;
    }
    
    localStorage.setItem('adminName', name);
    localStorage.setItem('adminOfficialTitle', officialTitle);
    localStorage.setItem('adminEmail', email);
    localStorage.setItem('adminPhone', phone);
    localStorage.setItem('adminNationalCode', nationalCode);
    localStorage.setItem('adminBirthdate', birthdate);
    
    document.getElementById('dropdownUserName').textContent = name;
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileOfficialTitle').textContent = officialTitle;
    document.getElementById('infoFullName').textContent = name;
    document.getElementById('infoOfficialTitle').textContent = officialTitle;
    document.getElementById('infoEmail').textContent = email;
    document.getElementById('infoPhone').textContent = phone;
    document.getElementById('infoNationalCode').textContent = nationalCode;
    document.getElementById('infoBirthdate').textContent = birthdate;
    
    closeEditModal();
    alert('✅ اطلاعات پروفایل با موفقیت به روز شد');
}

function changePassword() {
    document.getElementById('changePassModal').classList.add('show');
}

function closePassModal() {
    document.getElementById('changePassModal').classList.remove('show');
}

function savePassword(event) {
    event.preventDefault();
    
    let currentPass = document.getElementById('currentPass').value.trim();
    let newPass = document.getElementById('newPass').value.trim();
    let confirmPass = document.getElementById('confirmPass').value.trim();
    
    if (!currentPass) {
        alert('لطفاً رمز عبور فعلی را وارد کنید');
        return;
    }
    if (!newPass || newPass.length < 4) {
        alert('رمز عبور جدید باید حداقل ۴ کاراکتر باشد');
        return;
    }
    if (newPass !== confirmPass) {
        alert('رمز عبور جدید و تکرار آن مطابقت ندارند');
        return;
    }
    
    localStorage.setItem('adminPassword', newPass);
    
    document.getElementById('currentPass').value = '';
    document.getElementById('newPass').value = '';
    document.getElementById('confirmPass').value = '';
    
    closePassModal();
    alert('✅ رمز عبور با موفقیت تغییر کرد');
}

function logout() {
    if (confirm('آیا از خروج از پنل مطمئن هستید؟')) {
        window.location.href = 'main_index.html';
    }
}

let menuToggle = document.getElementById('menuToggleBtn');
let sidebar = document.getElementById('sidebarMenu');
let overlay = document.getElementById('sidebarOverlay');

if (menuToggle) {
    menuToggle.onclick = function() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
}

if (overlay) {
    overlay.onclick = function() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
});

window.onclick = function(event) {
    let editModal = document.getElementById('editProfileModal');
    let passModal = document.getElementById('changePassModal');
    
    if (event.target === editModal) {
        closeEditModal();
    }
    if (event.target === passModal) {
        closePassModal();
    }
};