import { Button, Grid } from '@mui/material';
import { Fragment, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import useForm from '../hooks/useForm';
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
import TicketButton from '../components/ui/TicketButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Section from '../components/ui/Section';
const useStyles = makeStyles()((theme) => ({
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginTop: '2rem',
  },
  icon: {
    marginLeft: '0.5rem',
  },
}));
const Login = () => {
  const { form, onChange, onSubmit } = useForm();
  const { email, password } = form;
  const { classes } = useStyles();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { isError, isLoading, isSuccess, msg, user } = useAppSelector(
    (state) => state.auth
  );

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
          ]}
          onSubmit={onSubmit}
          others={
            <Grid className={classes.btnContainer}>
              <TicketButton type='submit' className={classes.btn}>
                <ArrowForwardIosIcon />
              </TicketButton>
            </Grid>
          }
        />
      </Section>
    </Fragment>
  );
};

export default Login;
