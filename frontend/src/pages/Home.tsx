import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Text from '../components/ui/Text';
import Title from '../components/ui/Title';
const Home = () => {
  return (
    <Fragment>
      <section>
        <Title>Do you need help from support service ? </Title>
        <Text>Select what you want to do </Text>
      </section>
      <Link to='/createTicket'>Create ticket</Link>
      <Link to='/openTickets'>Open tickets</Link>
    </Fragment>
  );
};

export default Home;
