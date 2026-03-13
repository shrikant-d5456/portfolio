import "dotenv/config";
import connectDB from "./config/db.js";
import initialData from "./data/initialData.js";

import About from "./models/About.js";
import Skill from "./models/Skill.js";
import Service from "./models/Service.js";
import Project from "./models/Project.js";
import Work from "./models/Work.js";
import Compliment from "./models/Compliment.js";
import Education from "./models/Education.js";

const seed = async () => {
  await connectDB();

  await Promise.all([
    About.deleteMany({}),
    Skill.deleteMany({}),
    Service.deleteMany({}),
    Project.deleteMany({}),
    Work.deleteMany({}),
    Compliment.deleteMany({}),
    Education.deleteMany({}),
  ]);

  await Promise.all([
    About.insertMany(initialData.about),
    Skill.insertMany(initialData.skills),
    Service.insertMany(initialData.services),
    Project.insertMany(initialData.projects),
    Work.insertMany(initialData.work),
    Compliment.insertMany(initialData.compliments),
    Education.insertMany(initialData.education),
  ]);

  console.log("Database seeded successfully");
  process.exit(0);
};

seed().catch((error) => {
  console.error("Seeding failed", error);
  process.exit(1);
});
