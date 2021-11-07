const { conn } = require('../db');

const { bulkCreateCharacters } = require('./charactersLoader');

function resetDb(req, res) {
    conn.sync({ force: true })
        .then(async () => await bulkCreateCharacters())
        .then(res.send('DB reset successfully'))
        .catch(e => console.log('ERROR :( ' + e));
}

module.exports = { resetDb };