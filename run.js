const proxyquire = require('proxyquire');

proxyquire('./module-b', {
    './module-c': () => 'mocked module c ran'
});

const result = require('./module-a')();

console.log(result === 'c');