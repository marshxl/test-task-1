import http from 'k6/http';
import { check } from 'k6';

export default function () {
  let endpoint = '';
  if (Math.random() < 0.9) { // 90% запросов на первый эндпоинт
    endpoint = 'http://localhost:3000/api/search?query=&tag=&starred=';
  } else { // 10% запросов на второй эндпоинт
    endpoint = 'http://localhost:3000/api';
  }

  let res = http.get(endpoint);
  check(res, { 'status is 200': (r) => r.status === 200 });
}
