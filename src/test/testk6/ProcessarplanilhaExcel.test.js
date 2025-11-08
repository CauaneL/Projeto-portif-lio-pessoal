import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    iterations: 50,
};
export default function () {
    const url = 'http://localhost:3000/post_excel_upload';
    
    const res = http.post(url, null, {
        headers: {
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
    });
    
    console.log('Resposta da API:', res.body);
    
    check(res, {
        'status é 200' : (r) => r.status === 200,
        'validar token' : (r) => r.status === 200 && r.json().accessToken !== undefined,
    });
    
    sleep(1);
}   
