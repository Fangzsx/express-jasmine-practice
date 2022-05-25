const Request = require('request');

describe('Server', () => {
    let server;
    beforeAll(() => {
        server = require('../index');
    });

    afterAll(() => {
        server.close();
    })

    describe('GET /', () => {
        let data = {};
        beforeAll((done) => {
            Request.get('http://localhost:3000' , (err, res, body) => {
               data.status = res.statusCode;
               data.body = body;
               done();
            });
        });

        it('status 201', () => {
            expect(data.status).toBe(201);
        })

        it('body', () => {
            expect(data.body).toBe('success test');
        })
    });

    describe('/errortest', () => {
        let data = {};
        beforeAll((done) => {
            Request.get('http://localhost:3000/test', (err,res,body) => {
                data.status = res.statusCode;
                data.body = JSON.parse(body);
                done();
            });
        });
        it('status 200', () => {
            expect(data.status).toBe(500);
        });

        it('body', () => {
            expect(data.body.message).toBe('this is an error');
        });

    });

});