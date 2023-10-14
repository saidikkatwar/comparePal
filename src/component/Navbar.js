import React from 'react';
import './Navbar.scss';
import home from './resources/home-5-64.png';
import menu from './resources/burger-menu.png';

const Navbar=()=>{

    // const dispMenu=()=>{
        
    // }
    return(
        <div className="nav">
            <a href="#">
                <img src={home} 
                    alt="home" 
                    title="Home"
                    className='Home'
                />
            </a>
            <button type="button">Features</button>
            <button type="button">Support</button>
            <div className="menu">
                <img src={menu}
                        alt='menu'
                        className='menuImg'
                        // onClick={dispMenu}
                        />
            </div>
            
        </div>
    );
}
export default Navbar;