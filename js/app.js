window.onload = () => {
    // Récupération des boutons d'ouverture de modales
    const modalButtons = document.querySelectorAll("[data-toggle=modal]");

    for(let button of modalButtons){
        button.addEventListener("click", function(e){
            e.preventDefault();
            // Récupération du numéro du bouton de la modale
            let target = this.dataset.target
            // Récupération de la modale qui correspond
            let modal = document.querySelector(target);
            // On lui ajoute la classe "show" qui affiche la bonne modale
            modal.classList.add("show");

            // Récupération des boutons de fermeture X
            const modalClose = modal.querySelectorAll("[data-dismiss=dialog]");
            // Au clic, fermeture de la modale en supprimant "show"
            for(let close of modalClose){
                close.addEventListener("click", () => {
                    modal.classList.remove("show");
                });
            }
            // Fermeture en cliquant sur la zone grise de la modale
            modal.addEventListener("click", function(){
                this.classList.remove("show");
            });
            //La modale ne se ferme pas si on clique sur son premier "enfant" (la zone blanche)
            modal.children[0].addEventListener("click", 
            function(e){
                e.stopPropagation();
            })
        });
    }  
};

// Cette fonction permet d'afficher un hamburger menu en dessous de 610px (Mobiles)
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const closeMenu = document.querySelector('.close-menu');
    const headerMenu = document.querySelector('.header-menu');

    // Au clic sur le hamburger, le hamburger disparait et la croix apparait
    hamburger.addEventListener('click', function () {
        headerMenu.classList.add('open');
        hamburger.style.display = 'none';
        closeMenu.style.display = 'block';
    });

    // Au clic sur la croix, la croix disparait et le hamburger apparait
    closeMenu.addEventListener('click', function () {
        headerMenu.classList.remove('open');
        hamburger.style.display = 'block';
        closeMenu.style.display = 'none';
    });
});
