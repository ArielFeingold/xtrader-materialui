import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
  return (
    <div className={classes.root}>
      <AppBar position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Hidden xsDown>
            <Button className={classes.menuButton} color="inherit">Login</Button>
            <Button className={classes.menuButton} color="inherit">Signup</Button>
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

export default withStyles(navbarStyle)(Navbar);
