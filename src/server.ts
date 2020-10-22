import express from 'express';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

import './database/connecton';
import Orphanage from './models/Orphanage';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World' });
});

app.post('/orphanages', async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions, 
    opening_hours,
    open_on_weekends
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions, 
    opening_hours,
    open_on_weekends
  });

  await orphanagesRepository.save(orphanage);

  return res.status(201).json(orphanage);
});

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
