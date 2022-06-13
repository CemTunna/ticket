import { Grid } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Text from '../components/ui/Text';
import Title from '../components/ui/Title';
import { createTicketStart, reset } from '../state/features/ticketSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import Loader from '../components/ui/Loader';
const CreateTicket = () => {
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
