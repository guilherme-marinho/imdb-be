import "reflect-metadata";
import "dotenv/config";
import YAML from "yamljs";
import path from "path";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";

import { router } from "../../routes/routes";

import { CustomError } from "../../utils/customError";
import { handleError } from "../../utils/handleError";

const app = express();

const swaggerDocument = YAML.load(
  path.join(__dirname, "../../routes/swagger.yaml")
);

app.use(cors());
app.use(express.json());
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
  handleError(err, req, res, next);
});

export { app };
