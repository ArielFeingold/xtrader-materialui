import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import protfolioListItemStyle from '../assets/jss/protfolioListItemStyle'

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function ProtfolioListItem(props){
  const { classes } = props;

  return(
    <ListItem>
      <Grid item xs={2}>
        {props.symbol}
      </Grid>
      <Grid item xs={4}>
        {props.userShares}
      </Grid>
      <Grid item xs={4}>
        {props.currentPrice * props.userShares}
      </Grid>
      <Grid item xs={2}>
        <div className={classes.arrowUp}></div>
      </Grid>
     </ListItem>
  )
}

ProtfolioListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(protfolioListItemStyle)(ProtfolioListItem);
