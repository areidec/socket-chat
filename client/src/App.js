import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import AuthPage from './pages/AuthPage';

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={AuthPage} />
    </Router>
  )
}

export default App;