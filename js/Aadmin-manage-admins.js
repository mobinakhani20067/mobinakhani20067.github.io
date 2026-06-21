let admins = [
    {
        id: 1,
        username: "admin_super",
        password: "***",
        role: "super",
        roleName: "مدیر کل",
        status: "active",
        lastActive: "۱۴۰۴/۰۲/۲۵ - ۱۴:۳۰",
        permissions: {
        dashboard: true, requests: true, universities: true, news: true,
        tickets: true, admins: true, reports: true, settings: true
        }
    },
    {
        id: 2,
        username: "modir_sport",
        password: "***",
        role: "admin",
        roleName: "مدیر ارشد",
        status: "active",
        lastActive: "۱۴۰۴/۰۲/۲۴ - ۱۰:۱۵",
        permissions: {
        dashboard: true, requests: true, universities: true, news: true,
        tickets: true, admins: false, reports: true, settings: false
        }
    },
    {
        id: 3,
        username: "news_admin",
        password: "***",
        role: "manager",
        roleName: "مدیر بخش",
        status: "active",
        lastActive: "۱۴۰۴/۰۲/۲۳ - ۱۶:۴۵",
        permissions: {
        dashboard: true, requests: false, universities: false, news: true,
        tickets: false, admins: false, reports: false, settings: false
        }
    },
    {
        id: 4,
        username: "ticket_viewer",
        password: "***",
        role: "viewer",
        roleName: "کاربر عادی",
        status: "inactive",
        lastActive: "۱۴۰۴/۰۲/۲۰ - ۰۹:۰۰",
        permissions: {
        dashboard: true, requests: false, universities: false, news: false,
        tickets: true, admins: false, reports: false, settings: false
        }
    },
    {
        id: 5,
        username: "reza_karimi",
        password: "***",
        role: "manager",
        roleName: "مدیر بخش",
        status: "active",
        lastActive: "۱۴۰۴/۰۲/۲۵ - ۰۸:۳۰",
        permissions: {
            dashboard: true, requests: true, universities: false, news: false,
            tickets: true, admins: false, reports: true, settings: false
        }
    }
];

let nextAdminId = 6;
let editAdminId = null;

function getRoleBadgeClass(role) {
    switch(role) {
        case 'super': return 'role-super';
        case 'admin': return 'role-admin';
        case 'manager': return 'role-manager';
        default: return 'role-viewer';
    }
}

function getPermissionText(permissions) {
    let count = Object.values(permissions).filter(v => v === true).length;
    if (count === 8) return 'دسترسی کامل';
    if (count >= 4) return 'دسترسی متوسط';
    return `${count} مورد`;
}

function isFullAccess(permissions) {
    return Object.values(permissions).every(v => v === true);
}

function updateStats() {
    document.getElementById('totalAdmins').innerText = admins.length;
    document.getElementById('activeAdmins').innerText = admins.filter(a => a.status === 'active').length;
    let uniqueRoles = [...new Set(admins.map(a => a.role))];
    document.getElementById('roleCount').innerText = uniqueRoles.length;
}

function filterAdmins() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let roleFilter = document.getElementById('roleFilter').value;
    let statusFilter = document.getElementById('statusFilter').value;
    let permFilter = document.getElementById('permFilter').value;
    
    let filtered = admins.filter(admin => {
        if (searchTerm && !admin.username.toLowerCase().includes(searchTerm)) return false;
        if (roleFilter !== 'all' && admin.role !== roleFilter) return false;
        if (statusFilter !== 'all' && admin.status !== statusFilter) return false;
        if (permFilter === 'full' && !isFullAccess(admin.permissions)) return false;
        if (permFilter === 'limited' && isFullAccess(admin.permissions)) return false;
        return true;
    });
    
    renderAdminsList(filtered);
}

function renderAdminsList(filteredList = null) {
    let list = filteredList || admins;
    let tbody = document.getElementById('adminsTableBody');
    
    if (list.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;">هیچ ادمینی یافت نشد</td>' + '</tr>';
        return;
    }

    let html = '';
    for (let i = 0; i < list.length; i++) {
        let a = list[i];
        let roleClass = getRoleBadgeClass(a.role);
        let isChecked = a.status === 'active';
        let isSuperAdmin = (a.username === 'admin_super');
        
        html += '<tr>' +
            '<td style="font-weight:bold;">' + a.username + '</td>' +
            '<td><span class="role-badge ' + roleClass + '">' + a.roleName + '</span></td>' +
            '<td>' + getPermissionText(a.permissions) + '</td>' +
            '<td>' +
                (isSuperAdmin ? 
                    '<label class="toggle-switch disabled" style="opacity:0.6; cursor:not-allowed;">' +
                        '<input type="checkbox" ' + (isChecked ? 'checked' : '') + ' disabled>' +
                        '<span class="toggle-slider" style="cursor:not-allowed;"></span>' +
                    '</label>' :
                    '<label class="toggle-switch">' +
                        '<input type="checkbox" ' + (isChecked ? 'checked' : '') + ' onchange="toggleAdminStatus(' + a.id + ')">' +
                        '<span class="toggle-slider"></span>' +
                    '</label>'
                ) +
            '</td>' +
            '<td>' + a.lastActive + '</td>' +
            '<td style="text-align: center; direction: ltr;">' +
                '<div style="display: flex; gap: 5px; justify-content: flex-start;">' +
                    '<button class="btn-icon btn-edit" onclick="openEditAdminModal(' + a.id + ')">' +
                        '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>' +
                        ' ویرایش' +
                    '</button>';
        
        if (!isSuperAdmin) {
            html += '<button class="btn-icon btn-delete" onclick="deleteAdmin(' + a.id + ')">' +
                        '<svg width="12" height="12" fill="white" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>' +
                        ' حذف' +
                    '</button>';
        } else {
            html += '<button class="btn-icon" disabled style="background:#ccc; cursor:not-allowed;">اصلی</button>';
        }
        
        html += '</div>' + '</td>' +
            '</tr>';
    }
    tbody.innerHTML = html;
}

