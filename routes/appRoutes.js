let router = require('express').Router();
let path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

module.exports = router;