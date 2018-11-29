import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import protfolioPageStyle from '../assets/jss/views/protfolioPageStyle'

import ProtfolioListItem from '../components/ProtfolioListItem'
import NumberInput from '../components/NumberInput'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

class Protfolio extends React.Component {

  state = {
    symbol: '',
    qty: '',
    emptySymbol: false,
    emptyQty: false
  }


  componentDidMount() {
    this.props.getProtfolio()
    this.autoCheck = setInterval(
      () => this.props.getProtfolio(),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.autoCheck);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };


  handleSubmit = ( event ) => {
    event.preventDefault();
    if(this.state.symbol === '') {
      this.setState({ emptySymbol: true})
    } else {
      this.setState({ emptySymbol: false})
    }
    if(this.state.qty === '') {
      this.setState({ emptyQty: true})
    } else {
      this.setState({ emptyQty: false})
    }
    if(this.state.symbol && this.state.qty){
      this.props.onAdd(this.state.symbol, this.state.qty)
      this.setState({
        symbol: '',
        qty: ''
      })
    }
  }

  render() {
    const { classes } = this.props;

    let addStockError = null;
    if(this.props.addStockError){
      addStockError =
        <Button
          variant="outlined"
          color="primary"
          className={classes.errorMessage}
          fullWidth
          >
          {this.props.addStockError}
        </Button>
    }

    let authRedirect;
      if ( !this.props.isAuthenticated ) {
          authRedirect = <Redirect to="/access-denied" />
      }

      let userStocks = [];
      if(this.props.userStocks) {
        userStocks = this.props.userStocks.map(stock =>
          <ProtfolioListItem
            symbol={stock.symbol}
            key={stock.id}
            openingPrice={stock.openingPrice}
            currentPrice={stock.currentPrice}
            userShares={stock.userShares}
          />
          )
      }

      let userValue = 0
      if(this.props.userStocks.length > 0){
        let array = this.props.userStocks, sum = 0;
        array.forEach(stock => {
          sum = sum + (stock.currentPrice * stock.userShares)
        })
        userValue = sum.toFixed(2)
      }

    return (
      <div className={classes.root}>
        {authRedirect}
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} className={classes.formHeader}>
              <Typography style={{color:"white"}} variant="h6">Buy Stocks</Typography>
            </Grid>
            <Grid>
              <Paper className={classes.paper}>
                {addStockError}
                <form onSubmit={this.handleSubmit}>
                   <TextField
                     fullWidth
                     helperText="Enter Ticker Symbol"
                     error={this.state.emptySymbol}
                     id="symbol"
                     label="Symbol"
                     className={classes.textField}
                     margin="normal"
                     value={this.state.symbol}
                     onChange={this.handleChange('symbol')}
                     variant="outlined"
                    />
                   <TextField
                     fullWidth
                     helperText="Choose Amount"
                     error={this.state.emptyQty}
                     id="qty"
                     label="qty"
                     className={classes.textField}
                     margin="normal"
                     value={this.state.qty}
                     onChange={this.handleChange('qty')}
                     variant="outlined"
                     InputProps={{
                       inputComponent: NumberInput,
                     }}
                    />
                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      size="large">
                      Buy
                    </Button>
                </form>
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.userInfo}>
                <Typography align="left" variant="subtitle1" color="primary">Available Funds: ${this.props.balance}</Typography>
              </Paper>
              <Paper className={classes.userInfo}>
                <Typography align="left" variant="subtitle1" color="primary">Protfolio Value: ${userValue}</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper>
              <List style={{paddingTop:"0"}}>
                <Grid container >
                  <ListItem className={classes.header}>
                    <Grid item xs={2}>
                      <Typography className={classes.subtitle1} variant="subtitle1">Stock</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography className={classes.subtitle1} variant="subtitle1">Shares</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={classes.subtitle1} variant="subtitle1">Price</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={classes.subtitle1} variant="subtitle1">Value</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography className={classes.subtitle1} variant="subtitle1">Trend</Typography>
                    </Grid>
                   </ListItem>
                </Grid>
                {userStocks}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Protfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
      userStocks: state.protfolio.userStocks,
      loading: state.protfolio.loading,
      balance: state.protfolio.balance,
      addStockError: state.protfolio.addStockError,
      isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
      getProtfolio: () => dispatch(actions.getProtfolio()),
      onAdd: (symbol, qty) => dispatch(actions.addStock( symbol, qty)),
      tryAutoLogin: () => dispatch( actions.authCheckState() )
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(protfolioPageStyle)(Protfolio));
