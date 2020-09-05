import { Request, Response } from 'express';

import PipedriveService from '../services/PipedriveService';
import BlingService from '../services/BlingService';
import OrderRepository from '../repositories/OrderRepository';

export default class OpportunityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const orderRepository = new OrderRepository();

    const orders = await orderRepository.index();
    return response.json(orders);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const Pipedrive = new PipedriveService();
    const Bling = new BlingService();
    const orderRepository = new OrderRepository();

    const wonDeals = await Pipedrive.execute();

    const orders = await Bling.execute(wonDeals);

    orders.map(async order => {
      await orderRepository.create(order);
    });

    return response.json({ ok: true });
  }
}
