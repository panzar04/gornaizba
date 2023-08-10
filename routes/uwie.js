const express = require('express');
const router = express.Router();
const { isLoggedIn, notWorking } = require('../middleware');


const ExpressError = require('../utils/ExpressError');

router.route('/').get((req, res) => {
    res.render('../dir/uwie0', { title: 'Uwielbienie | Górna Izba' })
});

router.route('/o_uwielbieniu').get((req, res) => {
    res.render('../dir/uwie0', { title: 'Uwielbienie | Górna Izba' })
});

// router.route('/jak_uwielbiamy').get((req, res) => {
//     res.render('../dir/uwie1', { title: 'Uwielbienie | Górna Izba' })
// });

// router.route('/nasze_plyty').get(notWorking, (req, res) => {
//     res.render('../dir/uwie2', { title: 'Uwielbienie | Górna Izba' })
// });

router.route('/piesni').get((req, res) => {
    res.render('../dir/uwie3', { title: 'Uwielbienie | Górna Izba' })
});

router.all('*', (req, res, next) => {
    next(new ExpressError('Nie możemy znaleźć takiej strony!', 404))
});

router.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Ojej! Coś poszło nie tak!'
    res.status(statusCode).render('error', { err, title: 'Error | Górna Izba'})
});


module.exports = router;