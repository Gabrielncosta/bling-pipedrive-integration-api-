import Order, { IOrderModel } from '../schemas/Order';

interface IOpportunity {
  orderId: number;
  orderNumber: string;
  dealId: number;
  value: number;
  orgName?: string;
  personName?: string;
}

interface IOrders {
  _id: IOrderModel['_id'];
  orderId: IOrderModel['orderId'];
  dealId: IOrderModel['dealId'];
  value: IOrderModel['value'];
  orgName?: IOrderModel['orgName'];
  personName?: IOrderModel['personName'];
}

class OrderRepository {
  public async index(): Promise<Array<IOrders>> {
    const orders = await Order.find({});

    return orders;
  }

  public async show(dealId: number): Promise<IOrders | null> {
    const order = await Order.findOne({ dealId });

    return order;
  }

  public async create({
    orderId,
    orderNumber,
    dealId,
    value,
    orgName,
    personName,
  }: IOpportunity): Promise<IOrders> {
    const order = await Order.create({
      orderId,
      orderNumber,
      dealId,
      value,
      orgName,
      personName,
    });

    return order;
  }
}

export default OrderRepository;
