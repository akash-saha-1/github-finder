import React, { Component } from "react";

class UserItem extends Component {
  //api->https://api.github.com/users
  state = {
    id: "id",
    login: "mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };
  render() {
    const { login, avatar_url, html_url } = this.state;
    return (
      <div className="text-center card">
        <img
          src={avatar_url}
          className="round-img"
          alt={login}
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
