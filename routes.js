let router = require('express').Router();
var statController = require('./statController');


// For Test
router.get('/', function(req, res) {
    res.json({
        message: 'OK'
    });
});

router.route('/stat')
    .post(statController.add);

module.exports = router;