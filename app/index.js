import { createServer } from 'http';
import Main from './models/main.js';

createServer((request, response) => {

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello NSA! \n');
}).listen(3000);

Main.teste();
