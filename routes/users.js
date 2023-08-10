const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const { isLoggedIn } = require('../middleware');
const mongoose = require('mongoose');

router.route('/register')
    .get(isLoggedIn, users.renderRegister)
    .post(isLoggedIn, catchAsync(users.register));


// router.route('/register')
//     .get(users.renderRegister)
//     .post(catchAsync(users.register));
router.delete('/register', isLoggedIn, users.deleteAccount)

// router.put('/register', isLoggedIn, async (req, res) => {
//     const { id } = req.params;
//     const user = await User.findByIdAndUpdate(id, { ...req.body.user });
//     req.flash('success', "Proszę o ponowne zalogowanie dla potwierdzenia zmiany.");
//     res.redirect(`/logout`)
// });

router.route('/login')
    .get(users.renderLogin)
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

router.get('/logout', users.logout)

module.exports = router;