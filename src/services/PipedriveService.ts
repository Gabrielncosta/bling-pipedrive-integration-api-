import api from '../config/pipedriveApi';

class PipedriveService {
  public async execute(): Promise<Array<string>> {
    const deals = await api.get('/deals', {
      params: {
        status: 'won',
        api_token: process.env.API_TOKEN,
      },
    });

    const { data } = deals.data;

    return data;
  }
}

export default PipedriveService;
