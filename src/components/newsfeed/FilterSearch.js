import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import groupBy from 'lodash.groupby';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  categoryChip: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

function makeLocationObjects(arr) {
  return arr.map(item => ({ type: 'locations', attributes: { name: item } }))
}

const DEFAULT_LOCATIONS = makeLocationObjects([
  'Global',
  'National',
  'State',
  'Columbus',
  'Cleveland',
  'Cincinnati',
  'Dayton'
])

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const sortTags = (firstTag, secondTag) => {
  if (firstTag.attributes.popularity < secondTag.attributes.popularity) {
    return -1;
  } else if (firstTag.attributes.popularity === secondTag.attributes.popularity) {
    return 0;
  } else {
    return 1;
  }
}

const MobileView = ({
  categories,
  toggleAuthorizerNameFilter,
  toggleScopeFilter,
  toggleTagFilter,
  classes
}) => {
  const top10Tags = Object.values(categories).flat().sort(sortTags).reverse().slice(0, 10);
  const toggleTag = (option) => {
    if (option.type === 'tags') {
      toggleTagFilter(option);
    } else if (option.type === 'authorizers') {
      toggleAuthorizerNameFilter(option);
    } else if (option.type === 'locations') {
      toggleScopeFilter(option);
    }
  }

  return (
    <Grid item container>
      {top10Tags.map((tag) => (
        <div className={classes.categoryChip}>
          <Chip label={tag.attributes.name} onClick={() => toggleTag(tag)} />
        </div>
      ))}
    </Grid>
  );
}

const DesktopView = ({
  categories,
  toggleAuthorizerNameFilter,
  toggleScopeFilter,
  toggleTagFilter,
  classes
}) => {
  const loadingChips = new Array(5).fill(0);
  return (
    <>
      <Grid item spacing={2}>
        <Typography variant='header4'>Tags</Typography>
        {
          !categories.tags && (loadingChips.map(() => (
            <div className={classes.categoryChip}>
              <Chip avatar={<CircularProgress size='small' />} label='Loading...' />
            </div>
          )))
        }
        {
          (categories.tags || []).map(option => (
            <div className={classes.categoryChip}>
              <Chip label={option.attributes.name} onClick={toggleTagFilter.bind(null, option)} />
            </div>
          ))
        }
      </Grid>
      <Grid item spacing={2}>
        <Typography variant='header4'>Authorizers</Typography>
        {
          !categories.authorizers && (loadingChips.map(() => (
            <div className={classes.categoryChip}>
              <Chip avatar={<CircularProgress size='small' />} label='Loading...' />
            </div>
          )))
        }
        {
          (categories.authorizers || []).map(option => (
            <div className={classes.categoryChip}>
              <Chip label={option.attributes.name} onClick={toggleAuthorizerNameFilter.bind(null, option)} />
            </div>
          ))
        }
      </Grid>
      <Grid item spacing={2}>
        <Typography variant='header4'>Locations</Typography>
        {
          (categories.locations || DEFAULT_LOCATIONS).map(option => (
            <div className={classes.categoryChip}>
              <Chip label={option.attributes.name} onClick={toggleScopeFilter.bind(null, option)} />
            </div>
          ))
        }
      </Grid>
    </>
  );
}

function FilterSearch({
  open,
  setIsOpen,
  options,
  selectedOptions,
  toggleAuthorizerNameFilter,
  toggleScopeFilter,
  toggleTagFilter,
  clearFilters,
}) {
  const classes = useStyles();
  const sortedTagEntries = Object.entries(groupBy(options, 'type')).map(([type, tags]) => {
    return [
      type,
      tags.concat().sort(sortTags).reverse()
    ]
  });
  const categories = Object.fromEntries(sortedTagEntries)

  const toggleOpen = (e) => {
    e.preventDefault();
    e.target.blur()
    setIsOpen(true)
  }

  const onChangeOptions = (e, newOptions, reason) => {
    if (!newOptions.length) {
      clearFilters();
    }

    const itemsToRemove = reason === 'remove-option'
      ? selectedOptions.filter(selected => !newOptions.find(newOption => newOption.attributes.name === selected.attributes.name))
      : newOptions;
    const categoryOptionsSelected = groupBy(itemsToRemove, 'type');
    (categoryOptionsSelected.tags || []).forEach((tag) => {
      toggleTagFilter(tag)
    });

    (categoryOptionsSelected.authorizers || []).forEach((authorizer) => {
      toggleAuthorizerNameFilter(authorizer)
    });

    (categoryOptionsSelected.locations || []).forEach((location) => {
      toggleScopeFilter(location)
    });
  }

  return (
    <>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={option => option.attributes.name}
        value={selectedOptions}
        disableClearable
        onChange={onChangeOptions}
        renderTags={(value, getTagProps) => {
          return value.map((option, index) => (
            <Chip label={option.attributes.name} {...getTagProps({ index })} />
          ))
        }}
        openOnFocus={false}
        open={false}
        renderInput={(props) => <TextField {...props} variant="outlined" placeholder="Filter News Items" />}
        onFocus={toggleOpen}
      />
      <Dialog fullScreen open={open} onClose={setIsOpen.bind(null, false)} TransitionComponent={Transition}>
        <Grid container justify='center' spacing={2} className={classes.container}>
          <Grid item xs={10} sm={6}>
            <Grid container justify='center'>
              <Grid item xs={10} sm={6}>
                <Autocomplete
                  multiple
                  autoComplete
                  autoHighlight
                  fullWidth
                  options={options}
                  onChange={onChangeOptions}
                  value={selectedOptions}
                  getOptionLabel={option => option.attributes.name}
                  renderTags={(value, getTagProps) => {
                    return value.map((option, index) => (
                      <Chip label={option.attributes.name} {...getTagProps({ index })} />
                    ))
                  }}
                  renderInput={(props) => <TextField {...props} variant="outlined" placeholder="Filter News Items" />}
                />
              </Grid>
            </Grid>
            <Grid container justify='center' spacing={2} className={classes.container}>
              <Hidden smDown>
                <DesktopView
                  categories={categories}
                  classes={classes}
                  toggleAuthorizerNameFilter={toggleAuthorizerNameFilter}
                  toggleTagFilter={toggleTagFilter}
                  toggleScopeFilter={toggleScopeFilter}
                />
              </Hidden>
              <Hidden smUp>
                <MobileView
                  categories={categories}
                  classes={classes}
                  toggleAuthorizerNameFilter={toggleAuthorizerNameFilter}
                  toggleTagFilter={toggleTagFilter}
                  toggleScopeFilter={toggleScopeFilter}
                />
              </Hidden>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <IconButton edge='start' onClick={setIsOpen.bind(null, false)} size='medium'>
              <CancelPresentationIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Dialog>
    </>
  )
}

export default FilterSearch;
