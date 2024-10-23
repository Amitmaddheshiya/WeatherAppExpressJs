const express =  require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

// Handlebars
const templatePath = path.join(__dirname, '../templates/views');
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(path.join(__dirname, '../templates/partials'));


// Serve static files
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));


app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/weather', (req, res) => {
    res.render('weather');
})

app.get('*', (req, res) => {
    res.render('404error');
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});