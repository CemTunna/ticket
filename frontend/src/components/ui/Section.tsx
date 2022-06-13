import React from 'react';
import { makeStyles } from 'tss-react/mui';

interface Props {
  children: React.ReactNode;
}
const useStyles = makeStyles()((theme) => ({
  container: {
    marginTop: '1rem',
    padding: '1rem',
    textAlign: 'center',
  },
}));
const Section = ({ children }: Props) => {
  const { classes } = useStyles();

  return <section className={classes.container}>{children}</section>;
};

export default Section;
