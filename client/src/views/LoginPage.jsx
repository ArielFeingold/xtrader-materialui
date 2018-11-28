import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../store/actions/index';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

import loginPageStyle from '../assets/jss/views/loginPageStyle'

class LoginPage extends React.Component {

  state = {
    email: '',
    password: '',
  }

  componentDidMount() {
    this.setState({ email: this.props.userEmail})
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  submitHandler = ( event ) => {
    event.preventDefault();
    this.props.onLogin( this.state.email, this.state.password);
  }

  render() {
    const { classes } = this.props;

    let loginError = null;
    if(this.props.errors) {
      loginError=
      <Collapse
        in={this.props.errors}
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
                  autoFocus
                  helperText="Enter Email"
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
                   helperText="Enter Password"
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
