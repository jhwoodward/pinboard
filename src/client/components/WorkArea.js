import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import StockChart from './StockChart';

const WorkArea = ({
  onDropStock,
  onDragOver,
  onLayoutChange,
  onChangeChartType,
  onRemoveChart,
  onResize,
  stocks,
  columnCount,
  rowSize,
  columnSize
}) => {
  const style = {
    paddingTop: '64px',
    width: '100%',
    height: '100vh'
  };

  const onDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData('id');
    // Determine drop position
    // Properties x, y, w, h, minW, and minH
    // are required by ReactGridLayout component
    const layout = {
      x: parseInt(event.clientX / (columnSize), 10) - 1,
      y: parseInt((event.clientY - 64) / (rowSize), 10),
      w: 6, h: 4, minW: 4, minH: 3, chartType: 'Line'
    };
    onDropStock(id, layout);
  };

  return (
    <div style={style} onDrop={onDrop} onDragOver={onDragOver}>
      <ReactGridLayout
        className="layout"
        onLayoutChange={onLayoutChange}
        onResize={onResize}
        layout={stocks.map(s => Object.assign({ i: s.id }, s.layout))}
        cols={columnCount}
        rowHeight={rowSize}
        width={columnCount * columnSize}
      >
          {
            stocks.map(stock => (
              <div key={stock.id}>
                <StockChart
                  width={stock.layout.w * columnSize}
                  height={stock.layout.h * (rowSize - 5)}
                  key={stock.id}
                  stock={stock}
                  chartType={stock.layout.chartType}
                  onChangeChartType={
                    (event, index, value) => onChangeChartType(stock.id, { value })
                  }
                  onRemoveChart={() => { onRemoveChart(stock.id); }}
                />
              </div>
            ))
          }
      </ReactGridLayout>
    </div>
  );
};

WorkArea.propTypes = {
  onDropStock: React.PropTypes.func,
  onDragOver: React.PropTypes.func,
  onLayoutChange: React.PropTypes.func,
  onChangeChartType: React.PropTypes.func,
  onRemoveChart: React.PropTypes.func,
  onResize: React.PropTypes.func,
  stocks: React.PropTypes.array,
  columnCount: React.PropTypes.number,
  rowSize: React.PropTypes.number,
  columnSize: React.PropTypes.number
};

export default WorkArea;
