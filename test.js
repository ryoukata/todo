'use strict';
const todo = require('./index.js');
const assert = require('assert');

// todoとlistのテスト
todo.todo('ノートを買う');
todo.todo('ペンを買う');
assert.deepEqual(todo.list(), ['ノートを買う','ペンを買う']);

console.log('テストが正常に完了しました');