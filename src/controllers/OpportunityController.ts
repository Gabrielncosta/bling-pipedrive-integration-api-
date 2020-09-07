import { Request, Response } from 'express';

import PipedriveService from '../services/PipedriveService';
import BlingService from '../services/BlingService';
import OrderRepository from '../repositories/OrderRepository';

class OpportunityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const orders = await OrderRepository.index();

    return response.json(orders);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const wonDeals = await PipedriveService.execute();

    const orders = await BlingService.execute(wonDeals);

    return response.json(orders);
  }
}

export default new OpportunityController();
