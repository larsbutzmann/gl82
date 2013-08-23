var mongoose = require('mongoose');

var Subscriber = new mongoose.Schema({
    timestamp: {type: Date, default: Date.now},
    name: {type: String, default: ""},
    phone: {type: String, default: ""},
    email: {type: String, default: ""}
});

module.exports = mongoose.model('Subscriber', Subscriber);
