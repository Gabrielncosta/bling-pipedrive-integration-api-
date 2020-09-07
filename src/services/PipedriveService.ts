import api from '../config/pipedriveApi';

import AppError from '../helpers/errors/AppError';

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

class PipedriveService {
  public async execute(): Promise<Array<IDeal>> {
    const deals = await api.get('/deals', {
      params: {
        status: 'won',
        api_token: process.env.API_TOKEN,
      },
    });

    const { data } = deals.data;

    if (!data) {
      throw new AppError(
        'No deals with status won found on provided Pipedrive account',
        400,
      );
    }

    return data;
  }
}

export default new PipedriveService();
