Stat = require('./statModel');

exports.add = function (req, res) {
    var stat = new Stat();
    stat.cpu = req.body.cpu;
    stat.memory = req.body.memory;

    stat.save(function (err) {
        if (err) res.json(err);
        res.json({
            data: stat
        });
    });
};