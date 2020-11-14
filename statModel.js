var mongoose = require('mongoose');

var statSchema = mongoose.Schema({
    cpu: {
        type: String,
        required: true
    },
    memory: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

var Stat = module.exports = mongoose.model('stat', statSchema);

module.exports.get = function (callback, limit) {
   Stat.find(callback).limit(limit);
}
