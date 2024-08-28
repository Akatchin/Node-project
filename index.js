const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const admin = require('./routes/admin');
const path = require('path');
const mongoose = require('mongoose');

// Configurações
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
        app.set('views', './views');
    //Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/blogapp')
        .then(() => {
            console.log("Conectado ao MongoDB");
        })
        .catch((err) => {
            console.log("Falha ao se conectar ao MongoDB: "+err);
        })
    //Public
        app.use(express.static(path.join(__dirname, 'public')));
// Rotas
    app.use('/', admin)
// Outros
const PORT = 2002;
app.listen(PORT, () => {
  console.log('servidor rodadndo1')  
})