const request = require('supertest');
const routesBloodsugar = require('../routes/routesBloodsugar.js');



describe('routesBloodsugar.js', () => {
    describe('GET /api/bloodsugar', () => {
        it('should respond with a 404 /', () => {
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
    })  
})
