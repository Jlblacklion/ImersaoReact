import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './menu.css'

function Menu(){
    return(
        <nav className = "Menu">
            <a href="/"> 
                <img class="Logo" src={Logo} alt="JahFlix Logo" />
            </a>

            <a className="ButtonLink" href="/"> Novo Vídeo

            </a>
        </nav>
    );
};

export default Menu;