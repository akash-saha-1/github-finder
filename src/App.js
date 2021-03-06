import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
    githubClientId: "",
    githubClientSecret: "",
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  async componentDidMount() {
    if (process.env.NODE_ENV !== "production") {
      this.setState({ githubClientId: process.env.REACT_APP_GITHUB_CLIENT_ID });
      this.setState({
        githubClientSecret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      });
    } else {
      this.setState({ githubClientId: process.env.REACT_APP_GITHUB_CLIENT_ID });
      this.setState({
        githubClientSecret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
      });
      //githubClientId=process.env.GITHUB_CLIENT_ID;
      //for service provided config variables in environments like netifly/heroku
      //githubClientSecret=process.env.GITHUB_CLIENT_SECRET;
    }
  }

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const { githubClientId, githubClientSecret } = this.state;
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  //get details of single user
  getUser = async (username) => {
    this.setState({ loading: true });
    const { githubClientId, githubClientSecret } = this.state;
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    this.setState({ user: res.data, loading: false });
  };

  //get user all repositories
  getUserRepo = async (username) => {
    this.setState({ loading: true });
    const { githubClientId, githubClientSecret } = this.state;
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}
      &client_secret=${githubClientSecret}`
    );
    this.setState({ repos: res.data, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 4000);
  };

  render() {
    const { users, user, repos, loading } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar tite="Navbar Finder" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                path="/github-finder/"
                exact
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/github-finder/about" component={About} />
              <Route
                exact
                path="/github-finder/user/:username"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                    getUserRepo={this.getUserRepo}
                    repos={repos}
                  />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
