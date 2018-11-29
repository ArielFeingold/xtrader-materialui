import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import signupPageStyle from '../assets/jss/views/signupPageStyle'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class SignupPage extends React.Component {

  state = {
    email: '',
    password: '',
    username: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitHandler = ( event ) => {
    event.preventDefault();
    this.props.onSignup( this.state.email, this.state.password, this.state.username);
  }

  render() {
    const { classes } = this.props;

    let authRedirect;
    if(this.props.isAuthenticated) {
      authRedirect = <Redirect to="/protfolio" />
    }
      if ( this.props.isNewSignup ) {
        authRedirect = <Redirect to="/login" />
    }

    let signupErrors = this.props.errors

    let usernameText = "Choose Username", passwordText = "Password should be at least 8 characters", emailText = "Enter Email";
    let usernameError = false, emailError = false, passwordError = false

    if(signupErrors) {
      if(signupErrors.username) {
        usernameText = 'Username ' +signupErrors.username[0];
        usernameError = true;
      }
      if(signupErrors.email) {
        emailText = 'Email ' + signupErrors.email[0];
        emailError = true;
      }
      if(signupErrors.password) {
        passwordText = 'Password ' + signupErrors.password[0];
        passwordError = true;
      }
    }

    return (
      <div className={classes.root}>
        {authRedirect}
        <Grid container>
          <Grid item xs={12} className={classes.header}>
            <Typography style={{color:"white"}} variant="h4">SIGNUP</Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid>
                <form onSubmit={this.submitHandler}>
                  <TextField
                    fullWidth
                    autoFocus
                    helperText={usernameText}
                    id="username"
                    label="Choose Username"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    variant="outlined"
                    error={usernameError}
                   />
                   <TextField
                     fullWidth
                     helperText={emailText}
                     id="email"
                     label="Enter Email"
                     className={classes.textField}
                     margin="normal"
                     value={this.state.email}
                     onChange={this.handleChange('email')}
                     variant="outlined"
                     error={emailError}
                    />
                   <TextField
                     fullWidth
                     helperText={passwordText}
                     id="password"
                     label="Choose Password"
                     className={classes.textField}
                     margin="normal"
                     value={this.state.password}
                     onChange={this.handleChange('password')}
                     variant="outlined"
                     error={passwordError}
                    />
                    <Button
                      type="submit"
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

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        errors: state.auth.signupError,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath,
        isNewSignup: state.auth.isNewSignup,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: ( email, password, username ) => dispatch( actions.signup( email, password, username) )
    };
};


export default connect( mapStateToProps, mapDispatchToProps )(withStyles(signupPageStyle)(SignupPage));
