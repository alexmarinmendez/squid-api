const { Character } = require('../db');

async function getCharacters(req, res) {
    try {
        const characters = await Character.findAll()
        return res.send(characters);
    } catch (err) {
        console.log('ERROR in getCharacters', err);
    }
}

module.exports = {
    getCharacters,
}