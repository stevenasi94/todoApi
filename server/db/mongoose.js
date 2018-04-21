var mongoose = require ("mongoose");
// var {MONGODB_URI} = require("../config/config").MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || "mongodb://stevenasi:stevmirna33@ds121225.mlab.com:21225/stevenasi");

module.exports = {mongoose}