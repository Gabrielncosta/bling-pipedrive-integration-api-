import Order from '../schemas/Order';

interface IOrder {
  orderId: number;
  orderNumber: string;
  value: number;
  orgName?: string;
  personName?: string;
}

class OrderRepository {
  public async create({
    orderId,
    orderNumber,
    value,
    orgName,
    personName,
  }: IOrder): Promise<any> {
    const order = await Order.create({
      orderId,
      orderNumber,
      value,
      orgName,
      personName,
    });

    return order;
  }
}

export default OrderRepository;
