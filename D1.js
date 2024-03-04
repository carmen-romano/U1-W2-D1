/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let dataTypeStringa = "questa è una stringa perché è racchiusa in doppi apici o singoli apici('')|"
let dataTypeNumeroIntero = 8
let dataTypeNumeroFloat = 8.3
let dataTypeBooleano = true
console.log("Esericizio 1| " + dataTypeStringa + dataTypeNumeroIntero + ":questo è un numero intero perché non ha una virgola come ad esempio: " + dataTypeNumeroFloat + " |Il tipo di dato 'booleano' viene cosi definito perché può restituire solo due tipi di valore: 'true' e 'false' : " + dataTypeBooleano)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Carmen"
console.log("Esercizio 2|Il mio nome è:" + myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 12 + 20
console.log("Esercizio 3|La somma è: " + somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log("Esercizio 4| Il valore della variabile 'x' è: " + x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName= "Romano"
console.log("Esercizio 5| Ho riassegnato un nuovo valore alla variabile 'myName':" + myName)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = x - 4
console.log("Esercizo 6| Il risultato della sottrazione è: " + y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1= "john"
let name2= "John"
console.log("Esercizio 7| I due valori sono uguali? " + (name1=== name2 ))
console.log("EXTRA:" + (name1===name2.toLowerCase()))

/* SCRIVI QUI LA TUA RISPOSTA */
