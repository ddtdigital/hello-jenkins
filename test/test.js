var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('responds with what up peeps. hopefully last test.', function(done) {
        request(app).get('/').expect('what up peoples. hopefully last test.', done);
    });
});
