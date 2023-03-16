const express = require('express')
const app = express();
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const port = 8080;


// get static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname = 'public/css'))
app.use('/img', express.static(__dirname = 'public/img'))
app.use('/js', express.static(__dirname = 'public/js'))


// template engine
app.set('views', 'views');
app.set('view engine', 'ejs');


// handlebar template engine
// const handlebars = exphbs.create({defaultLayout:'main', extname:'.hbs'});
//   app.engine('.hbs',handlebars.engine);
//   app.set('view engine', '.hbs');


app.use(bodyParser.urlencoded({ extended:true}))


// routes
const newsRouter = require('./routes/router.js');

app.use('/', newsRouter)






app.listen(port, ()=>{
 console.log(`server is listening on port ${port}`)
})