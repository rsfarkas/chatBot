/*---------- BASIC SETUP ----------*/
var express = require('express'),
  bodyParser = require('body-parser')

var app = express();

// Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Express server
app.use(function(req, res, next) {
  // Setup a Cross Origin Resource sharing
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('incoming request from ---> ' + ip);
  var url = req.originalUrl;
  console.log('### requesting ---> ' + url); // Show the URL user just hit by user
  next();
});

app.set('view engine', 'ejs')
app.use('/', express.static(__dirname + '/public'));
/*---------------------------------*/


/*-------------- APP --------------*/


  // ROUTERS
  app.get('/', function(req, res){
      res.render('index.ejs', {})
  });

  // app.post('/guests', function(req, res){
    // console.log(req.body);
    // guests.save(req.body, function(err, result){
      // if (err) return console.log(err);
      // console.log('saved to database')
      // res.redirect('/')
    // });
  // });
  

  var PORT = 3000;
  app.listen(PORT, function(){
    console.log('Express server is running at ' + PORT);
  });

