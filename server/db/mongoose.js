var mongoose = require ("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://stevenasi:stevmirna33@ds121225.mlab.com:21225/stevenasi");

module.exports = {mongoose}