import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import protfolioListItemStyle from '../assets/jss/protfolioListItemStyle'

import SellButton from './SellButton'

import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function ProtfolioListItem(props){
  const { classes } = props;

  let trend;
  if(props.currentPrice > props.openingPrice){ trend = classes.arrowUp}
  if(props.currentPrice === props.openingPrice) { trend= classes.square }
  if(props.currentPrice < props.openingPrice) { trend= classes.arrowDown }

  return(
    <Grid container >
      <ListItem>
        <Grid item xs={2}>
          <Typography>{props.symbol}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{props.userShares}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{props.currentPrice}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>{props.currentPrice * props.userShares}</Typography>
        </Grid>
        <Grid item xs={2}>
          <div className={trend}></div>
        </Grid>
        <Grid item xs={2}>
          <SellButton
            userShares={props.userShares}
            symbol={props.symbol}
            currentPrice={props.currentPrice}
          />
        </Grid>
       </ListItem>
       <Divider/>
    </Grid>

  )
}

ProtfolioListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(protfolioListItemStyle)(ProtfolioListItem);
