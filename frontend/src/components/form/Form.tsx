import React from 'react';
import FormItem from './FormItem';
import { makeStyles } from 'tss-react/mui';

interface Props {
  formItems: any;
  onSubmit: (e: any) => void;
  others: any;
}
const useStyles = makeStyles()((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },
  },
}));
const Form = ({ onSubmit, formItems, others }: Props) => {
  const { classes } = useStyles();

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      {formItems.map((item: any) => (
        <FormItem item={item} key={item.id} />
      ))}
      {others}
    </form>
  );
};

export default Form;
