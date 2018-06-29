import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Sweet from './components/Sweet';
import Winners from './components/Winners';
import Board from './components/Board';
import Contact from './components/Contact';

const App = () => (
  <main>

	  	<ScrollToTop>

		    {/*<Switch>*/}

		      <Route exact path='/' component={Sweet}/>

		      <Route path='/winners' component={Winners}/>

		      <Route path='/board' component={Board}/>

		      <Route path='/contact' component={Contact}/>

		      <Redirect to={{pathname: '/'}} />

		    {/*</Switch>*/}

	    </ScrollToTop>

  </main>
)

  export default App;