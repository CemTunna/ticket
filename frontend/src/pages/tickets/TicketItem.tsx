import { Grid, ListItem, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';

const useStyles = makeStyles()((theme) => ({
  item: {
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'space-around',
    margin: '1rem',
  },
  text: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 3rem',
    letterSpace: '0.5px',
  },
  closed: {
    color: theme.palette.primary.light,
    border: '1px solid #ee231498',
    borderRadius: '24px',
    backgroundColor: '#ee231498',
  },
  new: {
    color: theme.palette.primary.light,
    border: '1px solid #57fa2696',
    borderRadius: '24px',
    backgroundColor: '#57fa2696',
  },
  light: {
    color: theme.palette.primary.light,
  },
  link: {
    textDecoration: 'none',
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
    color: theme.palette.primary.main,
    transition: 'all .2s ease-out',
    '&:hover': {
      opacity: 0.3,
    },
  },
}));
const Item = ({ ticket }: any) => {
  const { classes } = useStyles();

  return (
    <ListItem className={classes.item}>
      <Typography className={classNames(classes.text, classes.light)}>
        {new Date(ticket.createdAt).toLocaleString('en-US')}
      </Typography>
      <Typography className={classNames(classes.text, classes.light)}>
        {ticket.issue}
      </Typography>
      <Typography
        className={
          ticket.status === 'closed'
            ? classNames(classes.text, classes.closed)
            : classNames(classes.text, classes.new)
        }
      >
        {ticket.status}
      </Typography>

      <Link to={`/ticket/${ticket._id}`} className={classes.link}>
        {' '}
        Details
      </Link>
    </ListItem>
  );
};

export default Item;
