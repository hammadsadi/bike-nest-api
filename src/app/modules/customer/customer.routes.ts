import { Router } from "express";
import { CustomerControllers } from "./customer.controllers";

const customerRouter = Router();

// Routing
customerRouter.post("/customers", CustomerControllers.createCustomer);

export const CustomerRoutes = customerRouter;
