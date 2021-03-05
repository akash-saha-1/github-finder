import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};
UserItem.propType = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
