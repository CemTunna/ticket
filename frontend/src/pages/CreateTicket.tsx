import { Grid } from '@mui/material';
import React, { Fragment, useState } from 'react';
import Text from '../components/ui/Text';
import Title from '../components/ui/Title';
import { useAppSelector } from '../state/hooks';

const CreateTicket = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [ticketFormData, setTicketFormData] = useState({
    issue: '',
    description: '',
  });
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(ticketFormData);
  };
  const onChange = (e: any) => {
    setTicketFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Fragment>
      <section>
        <Title>Create New Ticket To Get Support</Title>
        <Text>Fill the form</Text>
      </section>
      <Grid>
        <label htmlFor='name'></label>
        <input type='text' value={name} id='name' readOnly />
      </Grid>
      <Grid>
        <label htmlFor='email'></label>
        <input type='text' value={email} id='email' readOnly />
      </Grid>
      <section>
        <form onSubmit={onSubmit}>
          <Grid>
            <label htmlFor='issue'>Issue title</label>
            <input
              value={ticketFormData.issue}
              name='issue'
              onChange={onChange}
              type='text'
              id='issue'
            />
          </Grid>
          <Grid>
            <label htmlFor='description'>Issue Description</label>
            <textarea
              value={ticketFormData.description}
              name='description'
              onChange={onChange}
              id='description'
            />
          </Grid>
          <button type='submit'>submit</button>
        </form>
      </section>
    </Fragment>
  );
};

export default CreateTicket;
