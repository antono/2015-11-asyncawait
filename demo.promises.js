// Part of async/await slides by Anton Vasiljev <antono.vasiljev@gmail.com>
"use strict";

const fetch = require('node-fetch');

function pfetch(url) {
  return fetch(url).then(resp => resp.text());
}

pfetch('http://antono.info/x/step1.txt')
  .then(pfetch)
  .then(pfetch)
  .then(pfetch)
  .then(pfetch)
  .then(pfetch)
  .then(pfetch)
  .catch(err => console.log("Catced error", err.stack))
