document.addEventListener("click", function(e){
// On a mis un écouteur au document en entier
// On y a ajouté l'événement CLICK
// Allié à la fonction qui suit.


let body = document.querySelector("body");
//On stocke le body dans la variable body grace à querySelector.
let bullet = document.createElement("span");
// Dans la variable bullet on stocke un create Element
// Qui permet de créer un élément Span et de l'affilier au document.
let x = e.offsetX;
// Coordonnée du click sur l'axe horizontal au moment de l'évenement
let y = e.offsetY;
// Coordonnée du click sur l'axe vertical au moment de l'évenement


bullet.style.left = x+"px";
bullet.style.top = y+"px";

body.appendChild(bullet);
// Faire de bullet l'enfant du body
// D'afficher le span sur le body donc la balle

let audio = document.getElementById("audio");
// Stocke l'audio dans la variable audio
audio.play();
// Fonction qui joue le son au moment du click.


})