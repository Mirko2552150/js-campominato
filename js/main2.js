// SCOPO DEL GIOCO:
// 1. Il computer deve generare 16 numeri casuali tra 1 e 100. ok
// 2. In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. ok
// 3. Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// 4. La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// 5. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// 6. BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
//           Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50

var numeriGeneratiPc = []; // creiamo un array con all'interno
console.log(numeriGeneratiPc);
var contenitoreTentavivi = []; // creiamo un array che conterrà il numero di tentavivi
var contenitoreTentaviviOrdinato = contenitoreTentavivi.sort();

var difficolta = parseInt(prompt("seleziona la difficolta: scegli tra 1 - 2 - 3"));

for (var i = 0; i < 100; i++) { // ciclo per 16 (con i ns numeri generati casualmente dalla nostra funzione) + aggiunto il N di tentativi
        switch (difficolta) { // in base alla difficolta metterà il livello relativo
            case 1:
            var numeriRandom = generaRandom(1, 100);
            var possibilita = 84;
                break;
            case 2: generaRandom(1, 80);
            var possibilita = 64;
                break;
            case 3: generaRandom(1, 50);
            var possibilita = 34;
                break;
            default:
            console.log("non hai selazionato alcuna difficolta");
        }
        if (!numeriGeneratiPc.includes(numeriRandom) && numeriGeneratiPc.length < 16) { // se non cè il numero creato random aggiungilo + con 2 condizioni, una è che non ci sia il numero creato, l'altra è che la lunghezza dell'array sia <16
            numeriGeneratiPc.push(numeriRandom); // aggiungiamo i numeri al nostro array
        }
    }
// CREATO 16 MINE
console.log(numeriGeneratiPc.length);

for (var i = 0; i < possibilita; i++) {
    var tentativi = parseInt(prompt("inserisci un tentativo, seleziona un numero da 1 a 100"));
    if (numeriGeneratiPc.includes(tentativi)) {
        alert("HAI PERSO, FINE DEL GIOCO"); // con il ciclo while SE HAI PERSO non devi continuare LINEA 45
        break
    } else if (!contenitoreTentavivi.includes(tentativi)) {
        contenitoreTentavivi.push(tentativi); // se non c'è il numero lo aggiungi all'arrey dei numero tirati
    } else {
        parseInt(prompt("numero già selezionato, scegline un altro")) // messaggio ripetizione
    }
    console.log(contenitoreTentavivi);
}

// CHIEDERE COME METTERE HAI VINTO ED IL TERMINE DELLE DOMANDE ALLA FINE DEL CICLO (USATO ALERT)

function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
