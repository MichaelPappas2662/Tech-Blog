
const redirect = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/redirect');
  } else {
    next();
  }
};

module.exports = redirect;