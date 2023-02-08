let cases = document.querySelectorAll(".case");
let joueur = document.getElementById("joueur");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreNul = document.getElementById("scoreNul");

let state = { //Création d'un objet 'state' qui va contenir en attribut toutes les valeurs néscesaire  a mon Morpion.
  joueurEnCours: 1,
  scoreJ1: 0,
  scoreJ2: 0,
  matchNuls: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};

const resetState = () => { //Création d'une constante qui va remmettre les valeurs de mon objet "state" a ses valeurs d'origine .
    state.joueurEnCours = 1;
    state.c1 = 0;
    state.c2 = 0;
    state.c3 = 0;
    state.c4 = 0;
    state.c5 = 0;
    state.c6 = 0;
    state.c7 = 0;
    state.c8 = 0;
    state.c9 = 0;
}

const verifierVictoire = () => { //Création d'une constante qui va vérifier toutes les possibiliter de match .
  if ( // Je vérifie toutes les possibiliter de vicrtoires et retourne la valeurs 'true' si une de ces possibiliter se réalise .
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0)
  ) {
    return true;
  } else if ( // Je verifier toutes les possibiliter de match null si l'un de ces cas se produit je renvoie la valeur 'null'.
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
  ) {
    return null;
  } else {// Si tout les cas prévu plus haut ne se réalise pas c'est que notre joueur a perdu alors je retourne 'false'.
    return false;
  }
};




const jouerCase = (e) => {
  let idCase = e.target.id;
  if (state[idCase] !== 0) return;
  state[idCase] = state.joueurEnCours;
  let isVictoire = verifierVictoire();
  if (isVictoire === true) {
    alert("Le gagnant est le joueur" + state.joueurEnCours);
    if (state.joueurEnCours == 1) {
      state.scoreJ1++;
      score1.textContent = state.scoreJ1;
    }else{
        state.scoreJ2++;
        score2.textContent = state.scoreJ2;
    }
    resetState()
    cases.forEach(c => (c.textContent = ""));
  }else if(isVictoire === null){
    alert('Match Null');
    state.matchNuls++;
    scoreNul.textContent = state.matchNuls;
    resetState()
    cases.forEach(c => (c.textContent = ""));

  }else if(isVictoire === false){
    if(state.joueurEnCours === 1){
        e.target.textContent = "X";
        state.joueurEnCours = 2;
        joueur.textContent = "2";
    }else{
        e.target.textContent = "O";
        state.joueurEnCours = 1;
        joueur.textContent = "1";
    }

  }
};




cases.forEach((el) => {
  el.addEventListener("click", jouerCase);
});
