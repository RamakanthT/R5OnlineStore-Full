import React,{Component} from 'react';
//import logo from './logo.svg';
import {SportsStoreDataStore} from "./data/DataStore";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {ShopConnector} from "./shop/ShopConnector";

//import './App.css';

export default class App extends Component{

  render(){
    return <Provider store={SportsStoreDataStore}>
          <Router>
            <Switch>
              <Route path="/shop" component={ShopConnector}></Route>
              <Redirect to="/shop" />

            </Switch>
          </Router>

      </Provider>
  }

}
