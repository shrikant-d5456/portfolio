import Work from "../models/Work.js";
import buildCrudController from "./crudFactory.js";

export default buildCrudController(Work, { order: 1, createdAt: -1 });
