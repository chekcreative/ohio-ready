import React, {useState, useEffect} from 'react';
import debounce from 'lodash.debounce';
import {setDateFromScroll} from "../actions/actions";
import {connect} from "react-redux";
import {triggeringAgents} from "../reducers/reducer";

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";

// custom components
import NewsItem from './NewsItem'

// utils
import axios from 'axios';
import axiosHeader from '../utils/axiosHeader'
import {publishedDate} from "../utils/dateHelpers";

const useStyles = makeStyles((theme) => ({
  cardsWrapper: {
    flexShrink: '1', 
    flexGrow: '1', 
    padding: '0px 16px',
    position: 'relative',
    maxWidth: 'calc(100% - 243px - 15px - 68px - 15px)',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'calc(100%)',
      margin: 'auto',
      padding: '0px 8px',
      position: 'static',
      paddingTop: '225px' // TODO: this needs to change dynamically if we shrink the header on scroll, but its static for now
    } 
  },
  showMoreButton: {
    position: 'static',
  },
  loadingCover: {
    position: 'absolute',
    height: '100%',
    zIndex: 10,
    backgroundColor: 'hsla(0, 0%, 35%, 0.9)',
    top: '0',
    left: '16px',
    right: '16px'
  },
  loadingText: {
    paddingTop: '150px',
    fontSize: '24px',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'sticky',
    top: '0',
  }
}));


function NewsWrapper(props) {

  // config state
  const classes = useStyles();
  const [newsObjects, setNewsObjects] = useState([]);
  const [included, setIncluded] = useState([]);

  const [numberPagesLoaded, setNumberPagesLoaded] = useState(0);
  const [morePagesAvailable, setMorePagesAvailable] = useState(true);
  const [morePagesNeeded, setMorePagesNeeded] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const NEWS_ITEM_NAME = "newsItem";

  useEffect(() => {
    const viewDate = new Date(props.viewDateString);

    const earliestFetchedPublishDate = getEarliestFetchedPublishDate();
    if (viewDate < earliestFetchedPublishDate){
      if (morePagesAvailable) {
        newsObjects.length && setMorePagesNeeded(true);
        loadEvents()
      }
    } else {
      setMorePagesNeeded(false);
      const publishDateOfFirstVisible = getPublishDateOfFirstVisibleNewsItem();
      if (
        publishDateOfFirstVisible &&
        (viewDate < publishDateOfFirstVisible || viewDate > publishDateOfFirstVisible)
      ) {
        const scrollPosition = getPositionOfFirstNewsItemPublishedBefore(viewDate);
        window.scrollTo(0, scrollPosition)
      }
    }
  }, [props.viewDateString, newsObjects]);


  const loadEvents = () => {
    setIsFetching(true);
    if (morePagesAvailable) {
      axios.get(`https://ohioready-api.zwink.net/v1/event/?include=authorizer,tags,article&page%5Bnumber%5D=${numberPagesLoaded+1}`, axiosHeader)
        .then(
          (res) => {
            if (res.data.data) {
              setNewsObjects(numberPagesLoaded ? newsObjects.concat(res.data.data) : res.data.data);
            }
            if (res.data.included) {
              setIncluded(numberPagesLoaded ? included.concat(res.data.included) : res.data.included)
            }
            if (res.data.meta?.pagination?.pages) {
              setMorePagesAvailable(res.data.meta.pagination.pages > (numberPagesLoaded + 1))
            }
            setNumberPagesLoaded(numberPagesLoaded+1);
          }
        )
        .catch(
          (err) => {
            console.log(err);
          }
        )
        .then(() => {
            setIsFetching(false);
          }
        )
    }
  };

  const getEarliestFetchedPublishDate = () => {
    return newsObjects.length
      ? publishedDate(newsObjects[newsObjects.length-1])
      : new Date();
  };

  const getPositionOfFirstNewsItemPublishedBefore = (date) => {
    const ixNewsObjectToScrollTo = newsObjects.findIndex(object =>
      publishedDate(object) <= date
    );

    const newsItemElements = [...document.getElementsByName(NEWS_ITEM_NAME)];
    const elementToScrollTo = newsItemElements[ixNewsObjectToScrollTo];
    return elementToScrollTo.offsetTop + elementToScrollTo.offsetParent.offsetTop;
  };

  const getPublishDateOfFirstVisibleNewsItem = () => {
    if (newsObjects.length) {
      const newsItemElements = [...document.getElementsByName(NEWS_ITEM_NAME)];

      const ixFirstVisibleNewsItem = newsItemElements.findIndex(element =>
        element.offsetTop + element.offsetParent.offsetTop >= document.documentElement.scrollTop
      );

      return ixFirstVisibleNewsItem > -1
        ? publishedDate(newsObjects[ixFirstVisibleNewsItem])
        : publishedDate(newsObjects[0]);
    }

    return null
  };

  const updateViewDate = () => {
    if (props.triggeringAgent === triggeringAgents.NEWS_LIST) {
      const publishedDate = getPublishDateOfFirstVisibleNewsItem();
      if (publishedDate) {
        props.onScrollDateChange(publishedDate.toISOString());
      }
    } else {
      props.onScrollDateChange(props.viewDateString);
    }
  };

  window.onscroll = debounce(() => {
    const scrolledToBottom = window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight;
    if (scrolledToBottom) {
      loadEvents();
    }

    updateViewDate();
  }, 200);

  return (
    <Grid container spacing={2} direction="column" className={classes.cardsWrapper}>
      {
        newsObjects.map((newsObject, i) =>
          <Grid item key={'newsItem' + i} style={{maxWidth: '100%'}} name={NEWS_ITEM_NAME}>
            <NewsItem newsObject={newsObject} included={included}/>
          </Grid>
        )
      }
      {
        morePagesAvailable &&
        <Button onClick={loadEvents} className={classes.showMoreButton}>
          {isFetching ? "LOADING MORE..." : "SHOW MORE"}
        </Button>
      }
      {
        morePagesNeeded &&
        <div className={classes.loadingCover}>
          <h1 className={classes.loadingText}>LOADING...</h1>
        </div>
      }
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
    viewDate: new Date(state.viewDateString),
    viewDateString: state.viewDateString,
    triggeringAgent: state.triggeringAgent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onScrollDateChange: (onScrollDateChange) => {
      dispatch(setDateFromScroll(onScrollDateChange))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsWrapper)