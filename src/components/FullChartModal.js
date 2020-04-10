import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import axios from "axios";
import axiosHeader from "../utils/axiosHeader";
import generateDateString from "../utils/generateDateString";
import {ResponsiveBar} from "@nivo/bar";
import {closeFullChart} from "../actions/actions";
import {connect} from "react-redux";
import {caseData} from "../sampleData/dailyCaseData_20200410";
import closeIcon from "../icons/close_white.svg";

const useStyles = makeStyles((theme) => ({
  cover: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: 100,
    backgroundColor: 'hsla(0, 0%, 35%, 0.9)',
    top: '0',
    left: '0'
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: '0 16px',
    zIndex: 1000,
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
    height: '41rem',
    margin: '32px 0 16px',
  },
  sticky: {
    position: 'sticky',
    top: '32px'
  },
  tooltipLabel: {
    fontSize: '12px',
    margin: '0'
  }
}));

// primary color: hsl(258, 100%, 50%)
const infected_text_color = "hsla(243, 100%, 60%)";
const infected_bar_color = "hsla(233, 100%, 83%)";
const deaths_bar_color = "red";

const chartTheme = {
  axis: {
    ticks: {
      text: {
        fontSize: '12px',
        fill: '#757575',
        fontFamily: 'inherit',
      }
    }
  },
  legends: {
    text: {
      fontSize: 12,
      fontWeight: '700',
    }
  }
};

function FullChartModal(props) {

  const classes = useStyles();
  const [chartData, setChartData] = useState(caseData);

  useEffect(() => {
    // getCaseData()
  }, []);

  const getCaseData = () => {
    const url = `https://ohioready-api.zwink.net/v1/case_summary.agg/?aggregate[Sum]=total&aggregate[Sum]=deaths&aggregate[Sum]=recovered&group_by[as_of]`;

    axios.get(url, axiosHeader)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data) {
            const newChartData = res.data.data
              .map((dataPoint) => {
                return {
                  as_of_string: generateDateString(dataPoint.as_of, false),
                  "TOTAL CASES": dataPoint.sum_total,
                  "TOTAL DEATHS": dataPoint.sum_deaths,
                }
              });

            setChartData(newChartData);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const CustomTick = tick => {
    let nTicksToShow = 4;
    let tickInterval = Math.floor(chartData.length / (nTicksToShow - 1));
    let showTick = (chartData.length - tick.tickIndex - 1) % tickInterval === 0;
    return showTick ? (
      <g transform={`translate(${tick.x},${tick.y + 22})`}>
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fill: '#757575',
            fontSize: 12,
          }}
        >
          {tick.value}
        </text>
      </g>
    ) : null
  };

  return (
    <>
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
            <div className={classes.chartWrapper}>
              <ResponsiveBar
                data={chartData}
                keys={['TOTAL DEATHS', 'TOTAL CASES']}
                indexBy="as_of_string"
                margin={{ top: 0, right: 0, bottom: 65, left: 40 }}
                padding={0.2}
                colors={[deaths_bar_color, infected_bar_color]}
                enableLabel={false}
                tooltip={({data}) => (
                  <div>
                    <p className={classes.tooltipLabel}>
                      AS OF {data.as_of_string}
                    </p>
                    <p style={{color: infected_text_color}} className={classes.tooltipLabel}>
                      {data.total_infected} INFECTED
                    </p>
                    <p style={{color: deaths_bar_color}} className={classes.tooltipLabel}>
                      {data.total_deaths} DEATHS
                    </p>
                  </div>
                )
                }
                enableGridX={false}
                enableGridY={true}
                gridYValues={5}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  tickPadding: 0,
                  renderTick: CustomTick,
                }}
                axisLeft={{
                  tickSize: 0,
                  tickPadding: 4,
                  tickRotation: 0,
                  tickValues: 5
                }}
                legends={[
                  {
                    dataFrom: 'keys',
                    anchor: 'bottom-left',
                    direction: 'row',
                    translateX: 0,
                    translateY: 65,
                    itemWidth: 125,
                    itemHeight: 20,
                    itemTextColor: '#757575'
                  }
                ]}
                animate={true}
                motionStiffness={200}
                motionDamping={30}
                theme={chartTheme}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
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