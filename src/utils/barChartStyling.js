import React from "react";

const colors = {
  text: {
    infected: 'hsla(243, 100%, 60%)',
    deaths: 'red',
    labels: '#757575'
  },
  bar: {
    infected: 'hsla(233, 100%, 83%)',
    deaths: 'red',
  }
};

export const commonBarProperties = {
  padding: 0.1,
  enableLabel: false,
  enableGridX: false,
  enableGridY: true,
  animate: true,
  motionStiffness: 200,
  motionDamping: 30,
  colors: [colors.bar.deaths, colors.bar.infected]
};

export function nivoTheme(fontSize) {
  return {
    axis: {
      ticks: {
        text: {
          fontSize: fontSize,
          fill: colors.text.labels,
          fontFamily: 'inherit',
        }
      }
    },
    legends: {
      text: {
        fontSize: fontSize,
        fontWeight: '700',
        fill: colors.text.labels,
      }
    }
  }
}

export function buildCustomTick(dataLength, nTicksToShow, theme) {
  let tickInterval = Math.min(7, Math.floor(dataLength / (nTicksToShow - 1)));

  return tick => {
    let showTick = (dataLength - tick.tickIndex - 1) % tickInterval === 0;
    return showTick ? (
      <g transform={`translate(${tick.x},${tick.y + 12})`}>
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fill: theme.axis.ticks.text.fill,
            fontSize: theme.axis.ticks.text.fontSize,
          }}
        >
          {tick.value}
        </text>
      </g>
    ) : null
  };
}

export function buildCustomTooltip(indexBy, keys, fontSize) {
  return ({data}) => (
    <div>
      <p style={{margin: 0, fontSize: fontSize}}>
        AS OF {data[indexBy]}
      </p>
      <p style={{color: colors.text.infected, margin: 0, fontSize: fontSize}}>
        {data[keys[1]]} CASES
      </p>
      <p style={{color: colors.text.deaths, margin: 0, fontSize: fontSize}}>
        {data[keys[0]]} DEATHS
      </p>
    </div>
  )
}