var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var urlList;

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/setList', function (req, res) {
    urlList = [];

    if(req.query.url == undefined) res.send('실패');
    else{
      for(var i = 0; i < req.query.url.length; i++){
        urlList.push(req.query.url[i]);
      }
  
      console.log(urlList);
      
      res.send('저장완료');
    }
});

app.get('/getList', function (req, res) {
    res.render('index.ejs', {
        pagetitle: 'Linker',
        urls: urlList
    });
});

app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});