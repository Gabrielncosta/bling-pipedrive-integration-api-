import api from '../config/pipedriveApi';

class PipedriveService {
  public async execute(): Promise<any> {
    const deals = await api.get('/deals', {
      params: {
        status: 'won',
        api_token: '7bb73d0bcc8f1fc3c93fd92cf4647fc5991b1669',
      },
    });

    const { data } = deals.data;

    return data;
  }
}

export default PipedriveService;
