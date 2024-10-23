import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import SignIn from "./pages/Signin/index";
import AddListing from "./pages/AddListing";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import SearchResult from "./pages/SearchResult";
import SearchResult1 from "./pages/SearchResult1";
import AddParking from "./pages/AddParking";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      id: null,
      role: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/").then(response => {
      console.log(response.data);
      if (response.data.user) {
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          id: response.data.user._id,
          role: response.data.user.role
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/addlisting" component={AddListing} />
            <Route exact path="/addparking" component={AddParking} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/searchresult" component={SearchResult} />
            <Route exact path="/searchresult1" component={SearchResult1} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
