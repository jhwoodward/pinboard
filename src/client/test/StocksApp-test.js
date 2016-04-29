import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
import StocksApp from '../components/StocksApp';

describe('StocksApp', () => {
  it('renders without problems', () => {
    const app = TestUtils.renderIntoDocument(<StocksApp
      columnCount={20}
      columnSize={20}
      rowSize={20}
    />);
    expect(app).toExist();
  });
});
