import { Grid } from '@mui/material';
import TicketButton from '../ui/TicketButton';
import { makeStyles } from 'tss-react/mui';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles()((theme) => ({
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: '2rem',
  },
}));
const FormSubmitButton = () => {
  const { classes } = useStyles();

  return (
    <Grid className={classes.btnContainer}>
      <TicketButton type='submit' className={classes.btn}>
        <ArrowForwardIosIcon fontSize='large' />
      </TicketButton>
    </Grid>
  );
};

export default FormSubmitButton;
