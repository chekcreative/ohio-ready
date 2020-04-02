import React, { useEffect } from 'react';

// styling
import { makeStyles } from '@material-ui/core/styles';

// material-ui components
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  activeFilterChip: {
    backgroundColor: '#121212',
    color: '#fff'
  }
}));

function ActiveFilters(props) {
  const classes = useStyles();

  useEffect(() => {
    // console.log(props)
  })

  return (
    <Grid item container spacing={2}>
      {
        props.authorizerNameFilter ?
        <Grid item>
          <Chip 
            className={classes.activeFilterChip}
            label={props.authorizerNameFilter}
            onDelete={() => props.toggleAuthorizerNameFilter(null)} ></Chip> 
        </Grid> :
        null
      }
      {
        props.scopeFilter ?
        <Grid item>
          <Chip 
            className={classes.activeFilterChip}
            label={props.scopeFilter}
            onDelete={() => props.toggleScopeFilter(null)} ></Chip>
        </Grid> :
        null
      }
      {
        props.tagFilter.length > 0 ?
        props.tagFilter.map((tag, i) =>
          <Grid item key={'tagFilter' + i}>
            <Chip 
              className={classes.activeFilterChip}
              label={tag.name}
              onDelete={() => props.toggleTagFilter(tag)} ></Chip>
          </Grid>
        ):
        null
      }
    </Grid>
  );
}

export default ActiveFilters