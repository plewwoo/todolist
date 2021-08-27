const path = require('path');
const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors')

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api');

const app = express();

//Template Engines
app.engine('hbs', hbs({ extname: 'hbs' }))
app.set('view engine', 'hbs');

//Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); //เช็คว่าเป็น json
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(cors())
app.use('/', indexRouter)
app.use('/tasks/', apiRouter)

app.listen(3001, () => {
    console.log('listening to port 3001')
});