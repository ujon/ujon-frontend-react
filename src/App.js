import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
// Utils
import setAuthToken from "./utils/setAuthToken";
// Actions
import { loadUser } from "./actions/auth";
// Components/pages
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import Test from "./components/pages/Test";
// Style
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyles";
import { light, dark } from "./theme/theme";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Switch>
              <Route exact path="/test" component={Test} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/" component={Home} />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};
export default App;
