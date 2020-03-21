'use strict';
const todo = require('./index.js');
const assert = require('assert');

// テストを実行する前にtasks.jsonを削除
const fs = require('fs');
fs.unlink('./tasks.json', (err) => {
    // todoとlistのテスト
    todo.todo('ノートを買う');
    todo.todo('ペンを買う');
    assert.deepEqual(todo.list(), ['ノートを買う','ペンを買う']);

    // done と donelist のテスト
    todo.done('ペンを買う');
    assert.deepEqual(todo.list(), ['ノートを買う']);
    assert.deepEqual(todo.donelist(), ['ペンを買う']);

    // del のテスト
    todo.del('ノートを買う');
    todo.del('ペンを買う');
    assert.deepEqual(todo.list(), []);
    assert.deepEqual(todo.donelist(), []);

    console.log('テストが正常に完了しました');
});