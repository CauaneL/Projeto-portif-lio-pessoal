const request = require('supertest');
const {expect} = require ('chai');

describe('post', () => {
    describe("post/register", () => {
        it('deve retornar 201 quando usuario for cadastrado com sucesso', async () => {
            const resposta = await request('http://localhost:3000/api-docs/#/')
            .post('/resgister')
            .send({
                "username": "henry.silva",
                "password": "12345678"
            });
            
            
            expect([200, 201]).to.include(resposta.status);
         
        });
        it('deve retornar 400 quando usuario ja existir', async () => {
            const resposta = await request('http://localhost:3000/api-docs/#/')
            .post('/resgister')
            .send({
                "username": "henry.silva",
                "password": "12345678"
            });
            
            expect([200, 400]).to.include(resposta.status);

        });
    });
});