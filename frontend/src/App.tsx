import React from 'react';
import { Theme } from './theme/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/ui/Header';
import './theme/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateTicket from './pages/CreateTicket';
import PrivateRoute from './components/PrivateRoute';
import Tickets from './pages/tickets/Tickets';
import Ticket from './pages/ticket/Ticket';
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/createTicket' element={<PrivateRoute />}>
              <Route path='/createTicket' element={<CreateTicket />} />
            </Route>
            <Route path='/tickets' element={<PrivateRoute />}>
              <Route path='/tickets' element={<Tickets />} />
            </Route>
            <Route path='/ticket/:id' element={<PrivateRoute />}>
              <Route path='/ticket/:id' element={<Ticket />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer autoClose={1000} />
    </React.Fragment>
  );
};

export default Theme(App);
