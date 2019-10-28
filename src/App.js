import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home'
import SinglePost from './components/post/SinglePost'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="diary-app">
          <Header />
          
          <Switch>
            <Route exact path="/digital-diary" component={Home} />
            <Route exact path="/page/:activepage" component={Home}></Route>
            <Route path="/post/:id" component={SinglePost} />
          </Switch>
          
        </div>
      </BrowserRouter>
    )
  }
}
export default App;