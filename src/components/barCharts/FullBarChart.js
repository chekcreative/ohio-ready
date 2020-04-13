import React from "react";
import {ResponsiveBar} from "@nivo/bar";
import {buildCustomTick, buildCustomTooltip, commonBarProperties, nivoTheme} from "../../utils/barChartStyling";


function FullBarChart(props) {
  const fontSize = '12px';
  const theme = nivoTheme(fontSize);
  const CustomTick = buildCustomTick(props.chartData.length, 4, theme);
  const CustomTooltip = buildCustomTooltip(props.indexBy, props.keys, fontSize);

  return (
    <ResponsiveBar
      {...commonBarProperties}
      data={props.chartData}
      keys={props.keys}
      indexBy={props.indexBy}
      margin={{ top: 0, right: 5, bottom: 20, left: 40 }}
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
        tickValues: 5
      }}
      theme={theme}
    />
  )
}

export default FullBarChart;