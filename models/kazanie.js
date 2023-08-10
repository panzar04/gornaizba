const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KazanieSchema = new Schema({
    tytul: String,
    opis: String,
    mowca: String,
    data: { type: Date, default: Date.now },
    audio: String,
    typ: String,
    link: String
});
KazanieSchema.index({'$**': 'text'});
module.exports = mongoose.model('Kazanie', KazanieSchema)