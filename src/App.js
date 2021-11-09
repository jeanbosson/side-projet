import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Know from "./pages/Know";
import Notfound from "./pages/Notfound";
import Portefolio from "./pages/Portefolio";

const App = () => {
  return(
    <div>
      <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
          <Route path="/information" element={<Contact />} />
          <Route path="/competence" element={<Know/>} />
          <Route path="/portefolio" element={<Portefolio/>} />
          <Route  element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;