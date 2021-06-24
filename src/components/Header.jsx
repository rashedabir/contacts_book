import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <h2>
          <Link to="/">
            <i className="fas fa-address-book"></i> contact app
          </Link>
        </h2>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/create">
              create <i className="fas fa-user-plus"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
