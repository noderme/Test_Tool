const mocha = require('mocha');
const request = require('supertest');
const app = require('../app')

describe('Unit testing', () => {

    it('Pass tests', (done)=> {
        request(app).get('/users/user')
        .expect(200, done);
    })


})