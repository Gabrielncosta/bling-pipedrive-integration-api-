import { Router } from 'express';
import PipedriveService from '../services/PipedriveService';
import BlingService from '../services/BlingService';

const opportunityRouter = Router();

opportunityRouter.get('/', async (request, response) => {
  try {
    const Pipedrive = new PipedriveService();
    const Bling = new BlingService();

    const wonDeals = await Pipedrive.execute();
    const orders = await Bling.execute(wonDeals);

    return response.json({ ok: true });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default opportunityRouter;
