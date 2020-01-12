import { Request, Response } from "express";
import { getPlacesByName } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response) => {
        const result = await getPlacesByName(query.q);
        res.status(200).send(result);
      }
    ]
  },
  // {
  //   path: "/api/v1/save",
  //   method: "get",
  //   handler: [
  //     async ({ query }: Request, res: Response) => {
  //       console.log('==========', query)
  //       // TODO: add some processing to it. break it from here to new service.
  //       // const result = await getPlacesByName(query.q);
  //       res.status(200).send(query);
  //     }
  //   ]
  // }
];
