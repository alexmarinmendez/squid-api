const { Router } = require('express');
const router = Router();
const { getCharacters } = require('../../controllers/characters')

router.get('/', getCharacters);

module.exports = router;