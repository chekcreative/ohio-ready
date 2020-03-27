import React, { useState } from 'react';
import {connect} from "react-redux";
import {setDateFromDisplay} from "../actions/actions";

// styling
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dateDisplayWrapper: {
    width: '68px',
    marginRight: '16px',
    flexShrink: '0',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  displayDateButton: {
    padding: '11px 0px 11px 6px',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    borderLeft: '1px solid #949494',
    borderTop: '0px solid transparent',
    borderBottom: '0px solid transparent',
    borderRight: '0px solid transparent',
    margin: '0px',
    display: 'block',
    transition: 'all linear .3s',
    position: 'relative',
    left: '0px'
  },
  displayDateButtonActive: {
    color: '#333333',
    borderLeft: '4px solid #4B00FF',
    transition: 'all linear .3s',
    position: 'relative',
    left: '-2px'
  }
}));

function DateDisplay({dateIndex, onDateSelection}) {
  const classes = useStyles();

  // TODO: Work this into a live generated array within the context of the API, and likely, Redux
  const [topLevelDates] = useState([
    'TODAY',
    'MARCH',
    'FEB',
    'JAN',
    '2019'
  ]);

  return (
    <div className={classes.dateDisplayWrapper}>
      {
        topLevelDates.map((date, i) =>
          <button 
            key={i}
            onClick={() => onDateSelection(i)}
            className={
              dateIndex === i ?
                clsx(classes.displayDateButton, classes.displayDateButtonActive) :
                classes.displayDateButton
            }>
            { date }
          </button>
        )
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    dateIndex: state.dateIndex
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDateSelection: (dateIndex) => {
      dispatch(setDateFromDisplay(dateIndex))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateDisplay)