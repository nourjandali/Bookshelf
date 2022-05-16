import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import Discover from "./Discover";
import Reading from "./Reading";
import Finished from "./Finished";
import Checkout from "./Checkout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/reading" element={<Reading />} />
        <Route exact path="/finished" element={<Finished />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
