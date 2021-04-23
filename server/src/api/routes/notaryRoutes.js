import { Router } from 'express';
import * as notaryService from '../services/notaryService';

const router = Router();

router
  .get('/', (req, res, next) => notaryService.getAllNotaries()
    .then(data => res.send(data))
    .catch(next))
  .get('/:id', (req, res, next) => notaryService.getNotaryById(req.params.id)
    .then(data => res.send(data))
    .catch(next))
  .post('/:id', (req, res, next) => notaryService.create(req.body)
    .then(data => res.send(data))
    .catch(next))
  .put('/:id', (req, res, next) => notaryService.updateNotaryById(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(next))
  .delete('/:id', (req, res, next) => notaryService.deleteNotaryById(req.params.id)
    .then(data => res.send({ deletedCount: data }))
    .catch(next));

export default router;
