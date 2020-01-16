import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.q) {
    throw new HTTP400Error("Missing q parameter");
  } else {
    next();
  }
};
export const checkCreateSnippetsParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.menuItemId || !req.body.saveCodeSnippet || !req.body.pageUrl) {
    throw new HTTP400Error("Missing parameter");
  } else {
    next();
  }
};
