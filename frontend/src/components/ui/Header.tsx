import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Link } from 'react-router-dom';
import { Grid, List, ListItem } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import classNames from 'classnames';
const useStyles = makeStyles()((theme) => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.main,
    padding: '0 0.5rem',
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
    fontSize: '20px',
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
  return (
    <header className={classes.header}>
      <Grid>
        <Link to='/' className={classes.logo}>
          ticket
        </Link>
      </Grid>
      <List className={classes.list}>
        <ListItem>
          <Link to='/login' className={classes.listitem}>
            Login <LoginIcon className={classes.icon} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/register' className={classes.listitem}>
            Register <PersonIcon className={classes.icon} />
          </Link>
        </ListItem>
      </List>
    </header>
  );
};

export default Header;
