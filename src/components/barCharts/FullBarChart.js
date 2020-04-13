import React from "react";
import {Bar, ResponsiveBar} from "@nivo/bar";
import {buildCustomTick, buildCustomTooltip, commonBarProperties, nivoTheme} from "../../utils/barChartStyling";


function FullBarChart(props) {
  const fontSize = '12px';
  const theme = nivoTheme(fontSize);
  const CustomTick = buildCustomTick(props.chartData.length, 4, theme);
  const CustomTooltip = buildCustomTooltip(props.indexBy, props.keys, fontSize);

  return (
    <ResponsiveBar
      {...commonBarProperties}
      width={props.chartData.length*30}
      data={props.chartData}
      keys={props.keys}
      indexBy={props.indexBy}
      margin={{top: 0, right: 0, bottom: 65, left: 40}}
      tooltip={CustomTooltip}
      gridYValues={5}
      axisBottom={{
        tickPadding: 0,
        renderTick: CustomTick,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 4,
        tickRotation: 0,
        tickValues: 5,
        renderTick: function(tick) {
          return (<g transform={`translate(${tick.x + props.scrollPosition},${tick.y})`} style={{opacity: 1}}>
            <rect width={44} height={240} fill={'white'} dominantBaseline={"central"} transform="translate(-45,-220)"/>
            <text dominantBaseline="central" textAnchor="end" transform="translate(-4,0) rotate(0)" style={{
              fontSize: '12px',
              fill: 'rgb(117, 117, 117)',
              fontFamily: 'inherit',
            }}>
              {tick.value}
            </text>
          </g>)
        }
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-left',
          direction: 'row',
          translateX: 0,
          translateY: 60,
          itemWidth: 125,
          itemHeight: 20,
          itemTextColor: theme.legends.text.fill,
        }
      ]}
      layers={['grid', 'bars', 'axes', 'markers', 'legends', 'annotations']}
      theme={theme}
    />
  )
}

export default FullBarChart;