// CAMPO MINATO EASY

var numeriMine = [];
var numeriUtente = [];
var mine = 16;
var dimensioneCampo = sceltaDifficolta();
var tentativiMax = dimensioneCampo - mine;
while (numeriMine.length < mine) { //Inserisce 16 mine
    var numeriRandomMine = generaRandomMinMax(1, dimensioneCampo); // il N RANDOM DENTRO IL CICLO
    if (!numeriMine.includes(numeriRandomMine)) {
        numeriMine.push(numeriRandomMine);
    }
}
console.log(numeriMine);
while (numeriUtente.length < tentativiMax) { // lunghezza
    var inputUtente = parseInt(prompt("inserisci un un numero da 1 a 100"));
    if (!isNaN(inputUtente)) {
        if (!numeriUtente.includes(inputUtente)) { // se l'inputUtente non è incluso andiamo avanti
            if (!numeriMine.includes(inputUtente)) { // se numero untente non è incliso nell'elenco numeri mine allora mine
                numeriUtente.push(inputUtente);
                if (numeriUtente === tentativiMax) {
                    alert('Hai Vinto!')
                }
            } else {
                alert("ESPLODI")
                break;
            }
        } else {
            alert("HAI GIA INSERITO IL NUMERO")
        }
    } else {
        alert ('metti un numero!!!')
    }
}
// FUNZIONI
function sceltaDifficolta(){
    var decidiDifficolta = parseInt(prompt('decidi livello difficoltà: 1, 2 o 3'));
    if (!isNaN(decidiDifficolta)) {
        switch (decidiDifficolta) {
            case 1:
                dimensioneCampo = 100;
                break;
            case 2:
                dimensioneCampo = 80;
                break;
            case 3:
                dimensioneCampo = 17;
                break;
            default:
                dimensioneCampo = 100;
        }
    } else {
        alert ('inserisci un  numero da 1 a 3');
    } return dimensioneCampo;
}
// funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
function generaRandomMinMax(min, max) {
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
