import React, { useState, useEffect } from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

// custom components
import NewsItem from './NewsItem'

// utils
import axios from 'axios';
import axiosHeader from '../utils/axiosHeader'

const useStyles = makeStyles((theme) => ({
  cardsWrapper: {
    flexShrink: '1', 
    flexGrow: '1', 
    padding: '0px 16px'
  }
}));

function NewsWrapper() {
  const classes = useStyles();
  const [newsObjects, setNewsObjects] = useState([
    'dummyData',
    'dummyData',
    'dummyData',
    'dummyData',
    'dummyData',

  ]);

  useEffect(() => {
    // loadEvents()
  }, [])

  const loadEvents = () => {
    axios.get(`https://ohioready-api.zwink.net/v1/event/`, axiosHeader)
    .then(
      (res) => {
        console.log(res)
        if (res.data.data) {
          setNewsObjects(res.data.data)
        }
      }
    )
    .catch(
      (err) => {
        console.log(err)
      }
    )
  }

  return (
    <Grid container spacing={2} direction="column" className={classes.cardsWrapper}>
      {
        newsObjects.map((newsObject, i) =>
        <Grid item key={i}>
          <NewsItem newsObject={newsObject}></NewsItem>
        </Grid>
        )
      }
    </Grid>
  );
}

export default NewsWrapper;