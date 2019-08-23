const url = require('url');

const address = 'http://localhost:8080/default.html?year=2017&month=febeuary'

const parsedUrl = url.parse(address, true);

console.log(parsedUrl.protocol);
console.log(parsedUrl.query.month);
//output
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: null,
  search: '?year=2017&month=febeuary',
  query: { year: '2017', month: 'febeuary' },
  pathname: '/default.html',
  path: '/default.html?year=2017&month=febeuary',
  href:
   'http://localhost:8080/default.html?year=2017&month=febeuary' }
   */