import Education from "../models/Education.js";
import buildCrudController from "./crudFactory.js";

export default buildCrudController(Education, { order: 1, createdAt: -1 });
