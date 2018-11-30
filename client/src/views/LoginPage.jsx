import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions/index';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

import loginPageStyle from '../assets/jss/views/loginPageStyle'

class LoginPage extends React.Component {

  state = {
    email: '',
    password: '',
    emailEmpty: false,
    passwordEmpty: false
  }

  componentDidMount() {
    this.setState({ email: this.props.userEmail })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitHandler = ( event ) => {
    event.preventDefault();
    this.setState ({ emailEmpty: false, passwordEmpty: false })
    if(this.state.email && this.state.password) {
      this.props.onLogin( this.state.email, this.state.password);
    }
    if(!this.state.email) {
      this.setState({ emailEmpty: true})
    }
    if(!this.state.password) {
      this.setState({ passwordEmpty: true})
    }

  }

  render() {
    const { classes } = this.props;

    let emailHelperText = "Enter Email"
    if(this.state.emailEmpty) {
      emailHelperText= "Email can not be blank"
    }

    let passwordHelperText = "Enter Password"
    if(this.state.passwordEmpty) {
      emailHelperText= "Password can not be blank"
    }

    let loginError = null;
    if(this.props.errors) {
      loginError=
      <Collapse
        in={true}
        timeout="auto"
        >
        <Button
          variant="outlined"
          color="primary"
          className={classes.errorMessage}
          fullWidth
          >
          {this.props.errors}
        </Button>
      </Collapse>
    }

    let authRedirect = null;
      if ( this.props.isAuthenticated ) {
          authRedirect = <Redirect to="/protfolio" />
      }

    return (
      <div className={classes.root}>
        {authRedirect}
        <Grid container>
          <Grid item xs={12} className={classes.header}>
            <Typography style={{color:"white"}} variant="h4">LOGIN</Typography>
              {loginError}
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <form onSubmit={this.submitHandler}>
                <TextField
                  fullWidth
                  error={this.state.emailEmpty}
                  autoFocus
                  helperText={emailHelperText}
                  id="email"
                  label="Email"
                  className={classes.textField}
                  margin="normal"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  variant="outlined"
                 />
                 <TextField
                   fullWidth
                   error={this.state.passwordEmpty}
                   helperText={passwordHelperText}
                   id="password"
                   label="Password"
                   className={classes.textField}
                   margin="normal"
                   value={this.state.password}
                   onChange={this.handleChange('password')}
                   variant="outlined"
                  />
                  <Button
                    type="submit"
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

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        errors: state.auth.loginError,
        isAuthenticated: state.auth.token !== null,
        userEmail: state.auth.userEmail
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogin: ( email, password ) => dispatch( actions.login( email, password) ),
    };
};

export default connect( mapStateToProps, mapDispatchToProps )(withStyles(loginPageStyle)(LoginPage));
