import { Button, Grid } from '@mui/material';
import { Fragment, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import useForm from '../hooks/useForm';
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
const useStyles = makeStyles()((theme) => ({}));
const Register = () => {
  const { form, onChange, onSubmit } = useForm();
  const { confirmPassword, email, name, password } = form;
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
          Register <PersonIcon />
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
          others={
            <Grid>
              <Button type='submit'>Submit</Button>
            </Grid>
          }
        />
      </Section>
    </Fragment>
  );
};

export default Register;
