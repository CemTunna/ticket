import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from 'tss-react/mui';
interface Props {
  path: string;
}
const useStyles = makeStyles()((theme) => ({
  link: {
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '1rem',
    alignItems: 'center',
    transition: 'all .2s ease-out',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },
}));
const BackButton = ({ path }: Props) => {
  const { classes } = useStyles();

  return (
    <Link
      to={path}
      style={{
        padding: '0',
        alignSelf: 'flex-start',
        justifySelf: 'flex-end',
      }}
    >
      <IconButton className={classes.link}>
        <ArrowBackIosIcon fontSize='large' />
      </IconButton>
    </Link>
  );
};

export default BackButton;
