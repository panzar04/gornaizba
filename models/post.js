const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const monthNames = [
//     'Stycznia', 'Lutego', 'Marca',
//     'Kwietnia', 'Maja', 'Czerwca', 'Lipca',
//     'Sierpnia', 'Września', 'Października',
//     'Listopada', 'Grudnia'
//     ]; 

//     const d = getDate();
//     const m = monthNames[getMonth()];
//     const y = getFullYear();

//     const taData = `${d} ${m} ${y}`
    

const PostSchema = new Schema({
    tytul: {type:String,required:true},
    tekst: String,
    autor: String,
    data: { type: Date, default: Date.now() },
    zdjecie: String,
    alt: String,    
    pdf: String
});

module.exports = mongoose.model('Post', PostSchema)