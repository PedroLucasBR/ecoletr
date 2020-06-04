import express from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(routes);

app.use(cors());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

//Anotações

//Rota: Endereço completo da requisição
//Recurso: Qual entidade estamos acessando no sistema

//Chamadas HTTP
//GET: Buscar uma ou mais informações no backend
//POST: Criar uma nova informação no backend
//PUT: Atualizar uma informação existente no backend
//DELETE: Remover uma informalção do backend

//Tipos de parâmetros HTTP
//Request Param: Parâmetros que vêm na própria rota, que identificam um recurso
//Query Param: Parâmetros que vêm na própria rota, geralmente opsionais, para filtros, paginação, entre outros
//Request Body: Parâmetros para criação e atualização de informações