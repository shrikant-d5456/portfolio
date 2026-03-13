import buildCrudRouter from "./crudRouteFactory.js";
import projectController from "../controllers/projectController.js";

export default buildCrudRouter(projectController);
