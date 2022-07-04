"use strict"


const buttons = document.querySelectorAll("button");
const username = prompt("Veuillez indiquer votre nom d'utilisateur");


for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function() {
    let joueur = buttons[i].innerHTML
    let IA = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat

    if (joueur === IA)
      resultat = "Vous avez fait une egalité !"

    else if ((joueur === "Pierre" && IA === "Ciseaux") || (joueur === "Feuille" && IA === "Pierre") || (joueur === "Ciseaux" && IA === "Feuille"))
      resultat = "Vous avez gagné !"
    else
      resultat = "Vous avez perdu !";
    document.querySelector(".resultat").innerHTML = `
      ${username} : ${joueur}</br>
     l'IA a choisi : ${IA}</br>
      ${resultat}
    `
  })
}































// const pierre = () => {
//   document.getElementById("pierre")
//   alert("le round est lancé")
// }
// const feuille = () => {
//   document.getElementById("feuille")
//   alert("le round est lancé")
// }
// const ciseaux = () => {
//   document.getElementById("ciseaux")
//   alert("le round est lancé")
// }

// let IA ;
// let P2 ;
 
// const ppc = (IA, p2) => {
//   if (IA === p2) {
   
//     return "égalité!"
   

//   }

//   if (IA === "pierre" && p2 === "ciseaux") {
//     return "IA a gagné!"

//   } else if (IA === "papier" && p2 === "pierre") {
//     return "IA a gagné!"

//   } else if (IA === "ciseaux" && p2 === "papier") {
//     return "IA a gagné!"

//   } else {
//     return "p2 a gagné!"
//   }
// }

// ppc("pierre", "pierre")
// ppc("ciseaux", "pierre")
// ppc("papier", "ciseaux")
// ppc("papier", "papier")