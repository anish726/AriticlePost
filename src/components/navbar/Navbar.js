import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';


const Navbar = () => {
    return (
      <>

  <div className={classes.navbar}>
   
      <div >
   
    
    <Link  to="/"><h3 className={classes.logo}>Articles</h3></Link>
  
    </div>
    <ul className={classes.ulnav}>
    
<li className={classes.list}>
        <Link className="nav-link"  to="/Home">Home</Link>
       
        </li>
        <li>
        <Link className="nav-link" to="/form">Add Artical</Link>
        </li>
        <li>
        <Link className="nav-link" to="/Profile">Profile</Link>
        </li>
        <li>
        <Link className="nav-link " to="Login"  >Login</Link>
        </li>

    </ul>
  </div>

      </>
    )
}

export default Navbar
