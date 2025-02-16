document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainMenu = document.querySelector('.main-menu');
    const navbar = document.querySelector('.navbar');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        mainMenu.classList.toggle('active');
        // Change l'icône du bouton
        const menuIcon = this.querySelector('i');
        if (mainMenu.classList.contains('active')) {
            menuIcon.classList.remove('bx-menu');
            menuIcon.classList.add('bx-x');
        } else {
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });

    // Fermer le menu quand on clique sur un lien
    const menuLinks = document.querySelectorAll('.main-menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mainMenu.classList.remove('active');
            const menuIcon = mobileMenuBtn.querySelector('i');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        });
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && mainMenu.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            mainMenu.classList.remove('active');
            const menuIcon = mobileMenuBtn.querySelector('i');
            menuIcon.classList.remove('bx-x');
            menuIcon.classList.add('bx-menu');
        }
    });
});
