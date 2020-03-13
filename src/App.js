import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import configureStore from "./store";
import Home from './screen/home/home';
import Transaction from './screen/transaction';
import { Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import history from './history';
import Contest from './screen/contest';

const { store } = configureStore();

class App extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <div className='root-app' >
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Contest">
                <Contest />
              </Route>
              <Route path="/Transaction">
                <Transaction />
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
