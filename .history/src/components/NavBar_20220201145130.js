import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Routes from '../Routes.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import Contact from './Contact/Contact.js';

const NavBar = () => {

    console.log(Routes);
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    return (
        <header>
<nav className="navbar">
   
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