import React from 'react';
import { useState } from 'react';
import './Navbar.scss';
import home from './resources/home-5-64.png';
import menu from './resources/burger-menu.png';
import './HeadPage';
import close from './resources/cross.png';

const Navbar=()=>{
    const [Menu,setMenu]=useState(0);
    const dispMenu=()=>{
        const menuEl=document.getElementById('hiddenMenu');
        if(Menu === 0){
            menuEl.style.display='none';
            document.getElementById('menuImg').src=menu;
            setMenu(1);
        }
        else if(Menu === 1){
            menuEl.style.display='block';
            document.getElementById('menuImg').src=close;
            setMenu(0);
        }
    }
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
                        id='menuImg'
                        onClick={dispMenu}
                        />
            </div>
            
        </div>
    );
}
export default Navbar;