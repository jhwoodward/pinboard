import expect from 'expect';
import api from '../api/api';

describe('api', () => {
  it('returns a list of available stocks', () => api.getStockList()
    .then((list) => expect(list.length).toBeGreaterThan(1)));

  it('returns stock data by id', () => api.getStock('WIKI/ELRC')
    .then((stock) => {
      const expectedName = 'Electro Rent Corp. (ELRC) Prices, Dividends, Splits and Trading Volume';
      expect(stock.meta.name).toEqual(expectedName);
    })
  );
});
