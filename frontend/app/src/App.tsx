import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';
import ObserverRestauranteFavorito from './components/observer/observerRestauranteFavorito';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/observer" element={<ObserverRestauranteFavorito />} />
      </Routes>
    </Router>
  );
}

export default App;
