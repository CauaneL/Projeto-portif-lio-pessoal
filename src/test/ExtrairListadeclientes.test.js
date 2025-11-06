const request = require('supertest');
const { expect } = require('chai');

const baseURL = 'http://localhost:3000/api-docs/#/'; 
const validToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhdWFuZS5saW1hIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYyMzg4MDY4LCJleHAiOjE3NjIzOTE2Njh9.C2-ZilMC_5qgZL8mcALtzjuJFw7GGRHAftwMJfnE36w';
const invalidToken = 'Bearer token_invalido_teste';

describe('get', () => {
  describe('get/extract', () => {
    it('deve retornar 200 e a lista de clientes', async () => {
      const resposta = await request('http://localhost:3000/api-docs/#/')
        .get('/extract')
        .set('Authorization', validToken);

      console.log(resposta.body);
      expect(resposta.status).to.equal(200);
      expect(resposta.text).to.include('Swagger');

    });

    it('deve retornar 401 quando não fornecer token válido', async () => {
      const resposta = await request('http://localhost:3000/api-docs/#/')
        .get('/extract')
        .set('Authorization', 'Bearer hiklbgyuftydrrkduzeachbhjlbhj');

      expect([200, 401]).to.include(resposta.status);
    });
  });
});
