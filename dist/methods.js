"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.usuarios = usuarios;
exports.def = def;
var users = [{
  id: 1,
  name: 'LuisPa',
  last: 'ovalle'
}, {
  id: 3,
  name: 'LuisPa',
  last: 'ovalle'
}, {
  id: 4,
  name: 'LuisPa',
  last: 'ovalle'
}];

function index(req, res) {
  res.send('IS LIT');
}

function usuarios(req, res) {
  res.json(users);
}

function def(req, res) {
  res.status(404).send("doesnt exist");
}