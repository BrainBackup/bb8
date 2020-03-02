import { Request, Response } from "express";
import Constants from '../../constants';
import { fetch } from './AuthController';

export default [
    {
        path: '/auth/login/success',
        method: 'get',
        handler: [
            async ({ query }: Request, res: Response) => {
                // const result = await fetch(query);
                res.status(200).send('result');
            }
        ]
    },
    {
        path: '/auth/twitter',
        method: 'get',
        handler: [
            async ({ query }: Request, res: Response) => {
                const result = await fetch(query);
                res.status(200).send('result');
            }
        ]
    },
    {
        path: '/auth/twitter/redirect',
        method: 'get',
        handler: [
            async ({ query }: Request, res: Response) => {
                // const result = await fetch(query);
                res.status(200).send('result');
            }
        ]
    }
];
