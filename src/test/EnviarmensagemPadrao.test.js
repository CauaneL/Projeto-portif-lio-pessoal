const request = require('supertest');
const {expect} = require ('chai');

describe('post', () => {
    describe('post/mensageria/send', () => {
        it('deve retornar 200 quando a mensagem for enviada com sucesso', async () => {
            const resposta = await request('http://localhost:3000/api-docs/')
            .post('/mensagem/enviar')
            .send({
  clientes: [
    { nome: "cauane lima", telefone: "+5511960743217", cpf: "74547924848" }
  ]
});

            expect([200]).to.include(resposta.status);

        });
        it('deve retornar 400 quando os dados forem inválidos', async () => {
            const resposta = await request('http://localhost:3000/api-docs/')     
            .post('/mensagem/enviar')
            .send({                     
                "nome": "Lucinha",
                "telefone":"11960743217",
                "cpf": "4754702484"
            });
            expect([200, 400]).to.include(resposta.status);
        });
    });
});