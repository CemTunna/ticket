import { Button, ButtonProps } from '@mui/material';
import classNames from 'classnames';
import { makeStyles } from 'tss-react/mui';

interface Props extends ButtonProps {
  className?: string;
}
const useStyles = makeStyles()((theme) => ({
  btn: {
    color: theme.palette.secondary.main,
    textAlign: 'center',
    fontSize: theme.typography.pxToRem(20),
    letterSpacing: theme.typography.pxToRem(0.7),
    lineHeight: theme.typography.pxToRem(23.87),
    fontWeight: theme.typography.fontWeightMedium,
    padding: '1rem 4rem',
    backgroundColor: theme.palette.primary.main,
    transition: 'all .2s ease-out',
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: 'transparent',
      border: '1px solid  #FAED26',
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 3rem',
    },
  },
}));
const TicketButton = ({ className, ...rest }: Props) => {
  const { classes } = useStyles();
  return (
    <Button
      className={!className ? classes.btn : classNames(className, classes.btn)}
      {...rest}
    />
  );
};

export default TicketButton;
