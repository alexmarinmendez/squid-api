const path = require('path');
const {Router} = require('express');
const resetDb = require('./resetDb');
const characters = require('./characters');

const router = Router();

router.use('/resetdb', resetDb);
router.use('/characters', characters);

router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;
