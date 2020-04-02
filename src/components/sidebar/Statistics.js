import React, {useState, useEffect } from 'react';

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
  statisticsRowDesktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  statisticsRowMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  statisticDiv2: {
    width: '50%',
  },
  statisticDiv3: {
    width: '33%'
  },
  statisticDiv4: {
    width: '25%'
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

function Statistics(props) {
  const classes = useStyles();

  const [dateString, updateDateString] = useState(props.dateString);

  useEffect(() => {
    updateDateString(props.dateString)
  }, [props.dateString])

  return (
    <div className={classes.statisticsWrapper}>

      {/* DESKTOP ROW 1 */}
      <div className={clsx(classes.statisticsRow, classes.statisticsRowDesktop)}>
        <div className={classes.statisticDiv2}>
          <h6 className={classes.statisticDivTitle}>TOTAL INFECTED</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberBlack)}>{props.totalInfected}</span>
        </div>
        <div className={classes.statisticDiv3}>
          <h6 className={classes.statisticDivTitle}>AS OF</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberBlack)}>{ dateString }</span>
        </div>
      </div>

      {/* DESKTOP ROW 2 */}
      <div className={clsx(classes.statisticsRow, classes.statisticsRowDesktop)}>

        {/* SICK is in the design, but we are not yet able to get data on it */}
        {/* <div className={classes.statisticDiv3}>
          <h6 className={classes.statisticDivTitle}>SICK</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberBlack)}>-</span>
        </div> */}

        <div className={classes.statisticDiv3}>
          <h6 className={classes.statisticDivTitle}>RECOVERED</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberGreen)}>{props.totalRecovered}</span>
        </div>
        <div className={classes.statisticDiv3}>
          <h6 className={classes.statisticDivTitle}>DEATHS</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberPurple)}>{props.totalDeaths}</span>
        </div>
      </div>

      {/* MOBILE - ALLON 1 ROW for MVP */}
      <div className={clsx(classes.statisticsRow, classes.statisticsRowMobile)}>
        <div className={classes.statisticDiv4}>
          <h6 className={classes.statisticDivTitle}>AS OF</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberBlack)}>{ dateString }</span>
        </div>
        <div className={classes.statisticDiv4}>
          <h6 className={classes.statisticDivTitle}>INFECTED</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberBlack)}>{props.totalInfected}</span>
        </div>
        <div className={classes.statisticDiv4}>
          <h6 className={classes.statisticDivTitle}>RECOVERED</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberGreen)}>{props.totalRecovered}</span>
        </div>
        <div className={classes.statisticDiv4}>
          <h6 className={classes.statisticDivTitle}>DEATHS</h6>
          <span className={clsx(classes.statisticNumber, classes.statisticNumberPurple)}>{props.totalDeaths}</span>
        </div>
      </div>
    </div>
  );
}

export default Statistics;