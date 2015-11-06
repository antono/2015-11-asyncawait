// Part of async/await slides by Anton Vasiljev <antono.vasiljev@gmail.com>
"use strict";

const fetch = require('node-fetch');

function fetchText(url) {
  console.log('Prev result: ', url)
  return fetch(url).then(resp => resp.text());
}

fetchText('http://antono.info/test/step1.txt')
  .then(fetchText)
  // .then(() => throw new Error('Hello Kitty'))
  .then(fetchText)
  .then(() => { throw new Error('Hello Kitty') })
  .catch(err => console.log("Catced error", err.stack))
