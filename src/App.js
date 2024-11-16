import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/header";
import { About, Home, Error } from './pages';
import "./styles/app.scss"


function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="*"
        element={<Error />}
      />
    </Routes>
    {/*<Footer />*/}
  </Router>
  );
}

export default App;
