import React from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardFooterKeyWrapper: {
    margin: '0px 20px 0px 0px',
    textAlign: 'right',
    maxWidth: '100%',
    lineHeight: '1.6'
  },
  'kbd': {
    display: 'inline-block',
    padding: '4px 6px',
    font: '11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
    lineHeight: '10px',
    color: '#444d56',
    verticalAlign: 'middle',
    backgroundColor: '#fafbfc',
    border: '1px solid #d1d5da',
    borderRadius: '3px',
    boxShadow: 'inset 0 -1px 0 #d1d5da',
    margin: '0px 5px'
  }
}));

function KeyboardNav() {
  const classes = useStyles();
  return (
    <div className={classes.cardFooterKeyWrapper}>
      Next: <kbd className={classes.kbd}>j</kbd><br />
      Previous: <kbd className={classes.kbd}>k</kbd><br />
      Top: <kbd className={classes.kbd}>t</kbd>
    </div>
  );
}

export default KeyboardNav;