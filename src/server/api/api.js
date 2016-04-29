const data = require('../../../database.json');

const api = {
  getStockList: () => new Promise((resolve) => {
    resolve(Object.keys(data)
      .map(key => ({
        id: key,
        name: data[key].meta.name
      })));
  }),
  getStock: (id) => new Promise((resolve, reject) => {
    const stock = data[id];
    if (stock) {
      // extract default column
      // TODO: extend to allow required column(s) to be passed in
      const defaultColumn = stock.meta.default_column;
      stock.data = stock.data.map(d => {
        const out = {};
        out[defaultColumn] = d[defaultColumn];
        out.date = d.date;
        return out;
      });
      resolve(stock);
    } else {
      reject(`No stock found with id '${id}'`);
    }
  })
};

export default api;
