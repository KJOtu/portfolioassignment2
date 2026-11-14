let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  // my projects
  const Projectlist = [
    {name: 'Graphic design', description: "I've created many posters and videos for various projects with Adobe software."},
    {name: 'Network security', description: "I've conducted various network security tasks before with Kali Linux."},
    {name: 'Web design', description: 'I have designed this portfolio with Express, EJS and Bootstrap.'},
    {name: 'Cloud networking', description: 'I am pursuing a cloud networking certification with Azure.'},
    {name: 'Managerial Finance', description: 'I am experienced in various techniques to manage cash flows in Excel.'}
  ];
  // send the projects to the view
  res.render('projects', {
    title: 'Projects',
    Projectlist: Projectlist
  });
});
/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
