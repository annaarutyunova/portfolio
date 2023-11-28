import express, {Router, Request, Response} from 'express';
const routes: Router = express.Router();
import db from '../database';

// routes.get('/', (req: Request, res: Response) => {
//     res.send("Go to awesome/applicant to see more information")
// });
// routes.get('/awesome/applicant', (req: Request, res: Response) => {
//     res.send("This page is about Anna")
// });
routes.get('/', async (req: Request, res: Response) => {
    try {
        const data = await db.any('SELECT name FROM public.information');
        console.log('Should be my name:', data)
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

export default routes;