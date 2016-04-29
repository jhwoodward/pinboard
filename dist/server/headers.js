'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (req, res, next) {
  // cors allow
  if (req.headers.origin) {
    for (var i = 0; i < _server2.default.origins.length; i++) {
      var origin = _server2.default.origins[i];
      if (req.headers.origin.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        break;
      }
    }
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
};

var _server = require('./server.config');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=headers.js.map