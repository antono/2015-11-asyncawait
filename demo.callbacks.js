// Part of async/await slides by Anton Vasiljev <antono.vasiljev@gmail.com>
"use strict";

const http = require('http');

function fetch(url, cb) {
  http.get(url, function(res) {
    var body = '';
    res.on('data', data => body += data);
    res.on('end',  data => cb(body));
  });
}

fetch('http://antono.info/x/step1.txt', (res1) => {
  console.log('Fetched', res1);
  fetch(res1, (res2) => {
    console.log('Fetched', res2);
    fetch(res2, (res3) => {
      console.log('Fetched', res3);
      fetch(res3, (res4) => {
        console.log('Fetched', res4);
        fetch(res4, (res5) => {
          console.log('Fetched', res5);
          fetch(res5, (res6) => {
            console.log('Fetched', res6);
            fetch(res6, (res7) => {
              console.log('Fetched', res7);
            });
          });
        });
      });
    });
  });
});
