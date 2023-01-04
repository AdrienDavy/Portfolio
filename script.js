document.body.onload=function(){
    pictures=10;
    picturePosition=0;
    container=document.getElementById("container");
    leftButton=document.getElementById("leftButton");
    rightButton=document.getElementById("rightButton");
    container.style.width=(1600*pictures)+"px";
    for(i=1;i<=pictures;i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('img/img"+i+".jpg')";
        container.appendChild(div);
    }
    afficherMasquer();
}
leftButton.addEventListener( "click", ()=>{
    if(picturePosition>=-pictures+1)
    picturePosition--;
    container.style.transform="translate("+picturePosition*1600+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
})
rightButton.addEventListener( "click", ()=>{
    if(picturePosition<0)
        picturePosition++;
    container.style.transform="translate("+picturePosition*1600+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
})
function afficherMasquer(){
    if(picturePosition==-pictures+1)
        leftButton.style.visibility="hidden";
    else
        leftButton.style.visibility="visible";
    if(picturePosition==0)
        rightButton.style.visibility="hidden";
    else
        rightButton.style.visibility="visible";
}