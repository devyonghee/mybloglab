import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  keywordTextField: {
    display: 'inline-flex',
    marginTop: theme.spacing(5),
    width: '40vw',
    maxWidth: '400px',
  },
  search: {
    transform: 'translateY(39px)',
    borderRadius: '10%',
    height: '57px',
    width: '57px',
  },
}));

export default useStyles;
