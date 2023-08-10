const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const komentarz = require('./komentarz');
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
    

const ArtykulSchema = new Schema({
    tytul: {type:String,required:true},
    tekst: String,
    autor: String,
    data: { type: Date, default: Date.now() },
    zdjecie: String,
    alt: String,    
    pdf: String
    // hidden: {
    //     type: Boolean,
    //     default: false},

    // komentarze: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Komentarz'
    //     }
    // ]
});

// ArtykulSchema.post('findOneAndDelete', async function (doc){
//     if(doc){
//         await komentarz.deleteMany({
//             _id: {
//                 $in: doc.komentarze
//             }
//         })
//     }
// });

module.exports = mongoose.model('Artykul', ArtykulSchema)