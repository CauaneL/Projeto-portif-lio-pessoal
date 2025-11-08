import http from 'k6/http';
import {check, sleep} from 'k6';

export const options = {
    iterations: 50, // 
};


export default function () {
    const url = 'http://localhost:3000/api-docs/#/default/post_auth_login';

    const payload = JSON.stringify({
        username: 'cauane.lima',
        password: '123456'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };  
    const res = http.post(url, payload, params);

    check(res, {
        'status é 200': (r) => r.status === 200,
    });
    sleep(1);
};