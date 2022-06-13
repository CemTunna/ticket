import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
import { ChildrenClassName } from '../../interfaces/ui';

const useStyles = makeStyles()((theme) => ({
  text: {
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.light,
  },
}));

const Text = ({ className, children }: ChildrenClassName) => {
  const { classes } = useStyles();

  return (
    <Typography
      className={
        !className ? classes.text : classNames(className, classes.text)
      }
    >
      {children}
    </Typography>
  );
};

export default Text;
