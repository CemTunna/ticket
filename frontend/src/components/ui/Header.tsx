import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Grid, List, ListItem } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { logoutStart, reset } from '../../state/features/auth/authSlice';
import TicketLink from './TicketLink';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const useStyles = makeStyles()((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.main,
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  list: {
    display: 'flex',
    letterSpacing: '0.5px',
  },
  listitem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.palette.primary.light,
  },
  logo: {
    textDecoration: 'none',
    letterSpacing: '0.5px',
    fontSize: '40px',
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
  },
  icon: {
    marginLeft: '0.2rem',
  },
}));
const Header = () => {
  const { classes } = useStyles();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutStart());
    dispatch(reset());
    navigate('/');
  };

  return (
    <header className={classes.header}>
      <Grid>
        <Link to='/' className={classes.logo}>
          ticket
        </Link>
      </Grid>
      <List className={classes.list}>
        {user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <>
            <ListItem>
              <TicketLink to='/login' className={classes.listitem}>
                Login <LoginIcon className={classes.icon} />
              </TicketLink>
            </ListItem>
            <ListItem>
              <TicketLink to='/register' className={classes.listitem}>
                Register <AppRegistrationIcon className={classes.icon} />
              </TicketLink>
            </ListItem>
          </>
        )}
      </List>
    </header>
  );
};

export default Header;
