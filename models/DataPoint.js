const mongoose = require('mongoose');

var sys = require(__dirname + '/../config/System');
var db = mongoose.connect(sys.db_uri, {useMongoClient: true });
mongoose.Promise =require('bluebird');

const Schema = mongoose.Schema;

const dataSchema = new Schema({
		names: { type: String},
    phone: String,
    date: String,    
    source: Object,
		device: Object,
		noOfPhotos: String,
		device: Object,
		connection: String,
		smsTexts: Array,
    callDetails: Array,
    date: Date
});

module.exports = mongoose.model('DataPoint', dataSchema);
