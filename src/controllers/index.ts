import db from '../database';
import express, {Request, Response} from 'express';


async function getName(req: Request, res: Response){
    try {
        const data = await db.any('SELECT name FROM public.information');
        console.log('Should be my name:', data[0]['name'])
        res.json(data[0]['name']);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


async function getAbout(req: Request, res: Response){
    try {
        const data = await db.any('SELECT about FROM public.information');
        console.log('Should be my info:', data[0]['about'])
        res.json(data[0]['about']);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export default {getName, getAbout};