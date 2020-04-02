import React from 'react';
import {connect} from "react-redux";
import {setDateFromDisplay} from "../actions/actions";
import dateDisplayOptions from "../utils/dateDisplayOptions";

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
    left: '0px',
    cursor: 'pointer'
  },
  displayDateButtonActive: {
    color: '#333333',
    borderLeft: '4px solid #4B00FF',
    transition: 'all linear .3s',
    position: 'relative',
    left: '-2px'
  },
  stickyTop: {
    position: 'sticky',
    top: '32px',
  }
}));

function DateDisplay({viewDate, onDateSelection}) {
  const classes = useStyles();

  // TODO: Determine date range based on results from the API
  const earliestDate = new Date(2020, 0, 1);
  const dateOptions = dateDisplayOptions(earliestDate);

  const isActiveDateOption = (i) => {
    return dateOptions[i+1]
        ? new Date(dateOptions[i].dateString) >= viewDate && viewDate > new Date(dateOptions[i+1].dateString)
        : new Date(dateOptions[i].dateString) >= viewDate;
  };

  return (
    <div className={classes.dateDisplayWrapper}>
      <div className={classes.stickyTop}>
        {
          dateOptions.map(({display, dateString}, i) =>
            <button
              key={i}
              onClick={() => onDateSelection(dateString)}
              className={
                clsx(classes.displayDateButton, isActiveDateOption(i) && classes.displayDateButtonActive)
              }>
              { display }
            </button>
          )
        }
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    viewDate: new Date(state.viewDateString)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDateSelection: (dateString) => {
      dispatch(setDateFromDisplay(dateString))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateDisplay)