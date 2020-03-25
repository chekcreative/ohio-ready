import React, { useState } from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material ui components
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  cardStyling: {
    padding: '16px'
  }
}));

const NewsItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyling}>
      {/* chips & share icon */}
      relationships.authorizer (singular)
      relationships.tags (array)
      attributes.scope (singular)

      {/* images, if applicable */}

      {/* date */}

      {/* title */}
      {
        props.newsObject && 
        props.newsObject.attributes &&
        props.newsObject.attributes.title ?
        <h2>
          { props.newsObject.attributes.title }
        </h2> : 
        null
      }

      {/* tweet, if applicable */}

      {/* coverage & source */}
      coverage: relationships.article (array)
      source: attributes.authoritative_url (singular)

    </Card>
  );
}

export default NewsItem;