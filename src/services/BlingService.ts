import { create } from 'xmlbuilder2';
import api from '../config/blingApi';

class BlingService {
  public async execute(wonDeals): Promise<any> {
    const apikey =
      'ee724884e72eb7f157e1a896b8a973c53eccd7b1daab490ff1cd1eb4af19e42e3310eb6d';

    const blingOrders = await wonDeals.map(async wonDeal => {
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

      const order = await api.post(`pedido/json/?apikey=${apikey}&xml=${xml}`);

      const orderResponse = order.data.retorno.pedidos[0].pedido;

      const formattedOrder = {
        orderId: orderResponse.idPedido,
        orderNumber: orderResponse.numero,
        value: wonDeal.value,
        orgName: wonDeal.org_name,
        personName: wonDeal.person_id.name,
      };

      return formattedOrder;
    });

    const orders = Promise.all(blingOrders).then(orderPromise => {
      return orderPromise;
    });

    return orders;
  }
}

export default BlingService;
