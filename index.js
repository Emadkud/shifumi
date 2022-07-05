"use strict";

const buttons = document.querySelectorAll("button");
const username = prompt("Veuillez indiquer votre nom d'utilisateur");

let scorePlayer = 0;
let scoreIa = 0;
let roundPlayer = 0;
let roundIa = 0;
 


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
     
    let joueur = buttons[i].innerHTML;
    let IA = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    let resultat;

    if (scorePlayer !== 3 || scoreIa !== 3) {

      if (scorePlayer === 3) {
        resultat = "vous avez gagné le jeu";
      } 
      else if (scoreIa === 3) {
        resultat = "IA a gagné le jeu";
        
      }

      else if (joueur === IA) {
        resultat = "Vous avez fait une egalité !";
        egalité.style.color='red';
      }

       else if (
        (joueur === "Pierre" && IA === "Ciseaux") ||
        (joueur === "Feuille" && IA === "Pierre") ||
        (joueur === "Ciseaux" && IA === "Feuille"))
       {
        resultat = "Vous avez gagné !";
        scorePlayer++;

      } else if (
        (IA === "Pierre" && joueur === "Ciseaux") ||
        (IA === "Feuille" && joueur === "Pierre") ||
        (IA === "Ciseaux" && joueur === "Feuille"))
       
      {
        resultat = "Vous avez perdu !";
        scoreIa++;
      }
      
    else{
        resultat('le jeu est fini');
      }
    } 

    document.querySelector(".resultat").innerHTML = `
      ${username}  : ${joueur}</br>
       IA a choisi : ${IA}</br>
      ${resultat}  </br>
      score  ${username} : ${scorePlayer} <br>
      score  IA : ${scoreIa}  <br>
       
     
    `;
   
    

    
  });
}
