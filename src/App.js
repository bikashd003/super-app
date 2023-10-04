import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Register/Signup';
import Category from './Category/Category';

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
        
        </Routes>

      </div>
    </Router>
  )
}

export default App