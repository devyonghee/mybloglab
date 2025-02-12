import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import sections from '@src/constatnts/routes.json';

const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: 'space',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Navigation: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {Object.values(sections).map(({ href, name }) => (
        <Link
          color="inherit"
          noWrap
          key={name}
          to={href}
          variant="body2"
          className={classes.toolbarLink}
          component={RouterLink}
        >
          {name}
        </Link>
      ))}
    </Toolbar>
  );
};

export default Navigation;
