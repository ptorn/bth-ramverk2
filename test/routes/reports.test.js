"use strict";

const request = require('supertest');
const app = require('../../app.js');
const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;

describe('Check return', () => {
    it('Frontpage', function(done) {
        request(app)
            .get("/")
            .expect(200, done);
    });
    it('Return Reports Index Status 200', (done) => {
        request(app)
            .get('/api/reports')
            .expect(200, done);
    });
    it('Return Kmom01 Status 200', (done) => {
        request(app)
            .get('/api/reports/kmom01')
            .set('Accept', 'application/json')
            .expect(200, done);
    });
});
