import express, {Router, Request, Response} from 'express';
const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.send("Go to awesome/applicant to see more information")
});
routes.get('/awesome/applicant', (req: Request, res: Response) => {
    res.send("This page is about Anna")
});

export default routes;