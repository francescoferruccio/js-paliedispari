// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

// chiedo una parola all'utente e la salvo in una variabile
 var parola = prompt("Inserisci una parola");
 var output = document.getElementById('output');

// richiamo la funzione e do l'output in base al valore ritornato dalla funzione
if (palindromo(parola)) {
  output.innerHTML = parola + " è una parola palindroma.";
} else {
  output.innerHTML = parola + " NON è una parola palindroma.";
}

// creo una funzione che controlla se la parola che gli passiamo è palindroma
 function palindromo (stringa) {
   // trasformo la stringa in un array di caratteri, inverto l'array e riformo la stringa
   var stringaReverse = stringa.split("").reverse().join("");
   // controllo se la stringa invertita è uguale a quella iniziale e ritorno un valore booleano
   if(stringa.toUpperCase() == stringaReverse.toUpperCase()) {
     return true;
   } else {
     return false;
   }
 }
