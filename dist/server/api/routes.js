'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.route('/stocks').get(function (req, res) {
  _api2.default.getStockList().then(function (list) {
    res.status(200).json(list);
  }).catch(function (error) {
    res.status(500).json(error);
  });
});

router.route('/stock/:id').get(function (req, res) {
  _api2.default.getStock(req.params.id).then(function (stock) {
    res.status(200).json(stock);
  }).catch(function (error) {
    res.status(500).json(error);
  });
});

exports.default = router;
//# sourceMappingURL=routes.js.map