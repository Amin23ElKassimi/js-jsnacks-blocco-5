
// Un oggetto rappresenta una finestra di un browser e contiene due campi:
//  un array di tab aperte e un numero che indica l'indice della tab aperta nell'array:
// {
//     "tab": ["Facebook", "GitHub", "Gmail"],
//     "activeTab": 0


const tabs ={
    "tab": ["Facebook", "GitHub", "Gmail", "instagram", "Twitter", "VisualStudio", "Notion", ],
    "activeTab": 0
}

// }
// Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
// Nel caso la tab fosse attiva, deve attivare la successiva.

const socials =  ["Facebook", "instagram", "Twitter", ];


tabs.tab.forEach((element,index) => {
    if (tabs.tab.includes(socials[index])) {
        console.log('trovato social', element)
    }
});





