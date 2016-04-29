import { Router } from 'express';
import api from './api';

const router = new Router();

router.route('/stocks').get((req, res) => {
  api.getStockList()
    .then(list => { res.status(200).json(list); })
    .catch(error => { res.status(500).json(error); });
});

router.route('/stock/:id').get((req, res) => {
  api.getStock(req.params.id)
    .then(stock => { res.status(200).json(stock); })
    .catch(error => { res.status(500).json(error); });
});

export default router;
