let card=document.querySelectorAll(".card");
let arrowLeft=document.querySelector(".arrowLeft");
let arrowRight=document.querySelector(".arrowRight");
let slide=document.querySelector(".slide");
let indice_element_active=1;
function augmenter(variable){
    variable.style="z-index:2;transform:scale(1.2);width:40vw;transition: all 0.5s ease;";
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show',);
        }
    });
});

const hiddenElements = document = document.querySelectorAll('p');
hiddenElements.forEach((el) => observer.observe(el));