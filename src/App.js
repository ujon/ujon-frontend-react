import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// Components/pages
import Home from "./components/pages/Home";

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
  </Router>
);
export default App;
