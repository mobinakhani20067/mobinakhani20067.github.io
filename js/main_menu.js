(function() {
    const hamburger = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navMenu.classList.toggle('active-mobile');
            console.log('همبرگر کلیک شد'); 
        });
        
        const menuLinks = navMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active-mobile');
            });
        });
        
        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('active-mobile') && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                navMenu.classList.remove('active-mobile');
            }
        });
    }
    
    function setActiveLink() {
        const currentUrl = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('#navMenu a').forEach(link => {
            if (link.getAttribute('href') === currentUrl) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveLink);
    } else {
        setActiveLink();
    }
})();
