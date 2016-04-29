'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _api = require('../api/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('api', function () {
  it('returns a list of available stocks', function () {
    return _api2.default.getStockList().then(function (list) {
      return (0, _expect2.default)(list.length).toBeGreaterThan(1);
    });
  });

  it('returns stock data by id', function () {
    return _api2.default.getStock('WIKI/ELRC').then(function (stock) {
      var expectedName = 'Electro Rent Corp. (ELRC) Prices, Dividends, Splits and Trading Volume';
      (0, _expect2.default)(stock.meta.name).toEqual(expectedName);
    });
  });
});
//# sourceMappingURL=api-test.js.map