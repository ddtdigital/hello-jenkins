var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('responds with what up peoples.', function(done) {
        request(app).get('/').expect('what up peoples.', done);
    });
});
