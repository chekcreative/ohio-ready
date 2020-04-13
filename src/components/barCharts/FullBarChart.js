import React from "react";
import {ResponsiveBar} from "@nivo/bar";
import {
  barChartColors,
  buildCustomTick,
  buildCustomTooltip,
  commonBarProperties,
  nivoTheme
} from "../../utils/barChartStyling";


function FullBarChart(props) {
  const fontSize = '12px';
  const theme = nivoTheme(fontSize);
  const CustomTick = buildCustomTick(props.chartData.length, 4, theme);
  const CustomTooltip = buildCustomTooltip(props.indexBy, props.keys, fontSize);

  const barWidth = 28;
  const axisLeftWidth = 40;

  return (
    <ResponsiveBar
      {...commonBarProperties}
      width={props.chartData.length*barWidth}
      data={props.chartData}
      keys={props.keys}
      indexBy={props.indexBy}
      margin={{ top: 0, right: 5, bottom: 20, left: axisLeftWidth }}
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
          const minimumHeightBetweenYValues = 160;
          return (
            <g transform={`translate(${props.scrollPosition+tick.x},${tick.y})`} style={{opacity: 1}}>
              <rect
                width={axisLeftWidth+4}
                height={minimumHeightBetweenYValues+40}
                fill={'white'}
                dominantBaseline={"central"}
                transform={`translate(-${axisLeftWidth+4+1},-${minimumHeightBetweenYValues+20})`}
              />
              <text
                dominantBaseline="central"
                textAnchor="end"
                transform="translate(-4,0) rotate(0)"
                style={{
                  fontSize: fontSize,
                  fill: barChartColors.text.labels,
                  fontFamily: 'inherit',
                }}
              >
                {tick.value}
              </text>
            </g>
          )
        }
      }}
      layers={['grid', 'bars', 'axes', 'markers', 'legends', 'annotations']}
      theme={theme}
    />
  )
}

export default FullBarChart;