import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import {
  ReqBody,
  ReqParams,
  ReqQuery,
  Resbody,
} from "../../interfaces/customRequest";

import { listPersonsByTypeService } from "../../services/persons/listPersonsByType.service";

const listPersonsByTypeController = async (req: Request, res: Response) => {
  console.log(req);
  const type = req.query.type as unknown as string;

  const persons = await listPersonsByTypeService(type);

  return res.status(200).json(instanceToInstance(persons));
};

export { listPersonsByTypeController };
