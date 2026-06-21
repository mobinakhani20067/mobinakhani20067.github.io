let currentOpenSubmenu = null;

function toggleSubmenu(headerElement, event) {
    if (event) event.stopPropagation();
    const submenu = headerElement.nextElementSibling;
    const arrow = headerElement.querySelector('.arrow');
    
    const menu = document.getElementById('sideMenu');
    if (window.innerWidth >= 769 && menu.classList.contains('collapsed')) {
        return;
    }
    
    if (currentOpenSubmenu === submenu) {
        submenu.classList.remove('open');
        if (arrow) arrow.classList.remove('open');
        currentOpenSubmenu = null;
    } else {
        if (currentOpenSubmenu) {
            const prevHeader = currentOpenSubmenu.previousElementSibling;
            const prevArrow = prevHeader?.querySelector('.arrow');
            currentOpenSubmenu.classList.remove('open');
            if (prevArrow) prevArrow.classList.remove('open');
        }
        submenu.classList.add('open');
        if (arrow) arrow.classList.add('open');
        currentOpenSubmenu = submenu;
    }
}
function openMenu() {
    const menu = document.getElementById('sideMenu');
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const overlay = document.getElementById('menuOverlay');
    
    menu.classList.add('open');
    if (toggleBtn) toggleBtn.innerHTML = '✕';
    if (overlay) overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    const menu = document.getElementById('sideMenu');
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const overlay = document.getElementById('menuOverlay');
    
    menu.classList.remove('open');
    if (toggleBtn) toggleBtn.innerHTML = '☰';
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    const menu = document.getElementById('sideMenu');
    if (menu.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
}
function closeMenuFromInside() {
    closeMenu();
}

function toggleMenuCollapse() {
    const menu = document.getElementById('sideMenu');
    const collapseBtn = document.getElementById('menuCollapseBtn');
    
    if (window.innerWidth >= 769 && menu) {
        menu.classList.toggle('collapsed');
        
        if (menu.classList.contains('collapsed')) {
            if (collapseBtn) collapseBtn.innerHTML = '☰';
            document.body.classList.add('menu-collapsed');
            if (currentOpenSubmenu) {
                currentOpenSubmenu.classList.remove('open');
                currentOpenSubmenu = null;
            }
        } else {
            if (collapseBtn) collapseBtn.innerHTML = '✕';
            document.body.classList.remove('menu-collapsed');
        }
        localStorage.setItem('menuCollapsed', menu.classList.contains('collapsed'));
    }
}

function loadMenuState() {
    if (window.innerWidth >= 769) {
        const isCollapsed = localStorage.getItem('menuCollapsed') === 'true';
        const menu = document.getElementById('sideMenu');
        const collapseBtn = document.getElementById('menuCollapseBtn');
        
        if (isCollapsed && menu) {
            menu.classList.add('collapsed');
            document.body.classList.add('menu-collapsed');
            if (collapseBtn) collapseBtn.innerHTML = '☰';
        } else {
            if (collapseBtn) collapseBtn.innerHTML = '✕';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }
    
    const closeMobileBtn = document.getElementById('menuCloseMobileBtn');
    if (closeMobileBtn) {
        closeMobileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeMenu();
        });
    }
    
    const collapseBtn = document.getElementById('menuCollapseBtn');
    if (collapseBtn) {
        collapseBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenuCollapse();
        });
    }
    
    const overlay = document.getElementById('menuOverlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeMenu();
        });
    }
    
    document.querySelectorAll('.menu-items a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const href = this.getAttribute('href');
                closeMenu();
                setTimeout(() => {
                    window.location.href = href;
                }, 200);
            }
        });
    });
    
    window.addEventListener('resize', function() { 
        if (window.innerWidth >= 769) {
            closeMenu();
        }
    });
    
    loadMenuState();
});

window.toggleSubmenu = toggleSubmenu;
window.toggleMenuCollapse = toggleMenuCollapse;

window.deleteGym = window.deleteGym || function() {};
window.submitReply = window.submitReply || function() {};
window.loadGyms = window.loadGyms || function() {};
window.setupImageHandlers = window.setupImageHandlers || function() {};
window.renderMyGyms = window.renderMyGyms || function() {};
