import React, {useEffect, useState} from 'react';
import { ResponsiveBar } from '@nivo/bar'

// styling
import { makeStyles } from '@material-ui/core/styles';

// utils
import axios from "axios";
import axiosHeader from "../../utils/axiosHeader";
import generateDateString from "../../utils/generateDateString";
import * as moment from "moment";

const useStyles = makeStyles((theme) => ({
  chartAreaWrapper: {
    padding: '11px 0px',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  chartWrapper: {
    height: '15rem',
    paddingTop: '15px',
  },
  chartTitle: {
    fontSize: '12px',
    color: '#757575',
    fontWeight: '700'
  },
  tooltipLabel: {
    fontSize: '10px',
    margin: '0'
  }
}));

// primary color: hsl(258, 100%, 50%)
const infected_text_color = "hsla(243, 100%, 60%)";
const infected_bar_color = "hsla(233, 100%, 83%)";
const deaths_bar_color = "red";


function InfectionCurve() {
  const classes = useStyles();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
      getCaseData()
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
                  day_of_week: moment.utc(dataPoint.as_of).day(),
                  total_infected: dataPoint.sum_total,
                  total_deaths: dataPoint.sum_deaths,
                }
              })
              .filter(dataPoint => dataPoint.day_of_week === 6);

            setChartData(newChartData);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div className={classes.chartAreaWrapper}>
      <h6 className={classes.chartTitle}>WEEKLY INFECTION TOTALS</h6>
      <div className={classes.chartWrapper}>
        <ResponsiveBar
          data={chartData}
          keys={['total_deaths', 'total_infected']}
          indexBy="as_of_string"
          margin={{ top: 0, right: 0, bottom: 5, left: 40 }}
          padding={0.3}
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
          gridYValues={4}
          axisTop={null}
          axisRight={null}
          axisBottom={null}
          axisLeft={{
            tickSize: 0,
            tickPadding: 4,
            tickRotation: 0,
            tickValues: 4
          }}
          animate={true}
          motionStiffness={200}
          motionDamping={30}
         />
      </div>
    </div>
  );
}

export default InfectionCurve;