import React, { useState } from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';

// icons 
import share from '../icons/share.svg'

const useStyles = makeStyles((theme) => ({
  cardStyling: {
    padding: '16px',
    maxWidth: '100%'
  },
  chipShareWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
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
    let matchingTag = props.included.find( (el) =>
      el.id == tagObject.id &&
      el.type == tagObject.type
    )
    tagsArray.push(matchingTag)
  })

  return (
    <Card className={classes.cardStyling}>

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
                  label={ 
                    authorizer.attributes.name
                  }></Chip>
              </Grid> :
              null
            }
            {
              props.newsObject.attributes.scope ?
              <Grid item>
                <Chip label={ props.newsObject.attributes.scope }></Chip>
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
                    <Chip label={ tag.attributes.name }></Chip>
                  </Grid> :
                  null
                ) :
                null
            }
          </Grid>
          <img src={share} className={classes.shareIcon}></img>
        </div>
      {/* END chips & share icon */}

      {/* ====================================================================== */}

      {/* images, if applicable */}

      {/* ====================================================================== */}

      {/* date */}

      {/* ====================================================================== */}

      {/* title */}
      {
        props.newsObject.attributes.title ?
        <h2>
          { props.newsObject.attributes.title }
        </h2> : 
        null
      }

      {/* ====================================================================== */}

      {/* tweet, if applicable */}

      {/* ====================================================================== */}

      {/* coverage & source */}
      coverage: relationships.article (array)
      source: attributes.authoritative_url (singular)

    </Card>
  );
}

export default NewsItem;