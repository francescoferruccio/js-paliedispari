// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

// creo le variabili per i due numeri da confrontare e gli assegno il valore richiamando la funzione random
var giocatore1 = randomNumber(1, 5);
var giocatore2 = randomNumber(1, 5);
result = document.getElementById('result');
console.log(giocatore1, "+", giocatore2, "=", giocatore1+giocatore2);

// chiediamo all'utente di scegliere pari o dispari
var userChoice = prompt("Pari o dispari?")

// confrontiamo la scelta dell'utente con il risultato della funzione pari
if ((userChoice == "pari" && pari (giocatore1, giocatore2)) || userChoice == "dispari" && !pari (giocatore1, giocatore2)) {
  result.innerHTML = "hai vinto";
} else {
  result.innerHTML = "hai perso";
}

// creo una funzione che genera un numero random tra un min e un max
function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// creo una funzione che somma i numeri dati e mi dice se il risultato è pari
function pari (num1, num2) {
  var somma = num1+num2;
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
