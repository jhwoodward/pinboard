import React from 'react';
import LineChart from './chart/LineChart';
import BarChart from './chart/BarChart';
import FontIcon from 'material-ui/lib/font-icon';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import CircularProgress from 'material-ui/lib/circular-progress';

const StockChart = ({
  width,
  height,
  stock,
  chartType,
  onChangeChartType,
  onRemoveChart
}) => {
  let chart;
  if (stock.data) {
    switch (chartType) {
      case 'Bar':
        chart = (
          <BarChart
            width={width}
            height={height}
            {...stock}
          />);
        break;
      default:
        chart = (
          <LineChart
            width={width}
            height={height}
            {...stock}
          />);
    }
  } else {
    chart = (
      <center>
        <CircularProgress
          size={2}
        />
      </center>
      );
  }

  return (
    <div >
      <StockChartHeader
        stock={stock}
        chartType={chartType}
        onChangeChartType={onChangeChartType}
        onRemoveChart={onRemoveChart}
      />
      <div>
        {chart}
      </div>
    </div>
    );
};

StockChart.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  stock: React.PropTypes.object.isRequired,
  chartType: React.PropTypes.string,
  onChangeChartType: React.PropTypes.func,
  onRemoveChart: React.PropTypes.func
};

const StockChartHeader = ({
  stock,
  chartType,
  onChangeChartType,
  onRemoveChart
}) => {
  const style = {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#fff'
  };
  return (
    <Toolbar style={style}>
      <ToolbarTitle firstChild text={stock.id} />
      <ToolbarGroup float="right">
        <DropDownMenu value={chartType} onChange={onChangeChartType}>
          <MenuItem value={'Bar'} primaryText="Bar" />
          <MenuItem value={'Line'} primaryText="Line" />
        </DropDownMenu>
        <FontIcon className="ion-android-close" onClick={onRemoveChart} tooltip="close" />
      </ToolbarGroup>
    </Toolbar>
  );
};

StockChartHeader.propTypes = {
  stock: React.PropTypes.object.isRequired,
  chartType: React.PropTypes.string,
  onChangeChartType: React.PropTypes.func,
  onRemoveChart: React.PropTypes.func
};

export default StockChart;
