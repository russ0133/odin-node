import express from "express";

import { MikroORM } from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";

import cors from "cors";
import { Person } from "./entities/Person";
import { uuid } from "uuidv4";

require("dotenv").config();
const bodyParser = require("body-parser");

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const em = orm.em.fork();

  const app = express();

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/api/person", async (req, res) => {
    const persons = await em.find(Person, {});
    console.log(persons);
    res.send(persons);
  });

  app.post("/api/person", async (req, res) => {
    const data = req.body;
    console.log("Data:", data);
    const person = em.create(Person, {
      id: uuid(),
      firstName: data.firstName,
      lastName: data.lastName,
    });
    await em.persistAndFlush(person);
    res.send(person);
  });

  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

main().catch((err) => console.error(err));
