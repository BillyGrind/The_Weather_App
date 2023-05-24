import { weatherInput } from "./weatherInput.js";
import { autoComplete } from "./autoComplete.js";
import { refresh } from "./refresh.js";

document.addEventListener("DOMContentLoaded", () => {
    refresh();
  });

weatherInput();
autoComplete();


// Lien Github Page
//https://billygrind.github.io/The_Weather_App/

//TO DO
//---------------------
// README


//DO
//---------------------
// créer Github pages
// ajouter img temp dans card
// Terminer de taper infos dans chart
// autoComplete click + finaliser beauté
// refresh a chaque enter
// répare bug addition card

//MAYBE
//---------------
// essayer cet api https://geocoding-api.open-meteo.com/v1/search?name=Bruss&count=5
// voir aussi geo names
// save dans le localstorage
// comparaison entre plusieurs villes