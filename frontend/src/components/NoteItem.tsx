import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import Text from './ui/Text';

const useStyles = makeStyles()((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem',
    margin: '1rem',
    borderRadius: '10px',
  },
}));
const NoteItem = ({ note }: any) => {
  const { classes } = useStyles();

  const { user } = useSelector((state: any) => state.auth);
  return (
    <Grid className={classes.container}>
      <Grid>
        <Text>{user.name}</Text>
        <Text>{note.text}</Text>
      </Grid>
      <Text>{new Date(note.createdAt).toLocaleString('en-US')}</Text>
    </Grid>
  );
};

export default NoteItem;
