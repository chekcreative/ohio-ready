import React, {useState} from 'react'
import calendar from "../../icons/cal_white.svg";
import {makeStyles} from "@material-ui/core/styles";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {connect} from "react-redux";
import {setDateFromDisplay} from "../../actions/actions";

const useStyles = makeStyles(() => ({
  calendarIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    backgroundColor: '#4B00FF',
    borderRadius: '4px',
    height: '40px',
    width: '40px',
    marginLeft: '10px',
    cursor: 'pointer'
  },
  calendarIcon: {
    padding: '10px',
    height: '100%',
    width: '100%',
  }
}));

function CalendarPicker (props) {
  const viewDate = new Date(props.viewDate);
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.calendarIconWrapper}>
      <img
        src={calendar}
        alt="Choose Date"
        className={classes.calendarIcon}
        onClick={() => {setIsOpen(true)}}/>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker
          autoOk
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          variant="dialog"
          value={viewDate}
          disableToolbar={false}
          onChange={(date) => {
            console.log('hey!');
            props.onDateSelection(date.toISOString())
          }}
          style={{display: "none"}}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}


function mapStateToProps(state) {
  return {
    viewDate: state.viewDate
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDateSelection: (dateString) => {
      dispatch(setDateFromDisplay(dateString))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPicker);