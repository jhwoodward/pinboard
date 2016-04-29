import React from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';

const StockListItem = ({ id, name, onDragStart }) => {
  const style = {
    fontSize: '0.8em',
    width: 230,
    whiteSpace: 'normal',
    lineHeight: '24px',
    paddingBottom: '10px'
  };
  return (
    <MenuItem draggable="true" onDragStart={onDragStart}>
      {id}
      <div style={style}>{name}</div>
    </MenuItem>);
};

StockListItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onDragStart: React.PropTypes.func
};

const StockList = ({ stocks }) => (
  <div>
      {stocks.map(stock =>
        <StockListItem
          onDragStart={(event) => event.dataTransfer.setData('id', stock.id)}
          key={stock.id}
          {...stock}
        />
      )}
  </div>
);

StockList.propTypes = {
  stocks: React.PropTypes.array.isRequired
};

export default StockList;
