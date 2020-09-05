import { Request, Response } from 'express';

import PipedriveService from '../services/PipedriveService';
import BlingService from '../services/BlingService';

export default class OpportunityController {
  public async create(request: Request, response: Response): Promise<Response> {
    const Pipedrive = new PipedriveService();
    const Bling = new BlingService();

    const wonDeals = await Pipedrive.execute();
    const orders = await Bling.execute(wonDeals);

    return response.json({ ok: true });
  }
}
