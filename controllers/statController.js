var Stat = require('../models/statModel');

exports.add = function (req, res) {
    var stat = new Stat();
    stat.cpu = req.body.cpu;
    stat.memory = req.body.memory;
    stat.disk_used = req.body.disk_used;
    stat.disk_available = req.body.disk_available;
    stat.ip = req.body.ip;

    stat.save(err => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(stat);
        }
    });
};

exports.get = (req, res) => {
    Stat.find({}, (err, stats) => {
        if (err) {
            res.json(err);
        } else {
            res.json(stats);
        }
    });
};

exports.getUniqueIp = (req, res) => {
    Stat.distinct('ip', (err, ipList) => {
        if (err) {
            res.json(err);
        } else {
            res.json(ipList);
        }
    });
};

exports.getByIpAndHours = (req, res) => {
    var lastHour = new Date();
    lastHour.setHours(lastHour.getHours() - req.params.hours);
    Stat.find({
        ip: req.params.ip,
        created_at : {
            $gt: lastHour
        }
    }).sort({
        created_at: 1
    }).exec((err, stats) => {
        if (err) {
            res.json(err);
        } else {
            res.json(stats);
        }
    });
};
