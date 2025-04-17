import express, { Application, Request, Response } from "express";
import { CustomerRoutes } from "./app/modules/customer/customer.routes";

const app: Application = express();

app.use(express.json());

//  Test Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "BikeNest Api Successfully Running Now...!",
  });
});

//  Routes
app.use("/api", CustomerRoutes);
export default app;
