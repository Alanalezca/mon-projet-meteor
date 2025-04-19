import React from 'react';
import { GlobalContextProvider } from "../../client/components/context/contextGlobalSession"
import { ToastProvider  } from "../../client/components/context/contextToast"
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import './../../client/main.css';
import  MenuHeader from './../../client/components/others/MenuHeader';
import  Info from '/imports/ui/Info';
import  News from './../../client/pages/News';


export const AppRoutes = () => {
  return (
    <Router>
      <GlobalContextProvider>
        <ToastProvider>
          <MenuHeader/>
          <Switch>
            <Route path="/" exact component={News} />
            <Route path="/News" exact component={News} />
            <Route path="/info" component={Info} />
          </Switch>
        </ToastProvider>
      </GlobalContextProvider>
    </Router>
  );
};