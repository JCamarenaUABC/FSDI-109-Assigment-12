import React from "react";
import "./navBar.css"

import {Link} from "react-router-dom";
//import NavBar from './navBar';

//class NavBar extends Component {
 function NavBar() {
    return(
      
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <Link className="navbar-brand" to="/"><i className="fa fa-opera green" aria-hidden="true"></i>rganika</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/catalog">Catalog </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/todo">TodoList </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/about">About </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/cart">Carts </Link>
        </li>
      </ul>
    </div>
  </nav>
      
    );
  }
//}

export default NavBar;
