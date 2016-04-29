'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./api/routes');

var _routes2 = _interopRequireDefault(_routes);

var _headers = require('./headers');

var _headers2 = _interopRequireDefault(_headers);

var _server = require('./server.config');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use('/', _express2.default.static(__dirname + '/../client'));
app.use(_headers2.default);
app.use(_server2.default.host.root, _routes2.default);

app.listen(_server2.default.host.port);
console.log('Listening on port ' + _server2.default.host.port);
//# sourceMappingURL=server.js.map