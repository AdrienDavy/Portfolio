let allGridItems = [...document.getElementsByClassName("grid-item")];
let popupBg = document.getElementById("popup-bg");
let popupImg = document.getElementById("popup-img");

const openPopup = (e) => {
  let gridItemClicked = e.target.closest(".grid-item");
  let clickedImageName = gridItemClicked.id;
  popupBg.classList.add("active");
  popupImg.src = `./img/${clickedImageName}.jpg`;
  popupImg.style.filter = 'blur(0)';
};

const closePopup = () => {
  popupBg.classList.remove("active");
};

allGridItems.forEach((el) => el.addEventListener("click", openPopup));

popupImg.addEventListener("click", (e) => e.stopPropagation());
popupBg.addEventListener("click", closePopup);
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
    if (pPosition < window.innerHeight / 1.3) {
      // Ajout de la classe 'visible' pour faire apparaître la balise
      p.classList.add('visible');
    }
  });
};

// Ajout de l'événement scroll
window.addEventListener('scroll', showOnScroll);
// Ajout de l'événement load pour jouer qu'une fois l'animation par chargement de page
window.addEventListener("load", showOnScroll);