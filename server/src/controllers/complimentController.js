import Compliment from "../models/Compliment.js";
import buildCrudController from "./crudFactory.js";

export default buildCrudController(Compliment, { order: 1, createdAt: -1 });
