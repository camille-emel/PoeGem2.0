const fs = require('fs');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch('https://poe.ninja/api/data/itemoverview?league=Settlers&type=SkillGem')
    .then(response => response.json())
    .then(data => {
        fs.writeFile('gemsData.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error('Erreur lors de l\'écriture:', err);
            } else {
                console.log('Données sauvegardées avec succès dans gemsData.json');
            }
        });
    })
    .catch(error => console.error('Erreur:', error));
