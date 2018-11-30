import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import tradeHistoryStyle from '../assets/jss/views/tradeHistoryStyle'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#48AAB8',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


class TradeHistory extends Component {

  componentDidMount = () => {
    this.props.getTransactions();
  };

  render() {
  const { classes } = this.props;
    let rows =  <TableRow >
                  <CustomTableCell component="th" scope="row">
                    No Trade History
                  </CustomTableCell>
                </TableRow>

    if(this.props.userTrades) {
      rows = this.props.userTrades.map(trade => {
        const time = new Date(trade.created_at)
        const date = `${time.getMonth()}/${time.getDay()}/${time.getFullYear()}`

        return(
          <TableRow key={trade.id} className={classes.row}>
            <CustomTableCell>{date}</CustomTableCell>
            <CustomTableCell>{trade.trade_type.toUpperCase()}</CustomTableCell>
            <CustomTableCell>{trade.symbol.toUpperCase()}</CustomTableCell>
            <CustomTableCell >{trade.amount}</CustomTableCell>
            <CustomTableCell >{trade.price}</CustomTableCell>
          </TableRow>
        )
      })
    }

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell >Date</CustomTableCell>
              <CustomTableCell >Buy/Sell</CustomTableCell>
              <CustomTableCell >Stock</CustomTableCell>
              <CustomTableCell >No. of Shares</CustomTableCell>
              <CustomTableCell >Price</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TradeHistory.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
      userTrades: state.transactions.userTransactions,
      isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
      getTransactions: () => dispatch(actions.getTransactions())
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(tradeHistoryStyle)(TradeHistory));
