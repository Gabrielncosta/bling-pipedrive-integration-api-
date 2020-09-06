import { Router } from 'express';
import opportunityRouter from './opportunity.routes';

const routes = Router();

routes.use('/', opportunityRouter);

export default routes;
