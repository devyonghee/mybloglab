import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  linkTextField: {
    display: 'flex',
    marginTop: theme.spacing(5),
    width: '30vw'
  },

  searchButton: {
    position: 'absolute',
    top: '150px',
    borderRadius: '10%',
    left: '33vw',
    height: '57px',
    width: '57px'
  },

}));

export default useStyles;