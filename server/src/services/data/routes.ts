import { Request, Response } from "express";
import { saveData, fetchData } from "./DataController";
// import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: "/api/v1/save",
    method: "post",
    handler: [
      async ({ body }: Request, res: Response) => {
        console.log('==========', body)
        // TODO: add some processing to it. break it from here to new service.
        const result = await saveData(body);
        // res.status(200).send('body');
        res.status(200).send(body);
      }
    ]
  },
  {
      path: '/api/v1/snippets',
      method: 'get',
      handler: [
          async ({ query }: Request, res: Response ) => {
              console.log('query for snippets', query);
              const result = await fetchData(query);
              res.status(200).send(result);
          }
      ]
  }
];
