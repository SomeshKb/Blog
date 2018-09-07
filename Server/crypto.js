// const crypto = require('crypto');
// const secret = 'elephant';
// const hash = crypto.createHmac('sha256', secret)
//                    .update('Data is encrypted')
//                    .digest('hex');
// console.log(hash);
const https = require('http');
const fs = require('fs');


https.createServer((req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
