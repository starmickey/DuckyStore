const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app.js");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

describe("GET /products/search", () => {
  it("find product by introducing its name", async () => {
    const res = await request(app).get("/products/search?q=carrot");
    expect(res.statusCode).toBe(200);
    expect(res._body.response.name).toBe('carrot');
    expect(res._body.response.description).toBeDefined();
    // expect(res._body.response.status).toBe('ACTIVE');
    expect(res._body.response.price).toBeDefined();

  });

  it("case independent search", async () => {
    const res = await request(app).get("/products/search?q=caRRot");
    expect(res.statusCode).toBe(200);
    expect(res._body.response.name).toBe('carrot');

  });
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});