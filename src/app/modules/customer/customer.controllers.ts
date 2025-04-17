import { Request, Response } from "express";
import { CustomerServices } from "./customer.services";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";

/**
 * @Method POST
 * @Desc Create Customer
 * @Return Data
 */
const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerServices.customerSaveToDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

/**
 * @Method GET
 * @Desc Get All Customers
 * @Return Data
 */
const getAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerServices.getAllCustomersFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

export const CustomerControllers = {
  createCustomer,
  getAllCustomers,
};
