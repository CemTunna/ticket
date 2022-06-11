import { Grid, TextField } from '@mui/material';
interface Props {
  item: any;
}
const FormItem = ({ item }: Props) => {
  const { id, name, value, onChange, placeholder, required } = item;

  return (
    <Grid>
      <TextField
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
