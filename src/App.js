import React from 'react';
import './App.css';
import Header from './Header';
import Chats from './Chats';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SwipingCards from './SwipingCards';
import SwipeButtons from './SwipeButtons';
function App() {
  return (
    <div className="App">
        <Router>
          
          <Switch>
            <Route path= '/chats'>
              <Header backButton= '/'/>
              <Chats/>
            </Route>
            <Route path= '/'>
                <Header/>
                <SwipingCards/>
                <SwipeButtons/>
            </Route>
          </Switch>

        </Router>
    </div>
  );
}

export default App;
