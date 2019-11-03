import React from 'react';

import logo from './assets/logofacebook.png';

function Header () {
    return (
        <header>
            <nav>
                <img src={logo} />
                <div>
                    <span>Perfil</span>
                    <i className="material-icons">account_circle</i>
                </div>
            </nav>
        </header>
    );
}

export default Header;