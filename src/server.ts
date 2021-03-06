import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connecton';
import routes from './routes';
import errorHandler from './erros/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

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
