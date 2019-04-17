const request = require('supertest');
const db = require('../../knexConfig.js');
const routesInsulin = require('../routes/routesInsulin.js');




describe('routesInsulin.js', () => {
    describe('GET /api/insulin', () => {
        it('should respond with a 200 /', () => {
            return request(routesInsulin).get('/')
            .then(response => {
                expect(response.status).toBe(404)
            })
        })

        it('should respond with a 200 /1', () => {
            return request(routesInsulin).get('/1')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })

        // it('should respond with a list of users and somewhere should be "id"', () => {
        //     return request(routesInsulin).get('/')
        //     .then(response => {
        //         expect(response.text)
        //         .toMatch(/id/i)
        //     })
        // })

        // it('should respond with a list of users and somewhere should be "amount"', () => {
        //     return request(routesInsulin).get('/')
        //     .then(response => {
        //         expect(response.text)
        //         .toMatch(/amount/i)
        //     })
        // })

        // it('should respond with a list of users and somewhere should be "timestamp"', () => {
        //     return request(routesInsulin).get('/')
        //     .then(response => {
        //         expect(response.text)
        //         .toMatch(/timestamp/i)
        //     })
        // })
    })  
})
