import { Request, Response } from "express";
import { create, fetch } from './SnippetsController';
import Constants from '../../constants';
// import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: '/api/v1/snippets',
    method: 'get',
    handler: [
        async ({ query }: Request, res: Response ) => {
            const result = await fetch(query);
            res.status(200).send(result);
        }
    ]
  },
  {
    path: "/api/v1/snippets",
    method: "post",
    handler: [
      async ({ body }: Request, res: Response) => {
        console.log('==========', body)
        // TODO: add some processing to it. break it from here to new service.
        const result = await create(body);
        res.status(200).send(Constants.consts.post.success);
      }
    ]
  }
];
