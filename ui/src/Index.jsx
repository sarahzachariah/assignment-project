// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Layouts/Home_Page';
import NewUser from './Layouts/New_User';

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/new-user" component={NewUser} />
      </Routes>
    </Router>
  );
}

export default Index;