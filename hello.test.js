const assert = require('assert');
const hello = require('./hello.js');

assert.strictEqual(hello(), 'Hello World!', 'Our "Hello World" Function Works');
