// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà:
//  marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati:
//  nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.




const automobili = [
  { marca : 'audi',  modello: 'q8',  alimentazione: 'benzina' },
  { marca : 'mercedes',  modello: 'gle',  alimentazione: 'elettrico' },
  { namarcame : 'alfa',  modello: 'stelvio',  alimentazione: 'benzina' },
  { marca : 'lambo',  modello: 'urus',  alimentazione: 'gpl' },
  { marca : 'bugatti',  modello: 'chiron',  alimentazione: 'diesel' },
  { marca : 'mada',  modello: 'mada9',  alimentazione: 'metano' },
  { marca : 'meclaren',  modello: 'q8',  alimentazione: 'benzina' },
  { marca : 'toyota',  modello: 'gle',  alimentazione: 'diesel' },
  { namarcame : 'mitsubitshi',  modello: 'stelvio',  alimentazione: 'diesel' },
  { marca : 'cargo',  modello: 'urus',  alimentazione: 'diesel' },
  { marca : 'nissan',  modello: 'chiron',  alimentazione: 'diesel' },
  { marca : 'honda',  modello: 'mada9',  alimentazione: 'diesel' },
];


// Restituiscimi gli oggetti che contengono l'alimentazione "benzina"
function checkBenzin(car) {
  return car.alimentazione.includes('benzina');
}
// Restituiscimi gli oggetti che contengono l'alimentazione "disel"
function checkDisel(car) {
  return car.alimentazione.includes('diesel');
}

// Dichiarazione array e mappa gli array con 
const carsDisel = automobili.filter(checkDisel)

// Dichiarazione array e mappa gli array con 
const carsBenzin = automobili.filter(checkDisel)

console.log(carsDisel);






















