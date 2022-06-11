import React from 'react';
import { Counter } from './features/counter/Counter';
import { Theme } from './theme/Theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/ui/Header';
import './theme/App.css';
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
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default Theme(App);
