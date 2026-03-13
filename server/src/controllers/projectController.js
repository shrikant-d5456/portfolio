import Project from "../models/Project.js";
import buildCrudController from "./crudFactory.js";

export default buildCrudController(Project, { order: 1, createdAt: -1 });
