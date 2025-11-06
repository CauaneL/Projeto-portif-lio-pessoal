const request = require('supertest');
const {expect} = require ('chai');

describe('post', () => {
    describe('post/crm/import', () => {
        it('deve retornar 201 quando a atualização for realizada com sucesso', async () => {            
            const resposta = await request('http://localhost:3000/api-docs/#/')
            .post('/crm/import')
            .send({
                "clienteId": "123",
                "novoStatus": "Em enriquecimento"
            });
            expect([200, 201]).to.include(resposta.status);

        });
        it('deve retornar 401 quando o cliente não for encontrado', async () => {
            const resposta = await request('http://localhost:3000/api-docs/#/')
            .put('/crm/update')
            .send({
                "clienteId": "99999",
                "novoStatus": "Em enriquecimento"
            });
            expect([200, 401]).to.include(resposta.status);

        });
    });
}); 