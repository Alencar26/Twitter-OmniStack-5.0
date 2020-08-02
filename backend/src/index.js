const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server); // WEB-SOCKET  <== mandar informações em tempo real

// CONECTANDO COM UM BANCO EM NUVEM << https://www.mongodb.com/cloud/atlas
mongoose.connect(
  'mongodb+srv://andre:admin123@cluster0.gesn0.mongodb.net/<dbname>?retryWrites=true&w=majority' ,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true, //adicionei por conta de um erro que estava acusando.
  }
);

// ativando o web socket no node
app.use((request , response , next) => {
    request.io = io;
    return next();
});
app.use(cors());
app.use(express.json()); // IMPORTANTE <== informando o node que será usando json para se comunicar
app.use(routes);

server.listen(3000 , () => {
    console.log('Servidor rodando.');
});
