// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, 
// per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.




const persone = [
  { nome : 'audi',  cognome: 'q8',  eta: 4 },
  { nome : 'mercedes',  cognome: 'gle',  eta: 19 },
  { nome : 'audi',  cognome: 'q8',  eta: 3 },
  { nome : 'mercedes',  cognome: 'gle',  eta: 10 },
  { nome : 'alfa',  cognome: 'stelvio',  eta: 80 },
  { nome : 'lambo',  cognome: 'urus',  eta: 25 },
  { nome : 'bugatti',  cognome: 'chiron',  eta: 36 },
  { nome : 'mada',  cognome: 'mada9',  eta: 75 },
  { nome : 'mada',  cognome: 'mada9',  eta: 18 },
];


const arrayCanDrive = persone.filter(canDrive)
console.log(arrayCanDrive)

function canDrive(etaToDrive) {
  return etaToDrive.eta >= 18 && etaToDrive.eta <= 75;
}

