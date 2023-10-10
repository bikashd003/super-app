import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Register/Signup';
import Category from './Category/Category';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <div id="App">
        <Routes>
          <Route
            exact path="/"
            element={<Signup />}
          />
          <Route
            exact path="/category"
            element={<Category />}
          />
          <Route
            exact path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>

      </div>
    </Router>
  )
}

export default App