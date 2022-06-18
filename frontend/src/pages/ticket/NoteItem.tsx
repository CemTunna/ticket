import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import Text from '../../components/ui/Text';

const useStyles = makeStyles()((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '10px',
    flexWrap: 'wrap',

    [theme.breakpoints.down('sm')]: {
      overflow: 'scroll',
    },
  },

  title: {
    fontSize: '20px',
  },
  desc: {
    color: theme.palette.primary.light,
    letterSpacing: '0.5px',
  },
  subcontainer: {
    overflowX: 'auto',
  },
}));
const NoteItem = ({ note }: any) => {
  const { classes } = useStyles();

  const { user } = useSelector((state: any) => state.auth);
  return (
    <Grid className={classes.container}>
      <Grid className={classes.subcontainer}>
        <Text className={classes.title}>{user.name}</Text>
        <Typography className={classes.desc}>{note.text}</Typography>
      </Grid>
      <Text>{new Date(note.createdAt).toLocaleString('en-US')}</Text>
    </Grid>
  );
};

export default NoteItem;
