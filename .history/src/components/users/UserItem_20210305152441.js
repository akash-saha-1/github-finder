import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //api->https://api.github.com/users
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
};
UserItem.propType = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
