import http from 'k6/http';
import { check, sleep } from 'k6';

const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNhdWFuZS5saW1hIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYyNTY3NTY2LCJleHAiOjE3NjI1NzExNjZ9.ZdQJ6g70t1yn12xCF_oeZHUloLVBI3W3DDbS6bvouyA";

export const options = {
    
    iterations: 50,
    
};

export default function () {

    const url = 'http://localhost:3000/post_crm_import'; 

    
    const payload = JSON.stringify({
        filePath: '/path/to/crm_update_file.csv' 
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
            
            'Authorization': `Bearer ${AUTH_TOKEN}`, 
        },
    };

    const res = http.post(url, payload, params);

    console.log('STATUS:', res.status);
    console.log('BODY:', res.body);
    check(res, {
        
        'status é 200': (r) => r.status === 200,
    });
    
    sleep(1);
}