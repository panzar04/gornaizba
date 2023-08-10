const express = require('express');
const router = express.Router();
const Kazanie = require('../models/kazanie');

const ExpressError = require('../utils/ExpressError');

// router.use((req, res, next) => {
//     console.log(req.session)
//     res.locals.currentUser = ;
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     next();
// })const router = require("express").Router();



// router.route('/2010').get(async(req, res) => {
//     const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
//     const kazania = await Kazanie.find({}).sort({data: 1});
//     res.render('kaz/10', { monthNames,kazania, title: 'Nauczanie (2010) | Górna Izba' })
// });
router.route('/2011').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/11', { monthNames,kazania, title: 'Nauczanie (2011) | Górna Izba' })
});
router.route('/2012').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/12', { monthNames,kazania, title: 'Nauczanie (2012) | Górna Izba' })
});
router.route('/inne').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: -1});
    res.render('kaz/wczesniej', { monthNames,kazania, title: 'Nauczanie (inne) | Górna Izba' })
});
router.route('/2022').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/22', { monthNames,kazania, title: 'Nauczanie (2022) | Górna Izba' })
});
router.route('/2013').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/13', { monthNames,kazania, title: 'Nauczanie (2013) | Górna Izba' })
});
router.route('/2014').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/14', { monthNames,kazania, title: 'Nauczanie (2014) | Górna Izba' })
});
router.route('/2015').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/15', { monthNames,kazania, title: 'Nauczanie (2015) | Górna Izba' })
});
router.route('/2016').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/16', { monthNames,kazania, title: 'Nauczanie (2016) | Górna Izba' })
});
router.route('/2017').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/17', { monthNames,kazania, title: 'Nauczanie (2017) | Górna Izba' })
});
router.route('/2018').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/18', { monthNames,kazania, title: 'Nauczanie (2018) | Górna Izba' })
});
router.route('/2019').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/19', { monthNames,kazania, title: 'Nauczanie (2019) | Górna Izba' })
});
router.route('/2020').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/20', { monthNames,kazania, title: 'Nauczanie (2020) | Górna Izba' })
});
router.route('/2021').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/21', { monthNames,kazania, title: 'Nauczanie (2021) | Górna Izba' })
});
router.route('/2023').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/23', { monthNames,kazania, title: 'Nauczanie (2023) | Górna Izba' })
});
router.route('/2024').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/24', { monthNames,kazania, title: 'Nauczanie (2024) | Górna Izba' })
});
router.route('/2025').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/25', { monthNames,kazania, title: 'Nauczanie (2025) | Górna Izba' })
});
router.route('/2026').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/26', { monthNames,kazania, title: 'Nauczanie (2026) | Górna Izba' })
});
router.route('/2027').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/27', { monthNames,kazania, title: 'Nauczanie (2027) | Górna Izba' })
});
router.route('/2028').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/28', { monthNames,kazania, title: 'Nauczanie (2028) | Górna Izba' })
});
router.route('/2029').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/29', { monthNames,kazania, title: 'Nauczanie (2029) | Górna Izba' })
});
router.route('/2030').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/30', { monthNames,kazania, title: 'Nauczanie (2030) | Górna Izba' })
});
router.route('/2031').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/31', { monthNames,kazania, title: 'Nauczanie (2031) | Górna Izba' })
});
router.route('/2032').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/32', { monthNames,kazania, title: 'Nauczanie (2032) | Górna Izba' })
});
router.route('/2033').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/33', { monthNames,kazania, title: 'Nauczanie (2033) | Górna Izba' })
});
router.route('/2034').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/34', { monthNames,kazania, title: 'Nauczanie (2034) | Górna Izba' })
});
router.route('/2035').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/35', { monthNames,kazania, title: 'Nauczanie (2035) | Górna Izba' })
});
router.route('/2036').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/36', { monthNames,kazania, title: 'Nauczanie (2036) | Górna Izba' })
});
router.route('/2037').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/37', { monthNames,kazania, title: 'Nauczanie (2037) | Górna Izba' })
});
router.route('/2038').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/38', { monthNames,kazania, title: 'Nauczanie (2038) | Górna Izba' })
});
router.route('/2039').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/39', { monthNames,kazania, title: 'Nauczanie (2039) | Górna Izba' })
});
router.route('/2040').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/40', { monthNames,kazania, title: 'Nauczanie (2040) | Górna Izba' })
});
router.route('/2041').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/41', { monthNames,kazania, title: 'Nauczanie (2041) | Górna Izba' })
});
router.route('/2042').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/42', { monthNames,kazania, title: 'Nauczanie (2042) | Górna Izba' })
});
router.route('/2043').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/43', { monthNames,kazania, title: 'Nauczanie (2043) | Górna Izba' })
});
router.route('/2044').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/44', { monthNames,kazania, title: 'Nauczanie (2044) | Górna Izba' })
});
router.route('/2045').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/45', { monthNames,kazania, title: 'Nauczanie (2045) | Górna Izba' })
});
router.route('/2046').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/46', { monthNames,kazania, title: 'Nauczanie (2046) | Górna Izba' })
});
router.route('/2047').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/47', { monthNames,kazania, title: 'Nauczanie (2047) | Górna Izba' })
});
router.route('/2048').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/48', { monthNames,kazania, title: 'Nauczanie (2048) | Górna Izba' })
});
router.route('/2049').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/49', { monthNames,kazania, title: 'Nauczanie (2049) | Górna Izba' })
});
router.route('/2050').get(async(req, res) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('kaz/50', { monthNames,kazania, title: 'Nauczanie (2050) | Górna Izba' })
});


router.route('/').get(function (req, res) {
    someAsyncFunction(function(err, result) {
        if (err) throw err; // Handle this error
    })
});


router.use(async (err, req, res, next) => {
    const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia'];
    const data = new Date().getFullYear() + '';
    const obecnyRok = data.slice(2, 4);
    const kazania = await Kazanie.find({}).sort({data: 1});
    res.render('nauczanie', { kazania, obecnyRok, Kazanie, monthNames, title: 'Nauczanie | Górna Izba'})
});

// router.use(function(req, res, next) {
//     // respond with html page
    
//     const err = 'Nie możemy znaleźć takiej strony!';
//     res.render('error', {err, title: 'Error | Górna Izba' })
    
//   });


module.exports = router;