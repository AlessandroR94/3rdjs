/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

let crazySum = function (numero1, numero2) {
  if (numero1 === numero2 ) {
  return (numero1 + numero2) * 3
  } else {
  return numero1 + numero2
}
}

console.log(crazySum(8,8))

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let boundary = function (num1) {
  if ((20 > num1 && num1 <= 100) || num1 === 400) {
    return true
  } else {
    return false
  }
}

console.log(boundary(180))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let reverseString = function (contrario) {
  return contrario.split('').reverse('').join('')
}

console.log(reverseString('Mirandola'))
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

let upperFirst = function (stringa) {
  return stringa.charAt(0).toUpperCase()
}

console.log(upperFirst('paolo'))


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

let giveMeRandom = function (n) {
  let randomNumber = []
  for (let i = 0; i < n; i++) {
    randomNumber.push(Math.floor(Math.randoma() * 10))
  }
  return randomNumber 
}

console.log(giveMeRandom(8))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let area = function (l1, l2) {
  return (l1 * l2) / 2 
} 
let risultatoArea = area (20, 25)

console.log(risultatoArea)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

let crazyDiff = function(num) {
  if (num > 19) {
    return Math.abs (num - 19) * 3
  } else {
    return Math.abs(num - 19)
  }
  }

  console.log(crazyDiff(83))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

let check3and7 = function (numPos) {
  if (numPos >= 0 && (numPos % 3 === 0 || numPos % 7 === 0)) {
    return true
  } else {
    return false
  }
}

console.log(check3and7(87))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

let cutString = function(stringaTagliata) {
  return stringaTagliata.substring (1, stringaTagliata.length -1)
}

console.log(cutString('Mirandola'))
