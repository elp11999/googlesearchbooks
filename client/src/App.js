import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import SaveBooks from './pages/SaveBooks';
import SearchBooks from './pages/SearchBooks';
import NoMatch from './pages/NoMatch';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/search" component={SearchBooks} />
          <Route component={NoMatch} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
