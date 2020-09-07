import { Request, Response } from 'express';

import PipedriveService from '../services/PipedriveService';
import BlingService from '../services/BlingService';
import OrderRepository from '../repositories/OrderRepository';

import HttpResponse from '../helpers/protocols/HttpResponse';

export default class OpportunityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const orderRepository = new OrderRepository();

    const orders = await orderRepository.index();
    return response.json(orders);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const Pipedrive = new PipedriveService();
    const Bling = new BlingService();

    const wonDeals = await Pipedrive.execute();

    const orders = await Bling.execute(wonDeals);

    return response.json(orders);
  }
}
