import config from './config';
import 'whatwg-fetch';

export default {
  getStockList: () => fetch(`${config.apiRoot}/stocks`)
  .then(response => response.json()),
  getStock: (id) => {
    const encodedId = id.replace('/', '%2F');
    return fetch(`${config.apiRoot}/stock/${encodedId}`)
    .then(response => response.json());
  }
};
