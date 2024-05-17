const http = require('http'),
  url = require('url'),
  fs = require('fs');


const app = http.createServer((request, response) => {
  let addr = request.url,
    q = new URL(addr, 'http://' + request.headers.host),
    filePath = '';

  if (q.pathname.includes('documentation')) {
    filePath = (__dirname + '/documentation.html');
  } else {
    filePath = 'index.html';
  }

  fs.appendFile('log.txt', 'URL:' + addr + '\nTimestamp:' + new Date + '\n\n', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('A log added.');
    }
  })

  fs.readFile(filePath, (err, data) => {
    if (err) {
      throw err;
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();

  });

});

app.listen(8080, () => {
  console.log('My test server is running on Port 8080.');
});




