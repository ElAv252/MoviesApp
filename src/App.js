import React from 'react';
import ContactUs from './ContactUs';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import MoviePage from './MoviePage';

/*

TODO:

*Need to find the correct way to calculate the heightOfPMovie. DONE
*Need to fix the GrayShadow position. DONE
*Need to fix the FrontCard position after click on GrayShadow(CSS:check space item). DONE
*Need to add back button and Details button on the GrayShadow after click on it. DONE
*Need to add page when click on Details button *NEW=>* and check hooks in react router. DONE
*Need to coordinate the film plot with the image and the URL of the film. DONE
*Need to finish (Add trailer, plot and more...) the movie page. 
*Need to think about create one component that give me all the data from the API.
*Need to understand why the TitleJson in localStorage not work. DONE
*Need to arrange the TwoBtn so that they will never move.

*/

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
          <Route path='/MovieName/:id'>
            <MoviePage />
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