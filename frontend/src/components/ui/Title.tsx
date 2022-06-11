import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

interface Props {
  children: React.ReactNode;
}
const useStyles = makeStyles()((theme) => ({
  title: {
    letterSpacing: '0.5px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.light,
    fontSize: '20px',
  },
}));

const Title = ({ children }: Props) => {
  const { classes } = useStyles();

  return <Typography className={classes.title}>{children}</Typography>;
};

export default Title;
