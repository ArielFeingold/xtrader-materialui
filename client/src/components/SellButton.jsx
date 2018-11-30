import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import sellButtonStyle from '../assets/jss/sellButtonStyle'

import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import NumberInput from '../components/NumberInput';
import Paper from '@material-ui/core/Paper';

class SellButton extends React.Component {
  state = {
    open: false,
    numberOfShares: 0
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    console.log(this.state.numberOfShares)
  };

  handleSubmit = ( event ) => {
    event.preventDefault();
    if(this.state.numberOfShares <= this.props.userShares){
      this.props.sellStock(this.props.symbol, this.state.numberOfShares)
      this.setState({
        open: false,
      })
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} color="secondary" className={classes.button}>
          Sell
        </Button>
        <Modal
          aria-labelledby="sell-form"
          aria-describedby="form for user to sell his shares"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12} className={classes.formHeader}>
                <Typography style={{color:"white"}} variant="h6">Sell Stocks</Typography>
              </Grid>
              <Grid item xs={12} className={classes.form}>
                <form onSubmit={this.handleSubmit} >
                  <Typography variant="subtitle1"> Stock: {this.props.symbol}</Typography>
                   <TextField
                     fullWidth
                     helperText="Choose Amount"
                     error={this.state.emptyQty}
                     id="qty"
                     label="qty"
                     className={classes.textField}
                     margin="normal"
                     value={this.state.qty}
                     onChange={this.handleChange('numberOfShares')}
                     variant="outlined"
                     defaultValue={this.props.userShares}
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
                      Sell
                    </Button>
                </form>
              </Grid>
            </Grid>

          </Paper>

        </Modal>
      </div>
    );
  }
}

SellButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
      loading: state.protfolio.loading,
      isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
      sellStock: (symbol, qty) => dispatch(actions.sellStock(symbol, qty)),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(sellButtonStyle)(SellButton));
