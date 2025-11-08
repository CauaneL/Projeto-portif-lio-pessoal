import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '30s',
    thresholds: {
        http_req_duration: ['p(95)<500'],
        checks: ['rate>0.95'],
    },
};

export default function () {
    const url = 'http://localhost:3000/crm/extract-test'; // rota do mock
    const response = http.get(url, { headers: { 'Content-Type': 'application/json' } });

    check(response, {
        'status é 200': (r) => r.status === 200,
        'retorno contém clientes': (r) => Array.isArray(r.json().clientes),
    });

    sleep(1);
}
