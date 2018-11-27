import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import loginPageStyle from '../assets/jss/views/loginPageStyle'

class LoginPage extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h4">Login</Typography>
              <form>
                <TextField
                  fullWidth
                  autoFocus
                  helperText="Enter Username"
                   id="username"
                   label="Username"
                   className={classes.textField}
                   margin="normal"
                   // value={this.state.name}
                   // onChange={this.handleChange('name')}
                   variant="outlined"
                 />
                 <TextField
                   fullWidth
                   helperText="Enter Password"
                    id="password"
                    label="Password"
                    className={classes.textField}
                    margin="normal"
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    variant="outlined"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large">
                    Login
                  </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(loginPageStyle)(LoginPage);
