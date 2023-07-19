const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app.js");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

describe("GET /products/catalog", () => {
    it("should return all products", async () => {
      const res = await request(app).get("/products/catalog");
      expect(res.statusCode).toBe(200);
      expect(res._body.response).toBeDefined();
    });
  });

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});