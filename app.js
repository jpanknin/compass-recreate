var express = require('express');
var path = require('path');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.resolve(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: true }));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/home', (req,res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
