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
    padding: '0px 16px',
    [theme.breakpoints.down('xs')]: {
      padding: '0px 8px'
    }
  }
}));

function NewsWrapper() {

  // config state
  const classes = useStyles();
  const [newsObjects, setNewsObjects] = useState([
    {
      attributes: {
        authoritative_url: "https://apnews.com/65163e344a4725c823c34be60a2da1ce",
        content: "",
        published_on: "2020-03-24",     
        scope: "National",
        summary: "",
        title: "President Donald Trump is trying to reopen businesses within next few weeks"
      },
      id: "1058",
      relationships: {
        article: {
          data: [], 
          meta: {
            count: 0
          }
        },
        authoritative_publisher: {data: null},
        authorizer: {
          data: {
            type: "authorizers",
            id: "88"
          }, 
          links: {
            related: "http://ohioready-api.zwink.net/v1/authorizer/88/"
          }
        },
        tags: {
          data: [
            {
              type: "tags", 
              id: "11"
            }
          ], 
          meta: {count: 1}
        },
        type: "events"
      }
    }
  ]);
  const [included, setIncluded] = useState([
      {
        type: "authorizers",
        id: "75", 
        attributes: {
          name: "Grocery Stores"
        }
      }
    ])
  
  // run on load
  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = () => {
    axios.get(`https://ohioready-api.zwink.net/v1/event/?include=authorizer,tags,article&page%5Bnumber%5D=2`, axiosHeader)
    .then(
      (res) => {
        console.log(res)
        if (res.data.data) {
          setNewsObjects(res.data.data)
        }
        if (res.data.included) {
          console.log((res.data.included))
          setIncluded(res.data.included)

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
        <Grid item key={'newsItem' + i} style={{maxWidth: '100%'}}>
          <NewsItem newsObject={newsObject} included={included}></NewsItem>
        </Grid>
        )
      }
    </Grid>
  );
}

export default NewsWrapper;