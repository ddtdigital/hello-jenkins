var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('responds with hello you', function(done) {
        request(app).get('/').expect('hello you', done);
    });
});
