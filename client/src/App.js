import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";

const App = () =>
    <Router>
	    <div>
	      <Nav />
	      <Main />
	    </div>
    </Router>;

export default App;
