import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import store from './store/store';
import { Provider } from "react-redux";
import "./global.css"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
