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

import navbarStyle from '../assets/jss/navbarStyle'

function Navbar(props) {
  const { classes } = props;

  let tabs;
  if(!props.isAuthenticated) {
    tabs =
    <React.Fragment>
      <Link className={classes.link} to="/login"><Button color="inherit">Login</Button></Link>
      <Link className={classes.link} to="/signup"><Button color="inherit">Signup</Button></Link>
    </React.Fragment>
  } else {
    tabs = <React.Fragment>
      <Button className={classes.menuButton} color="inherit">Protfolio</Button>
      <Button className={classes.menuButton} color="inherit">Trade History</Button>
      <Button className={classes.menuButton} color="inherit">Logout</Button>
    </React.Fragment>
  }


  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Hidden xsDown>
            {tabs}
          </Hidden>
          <Hidden smUp>
              <MenuIcon className={classes.menuIcon}/>
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
