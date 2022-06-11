import { Button, Grid, TextField, Typography } from '@mui/material';
import { Fragment, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import useForm from '../hooks/useForm';
const Register = () => {
  const { form, onChange, onSubmit } = useForm();
  const { confirmPassword, email, name, password } = form;
  return (
    <Fragment>
      <section>
        <Typography>
          Register <PersonIcon />
        </Typography>
        <Typography>Create an account</Typography>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <Grid>
            <TextField
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Name'
              required={true}
            />
          </Grid>
          <Grid>
            <TextField
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Email'
              required={true}
            />
          </Grid>
          <Grid>
            <TextField
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Password'
              required={true}
            />
          </Grid>
          <Grid>
            <TextField
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              placeholder='Confirm Password'
              required={true}
            />
          </Grid>
          <Grid>
            <Button type='submit'>Submit</Button>
          </Grid>
        </form>
      </section>
    </Fragment>
  );
};

export default Register;
