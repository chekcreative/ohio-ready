import React, {useEffect, useState} from 'react';
import { ResponsiveBar } from '@nivo/bar'

// styling
import { makeStyles } from '@material-ui/core/styles';

// utils
import axios from "axios";
import axiosHeader from "../../utils/axiosHeader";
import generateDateString from "../../utils/generateDateString";

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
    color: '#000',
    fontWeight: '700'
  }
}));

function InfectionCurve() {
  const classes = useStyles();
  const [chartData, setChartData] = useState([]);


  useEffect(() => {
      console.log("useMemo");
      getCaseData()
    }, []);

  const getCaseData = () => {
    const url = `https://ohioready-api.zwink.net/v1/case_summary.agg/?aggregate[Sum]=total&aggregate[Sum]=deaths&aggregate[Sum]=recovered&group_by[as_of]`;

    axios.get(url, axiosHeader)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.data) {
            const newChartData = res.data.data.map((dataPoint) => {
              // use UTC here
              return {
                as_of: dataPoint.as_of,
                total_infected: dataPoint.sum_total,
                total_deaths: dataPoint.sum_deaths,
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

  const infected_color = "hsla(240, 50%, 80%)";
  const infected_color_readable = "hsla(240, 50%, 60%)";
  const deaths_color = "red";

  return (
    <div className={classes.chartAreaWrapper}>
      <h6 className={classes.chartTitle}>INFECTION CURVE</h6>
      <div className={classes.chartWrapper}>
        <ResponsiveBar
          data={chartData}
          keys={['total_infected', 'total_deaths']}
          indexBy="as_of"
          margin={{ top: 0, right: 0, bottom: 5, left: 40 }}
          padding={0.3}
          colors={[infected_color, deaths_color]}
          enableLabel={false}
          tooltip={({data}) => (
            <div>
              <p style={{fontSize: '10px', margin: '0'}}>
                TOTALS AS OF {generateDateString(data.as_of, false)}
              </p>
              <p style={{color: infected_color_readable, fontSize: '10px', margin: '0'}}>
                INFECTED: {data.total_infected}
              </p>
              <p style={{color: deaths_color, fontSize: '10px', margin: '0'}}>
                DEATHS: {data.total_deaths}
              </p>
            </div>
          )
          }
          xFormat="time:%Y-%m-%d"
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