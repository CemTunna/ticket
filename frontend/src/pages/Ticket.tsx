import { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  closeTicketStart,
  getTicketStart,
} from '../state/features/ticketSlice';
import {
  reset as notesReset,
  getNotesStart,
} from '../state/features/noteSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import Loader from '../components/ui/Loader';
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
import BackButton from '../components/ui/BackButton';

const useStyles = makeStyles()((theme) => ({
  text: {
    color: theme.palette.primary.light,
    letterSpace: '0.5px',
    margin: '1rem',
  },
  closed: {
    color: theme.palette.primary.light,
    border: '1px solid #ee231498',
    borderRadius: '24px',
    backgroundColor: '#ee231498',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10rem',
  },
  new: {
    color: theme.palette.primary.light,
    border: '1px solid #57fa2696',
    borderRadius: '24px',
    backgroundColor: '#57fa2696',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '10rem',
  },
  btn: {
    color: theme.palette.secondary.main,
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(15),
    letterSpacing: theme.typography.pxToRem(0.7),
    lineHeight: theme.typography.pxToRem(23.87),
    fontWeight: theme.typography.fontWeightMedium,
    padding: '0.5rem 2rem',
    marginLeft: '1rem',
    backgroundColor: theme.palette.primary.main,
    transition: 'all .2s ease-out',
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      border: '1px solid  #FAED26',
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0.5rem 1rem',
    },
  },
  desc: {
    backgroundColor: theme.palette.secondary.light,
    padding: '0.5rem',
    margin: '1rem',
    borderRadius: '10px',
  },
}));
const Ticket = () => {
  const { classes } = useStyles();

  const { isError, msg, isLoading, ticket } = useAppSelector(
    (state) => state.ticket
  );

  const { isLoading: notesLoading, notes } = useAppSelector(
    (state) => state.note
  );

  const {
    user: { token },
  } = useAppSelector((state) => state.auth);
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = params;

  useEffect(() => {
    if (isError) {
      toast.error(msg);
    }
    id && dispatch(getTicketStart({ id, token }));
    dispatch(getNotesStart({ id, token }));
    dispatch(notesReset());
    //eslint-disable-next-line
  }, [isError, id, msg, token]);

  if (isLoading) return <Loader />;
  if (notesLoading) return <Loader />;

  const onClose = () => {
    id && dispatch(closeTicketStart({ token, id }));
    toast.success('ticket successfully closed');
    navigate('/tickets');
  };

  return (
    <Fragment>
      <Grid style={{ marginBottom: '4rem' }}>
        <header>
          <Typography className={classes.text}>Ticket ID: {id} </Typography>
          <Typography
            className={
              ticket.status === 'closed'
                ? classNames(classes.text, classes.closed)
                : classNames(classes.text, classes.new)
            }
          >
            {ticket.status}
          </Typography>
          <Typography className={classes.text}>
            Date submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
          </Typography>
          <hr />
          <Grid className={classes.desc}>
            <Typography className={classes.text}>
              Description of Issue
            </Typography>
            <Typography className={classes.text}>
              {ticket.description}
            </Typography>
          </Grid>
        </header>
        {/* {notes.map(note=><NoteItem/>)} */}
        {ticket.status !== 'closed' && (
          <Button className={classes.btn} onClick={onClose}>
            Close ticket
          </Button>
        )}
      </Grid>
      <BackButton path='/tickets' />
    </Fragment>
  );
};

export default Ticket;
