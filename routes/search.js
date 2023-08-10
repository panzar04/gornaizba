const express = require('express');
const router = express.Router();
const path = require('path');
const Fruit = require('../models/kazanie');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate')

// mongoose.connect('mongodb://localhost:27017/gornaizba', {useNewUrlParser: true, useUnifiedTopology:true});
// const db = mongoose.connection;
// db.on('error', error => console.log(error));
// db.once('open', () => (console.log('Connected to Mongoose')));

// router.engine('ejs', ejsMate)
// router.set('view engine', 'ejs');
// router.set('views', path.join(__dirname, 'views'))

router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.use(express.static('public'));

router.get('/', async (req, res) => {
  
    const kazania = await Fruit.find({});
    res.render('../search/home',  
    { title: 'Wyszukaj | Górna Izba', kazania });
});

router.post('/search', async (req, res) => {
    let payload = req.body.payload.trim();
    let search = await Fruit.find({
        $or: [
            {tytul: {$regex: new RegExp(payload+'.*', 'i')}},
            {mowca: {$regex: new RegExp(payload+'.*', 'i')}}
        ]
    }).exec();   
    console.log(payload);
    //Limit
    //search = search.slice(0, 20);
    res.send({payload: search});
});

// router.get('/:id', async (req, res,) => {
//     const kazanie = await Fruit.findById(req.params.id)
//     res.render('../search/show', { kazanie, title: 'Nauczanie | Górna Izba' });
// });

router.get('/:id', async (req, res,) => {
    try {
      const kazanie = await Fruit.findById(req.params.id);
      if (!kazanie) {
        // Handle not found error
        return res.status(404).send('Kazania nie znaleziono');
      }
      // Render the model template with the retrieved data
      res.render('../search/show', { kazanie, title: `${kazanie.tytul + " - " + kazanie.mowca} | Górna Izba` });    
    } catch (err) {
      // Handle other errors
      console.error(err);
      res.status(500).redirect('/home');;
    }
  });



module.exports = router;

