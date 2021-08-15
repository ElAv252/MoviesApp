import React from 'react';
import ContactUs from './ContactUs';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default function App() {

  return (
    <React.Fragment>
      <Router>
        <header className='Header'>
          <nav>
            <ul className='NavUl'>
              <li className='NavLi'>
                <Link to='/' className='LinkTo'>Home</Link>
              </li>
              <li className='NavLi'>
                <Link to='/ContactUs' className='LinkTo'>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </header >
        <hr />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/ContactUs'>
            <ContactUs />
          </Route>
        </Switch>
      </Router>
      <hr className='Hr' />
      <footer>
        <div>
          hello world
        </div>
      </footer>
    </React.Fragment>
  )
};