import { Grid } from '@mui/material';
import { Fragment, useEffect } from 'react';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Form from '../components/form/Form';
import { makeStyles } from 'tss-react/mui';
import Title from '../components/ui/Title';
import Text from '../components/ui/Text';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { reset } from '../state/features/auth/authSlice';
import Loader from '../components/ui/Loader';
import Section from '../components/ui/Section';
import TicketButton from '../components/ui/TicketButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useForm from '../hooks/useForm';
import FormSubmitButton from '../components/form/FormSubmitButton';

const useStyles = makeStyles()((theme) => ({
  icon: {
    marginLeft: '0.5rem',
  },
}));
const Register = () => {
  const { form, onChange, onSubmit, isError, isLoading, isSuccess, msg, user } =
    useForm();
  const { confirmPassword, email, name, password } = form;
  const { classes } = useStyles();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(msg);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [isError, isSuccess, user, msg, dispatch, navigate]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Fragment>
      <Section>
        <Title>
          Register{' '}
          <AppRegistrationIcon fontSize='large' className={classes.icon} />
        </Title>
        <Text>Create an account</Text>
      </Section>
      <Section>
        <Form
          formItems={[
            {
              id: 'name',
              name: 'name',
              value: name,
              onChange: onChange,
              placeholder: 'Name',
              required: true,
            },
            {
              id: 'email',
              name: 'email',
              value: email,
              onChange: onChange,
              placeholder: 'Email',
              required: true,
            },
            {
              id: 'password',
              name: 'password',
              value: password,
              onChange: onChange,
              placeholder: 'Password',
              required: true,
            },
            {
              id: 'confirmPassword',
              name: 'confirmPassword',
              value: confirmPassword,
              onChange: onChange,
              placeholder: 'Confirm Password',
              required: true,
            },
          ]}
          onSubmit={onSubmit}
          submitButton={<FormSubmitButton />}
        />
      </Section>
    </Fragment>
  );
};

export default Register;
