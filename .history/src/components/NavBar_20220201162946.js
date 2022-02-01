import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Routes from '../Routes.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import logo from '../images/logo2.png';
import '../Navbar.css';
import Contact from './Contact/Contact.js';

const NavBar = () => {

    <>
        
        <Home />
        <About />
        <Contact />
        
        </>
    console.log(Routes);
    const[click, setClick] = useState(false);
    
    
    return (
        <header>
<nav className="navbar">
<div className="logo">
        <img src={logo} alt=""></img>
    </div>
   
    
      
        {Routes.map((data,index)=>{
            return(
                <li className='navitem' key={index}> 
                    <Link to={data.route} className="navlink">{data.name}</Link>
                </li>
            )
        })}
    
   </nav>
    </header>

    )
    }

    export default NavBar;