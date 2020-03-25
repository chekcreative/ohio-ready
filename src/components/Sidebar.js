import React from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  sidebarWrapper: {
    width: '243px',
    flexShrink: '0',
    padding: '16px'
  }
}));

function Sidebar() {
  const classes = useStyles();
  return (
    <Card className={classes.sidebarWrapper}>
      THIS IS STATES AND CASES
    </Card>
  );
}

export default Sidebar;