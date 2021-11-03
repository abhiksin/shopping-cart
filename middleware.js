const isLoggedIn = (req,res,next) => {
    //Authenticate function check it is logged in or not
    if (!req.isAuthenticated()) {
        req.flash('error', 'You Need To Login First');
        return res.redirect('/login');
    }
    next();
}


module.exports = {
    isLoggedIn
}