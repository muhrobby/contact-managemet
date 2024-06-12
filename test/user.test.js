import supertest from "supertest";
import { web } from "../src/applications/web.js";
import { User } from "../src/models/Model";

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
    expect(result.body.data.password).toBeUndefined();
    expect(result.body.data.password2).toBeUndefined();
  });
});
