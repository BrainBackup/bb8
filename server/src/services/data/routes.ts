import { Request, Response } from "express";
import { saveData } from "./DataController";
// import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: "/api/v1/save",
    method: "get",
    handler: [
      async ({ query }: Request, res: Response) => {
        console.log('==========', query)
        // TODO: add some processing to it. break it from here to new service.
        const result = await saveData(query);
        res.status(200).send(query);
      }
    ]
  }
];
