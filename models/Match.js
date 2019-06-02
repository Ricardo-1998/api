const mongoose = require('mongoose'),
      Schema =  mongoose.Schema;

// Definicion de Coin
let Match = new Schema( {
    id:Long,
    team1: String,
    team2: String,
    points1: Int,
    poinst2: Int,
    fecha: String,
    hora: String,
    ganador:String
});

module.exports = mongoose.model('match',Match)
