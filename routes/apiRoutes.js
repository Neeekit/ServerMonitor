let router = require('express').Router();
var statController = require('../controllers/statController');

router.route('/stat')
    .get(statController.get) // Get all stats
    .post(statController.add); // Save new stat

router.route('/stat/:ip&:hours')
    .get(statController.getByIpAndHours); // Get stat for certain ip for last n hours

router.route('/ip')
    .get(statController.getUniqueIp); // Get all unique ip addresses

module.exports = router;