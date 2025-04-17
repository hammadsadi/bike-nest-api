import express, { Application, Request, Response } from "express";

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
export default app;
