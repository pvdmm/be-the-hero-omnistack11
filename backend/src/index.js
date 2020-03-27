const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
// Aceitar JSON no body do request
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP;
 * GET: buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * Query: parâmetros nomeados enviados na rota após o ? (Filtro, paginação)
  *     request.query
  * Route Params: Parâmetros utilizados para identificar recursos
  *     rota/:id
  *     request.params
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  *     request.body
  */

  /**
   *  Driver: SELECT * FROM table
   * Query Builder: table('users').select('*').where();
   */
