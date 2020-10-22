import express from 'express';

import './database/connecton';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started')
});

/*
 Formas de manipulação de banco de dados:
  1 -> Driver Nativo;
      Permite executar as querys direto pelo node, porém necessita escrever no 
    mesmo formato do banco.

  2 -> Query Builder;
      Escreve as querys com javascript. Exemplo o knexjs.

  3 -> ORM.
      Teremos classes do JS que simbolizarão tabelas do banco de dados. 
*/
