import buildCrudRouter from "./crudRouteFactory.js";
import complimentController from "../controllers/complimentController.js";

export default buildCrudRouter(complimentController);
