import supertest from "supertest";
import { web } from "../src/applications/web.js";
import { User } from "../src/models/Model";
import { logger } from "../src/applications/logging.js";

describe("POST /api/users/register", function () {
  afterEach(async () => {
    await User.destroy({
      where: {
        username: "robby",
      },
    });
  });
  it("should create a new user", async () => {
    const result = await supertest(web).post("/api/users/register").send({
      username: "robby",
      name: "muhammad robby",
      password: "12345678",
      password2: "12345678",
    });
    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("robby");
    expect(result.body.data.name).toBe("muhammad robby");
    expect(result.body.data.password).toBeDefined();
    expect(result.body.data.password2).toBeUndefined();
  });

  it("should error a new user", async () => {
    const result = await supertest(web).post("/api/users/register").send({
      username: "",
      name: "",
      password: "",
      password2: "",
    });
    logger.info(result.body);
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should duplicate username", async () => {
    let result = await supertest(web).post("/api/users/register").send({
      username: "robby",
      name: "muhammad robby",
      password: "12345678",
      password2: "12345678",
    });
    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("robby");
    expect(result.body.data.name).toBe("muhammad robby");
    expect(result.body.data.password).toBeDefined();
    expect(result.body.data.password2).toBeUndefined();

    result = await supertest(web).post("/api/users/register").send({
      username: "robby",
      name: "muhammad robby",
      password: "12345678",
      password2: "12345678",
    });
    logger.info(result.body);
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});
