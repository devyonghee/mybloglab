import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  linkTextField: {
    display: 'inline-flex',
    marginTop: theme.spacing(5),
    width: '60vw',
    maxWidth: '400px',
  },

  searchButton: {
    position: 'absolute',
    transform: 'translateY(39px)',
    borderRadius: '10%',
    height: '57px',
    width: '57px',
  },

  blog: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },

  avatar: {
    margin: theme.spacing(1),
    width: '60px',
    height: '60px',
  },

  blogTitle: {
    position: 'absolute',
    transform: 'translate(78px, -53px)',
  },
}));

export default useStyles;
