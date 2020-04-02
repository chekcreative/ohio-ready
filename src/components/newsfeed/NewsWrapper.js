import React, {useState, useEffect} from 'react';
import debounce from 'lodash.debounce';
import {setDateFromScroll} from "../../actions/actions";
import {connect} from "react-redux";
// import {sampleIncluded, sampleNewsObjects} from "../../sampleData/apiData_20200329";
import {triggeringAgents} from "../../reducers/reducer";

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

// custom components
import NewsItem from './NewsItem'
import ActiveFilters from './ActiveFilters'

// utils
import axios from 'axios';
import axiosHeader from '../../utils/axiosHeader'
import {publishedDate} from "../../utils/dateHelpers";

const useStyles = makeStyles((theme) => ({
  cardsWrapper: {
    flexShrink: '1', 
    flexGrow: '1', 
    padding: '0px 16px 0px 16px',
    position: 'relative',
    maxWidth: 'calc(100% - 243px - 15px - 68px - 15px)',
    marginBottom: '50px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'calc(100%)',
      margin: '0px auto 50px auto',
      padding: '0px 8px',
      position: 'static'
    } 
  },
  showMoreButton: {
    position: 'static',
  },
  loadingCover: {
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    zIndex: 100,
    backgroundColor: 'hsla(0, 0%, 35%, 0.9)',
    top: '0',
    left: '0'
  },
  loadingText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    position: 'relative'
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
  const [authorizerNameFilter, setAuthorizerNameFilter] = useState(null)
  const [scopeFilter, setScopeFilter] = useState(null)
  const [tagFilter, setTagFilter] = useState([])
  const NEWS_ITEM_NAME = "newsItem";

  useEffect(() => {
    const viewDateString = new Date(props.viewDateString);

    const earliestFetchedPublishDate = getEarliestFetchedPublishDate();
    if (viewDateString < earliestFetchedPublishDate){
      if (morePagesAvailable) {
        newsObjects.length && setMorePagesNeeded(true);
        loadEvents()
      }
    } else {
      setMorePagesNeeded(false);
      const publishDateOfFirstVisible = getPublishDateOfFirstVisibleNewsItem();
      if (
        publishDateOfFirstVisible &&
        (viewDateString < publishDateOfFirstVisible || viewDateString > publishDateOfFirstVisible)
      ) {
        const scrollPosition = getPositionOfFirstNewsItemPublishedBefore(viewDateString);
        window.scrollTo(0, scrollPosition)
      }
    }
  }, [props.viewDateString, newsObjects]);

  useEffect(() => {
    if (authorizerNameFilter === null && scopeFilter === null && tagFilter.length === 0) {
      setNumberPagesLoaded(0)
      setNewsObjects([])
      setMorePagesAvailable(true)
    }
    loadEvents()
  }, [authorizerNameFilter, scopeFilter, tagFilter])

  const loadEvents = () => {
    let requestString = `https://ohioready-api.zwink.net/v1/event/?include=authorizer,tags,article,article.publisher&page%5Bnumber%5D=${numberPagesLoaded+1}`

    if (authorizerNameFilter !== null) {
      requestString += `&authorizer__name=${encodeURIComponent(authorizerNameFilter)}`
    }

    if (scopeFilter !== null) {
      requestString += `&scope=${encodeURIComponent(scopeFilter)}`
    }

    if (tagFilter.length !== 0) {
      tagFilter.forEach( (tag) => {
        requestString += `&tags=${encodeURIComponent(tag.id)}`
      })
    }

    // console.log(requestString)

    setIsFetching(true);
    if (morePagesAvailable) {
      axios.get(requestString, axiosHeader)
        .then(
          (res) => {
            if (res.data.data) {
              setNumberPagesLoaded(numberPagesLoaded+1);
              setNewsObjects(numberPagesLoaded ? newsObjects.concat(res.data.data) : res.data.data);
            }
            if (res.data.included) {
              setIncluded(numberPagesLoaded ? included.concat(res.data.included) : res.data.included)
            }
            if (res.data.meta?.pagination?.pages) {
              setMorePagesAvailable(res.data.meta.pagination.pages > (numberPagesLoaded + 1))
            }
            if (res.status === 404) {
              setIsFetching(false)
              setMorePagesAvailable(false)
              setMorePagesNeeded(false)
            }
          }
        )
        .catch(
          (err) => {
            console.log(err);
            setIsFetching(false)
            setMorePagesAvailable(false)
            setMorePagesNeeded(false)
          }
        )
        .then(() => {
            setIsFetching(false);
          }
        )
    }
  };

  const toggleAuthorizerNameFilter = (authorizer_name) => {
    setNumberPagesLoaded(0)
    setNewsObjects([])
    setMorePagesAvailable(true)
    if (authorizerNameFilter === authorizer_name) {
      setAuthorizerNameFilter(null)
    } else {
      setAuthorizerNameFilter(authorizer_name)
    }
  }

  const toggleScopeFilter = (scope) => {
    setNumberPagesLoaded(0)
    setNewsObjects([])
    setMorePagesAvailable(true)
    if (scopeFilter === scope) {
      setScopeFilter(null)
    } else {
      setScopeFilter(scope)
    }
  }

  const checkTagFilterForName = (tagName) => {
    var isIncluded = false
    tagFilter.forEach( (tagFilterItem) => {
      if (tagFilterItem.name === tagName) {
        isIncluded = true
      }
    })
    return isIncluded
  }

  const getIndexOfTag = (tagName) => {
    var index = -1
    tagFilter.forEach( (tagFilterItem) => {
      if (tagFilterItem.name === tagName) {
        index = tagFilter.indexOf(tagFilterItem)
      }
    })
    return index
  }

  const toggleTagFilter = (tag) => {    
    setNumberPagesLoaded(0)
    setNewsObjects([])
    setMorePagesAvailable(true)

    let currentTagArray = tagFilter
    if (checkTagFilterForName(tag.name)) {
      let i = getIndexOfTag(tag.name)
      currentTagArray.splice(i, 1)
    } else {
      currentTagArray.push(tag)
    }
    setTagFilter([...currentTagArray])
  }

  const getEarliestFetchedPublishDate = () => {
    return newsObjects.length
      ? new Date(newsObjects[newsObjects.length-1].attributes.published_on)
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
        authorizerNameFilter || scopeFilter || tagFilter.length > 0 ?
        <ActiveFilters
          authorizerNameFilter={authorizerNameFilter}
          toggleAuthorizerNameFilter={toggleAuthorizerNameFilter}
          scopeFilter={scopeFilter}
          toggleScopeFilter={toggleScopeFilter}
          tagFilter={tagFilter}
          toggleTagFilter={toggleTagFilter}></ActiveFilters> : 
        null
      }
      {
        newsObjects.map((newsObject, i) =>
          <Grid item key={'newsItem' + i} style={{maxWidth: '100%'}} name={NEWS_ITEM_NAME}>
            <NewsItem 
              newsObject={newsObject}
              included={included}
              authorizerNameFilter={authorizerNameFilter}
              toggleAuthorizerNameFilter={toggleAuthorizerNameFilter}
              scopeFilter={scopeFilter}
              toggleScopeFilter={toggleScopeFilter}
              tagFilter={tagFilter}
              toggleTagFilter={toggleTagFilter} />
          </Grid>
        )
      }
      {
        morePagesAvailable &&
        <Button onClick={loadEvents} className={classes.showMoreButton}>
          {isFetching ? "LOADING..." : "SHOW MORE"}
        </Button>
      }
      {
        morePagesNeeded &&
        <div className={classes.loadingCover}>
          <h1 className={classes.loadingText}>
            <div className="lds-ripple"><div></div><div></div></div>
            LOADING...
          </h1>
        </div>
      }
    </Grid>
  );
}

function mapStateToProps(state) {
  return {
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