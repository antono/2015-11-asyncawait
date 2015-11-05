const fetch = require('node-fetch');

function step1() {
  return fetch('http://antono.info/step1.txt');
}

function step2(url) {
  return fetch(url);
}

function step3(url) {
  return fetch(url);
}

function * createSeq() {
  var res;

  res = yield step1();

  console.log('Fetching', res.text());
  res = yield step2(res.text());

  console.log('Fetching', res.text());
  res = yield step3(res.text());

  throw Error('Hello Error')
}

var seq = createSeq()

var pro = Promise.resolve(true)

pro.then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .then(res => seq.next(res).value)
  .catch(console.log.bind(console))
