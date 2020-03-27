import React from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mapWrapper: {
    padding: '11px 0px'
  }
}));

function InfectionCurve() {
  const classes = useStyles();
  return (
    <div className={classes.mapWrapper}>
      chart here
    </div>
  );
}

export default InfectionCurve;