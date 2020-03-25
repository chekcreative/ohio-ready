import React from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  cardsWrapper: {
    flexShrink: '1', 
    flexGrow: '1', 
    padding: '0px 16px'
  },
  cardStyling: {
    padding: '16px'
  }
}));

function NewsWrapper() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="column" className={classes.cardsWrapper}>
      <Grid item>
        <Card className={classes.cardStyling}>
          data 1
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.cardStyling}>
          data 1
        </Card>
      </Grid>
    </Grid>
  );
}

export default NewsWrapper;