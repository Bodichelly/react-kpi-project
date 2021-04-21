import { Router } from 'express';

const router = Router();

router
  .post('/address', (req, res) => res.send(200))
  .post('/name', (req, res) => res.send(200))
  .post('/notary', (req, res) => res.send(200));

export default router;
