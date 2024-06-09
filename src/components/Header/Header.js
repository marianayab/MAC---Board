import React from 'react';
import './Header.css';
import brand from './brnd.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div className='header'>

                <div className='header-logo'>
                    <img src={brand} alt='logo' style={{width:'90px'}}/>
                </div>
                
                <div className='nav-items'>
                    <ul>
                        <Link to={"/"} className='td-none'> <li> Home </li> </Link>
                        <Link to={"/about"} className='td-none'> <li> About </li> </Link>
                        <Link to={"/services"} className='td-none'> <li> Services </li> </Link>
                        <a href='#contact' className='td-none'> <li> Contact </li> </a>
                    </ul>
                </div>



            </div>
        </>
    )
}

export default Header