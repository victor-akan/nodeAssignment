// import assert from "assert";
// import request from "supertest";
// import app from "./app";

const request = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("Blog test", function() {
  it("should create a post", function(done) {
    let blog = {
      title: "class awesome",
      author: "Bosede",
      content: "Hello world!!! I need Lucid Air"
    };
    request(app)
      .post("/blog/create")
      .send(blog)
      .set("Accept", "application/json")
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        console.log(res.body);
        assert.equal(res.body.ops[0]._id.length, 24);
        done();
      });
  });
});
