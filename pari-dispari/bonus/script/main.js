// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.

// creo le variabili per i due numeri da confrontare
var giocatore1;
var giocatore2;
var start = document.getElementById('start');
result = document.getElementById('result');

start.addEventListener("click",
  function() {
    giocatore1 = randomNumber(1, 5);
    giocatore2 = randomNumber(1, 5);
    console.log(giocatore1, "+", giocatore2, "=", giocatore1+giocatore2);

    // prendiamo la selezione dell'utente e la memorizziamo in una variabile
    var userChoice = document.getElementById('userChoice').value;

    // confrontiamo la scelta dell'utente con il risultato della funzione pari
    if ((userChoice == "pari" && pari (giocatore1, giocatore2)) || userChoice == "dispari" && !pari (giocatore1, giocatore2)) {
      result.innerHTML = giocatore1 + " + " + giocatore2 + " = " + (giocatore1+giocatore2) + " Hai vinto :)";
    } else {
      result.innerHTML = giocatore1 + " + " + giocatore2 + " = " + (giocatore1+giocatore2) + " Hai perso :(";
    }
  }
)

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
