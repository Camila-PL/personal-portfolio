import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/home/logo.png';
export default function Layout() {
return (
<>

 <header className="site-header">
        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
          <h1>My Portfolio</h1>
        </div>
<nav>
<Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/project">Project</Link> | <Link to="/services">Services</Link> | <Link
to="/contact">Contact</Link> 

</nav>
</header>
<br/>
<hr />
</>
);
}