async function saveApiData() {
    try {
        const response = await fetch('https://poe.ninja/api/data/itemoverview?league=Settlers&type=SkillGem');
        const data = await response.json();
        
        // Convertir en string JSON avec formatage
        const jsonString = JSON.stringify(data, null, 2);
        
        // Si vous utilisez Node.js, utilisez fs pour sauvegarder
        const fs = require('fs');
        fs.writeFileSync('gems_data.json', jsonString);
        
        console.log('Données sauvegardées dans gems_data.json');
    } catch (error) {
        console.error('Erreur:', error);
    }
}

saveApiData(); 