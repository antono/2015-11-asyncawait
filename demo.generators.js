// Part of async/await slides by Anton Vasiljev <antono.vasiljev@gmail.com>
"use strict";

const fetch = require('node-fetch');

function fetchText(url) {
  return fetch(url).then(resp => resp.text());
}

function * createSeq() {
  let res;
  let url = 'http://antono.info/test/step1.txt';

  res = yield fetchText(url);
  console.log('Fetched', res);

  res = yield fetchText(res);
  console.log('Fetched', res);

  // throw Error('Hello Kitty')

  res = yield fetchText(res);
  console.log('Fetched', res);

  throw Error('Hello Kitty')
}

const seq = createSeq()

Promise.resolve(true)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .catch(err => console.log("Catced error", err.stack))
