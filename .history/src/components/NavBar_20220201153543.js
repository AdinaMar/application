import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Routes from '../Routes.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import logo from '../images/logo2.png';
import '../Navbar.css';
import Contact from './Contact/Contact.js';

const NavBar = () => {

    <div>
        <NavBar />
        <Home />
        <About />
        <Contact />
        </div>
        
    console.log(Routes);
    const[click, setClick] = useState(false);
    
    
    return (
        <header>
<nav className="navbar">
<div className="logo">
        <img src={logo} alt=""></img>
    </div>
   
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      
        {Routes.map((data,index)=>{
            return(
                <li className='nav-item' key={index}> 
                    <Link to={data.route} className="nav-link">{data.name}</Link>
                </li>
            )
        })}
    </ul>
   </nav>
    </header>

    )
    }

    export default NavBar;