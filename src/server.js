const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const imagesUrl = 'https://image.tmdb.org/t/p/w300';
//Initialization
const app = express();
//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    helpers: {
        concat: function(path_img_movie) {
            return `${imagesUrl}${path_img_movie}`;
        }
    },
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');
//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
//global variables
//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/user.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;