import React, { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import Loader from '../components/ui/Loader';
import { getTicketsStart, reset } from '../state/features/ticketSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Title from '../components/ui/Title';
import { Grid } from '@mui/material';
import Item from '../components/Item';
const Tickets = () => {
  const { isLoading, isSuccess, isError, msg, tickets } = useAppSelector(
    (state) => state.ticket
  );
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [isSuccess, dispatch]);
  useEffect(() => {
    if (isError) {
      toast.error(msg);
    }

    dispatch(getTicketsStart(user.token));
    //eslint-disable-next-line
  }, [isError]);
  if (isLoading) return <Loader />;
  return (
    <Fragment>
      <Title>Tickets</Title>
      <Grid>
        <Grid>
          <div>Date</div>
          <div>Issue</div>
          <div>Status</div>
          <div></div>
        </Grid>

        {tickets.map((ticket: any) => (
          <Item key={ticket._id} ticket={ticket} />
        ))}
      </Grid>

      <Link to='/'>Back</Link>
    </Fragment>
  );
};

export default Tickets;
