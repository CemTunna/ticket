import { Button, Grid } from '@mui/material';
import { Fragment, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import useForm from '../hooks/useForm';
import Form from '../components/form/Form';
import { makeStyles } from 'tss-react/mui';
import Title from '../components/ui/Title';
import Text from '../components/ui/Text';
import { useAppSelector } from '../state/hooks';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { reset } from '../state/features/auth/authSlice';
import { useDispatch } from 'react-redux';
const useStyles = makeStyles()((theme) => ({
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem',
  },
}));
const Register = () => {
  const { form, onChange, onSubmit } = useForm();
  const { confirmPassword, email, name, password } = form;
  const { classes } = useStyles();

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  return (
    <Fragment>
      <section className={classes.section}>
        <Title>
          Register <PersonIcon />
        </Title>
        <Text>Create an account</Text>
      </section>
      <section>
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
      </section>
    </Fragment>
  );
};

export default Register;
