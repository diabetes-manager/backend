const request = require('supertest');
const routesInsulin = require('../routes/routesInsulin.js');




describe('routesInsulin.js', () => {
    describe('GET /api/insulin', () => {
        it('should respond with a 404 /', () => {
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
        
    })  
})
