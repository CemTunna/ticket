import { Fragment } from 'react';
import Text from '../components/ui/Text';
import Title from '../components/ui/Title';
import { makeStyles } from 'tss-react/mui';
import Section from '../components/ui/Section';
import { Grid } from '@mui/material';
import TicketLink from '../components/ui/TicketLink';

const useStyles = makeStyles()((theme) => ({
  card: {
    flex: 1,
    height: '20rem',
    margin: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '24px',
    transition: 'all .2s ease-out',
    fontSize: '30px',
    '&:active': {
      transform: 'rotate(-20deg)',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
  },
  bodyContainer: {
    display: 'flex',
    padding: '1rem',
  },
}));

const Home = () => {
  const { classes } = useStyles();

  return (
    <Fragment>
      <Section>
        <Title>Do you need help from support service ? </Title>
        <Text>Select what you want to do </Text>
      </Section>
      <Grid className={classes.bodyContainer}>
        <TicketLink to='/createTicket' className={classes.card}>
          Create ticket
        </TicketLink>

        <TicketLink to='/tickets' className={classes.card}>
          Open tickets
        </TicketLink>
      </Grid>
    </Fragment>
  );
};

export default Home;
