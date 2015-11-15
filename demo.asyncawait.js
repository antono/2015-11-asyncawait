// Part of async/await slides by Anton Vasiljev <antono.vasiljev@gmail.com>
"use strict";

const fetch = require('node-fetch');

function pfetch(url) {
  return fetch(url).then(resp => resp.text());
}

async function fetchSeq(url) {
  url = await pfetch(url);
  console.log('Fetched', url);

  url = await pfetch(url);
  console.log('Fetched', url);

  url = await pfetch(url);
  console.log('Fetched', url);

  url = await pfetch(url);
  console.log('Fetched', url);

  url = await pfetch(url);
  console.log('Fetched', url);

  throw Error('Hello Kitty')

  url = await pfetch(url);
  console.log('Fetched', url);


  url = await pfetch(url);
  console.log('Fetched', url);

  return 'All Done';
}

try {
  fetchSeq('http://antono.info/x/step1.txt').then(console.log.bind(console));
} catch (err) {
  console.log('Cathced error', err);
}
