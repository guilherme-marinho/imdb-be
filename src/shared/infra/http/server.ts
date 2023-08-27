import { app } from "./app";
import Logger from "../../../config/logger";

app.listen(3000, () => {
  Logger.info("Server started on port 3000");
});
