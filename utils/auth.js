module.exports = (req, res, next) => {
    if (req.session.logged_in) {
        return next();
    }
    return res.redirect('/login')
}