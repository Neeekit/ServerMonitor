var mongoose = require('mongoose');

var statSchema = mongoose.Schema({
    cpu: {
        type: Number,
        required: true
    },
    memory: {
        type: Number,
        required: true
    },
    disk_used: {
        type: Number,
        required: true
    },
    disk_available: {
        type: Number,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('stat', statSchema);