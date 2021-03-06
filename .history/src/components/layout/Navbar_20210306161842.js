import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  // static defaultProps = {
  //   title: "Github Finder",
  //   icon: "fab fa-github",
  // };
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   icon: PropTypes.string.isRequired,
  // };
  return (
    <div>
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon}></i>
          {"  " + title}
        </h1>
        <ul>
          <li>
            <Link to="/github-finder/">Home</Link>
          </li>
          <li>
            <Link to="/github-finder/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
