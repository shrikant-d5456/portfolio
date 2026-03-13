import buildCrudRouter from "./crudRouteFactory.js";
import workController from "../controllers/workController.js";

export default buildCrudRouter(workController);
