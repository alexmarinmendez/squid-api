const { Character } = require('../db');
const characterDb = require('../data/characters.json')

const bulkCreateCharacters = async() => {
    try {        
        await Character.bulkCreate(characterDb);
    } catch(err){
        console.log('ERROR in bulkCreateCharacters', err);
    }
}

module.exports = {
    bulkCreateCharacters
}
