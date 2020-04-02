import React, { useEffect } from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';

// icons 
import share from '../../icons/share.svg'
import globe from '../../icons/globe.svg'
import link from '../../icons/link.svg'

// utils
import generateDateString from '../../utils/generateDateString'
import {publishedDate} from "../../utils/dateHelpers";

const useStyles = makeStyles((theme) => ({
  newsCard: {
    padding: '16px',
    maxWidth: '100%'
  },
  chipShareWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '14.5px'
  },
  chipWrapper: {
    flexShrink: '1', 
    flexGrow: '1',
    maxWidth: 'calc(100% - 32px)' // 24px for share icon + 8px spacing to keep in the top right corener
  },
  shareIcon: {
    flexShrink : '0',
    flexGrow: '0',
    width: '24px'
  },
  date: {
  },
  newsCardHeading: {
    maxWidth: '580px',
    width: '100%'
  },
  newsCardInnerWrapper: {
    paddingRight: '48px',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '0px'
    }
  },
  coverageSourceWrapper: {
    display: 'flex'
  },
  coverageSourceIcon: {
    marginTop: '2px',
    marginRight: '10px'
  },
  coverageWrapper: {
    display: 'flex',
    width: '50%',
    alignItems: 'flex-start'
  },
  innerCoverageWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  sourceWrapper: {
    display: 'flex',
    width: '50%',
    alignItems: 'flex-start'
  },
  innerSourceWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  activeFilterChip: {
    backgroundColor: '#121212',
    color: '#fff'
  }
}));

const NewsItem = (props) => {
  const classes = useStyles();

  // get the authorizer name out of the 'included' array from API call 
  const authorizer = props.included.find( (el) =>
    el.id == props.newsObject.relationships.authorizer.data.id &&
    el.type == props.newsObject.relationships.authorizer.data.type
  )

  // get each tag name out of the 'included' array from API call 
  const tagsArray = []
  props.newsObject.relationships.tags.data.forEach( (tagObject) => {
    let matchingTag = props.included.find((el) =>
      el.id == tagObject.id &&
      el.type == tagObject.type
    )
    tagsArray.push(matchingTag)
  })

  // get articles and publishers out of included
  const articlesArray = []
  props.newsObject.relationships.article.data.forEach((article) => {
    let matchingArticle = null
    let matchingPublisher = null

    matchingArticle = props.included.find((el) =>
      el.id == article.id &&
      el.type == article.type
    )
    if (matchingArticle !== null) {
      matchingPublisher = props.included.find((el) =>
        el.id == matchingArticle?.relationships.publisher.data.id &&
        el.type == matchingArticle?.relationships.publisher.data.type
      )
    }

    articlesArray.push({
      publisherName: matchingPublisher?.attributes.name,
      articleUrl: matchingArticle?.attributes.url
    })
  })

  // format date string
  const dateString = generateDateString(publishedDate(props.newsObject), true)

  const checkTagFilterForName = (tagName) => {
    var isIncluded = false
    props.tagFilter.forEach( (tagFilterItem) => {
      if (tagFilterItem.name === tagName) {
        isIncluded = true
      }
    })
    return isIncluded
  }

  return (
    <Card className={classes.newsCard}>

      {/* chips & share icon */}
        <div className={classes.chipShareWrapper}>
          <Grid container spacing={1} className={classes.chipWrapper}>
            {
              props.newsObject.relationships.authorizer.data.id &&
              props.newsObject.relationships.authorizer.data.type &&
              authorizer && 
              authorizer.attributes.name ?
              <Grid item>
                <Chip
                  className={props.authorizerNameFilter === authorizer.attributes.name ? classes.activeFilterChip : null}
                  onClick={() => props.toggleAuthorizerNameFilter(authorizer.attributes.name)}
                  label={ 
                    authorizer.attributes.name
                  }></Chip>
              </Grid> :
              null
            }
            {
              props.newsObject.attributes.scope ?
              <Grid item>
                <Chip
                  className={props.scopeFilter === props.newsObject.attributes.scope ? classes.activeFilterChip : null}
                  onClick={() => props.toggleScopeFilter(props.newsObject.attributes.scope)}
                  label={ props.newsObject.attributes.scope }></Chip>
              </Grid> :
              null
            }
            {
              tagsArray.length > 0 ?
                tagsArray.map((tag, i) =>
                  tag && 
                  tag.attributes &&
                  tag.attributes.name ?
                  <Grid item key={'tagChip' + i}>
                    <Chip 
                      className={checkTagFilterForName(tag.attributes.name) ? classes.activeFilterChip : null}
                      onClick={() => props.toggleTagFilter({name: tag.attributes.name, id: tag.id})}
                      label={ tag.attributes.name }></Chip>
                  </Grid> :
                  null
                ) :
                null
            }
          </Grid>
          
          {/* TODO: build this feature - https://github.com/chekcreative/ohio-ready/issues/37 */}
          {/* <img src={share} className={classes.shareIcon}></img> */}

        </div>
      {/* END chips & share icon */}

      {/* ====================================================================== */}

      <div className={classes.newsCardInnerWrapper}>
        {/* images, if applicable */}

        {/* ====================================================================== */}

        {/* date */}
        {
          props.newsObject.attributes &&
          props.newsObject.attributes.published_on ?
          <div className={classes.date}>
            { dateString }
          </div> :
          null
        }

        {/* ====================================================================== */}

        {/* title */}
        {
          props.newsObject.attributes.title ?
          <h2 className={classes.newsCardHeading}>
            { props.newsObject.attributes.title }
          </h2> : 
          null
        }

        {/* ====================================================================== */}

        {/* tweet, if applicable */}

        
      </div>

      {/* ====================================================================== */}

      {/* coverage & source */}
      <div className={classes.coverageSourceWrapper}>
        <div className={classes.coverageWrapper}>
          {
            articlesArray.length > 0 ?
            <img src={globe} className={classes.coverageSourceIcon}></img> :
            null
          }
          {
            articlesArray.length > 0 ?
            <div className={classes.innerCoverageWrapper}>
              <h6>Coverage</h6>
              {
                articlesArray.map((articleObject, i) =>
                  <a href={ articleObject.articleUrl} key={'articleUrl' + i}>
                    { articleObject.publisherName }
                  </a>
                )
              }
            </div> :
            null
          }
        </div>
        <div className={classes.sourceWrapper}>
          <img src={link} className={classes.coverageSourceIcon}></img>
          <div className={classes.innerSourceWrapper}>
            <h6>Source</h6>
            {
              props.newsObject.attributes &&
              props.newsObject.attributes.authoritative_url ?
              <a href={ props.newsObject.attributes.authoritative_url }>
                {   
                  authorizer &&
                  authorizer.attributes &&
                  authorizer.attributes.name ? 
                  authorizer.attributes.name : 
                  null
                }
              </a> : 
              null
            }
          </div>
        </div>
      </div>

    </Card>
  );
}

export default NewsItem;