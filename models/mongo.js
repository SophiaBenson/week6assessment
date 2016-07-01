var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoModelsSchema = new Schema({
  alias: String,
  first_name:String,
  last_name: String,
  city: String,
  power_name: String
});

var heroes = mongoose.model('Heroes', mongoModelsSchema);
module.exports = heroes;
