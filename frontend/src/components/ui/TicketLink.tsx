import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
import { ChildrenClassName } from '../../interfaces/ui';
interface Props extends ChildrenClassName {
  to: string;
}
const useStyles = makeStyles()((theme) => ({
  link: {
    textDecoration: 'none',
    letterSpacing: '0.5px',
    textTransform: 'capitalize',
    transition: 'all .2s ease-out',
    borderBottom: '3px solid transparent',
    '&:hover': {
      borderBottom: '3px solid',
      borderBottomColor: theme.palette.primary.main,
    },
  },
}));
const TicketLink = ({ children, to, className }: Props) => {
  const { classes } = useStyles();

  return (
    <Link
      to={to}
      className={
        !className ? classes.link : classNames(className, classes.link)
      }
    >
      {children}
    </Link>
  );
};

export default TicketLink;
