const request = require('supertest');
// const db = require('../../knexConfig.js');
const routesUsers = require('../routes/routesUsers.js');

// const usersArray = `"id"`

describe('routesUsers.js', () => {
    describe('GET /api/users', () => {
        it('should respond with a 200 /', () => {
            return request(routesUsers).get('/')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })

        it('should respond with a 200 /1', () => {
            return request(routesUsers).get('/1')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })
        
        it('should respond with a 200 /mobile/1', () => {
            return request(routesUsers).get('/mobile/1')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })

        it('should respond with a list of users and somewhere should be "id"', () => {
            return request(routesUsers).get('/')
            .then(response => {
                expect(response.text)
                .toMatch(/id/i)
            })
        })

        // it('should respond with an object which contains hello ', async () => {
        //     return request(routesUsers).get('/')
        //     .then(response => {
        //         expect(response.text).toMatch(/hello/i)
        //     })
        // })
    
    })
    
})

