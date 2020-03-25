const express = require('express')
const app = express();
const routes = require('./src/routes');
const cors = require('cors');
//GET Buscar informacao 
//POST Criar uma informacao
//PUT Alterar uma informaca
//Delete Deletar uma informacao 


/*
Tipos de pârametros:
Query params - parametros nomeados enviados URL (filtros , 
    paginação )
Route params - Parametros utilizados para identificar recursos (depois do ':')
Request body - Corpo da requisição, utilizado pra criar ou alterar recursos
*/
app.use(cors(
 //  { origin: 'http://meusite.com'}
));
app.use(express.json());
app.use(routes);
app.listen(3333);
