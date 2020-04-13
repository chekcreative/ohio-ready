import React, {useCallback, useEffect, useRef, useState} from 'react';

// redux
import {connect} from "react-redux";
import {closeFullChart} from "../actions/actions";

// styling
import {makeStyles} from "@material-ui/core/styles";

// material ui components
import Card from "@material-ui/core/Card";

// components
import FullBarChart from "./barCharts/FullBarChart";

// icons
import closeIcon from "../icons/close_white.svg";

// utils
import {
  AS_OF_KEY,
  getDailyCaseTotals,
  TOTAL_CASES_KEY,
  TOTAL_DEATHS_KEY,
  VERTICAL_FILL_KEY
} from "../utils/getAggregateCaseData";
import {barChartColors} from "../utils/barChartStyling";

import {caseData} from "../sampleData/dailyCaseData_20200413";


const useStyles = makeStyles((theme) => ({
  cover: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: 100,
    backgroundColor: 'hsla(0, 0%, 35%, 0.9)',
    top: '0',
    left: '0',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1000,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  modalCard: {
    padding: '32px'
  },
  chartTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: '16px',
    color: '#000',
    fontWeight: '700',
    margin: 0,
  },
  chartSubTitle: {
    fontSize: '12px',
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
  closeIcon: {
    padding: '3px',
    height: '100%',
    width: '100%',
  },
  chartWrapper: {
    height: '40rem',
    margin: '32px 0 16px',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  chartLoading: {
    display: 'block',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    fontSize: '24px',
    lineHeight: '38rem',
  },
  sticky: {
    position: 'sticky',
    top: '32px'
  },
  chartSource: {
    textAlign: 'right',
    margin: 0,
  },
  chartLegend: {
    height: '16px',
    marginLeft: '40px',
    marginBottom: '16px',
  },
  chartLegendItem: {
    display: 'inline-block',
    height: '16px',
    marginRight: '16px',
  },
  chartLegendText: {
    fontSize: '12px',
    verticalAlign: 'middle'
  },
  chartLegendIndicator: {
    verticalAlign: 'middle'
  }
}));


function ChartLegend() {
  const classes = useStyles();

  return (
    <div className={classes.chartLegend}>
      <div className={classes.chartLegendItem}>
        <svg className={classes.chartLegendIndicator} width="24" height="16">
          <rect width="16" height="16" fill={barChartColors.bar.infected}/>
        </svg>
        <span className={classes.chartLegendText}>TOTAL CASES</span>
      </div>
      <div className={classes.chartLegendItem}>
        <svg className={classes.chartLegendIndicator} width="24" height="16">
          <rect width="16" height="16" fill={barChartColors.bar.deaths}/>
        </svg>
        <span className={classes.chartLegendText}>TOTAL DEATHS</span>
      </div>
    </div>
  )
}


function FullChartModal(props) {

  const classes = useStyles();
  const [chartData, setChartData] = useState(caseData);
  const [isLoading, setIsLoading] = useState(false);
  const [chartScroll, setChartScroll] = useState(0);
  const chartWrapper = useRef(null);

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      props.closeFullChart();
    }
  }, [props]);

  useEffect(() => {
    // setIsLoading(true);
    // getCaseData()
    //   .then(() => {
    //     setIsLoading(false);
    //   });

    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    console.log(chartWrapper.current);
    console.log(chartWrapper.current.scrollWidth);
    console.log(chartWrapper.current.clientWidth);
    console.log(chartWrapper.current.scrollWidth - chartWrapper.current.clientWidth);
  }, [chartData]);


  const getCaseData = () => {
    return getDailyCaseTotals()
      .then((newChartData) => {
        setChartData(newChartData);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleScroll = (event) => {
    setChartScroll(chartWrapper.current.scrollLeft);
  };

  return (
    <React.Fragment>
      <div className={classes.cover}>
      </div>
      <div className={classes.modal}>
        <div className={classes.sticky}>
          <Card className={classes.modalCard}>
            <div className={classes.chartTitleWrapper}>
              <div>
                <h3 className={classes.chartTitle}>CASE COUNTS</h3>
                <h4 className={classes.chartSubTitle}>DAILY TOTALS</h4>
              </div>
              <div className={classes.iconWrapper}>
                <img
                  src={closeIcon}
                  alt="Close Fullscreen Chart"
                  className={classes.closeIcon}
                  onClick={() => {props.closeFullChart()}}/>
              </div>
            </div>
            <div
              className={classes.chartWrapper}
              ref={chartWrapper}
              onScroll={handleScroll}
            >
              {isLoading && <p className={classes.chartLoading}>LOADING...</p>}
              <FullBarChart
                chartData={chartData}
                keys={[TOTAL_DEATHS_KEY, TOTAL_CASES_KEY, VERTICAL_FILL_KEY]}
                indexBy={AS_OF_KEY}
                scrollPosition={chartScroll}
              />
            </div>
            {!isLoading && <ChartLegend/>}
            <div>
              <p className={classes.chartSource}>
                SOURCE: <a href="http://coronavirus.ohio.gov/" rel="noopener noreferrer" target="_blank">Ohio Department of Health</a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </React.Fragment>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    closeFullChart: () => {
      dispatch(closeFullChart())
    }
  }
}


export default connect(null, mapDispatchToProps)(FullChartModal)