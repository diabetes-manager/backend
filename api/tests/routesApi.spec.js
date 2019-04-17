const request = require('supertest');
// const db = require('../../knexConfig.js');
const routesApi = require('../routes/routesApi.js');

// const greeting = { greeting: "Hello!" }

describe('routesApi.js', () => {
    describe('GET /api, test general hello message', () => {
        it('should respond with a 200', () => {
            return request(routesApi).get('/')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })

        it('should respond with an object which contains hello ', async () => {
            return request(routesApi).get('/')
            .then(response => {
                expect(response.text).toMatch(/hello/i)
            })
        })
    
    })
    
})

