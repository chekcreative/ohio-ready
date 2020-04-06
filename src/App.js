import React, {useRef, useEffect} from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Container from '@material-ui/core/Container';

// custom components
import Sidebar from './components/sidebar/Sidebar'
import NewsWrapper from './components/newsfeed/NewsWrapper'
import DateDisplay from './components/DateDisplay'
import StickyFooter from './components/StickyFooter'

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
    display: 'flex'
  }
}));

function App() {
  
  const newsWrapperFocus = useRef();
  useEffect(() => newsWrapperFocus.current && newsWrapperFocus.current.focus());

  const classes = useStyles();
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
        </div>

        <StickyFooter></StickyFooter>

      </Container>
    </div>
  );
}

export default App;
