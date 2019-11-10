import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

import Sigin from './pages/Signin/Signin'
import Instructions from './pages/Instructions/Instructions'
import Greeting from './pages/Greeting/Greeting'
import Survey from './pages/Survey/Survey'
import FacebookVideo from './components/FacebookVideo/FacebookVideo'
import FacebookPost from './components/FacebookPost/FacebookPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/signin">
          <Sigin/>
        </Route>
        <Route path='/instructions'>
          <Instructions/>
        </Route>
        <Route path='/greeting'>
          <Greeting/>
        </Route>
        <Route path="/survey">
          <Survey/>
        </Route>
        <Route path='/video'>
          <FacebookPost/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
