let router = require('express').Router();
var statController = require('../controllers/statController');

router.route('/stat')
    .get(statController.get)
    .post(statController.add);

router.route('/stat/:hours')
    .get(statController.getWithinHours)

module.exports = router;