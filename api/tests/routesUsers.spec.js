const request = require('supertest');
const db = require('../../knexConfig.js');
const routesUsers = require('../routes/routesUsers.js');

const userBeta = { 
    username: 'Patient Beta',
    bg_high: 6,
    bg_low: 4
}

const userBetaMax = { 
    username: 'Patient BetaMax',
    bg_high: 7,
    bg_low: 3
}

beforeEach(async () => {
    return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
});

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

        it('should respond with a list of users and somewhere should be "username"', () => {
            return request(routesUsers).get('/')
            .then(response => {
                expect(response.text)
                .toMatch(/username/i)
            })
        })

        it('should respond with a list of users and somewhere should be "bg_high"', () => {
            return request(routesUsers).get('/')
            .then(response => {
                expect(response.text)
                .toMatch(/bg_high/i)
            })
        })
    })  
})

describe('user model', () => {
    describe('insert()', () => {
        it('should insert the provided users, check length', async () => {
            await db('users').insert(userBeta);
            const users = await db('users');
            expect(users).toHaveLength(3);
        });

        it('should insert the provided user, check existence', async () => {
            await db('users').insert(userBeta);
            const users = await db('users')
            expect(users[2].username).toMatch(/patient beta/i);
        });
    });

    describe('remove()', () => {
        it('should remove the inserted users, check length is three', async () => {
            await db('users').insert(userBeta);
            await db('users').insert(userBetaMax);
            await db('users').where('id',4).del();
            const users = await db('users');
            expect(users).toHaveLength(3);
        });
    });
})

