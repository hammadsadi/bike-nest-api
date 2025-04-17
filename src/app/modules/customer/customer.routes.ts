import { Router } from "express";
import { CustomerControllers } from "./customer.controllers";

const customerRouter = Router();

// Routing
customerRouter.post("/customers", CustomerControllers.createCustomer);
customerRouter.get("/customers", CustomerControllers.getAllCustomers);

export const CustomerRoutes = customerRouter;
