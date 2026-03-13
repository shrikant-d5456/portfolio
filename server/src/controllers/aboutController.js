import About from "../models/About.js";
import buildCrudController from "./crudFactory.js";

export default buildCrudController(About, { order: 1, createdAt: -1 });
