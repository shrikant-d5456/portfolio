import buildCrudRouter from "./crudRouteFactory.js";
import educationController from "../controllers/educationController.js";

export default buildCrudRouter(educationController);
