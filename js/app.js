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
}