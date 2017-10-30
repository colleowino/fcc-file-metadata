var express = require('express');
var multer = require('multer')
var upload = multer({dest: './tmp'});
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.post('/', upload.single('myFile'), function(req, res){
	res.render('form',{filesize: req.file.size})
});

app.get('/', function(req, res){
	res.render('form');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
