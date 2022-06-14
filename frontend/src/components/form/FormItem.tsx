import { Grid, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Input from '../ui/Input';
interface Props {
  item: {
    id: string;
    name: string;
    value: string;
    onChange?: (e: any) => void;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    type?: string;
    label?: boolean;
    labelTag?: string;
    multiline?: boolean;
  };
}
const useStyles = makeStyles()((theme) => ({
  item: {
    flex: 1,
    marginTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '30rem',
    },
  },
}));
const FormItem = ({ item }: Props) => {
  const {
    multiline,
    id,
    name,
    value,
    onChange,
    placeholder,
    required,
    label,
    labelTag,
  } = item;
  const { classes } = useStyles();

  return (
    <Grid className={classes.item}>
      <Input
        multiline={multiline}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        label={label}
        labelTag={labelTag}
      />
    </Grid>
  );
};

export default FormItem;
