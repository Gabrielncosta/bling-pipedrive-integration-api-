import { create } from 'xmlbuilder2';
import api from '../config/blingApi';
import OrderRepository from '../repositories/OrderRepository';
import AppError from '../errors/AppError';

export interface IPerson {
  name: string;
}
export interface IDeal {
  id: number;
  title: string;
  value: number;
  products_count?: number;
  user_id: number;
  org_name?: string;
  person_id: IPerson;
}

export interface IResponse {
  numero: string;
  idPedido: number;
  codigos_rastreamento?: Array<string | number>;
  volumes?: string | number;
}

class BlingService {
  public async execute(wonDeals: Array<IDeal>): Promise<Array<IResponse>> {
    const orderRepository = new OrderRepository();
    const blingOrders = wonDeals.map(async wonDeal => {
      const obj = {
        pedido: {
          cliente: {
            nome: wonDeal.person_id.name,
          },
          itens: {
            item: {
              codigo: wonDeal.id,
              descricao: wonDeal.title,
              qtde: wonDeal.products_count,
              vlr_unit: wonDeal.value,
              un: 'un',
            },
          },
        },
      };

      const doc = create({ version: '1.0', encoding: 'UTF-8' }, obj);

      let xml = doc.end();

      xml = encodeURIComponent(xml);

      const orderExists = await orderRepository.show(wonDeal.id);

      if (orderExists) {
        return;
      }

      const order = await api.post(
        `pedido/json/?apikey=${process.env.API_KEY}&xml=${xml}`,
      );

      if (order.data.retorno.erros) {
        throw new AppError(order.data.retorno.erros[0].erro.msg, 400);
      }

      const orderResponse = order.data.retorno.pedidos[0].pedido;

      if (orderResponse) {
        await orderRepository.create({
          orderId: orderResponse.idPedido,
          orderNumber: orderResponse.numero,
          dealId: wonDeal.id,
          value: wonDeal.value,
          orgName: wonDeal.org_name,
          personName: wonDeal.person_id.name,
        });
      }

      return orderResponse;
    });

    const orders = await Promise.all(blingOrders).then(orderPromise => {
      return orderPromise;
    });

    const filteredOrders = orders.filter(order => {
      return order !== undefined;
    });

    return filteredOrders;
  }
}

export default BlingService;
