import React, { useEffect, useState } from 'react';

// redux
import {connect} from "react-redux";

// styling
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Card from '@material-ui/core/Card';

// components
import Statistics from './Statistics'
import OhioMap from './OhioMap'
import InfectionCurve from './InfectionsChart'
import CalendarPicker from "./CalendarPicker";
import FooterIcons from './FooterIcons'
import KeyboardNav from './KeyboardNav'

// icons
import logo from '../../icons/ohio_ready_icon.svg'

// utils
import generateDateString from '../../utils/generateDateString'
import generateAsOfDate from '../../utils/generateAsOfDate'
import axios from 'axios';
import axiosHeader from '../../utils/axiosHeader'


const useStyles = makeStyles((theme) => ({
  sidebarWrapper: {
    width: '243px',
    flexShrink: '0',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      position: 'fixed',
      top: '0px',
      left: '0px',
      zIndex: '100'
    }
  },
  sidebarCard: {
    padding: '16px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '0px',
      padding: '8px',
    }
  },
  sidebarCardHeader: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconNameWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingTop: '6px'
  },
  ohioIcon: {
    marginTop: '2px',
    marginRight: '10px',
    height: '28px'
  },
  sidebarTitle: {
    margin: '0px',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#000'
  },
  sidebarSubTitle: {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: '500',
    margin: '0px',
    fontSize: '10px',
    lineHeight: '11px',
    color: '#757575',
    textTransform: 'uppercase'
  },
  calendarIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    backgroundColor: '#4B00FF',
    borderRadius: '4px',
    height: '40px',
    width: '40px',
    marginLeftt: '10px'
  },
  sidebarHR: {
    width: '100%',
    margin: '7px 0px',
    height: '1px',
    color: '#979797',
    backgroundColor: '#979797'
  },
  onlyDesktopSidebarHR: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  cardFooterIconWrapper: {
    display: 'flex',
    margin: '14px 0px'
  },
  cardFooterIcon: {
    marginRight: '20px'
  },
  footerIconMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  footerIconDesktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  keyboardNavDesktop: {
    marginTop: '20px',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  stickyTop: {
    position: 'sticky',
    top: '32px',
  }
}));

function Sidebar(props) {
  const classes = useStyles();

  const [allCountiesData, updateAllCountiesData] = useState([])

  const [totalInfected, updateTotalInfected] = useState('-')
  const [totalRecovered, updateTotalRecovered] = useState('-')
  const [totalDeaths, updateTotalDeaths] = useState('-')

  const [dateString, updateDateString] = useState(generateDateString(props.viewDateString, false))

  useEffect(() => {
    updateDateString(generateDateString(props.viewDateString, false))
    getCaseData(props.viewDateString)
  }, [props.viewDateString])

  useEffect(() => {
    calculateStatTotals()
  }, [allCountiesData])

  const getCaseData = (asOfDate) => {
    let as_of_date = generateAsOfDate(asOfDate)
    // console.log(`https://ohioready-api.zwink.net/v1/case/?as_of=${as_of_date}&page[size]=100`)
    axios.get(`https://ohioready-api.zwink.net/v1/case/?as_of=${as_of_date}&page[size]=100`, axiosHeader)
    .then(
      (res) => {
        if (res.status === 200) {
          if (res.data.data) {
            updateAllCountiesData(res.data.data)
          }
          
          // if there's no data for this date, try the day before, back to mar 18. mar 18 is the earliest date we have any official data released from the state of ohio
          if (res.data.data.length === 0) {
            let dataOrigin = new Date('Wed Mar 18 2020 0:00:00 GMT-0400 (EDT)')
            var d = new Date(asOfDate);
            d.setDate(d.getDate() - 1);
            if (d >= dataOrigin) {
              updateDateString(generateDateString(d, false))
              getCaseData(d)
            }
          }
        }
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }

  const calculateStatTotals = () => {
    let totalInfected = 0
    let totalRecovered = 0
    let totalDeaths = 0

    allCountiesData.forEach( (county) => {
      if (county.attributes.total) {
        totalInfected += county.attributes.total
      }
      if (county.attributes.recovered) {
        totalRecovered += county.attributes.recovered
      }
      if (county.attributes.deaths) {
        totalDeaths += county.attributes.deaths
      }
    })

    if (totalInfected === 0) {
      updateTotalInfected('N/A')
    } else {
      updateTotalInfected(totalInfected)
    }

    if (totalRecovered === 0) {
      updateTotalRecovered('N/A')
    } else {
      updateTotalRecovered(totalRecovered)
    }

    if (totalDeaths === 0) {
      updateTotalDeaths('N/A')
    } else {
      updateTotalDeaths(totalDeaths)
    }
  }

  return (
    <div className={classes.sidebarWrapper}>
      <div className={classes.stickyTop}>

        <Card className={classes.sidebarCard}>

          {/* CARD HEADER */}
          <div className={classes.sidebarCardHeader}>
            <div className={classes.iconNameWrapper}>
              <img src={logo} alt="" className={classes.ohioIcon} />
              <div>
                <h1 className={classes.sidebarTitle}>Ohio Ready</h1>
                <h2 className={classes.sidebarSubTitle}>A Timeline of COVID-19</h2>
              </div>
            </div>
            <CalendarPicker/>
          </div>

          <hr className={classes.sidebarHR}/>
          <Statistics 
            dateString={dateString}
            totalInfected={totalInfected}
            totalRecovered={totalRecovered}
            totalDeaths={totalDeaths}
            ></Statistics>

          <hr className={clsx(classes.sidebarHR, classes.onlyDesktopSidebarHR)}/>
          <OhioMap
            allCountiesData={allCountiesData}
            ></OhioMap>

          <hr className={clsx(classes.sidebarHR, classes.onlyDesktopSidebarHR)}/>
          <InfectionCurve></InfectionCurve>

          {/* FOOTER ICONS FOR MOBILE */}
          <div className={classes.footerIconMobile}>
            <hr className={classes.sidebarHR}/>
            <FooterIcons></FooterIcons>
          </div>
          
        </Card>

        {/* FOOTER ICONS FOR DESKTOP */}
        <div className={classes.footerIconDesktop}>
          <FooterIcons></FooterIcons>
        </div>

        {/* FOOTER ICONS FOR DESKTOP */}
        <div className={classes.keyboardNavDesktop}>
          <KeyboardNav></KeyboardNav>
        </div>

      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    viewDateString: state.viewDateString
  }
}

export default connect(mapStateToProps, null)(Sidebar)