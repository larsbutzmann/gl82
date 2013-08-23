module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render('index', {
      active: "studium"
    });
  });

  app.get('/studium', function (req, res) {
    res.render('index', {
      active: "studium"
    });
  });

  app.get('/dozenten', function (req, res) {
    res.render('dozenten', {
      active: "dozenten"
    });
  });

  app.get('/seminargruppe', function (req, res) {
    res.render('seminargruppe', {
      active: "seminargruppe"
    });
  });

  app.get('/seminartreffen', function (req, res) {
    res.render('seminartreffen', {
      active: "seminartreffen"
    });
  });

  app.get('/maennertag', function (req, res) {
    res.render('maennertag', {
      active: "maennertag"
    });
  });

};