// const Post = require('./models/post');
// const ExpressError = require('./utils/ExpressError');
// req.flash('error', 'Żeby to zrobić musisz się zalogować!');
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        
        return res.redirect('/login');
    }
    next();
}


module.exports.notWorking = (req, res, next) => {
res.redirect('/');
}

