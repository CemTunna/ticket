import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { ChildrenClassName } from '../../interfaces/ui';

const useStyles = makeStyles()((theme) => ({
  container: {
    marginTop: '1rem',
    padding: '1rem',
    textAlign: 'center',
  },
}));
const Section = ({ children }: ChildrenClassName) => {
  const { classes } = useStyles();

  return <section className={classes.container}>{children}</section>;
};

export default Section;
