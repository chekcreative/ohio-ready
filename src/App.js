import React, {useRef, useEffect} from 'react';
import {connect} from "react-redux";

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Container from '@material-ui/core/Container';

// custom components
import Sidebar from './components/sidebar/Sidebar'
import NewsWrapper from './components/newsfeed/NewsWrapper'
import DateDisplay from './components/DateDisplay'
import StickyFooter from './components/StickyFooter'
import FullChartModal from "./components/FullChartModal";

// Detect IE
import {isIE} from 'react-device-detect'

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#E4E9F1',
    '&:focus': {
      outline: 'none',
    },
    '&::-moz-focus-inner': {
      border: 0,
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  },
  mainFlexWrapper: {
    display: 'flex',
    position: 'relative',
  }
}));

function App(props) {
  
  const newsWrapperFocus = useRef();
  useEffect(() => newsWrapperFocus.current && newsWrapperFocus.current.focus());

  const classes = useStyles();

  if (isIE) {
    return (
      <div className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <div>
            <p>Internet Explorer is not supported.</p>
            <p>Please use <a href="https://google.com/chrome" target="_blank" rel="noopener noreferrer">Chrome</a>, <a href="https://firefox.com/" target="_blank" rel="noopener noreferrer">Firefox</a>, or <a href="https://apple.com/safari" target="_blank" rel="noopener noreferrer">Safari</a>.</p>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className={classes.content} tabIndex="1" ref={newsWrapperFocus}j>
      <Container maxWidth="lg" className={classes.container}>

        {/* 
          core concepts to the desktop layout:
            - Sidebar is a fixed width
            - DateDisplay is a fixed width
            - the content in between flex-grows to fill the rest of the space

          core concepts to the mobile layout: 
            - DateDisplay moves to display: none
            - Sidebar is removed from the flex flow by receiving position: absolute => pinned to the top of the screen
        */}
        <div className={classes.mainFlexWrapper}>
          <Sidebar></Sidebar>
          <NewsWrapper></NewsWrapper>
          <DateDisplay></DateDisplay>
          {props.isFullChartOpen && <FullChartModal/>}
        </div>

        <StickyFooter></StickyFooter>

      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isFullChartOpen: state.isFullChartOpen
  }
}

export default connect(mapStateToProps, null)(App);
