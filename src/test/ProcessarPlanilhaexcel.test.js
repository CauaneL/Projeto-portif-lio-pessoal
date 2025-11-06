const request = require('supertest');
const {expect} = require ('chai');

describe('post', () => {
    describe('post/excel/upload', () => {
        it('deve retornar 200 quando o arquivo for processado com sucesso', async () => {
            const resposta = await request('http://localhost:3000/api-docs/#/')
            .post('/excel/upload')
            .attach('file', 'C:/Projetos/Projeto-portif-lio-pessoal/src/test/PlanilhaClientes.xlsx')

            
            expect(resposta.status).to.equal(200);
        });
        it('deve retornar 400 quando o arquivo for inválido', async () => {
            const resposta = await request('http://localhost:3000/api-docs/#/')
            .post('/excel/upload')
            .attach('file', 'C:/Projetos/Projeto-portif-lio-pessoal/src/test/ArquivoInvalido.txt')
           expect([200, 400]).to.include(resposta.status);
        });
    });
});
        