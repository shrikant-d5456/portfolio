import Skill from "../models/Skill.js";
import buildCrudController from "./crudFactory.js";

export default buildCrudController(Skill, { order: 1, createdAt: -1 });
