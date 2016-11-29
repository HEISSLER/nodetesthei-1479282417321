var request = require('supertest');
var assert = require('assert');
//heidihelloWorld = require("../app.js"),
//base_url = "http://localhost:6001/";
var app = require('../app');


describe("Hello World", function() {
  describe("GET /", function() {
    it("renders successfully", function(done) {
      request(app).get('/').expect(200, done);
    });

    it("hello", function(done) {
    request(app).get('/').expect("hello world", done);
    });

    //    it("returns status code 200", function(done) {
    //      request.get(base_url, function(error, response, body) {
            //expect(response.statusCode).toBe(200);
    //        assert.equal(200, response.statusCode);
    //        done();
    //      });
    //    });

    //    it("returns Hello World", function(done) {
    //      request.get(base_url, function(error, response, body) {
    //        //expect(body).toBe("Hello World");
    //        assert.equal("hello world", body);
    //        done();
    //      });
    //    });

  });
});
