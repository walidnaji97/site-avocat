// let menuVisible = false;
// //Fonction qui cache ou qui  montre le menu
// function montrerCacherMenu(){
//     if(menuVisible){
//         document.getElementById("nav").classList ="";
//         menuVisible = false;
//     }else{
//         document.getElementById("nav").classList ="responsive";
//         menuVisible = true;
//     }
// }

// let montreCacheMenu=document.querySelector(".nav-responsive");
// montreCacheMenu.addEventListener("click",montrerCacherMenu);





// function selectionner(){
//     //cache le menu une fois qu' on  selectionne une option
//     document.getElementById("nav").classList = "";
//     menuVisible = false;
// }


// // Sélectionnez tous les liens à l'intérieur de la liste non ordonnée (ul)
// const liens = document.querySelectorAll("#nav  ul li a");

// // Ajoutez un écouteur d'événement pour le clic à chaque lien
// liens.forEach(lien => {
//     lien.addEventListener('click', selectionner );
// });



// Sélectionnez les éléments nécessaires
// Sélectionnez les éléments nécessaires
const menuIcon = document.querySelector('#navbar-toggle');
const nav = document.querySelector('#navbar-collapse');

// Ajoutez un écouteur d'événements pour le clic sur l'icône du menu
menuIcon.addEventListener('click', () => {
    // Basculez la classe 'active' pour afficher/cacher le menu
    nav.classList.toggle('active');

});