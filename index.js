const express = require('express');
const app = express();
const routes = require('./controllers/routes');
const path = require('path');
const methodOverride = require('method-override');
const https = require('https');
const fs = require('fs');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));



app.get('/', routes);
app.post('/register', routes);
app.get('/login', routes);
app.post('/login', routes);
app.get('/success', routes);
app.get('/logout', routes);
app.get('/files',routes);
app.post('/upload', routes);
app.get('/files', routes);
app.get('/files/:filename', routes);
app.get('/stl/:filename', routes);
app.delete('/files/:id', routes);
app.get('/print/:filename', routes);


const PORT = process.env.PORT || 8001;
app.listen(PORT,  () => console.log("Server Stated At Port", PORT));
