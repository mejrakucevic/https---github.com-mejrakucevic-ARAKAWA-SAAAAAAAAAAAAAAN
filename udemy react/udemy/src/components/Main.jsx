import axios from "axios";
import React, { Component } from "react";
import "../App.css";
import Loading from "./Loading";

class App extends Component {
  constructor(props) {
    super(props);
    //state
    this.state = {
      users: [],
      loading: false,
    };
  }

  getUsers() {
    this.setState({ loading: true });
    axios("https://api.randomuser.me/?nat=US&results=5").then((response) =>
      this.setState({
        users: response.data.results,
        loading: false,
      })
    );
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="users">
        {!this.state.loading ? (
          this.state.users.map((user) => (
            <>
              <div>
                <h3>
                  {user.name.first} {user.name.last}
                </h3>
                <div>{user.email}</div>
                <hr />
              </div>
            </>
          ))
        ) : (
          <Loading message="Loading..." />
        )}
      </div>
    );
  }
}

function Main() {
  return (
    <div>
      <App />
    </div>
  );
}

export default Main;
