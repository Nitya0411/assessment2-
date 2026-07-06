import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

import "../styles/navbar.css";

function Navbar(){

return(

<nav className="navbar">

<div className="container nav-container">

<h2 className="logo">

StayFinder

</h2>

<div className="nav-links">

<Link to="/">Home</Link>

<Link to="/hotels">Hotels</Link>

<ThemeToggle/>

</div>

</div>

</nav>

)

}

export default Navbar;