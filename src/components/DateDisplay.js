import React from 'react';
import {connect} from "react-redux";
import {setDateFromDisplay} from "../actions/actions";
import {generateDateDisplayOptions, today} from "../utils/dateDisplayOptions";

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

function DateDisplay({viewDate, onDateSelection}) {
  const classes = useStyles();

  // TODO: Determine date range based on results from the API
  const earliestDate = new Date(2019, 11, 1);
  const dateOptions = generateDateDisplayOptions(today(), earliestDate);

  const isActiveDateOption = (i) => {
    return dateOptions[i+1]
        ? new Date(dateOptions[i].date) >= viewDate && viewDate > new Date(dateOptions[i+1].date)
        : new Date(dateOptions[i].date) >= viewDate;
  };

  return (
    <div className={classes.dateDisplayWrapper}>
      {
        dateOptions.map(({display, date}, i) =>
          <button 
            key={i}
            onClick={() => onDateSelection(date)}
            className={
              isActiveDateOption(i) ?
                clsx(classes.displayDateButton, classes.displayDateButtonActive) :
                classes.displayDateButton
            }>
            { display }
          </button>
        )
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    viewDate: new Date(state.viewDate)
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