const express =  require('express');
const app =  express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname,'./dist');
const view = path.join(__dirname,'./templats/views');
const parti = path.join(__dirname,'./templats/partials');


 app.set('view engine', 'hbs');
 app.set('views',view);
 hbs.registerPartials(parti);



app.use(express.static(staticPath));

 app.get('/', function (req, res) {
    res.render('index')
  })
  app.get('/home', function (req, res) {
    res.render('index')
  })
  app.get('/about', function (req, res) {
    res.render('index')
  })
  app.get('/contact', function (req, res) {
    res.render('index')
  })
  app.get('/work', function (req, res) {
    res.render('index')
  })
  app.get('*',(req,res)=>{
    res.render('error');
    })
  
    app.listen(port,()=>{
      console.log(`ok done ${port}`)
   });