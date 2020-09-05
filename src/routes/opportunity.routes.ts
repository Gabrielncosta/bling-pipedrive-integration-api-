import { Router } from 'express';

import OpportunityController from '../controllers/OpportunityController';

const opportunityRouter = Router();
const opportunityController = new OpportunityController();

opportunityRouter.get('/', opportunityController.create);

export default opportunityRouter;
