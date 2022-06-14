import { Grid, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface Props {
  item: any;
}
const useStyles = makeStyles()((theme) => ({
  item: {
    flex: 1,
    marginTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '30rem',
    },
  },
  inputWrapper: {
    width: '100%',
    letterSpacing: '0.5px',
  },
  input: {
    WebkitBoxShadow: '0 0 0 1000px white inset',
  },
}));
const FormItem = ({ item }: Props) => {
  const { id, name, value, onChange, placeholder, required } = item;
  const { classes } = useStyles();

  return (
    <Grid className={classes.item}>
      <TextField
        inputProps={{ className: classes.input }}
        className={classes.inputWrapper}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </Grid>
  );
};

export default FormItem;
