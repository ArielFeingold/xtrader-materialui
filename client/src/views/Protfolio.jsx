import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import protfolioPageStyle from '../assets/jss/views/protfolioPageStyle'

import ProtfolioListItem from '../components/ProtfolioListItem'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Protfolio extends React.Component {

  state = {
    symbol: '',
    qty: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={8}>
            <Paper>
              <List style={{paddingTop:"0"}}>
                <ListItem className={classes.header}>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle1} variant="subtitle1">Stock</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle1} variant="subtitle1">Shares</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle1} variant="subtitle1">Value</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography className={classes.subtitle1} variant="subtitle1">Trend</Typography>
                  </Grid>
                 </ListItem>
                <ProtfolioListItem />
                <ProtfolioListItem />
                <ProtfolioListItem />
                <ProtfolioListItem />
                <ProtfolioListItem />
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid item xs={12} className={classes.formHeader}>
              <Typography style={{color:"white"}} variant="h6">Buy Stocks</Typography>
            </Grid>
            <div>
              <Paper className={classes.paper}>
                <form onSubmit={this.submitHandler}>
                  <TextField
                    fullWidth
                    autoFocus
                    helperText="Enter Ticker Symbol"
                    id="Symbol"
                    label="Ticker"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.email}
                    onChange={this.handleChange('Symbol')}
                    variant="outlined"
                   />
                   <TextField
                     dense
                     fullWidth
                     helperText="Choose Amount"
                     id="password"
                     label="Amount"
                     className={classes.textField}
                     margin="normal"
                     value={this.state.password}
                     onChange={this.handleChange('password')}
                     variant="outlined"
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
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Protfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(protfolioPageStyle)(Protfolio);
