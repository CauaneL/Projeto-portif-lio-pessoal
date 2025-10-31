# CRM Automation API

API para automação de integração entre CRM, planilhas Excel e ferramenta de mensageria, com autenticação JWT e documentação via Swagger.

## Como Executar

```bash
npm install
npm run dev
```

Acesse a documentação Swagger em:
http://localhost:3000/api-docs

## Autenticação

- Login: `POST /auth/login`
- Header: `Authorization: Bearer <token>`

## Principais Endpoints

- `GET /crm/extract` — Extrai lista de clientes do CRM
- `POST /excel/upload` — Processa planilha Excel de clientes
- `POST /crm/import` — Importa atualizações para o CRM
- `POST /mensageria/send` — Envia mensagens padrão aos clientes

## Estrutura de Pastas

```
crm-automation-api/
│
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── middleware/
│   ├── app.js
│   └── server.js
│
├── resources/
│   └── swagger/
│       └── swagger.json
│
├── package.json
└── README.md
```
