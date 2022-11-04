import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import './Navbar.css'
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate();
    const goto = () => {
    navigate("/Sign");
    // const navigate = useNavigate();
 
  };
  const log = () => {
    navigate("/Login");
  
};
  

  
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Real</span>Estate</h1>
                <button className='btn' onClick={goto}>Sign In</button>
                <button className='btn' onClick={log}>Login In</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <Link to="/" className='li' ><a href='Home'>Home</a></Link>
                    <Link to="/Search" className='li'><a href='Search'>Search</a></Link>
                    <Link to="/About" className='li'><a href='About'>About</a></Link>
                    <Link to="/Contact" className='li'><a href='Contact'>Contact</a></Link>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
