import { TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface Props {
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
}
const useStyles = makeStyles()((theme) => ({
  inputWrapper: {
    width: '100%',
    letterSpacing: '0.5px',
    padding: 0,
  },
  input: {
    WebkitBoxShadow: '0 0 0 1000px white inset',
    padding: '1rem',
  },
}));
const Input = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  readOnly,
  label,
  labelTag,
  multiline,
}: Props) => {
  const { classes } = useStyles();
  return (
    <TextField
      multiline={multiline && multiline}
      rows={10}
      label={label && labelTag && labelTag}
      inputProps={{ className: classes.input, readOnly: readOnly && readOnly }}
      type={type && type}
      className={classes.inputWrapper}
      id={id}
      name={name}
      value={value}
      onChange={onChange && onChange}
      placeholder={placeholder ?? ''}
      required={required && required}
    />
  );
};

export default Input;
