// Crea un array di oggetti che rappresentino delle persone.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, 
// per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

// Va usato .MAP
// 2: devi creare un nuovo array in cui per ogni oggetto che hai
// ci sia anche la proprieta' maggiorenne: true o false in base all'eta'
// e una proprieta' nome completo
// che abbia sia nome che cognome
// per ognuno di quelli che hai




const people = [
  { nome : 'Gino',  cognome: 'Quadretto',  eta: 4 },
  { nome : 'Ginetta',  cognome: 'Quandante',  eta: 19 },
  { nome : 'Ginina',  cognome: 'Quandino',  eta: 3 },
  { nome : 'Ginettina',  cognome: 'Quasimodo',  eta: 10 },
  { nome : 'Gianginina',  cognome: 'Quarobbo',  eta: 80 },
  { nome : 'Giunotti',  cognome: 'Qualinquo',  eta: 25 },
  { nome : 'Gianbruna',  cognome: 'Quoretto',  eta: 36 },
  { nome : 'Gianluigi',  cognome: 'Qatar',  eta: 75 },
  { nome : 'Giorgio',  cognome: 'Quilando',  eta: 66 },
  { nome : 'Giovanna',  cognome: 'Quilando',  eta: 33 },
  { nome : 'Gioletta',  cognome: 'Quilando',  eta: 28 },
];

const newPeopleArray = people.map((singlePerson) =>{
  singlePerson.nomeCompleto = singlePerson.nome + ' ' + singlePerson.cognome;
  singlePerson.maggiorenne = singlePerson.eta >= 18;
  singlePerson.newProprety = 'skdekdekedluigi ';
  return singlePerson;
});

// console.log(newPeopleArray);

const adults = newPeopleArray.filter((person) =>{
  if (person.maggiorenne === true){
      return true;
  }}

);

console.log(adults);






