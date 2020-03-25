import React from 'react';

// styling
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Container from '@material-ui/core/Container';

// custom components
import Sidebar from './components/Sidebar'
import NewsWrapper from './components/NewsWrapper'
import DateDisplay from './components/DateDisplay'

const useStyles = makeStyles((theme) => ({
  content: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#E4E9F1'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  mainFlexWrapper: {
    display: 'flex'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
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

      </Container>
    </div>
  );
}

export default App;
