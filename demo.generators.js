// Part of async/await slides by Anton Vasiljev <antono.vasiljev@gmail.com>
"use strict";

const fetch = require('node-fetch');

function pfetch(url) {
  return fetch(url).then(resp => resp.text());
}

function * fetchSeq(url) {
  url = yield pfetch(url);
  console.log('Fetched', url);
  url = yield pfetch(url);
  console.log('Fetched', url);
  url = yield pfetch(url);
  console.log('Fetched', url);
  url = yield pfetch(url);
  console.log('Fetched', url);
  url = yield pfetch(url);
  console.log('Fetched', url);
  url = yield pfetch(url);
  console.log('Fetched', url);
  url = yield pfetch(url);
  console.log('Fetched', url);
  // throw Error('Hello Kitty')
}

const seq = fetchSeq('http://antono.info/x/step1.txt');

seq.next().value
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .catch(err => console.log("Catced error", err.stack))
