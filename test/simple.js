// run `examples/simple/index.js` 
const expect = require('chai').expect;
const request = require('request')

describe("Simple server", () => {
  let url = "http://localhost:8000"

  describe("Simple GET", () => {
    it("returns status 200", () => {
      request(url, function(_error, response, _body) {
        expect(response.statusCode).to.equal(200)
      })
    })
    it("responds with data", () => {
      request(url, function(_error, _response, body) {
        expect(body).to.equal("Hello!")
      })
    })
  })

  describe("Simple POST", () => {
    it("returns status 200", () => {
      request(url, { method: "POST" }, function(_error, response, _body) {
        expect(response.statusCode).to.equal(200)
      })
    })
    it("responds with data", () => {
      request(url, { method: "POST" }, function(_error, _response, body) {
        expect(body).to.equal("Hi there!")
      })
    })
  })

  describe("Simple PATCH", () => {
    it("returns status 200", () => {
      request(url, { method: "PATCH" }, function(_error, response, _body) {
        expect(response.statusCode).to.equal(200)
      })
    })
    it("responds with data", () => {
      request(url, { method: "PATCH" }, function(_error, _response, body) {
        expect(body).to.equal("Howdy!")
      })
    })
  })
  
  describe("Simple Catch All", () => {
    it("returns status 400", () => {
      request(url + "/jah", function(_error, response, _body) {
        expect(response.statusCode).to.equal(400)
      })
    })
    it("responds with data", () => {
      request(url + "/jah", function(_error, _response, _body) {
        expect(_body).to.equal("Unknown error")
      })
    })
  })
})
