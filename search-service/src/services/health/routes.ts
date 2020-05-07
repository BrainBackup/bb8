import { Request, Response } from 'express';

export default [
    {
      path: '/api/v1/health',
      method: 'get',
      handler: [
          async ({ query }: Request, res: Response ) => {
              const result = { status: 'UP', services: { elastic: { status: 'connected' } } };
              res.status(200).send(result);
          }
      ]
    }
];
