import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core';
import sections from '../../constatnts/routes.json';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  toolbarSecondary: {
    justifyContent: 'space',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  }
}));

const Navigation: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {Object.entries(sections).map(([name, href]) => (
        <Link
          color="inherit"
          noWrap
          key={name}
          to={href}
          variant="body2"
          className={classes.toolbarLink}
          component={RouterLink}
        >
          {name.toLowerCase()}
        </Link>
      ))}
    </Toolbar>

  );
};

export default Navigation;