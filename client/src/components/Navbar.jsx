import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import navbarStyle from '../assets/jss/navbarStyle'

function Navbar(props) {
  const { classes } = props;

  let tabs;
  if(!props.isAuthenticated) {
    tabs =
    <Grid container justify="flex-end" sm={10}>
      <Link className={classes.link} to="/login"><Button color="inherit">Login</Button></Link>
      <Link className={classes.link} to="/signup"><Button color="inherit">Signup</Button></Link>
    </Grid>
  } else {
    tabs =
    <React.Fragment>
    <Grid container justify="flex-start" sm={6}>
      <Button className={classes.menuButton} color="inherit">Protfolio</Button>
      <Button className={classes.menuButton} color="inherit">Trade History</Button>
    </Grid>
    <Grid container justify="flex-end" sm={4}>
      <Button className={classes.menuButton} color="inherit">Logout</Button>
    </Grid>
  </React.Fragment>
  }


  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Grid xs={11} sm={2}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              xTrader
            </Typography>
          </Grid>
          <Hidden xsDown>
            {tabs}
          </Hidden>
          <Hidden smUp>
            <Grid>
              <MenuIcon className={classes.menuIcon}/>
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
