const request = require('supertest');
const routesBloodsugar = require('../routes/routesBloodsugar.js');



describe('routesBloodsugar.js', () => {
    describe('GET /api/bloodsugar', () => {
        it('should respond with a 200 /', () => {
            return request(routesBloodsugar).get('/')
            .then(response => {
                expect(response.status).toBe(404)
            })
        })

        it('should respond with a 200 /1', () => {
            return request(routesBloodsugar).get('/1')
            .then(response => {
                expect(response.status).toBe(200)
            })
        })

        // it('should respond with a list of users and somewhere should be "id"', () => {
        //     return request(routesBloodsugar).get('/')
        //     .then(response => {
        //         expect(response.text)
        //         .toMatch(/id/i)
        //     })
        // })

        // it('should respond with a list of users and somewhere should be "value"', () => {
        //     return request(routesBloodsugar).get('/')
        //     .then(response => {
        //         expect(response.text)
        //         .toMatch(/value/i)
        //     })
        // })

        // it('should respond with a list of users and somewhere should be "timestamp"', () => {
        //     return request(routesBloodsugar).get('/')
        //     .then(response => {
        //         expect(response.text)
        //         .toMatch(/timestamp/i)
        //     })
        // })
    })  
})
