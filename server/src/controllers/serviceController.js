import Service from "../models/Service.js";
import buildCrudController from "./crudFactory.js";

export default buildCrudController(Service, { order: 1, createdAt: -1 });
