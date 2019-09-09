import React, { useEffect } from 'react';
import { green, grey, red } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { makeStyles } from '@material-ui/core';

interface ExistIconProps {
  isExist?: boolean;
  actionWhenEmpty: () => void;
}

const useStyles = makeStyles(() => ({
  progress: {
    color: grey[800],
  },
  check: {
    color: green[800],
  },
  highlightOff: {
    color: red[800],
  },
}));

const ExistIcon: React.FC<ExistIconProps> = (props: ExistIconProps) => {
  const { isExist, actionWhenEmpty } = props;
  const classes = useStyles();

  useEffect(() => {
    if (typeof isExist === 'undefined') {
      actionWhenEmpty();
    }
  }, []);

  if (isExist === undefined) {
    return <CircularProgress className={classes.progress} size={25} />;
  }

  return isExist ? (
    <CheckCircleOutlinedIcon className={classes.check} fontSize="large" />
  ) : (
    <HighlightOffOutlinedIcon className={classes.highlightOff} fontSize="large" />
  );
};

export default ExistIcon;
