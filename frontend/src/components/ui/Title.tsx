import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { ChildrenClassName } from '../../interfaces/ui';
import classNames from 'classnames';
const useStyles = makeStyles()((theme) => ({
  title: {
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.light,
    fontSize: '30px',
  },
}));

const Title = ({ children, className }: ChildrenClassName) => {
  const { classes } = useStyles();

  return (
    <Typography
      className={
        !className ? classes.title : classNames(className, classes.title)
      }
    >
      {children}
    </Typography>
  );
};

export default Title;
