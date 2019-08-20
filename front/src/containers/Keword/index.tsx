import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import Layout from '../../layouts/base/Layout';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  }
}));

const Home: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.mainFeaturedPost}>
        <img
          style={{ display: 'none' }}
          src="https://source.unsplash.com/user/erondu"
          alt="background"
        />
        <div className={classes.overlay}/>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                Title of a longer featured blog post
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Multiple lines of text that form the lede, informing new readers quickly and
                efficiently about what&apos;s most interesting in this post&apos;s contents.
              </Typography>
              <Link variant="subtitle1" href="#">
                Continue reading…
              </Link>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  );
};

export default Home;