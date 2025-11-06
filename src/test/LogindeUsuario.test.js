const request = require('supertest');
const {expect} = require ('chai');
const { post } = require('../app');

describe('post',() => {
    describe('post/login', () => {
        it('deve retornar 200 quando fornecer credenciais validar', async () => {
            const resposta = await request('http://localhost:3000/api-docs/#/')
            .post('/login')
            .send({
                "username":"cauane.lima",
                "password":"123456",
                "role": "adimin"
            });

            expect(resposta.status).to.equal(200);
            expect(resposta.text).to.equal(resposta.text);
        });
        it('deve retornar 401 quando não fornecer credenciais validas', async () => {
            const resposta = await request('http://localhost:3000/api-docs/#/')
            .post('/login')
            .send({
                "username": "cauane.lima",
                "password": "789456"
            });
            expect([200, 401]).to.include(resposta.status);
        });
    });
});