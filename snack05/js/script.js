

// Creare un array di oggetti di squadre di volley.
// Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
// Generare numeri random al posto delle nelle proprietà:
// punti fatti e falli subiti


const teams = [
    { nome : 'arsenal',  punti: 0,  puntimin : 0 },
    { nome : 'rome',  punti: 0,  puntimin: 0 },
    { nome : 'madrid',  punti: 0,  puntimin: 0 },
    { nome : 'paris',  punti: 0,  puntimin: 0 },
    { nome : 'milan',  punti: 0,  puntimin: 0 },
    { nome : 'inter',  punti: 0,  puntimin: 0 },
  ];


teams.forEach( (punti,puntimin) => {

  teams.punti = Math.floor(Math.random() * 10);
  teams.puntimin = Math.floor(Math.random() * 10);
  console.log(teams);

});


