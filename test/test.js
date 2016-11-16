var request = require('request');
var assert = require('assert');
//helloWorld = require("../app.js"),
base_url = "http://localhost:6001/";


describe("Hello World", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(response.statusCode).toBe(200);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(body).toBe("Hello World");
        assert.equal("hello world", body);
        done();
      });
    });
  });
});
