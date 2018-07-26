const assert = require('assert');
const hello = require('./hello.js');

assert.strictEqual(hello(), 'Hello, USG.  You Sexy Bastard!', 'Our "Hello World" Function Works');
