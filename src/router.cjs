"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const express = require('express')
var app = express();
var port = 3000;
app.get('/', (function (req, res) {
    res.send('<h1>Hello,World</h1>');
}));
app.listen(port, function () {
    console.log('');
});
exports.default = app;
