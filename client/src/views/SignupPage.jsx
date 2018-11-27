import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import signupPageStyle from '../assets/jss/views/signupPageStyle'

class SignupPage extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid >
                <Typography className={classes.header} variant="h4">Signup</Typography>
              </Grid>
              <Grid>
                <form>
                  <TextField
                    fullWidth
                    autoFocus
                    helperText="Choose Username"
                     id="username"
                     label="Choose Username"
                     className={classes.textField}
                     margin="normal"
                     // value={this.state.name}
                     // onChange={this.handleChange('name')}
                     variant="outlined"
                   />
                   <TextField
                     fullWidth
                     helperText="Enter Email"
                      id="email"
                      label="Enter Email"
                      className={classes.textField}
                      margin="normal"
                      // value={this.state.name}
                      // onChange={this.handleChange('name')}
                      variant="outlined"
                    />
                   <TextField
                     fullWidth
                     helperText="Password should be at least 8 characters"
                      id="password"
                      label="Choose Password"
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
                      Signup
                    </Button>
                </form>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(signupPageStyle)(SignupPage);
