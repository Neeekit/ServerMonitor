var Stat = require('../models/statModel');

exports.add = function (req, res) {
    var stat = new Stat();
    stat.cpu = req.body.cpu;
    stat.memory = req.body.memory;
    stat.disk_used = req.body.disk_used;
    stat.disk_available = req.body.disk_available;
    stat.ip = req.connection.remoteAddress;

    stat.save(function (err) {
        if (err) res.json(err);
        res.json(stat);
    });
};

exports.get = function (req, res) {
    Stat.find({}, function(err, stats) {
        if (err) res.json(err);
        res.json(stats);
    });
};

exports.getWithinHours = function(req, res) {
    var lastHour = new Date();
    lastHour.setHours(lastHour.getHours() - req.params.hours);
    Stat.find({
        created_at : {
            $gt: lastHour
        }
    }).sort({
        created_at: 1
    }).exec(function (err, stats) {
        if (err) res.json(err);
        res.json(stats);
    });
};
