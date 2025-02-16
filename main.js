// Gestion de l'ouverture des images en plein écran
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.querySelector('.fullscreen-modal');
    const modalImg = modal.querySelector('.fullscreen-image');
    const closeBtn = modal.querySelector('.close-modal');
    const menuImages = document.querySelectorAll('.card-image img');

    // Ouvrir la modal au clic sur une image
    menuImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Empêcher le défilement
        });
    });

    // Fermer la modal au clic sur le bouton
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Réactiver le défilement
    });

    // Fermer la modal au clic en dehors de l'image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Gérer la fermeture avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
