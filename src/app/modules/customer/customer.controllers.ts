import { Request, Response } from "express";
import { CustomerServices } from "./customer.services";

/**
 * @Method POST
 * @Desc Create Customer
 * @Return Data
 */
const createCustomer = async (req: Request, res: Response) => {
  const result = await CustomerServices.customerSaveToDB(req.body);
  res.send(result);
};

export const CustomerControllers = {
  createCustomer,
};
