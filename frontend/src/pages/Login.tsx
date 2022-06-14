import { Fragment, useEffect, useRef } from 'react';
import Form from '../components/form/Form';
import { makeStyles } from 'tss-react/mui';
import Title from '../components/ui/Title';
import Text from '../components/ui/Text';
import LoginIcon from '@mui/icons-material/Login';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { reset } from '../state/features/auth/authSlice';
import Loader from '../components/ui/Loader';
import Section from '../components/ui/Section';
import useForm from '../hooks/useForm';
import FormSubmitButton from '../components/form/FormSubmitButton';
const useStyles = makeStyles()((theme) => ({
  icon: {
    marginLeft: '0.5rem',
  },
}));
const Login = () => {
  const { form, onChange, onSubmit, isError, isLoading, isSuccess, msg, user } =
    useForm();
  const { email, password } = form;
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
          Login <LoginIcon className={classes.icon} fontSize='large' />
        </Title>
        <Text>Log in to send ticket</Text>
      </Section>
      <Section>
        <Form
          formItems={[
            {
              id: 'email',
              name: 'email',
              value: email,
              onChange,
              placeholder: 'Email',
              required: true,
            },
            {
              id: 'password',
              name: 'password',
              value: password,
              onChange,
              placeholder: 'Password',
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

export default Login;
