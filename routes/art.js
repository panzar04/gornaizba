const express = require('express');
const router = express.Router();
const Artykul = require('../models/artykul');
const ExpressError = require('../utils/ExpressError');
const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 




router.route('/2023').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 23;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});

router.route('/2024').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 24;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});

router.route('/2025').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 25;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});

router.route('/2026').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 26;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});

router.route('/2027').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 27;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});

router.route('/2028').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 28;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2029').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 29;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2030').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 30;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2031').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 31;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2032').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 32;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2033').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 33;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2034').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 34;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2035').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 35;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2036').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 36;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2037').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 37;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2038').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 38;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2039').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 39;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});
router.route('/2040').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 40;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});



router.route('/2041').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 41;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2042').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 42;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2043').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 43;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2044').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 44;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2045').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 45;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2046').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 46;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2047').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 47;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2048').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 48;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2049').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 49;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});


router.route('/2050').get(async(req, res) => {
    const artykuls = await Artykul.find({}).sort({data: 1});
    const obecnyRok = 50;
    res.render('../artykuly/artykuly', { obecnyRok, artykuls, monthNames, title: 'Artykuły (2023) | Górna Izba' })
});








// router.route('/').get(function (req, res) {
//     someAsyncFunction(function(err, result) {
//         if (err) throw err; // Handle this error
//     })
// });

router.use(async (err, req, res, next) => {
    const artykuls = await Artykul.find({}).sort({data: 1});    
    const data = new Date().getFullYear() + '';
    const obecnyRok = data.slice(2, 4);
    //const obecnyRok = 25;
    res.render('../artykuly/artykuly', { artykuls, obecnyRok, monthNames, title: 'Artykuły | Górna Izba'})
});

// router.use(function(req, res, next) {
//     // respond with html page
    
//     const err = 'Nie możemy znaleźć takiej strony!';
//     res.render('error', {err, title: 'Error | Górna Izba' })
    
//   });

module.exports = router;