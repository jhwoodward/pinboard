import React from 'react';
import ReactDOM from 'react-dom';
import StocksApp from './components/StocksApp';
import _ from 'lodash';
require('./style.css');

const render = (columnCount, columnSize, rowSize) => {
  ReactDOM.render(
    <StocksApp
      columnCount={columnCount}
      columnSize={columnSize}
      rowSize={rowSize}
    />,
    document.getElementById('root')
  );
};

const resize = () => {
  const width = window.innerWidth;
  const columnSize = 100;
  const columnCount = parseInt(width / columnSize, 10);
  const rowSize = parseInt(columnSize * 2 / 3, 10);
  render(columnCount, columnSize, rowSize);
};

window.addEventListener('resize', _.debounce(resize));
resize();
