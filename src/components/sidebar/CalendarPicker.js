import React, {useState} from 'react'
import calendar from "../../icons/cal_white.svg";
import {makeStyles} from "@material-ui/core/styles";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import {connect} from "react-redux";
import {setDateFromCalendar} from "../../actions/actions";
import moment from 'moment-timezone';

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


moment.tz.setDefault("GMT");


function CalendarPicker (props) {
  const viewDate = new Date(props.viewDateString);
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.calendarIconWrapper}>
      <img
        src={calendar}
        alt="Choose Date"
        className={classes.calendarIcon}
        onClick={() => {setIsOpen(true)}}/>
      <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
        <DatePicker
          autoOk
          open={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          variant="dialog"
          value={viewDate}
          disableToolbar={false}
          onChange={(date) => {
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
    viewDateString: state.viewDateString
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onDateSelection: (dateString) => {
      dispatch(setDateFromCalendar(dateString))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPicker);