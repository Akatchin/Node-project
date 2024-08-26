const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aprendendo')
.then(() => console.log("conectado com sucesso"))
.catch((err) => console.log("ocorreu um erro ao se conectar "+err))

//Model - Usuários

const userSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
        require: true
    }
})

mongoose.model('usuarios', userSchema);

const Thiago = mongoose.model('usuarios');

new Thiago({
    nome: "Thiago",
    sobrenome: "Henrique",
    email: "email@outlook.com",
    idade: 22,
    pais: "Brasil"
}).save()