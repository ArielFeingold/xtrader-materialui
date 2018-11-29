import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const styles = {
  link: {
    textDecoration: 'none',
  },
};

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (value) => () => {
    this.setState({
      top: value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <IconButton
          onClick={this.toggleDrawer(true)}
        >
          <MenuIcon style={{color:"white"}} />
        </IconButton>

        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {this.props.tabs.map((tab, index) => {
              return(
                <Link key={index} className={classes.link} to={tab.link}>
                  <ListItem >
                    <Typography variant="subtitle1">
                      {tab.name}
                    </Typography>
                  </ListItem>
                </Link>
              )
            })}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);















// import React from 'react';
// import { Link } from 'react-router-dom'
//
// import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuIcon from '@material-ui/icons/Menu';
//
// class PopupMenu extends React.Component {
//   state = {
//     top: false,
//   };
//
//   toggleDrawer = (side, open) => () => {
//     this.setState({
//       [side]: open,
//     });
//   };
//
//   render() {
//     const { anchorEl } = this.state;
//
//     return (
//       <SwipeableDrawer
//           anchor="top"
//           open={this.state.top}
//           onClose={this.toggleDrawer('top', false)}
//           onOpen={this.toggleDrawer('top', true)}
//         >
//           <div
//             tabIndex={0}
//             role="button"
//             onClick={this.toggleDrawer('top', false)}
//             onKeyDown={this.toggleDrawer('top', false)}
//           >
//             {fullList}
//           </div>
//         </SwipeableDrawer>
//
//       <div>
//         <IconButton
//           aria-owns={anchorEl ? 'simple-menu' : undefined}
//           aria-haspopup="true"
//           onClick={this.handleClick}
//         >
//           <MenuIcon style={{color:"white"}} />
//         </IconButton>
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={this.handleClose}
//         >
//
//         </Menu>
//       </div>
//     );
//   }
// }
//
// export default PopupMenu;
//
// {this.props.tabs.map(tab => {
//   return <Link to={tab.link}><MenuItem onClick={this.handleClose}>{tab.name}</MenuItem></Link>
// })}
