import { Request, Response } from "express";
import { saveData } from "./DataController";
// import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: "/api/v1/save",
    method: "post",
    handler: [
      async (req: Request, res: Response) => {
        console.log('==========', req.body)
        // TODO: add some processing to it. break it from here to new service.
        // const result = await saveData(body);
        res.status(200).send('body');
        // res.status(200).send(body);
      }
    ]
  }
];
