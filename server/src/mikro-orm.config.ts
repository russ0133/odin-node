import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { Person } from "./entities/Person";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    glob: "!(*.d).{js,ts}", // how to match migration files (all .js and .ts files, but not .d.ts)
  },
  entities: [Person],
  dbName: "odin-node",
  user: "postgres",
  password: "password",
  type: "postgresql",
  debug: true,
} as Parameters<typeof MikroORM.init>[0];
