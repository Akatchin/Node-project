const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();

// Configurações
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
        app.set('views', './views');
    //Mongoose
    
// Rotas

// Outros
const PORT = 2002;
app.listen(PORT, () => {
  console.log('servidor rodadndo1')  
})