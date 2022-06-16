import React, { Fragment, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import Loader from '../components/ui/Loader';
import { getTicketsStart, reset } from '../state/features/ticketSlice';
import { toast } from 'react-toastify';
import Title from '../components/ui/Title';
import { Grid, List } from '@mui/material';
import Item from '../components/Item';
import { makeStyles } from 'tss-react/mui';
import Text from '../components/ui/Text';
import BackButton from '../components/ui/BackButton';

const useStyles = makeStyles()((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titles: {
    display: 'flex',
    alignItems: 'center',
    width: '88%',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: '25px',
  },
  list: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
}));
const Tickets = () => {
  const { classes } = useStyles();

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
    dispatch(reset());
    //eslint-disable-next-line
  }, [isError]);
  if (isLoading) return <Loader />;
  return (
    <Fragment>
      <Title>Tickets</Title>
      <Grid className={classes.container}>
        <Grid className={classes.titles}>
          <Text className={classes.text}>Date</Text>
          <Text className={classes.text}>Issue</Text>
          <Text className={classes.text}>Status</Text>
        </Grid>
        <List className={classes.list}>
          {tickets.length > 0 ? (
            tickets.map((ticket: any) => (
              <Item key={ticket._id} ticket={ticket} />
            ))
          ) : (
            <Title>No Tickets</Title>
          )}
        </List>
      </Grid>

      <BackButton path='/' />
    </Fragment>
  );
};

export default Tickets;
