import React, { Component } from 'react';
import './style/App.css';
import ListUsers from './containers/login';
import PasswordSend from './containers/passwordRecuperation'
import CreateAccount from './containers/createAccount'
import Home from './containers/home'
import Vacina from './containers/Vacina/index'
import Consulta from './containers/Consulta'
import Exames from './containers/exames'
import Dicas from './containers/Dicas'

import { BrowserRouter, Switch, Route } from 'react-router-dom' 

class App extends Component {
  constructor(props) {
    super(props);        // creates entity

    if (localStorage.getItem('users') == null) {
      fetch("https://private-21e8de-rafaellucio.apiary-mock.com/users", {
        "method": "GET",
      })
        .then(response => response.json())
        .then(response => {
          localStorage.setItem('users', JSON.stringify(response))
        })
        .catch(err => {
          alert(err);
        });
    }
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={ListUsers} />
            <Route path="/password-send" component={PasswordSend} />
            <Route path="/create-account" component={CreateAccount} />
            <Route path="/home" component={Home} />
            <Route path="/vacina" component={Vacina} />
            <Route path="/consulta" component={Consulta} />
            <Route path="/exames" component={Exames} />
            <Route path="/dicas" component={Dicas} />

          </Switch>
        </ BrowserRouter>
      </div>
    );
  }
}

export default App;