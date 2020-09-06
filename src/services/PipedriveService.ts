import api from '../config/pipedriveApi';

import ServiceError from '../errors/ServiceError';

class PipedriveService {
  public async execute(): Promise<Array<string>> {
    const deals = await api.get('/deals', {
      params: {
        status: 'lost',
        api_token: process.env.API_TOKEN,
      },
    });

    const { data } = deals.data;

    if (!data) {
      throw new ServiceError(
        'No deals with status won found on provided Pipedrive account',
        400,
      );
    }

    return data;
  }
}

export default PipedriveService;
