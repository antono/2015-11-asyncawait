// Part of async/await slides by Anton Vasiljev <antono.vasiljev@gmail.com>
"use strict";

const http = require('http');

function fetchText(url, cb) {
  http.get(url, function(res) {
    var body = '';
    res.on('data', data => body += data);
    res.on('end',  data => cb(body));
  });
}

fetchText('http://antono.info/test/step1.txt', (res1) => {
  console.log('Fetched', res1);

  fetchText(res1, (res2) => {
    console.log('Fetched', res2);

    throw Error('Hello Kitty');

    fetchText(res2, (res3) => {
      console.log('Fetched', res3);
    });
  });
});
