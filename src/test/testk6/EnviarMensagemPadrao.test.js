import http from 'k6/http';
import { check, sleep } from 'k6';

const token = __ENV.TOKEN;  // k6 lê variáveis de ambiente diretamente

export const options = {
    iterations: 50,
};

export default function () {
    const url = 'http://localhost:3000/api/mensageria_send';

    const payload = JSON.stringify({
        "nome": "Joana",
        "telefone": "11960743217",
        "cpf": "47547024840"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhdWFuZS5saW1hIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYyNDgyODA0LCJleHAiOjE3NjI0ODY0MDR9.i2mqbFlM8fjYVTbaKsHCNa_9-oTmeb1dlRMCrJgW9E4'}` 
        },
    };

    const res = http.post(url, payload, params);

    console.log('STATUS:', res.status);
    console.log('BODY:', res.body);

    check(res, {
        'status é 200': (r) => r.status === 200,
        'res tem body': (r) => r.body && r.body.length > 0, 
    });

    sleep(1);
};
