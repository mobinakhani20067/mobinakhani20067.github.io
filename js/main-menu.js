const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
        this.classList.toggle('active');    
        navMenu.classList.toggle('active-mobile');  
    });
}
