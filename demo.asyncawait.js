// Part of async/await slides by Anton Vasiljev <antono.vasiljev@gmail.com>
"use strict";

const fetch = require('node-fetch');

function fetchText(url) {
  return fetch(url).then(resp => resp.text());
}

async function fetchTexts(url) {
  let res;

  res = await fetchText(url);
  console.log('Fetched', res);

  res = await fetchText(res);
  console.log('Fetched', res);

  // throw Error('Hello Kitty')

  res = await fetchText(res);
  console.log('Fetched', res);

  // throw Error('Hello Kitty')
  return 'All Done';
}

fetchTexts('http://antono.info/test/step1.txt')
  .then(console.log.bind(console))
