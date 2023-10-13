import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Register/Signup';
import Category from './Category/Category';
import Dashboard from './Dashboard/Dashboard';
import MovieRecomendation from './MovieRecomendation/MovieRecomendation';

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
          <Route
            exact path="/movie"
            element={<MovieRecomendation/ >}
          />
        </Routes>

      </div>
    </Router>
  )
}

export default App