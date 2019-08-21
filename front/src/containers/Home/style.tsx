import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  linkTextField: {
    display: 'flex',
    marginTop: theme.spacing(5),
    width: '60vw'
  },

  searchButton: {
    position: 'absolute',
    transform: 'translate(60vw, -65px)',
    borderRadius: '10%',
    height: '57px',
    width: '57px'
  },

}));

export default useStyles;