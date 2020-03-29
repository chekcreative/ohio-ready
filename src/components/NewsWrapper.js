import React, {useState, useEffect, useRef} from 'react';
import debounce from 'lodash.debounce';

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
import Button from "@material-ui/core/Button";

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

  const [numberPagesLoaded, setNumberPagesLoaded] = useState(0);
  const [pagesRemain, setPagesRemain] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const _showMore = useRef(null);

  // run on load
  useEffect(() => {
    loadEvents()
  }, [])


  const loadEvents = () => {
    setIsLoadingMore(true);
    axios.get(`https://ohioready-api.zwink.net/v1/event/?include=authorizer,tags,article&page%5Bnumber%5D=${numberPagesLoaded+1}`, axiosHeader)
        .then(
            (res) => {
              console.log(res)
              if (res.data.data) {
                setNewsObjects(numberPagesLoaded ? newsObjects.concat(res.data.data) : res.data.data)
              }
              if (res.data.included) {
                console.log((res.data.included))
                setIncluded(numberPagesLoaded ? included.concat(res.data.included) : res.data.included)
              }
              if (res.data.meta?.pagination?.pages) {
                setPagesRemain(res.data.meta.pagination.pages > (numberPagesLoaded + 1))
              }
              setNumberPagesLoaded(numberPagesLoaded+1)
              setIsLoadingMore(false);
            }
        )
        .catch(
            (err) => {
              console.log(err)
              setIsLoadingMore(false);
            }
        )
  };

  window.onscroll = debounce(() => {
    const scrolledToBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight;
    if (scrolledToBottom) {
      loadEvents();
    }
  }, 200);

  return (
    <Grid container spacing={2} direction="column" className={classes.cardsWrapper}>
      {
        newsObjects.map((newsObject, i) =>
        <Grid item key={'newsItem' + i} style={{maxWidth: '100%'}}>
          <NewsItem newsObject={newsObject} included={included}></NewsItem>
        </Grid>
        )
      }
      {pagesRemain && <Button onClick={loadEvents} ref={_showMore}>{isLoadingMore ? "LOADING MORE..." : "SHOW MORE"}</Button>}
    </Grid>
  );
}

export default NewsWrapper;