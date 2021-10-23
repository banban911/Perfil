import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./components/Auth/signup";
import SignIn from "./components/Auth/login";
import NavbarLayout from "./components/layout/NavbarLayout";
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={SignIn} />
        <Route path='/createaccount' component={SignUp} />
        <Route path='/' component={NavbarLayout} />
      </Switch>
    </Router>
  );
}

export default App;
