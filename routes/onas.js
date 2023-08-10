const express = require('express');
const router = express.Router();

const ExpressError = require('../utils/ExpressError');

router.route('/').get((req, res) => {
    res.render('../dir/o_nas0', { title: 'O nas | Górna Izba' })
});

router.route('/kim_jestesmy').get((req, res) => {
    res.render('../dir/o_nas0', { title: 'O nas | Górna Izba' })
});

router.route('/w_co_wierzymy').get((req, res) => {
    res.render('../dir/o_nas1', { title: 'O nas | Górna Izba' })
});

router.route('/liderzy').get((req, res) => {
    res.render('../dir/o_nas3', { title: 'O nas | Górna Izba' })
});

router.route('/historia').get((req, res) => {
    res.render('../dir/o_nas2', { title: 'O nas | Górna Izba' })
});

// router.route('/sluzby').get((req, res) => {
//     res.render('../dir/o_nas4', { title: 'O nas | Górna Izba' })
// });
router.all('*', (req, res, next) => {
    next(new ExpressError('Nie możemy znaleźć takiej strony!', 404))
});

router.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Ojej! Coś poszło nie tak!'
    res.status(statusCode).render('error', { err, title: 'Error | Górna Izba'})
});

module.exports = router;