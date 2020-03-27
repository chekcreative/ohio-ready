import React from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// other
import SVG from 'react-inlinesvg';
import OhioMapSVG from './OhioMap.svg'

const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    padding: '11px 0px'
  }
}));

function OhioMap() {
  const classes = useStyles();
  return (
    <div className={classes.mapWrapper}>
      <SVG
        style={{maxWidth: '100%'}}
        src={ OhioMapSVG }
      ></SVG>
    </div>
  );
}

export default OhioMap;