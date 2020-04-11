import React, {useEffect, useState} from 'react';

// redux
import {connect} from "react-redux";
import {openFullChart} from "../../actions/actions";

// styling
import {makeStyles} from '@material-ui/core/styles';

// components
import SmallBarChart from "../barCharts/SmallBarChart";

// icons
import fullscreenIcon from "../../icons/fullscreen_white.svg";

// utils
import {AS_OF_KEY, getSaturdayCaseTotals, TOTAL_CASES_KEY, TOTAL_DEATHS_KEY} from "../../utils/getAggregateCaseData";


const useStyles = makeStyles((theme) => ({
  chartAreaWrapper: {
    padding: '11px 0px',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  chartTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: '12px',
    color: '#000',
    fontWeight: '700',
    margin: 0,
  },
  chartSubTitle: {
    fontSize: '11px',
    color: '#757575',
    fontWeight: '700',
    margin: 0,
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    backgroundColor: '#4B00FF',
    borderRadius: '4px',
    height: '40px',
    width: '40px',
    marginLeft: '10px',
    cursor: 'pointer'
  },
  fullscreenIcon: {
    padding: '3px',
    height: '100%',
    width: '100%',
  },
  barChartWrapper: {
    height: '15rem',
    paddingTop: '15px',
  }
}));

function InfectionsChart(props) {
  const classes = useStyles();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
      getCaseData()
    });

  const getCaseData = () => {
    getSaturdayCaseTotals()
      .then((newChartData) => {
        setChartData(newChartData)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div className={classes.chartAreaWrapper}>
      <div className={classes.chartTitleWrapper}>
        <div>
          <h3 className={classes.chartTitle}>CASE COUNTS</h3>
          <h4 className={classes.chartSubTitle}>WEEKLY TOTALS</h4>
        </div>
        <div className={classes.iconWrapper}>
          <img
            src={fullscreenIcon}
            alt="View Fullscreen Chart"
            className={classes.fullscreenIcon}
            onClick={() => {props.openFullChart()}}/>
        </div>
      </div>
      <div className={classes.barChartWrapper}>
        <SmallBarChart
          chartData={chartData}
          keys={[TOTAL_DEATHS_KEY, TOTAL_CASES_KEY]}
          indexBy={AS_OF_KEY}
        />
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    openFullChart: () => {
      dispatch(openFullChart())
    }
  }
}

export default connect(null, mapDispatchToProps)(InfectionsChart);