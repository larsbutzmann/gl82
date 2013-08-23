if(process.env.NODETIME_ACCOUNT_KEY) {
  require('nodetime').profile({
    accountKey: process.env.NODETIME_ACCOUNT_KEY,
    appName: 'gl82'
  });
}

var application_root = __dirname,
    express = require("express"),
    jade = require('jade'),
    http = require('http');

var app = express();

// Configure server
app.configure(function() {
  app.set('views', __dirname + '/site/views');
  app.set('view engine', 'jade');
  app.use(express.static(__dirname + '/site'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.locals.pretty = true;
  // app.use(express.logger());
  app.use(express.methodOverride());
  app.use(app.router);
  //Show all errors in development
  // app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

// Setup routes
require("./routes")(app);

function startKeepAlive() {
    setInterval(function() {
        var options = {
            host: 'gl82.herokuapp.com',
            port: 80,
            path: '/'
        };
        http.get(options, function(res) {
            res.on('data', function(chunk) {
                try {
                    // optional logging... disable after it's working
                    // console.log("HEROKU RESPONSE: " + chunk);
                } catch (err) {
                    console.log(err.message);
                }
            });
        }).on('error', function(err) {
            console.log("Error: " + err.message);
        });
    }, 60 * 30 * 1000); // load every 30 minutes
}

startKeepAlive();

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});