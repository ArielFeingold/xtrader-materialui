import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import brandImage from '../assets/images/brandImage.jpg'

import PopupMenu from './PopupMenu'
import navbarStyle from '../assets/jss/navbarStyle'

function Navbar(props) {
  const { classes } = props;

  let tabs, menuLinks;
  if(!props.isAuthenticated) {
    tabs =
    <Grid container justify="flex-end">
      <Link className={classes.link} to="/login"><Button color="inherit">Login</Button></Link>
      <Link className={classes.link} to="/signup"><Button color="inherit">Signup</Button></Link>
    </Grid>
    menuLinks = [{link:"/login", name:"Login"}, {link:"/signup", name:"Signup"} ]
  } else {
    tabs =
    <React.Fragment>
    <Grid container justify="flex-start">
      <Link className={classes.link} to="/protfolio"><Button color="inherit">Protfolio</Button></Link>
      <Link className={classes.link} to="/trade-history"><Button color="inherit">Trade History</Button></Link>
    </Grid>
    <Grid container justify="flex-end">
      <Link className={classes.link} to="/logout"><Button color="inherit">Logout</Button></Link>
    </Grid>
  </React.Fragment>
  menuLinks = [{link:"/protfolio", name:"Protfolio"}, {link:"/transactions", name:"Transactions"}, {link:"/logout", name:"Logout"}]
  }


  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Grid item xs={11} sm={2}>
            <img src={brandImage} height="40px" alt="brand-logo"/>
          </Grid>
          <Hidden xsDown>
            {tabs}
          </Hidden>
          <Hidden smUp>
            <Grid>
              <PopupMenu
                tabs={menuLinks}
              />
            </Grid>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect( mapStateToProps)(withStyles(navbarStyle)(Navbar));
