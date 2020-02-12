import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Sidebar from 'components/Sidebar';

class App extends Component{
  render(){
    return(
        <Router>
          <div className="layout">
            <Sidebar className="sidebar"/>

            <div className="content">
              <Switch>
                <Route path="/about">
                  <h2> about </h2>
                </Route>
                <Route path="/music">
                  <iframe src="https://open.spotify.com/embed/playlist/0Inenyjaq0U3dyiHcJ8JGF" width="300" height="380"
                          frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </Route>
                <Route path="/books">
                  <h2> books </h2>
                </Route>
                <Route path="/thoughts">
                  <h2> thoughts </h2>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
