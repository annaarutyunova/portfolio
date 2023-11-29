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


async function getAge(req: Request, res: Response){
    try {
        const data = await db.any('SELECT age FROM public.information');
        console.log('Should be my age:', data[0]['age'])
        res.json(data[0]['age']);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export default {getName, getAge};