import buildCrudRouter from "./crudRouteFactory.js";
import skillController from "../controllers/skillController.js";

export default buildCrudRouter(skillController);
