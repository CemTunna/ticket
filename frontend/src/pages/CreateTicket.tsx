import { Grid, IconButton } from '@mui/material';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Text from '../components/ui/Text';
import Title from '../components/ui/Title';
import { reset } from '../state/features/ticketSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import Loader from '../components/ui/Loader';
import Section from '../components/ui/Section';
import Input from '../components/ui/Input';
import { makeStyles } from 'tss-react/mui';
import Form from '../components/form/Form';
import FormSubmitButton from '../components/form/FormSubmitButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import useForm from '../hooks/useForm';
const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    marginTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      width: '30rem',
    },
  },
  label: {
    color: theme.palette.primary.main,
    letterSpacing: '0.5px',
  },
  link: {
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '1rem',
    alignItems: 'center',
    transition: 'all .2s ease-out',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },
  text: {
    marginTop: '1rem',
  },
}));
const CreateTicket = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { classes } = useStyles();
  const { onTicketChange, ticketFormData, user, onSubmit } = useForm();
  const { isError, isLoading, isSuccess, msg } = useAppSelector(
    (state) => state.ticket
  );

  useEffect(() => {
    if (isError) {
      toast.error(msg);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate('/tickets');
    }
    dispatch(reset());
  }, [isError, isSuccess]);
  if (isLoading) {
    <Loader />;
  }
  return (
    <Grid className={classes.container}>
      <Section>
        <Title>Create New Ticket To Get Support</Title>
        <Text className={classes.text}>Fill the form</Text>
      </Section>
      <Section>
        <Grid className={classes.wrapper}>
          <label className={classes.label} htmlFor='name'>
            Name
          </label>
          <Input type='text' value={user.name} name='name' id='name' readOnly />
        </Grid>
        <Grid className={classes.wrapper}>
          <label className={classes.label} htmlFor='email'>
            Email
          </label>
          <Input
            type='text'
            name='email'
            value={user.email}
            id='email'
            readOnly
          />
        </Grid>
      </Section>
      <Section>
        <Form
          formItems={[
            {
              value: ticketFormData.issue,
              name: 'issue',
              onChange: onTicketChange,
              type: 'text',
              id: 'issue',
              placeholder: 'Issue Title',
            },
            {
              value: ticketFormData.description,
              name: 'description',
              onChange: onTicketChange,
              id: 'description',
              placeholder: 'Issue Description',
              multiline: true,
            },
          ]}
          onSubmit={onSubmit}
          submitButton={<FormSubmitButton />}
        />
      </Section>
      <Link
        to='/'
        style={{
          padding: '0',
          alignSelf: 'flex-start',
        }}
      >
        <IconButton className={classes.link}>
          <ArrowBackIosIcon fontSize='large' />
        </IconButton>
      </Link>
    </Grid>
  );
};

export default CreateTicket;