function openAddAdminModal() {
    editAdminId = null;
    document.getElementById('modalTitle').innerHTML = '<svg width="24" height="24" fill="#1c542c" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg> افزودن ادمین جدید';
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
    document.getElementById('adminRole').value = 'manager';
    document.getElementById('adminStatus').value = 'active';
    
    document.getElementById('permDashboard').checked = true;
    document.getElementById('permRequests').checked = false;
    document.getElementById('permUniversities').checked = false;
    document.getElementById('permNews').checked = false;
    document.getElementById('permTickets').checked = false;
    document.getElementById('permAdmins').checked = false;
    document.getElementById('permReports').checked = false;
    document.getElementById('permSettings').checked = false;
    
    document.getElementById('adminModal').style.display = 'flex';
}

function openEditAdminModal(id) {
    editAdminId = id;
    let admin = admins.find(a => a.id === id);
    if (!admin) return;
    
    document.getElementById('modalTitle').innerHTML = '<svg width="24" height="24" fill="#1c542c" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> ویرایش ادمین';
    document.getElementById('adminUsername').value = admin.username;
    document.getElementById('adminPassword').value = '';
    document.getElementById('adminRole').value = admin.role;
    document.getElementById('adminStatus').value = admin.status;
    
    document.getElementById('permDashboard').checked = admin.permissions.dashboard;
    document.getElementById('permRequests').checked = admin.permissions.requests;
    document.getElementById('permUniversities').checked = admin.permissions.universities;
    document.getElementById('permNews').checked = admin.permissions.news;
    document.getElementById('permTickets').checked = admin.permissions.tickets;
    document.getElementById('permAdmins').checked = admin.permissions.admins;
    document.getElementById('permReports').checked = admin.permissions.reports;
    document.getElementById('permSettings').checked = admin.permissions.settings;
    
    document.getElementById('adminModal').style.display = 'flex';
}

function saveAdmin() {
    let username = document.getElementById('adminUsername').value.trim();
    let password = document.getElementById('adminPassword').value;
    let role = document.getElementById('adminRole').value;
    let status = document.getElementById('adminStatus').value;
    
    if (!username) {
        alert('لطفاً نام کاربری را وارد کنید');
        return;
    }
    
    let roleName = '';
    switch(role) {
        case 'super': roleName = 'مدیر کل'; break;
        case 'admin': roleName = 'مدیر ارشد'; break;
        case 'manager': roleName = 'مدیر بخش'; break;
        default: roleName = 'کاربر عادی';
    }
    
    let permissions = {
        dashboard: document.getElementById('permDashboard').checked,
        requests: document.getElementById('permRequests').checked,
        universities: document.getElementById('permUniversities').checked,
        news: document.getElementById('permNews').checked,
        tickets: document.getElementById('permTickets').checked,
        admins: document.getElementById('permAdmins').checked,
        reports: document.getElementById('permReports').checked,
        settings: document.getElementById('permSettings').checked
    };
    
    let today = new Date().toLocaleDateString('fa-IR');
    let now = new Date().toLocaleTimeString('fa-IR', {hour:'2-digit', minute:'2-digit'});
    
    if (editAdminId) {
        let admin = admins.find(a => a.id === editAdminId);
        if (admin) {
            admin.username = username;
            if (password) admin.password = '***';
            admin.role = role;
            admin.roleName = roleName;
            admin.status = status;
            admin.permissions = permissions;
            alert('✅ ادمین با موفقیت ویرایش شد');
        }
    } else {
        let newAdmin = {
            id: nextAdminId++,
            username: username,
            password: '***',
            role: role,
            roleName: roleName,
            status: status,
            lastActive: today + ' - ' + now,
            permissions: permissions
        };
        admins.push(newAdmin);
        alert('✅ ادمین جدید با موفقیت اضافه شد');
    }
    
    updateStats();
    filterAdmins();
    closeAdminModal();
}

function toggleAdminStatus(id) {
    let admin = admins.find(a => a.id === id);
    if (admin && admin.username !== 'admin_super') {
        admin.status = admin.status === 'active' ? 'inactive' : 'active';
        updateStats();
        filterAdmins();
        alert(`وضعیت ادمین "${admin.username}" به ${admin.status === 'active' ? 'فعال' : 'غیرفعال'} تغییر کرد`);
    } else if (admin.username === 'admin_super') {
        alert('امکان تغییر وضعیت ادمین اصلی وجود ندارد');
    }
}

function deleteAdmin(id) {
    let admin = admins.find(a => a.id === id);
    if (admin && admin.username !== 'admin_super') {
        if (confirm(`آیا از حذف ادمین "${admin.username}" مطمئن هستید؟`)) {
            admins = admins.filter(a => a.id !== id);
            updateStats();
            filterAdmins();
            alert('❌ ادمین با موفقیت حذف شد');
        }
    } else {
        alert('امکان حذف ادمین اصلی وجود ندارد');
    }
}

function closeAdminModal() {
    document.getElementById('adminModal').style.display = 'none';
    editAdminId = null;
}


// منوی ریسپانسیو
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
    let modal = document.getElementById('adminModal');
    if (event.target === modal) {
        closeAdminModal();
    }
}
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
let dropdownName = document.getElementById('dropdownUserName');
if (dropdownName) {
dropdownName.textContent = userName;
}
updateStats();
filterAdmins();