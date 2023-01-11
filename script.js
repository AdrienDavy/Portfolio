// CAROUSEL ---------------------------------------------------------

let card=document.querySelectorAll(".card");
let arrowLeft=document.querySelector(".arrowLeft");
let arrowRight=document.querySelector(".arrowRight");
let slide=document.querySelector(".slide");
let indice_element_active=1;
function augmenter(variable){
    variable.style="z-index:2;transform:scale(1.2);width:40vw;transition: all 0.5s ease;margin:50px;";
}
function diminuer(variable){
    variable.style="z-index:1;transform:scale(1);";
}
window.onload=()=>{
    augmenter(card[indice_element_active])
}
arrowLeft.addEventListener("click", ()=>{
    if(indice_element_active !=1) {
        diminuer(card[indice_element_active]);
    augmenter(card[indice_element_active-1]);
    slide.scrollTo(-50 * slide.innerWidth / 100,0);
    indice_element_active=indice_element_active-1;
    }    
})
arrowRight.addEventListener("click", ()=>{
    if(indice_element_active !=10) {
        diminuer(card[indice_element_active]);
    augmenter(card[indice_element_active+1]);
    slide.scrollTo(50 * slide.innerWidth / 100,0);
    indice_element_active=indice_element_active+1;    
    }    
})

// ANIMATION P ON SCROLL -----------------------------------------


// Récupération des balises p
const paragraphs = document.querySelectorAll('p');

// Scroll callback function
const showOnScroll = () => {
    // Boucle sur les balises p
    paragraphs.forEach((p, i) => {
        // Récupération de la position de la balise p par rapport au haut de la page
        const pPosition = p.getBoundingClientRect().top;
        // Vérification si la position de la balise p est inférieure à la position de la fenêtre + la hauteur de la fenêtre
        if (pPosition < window.innerHeight/1.5) {
            // Ajout de la classe 'visible' pour faire apparaître la balise
            p.classList.add('visible');
        }
    });
};

// Ajout de l'événement scroll
window.addEventListener('scroll', showOnScroll);
window.addEventListener("load", showOnScroll);
