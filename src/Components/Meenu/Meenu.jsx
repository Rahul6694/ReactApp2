import React from 'react'
import { Link } from "react-scroll";
//import {NavLink} from "react-router-dom";
 //import {HashLink as Link} from "react-router-hash-link";
const Menu = () => {
  return (
    <div className=''>
        <div className='row'>
            <div className='col-10 mx-auto'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{fontSize:23}}>
  <div className="container-fluid">
    <a smooth className="navbar-brand  " href="/"><img style={{width:"50px"}} alt='' src="/favicon.ico"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav" style={{marginLeft:"auto"}}>
      
        <li className="nav-item">
          <Link className="nav-link" to="Home" smooth={true} duration = {1000}>Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link smooth className="nav-link" to="/Blog">Services</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="About" smooth={true} duration = {100}>About</Link>
        
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Programs" smooth={true} duration = {1000}>Programs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="Contact" smooth={true} duration = {1000}>Contact Us</Link>
        </li>
      </ul>
     
      
    </div>
   
   </div>
  
</nav>
    </div>
    </div>
    </div>
  )
}

export default Menu;