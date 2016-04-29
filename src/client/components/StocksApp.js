import React from 'react';
import WorkArea from './WorkArea';
import StockList from './StockList';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import Dialog from 'material-ui/lib/dialog';
import injectTapEventPlugin from 'react-tap-event-plugin';
import apiClient from '../apiClient.js';
// Needed for Material UI onTouchTap
// see https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const { Component } = React;

class StocksApp extends Component {

  constructor(props) {
    super(props);
    this.state = { stocks: [], menuOpen: false, welcome: true };
    this.addChart = this.addChart.bind(this);
    this.updateLayout = this.updateLayout.bind(this);
    this.onChangeChartType = this.onChangeChartType.bind(this);
    this.onRemoveChart = this.onRemoveChart.bind(this);
  }

  componentWillMount() {
    apiClient.getStockList().then(stocks => this.setState({ stocks }));
  }

  onChangeChartType(id, chartType) {
    this.state.stocks.filter(s => s.id === id)[0].layout.chartType = chartType.value;
    this.setState({ stocks: this.state.stocks });
  }

  onRemoveChart(id) {
    this.state.stocks.filter(s => s.id === id)[0].layout = undefined;
    this.setState({ stocks: this.state.stocks });
  }

  addChart(id, layout) {
    const stock = this.state.stocks.filter(s => s.id === id)[0];
    stock.layout = layout;
    stock.columns = [];
    this.setState({ stocks: this.state.stocks });
    apiClient.getStock(id).then((s) => {
      stock.data = s.data;
      this.setState({ stocks: this.state.stocks });
    });
  }

  updateLayout(layout) {
    layout.forEach(e => {
      const stock = this.state.stocks.filter(s => s.id === e.i)[0];
      stock.layout = e;
    });
    this.setState({ stocks: this.state.stocks });
  }

  render() {
    const handleMenuToggle = () => this.setState({ menuOpen: !this.state.menuOpen });
    const closeDialog = () => this.setState({ welcome: false });
    return (
      <div>
        <AppBar
          style={{ position: 'fixed' }}
          title="Stock Charts (prototype)"
          iconElementLeft={<div />}
        >
          <FlatButton
            style={{ float: 'right', color: '#fff', minWidth: 50 }}
            onClick={handleMenuToggle}
          >
            <FontIcon
              style={{ color: '#fff', paddingTop: '10px', fontSize: '36px' }}
              className="ion-stats-bars"
            />
          </FlatButton>
        </AppBar>

        <LeftNav
          style={{ top: '64px' }}
          open={this.state.menuOpen}
          openRight
        >
          <StockList
            stocks={this.state.stocks.filter(s => !s.layout)}
          />
        </LeftNav>

        <WorkArea
          stocks={this.state.stocks.filter(s => s.layout)}
          onDropStock={this.addChart}
          onDragOver={(event) => event.preventDefault()}
          onLayoutChange={this.updateLayout}
          onChangeChartType={this.onChangeChartType}
          onRemoveChart={this.onRemoveChart}
          onResize={this.updateLayout}
          columnCount={this.props.columnCount}
          columnSize={this.props.columnSize}
          rowSize={this.props.rowSize}
        />

        <Dialog
          title="Welcome to Stock Charts (prototype)"
          modal={false}
          actions={[<FlatButton label="OK" primary onTouchTap={closeDialog} />]}
          open={this.state.welcome}
          onRequestClose={closeDialog}
        >
          <p>
            The chart list panel can be toggled by
            clicking the chart icon at the top right of the screen.
          </p>
          <p>
            From there you can drag charts into the work area.
          </p>
          <p>
            Have fun !
          </p>
        </Dialog>

      </div>
    );
  }
}

StocksApp.propTypes = {
  columnCount: React.PropTypes.number.isRequired,
  columnSize: React.PropTypes.number.isRequired,
  rowSize: React.PropTypes.number.isRequired
};

export default StocksApp;
