'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var data = require('../../../database.json');

var api = {
  getStockList: function getStockList() {
    return new Promise(function (resolve) {
      resolve(Object.keys(data).map(function (key) {
        return {
          id: key,
          name: data[key].meta.name
        };
      }));
    });
  },
  getStock: function getStock(id) {
    return new Promise(function (resolve, reject) {
      var stock = data[id];
      if (stock) {
        (function () {
          // extract default column
          // TODO: extend to allow required column(s) to be passed in
          var defaultColumn = stock.meta.default_column;
          stock.data = stock.data.map(function (d) {
            var out = {};
            out[defaultColumn] = d[defaultColumn];
            out.date = d.date;
            return out;
          });
          resolve(stock);
        })();
      } else {
        reject('No stock found with id \'' + id + '\'');
      }
    });
  }
};

exports.default = api;
//# sourceMappingURL=api.js.map