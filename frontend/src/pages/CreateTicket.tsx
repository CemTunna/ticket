import { Grid } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Text from '../components/ui/Text';
import Title from '../components/ui/Title';
import { createTicketStart, reset } from '../state/features/ticketSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import Loader from '../components/ui/Loader';
import Section from '../components/ui/Section';
import Input from '../components/ui/Input';
import { makeStyles } from 'tss-react/mui';
import Form from '../components/form/Form';
import FormSubmitButton from '../components/form/FormSubmitButton';

const useStyles = makeStyles()((theme) => ({
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
}));
const CreateTicket = () => {
  const { classes } = useStyles();
  const { user } = useAppSelector((state) => state.auth);
  const { isError, isLoading, isSuccess, msg } = useAppSelector(
    (state) => state.ticket
  );

  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [ticketFormData, setTicketFormData] = useState({
    issue: '',
    description: '',
  });
  const { token } = user;
  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createTicketStart({ ticketFormData, token }));
  };
  const onChange = (e: any) => {
    setTicketFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
    <Fragment>
      <Section>
        <Title>Create New Ticket To Get Support</Title>
        <Text>Fill the form</Text>
      </Section>
      <Section>
        <Grid className={classes.wrapper}>
          <label className={classes.label} htmlFor='name'>
            Name
          </label>
          <Input type='text' value={name} name='name' id='name' readOnly />
        </Grid>
        <Grid className={classes.wrapper}>
          <label className={classes.label} htmlFor='email'>
            Email
          </label>
          <Input type='text' name='email' value={email} id='email' readOnly />
        </Grid>
      </Section>
      <Section>
        <Form
          formItems={[
            {
              value: ticketFormData.issue,
              name: 'issue',
              onChange,
              type: 'text',
              id: 'issue',
              placeholder: 'Issue Title',
            },
            {
              value: ticketFormData.description,
              name: 'description',
              onChange,
              id: 'description',
              placeholder: 'Issue Description',
              multiline: true,
            },
          ]}
          onSubmit={onSubmit}
          submitButton={<FormSubmitButton />}
        />
      </Section>
      <Link to='/'>Back</Link>
    </Fragment>
  );
};

export default CreateTicket;
