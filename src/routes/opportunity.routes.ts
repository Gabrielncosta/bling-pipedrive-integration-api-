import { Router } from 'express';

import OpportunityController from '../controllers/OpportunityController';

const opportunityRouter = Router();

opportunityRouter.get('/', OpportunityController.create);
opportunityRouter.get('/list', OpportunityController.index);

export default opportunityRouter;
