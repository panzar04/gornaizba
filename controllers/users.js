const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register', { title: 'Rejestracja | Górna Izba'});
}

module.exports.register = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Zarejestrowano!');
            res.redirect('/admin');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('./users/login', { title: 'Login | Górna Izba'})
}

module.exports.login = (req, res) => {
    req.flash('success', 'Zalogowano!');
    const redirectUrl = req.session.returnTo || '/admin';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout(function(err) {
        if (err) { 
          return next(err); 
          }
      req.flash('success', "Goodbye!");
        res.redirect('/');
      });
    };
    
module.exports.deleteAccount = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.redirect('/aktualnosci');
}
