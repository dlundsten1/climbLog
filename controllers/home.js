/**
 * GET /
 * Home page.
 */
exports.home = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.hyperspace = (req, res) => {
    res.render('hyperspace', {
        title: 'Landing Page'
    });
};

exports.forty = (req, res) => {
    res.render('forty', {
        title: 'Landing Page'
    });
};

