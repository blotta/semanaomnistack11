const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

// Definicao de quem pode acessar o backend
// app.use(cors({
//     origin: "http://meuapp.com"
// }));

app.use(cors()); // qualquer um

// Avisando que usaremos JSON como request body
app.use(express.json());

// Para melhor organizacao de codigo
app.use(routes);

// servindo
app.listen(3333);