import { Button, Grid } from '@mui/material';
import { Fragment } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import useForm from '../hooks/useForm';
import Form from '../components/form/Form';
import { makeStyles } from 'tss-react/mui';
import Title from '../components/ui/Title';
import Text from '../components/ui/Text';
import LoginIcon from '@mui/icons-material/Login';
const useStyles = makeStyles()((theme) => ({
  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem',
  },
}));
const Login = () => {
  const { form, onChange, onSubmit } = useForm();
  const { email, password } = form;
  const { classes } = useStyles();

  return (
    <Fragment>
      <section className={classes.section}>
        <Title>
          Login <LoginIcon />
        </Title>
        <Text>Log in to send ticket</Text>
      </section>
      <section>
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
            <Grid>
              <Button type='submit'>Submit</Button>
            </Grid>
          }
        />
      </section>
    </Fragment>
  );
};

export default Login;
