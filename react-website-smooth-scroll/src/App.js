import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

/*
import {AuthProvider} from "./contexts/AuthContext";
*/




function App() {
  return (
     /* <AuthProvider> */
    <Router>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signin" component={SigninPage} exact />
        </Switch>
    </Router>
      /*</AuthProvider>*/
  );
}

export default App;
