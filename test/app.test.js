const assert = require('assert');
const http = require('http');
const app = require('../app');

describe('App Test', function () {
  let server;

  // Start server before tests
  before(function (done) {
    server = app.listen(8080, done);
  });

  // Close server after tests
  after(function (done) {
    server.close(done);
  });

  it('should return 200 on GET /', function (done) {
    http.get('http://localhost:8080', (res) => {
      assert.strictEqual(res.statusCode, 200);
      done();
    });
  });

  it('should return 404 for unknown routes', function (done) {
    http.get('http://localhost:8080/unknown', (res) => {
      assert.strictEqual(res.statusCode, 404);
      done();
    });
  });
});
