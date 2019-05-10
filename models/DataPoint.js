const mongoose = require('mongoose');

var sys = require(__dirname + '/../config/System');
var db = mongoose.connect(sys.db_uri, {useMongoClient: true });
mongoose.Promise =require('bluebird');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
		names: { type: String},
    phone: String,
    date: String,
    smsTexts: Array,
    callDetails: Array,
    source: Object,
    date: Date
});

module.exports = mongoose.model('DataPoint', dataSchema);
