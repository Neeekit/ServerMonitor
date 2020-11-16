let router = require('express').Router();
var statController = require('../controllers/statController');

router.route('/stat')
    .get(statController.get)
    .post(statController.add);

router.route('/stat/:ip&:hours')
    .get(statController.getByIpAndHours);

router.route('/ip')
    .get(statController.getUniqueIp);

module.exports = router;