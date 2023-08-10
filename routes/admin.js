const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware');
const ExpressError = require('../utils/ExpressError');
const passport = require('passport');
const flash = require('connect-flash');
const catchAsync = require('../utils/catchAsync');
const Kazanie = require('../models/kazanie');
const Artykul = require('../models/artykul');
const users = require('../controllers/users');
// const Post = require('../models/post');

router.get('/', isLoggedIn, (req, res) => {
    res.render('./users/admin', { title: 'Admin | Górna Izba'})
})

// router.get('/login', isLoggedIn, (req, res) => {
//     res.render('/users/login', { title: 'Login | Górna Izba'})
// })

router.get('/pomoc', isLoggedIn, (req, res) => {
    res.render('./users/pomoc', { title: 'Pomoc | Górna Izba'})
})

// router.get('/ustawienia', isLoggedIn, (req, res) => {
//     res.render('./users/ustawienia', { users, title: 'Ustawienia | Górna Izba'})
// })

// router.get('/konta', isLoggedIn, async (req, res) => {
//     //const k = await User.find({});
    
//     res.render('./users/konta', { title: 'Konta | Górna Izba'})
// })

router.get('/kazania', isLoggedIn, async (req, res) => {
    const kazania = await Kazanie.find({});
    res.render('./users/kazania', { kazania, title: 'Nauczanie (admin) | Górna Izba'})
});

router.get('/kazania/new', isLoggedIn, (req, res) => {
    res.render('./users/dodajkazanie', {title: 'Nowe Nauczanie | Górna Izba'});
})

router.post('/kazania', isLoggedIn, async (req, res) => {
    const kazanie = new Kazanie(req.body.kazanie);
    await kazanie.save();
    res.redirect(`/nowekazanie`)
    req.flash('success', 'Dodano pomyślnie!');
})


// problemy
// /kazania/xxx
router.get('/kazania/:id', isLoggedIn, async (req, res) => {
    res.redirect(`/nowekazanie`)
  });



module.exports = router;




