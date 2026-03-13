import buildCrudRouter from "./crudRouteFactory.js";
import serviceController from "../controllers/serviceController.js";

export default buildCrudRouter(serviceController);
