import { Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

interface Props {
  children: React.ReactNode;
}
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

const Text = ({ children }: Props) => {
  const { classes } = useStyles();

  return <Typography className={classes.text}>{children}</Typography>;
};

export default Text;
