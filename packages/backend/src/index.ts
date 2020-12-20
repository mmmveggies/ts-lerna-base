import { foo } from '@mono/shared';
import http from 'http';

http.createServer((_, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  });
  setTimeout(() => {
    res.write(JSON.stringify({ foo }));
    res.end();
  }, 800);
}).listen(1337);
