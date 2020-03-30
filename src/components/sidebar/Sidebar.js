import React from 'react';

// styling
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Card from '@material-ui/core/Card';

// components
import Statistics from './Statistics'
import OhioMap from './OhioMap'
import InfectionCurve from './InfectionCurve'
import FooterIcons from './FooterIcons'

// icons
import logo from '../../icons/ohio_ready_icon.svg'
import calendar from '../../icons/cal_white.svg'

const useStyles = makeStyles((theme) => ({
  sidebarWrapper: {
    width: '243px',
    flexShrink: '0',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
      position: 'fixed',
      top: '0px',
      left: '0px'
    }
  },
  sidebarCard: {
    padding: '16px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '0px'
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
  stickyTop: {
    position: 'sticky',
    top: '10px',
  }
}));

function Sidebar() {
  const classes = useStyles();
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
            <div className={classes.calendarIconWrapper}>
              <img src={calendar} alt=""/>
            </div>
          </div>

          <hr className={classes.sidebarHR}/>
          <Statistics></Statistics>

          <hr className={classes.sidebarHR}/>
          <OhioMap></OhioMap>

          <hr className={classes.sidebarHR}/>
          <InfectionCurve></InfectionCurve>

          {/* FOOTER ICONS FOR MOBILE */}
          <div className={classes.footerIconMobile}>
            <FooterIcons></FooterIcons>
          </div>
          
        </Card>

        {/* FOOTER ICONS FOR DESKTOP */}
        <div className={classes.footerIconDesktop}>
          <FooterIcons></FooterIcons>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;