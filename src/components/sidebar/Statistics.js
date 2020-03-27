import React from 'react';

// styling
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  statisticsWrapper: {
    padding: '11px 0px'
  },
  statisticsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    '&:last-of-type': {
      marginBottom: '0px',
    }
  },
  statisticDiv2: {
    width: '50%'
  },
  statisticDiv3: {
    width: '33%'
  },
  statisticDivTitle: {
    fontSize: '10px',
    lineHeight: '11px'
  },
  statisticNumber: {
    fontWeight: '700'
  },
  statisticNumberBlack: {
    color: '#000'
  },
  statisticNumberRed: {
    color: '#AF0000'
  },
  statisticNumberGreen: {
    color: '#008117'
  },
  statisticNumberPurple: {
    color: '#590000'
  }
}));

function Statistics() {
  const classes = useStyles();
  return (
    <div className={classes.statisticsWrapper}>
      <div className={classes.statisticsRow}>
        <div class={classes.statisticDiv2}>
          <h6 class={classes.statisticDivTitle}>TOTAL INFECTED</h6>
          <span class={clsx(classes.statisticNumber, classes.statisticNumberBlack)}>10,000</span>
        </div>
        <div class={classes.statisticDiv3}>
          <h6 class={classes.statisticDivTitle}>AS OF</h6>
          <span class={clsx(classes.statisticNumber, classes.statisticNumberBlack)}>MAR 22</span>
        </div>
      </div>
      <div className={classes.statisticsRow}>
        <div class={classes.statisticDiv3}>
          <h6 class={classes.statisticDivTitle}>SICK</h6>
          <span class={clsx(classes.statisticNumber, classes.statisticNumberBlack)}>10,000</span>
        </div>
        <div class={classes.statisticDiv3}>
          <h6 class={classes.statisticDivTitle}>RECOVERED</h6>
          <span class={clsx(classes.statisticNumber, classes.statisticNumberGreen)}>10,000</span>
        </div>
        <div class={classes.statisticDiv3}>
          <h6 class={classes.statisticDivTitle}>DEATHS</h6>
          <span class={clsx(classes.statisticNumber, classes.statisticNumberPurple)}>10,000</span>
        </div>
      </div>
    </div>
  );
}

export default Statistics;