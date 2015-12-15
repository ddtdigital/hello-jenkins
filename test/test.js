var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('responds with what up peeps', function(done) {
        request(app).get('/').expect('what up peeps', done);
    });
});
