import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import classNames from 'classnames';
interface Props {
  children: React.ReactNode;
  to: string;
  className?: string;
}
const useStyles = makeStyles()((theme) => ({
  link: {
    textDecoration: 'none',
    letterSpacing: '0.5px',
    color: theme.palette.primary.main,
    textTransform: 'capitalize',
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
