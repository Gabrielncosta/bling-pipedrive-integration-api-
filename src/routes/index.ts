import { Router } from 'express';
import opportunityRouter from './opportunity.routes';

const routes = Router();

routes.use('/pipedrive', opportunityRouter);

export default routes;
