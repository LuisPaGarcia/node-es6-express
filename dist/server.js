"use strict";

var _init = _interopRequireDefault(require("./init"));

var _methods = require("./methods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_init.default.get('/', _methods.index);

_init.default.get('/usuarios', _methods.usuarios);

_init.default.get('*', _methods.def);

_init.default.listen(8989, function () {
  console.log('listening on http://localhost:8989');
});